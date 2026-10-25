import assert from 'node:assert/strict';
import test from 'node:test';
import {
  applySingleSelectConstraint,
  assignToGroup,
  buildPromptList,
  cleanupGroups,
  createGroup,
  ensurePromptGroups,
  findGroupOf,
  getDescendantGroupIds,
  getExclusiveSiblings,
  getGroupChain,
  getGroupPromptIds,
  getPromptGroups,
  insertOrderEntries,
  isGroup,
  moveOrderEntries,
  removeGroup,
  reparentGroup,
  type HostPrompt,
  type PromptGroupData,
  type PromptOrderEntry,
} from '../src/preset-prompt-model.ts';

test('isGroup guards invalid shapes and verifies valid groups', () => {
  assert.equal(isGroup(null), false);
  assert.equal(isGroup(''), false);
  assert.equal(isGroup({}), false);
  assert.equal(isGroup({ id: 'g1' }), false);
  assert.equal(isGroup({ id: 'g1', identifiers: 'not-array' }), false);
  assert.equal(isGroup({ id: 'g1', identifiers: ['p1'] }), true);
});

test('getPromptGroups & ensurePromptGroups handle extensions safely', () => {
  const emptySettings = {};
  assert.deepEqual(getPromptGroups(emptySettings), []);

  const groups = ensurePromptGroups(emptySettings);
  assert.deepEqual(groups, []);
  assert.ok(Array.isArray((emptySettings as any).extensions?.luker?.prompt_groups));

  // ensure existing other luker settings are not wiped
  const settingsWithLuker = {
    extensions: {
      luker: {
        other_config: 123,
      },
    },
  };
  ensurePromptGroups(settingsWithLuker);
  assert.equal((settingsWithLuker.extensions.luker as any).other_config, 123);
  assert.deepEqual(getPromptGroups(settingsWithLuker), []);
});

test('getGroupChain, getDescendantGroupIds, getGroupPromptIds handle hierarchy', () => {
  const groups: PromptGroupData[] = [
    { id: 'g_root', name: 'Root', identifiers: ['r1'], parentId: null },
    { id: 'g_sub1', name: 'Sub1', identifiers: ['s1', 's2'], parentId: 'g_root' },
    { id: 'g_sub2', name: 'Sub2', identifiers: ['s3'], parentId: 'g_sub1' },
    { id: 'g_other', name: 'Other', identifiers: ['o1'], parentId: null },
  ];

  const chain = getGroupChain(groups, 'g_sub2');
  assert.deepEqual(chain.map(g => g.id), ['g_root', 'g_sub1', 'g_sub2']);

  const descendants = getDescendantGroupIds(groups, 'g_root');
  assert.deepEqual(descendants.sort(), ['g_sub1', 'g_sub2'].sort());

  const allPrompts = getGroupPromptIds(groups, 'g_root');
  assert.deepEqual(allPrompts.sort(), ['r1', 's1', 's2', 's3'].sort());

  assert.equal(findGroupOf(groups, 's2')?.id, 'g_sub1');
  assert.equal(findGroupOf(groups, 'unknown'), null);
});

test('buildPromptList generates hierarchical rows with correct depth and continuations', () => {
  const groups: PromptGroupData[] = [
    { id: 'g1', name: 'Group 1', identifiers: ['p1', 'p3'], parentId: null },
  ];
  const order: PromptOrderEntry[] = [
    { identifier: 'p1', enabled: true },
    { identifier: 'p2', enabled: false }, // outside group
    { identifier: 'p3', enabled: true }, // inside g1 again (discontinuous)
  ];
  const prompts: Record<string, HostPrompt> = {
    p1: { identifier: 'p1', name: 'Prompt 1' },
    p2: { identifier: 'p2', name: 'Prompt 2' },
    p3: { identifier: 'p3', name: 'Prompt 3' },
  };

  const list = buildPromptList(order, groups, id => prompts[id] ?? null);

  // Expect:
  // 0: group g1 (continued: false, depth: 0)
  // 1: prompt p1 (depth: 1)
  // 2: prompt p2 (depth: 0)
  // 3: group g1 (continued: true, depth: 0)
  // 4: prompt p3 (depth: 1)
  assert.equal(list.length, 5);
  assert.equal(list[0].kind, 'group');
  assert.equal((list[0] as any).group.id, 'g1');
  assert.equal((list[0] as any).continued, false);

  assert.equal(list[1].kind, 'prompt');
  assert.equal((list[1] as any).identifier, 'p1');
  assert.equal((list[1] as any).depth, 1);

  assert.equal(list[2].kind, 'prompt');
  assert.equal((list[2] as any).identifier, 'p2');
  assert.equal((list[2] as any).depth, 0);

  assert.equal(list[3].kind, 'group');
  assert.equal((list[3] as any).group.id, 'g1');
  assert.equal((list[3] as any).continued, true);

  assert.equal(list[4].kind, 'prompt');
  assert.equal((list[4] as any).identifier, 'p3');
  assert.equal((list[4] as any).depth, 1);
});

test('getExclusiveSiblings and applySingleSelectConstraint enforce single selection', () => {
  const groups: PromptGroupData[] = [
    { id: 'mode_group', name: 'Modes', identifiers: ['mode_a', 'mode_b', 'mode_c'], single_select: true },
    { id: 'normal_group', name: 'Normal', identifiers: ['n1', 'n2'], single_select: false },
  ];

  assert.deepEqual(getExclusiveSiblings(groups, 'mode_a').sort(), ['mode_b', 'mode_c'].sort());
  assert.deepEqual(getExclusiveSiblings(groups, 'n1'), []);

  const order: PromptOrderEntry[] = [
    { identifier: 'mode_a', enabled: false },
    { identifier: 'mode_b', enabled: true },
    { identifier: 'mode_c', enabled: true },
    { identifier: 'n1', enabled: true },
  ];

  // Enable mode_a: mode_b and mode_c should be turned off, n1 unaffected
  const constrained = applySingleSelectConstraint(order, groups, 'mode_a');
  assert.deepEqual(constrained, [
    { identifier: 'mode_a', enabled: false }, // target remains as whatever caller passed before or after
    { identifier: 'mode_b', enabled: false },
    { identifier: 'mode_c', enabled: false },
    { identifier: 'n1', enabled: true },
  ]);
});

test('cleanupGroups removes dead identifiers, broken parent links, and empty groups', () => {
  const groups: PromptGroupData[] = [
    { id: 'g_dead', name: 'Empty', identifiers: ['deleted_prompt'], parentId: null },
    { id: 'g_parent', name: 'Parent', identifiers: [], parentId: 'missing_ancestor' },
    { id: 'g_child', name: 'Child', identifiers: ['live_prompt'], parentId: 'g_parent' },
  ];

  const liveOrderIds = new Set(['live_prompt']);
  cleanupGroups(groups, liveOrderIds);

  // g_dead has no identifiers left and no children -> removed
  // g_parent had missing ancestor -> parentId becomes null
  // g_parent has no identifiers, but has live child g_child -> retained
  // g_child has live_prompt -> retained
  const remainingIds = groups.map(g => g.id);
  assert.ok(!remainingIds.includes('g_dead'));
  assert.ok(remainingIds.includes('g_parent'));
  assert.ok(remainingIds.includes('g_child'));

  const parent = groups.find(g => g.id === 'g_parent')!;
  assert.equal(parent.parentId, null);
});

test('assignToGroup, createGroup, removeGroup operate correctly', () => {
  const groups: PromptGroupData[] = [
    { id: 'g1', name: 'Group 1', identifiers: ['p1', 'p2'] },
  ];

  assignToGroup(groups, ['p2'], null);
  assert.deepEqual(groups[0].identifiers, ['p1']);

  createGroup(groups, { id: 'g2', name: 'Group 2', identifiers: ['p2', 'p3'], parentId: 'g1', single_select: true });
  assert.equal(groups.length, 2);
  assert.equal(groups[1].id, 'g2');
  assert.equal(groups[1].single_select, true);
  assert.deepEqual(groups[1].identifiers, ['p2', 'p3']);

  // Dissolve g2: members go to parent g1
  removeGroup(groups, 'g2');
  assert.equal(groups.length, 1);
  assert.deepEqual(groups[0].identifiers.sort(), ['p1', 'p2', 'p3'].sort());
});

test('reparentGroup guards against circular nesting', () => {
  const groups: PromptGroupData[] = [
    { id: 'root', name: 'Root', identifiers: [], parentId: null },
    { id: 'child', name: 'Child', identifiers: [], parentId: 'root' },
    { id: 'grandchild', name: 'Grandchild', identifiers: [], parentId: 'child' },
  ];

  // Disallow moving root into child or grandchild
  assert.equal(reparentGroup(groups, 'root', 'child'), false);
  assert.equal(reparentGroup(groups, 'root', 'grandchild'), false);
  assert.equal(reparentGroup(groups, 'root', 'root'), false);

  // Allowed moving grandchild to root
  assert.equal(reparentGroup(groups, 'grandchild', 'root'), true);
  assert.equal(groups.find(g => g.id === 'grandchild')?.parentId, 'root');
});

test('moveOrderEntries correctly reorders elements and guards boundaries', () => {
  const order: PromptOrderEntry[] = [
    { identifier: 'a', enabled: true },
    { identifier: 'b', enabled: true },
    { identifier: 'c', enabled: true },
    { identifier: 'd', enabled: true },
  ];

  // Move 'b' after 'd'
  const movedAfter = moveOrderEntries(order, new Set(['b']), 'd', 'after');
  assert.deepEqual(movedAfter?.map(e => e.identifier), ['a', 'c', 'd', 'b']);

  // Move 'd' before 'a'
  const movedBefore = moveOrderEntries(order, new Set(['d']), 'a', 'before');
  assert.deepEqual(movedBefore?.map(e => e.identifier), ['d', 'a', 'b', 'c']);

  // Multiple items: move 'b' and 'c' before 'a'
  const movedMulti = moveOrderEntries(order, new Set(['b', 'c']), 'a', 'before');
  assert.deepEqual(movedMulti?.map(e => e.identifier), ['b', 'c', 'a', 'd']);

  // Guard: targetId in moving set
  assert.equal(moveOrderEntries(order, new Set(['b']), 'b', 'before'), null);

  // Guard: targetId not in order
  assert.equal(moveOrderEntries(order, new Set(['b']), 'non_existent', 'before'), null);

  // Guard: moving nothing / no change
  assert.equal(moveOrderEntries(order, new Set(), 'a', 'before'), null);
});

test('insertOrderEntries handles anchors and fallbacks', () => {
  const order: PromptOrderEntry[] = [
    { identifier: 'a', enabled: true },
    { identifier: 'b', enabled: true },
  ];
  const newEntries: PromptOrderEntry[] = [
    { identifier: 'x', enabled: false },
  ];

  // Insert after 'a'
  const afterA = insertOrderEntries(order, newEntries, 'a');
  assert.deepEqual(afterA.map(e => e.identifier), ['a', 'x', 'b']);

  // Insert with null anchor -> append to end
  const appendEnd = insertOrderEntries(order, newEntries, null);
  assert.deepEqual(appendEnd.map(e => e.identifier), ['a', 'b', 'x']);
});

