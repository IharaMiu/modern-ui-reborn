import assert from 'node:assert/strict';
import test from 'node:test';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

test('extension ordering reads each computed order once and keeps equal orders stable', () => {
  const source = readFileSync(new URL('../src/extension-settings-module.ts', import.meta.url), 'utf8');
  const ast = ts.createSourceFile('extension.ts', source, ts.ScriptTarget.Latest, true);
  let fn: ts.Node | undefined;
  const visit = (node: ts.Node) => {
    if (ts.isFunctionDeclaration(node) && node.name?.text === 'getOrderedChildren') fn = node;
    ts.forEachChild(node, visit);
  };
  visit(ast);
  let reads = 0;
  const context = vm.createContext({hostWindow:{getComputedStyle(node: {order: number}) { reads++; return {order:String(node.order)}; }}});
  vm.runInContext(ts.transpileModule(fn!.getText(ast), {compilerOptions:{target:ts.ScriptTarget.ES2022}}).outputText, context);
  const sort = vm.runInContext('getOrderedChildren', context);
  const children = Array.from({length:100}, (_, id) => ({id, order:(id * 7) % 13 - 6}));
  assert.deepEqual(Array.from(sort({children})), [...children].sort((a,b) => a.order-b.order));
  assert.equal(reads, children.length);
});
