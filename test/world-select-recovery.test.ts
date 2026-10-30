import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = readFileSync(new URL('../src/mobile-world-select-module.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const context = vm.createContext({ exports: {}, require: () => ({}) });
vm.runInContext(compiled, context);
const sync = vm.runInContext('MobileWorldSelectController.prototype.syncSelect2Container', context);

test('restores missing or moved world selector buttons without a refresh loop', () => {
  const wrapper = {};
  let moves = 0;
  let modeUpdates = 0;
  const anchor = {
    nextElementSibling: null as unknown,
    insertAdjacentElement(position: string, node: unknown) {
      assert.equal(position, 'afterend');
      assert.equal(node, wrapper);
      this.nextElementSibling = node;
      moves++;
    },
    classList: { add() {}, remove() {} },
  };
  const controller = {
    source: anchor, wrapper, select2Container: undefined as unknown,
    findSelect2Container: () => undefined as unknown,
    setNativeMode() { modeUpdates++; },
  };
  sync.call(controller);
  assert.equal(moves, 1);
  sync.call(controller);
  assert.equal(moves, 1);
  anchor.nextElementSibling = {};
  sync.call(controller);
  assert.equal(moves, 2);
  controller.findSelect2Container = () => anchor;
  sync.call(controller);
  assert.equal(modeUpdates, 1);
  anchor.nextElementSibling = null;
  sync.call(controller);
  assert.equal(moves, 3);
  assert.equal(modeUpdates, 1);
});
