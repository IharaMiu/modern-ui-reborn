import { klona } from 'klona';
import { defineStore } from 'pinia';
import { computed, ref, watchEffect } from 'vue';
import { z } from 'zod';

export const SCRIPT_NAME = '现代化界面';
export const EXTENSION_SETTINGS_KEY = 'modern_ui';

const LEGACY_DEFAULT_LEFT_SIDEBAR_WIDTH = 340;
export const DEFAULT_LEFT_SIDEBAR_WIDTH = 360;
export const DEFAULT_OVERLAY_PANEL_WIDTH = 960;
export const DEFAULT_MAIN_CHAT_MIN_WIDTH = 960;
export const DEFAULT_INPUT_BOTTOM_GAP = 15;
export const INPUT_BOTTOM_GAP_MIN = 0;
export const INPUT_BOTTOM_GAP_MAX = 120;
export const DEFAULT_INPUT_SIDE_GAP = 16;
export const INPUT_SIDE_GAP_MIN = 0;
export const INPUT_SIDE_GAP_MAX = 80;

export type ModernLayoutSettings = z.infer<typeof ModernLayoutSettings>;
export const ModernLayoutSettings = z
  .object({
    enabled: z.boolean().default(true).catch(true),
    desktopTwoColumn: z.boolean().default(true).catch(true),
    desktopDockedDrawer: z.boolean().default(false).catch(false),
    leftSidebarWidth: z
      .number()
      .min(320)
      .max(460)
      .default(DEFAULT_LEFT_SIDEBAR_WIDTH)
      .catch(DEFAULT_LEFT_SIDEBAR_WIDTH),
    overlayPanelWidth: z
      .number()
      .min(720)
      .default(DEFAULT_OVERLAY_PANEL_WIDTH)
      .catch(DEFAULT_OVERLAY_PANEL_WIDTH),
    mainChatMaxWidth: z
      .number()
      .min(0)
      .default(DEFAULT_MAIN_CHAT_MIN_WIDTH)
      .catch(DEFAULT_MAIN_CHAT_MIN_WIDTH),
    floatingChatInput: z.boolean().default(true).catch(true),
    inputBottomGap: z
      .number()
      .min(INPUT_BOTTOM_GAP_MIN)
      .max(INPUT_BOTTOM_GAP_MAX)
      .default(DEFAULT_INPUT_BOTTOM_GAP)
      .catch(DEFAULT_INPUT_BOTTOM_GAP),
    inputSideGap: z
      .number()
      .min(INPUT_SIDE_GAP_MIN)
      .max(INPUT_SIDE_GAP_MAX)
      .default(DEFAULT_INPUT_SIDE_GAP)
      .catch(DEFAULT_INPUT_SIDE_GAP),
    quickReplyCollapsed: z.boolean().default(false).catch(false),
    reduceMotion: z.boolean().default(false).catch(false),
    reduceAdvancedEffects: z.boolean().default(false).catch(false),
    modernWorldInfoEditor: z.boolean().default(true).catch(true),
    modernWorldSelect: z.boolean().default(true).catch(true),
    modernCharacterManagement: z.boolean().default(true).catch(true),
    modernExtensionSettings: z.boolean().default(true).catch(true),
  })
  .default({});

function getWindowObject(): any {
  return typeof window !== 'undefined' ? window : globalThis;
}

function getSillyTavernContext() {
  return getWindowObject().SillyTavern?.getContext?.() || {};
}

function getExtensionSettings(): Record<string, any> {
  const win = getWindowObject();
  const context = getSillyTavernContext();
  if (!win.extension_settings && context.extensionSettings) {
    win.extension_settings = context.extensionSettings;
  }
  win.extension_settings = win.extension_settings || {};
  return win.extension_settings;
}

export function readSettings(): ModernLayoutSettings {
  const ext_settings = getExtensionSettings();
  let raw_settings = ext_settings[EXTENSION_SETTINGS_KEY];

  if (!raw_settings || typeof raw_settings !== 'object') {
    raw_settings = {};
  } else {
    raw_settings = klona(raw_settings);
  }

  if (raw_settings.desktopTwoColumn === undefined && typeof raw_settings.desktopThreeColumn === 'boolean') {
    raw_settings.desktopTwoColumn = raw_settings.desktopThreeColumn;
  }
  if (raw_settings.overlayPanelWidth === undefined && raw_settings.leftSidebarWidth === LEGACY_DEFAULT_LEFT_SIDEBAR_WIDTH) {
    raw_settings.leftSidebarWidth = DEFAULT_LEFT_SIDEBAR_WIDTH;
  }

  const result = ModernLayoutSettings.safeParse(raw_settings);
  if (result.success) {
    return result.data;
  }
  console.warn(`[${SCRIPT_NAME}] 设置读取失败，已使用默认设置。`, result.error);
  return ModernLayoutSettings.parse({});
}

export function persistSettings(settingsToSave: ModernLayoutSettings) {
  const ext_settings = getExtensionSettings();
  const current = ext_settings[EXTENSION_SETTINGS_KEY];
  ext_settings[EXTENSION_SETTINGS_KEY] = {
    ...(typeof current === 'object' && current !== null ? current : {}),
    ...klona(settingsToSave),
  };

  const win = getWindowObject();
  const context = getSillyTavernContext();
  if (typeof win.saveSettingsDebounced === 'function') {
    win.saveSettingsDebounced();
  } else if (typeof context.saveSettingsDebounced === 'function') {
    context.saveSettingsDebounced();
  }
}

export const useModernLayoutStore = defineStore(SCRIPT_NAME, () => {
  const win = getWindowObject();
  const settings = ref(readSettings());
  const should_enable = ref(true);

  const es = win.eventSource ?? win.SillyTavern?.getContext?.()?.eventSource;
  const onSettingsLoaded = () => {
    settings.value = readSettings();
  };
  es?.on?.('settings_loaded', onSettingsLoaded);

  const is_active = computed(() => should_enable.value && settings.value.enabled);
  const should_use_two_column = computed(() => is_active.value && settings.value.desktopTwoColumn);

  watchEffect(() => {
    const validSettings = ModernLayoutSettings.parse(klona(settings.value));
    persistSettings(validSettings);
  });

  function resetSettings() {
    settings.value = ModernLayoutSettings.parse({});
  }

  function disableModernLayout() {
    settings.value = { ...settings.value, enabled: false };
  }

  function destroy(options: { unregisterUnique?: boolean } = {}) {
    if (typeof es?.removeListener === 'function') {
      es.removeListener('settings_loaded', onSettingsLoaded);
    } else if (typeof es?.off === 'function') {
      es.off('settings_loaded', onSettingsLoaded);
    }
  }

  return {
    settings,
    should_enable,
    is_active,
    should_use_two_column,
    resetSettings,
    disableModernLayout,
    destroy,
  };
});
