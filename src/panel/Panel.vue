<template>
  <template v-if="store.should_enable">
    <div class="inline-drawer th-modern-extension-drawer" :class="{ 'is-collapsed': !isOpen }">
      <div
        class="inline-drawer-toggle inline-drawer-header"
        :class="{ open: isOpen }"
        @click="togglePanel"
      >
        <b>{{ SCRIPT_NAME }}</b>
        <div
          class="inline-drawer-icon fa-solid"
          :class="isOpen ? 'fa-circle-chevron-up up' : 'fa-circle-chevron-down down'"
        ></div>
      </div>

      <transition name="panel-slide">
        <div v-show="isOpen" class="inline-drawer-content modern-panel-body">
        <!-- 核心总开关 -->
        <div class="modern-card modern-master-card">
          <div class="modern-toggle-row">
            <div class="modern-toggle-info">
              <span class="modern-toggle-title">启用现代化界面</span>
              <span class="modern-toggle-desc">全面应用毛玻璃、常驻侧边栏与现代布局排版</span>
            </div>
            <label class="modern-switch">
              <input v-model="store.settings.enabled" type="checkbox" />
              <span class="modern-switch-slider"></span>
            </label>
          </div>
        </div>

        <!-- 布局模式设置卡片 -->
        <div class="modern-card">
          <div class="modern-card-header">
            <i class="fa-solid fa-table-columns" aria-hidden="true"></i>
            <span>分栏与排版</span>
          </div>

          <div class="modern-toggle-row">
            <div class="modern-toggle-info">
              <span class="modern-toggle-title">宽屏两栏与滑出面板</span>
              <span class="modern-toggle-desc">屏幕 ≥900px 时将左侧抽屉转为常驻侧边栏</span>
            </div>
            <label class="modern-switch">
              <input v-model="store.settings.desktopTwoColumn" type="checkbox" />
              <span class="modern-switch-slider"></span>
            </label>
          </div>

          <div class="modern-toggle-row" :class="{ 'is-disabled': !store.settings.desktopTwoColumn }">
            <div class="modern-toggle-info">
              <span class="modern-toggle-title">固定三栏排版</span>
              <span class="modern-toggle-desc">空间足够时固定右侧设置抽屉；窄屏自动降级为滑出面板</span>
            </div>
            <label class="modern-switch">
              <input
                v-model="store.settings.desktopDockedDrawer"
                type="checkbox"
                :disabled="!store.settings.desktopTwoColumn"
              />
              <span class="modern-switch-slider"></span>
            </label>
          </div>

          <div class="modern-field-group">
            <label class="modern-field">
              <span class="modern-field-label">左侧栏宽度</span>
              <div class="modern-input-wrapper">
                <input
                  :value="store.settings.leftSidebarWidth"
                  class="text_pole modern-input"
                  type="number"
                  min="320"
                  max="460"
                  step="4"
                  @change="commitNumericSetting($event, 'leftSidebarWidth', 320, 460)"
                  @blur="commitNumericSetting($event, 'leftSidebarWidth', 320, 460)"
                />
                <span class="modern-input-unit">px</span>
              </div>
            </label>

            <label class="modern-field">
              <span class="modern-field-label">滑出面板偏好宽度</span>
              <div class="modern-input-wrapper">
                <input
                  :value="store.settings.overlayPanelWidth"
                  class="text_pole modern-input"
                  type="number"
                  min="720"
                  step="20"
                  @change="commitNumericSetting($event, 'overlayPanelWidth', 720)"
                  @blur="commitNumericSetting($event, 'overlayPanelWidth', 720)"
                />
                <span class="modern-input-unit">px</span>
              </div>
            </label>

            <label class="modern-field">
              <span class="modern-field-label">主聊天最小宽度</span>
              <div class="modern-input-wrapper">
                <input
                  :value="store.settings.mainChatMaxWidth"
                  class="text_pole modern-input"
                  type="number"
                  min="0"
                  step="20"
                  @change="commitNumericSetting($event, 'mainChatMaxWidth', 0)"
                  @blur="commitNumericSetting($event, 'mainChatMaxWidth', 0)"
                />
                <span class="modern-input-unit">px</span>
              </div>
            </label>
            <small class="modern-field-hint">0 表示跟随酒馆宽度比例始终铺满可用空间。</small>
          </div>
        </div>

        <!-- 输入框与视口卡片 -->
        <div class="modern-card">
          <div class="modern-card-header">
            <i class="fa-solid fa-keyboard" aria-hidden="true"></i>
            <span>输入框悬浮留白</span>
          </div>

          <div class="modern-range-container">
            <div class="modern-range-header">
              <span class="modern-range-label">底边留白间距</span>
              <span class="modern-range-value">{{ store.settings.inputBottomGap }} px</span>
            </div>
            <div class="modern-range-row">
              <input
                v-model.number="store.settings.inputBottomGap"
                type="range"
                class="modern-slider"
                :min="INPUT_BOTTOM_GAP_MIN"
                :max="INPUT_BOTTOM_GAP_MAX"
                step="1"
              />
              <input
                :value="store.settings.inputBottomGap"
                class="text_pole modern-input modern-range-input"
                type="number"
                :min="INPUT_BOTTOM_GAP_MIN"
                :max="INPUT_BOTTOM_GAP_MAX"
                step="1"
                @change="commitNumericSetting($event, 'inputBottomGap', INPUT_BOTTOM_GAP_MIN, INPUT_BOTTOM_GAP_MAX)"
                @blur="commitNumericSetting($event, 'inputBottomGap', INPUT_BOTTOM_GAP_MIN, INPUT_BOTTOM_GAP_MAX)"
              />
            </div>
            <small class="modern-field-hint">调整底部悬浮输入框与窗口底边的距离，避免遮挡内容。</small>
          </div>
        </div>

        <!-- 现代化功能模块增强 -->
        <div class="modern-card">
          <div class="modern-card-header">
            <i class="fa-solid fa-shapes" aria-hidden="true"></i>
            <span>增强子模块</span>
          </div>

          <div class="modern-toggle-row">
            <div class="modern-toggle-info">
              <span class="modern-toggle-title">现代世界书管理</span>
              <span class="modern-toggle-desc">优化世界书条目卡片瀑布流与条目编辑网格</span>
            </div>
            <label class="modern-switch">
              <input v-model="store.settings.modernWorldInfoEditor" type="checkbox" />
              <span class="modern-switch-slider"></span>
            </label>
          </div>

          <div class="modern-toggle-row" :class="{ 'is-disabled': !store.settings.modernWorldInfoEditor }">
            <div class="modern-toggle-info">
              <span class="modern-toggle-title">现代世界书选择器</span>
              <span class="modern-toggle-desc">多端卡片式世界书下拉选择面板与收藏置顶</span>
            </div>
            <label class="modern-switch">
              <input
                v-model="store.settings.modernWorldSelect"
                type="checkbox"
                :disabled="!store.settings.modernWorldInfoEditor"
              />
              <span class="modern-switch-slider"></span>
            </label>
          </div>

          <div class="modern-toggle-row">
            <div class="modern-toggle-info">
              <span class="modern-toggle-title">现代角色管理界面</span>
              <span class="modern-toggle-desc">美化角色卡片列表、头部操作栏与角色编辑抽屉</span>
            </div>
            <label class="modern-switch">
              <input v-model="store.settings.modernCharacterManagement" type="checkbox" />
              <span class="modern-switch-slider"></span>
            </label>
          </div>

          <div class="modern-toggle-row">
            <div class="modern-toggle-info">
              <span class="modern-toggle-title">现代扩展设置抽屉</span>
              <span class="modern-toggle-desc">重排酒馆扩展设置抽屉内各个插件的卡片布局</span>
            </div>
            <label class="modern-switch">
              <input v-model="store.settings.modernExtensionSettings" type="checkbox" />
              <span class="modern-switch-slider"></span>
            </label>
          </div>
        </div>

        <!-- 视觉与性能微调 -->
        <div class="modern-card">
          <div class="modern-card-header">
            <i class="fa-solid fa-gauge-high" aria-hidden="true"></i>
            <span>视觉与性能</span>
          </div>

          <div class="modern-toggle-row">
            <div class="modern-toggle-info">
              <span class="modern-toggle-title">减弱动态效果</span>
              <span class="modern-toggle-desc">最小化过渡与缩放动画，降低能耗并提升响应</span>
            </div>
            <label class="modern-switch">
              <input v-model="store.settings.reduceMotion" type="checkbox" />
              <span class="modern-switch-slider"></span>
            </label>
          </div>

          <div class="modern-toggle-row">
            <div class="modern-toggle-info">
              <span class="modern-toggle-title">精简高级特效</span>
              <span class="modern-toggle-desc">关闭深度阴影与高强度发光滤镜</span>
            </div>
            <label class="modern-switch">
              <input v-model="store.settings.reduceAdvancedEffects" type="checkbox" />
              <span class="modern-switch-slider"></span>
            </label>
          </div>
        </div>

        <!-- 底部重置操作栏 -->
        <div class="modern-panel-actions">
          <button
            type="button"
            class="menu_button modern-reset-button"
            title="重置现代化界面设置"
            @click="resetSettings"
          >
            <i class="fa-solid fa-rotate-left" aria-hidden="true"></i>
            <span>恢复默认设置</span>
          </button>
        </div>
      </div>
      </transition>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { INPUT_BOTTOM_GAP_MAX, INPUT_BOTTOM_GAP_MIN, SCRIPT_NAME, useModernLayoutStore } from '../store';

const store = useModernLayoutStore();
const isOpen = ref(true);

function togglePanel(event: MouseEvent) {
  event.preventDefault();
  event.stopPropagation();
  isOpen.value = !isOpen.value;
}

type NumericSettingKey = 'leftSidebarWidth' | 'overlayPanelWidth' | 'mainChatMaxWidth' | 'inputBottomGap';

function commitNumericSetting(event: Event, key: NumericSettingKey, min: number, max = Number.POSITIVE_INFINITY) {
  const input = event.currentTarget as HTMLInputElement;
  const previousValue = store.settings[key];
  const inputValue = input.valueAsNumber;

  if (!Number.isFinite(inputValue)) {
    input.value = String(previousValue);
    return;
  }

  const nextValue = Math.min(max, Math.max(min, inputValue));
  store.settings[key] = nextValue;
  input.value = String(nextValue);
}

async function resetSettings() {
  const popupType = SillyTavern?.POPUP_TYPE?.CONFIRM ?? 'confirm';
  const confirmed = await SillyTavern?.callGenericPopup?.(
    '确定将现代化界面设置重置为默认值吗？',
    popupType,
  );
  if (confirmed !== true && confirmed !== SillyTavern?.POPUP_RESULT?.AFFIRMATIVE) {
    return;
  }
  store.resetSettings();
  if (typeof toastr !== 'undefined') {
    toastr.info('已恢复现代化界面默认设置。', SCRIPT_NAME);
  }
}
</script>

<style scoped>
.inline-drawer.th-modern-extension-drawer {
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
  margin: 0 !important;
  width: 100% !important;
  overflow: visible !important;
}

/* 折叠展开过渡动画 */
.panel-slide-enter-active,
.panel-slide-leave-active {
  transition: max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease, padding 0.2s ease;
  overflow: hidden;
  max-height: 2500px;
}

.panel-slide-enter-from,
.panel-slide-leave-to {
  max-height: 0 !important;
  opacity: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  overflow: hidden !important;
}

.modern-panel-body {
  box-sizing: border-box;
  margin-top: 4px;
  padding: 0.75rem;
  border-radius: var(--th-modern-radius-sm, 10px);
  border: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor, #555) 40%, transparent);
  background: color-mix(in srgb, var(--SmartThemeBlurTintColor, #1e1e24) 85%, transparent);
  box-shadow: 0 4px 16px -2px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* 现代化卡片分组 */
.modern-card {
  padding: 0.75rem 0.85rem;
  border-radius: 10px;
  background: color-mix(in srgb, var(--SmartThemeBlurTintColor, #252530) 70%, transparent);
  border: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor, #555) 30%, transparent);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.modern-master-card {
  background: color-mix(in srgb, var(--SmartThemeQuoteColor, #4a9eff) 10%, var(--SmartThemeBlurTintColor, #252530) 90%);
  border-color: color-mix(in srgb, var(--SmartThemeQuoteColor, #4a9eff) 35%, transparent);
}

.modern-card-header {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.85rem;
  font-weight: 600;
  opacity: 0.9;
  color: var(--SmartThemeQuoteColor, #4a9eff);
  padding-bottom: 0.25rem;
  border-bottom: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor, #555) 20%, transparent);
}

/* 现代化开关行 */
.modern-toggle-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.25rem 0;
  transition: opacity 0.2s ease;
}

.modern-toggle-row.is-disabled {
  opacity: 0.45;
  pointer-events: none;
}

.modern-toggle-info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.modern-toggle-title {
  font-size: 0.88rem;
  font-weight: 500;
}

.modern-toggle-desc {
  font-size: 0.75rem;
  opacity: 0.68;
  line-height: 1.35;
}

/* 仿 iOS/Fluent 风格现代化滑动开关 */
.modern-switch {
  position: relative;
  display: inline-block !important;
  width: 44px !important;
  height: 24px !important;
  min-height: 24px !important;
  max-height: 24px !important;
  flex: 0 0 44px !important;
  box-sizing: border-box !important;
  padding: 0 !important;
  margin: 0 !important;
  border: none !important;
  cursor: pointer;
  vertical-align: middle;
}

.modern-switch input {
  position: absolute !important;
  opacity: 0 !important;
  width: 0 !important;
  height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  pointer-events: none !important;
}

.modern-switch-slider {
  position: absolute;
  inset: 0;
  box-sizing: border-box !important;
  background-color: color-mix(in srgb, var(--SmartThemeBorderColor, #888) 40%, transparent);
  border-radius: 999px;
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor, #888) 25%, transparent);
}

.modern-switch-slider::before {
  position: absolute;
  content: "";
  box-sizing: border-box !important;
  height: 18px;
  width: 18px;
  top: 50% !important;
  left: 2px;
  transform: translateY(-50%) !important;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.28);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modern-switch input:checked + .modern-switch-slider {
  background-color: var(--SmartThemeQuoteColor, #4a9eff);
  border-color: var(--SmartThemeQuoteColor, #4a9eff);
}

.modern-switch input:checked + .modern-switch-slider::before {
  transform: translateY(-50%) translateX(20px) !important;
}

/* 输入项与尺寸控制 */
.modern-field-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.modern-field {
  display: grid;
  grid-template-columns: minmax(7em, 1fr) minmax(8em, 10em);
  align-items: center;
  gap: 0.5rem;
}

.modern-field-label {
  font-size: 0.85rem;
  opacity: 0.88;
}

.modern-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.modern-input {
  width: 100%;
  padding-right: 2rem !important;
  border-radius: 6px !important;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.modern-input-unit {
  position: absolute;
  right: 0.6rem;
  font-size: 0.75rem;
  opacity: 0.55;
  pointer-events: none;
}

.modern-field-hint {
  display: block;
  font-size: 0.74rem;
  opacity: 0.65;
  margin-top: -0.15rem;
}

/* 滑动条容器 */
.modern-range-container {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.modern-range-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
}

.modern-range-value {
  font-weight: 600;
  color: var(--SmartThemeQuoteColor, #4a9eff);
  font-variant-numeric: tabular-nums;
}

.modern-range-row {
  display: grid;
  grid-template-columns: 1fr 5.5em;
  align-items: center;
  gap: 0.75rem;
}

.modern-slider {
  width: 100%;
  accent-color: var(--SmartThemeQuoteColor, #4a9eff);
  cursor: pointer;
}

.modern-range-input {
  text-align: center;
  padding-right: 0.5rem !important;
}

/* 底部操作栏 */
.modern-panel-actions {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.25rem;
}

.modern-reset-button {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 3px 8px !important;
  min-height: unset !important;
  font-size: 0.82rem;
  border-radius: var(--th-modern-radius-xs, 6px);
  background: color-mix(in srgb, var(--SmartThemeBlurTintColor, #252530) 90%, transparent);
  border: 1px solid color-mix(in srgb, var(--SmartThemeBorderColor, #888) 35%, transparent);
  cursor: pointer;
  transition: all 0.2s ease;
}

.modern-reset-button:hover {
  background: color-mix(in srgb, var(--SmartThemeQuoteColor, #4a9eff) 20%, transparent);
  border-color: var(--SmartThemeQuoteColor, #4a9eff);
  color: var(--SmartThemeQuoteColor, #4a9eff);
  transform: translateY(-1px);
}
</style>
