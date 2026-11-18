import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = readFileSync(new URL('../src/preset-module.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
let hostWindow: any;
let hostDocument: any;
const context = vm.createContext({
  URL,
  exports: {},
  require: () => ({ getHostDocument: () => hostDocument, getHostWindow: () => hostWindow }),
});
vm.runInContext(compiled, context);
const ensureHost = vm.runInContext('PresetEditor.prototype.ensureHost', context);
const prototype = vm.runInContext('PresetEditor.prototype', context);

test('unchanged operation context remains valid and unreadable data is rejected', () => {
  const pm = {serviceSettings:{}};
  let snapshot = '{"prompts":[]}';
  const warnings: string[] = [];
  const editor = {
    promptManager: pm, destroyed: false, editRevision: 0,
    store: {is_active:true, settings:{modernPresetEditor:true}},
    document: {querySelector: () => ({value:'A'})},
    getOrder: () => [], takeSnapshot: () => snapshot,
    getActiveCharacterTarget: () => ({ id: 1 }), isChatCompletionApi: () => true,
    window: { toastr: { warning: (message: string) => warnings.push(message) } },
  };
  const isCurrent = prototype.captureOperationContext.call(editor);
  assert.equal(isCurrent(), true);
  snapshot = '';
  assert.equal(isCurrent(), false);
  assert.equal(prototype.captureOperationContext.call(editor)(), false);
  assert.equal(warnings.length, 2);
});

for (const operation of ['deleteEntries', 'createGroupFromSelection', 'dissolveGroup']) {
  test(`${operation} cancels when context changes while awaiting confirmation`, async () => {
    for (const change of ['preset', 'data', 'destroy', 'disable', 'order', 'edit', 'target', 'api']) {
      let finish!: (value: any) => void;
      const order = [{ identifier: 'entry', enabled: true }];
      const prompt = { identifier: 'entry', name: 'Original', content: 'Original' };
      const pm = { serviceSettings: { prompts: [prompt], prompt_order: [{ order }] }, isPromptDeletionAllowed: () => true };
      const select = { value: 'A' };
      let commits = 0;
      let target = 1;
      let chatCompletion = true;
      const editor: any = {
        promptManager: pm, destroyed: false, editRevision: 0,
        store: { is_active: true, settings: { modernPresetEditor: true } },
        document: { querySelector: () => select },
        getOrder: () => order, getPrompt: () => prompt,
        getActiveCharacterTarget: () => ({ id: target }), isChatCompletionApi: () => chatCompletion,
        getGroup: () => ({ id: 'group', name: 'Group', identifiers: ['entry'] }),
        takeSnapshot: () => JSON.stringify(pm.serviceSettings), flushEditorApply: () => true,
        confirm: () => new Promise(resolve => { finish = resolve; }),
        askGroupName: () => new Promise(resolve => { finish = resolve; }),
        cleanupGroupData() {}, commit() { commits++; }, rows: [], activeId: null,
        window: {},
      };
      editor.captureOperationContext = () => prototype.captureOperationContext.call(editor);
      const pending = prototype[operation].call(editor, operation === 'dissolveGroup' ? 'group' : ['entry']);
      if (change === 'preset') select.value = 'B';
      if (change === 'data') prompt.content = 'Updated externally';
      if (change === 'destroy') editor.destroyed = true;
      if (change === 'disable') editor.store.settings.modernPresetEditor = false;
      if (change === 'order') order[0].enabled = false;
      if (change === 'edit') editor.editRevision++;
      if (change === 'target') target = 2;
      if (change === 'api') chatCompletion = false;
      finish(operation === 'createGroupFromSelection' ? 'New group' : true);
      await pending;
      assert.equal(commits, 0, change);
      assert.equal(pm.serviceSettings.prompts.length, 1, change);
      assert.equal(pm.serviceSettings.prompt_order[0].order.length, 1, change);
    }
  });
}

test('deletion after an equivalent order refresh detaches built-in prompts from the current list only', async () => {
  const prompt = { identifier: 'main', name: 'Main' };
  const order = [{ identifier: 'main', enabled: true }];
  const current = { character_id: 1, order: [...order] };
  const other = { character_id: 2, order: [...order] };
  const pm = { serviceSettings: { prompts: [prompt], prompt_order: [current, other] }, isPromptDeletionAllowed: () => false };
  let commits = 0;
  const editor = {
    promptManager: pm, editRevision: 0, activeId: null, rows: [], window: {},
    store: { is_active: true, settings: { modernPresetEditor: true } },
    document: { querySelector: () => ({ value: 'A' }) },
    getOrder: () => current.order, getPrompt: () => prompt,
    getActiveCharacterTarget: () => ({ id: 1 }), isChatCompletionApi: () => true,
    takeSnapshot: () => JSON.stringify(pm.serviceSettings), flushEditorApply: () => true,
    async confirm() { current.order = [...current.order]; return true; },
    captureOperationContext: prototype.captureOperationContext,
    cleanupGroupData() {}, commit() { commits++; },
  };
  await prototype.deleteEntries.call(editor, ['main']);
  assert.equal(commits, 1);
  assert.deepEqual(current.order, []);
  assert.deepEqual(other.order, order);
  assert.deepEqual(pm.serviceSettings.prompts, [prompt]);
});

test('API detection requires an explicit Chat Completion signal', () => {
  const elements = new Map<string, object>([['openai_settings', {}], ['openai_api-presets', {}]]);
  const window: any = {};
  const editor = { document: { getElementById: (id: string) => elements.get(id) }, window };
  const isChatCompletion = () => prototype.isChatCompletionApi.call(editor);
  assert.equal(isChatCompletion(), false);
  window.main_api = 'openai';
  assert.equal(isChatCompletion(), true);
  window.SillyTavern = { getContext: () => ({ mainApi: 'textgenerationwebui' }) };
  assert.equal(isChatCompletion(), false);
  elements.set('main_api', { value: 'openai' });
  assert.equal(isChatCompletion(), true);
  elements.set('main_api', { value: 'textgenerationwebui' });
  assert.equal(isChatCompletion(), false);
});

test('failed preset writeback stores a recovery draft and offers a manual copy', () => {
  const handlers = new Map<string, () => void>();
  const prompts: Array<[string, string]> = [];
  const stored = new Map<string, string>();
  const editor = {
    hostEventSource: { on: (event: string, handler: () => void) => handlers.set(event, handler) },
    boundHostEvents: [],
    flushEditorApply: () => false,
    document: { getElementById: () => ({ value: 'Unsaved prompt' }) },
    window: {
      localStorage: { setItem: (key: string, value: string) => stored.set(key, value) },
      prompt: (message: string, draft: string) => prompts.push([message, draft]),
      setTimeout: () => 1,
    },
    selected: new Set(),
    cancelSaveFeedback() {},
  };
  prototype.bindHostEventListeners.call(editor);
  handlers.get('oai_preset_changed_before')!();
  assert.deepEqual(prompts, [['切换前内容写回失败，请复制下方内容；它也会保存在本机浏览器中。', 'Unsaved prompt']]);
  assert.equal(stored.get('th-modern-preset-recovery'), 'Unsaved prompt');
});

test('host preset saves refresh the stored slot without applying the preset again', async () => {
  const presets = [{ content: 'old' }, { content: 'other' }];
  const data = { content: 'new' };
  let finish!: () => void;
  const pm = {};
  const manager = {
    savePreset(name: string, value: unknown, options: { skipUpdate: boolean }) {
      assert.equal(name, 'A');
      assert.equal(value, data);
      assert.equal(options.skipUpdate, true);
      return new Promise<void>(resolve => { finish = resolve; });
    },
    getPresetList: () => ({ presets, preset_names: { A: 0, B: 1 } }),
  };
  hostDocument = { baseURI: '' };
  hostWindow = {
    location: { href: 'https://tavern.example/' },
    Function: () => async (url: string) => {
      if (url === 'https://tavern.example/scripts/openai.js') return { promptManager: pm };
      assert.equal(url, 'https://tavern.example/scripts/preset-manager.js');
      return { getPresetManager: (api: string) => { assert.equal(api, 'openai'); return manager; } };
    },
  };
  const host = await vm.runInContext('loadDefaultHost()', context);
  assert.equal(host.getPromptManager(), pm);
  const saving = host.savePreset('A', data);
  assert.equal(presets[0].content, 'old');
  finish();
  await saving;
  assert.deepEqual(presets, [data, { content: 'other' }]);
});

test('late host loading cannot revive a destroyed preset editor', async () => {
  for (const destroyed of [false, true]) {
    let finish!: (host: object) => void;
    let refreshes = 0;
    const editor = {
      destroyed: false, hostLoading: false, host: undefined as unknown,
      options: { loadHost: () => new Promise<object>(resolve => { finish = resolve; }) },
      resetCleanBaseline() { refreshes++; }, scheduleSync() { refreshes++; },
    };
    ensureHost.call(editor);
    editor.destroyed = destroyed;
    const host = {};
    finish(host);
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(editor.host, destroyed ? undefined : host);
    assert.equal(refreshes, destroyed ? 0 : 2);
    assert.equal(editor.hostLoading, false);
  }
});
