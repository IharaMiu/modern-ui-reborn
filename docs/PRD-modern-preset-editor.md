# PRD：Modern Preset Editor（现代化预设编辑器）

| 项 | 内容 |
| --- | --- |
| 状态 | 规范定稿 v3（实现就绪） |
| 目标仓库 | `modern-ui-reborn`（SillyTavern / TauriTavern 扩展，Vite + Vue 3 + Pinia） |
| 参考实现 | `../现代化界面源码/`（原版 JS-Slash-Runner 脚本） |
| 目的 | 将原版「现代化预设界面」无损、无 bug 迁移为 reborn 的原生模块，提供完备的技术规格与实施标准 |

**硬性约束**
- 严禁触碰 `D:/IharaMiu/Documents/TauriTavern` 生产实例（包括其所有子目录与文件）。
- 开发与测试仅限 `modern-ui-reborn/` 及测试实例（`SillyTavern/STData/新实例`、`新实例 (2)` 下的 `extensions/modern-ui-reborn`）。
- 不引入外部 CDN，不依赖 JS-Slash-Runner 全局（`_`、`getPreset`、`getLoadedPresetName`）。
- 保持宿主环境与原生 UI 的完全兼容性，关闭开关或卸载时 100% 恢复原生 DOM，零副作用。

---

## 1. 目标与非目标

### 1.1 目标
在 reborn 中提供与原版体验高度对齐、高可靠且零回归的提示词预设编辑器：

1. **工具栏与标签页**：原生预设选择器接管、参数/提示词/高级三标签页切换、脏状态实时指示器与保存按钮。
2. **提示词列表视图**：分组树状视图、递归深度缩进、实时搜索（匹配名称与正文）、仅显示启用筛选、多选与批量操作、指针拖拽排序与跨组转移。
3. **Luker 分组协议兼容**：与 Luker 的 `prompt_groups` 规范双向兼容，支持组嵌套、组折叠（记忆持久化）以及单选互斥组（`single_select`）。
4. **原生表单复用与即时响应**：复用原生条目编辑表单与消息预览视图，提供 400ms 防抖更新与切换条目/保存前的强制即时落盘（`flush`）。
5. **未加入列表条目管理**：清晰展示并管理存在于预设中但未进入当前角色排序链的提示词条目。
6. **窄屏自适应（< 640px）**：移动端/窄屏单窗格视图切换，带平滑返回。
7. **完整生命周期还原（Teardown）**：关闭开关或扩展销毁时，所有被移动的原生 DOM 节点 100% 归位，清理所有监听器、定时器、Observer 与临时类名。

### 1.2 非目标
- 不改写或替代 SillyTavern 核心的预设存储结构与网络保存流程（保存必须走原生 `#update_oai_preset` 流程）。
- 不克隆或重写原生编辑表单字段控件，严格采用 DOM 节点就地移动（Move & Restore）。
- 不引入 lodash、jQuery（模块内部逻辑）、jsdom 等冗余新依赖。
- 不做跨设备的折叠状态云同步（折叠状态属于本地视口偏好，存本地 LocalStorage）。

---

## 2. 优先级分层与演进路径

| 层级 | 范围 | 出口验收标准 |
| --- | --- | --- |
| **P0（发布级最小闭环）** | 1. `store.ts` 与 `Panel.vue` 开关持久化<br>2. 工具栏接管与三标签页切换<br>3. 提示词顺序列表渲染与启闭切换<br>4. 原生编辑表单就地复用与输入防抖写回<br>5. 确定性脏状态检测（快照对比）与保存联动<br>6. 100% 无损 Teardown 恢复机制 | 达到后可平稳接管预设编辑核心主路径，开关往返 20 次原生 DOM 无损且无泄漏 |
| **P1（完整用户体验）** | 1. Luker 分组读写、新建组、解散组、重命名<br>2. 单选互斥组（`single_select`）联动关闭逻辑<br>3. 本地折叠记忆（`localStorage`）<br>4. 关键词搜索（名称+内容）与「仅显示启用」筛选<br>5. 多选（Shift/Ctrl/长按）与批量启用/停用/建组/复制/删除<br>6. 稳健指针拖拽（排序、进组、出组、循环引用防御）<br>7. 窄屏单窗格（< 640px）切换流转 | 对齐原版完整功能，手势操作与快捷操作均稳定可靠 |
| **P2（打磨与边界增强）** | 1. 「未加入列表」条目抽屉与一键添加<br>2. Token 统计自适应显示（缺失能力时降级隐藏）<br>3. 消息预览视图（Inspect Form）无缝嵌入与刷新<br>4. 拖拽边缘自动滚动（Auto-scroll）与长按振动反馈<br>5. 窗口失焦、VisibilityChange 与 iframe 拖拽防御 | 极端边界与特殊宿主环境下均无报错、体验细腻 |

---

## 3. 架构决策记录 (ADR)

### ADR-1：图标体系标准化（Font Awesome 6 映射）
- **背景**：原版使用 Bootstrap Icons（`bi-*`），但 reborn 坚持不引入外部字体包，且 SillyTavern 原生已全局加载 Font Awesome 6 Free。
- **决策**：创建统一的 `makeFaIcon(doc, name)` 辅助方法，将所有图标完全映射为 `fa-solid fa-*` 或 `fa-regular fa-*`。
- **映射对照表**：
  | 原版 Bootstrap Icon | SillyTavern Font Awesome 对应类名 | 语义说明 |
  | --- | --- | --- |
  | `bi-arrow-clockwise` | `fa-solid fa-rotate` | 刷新预览内容 |
  | `bi-arrow-counterclockwise` | `fa-solid fa-arrow-rotate-left` | 重置角色排序 |
  | `bi-arrow-left` | `fa-solid fa-arrow-left` | 窄屏返回列表 |
  | `bi-box-arrow-in-down` | `fa-solid fa-file-import` | 导入条目 |
  | `bi-box-arrow-right` | `fa-solid fa-arrow-right-from-bracket` | 移出当前排序列表 |
  | `bi-box-arrow-up` | `fa-solid fa-file-export` | 导出条目 |
  | `bi-check2-square` | `fa-solid fa-square-check` | 进入多选模式 |
  | `bi-check-all` | `fa-solid fa-check-double` | 全选可见条目 |
  | `bi-check-lg` | `fa-solid fa-check` | 确认 / 勾选 |
  | `bi-chevron-down` | `fa-solid fa-chevron-down` | 分组展开指示 |
  | `bi-chevron-right` | `fa-solid fa-chevron-right` | 分组折叠指示 |
  | `bi-files` | `fa-solid fa-copy` | 复制条目 |
  | `bi-folder` | `fa-solid fa-folder` | 文件夹（折叠） |
  | `bi-folder2-open` | `fa-solid fa-folder-open` | 文件夹（展开） |
  | `bi-folder-plus` | `fa-solid fa-folder-plus` | 新建 / 归入分组 |
  | `bi-folder-x` | `fa-solid fa-folder-minus` | 解散分组 |
  | `bi-grip-vertical` | `fa-solid fa-grip-vertical` | 拖拽手柄 |
  | `bi-pin-angle-fill` | `fa-solid fa-thumbtack` | 置顶状态 |
  | `bi-plus-lg` | `fa-solid fa-plus` | 新增条目 |
  | `bi-search` | `fa-solid fa-magnifying-glass` | 搜索条目 |
  | `bi-three-dots` | `fa-solid fa-ellipsis` | 更多操作菜单 |
  | `bi-toggle-off` | `fa-solid fa-toggle-off` | 批量停用 |
  | `bi-toggle-on` | `fa-solid fa-toggle-on` | 批量启用 |
  | `bi-trash3` | `fa-solid fa-trash-can` | 删除条目 |
  | `bi-x-lg` | `fa-solid fa-xmark` | 关闭 / 取消选择 |

### ADR-2：宿主 `promptManager` 实时加载与环境解耦
- **背景**：SillyTavern 的 `public/scripts/openai.js` 导出了 `export let promptManager = null;`。在现代前端 ES 模块机制中，命名空间具有实时绑定（live-binding）特性。
- **决策**：
  1. 通过 `new URL('scripts/openai.js', hostDocument.baseURI || hostWindow.location.href)` 动态 `import()` 取得模块引用；
  2. 暴露 `getPromptManager: () => module.promptManager ?? hostWindow.promptManager ?? null`；
  3. 切换 API 或模型重新构建 `promptManager` 实例时，由于 live binding 无需重新加载模块即可自动获取最新实例；
  4. 绝不依赖任何 Slash Runner 的 `getPreset()` 等全局魔法。

### ADR-3：Luker 分组协议的单一事实来源（Single Source of Truth）
- **背景**：历史代码中曾混淆 `extension_settings.luker` 与预设内部的 `serviceSettings.extensions.luker`。
- **决策**：
  1. 提示词分组信息随预设一同保存与分发，唯一正确持久化路径是：`promptManager.serviceSettings.extensions.luker.prompt_groups`（类型为 `PromptGroupData[]`）；
  2. 严禁改动或覆盖 `extensions.luker` 下除 `prompt_groups` 之外的其他字段；
  3. 写入前使用 `ensurePromptGroups` 进行防御性空值初始化；
  4. 每次变更后均通过 `cleanupGroups` 清理幽灵条目与孤立父子引用。

### ADR-4：确定性快照脏检测（Canonical JSON vs. 盲目轮询）
- **背景**：原版使用 `_.isEqual(getPreset('in_use'), getPreset(name))`，对 Slash Runner 存在严重耦合，且极易因对象属性顺序不同或无关时间戳更新造成误报。
- **决策**：
  1. 提取核心受控数据切片：
     ```ts
     type PresetSnapshot = {
       order: Array<{ identifier: string; enabled: boolean }>;
       prompts: Array<{
         identifier: string;
         name?: string;
         role?: string;
         content?: string;
         system_prompt?: boolean;
         marker?: boolean;
         injection_position?: number;
         injection_depth?: number;
       }>;
       groups: PromptGroupData[];
     };
     ```
  2. 采用规范化序列化算法（Canonical JSON，递归对 Object 键进行字典序排序后序列化）；
  3. 基线重置触发点：挂载初始化、预设变更后（`oai_preset_changed_after`、`preset_changed`）、保存成功后（点击 `#update_oai_preset` 后检测到成功）、导入完成（`oai_preset_import_ready`）；
  4. 抽屉打开时以 5 秒轻量定时器进行防御性兜底，抽屉隐藏或卸载时彻底停用定时器。

### ADR-5：DOM 复用与绝对无损 Teardown
- **背景**：预设编辑器必须将宿主原生预设选择器 `#respective-presets-block`、编辑表单 `#completion_prompt_manager_popup_edit` 与预览表单 `#completion_prompt_manager_popup_inspect` 移动到现代化布局中。如果还原不彻底，关闭开关将直接导致用户原生 UI 崩溃。
- **决策**：
  1. 定义严格的 `MovedNode` 占位注释机制：在原节点前插入 `<!--th-modern-preset-marker-->`，移动原节点；
  2. 还原时：严格校验 `marker.isConnected`，使用 `marker.replaceWith(node)`，确保节点回到原生 DOM 的绝对原位；
  3. 状态恢复：移除所有添加的 CSS 样式类（`.th-modern-preset-enabled`、`.th-modern-preset-pm-section` 等），重新显示被隐藏的原生列表容器。

---

## 4. 技术实现架构规范

### 4.1 文件划分与责任清单

```
modern-ui-reborn/
├── src/
│   ├── preset-module.ts             # 核心控制器：生命周期、DOM 接管、工具栏、列表渲染、表单复用、事件协调
│   ├── preset-prompt-model.ts       # 纯计算模型：分组树构建、单选互斥仲裁、排序算法、分组变更纯函数
│   ├── pointer-drag.ts              # 通用指针拖拽调度：指针捕获、全屏透明遮罩、移动插值、异常强力清理
│   ├── preset.css                   # 现代化预设专属样式：严格限定在 .th-modern-preset-enabled 作用域下
│   ├── store.ts                     # 配置定义：增加 modernPresetEditor 响应式开关与 schema 校验
│   ├── panel/Panel.vue              # 用户设置界面：增加功能开关与提示说明
│   └── index.ts                     # 扩展总装：生命周期集成与干净注销
└── test/
    └── preset-prompt-model.test.ts  # Node 原生测试套件：纯逻辑 100% 覆盖与边界防御验证
```

### 4.2 核心数据结构与契约定义

```ts
// src/preset-prompt-model.ts

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
      prompt_groups?: PromptGroupData[];
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
};

export type HostPromptManager = {
  activeCharacter: { id?: unknown; name?: string } | null;
  configuration: { prefix: string; promptOrder?: { strategy?: string; dummyId?: unknown } };
  serviceSettings: PromptGroupSettings & {
    prompts: HostPrompt[];
    prompt_order?: Array<{ character_id: unknown; order: PromptOrderEntry[] }>;
    [key: string]: unknown;
  };
  tokenUsage?: number;
  tokenHandler?: { getCounts?: () => Record<string, number | null | undefined> };
  getPromptOrderForCharacter(character: unknown): PromptOrderEntry[];
  removePromptOrderForCharacter(character: unknown): void;
  addPromptOrderForCharacter(character: unknown, order: PromptOrderEntry[]): void;
  getPromptById(identifier: string): HostPrompt | null;
  addPrompt(prompt: Partial<HostPrompt>, identifier: string): void;
  isPromptDeletionAllowed(prompt: HostPrompt): boolean;
  isPromptEditAllowed(prompt: HostPrompt): boolean;
  isPromptToggleAllowed(prompt: HostPrompt): boolean;
  loadPromptIntoEditForm(prompt: HostPrompt): void;
  updatePromptWithPromptEditForm(prompt: HostPrompt): void;
  updateQuickEdit?(identifier: string, prompt: HostPrompt): void;
  saveServiceSettings(): unknown;
  render(afterTryGenerate?: boolean): unknown;
  getUuidv4?(): string;
  messages?: { hasItemWithIdentifier(identifier: string): boolean; getItemByIdentifier(identifier: string): unknown } | null;
  loadMessagesIntoInspectForm?(messages: unknown): void;
  clearInspectForm?(): void;
  handleImport?(event?: Event): unknown;
  handleFullExport?(event?: Event): unknown;
  handleCharacterReset?(event?: Event): unknown;
};
```

### 4.3 宿主事件监听与基线同步体系

SillyTavern 的事件中心是全局的 `eventSource`，事件类型定义在 `event_types`。现代化预设编辑器必须监听以下事件以确保状态绝对一致：

```ts
// 宿主事件与预设编辑器的响应矩阵
const HOST_EVENT_HANDLERS = {
  // 1. 预设切换完成：重新初始化当前预设的分组、列表渲染与基线快照
  'oai_preset_changed_after': () => {
    editor.handlePresetSwitched();
  },
  'preset_changed': (data: { apiId?: string; name?: string }) => {
    if (data?.apiId === 'openai' || !data?.apiId) {
      editor.handlePresetSwitched();
    }
  },
  // 2. 外部预设导入完成：重新对齐数据与快照
  'oai_preset_import_ready': () => {
    editor.handlePresetImported();
  },
  // 3. 角色切换（Chat/Character 变化导致 prompt_order 切换）：
  'chatLoaded': () => {
    editor.handleCharacterSwitched();
  },
  'chat_id_changed': () => {
    editor.handleCharacterSwitched();
  }
};
```

同时，在原生 `#left-nav-panel` 容器上绑定捕获阶段的 `input` 与 `change` 事件：
```ts
const handleInput = (event: Event) => {
  if ((event.target as Element | null)?.closest?.('#left-nav-panel')) {
    editor.scheduleDirtyCheck();
  }
};
```

### 4.4 脏状态序列化算法（Canonical Snapshot）

```ts
function createCanonicalSnapshot(pm: HostPromptManager): string {
  const order = pm.getPromptOrderForCharacter(pm.activeCharacter) || [];
  const normalizedOrder = order.map(o => ({ identifier: o.identifier, enabled: !!o.enabled }));
  
  const prompts = (pm.serviceSettings.prompts || [])
    .map(p => ({
      identifier: p.identifier,
      name: p.name || '',
      role: p.role || 'system',
      content: p.content || '',
      system_prompt: !!p.system_prompt,
      marker: !!p.marker,
      injection_position: p.injection_position ?? 0,
      injection_depth: p.injection_depth ?? 0,
    }))
    .sort((a, b) => a.identifier.localeCompare(b.identifier));

  const groups = (getPromptGroups(pm.serviceSettings) || [])
    .map(g => ({
      id: g.id,
      name: g.name,
      identifiers: [...(g.identifiers || [])].sort(),
      parentId: g.parentId || null,
      single_select: !!g.single_select,
    }))
    .sort((a, b) => a.id.localeCompare(b.id));

  return JSON.stringify({ order: normalizedOrder, prompts, groups });
}
```

### 4.5 编辑表单防抖写回与强制刷新保护（Flush Guarantee）

1. **防抖写回机制**：用户在编辑表单中输入时，启动 400ms 定时器：
   ```ts
   private scheduleEditorApply(): void {
     this.window.clearTimeout(this.applyTimer);
     this.applyTimer = this.window.setTimeout(() => this.applyEditor(), EDITOR_APPLY_DELAY);
   }
   ```
2. **防丢失强制执行（`flushEditorApply`）**：在发生以下任何动作前，**必须无条件立即执行** `flushEditorApply()`：
   - 用户点击列表中的另一个提示词条目；
   - 用户切换标签页（从「提示词」切换到「参数」或「高级」）；
   - 用户点击「保存预设」按钮；
   - 抽屉被关闭或隐藏；
   - 模块调用 `destroy()` 卸载。
3. **快速编辑同步**：若编辑的条目属于 `QUICK_EDIT_PROMPTS`（`main`, `nsfw`, `jailbreak`），写回时联动调用 `pm.updateQuickEdit?.(identifier, prompt)`。
4. **提交写回**：调用 `pm.saveServiceSettings()`，随后立即触发 `scheduleDirtyCheck()` 重新计算快照对比。

### 4.6 单选互斥组（Single Select）仲裁算法

当用户在列表或详情页点击启用某个条目 `entry.identifier` 时：
```ts
export function applySingleSelectConstraint(
  order: PromptOrderEntry[],
  groups: readonly PromptGroupData[],
  targetIdentifier: string
): PromptOrderEntry[] {
  // 查找 target 所属的直接单选组
  const group = groups.find(g => g.single_select && g.identifiers.includes(targetIdentifier));
  if (!group) return order;

  // 获取同单选组中除 target 以外的其它成员 id 集合
  const siblingIds = new Set(group.identifiers.filter(id => id !== targetIdentifier));
  
  // 将同组兄弟条目一律置为 false
  return order.map(entry => {
    if (siblingIds.has(entry.identifier)) {
      return { ...entry, enabled: false };
    }
    return entry;
  });
}
```

### 4.7 指针拖拽（Pointer Drag）全生命周期与鲁棒性防护

1. **遮罩层接管**：指针按下位移超过 4px 时激活拖拽，在宿主顶级 `document.body` 注入透明全屏遮罩 `th-modern-drag-scrim`，并调用 `setPointerCapture(e.pointerId)`（包裹 try-catch 降级）。
2. **幽灵元素（Drag Ghost）**：根据拖拽的条目生成浮动胶囊提示（如 `拖动 3 个条目`），光标跟随。
3. **边界与异常终止条件（100% 遮罩释放）**：
   - 监听宿主 `window` 的 `blur` 与 `document.visibilitychange`；
   - 监听键盘 `Escape` 键按下；
   - 监听 `pointercancel`；
   - 模块 `destroy()` 卸载；
   - 任何上述条件触发，立即调用全局清理函数：移除遮罩、销毁 Ghost、移除所有放置指示线（drop line）、重置正在拖拽的状态标记。
4. **合法性规则引擎**：
   - 禁止将组拖入其自身或其任何子代组中（利用 `getDescendantGroupIds` 递归检测并阻止）；
   - 允许将多选项或整个组作为一个移动整体。

---

## 5. Teardown 恢复与生命周期契约（零回归保证）

模块挂载与卸载必须通过严格的原子化步骤推进。

### 5.1 挂载阶段（Mount）
1. 校验前置条件：`store.is_active && store.settings.modernPresetEditor` 为 true；且 `#left-nav-panel`、`#openai_settings`、`#respective-presets-block` 均已就绪。
2. 为 `#left-nav-panel` 增加样式类 `th-modern-preset-enabled`。
3. 构建现代工具栏与标签页容器，接管 `#respective-presets-block`（使用 `moveNode` 保存 marker）。
4. 接管编辑表单 `#completion_prompt_manager_popup_edit` 与预览表单 `#completion_prompt_manager_popup_inspect`。
5. 隐藏原生提示词列表容器（`#completion_prompt_manager`）。
6. 初始化快照基线，建立 MutationObserver 与事件监听。

### 5.2 卸载阶段（Teardown Checklist）
在 `destroy()` 执行时，必须按以下顺序严格还原：
- [ ] 1. 强制执行 `flushEditorApply()`，确保任何输入表单中的文字已写回内存。
- [ ] 2. 终止任何进行中的拖拽，销毁全屏遮罩与 Ghost 元素。
- [ ] 3. 断开 `observer`（MutationObserver）与 `resizeObserver`。
- [ ] 4. 清除所有计时器（`applyTimer`、`dirtyTimer`、`pollTimer`、`scheduledSync`）。
- [ ] 5. 解绑宿主全局事件监听（`eventSource` 上的监听器、`window` 的 blur/resize、`document` 的 input/change）。
- [ ] 6. 还原所有被移动的原生 DOM 节点：
  - 调用 `restoreMovedNode(this.presetsMove)` 将 `#respective-presets-block` 放回原位；
  - 调用 `restoreMovedNode(this.editAreaMove)` 将 `#completion_prompt_manager_popup_edit` 放回原位；
  - 调用 `restoreMovedNode(this.inspectMove)` 将 `#completion_prompt_manager_popup_inspect` 放回原位；
  - 若有其他移动节点，逐一通过对应的 marker 还原。
- [ ] 7. 销毁自定义创建的 DOM 元素（工具栏 `toolbar`、外壳 `shell`、列表 `list` 等直接从 DOM 中 `remove()`）。
- [ ] 8. 恢复原生容器状态：显示 `#completion_prompt_manager`。
- [ ] 9. 从 `#left-nav-panel` 上移除 `th-modern-preset-enabled` 及所有关联的临时类名与属性。

---

## 6. 详细实施步骤（分阶段实施 Checklist）

### Phase 1：纯逻辑模型与单测（零宿主依赖）
- [ ] **Step 1.1**：在 `src/preset-prompt-model.ts` 中实现：
  - 数据类型定义与类型守卫（`isGroup`）；
  - 分组操作纯函数：`getPromptGroups`、`ensurePromptGroups`、`getGroupChain`、`getDescendantGroupIds`、`getGroupPromptIds`；
  - 单选组互斥计算：`getExclusiveSiblings`、`applySingleSelectConstraint`；
  - 列表行构建算法：`buildPromptList`（展开状态计算、缩进 depth 计算、不连续分组分段处理）；
  - 排序与分组归属纯逻辑：`insertOrderEntries`、`moveOrderEntries`、`assignToGroup`、`createGroup`、`removeGroup`、`reparentGroup`、`cleanupGroups`。
- [ ] **Step 1.2**：在 `src/pointer-drag.ts` 中实现通用的 `trackHostPointerDrag`：
  - 抽象指针事件绑定、遮罩维护、距离阈值（4px）判断；
  - 具备全方位降级与异常释放保障（blur/cancel/ESC 销毁）。
- [ ] **Step 1.3**：在 `test/preset-prompt-model.test.ts` 中编写完整的 Node 原生单元测试：
  - 覆盖列表生成、祖先继承、单选互斥、非法拖拽（后代环路检测）以及孤立条目清理；
  - 运行 `npm run test` 验证通过。

### Phase 2：配置扩展与 UI 开关集成
- [ ] **Step 2.1**：在 `src/store.ts` 的 `ModernLayoutSettings` 中增加：
  ```ts
  modernPresetEditor: z.boolean().default(true).catch(true),
  ```
- [ ] **Step 2.2**：在 `src/panel/Panel.vue` 的「增强子模块」区域增加开关：
  ```vue
  <label class="checkbox_label" for="th_modern_preset_editor">
    <input id="th_modern_preset_editor" v-model="store.settings.modernPresetEditor" type="checkbox" />
    <span>现代化预设编辑器</span>
  </label>
  <small class="notes">优化预设提示词顺序列表、支持多选拖拽、分组折叠与单选互斥</small>
  ```
- [ ] **Step 2.3**：验证编译与设置持久化：`npm run build`，确认无类型错误。

### Phase 3：主控制器与 DOM 编排（`preset-module.ts`）
- [ ] **Step 3.1**：移植与重构 `PresetEditor` 控制器，移除任何原版残留的 `_` 和 slash runner 全局调用。
- [ ] **Step 3.2**：实现 `loadDefaultHost()`，使用动态 `import('scripts/openai.js')` 绑定实时 `promptManager`。
- [ ] **Step 3.3**：接入 FA6 图标映射，重写 `makeElement`、`makeIconButton` 等 DOM 辅助工厂。
- [ ] **Step 3.4**：实现 DOM 移动与接管：工具栏、三标签页切换（参数/提示词/高级）、原生预设下拉块移动。
- [ ] **Step 3.5**：实现提示词行视图渲染（条目名称、角色徽章、注入位置指示、开关切换、展开折叠图标、拖拽手柄）。
- [ ] **Step 3.6**：实现原生编辑表单复用、输入事件监听、400ms 防抖更新与 `flushEditorApply()`。
- [ ] **Step 3.7**：实现 Canonical 快照算法，绑定保存按钮与脏状态指示灯。
- [ ] **Step 3.8**：实现严格的 `destroy()` 卸载逻辑。

### Phase 4：样式与自适应适配（`preset.css`）
- [ ] **Step 4.1**：移植 `preset.css`，将所有规则限定在 `#left-nav-panel.th-modern-preset-enabled` 下。
- [ ] **Step 4.2**：适配现代化界面的主题变量（`--smart-theme-body-color` 等）与明暗模式。
- [ ] **Step 4.3**：配置窄屏自适应规则（`.th-modern-pm-narrow` 与 `.th-modern-pm-detail-open`），保证单窗格流转无裁切。
- [ ] **Step 4.4**：在 `src/index.ts` 中引入 `import './preset.css'`，并在生命周期中集成 `mountPresetEditor(store)`。

### Phase 5：测试实例集成验证与无回归验收
- [ ] **Step 5.1**：执行 `npm run build`，编译产出确认更新。
- [ ] **Step 5.2**：在测试实例 `SillyTavern/STData/新实例` 运行并测试：
  - 验证预设编辑器正常呈现，列表能正常开启/关闭条目；
  - 验证编辑表单修改文本后 400ms 内生效，重新生成时包含修改内容；
  - 验证保存按钮与原生预设同步，脏提示准确；
  - 验证开关关闭后原生预设界面 100% 完整可用，无任何残余元素或损坏。
- [ ] **Step 5.3**：再次核对全局约束，严禁修改生产实例 `D:/IharaMiu/Documents/TauriTavern`。

---

## 7. 验收标准与测试用例（Definition of Done）

### 7.1 P0 验收标准
- [ ] **设置项兼容性**：默认开启；旧版本无此字段时安全降级为 `true`；开关可即时切换生效。
- [ ] **工具栏与标签页**：原生预设选择下拉框移动至顶部；「参数」「提示词」「高级」标签切换自如，对应区域正确显隐。
- [ ] **列表与开关**：提示词列表按角色排序正确渲染；点击条目开关可即时启用/停用；状态实时同步至 `promptManager.serviceSettings`。
- [ ] **表单复用**：点击条目在右侧详情区加载原生编辑表单；修改内容后 400ms 内触发写回；切换条目或点击保存前强制落盘。
- [ ] **脏状态检测**：有修改时精确显示「未保存」标记与保存按钮；点击保存调用原生流程并清空脏状态；切换预设、导入预设后基线正确刷新。
- [ ] **无损还原（Teardown）**：关闭设置开关，所有移动节点恢复原位，自加类名移除；原生界面功能完全正常。
- [ ] **抗疲劳测试**：连续开/关 20 次，DOM 节点数量、内存事件监听器与定时器均不出现累积泄漏。

### 7.2 P1 验收标准
- [ ] **Luker 分组完备性**：支持多选建组、组重命名、解散分组；嵌套子组层级缩进正确；数据存入预设 `extensions.luker.prompt_groups` 且不破坏该字段下其他属性。
- [ ] **单选互斥组**：将分组切换为单选模式后，开启其中一个条目，同组其它成员自动关闭。
- [ ] **折叠持久化**：折叠/展开状态按预设名存入本地 LocalStorage；折叠操作不触发脏状态提示。
- [ ] **搜索与筛选**：搜索框输入关键词即时过滤名称与正文；「仅显示启用」按钮能准确过滤当前停用的条目。
- [ ] **多选与批量处理**：支持 Shift 连续多选、Ctrl/Cmd 离散多选与长按多选；批量栏支持一键启用、一键停用、批量建组、批量复制与批量删除。
- [ ] **安全拖拽**：支持普通排序、拖拽入组、拖拽出组；绝对禁止将父组拖入自身或后代组；拖拽中失焦或按 ESC 立即清理遮罩。
- [ ] **窄屏模式**：视口宽度 < 640px 时自适应为单窗格；点击条目平滑展示详情，点击返回按钮回到列表。

### 7.3 P2 验收标准
- [ ] **未加入列表管理**：提示词管理区域底部能够展开「未加入列表的条目」，支持一键添加至当前角色排序。
- [ ] **Token 统计降级**：宿主支持 Token 统计时在底部呈现统计数值；宿主缺少能力时静默降级隐藏，无控制台报错。
- [ ] **消息预览**：提供预览视图切换，可正常调用原生 `loadMessagesIntoInspectForm`。

### 7.4 工程项与安全性验收
- [ ] `npm run test` 纯逻辑测试通过率 100%。
- [ ] `npm run build` 打包成功，无 TypeScript 类型报错，生成物完整。
- [ ] 控制台无任何未捕获的 Uncaught Exception 或关于 `_` / `getPreset` 的报错。
- [ ] 生产实例 `D:/IharaMiu/Documents/TauriTavern` 零访问、零改动。
