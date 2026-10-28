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

### 柏宝箱 / 柏宝库兼容分支

使用 [柏宝箱](https://github.com/baibai-git/ST-BaiBai-Tools) 或 [柏宝库](https://github.com/baibai-git/baibaoku) 的用户，可以试用 [柏宝箱兼容测试版 v0.2.1-baibai.1](https://github.com/IharaMiu/modern-ui-reborn/releases/tag/v0.2.1-baibai.1)。该版本包含预设和世界书界面的兼容调整，以及可选的柏宝库最近聊天快速读取。柏宝箱和柏宝库请分别按各自仓库的说明安装。

1. 下载 [兼容版安装包](https://github.com/IharaMiu/modern-ui-reborn/releases/download/v0.2.1-baibai.1/modern-ui-reborn-v0.2.1-baibai.1.zip) 并解压。
2. 如果已经安装本扩展，先备份原扩展目录及其中的本地改动，再将原目录移出酒馆扩展目录，避免同时加载两份。
3. 将解压得到的 `modern-ui-reborn` 文件夹放入酒馆加载第三方扩展的目录，确认该文件夹内直接包含 `manifest.json`、`index.js` 和 `style.css`。
4. 刷新 SillyTavern 页面；TauriTavern 用户按其安装方式重新加载扩展或重启应用。

更新时从兼容版 Release 页面下载新的安装包，备份并替换原扩展目录即可，无需切换 Git 分支。

兼容分支仍在测试中：目前不会自动关闭柏宝箱的界面优化，且尚未覆盖柏宝箱和柏宝库的全部功能；实际效果取决于宿主及插件版本。

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
