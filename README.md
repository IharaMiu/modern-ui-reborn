# 现代化界面 (Modern UI Reborn)

为 **SillyTavern (酒馆)** 和 **TauriTavern** 打造的原生现代化布局与交互界面增强扩展。

> 本项目脱胎于酒馆助手 (JS-Slash-Runner) 脚本「现代化界面」，现已完全重构为官方标准的第三方原生扩展，无需依赖任何脚本助手或外部在线 CDN。

---

## ✨ 核心特性

- 🖥️ **双栏与常驻侧边栏**：宽屏下自动将角色与聊天列表转换为常驻侧边栏，支持空间充裕时固定三栏模式。
- ↔️ **流畅边缘拖拽**：支持平滑鼠标与触摸拖拽调整侧边栏宽度，配置即时保存。
- 💬 **最近聊天快捷面板**：重构最近会话列表，展示头像、更新时间与消息摘要。
- 🗂️ **角色管理与世界书现代排版**：卡片瀑布流布局，世界书词条分组与移动端选择面板。
- ⚡ **轻量自包含**：Vue 3 + Pinia 状态管理完全打包，零外部网络请求，支持全离线环境。
- 📱 **多端自适应**：无缝兼容桌面浏览器、移动端与 TauriTavern 客户端。

---

## 📦 安装使用

### 方式一：在 SillyTavern 中在线安装
1. 打开 SillyTavern 的「扩展 (Extensions)」管理面板。
2. 点击「Install Extension (从 URL 安装)」。
3. 粘贴本仓库的 Git URL，点击安装并启用即可。

### 方式二：手动安装
1. 将本项目文件夹复制或 Git 克隆到酒馆扩展目录：
   ```text
   SillyTavern/public/scripts/extensions/third-party/modern-ui-reborn
   ```
2. 刷新 SillyTavern 网页或重启 TauriTavern 即可自动加载生效。

---

## 🛠️ 二次开发与构建

项目采用 Vite 进行轻量编译，源码位于 `src/` 目录下：

```bash
# 安装依赖
npm install

# 生产环境打包（直接输出根目录 index.js 和 style.css）
npm run build

# 监听开发
npm run dev
```

---

## 📄 扩展清单结构

```text
modern-ui-reborn/
├── manifest.json       # SillyTavern 扩展定义
├── index.js            # 编译后的扩展主逻辑
├── style.css           # 编译后的全局样式
├── src/                # TypeScript & Vue 源码
└── vite.config.ts      # 打包配置
```

---

## 📝 鸣谢
- 感谢原作者 `deepsleep-claw` 的优秀设计与开源贡献。
