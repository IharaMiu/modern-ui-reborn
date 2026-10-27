# Modern UI Reborn 优化执行计划

> 建立时间：2026-10-27
> 基线版本：`0.2.0-alpha.4`（工作区干净，`git status` 无改动）
> 目标版本：`0.2.0-alpha.5`
> 原则：**以当前代码为主，只做小步、可回滚的定点修改**；不重构架构、不换依赖、不动 CSS 主题、不碰生产实例。

---

## 1. 本轮目标

1. 让类型检查重新走通，并把它纳入日常构建流程。
2. 解决预设编辑器在**大型预设**下的三类性能问题（脏检测、输入监听、重绘放大）。
3. 顺手修掉少量确定的健壮性与可访问性问题。
4. 同步已经漂移的文档/版本号。

**不在本轮范围**：

- 世界书、角色管理、移动端选择器模块（当前未发现明确问题，避免扩大回归面）。
- 拆分 `index.ts` / `preset-module.ts` 等大文件。
- 打开 `strict` 模式（会产生大量类型错误，单独排期）。
- 改打包结构（`outDir: '.'` 继续保留，仅记录风险）。
- 调整 Bundle 体积、替换 Vue/Pinia/Zod。

---

## 2. 现状与问题清单

| ID | 优先级 | 问题 | 证据 |
| --- | --- | --- | --- |
| P0-1 | P0 | `mountPresetEditor` 返回类型与实际不符，`tsc --noEmit` 失败 | `src/preset-module.ts:2578`、`:2594`；`src/index.ts:2844` |
| P0-2 | P0 | 没有 `typecheck` 脚本，构建只转译不查类型 | `package.json:7-11` |
| P1-1 | P1 | 脏检测每次输入/每个抽屉控件都序列化全部提示词正文 | `src/preset-module.ts:766-808`、`:844-848`、`:2581-2585` |
| P1-2 | P1 | 每次条目开关都全量重建列表 + 重绘原生隐藏列表 | `src/preset-module.ts:1115-1161`、`:1599-1615`、`:1687` |
| P1-3 | P1 | 编辑正文时每 400ms 重绘一次原生提示词列表 | `src/preset-module.ts:2519-2525`、`:2543-2568` |
| P1-4 | P1 | Observer 监听 `subtree + characterData`，任何原生列表文字变化都会触发 sync → 全量重绘 | `src/preset-module.ts:551-554`、`:466-510` |
| P1-5 | P1 | `sync()` 面板打开时无条件 `renderList()`，没有变化也重建 | `src/preset-module.ts:504-506` |
| P2-1 | P2 | `getGroupState()` 对每个 id 做 `order.find`，O(分组×条目) | `src/preset-module.ts:1163-1167` |
| P2-2 | P2 | 设置面板宽度输入没有上限，可输入极大值撑爆布局 | `src/panel/Panel.vue:63-93`、`:273-286` |
| P2-3 | P2 | `role="switch"` 使用非法的 `aria-checked="mixed"` | `src/preset-module.ts:187-194`、`src/preset.css:615-623` |
| P2-4 | P2 | 死代码：`should_enable` 恒为 true；`store.destroy(options)` 参数未使用 | `src/store.ts:130`、`:154-160` |
| P2-5 | P2 | 文档与实现漂移（PRD 复选框全空、默认值描述过时、优化项 3 结论与代码不符） | `docs/PRD-modern-preset-editor.md`、`optimization-analysis-detailed.md`、`CHANGELOG.md` |

已验证基线：

- `npm run build` 通过。
- `npm test` 16/16 通过。
- `npx tsc --noEmit` 失败（2 个 `scheduleSync` 相关错误）。

---

## 3. 实施阶段

### Phase 0：护栏（无行为变化）

**0.1 补类型检查脚本** — `package.json`

```json
"scripts": {
  "build": "vite build",
  "dev": "vite build --watch",
  "test": "node --experimental-strip-types --test test/**/*.test.ts",
  "typecheck": "tsc --noEmit",
  "check": "npm run typecheck && npm test && npm run build"
}
```

说明：不把 `typecheck` 塞进 `build`，避免打断现有 `npm run dev` 工作流；用 `npm run check` 作为提交前总检。

**0.2 固定基线**：改代码前先跑 `npm run check`，把当前失败项记录下来（预期只有 P0-1 的 2 条），确保之后不再新增错误。

---

### Phase 1：类型与快速修复（低风险）

#### 1.1 修正 `mountPresetEditor` 返回类型 — `src/preset-module.ts:2578`

```ts
// 现在
export function mountPresetEditor(store: Store, options: PresetEditorOptions = {}): { destroy: () => void } {

// 改为
export function mountPresetEditor(
  store: Store,
  options: PresetEditorOptions = {},
): { scheduleSync: () => void; destroy: () => void } {
```

同步确认 `src/index.ts:2844` 的调用不再报错。这是纯类型修复，运行时无变化。

#### 1.2 面板数值上界 — `src/panel/Panel.vue`

- 第 66-76 行「滑出面板偏好宽度」输入：补 `max="2000"`。
- 第 82-92 行「主聊天最小宽度」输入：补 `max="4000"`。
- `commitNumericSetting`（`:273-286`）已有 clamp 逻辑，无需改函数，只补模板属性。

验证：手动输入 `999999` 后失焦，值应被夹回上限。

#### 1.3 修正 switch 的 ARIA 语义（可选，若时间紧可后置）

- `src/preset-module.ts:187-194`：

```ts
toggle.setAttribute('aria-checked', checked === 'mixed' ? 'false' : String(checked));
toggle.toggleAttribute('data-mixed', checked === 'mixed');
toggle.setAttribute('aria-label', checked === 'mixed' ? `${title}（部分开启）` : title);
```

- `src/preset.css:615,620`：把 `[aria-checked='mixed']` 改为 `[data-mixed]`（两处选择器）。

验证：分组半开状态视觉不变，读屏只报 true/false。

---

### Phase 2：预设编辑器性能（核心）

> 目标：大预设下「打字不卡、开关不抖、5 秒兜底仍然准确」。
> 改动全部落在 `src/preset-module.ts` 现有函数内，不新增文件、不新增依赖。

#### 2.1 去掉全抽屉输入监听

删除 `mountPresetEditor` 中的全局监听（`:2580-2585`）：

```ts
const handleInput = (event: Event) => {
  if ((event.target as Element | null)?.closest?.('#left-nav-panel')) editor.scheduleDirtyCheck();
};
hostDocument.addEventListener('input', handleInput, true);
hostDocument.addEventListener('change', handleInput, true);
```

以及 `destroy()` 里对应的两行 `removeEventListener`（`:2599-2600`）。

理由：提示词编辑区自己已经在 `:2255-2256` 绑定了 `handleEditorInput`，而脏状态由 2.2 + 5 秒轮询兜底；原监听会把温度、top_p 等所有控件的每次输入都变成一次全量快照。

#### 2.2 本地修改直接置脏，不再靠快照发现

- `commit()`（`:1599-1615`）：把

```ts
this.scheduleDirtyCheck();
```

替换为

```ts
this.dirty = true;
this.renderDirty();
```

- 保留 `ensureDirtyPolling()`（`:836-842`）的 5 秒轮询，用于发现「原生界面/宿主外部」造成的改动。
- 保留 `scheduleDirtyCheck()` 在以下显式时机：预设切换后（`:390`）、导入后（`:404`）、保存按钮后（`:717`）、重置表单后（`:2534`）。

效果：打字、开关、拖拽排序、批量操作都不再序列化整份预设；只有 5 秒轮询和显式事件会算快照。

> 取舍：原生侧修改（例如从酒馆原生提示词弹窗改内容）最多延迟 5 秒才亮「未保存」。这是可接受的，因为现代化编辑器主打路径已经即时置脏。

#### 2.3 `sync()` 增加列表签名短路

1. 新增字段（与 `dirty` 等字段放在一起）：

```ts
private listSignature = '';
```

2. 新增方法：

```ts
private buildListSignature(): string {
  const order = this.getOrder();
  const enabledBits = order.map(entry => `${entry.identifier}:${entry.enabled ? 1 : 0}`).join('|');
  const groupBits = this.groups
    .map(group => `${group.id}:${group.name}:${(group.identifiers || []).join(',')}:${group.single_select ? 1 : 0}`)
    .join('|');
  const collapsedBits = [...this.collapsed.entries()].map(([id, value]) => `${id}:${value ? 1 : 0}`).join('|');
  return `${enabledBits}#${groupBits}#${collapsedBits}#${this.search}#${this.onlyEnabled ? 1 : 0}`;
}
```

3. `renderList()` 末尾（`:1154` 之后）更新签名：

```ts
this.listSignature = this.buildListSignature();
```

4. `sync()` 面板打开分支（`:504-506`）改为：

```ts
if (isPanelOpen) {
  const nextSignature = this.buildListSignature();
  if (nextSignature !== this.listSignature) {
    this.renderList();
  } else {
    this.syncEditor();
  }
  this.ensureDirtyPolling();
}
```

注意：`renderList()` 内部会先刷新 `this.groups`，所以签名要在取分组之后计算；`buildListSignature()` 依赖 `this.groups` 时，先确保 `sync()` 已调用过 `renderList`（首帧）或把 `this.groups = getPromptGroups(pm.serviceSettings)` 抽到签名前。实现时二者取其一，保持不重复读数据。

> 取舍：外部只改了条目正文时签名不变，列表不会重建（本来列表也不展示正文）；Token 列可能短暂显示旧值，5 秒轮询或下次操作后恢复。可接受并在代码里留一行注释说明。

#### 2.4 内容写回不再重绘原生列表

- `commit()` 增加参数（保持向后兼容）：

```ts
private commit(refreshList = true, refreshNative = true): void {
  ...
  if (refreshNative) pm.render(false);
  if (refreshList) this.renderList();
  ...
}
```

- `applyEditor()`（`:2567`）改为：

```ts
this.commit(false, false);
```

理由：正文编辑不影响原生列表结构，没必要每 400ms 让原生列表重绘一次。

结构变化（新增、删除、排序、分组、开关）仍然走默认的 `commit()`。

#### 2.5 收窄 Observer

`observe()` 中（`:551-554`）：

```ts
this.observer.observe(container, { childList: true, subtree: true });
```

去掉 `characterData: true`。原生列表里 Token 数字、计数文字频繁更新，会无意义触发 sync；结构变化仍然能捕获。

#### 2.6 渲染期 O(1) 查表

- `renderList()`（`:1115`）在 `const order = this.getOrder();` 之后构建一次：

```ts
const orderMap = new Map(order.map(entry => [entry.identifier, entry]));
this.orderMap = orderMap;
```

- 新增字段 `private orderMap = new Map<string, PromptOrderEntry>();`
- `getGroupState()`（`:1163-1167`）改为：

```ts
private getGroupState(group: PromptGroupData): { enabled: number; total: number } {
  const ids = getGroupPromptIds(this.groups, group.id);
  const enabled = ids.filter(id => this.orderMap.get(id)?.enabled).length;
  return { enabled, total: ids.length };
}
```

- 同步修改 `toggleGroup()`（`:1695`、`:1699`、`:1705`）与 `setEnabled()` 中的 `order.find`，优先查 `this.orderMap`；若保持传入 `order` 参数则保留现状，仅做 `getGroupState` 一处即可拿到主要收益。

验证：`test/preset-prompt-model.test.ts` 不受影响（纯逻辑未改）。

#### 2.7 保存按钮（只记录，不在本轮改）

`:705-719` 目前是「原生 click + jQuery trigger」双触发 + 800ms 固定等待。能工作但有两个隐患：

- 可能重复提交两次保存；
- 800ms 是经验值，慢机器上可能提前 reset 基线。

本轮只在代码里加一行注释说明，不改行为；等有稳定的保存完成事件后再收敛。

---

### Phase 3：清理与文档

#### 3.1 死代码（可选，低优先级）

- `src/store.ts`：删除恒为 true 的 `should_enable`，`is_active` 改为 `settings.value.enabled`；同步修改：
  - `src/index.ts:2928`（删除分支）
  - `src/index.ts:2941`（watch 只依赖 `is_active`）
  - `src/panel/Panel.vue:2`（去掉 `v-if` 或改为 `v-if="true"`，建议直接去掉）
- `src/store.ts:154`：`destroy(options)` → `destroy()`，同步 `src/index.ts:2958`。

> 若担心改动面，3.1 可整体后置；它不解决任何用户可见问题。

#### 3.2 版本号

- `package.json` → `0.2.0-alpha.5`
- `manifest.json` → `0.2.0-alpha.5`
- `CHANGELOG.md` 新增 `v0.2.0-alpha.5` 段落，写明：
  - 修复 `scheduleSync` 类型契约；
  - 脏检测不再随每次输入全量快照；
  - 列表重绘签名短路与 Observer 收窄；
  - 正文编辑不再重绘原生列表。

#### 3.3 文档纠偏（只改结论，不重写）

- `optimization-analysis-detailed.md`：在「优化项 3」加一行说明：*最终实现为 `documentElement + body` 双写（v0.1.6 起），本文原结论仅作历史记录。*
- `docs/PRD-modern-preset-editor.md`：把 §7.1 的「默认开启」改为「当前默认关闭（实验性），大型预设调优通过后恢复默认开启」；复选框状态不改（避免伪造验收），在文件头加「实现状态以 CHANGELOG 为准」。

---

## 4. 执行顺序与预计改动量

| 顺序 | 内容 | 文件 | 预计行数 | 风险 |
| --- | --- | --- | --- | --- |
| 1 | 类型检查脚本 + 返回类型修复 | `package.json`、`preset-module.ts` | ~12 | 极低 |
| 2 | 数值上界 | `Panel.vue` | 2 | 极低 |
| 3 | 去掉全抽屉输入监听 + commit 置脏 | `preset-module.ts` | ~15 | 低 |
| 4 | 列表签名短路 | `preset-module.ts` | ~25 | 低中 |
| 5 | 内容写回不重绘原生列表 | `preset-module.ts` | ~5 | 低 |
| 6 | Observer 去掉 `characterData` | `preset-module.ts` | 1 | 低 |
| 7 | `getGroupState` 查表 | `preset-module.ts` | ~8 | 低 |
| 8 | ARIA 修正 | `preset-module.ts`、`preset.css` | ~6 | 低 |
| 9 | 版本号 + CHANGELOG + 文档 | 4 个文件 | ~30 | 极低 |
| 10 | 死代码清理（可选） | `store.ts`、`index.ts`、`Panel.vue` | ~15 | 低 |

完成后总改动预计 **< 150 行**，不新增文件（除计划文档外）、不新增依赖。

---

## 5. 验收标准

### 5.1 自动检查

- [ ] `npm run typecheck` 0 错误
- [ ] `npm test` 16/16（或更多）通过
- [ ] `npm run build` 成功，产物仍为根目录 `index.js` / `style.css`
- [ ] `git diff` 只包含本计划列出的文件

### 5.2 测试实例部署

- [ ] 复制 `index.js`、`style.css`、`manifest.json` 到：
  - `SillyTavern/STData/新实例/data/default-user/extensions/modern-ui-reborn`
  - `SillyTavern/STData/新实例 (2)/data/default-user/extensions/modern-ui-reborn`
- [ ] 硬刷新酒馆，控制台无未捕获异常

### 5.3 手动验收矩阵（预设编辑器）

| 场景 | 预期 |
| --- | --- |
| 100+ 条目预设，打开「提示词」标签 | 1 秒内渲染完成，无明显长任务 |
| 连续打字 5 秒（每条 2KB 正文） | 输入不卡顿；每 400ms 写回；无全量列表闪烁 |
| 连续开关 20 个条目 | 每次开关即时反馈；控制台无报错 |
| 修改后等待 5 秒 | 「未保存」状态保持，不被误判为已保存 |
| 点击保存，等待 1 秒 | 状态变「已保存」；刷新页面后修改仍在 |
| 在原生提示词弹窗直接改内容 | 5 秒内出现「未保存」 |
| 分组折叠/展开 | 状态持久化；不触发列表整体闪烁 |
| 关闭「现代化预设编辑器」开关 | 原生提示词界面 100% 可用，节点无残留 |
| 开/关扩展 5 次 | DOM 数量稳定，无重复监听（DevTools 观察） |
| 窄屏 < 640px | 单窗格切换正常，返回按钮可用 |

### 5.4 约束复核

- [ ] 未访问 `D:/IharaMiu/Documents/TauriTavern`
- [ ] 未修改世界书/角色/移动端模块
- [ ] 未引入新依赖、未请求外部 CDN

---

## 6. 风险与回滚

| 风险 | 影响 | 应对 |
| --- | --- | --- |
| 签名短路漏掉必要的列表刷新 | 列表短暂显示旧状态 | 保留 5 秒轮询；签名包含 order/groups/折叠/搜索；发现问题时把 `sync()` 改回无条件 `renderList()` 即回滚 |
| 去掉全局输入监听后，原生参数修改不即时亮「未保存」 | 最多延迟 5 秒 | 可接受；若用户反馈强烈，再加回仅针对 `#openai_settings` 的监听 |
| `commit` 置脏导致「实际上没改」也显示未保存 | 提示偏保守 | 保存后基线重置即可；比漏报安全 |
| Observer 去掉 `characterData` 后漏掉外部条目重命名 | 列表名称短暂不更新 | 预设切换/导入事件仍会刷新；5 秒轮询兜底 |
| 保存按钮双触发 | 可能重复保存 | 本轮不改，仅记录；后续拿到稳定保存事件再处理 |

回滚方式：本轮所有改动都是独立小块，`git revert` 单个提交即可；不涉及数据迁移。

---

## 7. 需要人工确认的事项

1. 是否接受「原生界面改动最多延迟 5 秒才亮未保存」这一取舍？
2. 3.1 死代码清理是否本轮执行？（不影响功能，可后置）
3. 版本号定为 `0.2.0-alpha.5` 是否可以？还是直接发 `0.3.0`？
4. 部署是否需要同时覆盖两个测试实例？

---

## 8. 实施提醒

本计划写入后，**Plan 模式不会修改源码**。执行时请切换到可编辑的 Agent（Build/执行模式），按第 4 节顺序落地，并在每完成 1-2 项后跑一次 `npm run typecheck && npm test`，避免一次性堆积回归。
