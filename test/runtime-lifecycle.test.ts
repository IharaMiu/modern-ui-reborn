import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = readFileSync(new URL('../src/index.ts', import.meta.url), 'utf8');
const ast = ts.createSourceFile('index.ts', source, ts.ScriptTarget.Latest, true);
const initialize = ast.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === 'initializeModernLayout')!.getText(ast);
const compile = (code: string) => ts.transpileModule(code, {compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText;

test('runtime teardown and failed initialization dispose the cached settings store', () => {
  for (const fail of [false, true]) {
    let cached: any;
    const stores: any[] = [];
    const host = {addEventListener() {}, removeEventListener() {}};
    const registry = new Map();
    const context = vm.createContext({
      window: host, getHostWindow: () => host, getRuntimeRegistry: () => registry,
      LEGACY_RUNTIME_DISPOSE_PATH: 'legacy',
      _: {get: () => undefined, unset() {}, once: (fn: Function) => { let called = false; return (...args: any[]) => { if (!called) { called = true; return fn(...args); } }; }},
      getActivePinia: () => ({}), setActivePinia() {},
      useModernLayoutStore: () => cached ??= (() => {
        const store = {is_active:true, destroyed:false, disposed:false,
          destroy() { this.destroyed = true; },
          $dispose() { this.disposed = true; cached = undefined; },
        }; stores.push(store); return store;
      })(),
      initPanel: () => { if (fail) throw new Error('mount failed'); return {destroy() {}}; },
      mountActiveRuntime: () => ({destroy() {}}),
      watch: (_read: unknown, sync: Function) => { sync(); return () => {}; },
      runCleanup: (fn?: Function) => fn?.(),
    });
    vm.runInContext(compile(initialize), context);
    for (let i = 0; i < 2; i++) {
      if (fail) assert.throws(() => vm.runInContext('initializeModernLayout()', context), /mount failed/);
      else vm.runInContext('initializeModernLayout().dispose()', context);
      assert.equal(stores[i].destroyed, true);
      assert.equal(stores[i].disposed, true);
    }
    assert.notEqual(stores[0], stores[1]);
  }
});

test('automatic startup reports rejected activation promises', async () => {
  const auto = source.slice(source.indexOf('// Auto-activate'), source.indexOf('export default'));
  const errors: unknown[] = [];
  const context = vm.createContext({$: (ready: Function) => ready(), SCRIPT_NAME: 'test',
    activate: async () => { throw new Error('startup failed'); },
    console: {error: (...args: unknown[]) => errors.push(args)},
  });
  vm.runInContext(compile(auto), context);
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(errors.length, 1);
});

test('recent chats coalesce message events until generation ends', () => {
  const body = { dataset: {} as { generating?: string } };
  const listeners = new Map<string, () => void>();
  let scheduled: (() => void) | undefined;
  let onMutation: (() => void) | undefined;
  let refreshes = 0;
  const context = vm.createContext({
    tavern_events: Object.fromEntries(['APP_READY', 'CHAT_CHANGED', 'CHAT_CREATED', 'CHAT_DELETED',
      'CHARACTER_PAGE_LOADED', 'MESSAGE_SENT', 'MESSAGE_RECEIVED'].map(key => [key, key])),
    getHostDocument: () => ({ body }),
    getHostWindow: () => ({
      MutationObserver: class {
        constructor(callback: () => void) { onMutation = callback; }
        observe() {}
        disconnect() { onMutation = undefined; }
      },
    }),
    eventOn: (event: string, listener: () => void) => {
      listeners.set(event, listener);
      return { stop: () => listeners.delete(event) };
    },
    _: { debounce: (callback: () => void) => Object.assign(() => { scheduled = callback; }, {
      cancel: () => { scheduled = undefined; },
    }) },
    refresh: () => { refreshes++; },
  });
  const fn = ast.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === 'watchRecentChatChanges')!;
  vm.runInContext(compile(fn.getText(ast)), context);
  const stop = vm.runInContext('watchRecentChatChanges(refresh)', context) as () => void;
  const tick = () => {
    const pending = scheduled;
    scheduled = undefined;
    pending?.();
  };
  tick();
  assert.equal(refreshes, 1);

  body.dataset.generating = 'true';
  listeners.get('MESSAGE_SENT')!();
  tick();
  assert.equal(refreshes, 1, 'sending during generation does not request the recent list');
  listeners.get('MESSAGE_RECEIVED')!();
  delete body.dataset.generating;
  onMutation!();
  tick();
  assert.equal(refreshes, 2, 'sending and receiving produce a single request');

  listeners.get('MESSAGE_SENT')!();
  tick();
  assert.equal(refreshes, 3, 'send without generation still refreshes');
  body.dataset.generating = 'true';
  listeners.get('MESSAGE_SENT')!();
  listeners.get('CHAT_DELETED')!();
  tick();
  assert.equal(refreshes, 4, 'chat deletion refreshes during generation');
  delete body.dataset.generating;
  onMutation!();
  tick();
  assert.equal(refreshes, 5, 'stopped generation refreshes the sent message');

  listeners.get('CHAT_CHANGED')!();
  stop();
  tick();
  assert.equal(refreshes, 5);
  assert.equal(listeners.size, 0);
  assert.equal(onMutation, undefined);
});

test('recent chats preserve existing rows during a background request and failure', async () => {
  const requests: Array<{ resolve: (value: string[]) => void; reject: (reason: Error) => void }> = [];
  const rows: string[] = [];
  const list = {
    attr() { return this; },
    removeAttr() { return this; },
    toggleClass() { return this; },
    find() { return { prop() {} }; },
    append(row: string) { rows.push(row); return this; },
    empty() { rows.length = 0; return this; },
  };
  const context = vm.createContext({
    list, AbortController,
    createHostNavigationBridge: () => ({ destroy() {} }),
    renderRecentLoading: () => list.empty().append('loading'),
    createRecentChatElement: (name: string) => name,
    fetchRecentChats: () => new Promise<string[]>((resolve, reject) => requests.push({ resolve, reject })),
    isAbortError: () => false,
  });
  const fn = ast.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === 'mountRecentChats')!;
  vm.runInContext(compile(fn.getText(ast)), context);
  const recent = vm.runInContext('mountRecentChats(list)', context);
  recent.refresh();
  assert.deepEqual(rows, ['loading']);
  requests[0].resolve(['first']);
  await Promise.resolve();
  recent.refresh();
  assert.deepEqual(rows, ['first']);
  requests[1].reject(new Error('failed'));
  await Promise.resolve();
  await Promise.resolve();
  assert.deepEqual(rows, ['first']);
  recent.refresh();
  requests[2].resolve(['second']);
  await Promise.resolve();
  assert.deepEqual(rows, ['second']);
  recent.destroy();
});
