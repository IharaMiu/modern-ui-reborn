import assert from 'node:assert/strict';
import test from 'node:test';
import { buildPromptListSignature, type HostPrompt, type PromptGroupData } from '../src/preset-prompt-model.ts';

test('list signature reflects visible changes without hashing prompt content', () => {
  const order = [{ identifier: 'p1', enabled: true }];
  const groups: PromptGroupData[] = [{ id: 'g1', name: 'Group', identifiers: ['p1'], parentId: null }];
  const prompts: HostPrompt[] = [{ identifier: 'p1', name: 'Name', role: 'system', content: 'original' }];
  const counts: Record<string, number | null> = { p1: 3 };
  const signature = () => buildPromptListSignature(order, groups, prompts, counts, 3, new Map(), '', false);
  const initial = signature();
  prompts[0].content = 'changed';
  assert.equal(signature(), initial);
  prompts[0].name = 'Renamed';
  assert.notEqual(signature(), initial);
  prompts[0].name = 'Name';
  groups[0].parentId = 'parent';
  assert.notEqual(signature(), initial);
  groups[0].parentId = null;
  counts.p1 = 4;
  assert.notEqual(signature(), initial);
});

test('search signature changes when prompt content changes', () => {
  const prompts: HostPrompt[] = [{ identifier: 'p1', name: 'Name', role: 'system', content: 'before' }];
  const signature = () => buildPromptListSignature([{ identifier: 'p1', enabled: true }], [], prompts, {}, 0, new Map(), 'word', false);
  const before = signature();
  prompts[0].content = 'word';
  assert.notEqual(signature(), before);
});
