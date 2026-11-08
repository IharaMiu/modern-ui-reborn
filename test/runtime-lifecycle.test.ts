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
