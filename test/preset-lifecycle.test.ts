import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = readFileSync(new URL('../src/preset-module.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
const context = vm.createContext({ exports: {}, require: () => ({}) });
vm.runInContext(compiled, context);
const ensureHost = vm.runInContext('PresetEditor.prototype.ensureHost', context);
const prototype = vm.runInContext('PresetEditor.prototype', context);

test('unchanged operation context remains valid and unreadable data is rejected', () => {
  const order: unknown[] = [];
  const pm = {serviceSettings:{}};
  let snapshot = '{"prompts":[]}';
  const editor = {
    promptManager: pm, destroyed: false, editRevision: 0,
    store: {is_active:true, settings:{modernPresetEditor:true}},
    document: {querySelector: () => ({value:'A'})},
    getOrder: () => order, takeSnapshot: () => snapshot,
  };
  const isCurrent = prototype.captureOperationContext.call(editor);
  assert.equal(isCurrent(), true);
  snapshot = '';
  assert.equal(isCurrent(), false);
  assert.equal(prototype.captureOperationContext.call(editor)(), false);
});

for (const operation of ['deleteEntries', 'createGroupFromSelection', 'dissolveGroup']) {
  test(`${operation} cancels when context changes while awaiting confirmation`, async () => {
    for (const change of ['preset', 'data', 'destroy', 'disable', 'order', 'edit']) {
      let finish!: (value: any) => void;
      let order = [{ identifier: 'entry', enabled: true }];
      const prompt = { identifier: 'entry', name: 'Original', content: 'Original' };
      const pm = { serviceSettings: { prompts: [prompt], prompt_order: [{ order }] }, isPromptDeletionAllowed: () => true };
      const select = { value: 'A' };
      let commits = 0;
      const editor: any = {
        promptManager: pm, destroyed: false, editRevision: 0,
        store: { is_active: true, settings: { modernPresetEditor: true } },
        document: { querySelector: () => select },
        getOrder: () => order, getPrompt: () => prompt,
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
      if (change === 'order') order = [...order];
      if (change === 'edit') editor.editRevision++;
      finish(operation === 'createGroupFromSelection' ? 'New group' : true);
      await pending;
      assert.equal(commits, 0, change);
      assert.equal(pm.serviceSettings.prompts.length, 1, change);
      assert.equal(pm.serviceSettings.prompt_order[0].order.length, 1, change);
    }
  });
}

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
