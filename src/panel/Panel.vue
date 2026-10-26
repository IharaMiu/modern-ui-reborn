<template>
  <div v-if="store.should_enable" class="inline-drawer">
    <div class="inline-drawer-toggle inline-drawer-header">
      <b>
        <span>{{ SCRIPT_NAME }}</span>
        <a class="notes-link" title="恢复默认设置" @click.stop="resetSettings">
          <i class="fa-solid fa-rotate-left"></i>
        </a>
      </b>
      <div class="inline-drawer-icon fa-solid fa-circle-chevron-down down"></div>
    </div>

    <div class="inline-drawer-content">
      <!-- 核心开关 -->
      <label class="checkbox_label" for="th_modern_enabled">
        <input id="th_modern_enabled" v-model="store.settings.enabled" type="checkbox" />
        <span>启用现代化界面</span>
      </label>
      <small class="notes">全面应用毛玻璃、常驻侧边栏与现代布局排版</small>

      <hr />

      <!-- 分栏与排版 -->
      <h4>分栏与排版</h4>
      <label class="checkbox_label" for="th_modern_two_column">
        <input id="th_modern_two_column" v-model="store.settings.desktopTwoColumn" type="checkbox" />
        <span>宽屏两栏与滑出面板</span>
      </label>
      <small class="notes">屏幕 ≥900px 时将左侧抽屉转为常驻侧边栏</small>

      <label
        class="checkbox_label"
        :class="{ 'is-disabled': !store.settings.desktopTwoColumn }"
        for="th_modern_docked_drawer"
      >
        <input
          id="th_modern_docked_drawer"
          v-model="store.settings.desktopDockedDrawer"
          type="checkbox"
          :disabled="!store.settings.desktopTwoColumn"
        />
        <span>固定三栏排版</span>
      </label>
      <small class="notes">空间足够时固定右侧设置抽屉；窄屏自动降级为滑出面板</small>

      <div class="flex-container justifySpaceBetween alignitemscenter m-t-0_5">
        <span>左侧栏宽度</span>
        <div class="flex-container alignitemscenter">
          <input
            :value="store.settings.leftSidebarWidth"
            class="text_pole width100px text-right"
            type="number"
            min="320"
            max="460"
            step="4"
            @change="commitNumericSetting($event, 'leftSidebarWidth', 320, 460)"
            @blur="commitNumericSetting($event, 'leftSidebarWidth', 320, 460)"
          />
          <span class="m-l-0_5">px</span>
        </div>
      </div>

      <div class="flex-container justifySpaceBetween alignitemscenter m-t-0_5">
        <span>滑出面板偏好宽度</span>
        <div class="flex-container alignitemscenter">
          <input
            :value="store.settings.overlayPanelWidth"
            class="text_pole width100px text-right"
            type="number"
            min="720"
            step="20"
            @change="commitNumericSetting($event, 'overlayPanelWidth', 720)"
            @blur="commitNumericSetting($event, 'overlayPanelWidth', 720)"
          />
          <span class="m-l-0_5">px</span>
        </div>
      </div>

      <div class="flex-container justifySpaceBetween alignitemscenter m-t-0_5">
        <span>主聊天最小宽度</span>
        <div class="flex-container alignitemscenter">
          <input
            :value="store.settings.mainChatMaxWidth"
            class="text_pole width100px text-right"
            type="number"
            min="0"
            step="20"
            @change="commitNumericSetting($event, 'mainChatMaxWidth', 0)"
            @blur="commitNumericSetting($event, 'mainChatMaxWidth', 0)"
          />
          <span class="m-l-0_5">px</span>
        </div>
      </div>
      <small class="notes">0 表示跟随酒馆宽度比例始终铺满可用空间。</small>

      <hr />

      <!-- 输入框设置 -->
      <h4>输入框设置</h4>
      <label class="checkbox_label" for="th_modern_floating_input">
        <input id="th_modern_floating_input" v-model="store.settings.floatingChatInput" type="checkbox" />
        <span>悬浮输入框</span>
      </label>
      <small class="notes">开启时输入框以毛玻璃胶囊形态悬浮于聊天区上方；关闭时与原版 SillyTavern 一样固定置底铺满。</small>

      <label class="checkbox_label m-t-0_5" for="th_modern_single_line_input">
        <input id="th_modern_single_line_input" v-model="store.settings.singleLineChatInput" type="checkbox" />
        <span>单行输入框</span>
      </label>
      <small class="notes">开启后输入框采用紧凑单行排版（发送与操作按钮置于输入框两侧）；关闭时保持双行排版（上方输入文本、下方操作按钮）。</small>

      <div :class="{ 'is-disabled': !store.settings.floatingChatInput }">
        <div class="flex-container justifySpaceBetween alignitemscenter m-t-0_5">
          <span>底部留白边距</span>
          <div class="flex-container alignitemscenter">
            <span class="notes m-r-0_5">{{ store.settings.inputBottomGap }} px</span>
          </div>
        </div>
        <div class="flex-container alignitemscenter m-t-0_5">
          <div class="range-block-range flex1">
            <input
              v-model.number="store.settings.inputBottomGap"
              type="range"
              class="range_slider"
              :min="INPUT_BOTTOM_GAP_MIN"
              :max="INPUT_BOTTOM_GAP_MAX"
              step="1"
              :disabled="!store.settings.floatingChatInput"
            />
          </div>
          <div class="range-block-counter m-l-0_5">
            <input
              :value="store.settings.inputBottomGap"
              class="text_pole width60px text-center"
              type="number"
              :min="INPUT_BOTTOM_GAP_MIN"
              :max="INPUT_BOTTOM_GAP_MAX"
              step="1"
              :disabled="!store.settings.floatingChatInput"
              @change="commitNumericSetting($event, 'inputBottomGap', INPUT_BOTTOM_GAP_MIN, INPUT_BOTTOM_GAP_MAX)"
              @blur="commitNumericSetting($event, 'inputBottomGap', INPUT_BOTTOM_GAP_MIN, INPUT_BOTTOM_GAP_MAX)"
            />
          </div>
        </div>
        <small class="notes">调整悬浮输入框与窗口底边的间距（{{ store.settings.inputBottomGap }} px）。</small>

        <div class="flex-container justifySpaceBetween alignitemscenter m-t-0_5">
          <span>两侧留白边距</span>
          <div class="flex-container alignitemscenter">
            <span class="notes m-r-0_5">{{ store.settings.inputSideGap }} px</span>
          </div>
        </div>
        <div class="flex-container alignitemscenter m-t-0_5">
          <div class="range-block-range flex1">
            <input
              v-model.number="store.settings.inputSideGap"
              type="range"
              class="range_slider"
              :min="INPUT_SIDE_GAP_MIN"
              :max="INPUT_SIDE_GAP_MAX"
              step="1"
              :disabled="!store.settings.floatingChatInput"
            />
          </div>
          <div class="range-block-counter m-l-0_5">
            <input
              :value="store.settings.inputSideGap"
              class="text_pole width60px text-center"
              type="number"
              :min="INPUT_SIDE_GAP_MIN"
              :max="INPUT_SIDE_GAP_MAX"
              step="1"
              :disabled="!store.settings.floatingChatInput"
              @change="commitNumericSetting($event, 'inputSideGap', INPUT_SIDE_GAP_MIN, INPUT_SIDE_GAP_MAX)"
              @blur="commitNumericSetting($event, 'inputSideGap', INPUT_SIDE_GAP_MIN, INPUT_SIDE_GAP_MAX)"
            />
          </div>
        </div>
        <small class="notes">调整悬浮输入框左右两侧的留白边距（{{ store.settings.inputSideGap }} px）。</small>
      </div>

      <hr />

      <!-- 增强子模块 -->
      <h4>增强子模块</h4>
      <label class="checkbox_label" for="th_modern_wi_editor">
        <input id="th_modern_wi_editor" v-model="store.settings.modernWorldInfoEditor" type="checkbox" />
        <span>现代世界书管理</span>
      </label>
      <small class="notes">优化世界书条目卡片瀑布流与条目编辑网格</small>

      <label
        class="checkbox_label"
        :class="{ 'is-disabled': !store.settings.modernWorldInfoEditor }"
        for="th_modern_wi_select"
      >
        <input
          id="th_modern_wi_select"
          v-model="store.settings.modernWorldSelect"
          type="checkbox"
          :disabled="!store.settings.modernWorldInfoEditor"
        />
        <span>现代世界书选择器</span>
      </label>
      <small class="notes">多端卡片式世界书下拉选择面板与收藏置顶</small>

      <label class="checkbox_label" for="th_modern_cm">
        <input id="th_modern_cm" v-model="store.settings.modernCharacterManagement" type="checkbox" />
        <span>现代角色管理界面</span>
      </label>
      <small class="notes">美化角色卡片列表、头部操作栏与角色编辑抽屉</small>

      <label class="checkbox_label" for="th_modern_preset_editor">
        <input id="th_modern_preset_editor" v-model="store.settings.modernPresetEditor" type="checkbox" />
        <span>现代化预设编辑器 <small style="color: #e5a04b; font-weight: bold; margin-left: 4px;">(实验性)</small></span>
      </label>
      <small class="notes">优化预设提示词顺序列表、支持多选拖拽、分组折叠与单选互斥（大型预设调优中，默认关闭）</small>

      <label class="checkbox_label" for="th_modern_ext_settings">
        <input id="th_modern_ext_settings" v-model="store.settings.modernExtensionSettings" type="checkbox" />
        <span>现代扩展设置抽屉</span>
      </label>
      <small class="notes">将酒馆扩展设置抽屉重排为侧边栏导航与卡片分栏体验，深度兼容菜单精简器等扩展</small>

      <hr />

      <!-- 视觉与性能 -->
      <h4>视觉与性能</h4>
      <label class="checkbox_label" for="th_modern_reduce_motion">
        <input id="th_modern_reduce_motion" v-model="store.settings.reduceMotion" type="checkbox" />
        <span>减弱动态效果</span>
      </label>
      <small class="notes">最小化过渡与缩放动画，降低能耗并提升响应</small>

      <label class="checkbox_label" for="th_modern_reduce_effects">
        <input id="th_modern_reduce_effects" v-model="store.settings.reduceAdvancedEffects" type="checkbox" />
        <span>精简高级特效</span>
      </label>
      <small class="notes">关闭深度阴影与高强度发光滤镜</small>

      <hr />

      <!-- 底部重置按钮 -->
      <div class="flex-container justifyEnd m-t-1">
        <div class="menu_button menu_button_icon reset-button" title="重置现代化界面设置" @click="resetSettings">
          <i class="fa-solid fa-rotate-left"></i>
          <span>恢复默认设置</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  INPUT_BOTTOM_GAP_MAX,
  INPUT_BOTTOM_GAP_MIN,
  INPUT_SIDE_GAP_MAX,
  INPUT_SIDE_GAP_MIN,
  SCRIPT_NAME,
  useModernLayoutStore,
} from '../store';

const store = useModernLayoutStore();

type NumericSettingKey =
  | 'leftSidebarWidth'
  | 'overlayPanelWidth'
  | 'mainChatMaxWidth'
  | 'inputBottomGap'
  | 'inputSideGap';

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
  const popupType = (window as any).SillyTavern?.POPUP_TYPE?.CONFIRM ?? 'confirm';
  const confirmed = await (window as any).SillyTavern?.callGenericPopup?.(
    '确定将现代化界面设置重置为默认值吗？',
    popupType,
  );
  if (confirmed !== true && confirmed !== (window as any).SillyTavern?.POPUP_RESULT?.AFFIRMATIVE) {
    return;
  }
  store.resetSettings();
  if (typeof (window as any).toastr !== 'undefined') {
    (window as any).toastr.info('已恢复现代化界面默认设置。', SCRIPT_NAME);
  }
}
</script>

<style scoped>
.is-disabled {
  opacity: 0.5;
  pointer-events: none;
}
.flex1 {
  flex: 1;
}
.width60px {
  width: 60px !important;
}
.width100px {
  width: 100px !important;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.reset-button {
  width: auto !important;
  white-space: nowrap !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  cursor: pointer !important;
}
</style>
