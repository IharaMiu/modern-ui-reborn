export type PromptOrderEntry = {
  identifier: string;
  enabled: boolean;
};

export type HostPrompt = {
  identifier: string;
  name?: string;
  role?: string;
  content?: string;
  system_prompt?: boolean;
  marker?: boolean;
  injection_position?: number;
  injection_depth?: number;
  [key: string]: unknown;
};

/** 与 Luker 的 `extensions.luker.prompt_groups` 相同的结构；`single_select` 是现代化界面附加的字段。 */
export type PromptGroupData = {
  id: string;
  name: string;
  collapsed?: boolean;
  identifiers: string[];
  parentId?: string | null;
  single_select?: boolean;
  [key: string]: unknown;
};

export type PromptGroupSettings = {
  extensions?: {
    luker?: {
      prompt_groups?: unknown;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
};

export type GroupRow = {
  kind: 'group';
  group: PromptGroupData;
  depth: number;
  /** 组成员不连续时，后续片段再次出现的标题。 */
  continued: boolean;
  /** 祖先组 id，外层在前。 */
  ancestors: string[];
};

export type PromptRow = {
  kind: 'prompt';
  identifier: string;
  enabled: boolean;
  prompt: HostPrompt | null;
  groupId: string | null;
  depth: number;
  ancestors: string[];
};

export type ListRow = GroupRow | PromptRow;

/** 与列表展示相关的数据签名，不包含可能很大的提示词正文。 */
export function buildPromptListSignature(
  order: readonly PromptOrderEntry[], groups: readonly PromptGroupData[], prompts: readonly HostPrompt[],
  counts: Record<string, number | null | undefined>, tokenUsage: number | undefined,
  collapsed: ReadonlyMap<string, boolean>, search: string, onlyEnabled: boolean,
): string {
  return JSON.stringify({
    order: order.map(({ identifier, enabled }) => [identifier, !!enabled]),
    groups: groups.map(g => [g.id, g.name, g.parentId ?? null, g.identifiers, !!g.single_select]),
    prompts: prompts.map(p => [p.identifier, p.name, p.role, !!p.marker, !!p.system_prompt, p.injection_position, p.injection_depth, search ? p.content : undefined]),
    counts: Object.entries(counts).sort(([a], [b]) => a.localeCompare(b)), tokenUsage,
    collapsed: [...collapsed.entries()], search, onlyEnabled,
  });
}

export function isGroup(value: unknown): value is PromptGroupData {
  if (!value || typeof value !== 'object') return false;
  const group = value as Partial<PromptGroupData>;
  return typeof group.id === 'string' && Array.isArray(group.identifiers);
}

export function getPromptGroups(settings: PromptGroupSettings): PromptGroupData[] {
  const groups = settings.extensions?.luker?.prompt_groups;
  return Array.isArray(groups) ? groups.filter(isGroup) : [];
}

/** 写入前确保 `extensions.luker.prompt_groups` 存在，并保留 Luker 的其它扩展数据。 */
export function ensurePromptGroups(settings: PromptGroupSettings): PromptGroupData[] {
  const extensions = (settings.extensions ??= {});
  const luker = (extensions.luker ??= {});
  if (!Array.isArray(luker.prompt_groups)) luker.prompt_groups = [];
  return luker.prompt_groups as PromptGroupData[];
}

/** 外层在前的祖先链，含自身。 */
export function getGroupChain(groups: readonly PromptGroupData[], groupId: string): PromptGroupData[] {
  const byId = new Map(groups.map(group => [group.id, group]));
  const chain: PromptGroupData[] = [];
  let current = byId.get(groupId);
  while (current && !chain.includes(current) && chain.length < 100) {
    chain.unshift(current);
    current = current.parentId ? byId.get(current.parentId) : undefined;
  }
  return chain;
}

export function getDescendantGroupIds(groups: readonly PromptGroupData[], groupId: string): string[] {
  const result: string[] = [];
  const visit = (id: string) => {
    for (const child of groups) {
      if (child.parentId === id && !result.includes(child.id) && child.id !== groupId) {
        result.push(child.id);
        visit(child.id);
      }
    }
  };
  visit(groupId);
  return result;
}

/** 组内全部条目，包括子组里的。 */
export function getGroupPromptIds(groups: readonly PromptGroupData[], groupId: string): string[] {
  const ids = new Set<string>();
  for (const id of [groupId, ...getDescendantGroupIds(groups, groupId)]) {
    groups.find(group => group.id === id)?.identifiers.forEach(identifier => ids.add(identifier));
  }
  return [...ids];
}

export function findGroupOf(groups: readonly PromptGroupData[], identifier: string): PromptGroupData | null {
  return groups.find(group => group.identifiers.includes(identifier)) ?? null;
}

/** 按真实发送顺序排列；组标题出现在组内第一个条目之前。 */
export function buildPromptList(
  order: readonly PromptOrderEntry[],
  groups: readonly PromptGroupData[],
  getPrompt: (identifier: string) => HostPrompt | null,
): ListRow[] {
  const rows: ListRow[] = [];
  const seen = new Set<string>();
  let open: PromptGroupData[] = [];

  for (const entry of order) {
    const owner = findGroupOf(groups, entry.identifier);
    const chain = owner ? getGroupChain(groups, owner.id) : [];
    let keep = 0;
    while (keep < open.length && keep < chain.length && open[keep] === chain[keep]) keep += 1;
    open = open.slice(0, keep);
    for (let index = keep; index < chain.length; index += 1) {
      const group = chain[index];
      rows.push({
        kind: 'group',
        group,
        depth: index,
        continued: seen.has(group.id),
        ancestors: chain.slice(0, index).map(item => item.id),
      });
      seen.add(group.id);
      open.push(group);
    }
    rows.push({
      kind: 'prompt',
      identifier: entry.identifier,
      enabled: entry.enabled,
      prompt: getPrompt(entry.identifier),
      groupId: owner?.id ?? null,
      depth: chain.length,
      ancestors: chain.map(group => group.id),
    });
  }
  return rows;
}

/** 单选组开启某个条目时，返回需要一并关闭的同组条目。 */
export function getExclusiveSiblings(groups: readonly PromptGroupData[], identifier: string): string[] {
  const group = findGroupOf(groups, identifier);
  return group?.single_select ? group.identifiers.filter(item => item !== identifier) : [];
}

/** 单选互斥组约束应用：开启 targetIdentifier 时，自动将同单选组内其它成员置为 false */
export function applySingleSelectConstraint(
  order: readonly PromptOrderEntry[],
  groups: readonly PromptGroupData[],
  targetIdentifier: string,
): PromptOrderEntry[] {
  const siblingIds = new Set(getExclusiveSiblings(groups, targetIdentifier));
  if (!siblingIds.size) return [...order];

  return order.map(entry => {
    if (siblingIds.has(entry.identifier)) {
      return { ...entry, enabled: false };
    }
    return entry;
  });
}

/** 与 Luker 的 validateGroups 一致：去掉不在排序里的条目、断开失效的父组、移除空组。 */
export function cleanupGroups(groups: PromptGroupData[], orderIds: ReadonlySet<string>): void {
  for (const group of groups) {
    group.identifiers = group.identifiers.filter(identifier => orderIds.has(identifier));
  }
  let changed = true;
  while (changed) {
    changed = false;
    const ids = new Set(groups.map(group => group.id));
    for (let index = groups.length - 1; index >= 0; index -= 1) {
      const group = groups[index];
      if (group.parentId && !ids.has(group.parentId)) group.parentId = null;
      const hasChildren = groups.some(child => child.parentId === group.id);
      if (!group.identifiers.length && !hasChildren) {
        groups.splice(index, 1);
        changed = true;
      }
    }
  }
}

export function assignToGroup(groups: PromptGroupData[], identifiers: readonly string[], groupId: string | null): void {
  const moving = new Set(identifiers);
  for (const group of groups) {
    group.identifiers = group.identifiers.filter(identifier => !moving.has(identifier));
  }
  const target = groupId ? groups.find(group => group.id === groupId) : undefined;
  target?.identifiers.push(...identifiers);
}

export function createGroup(
  groups: PromptGroupData[],
  options: { id: string; name: string; identifiers: string[]; parentId: string | null; single_select?: boolean },
): PromptGroupData {
  assignToGroup(groups, options.identifiers, null);
  const group: PromptGroupData = {
    id: options.id,
    name: options.name,
    collapsed: false,
    identifiers: [...options.identifiers],
    parentId: options.parentId,
    single_select: !!options.single_select,
  };
  groups.push(group);
  return group;
}

/** 解散分组：条目和子组归入上一级。 */
export function removeGroup(groups: PromptGroupData[], groupId: string): void {
  const index = groups.findIndex(group => group.id === groupId);
  if (index === -1) return;
  const [removed] = groups.splice(index, 1);
  const parentId = removed.parentId ?? null;
  for (const group of groups) {
    if (group.parentId === groupId) group.parentId = parentId;
  }
  const parent = parentId ? groups.find(group => group.id === parentId) : undefined;
  parent?.identifiers.push(...removed.identifiers);
}

/** 移动整组到新的父组；不允许移到自己的子孙里。 */
export function reparentGroup(groups: PromptGroupData[], groupId: string, parentId: string | null): boolean {
  if (parentId === groupId || (parentId && getDescendantGroupIds(groups, groupId).includes(parentId))) return false;
  const group = groups.find(item => item.id === groupId);
  if (!group) return false;
  group.parentId = parentId;
  return true;
}

export function moveOrderEntries(
  order: readonly PromptOrderEntry[],
  moving: ReadonlySet<string>,
  targetId: string,
  placement: 'before' | 'after',
): PromptOrderEntry[] | null {
  if (moving.has(targetId) || !order.some(entry => entry.identifier === targetId)) {
    return null;
  }

  const moved = order.filter(entry => moving.has(entry.identifier));
  if (!moved.length) {
    return null;
  }
  const rest = order.filter(entry => !moving.has(entry.identifier));
  const targetIndex = rest.findIndex(entry => entry.identifier === targetId);
  const insertAt = placement === 'before' ? targetIndex : targetIndex + 1;
  const next = [...rest.slice(0, insertAt), ...moved, ...rest.slice(insertAt)];
  return next.every((entry, index) => entry === order[index]) ? null : next;
}

/** 将选中的条目整体向相邻条目移动，保持其内部顺序。 */
export function moveOrderEntriesOneStep(
  order: readonly PromptOrderEntry[], moving: ReadonlySet<string>, direction: -1 | 1,
): PromptOrderEntry[] | null {
  const indexes = order.flatMap((entry, index) => moving.has(entry.identifier) ? [index] : []);
  if (!indexes.length) return null;
  const boundary = direction === -1 ? indexes[0] : indexes[indexes.length - 1];
  const neighbor = order[boundary + direction];
  return neighbor ? moveOrderEntries(order, moving, neighbor.identifier, direction === -1 ? 'before' : 'after') : null;
}

export function insertOrderEntries(
  order: readonly PromptOrderEntry[],
  entries: readonly PromptOrderEntry[],
  anchorId: string | null,
): PromptOrderEntry[] {
  const anchorIndex = anchorId ? order.findIndex(entry => entry.identifier === anchorId) : -1;
  const insertAt = anchorIndex === -1 ? order.length : anchorIndex + 1;
  return [...order.slice(0, insertAt), ...entries, ...order.slice(insertAt)];
}

