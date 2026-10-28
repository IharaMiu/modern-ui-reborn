export const BAIBAI_COMPAT_CHANGE = 'th-modern-baibai-compat-change';

type BaiBaiSettings = Record<string, unknown> | undefined;

/** 柏宝箱只有实际加载时才拥有界面，遗留设置不能触发让位。 */
export function getBaiBaiOwnership(installed: boolean, settings: BaiBaiSettings) {
  if (!installed) return { preset: false, world: false };
  const enabled = (key: string, defaultValue: boolean) => typeof settings?.[key] === 'boolean' ? settings[key] === true : defaultValue;
  return {
    preset: ['presetGroupingEnabled', 'presetToggleOptimizationEnabled', 'presetDragOptimizationEnabled', 'presetSwitchOptimizationEnabled', 'presetInterfaceCollapseEnabled']
      .some(key => enabled(key, true)) || enabled('presetPromptCodeMirrorEditorEnabled', false) || enabled('presetAutoSaveAfterPromptEditEnabled', false),
    world: ['worldInfoListOptimizationEnabled', 'worldInfoPageOptimizationEnabled', 'worldInfoDrawerOptimizationEnabled']
      .some(key => enabled(key, true)),
  };
}

export function mountBaiBaiCompatibility(win: Window & typeof globalThis): { destroy: () => void } {
  const doc = win.document;
  let signature = '';
  const update = () => {
    const host = win as any;
    let settings = host.extension_settings;
    try { settings = host.SillyTavern?.getContext?.()?.extensionSettings ?? settings; } catch { /* Host context may not be ready yet. */ }
    const next = getBaiBaiOwnership(host.__baiBaiToolkitExtensionInstalled?.installed === true, settings?.baiBaiToolkit);
    const nextSignature = `${next.preset}:${next.world}`;
    if (signature === nextSignature) return;
    signature = nextSignature;
    doc.body.classList.toggle('th-modern-baibai-preset', next.preset);
    doc.body.classList.toggle('th-modern-baibai-world', next.world);
    doc.dispatchEvent(new win.Event(BAIBAI_COMPAT_CHANGE));
  };
  update();
  const timer = win.setInterval(update, 1000);
  return { destroy() {
    win.clearInterval(timer);
    doc.body.classList.remove('th-modern-baibai-preset', 'th-modern-baibai-world');
  } };
}
