import assert from 'node:assert/strict';
import test from 'node:test';
import { BAIBAI_COMPAT_CHANGE, getBaiBaiOwnership, mountBaiBaiCompatibility } from '../src/baibai-compat.ts';

test('detects active BaiBai features only when the plugin is loaded', () => {
  assert.deepEqual(getBaiBaiOwnership(false, { presetGroupingEnabled: true, worldInfoListOptimizationEnabled: true }), { preset: false, world: false });
  assert.deepEqual(getBaiBaiOwnership(true, undefined), { preset: true, world: true });
  const disabled = { presetGroupingEnabled: false, presetToggleOptimizationEnabled: false, presetDragOptimizationEnabled: false, presetSwitchOptimizationEnabled: false, presetInterfaceCollapseEnabled: false, worldInfoListOptimizationEnabled: false, worldInfoPageOptimizationEnabled: false, worldInfoDrawerOptimizationEnabled: false };
  assert.deepEqual(getBaiBaiOwnership(true, disabled), { preset: false, world: false });
  assert.deepEqual(getBaiBaiOwnership(true, { ...disabled, presetPromptCodeMirrorEditorEnabled: true }), { preset: true, world: false });
  assert.deepEqual(getBaiBaiOwnership(true, { ...disabled, worldInfoListOptimizationEnabled: true }), { preset: false, world: true });
});

test('compatibility follows plugin settings and cleans up its state', () => {
  const classes = new Set<string>();
  const events: string[] = [];
  let tick = () => {};
  let cleared = false;
  const settings = { baiBaiToolkit: { presetGroupingEnabled: false, presetToggleOptimizationEnabled: false, presetDragOptimizationEnabled: false, presetSwitchOptimizationEnabled: false, presetInterfaceCollapseEnabled: false, worldInfoListOptimizationEnabled: false, worldInfoPageOptimizationEnabled: false, worldInfoDrawerOptimizationEnabled: false } };
  const win = {
    document: { body: { classList: { toggle: (name: string, enabled: boolean) => enabled ? classes.add(name) : classes.delete(name), remove: (...names: string[]) => names.forEach(name => classes.delete(name)) } }, dispatchEvent: (event: Event) => events.push(event.type) },
    Event,
    extension_settings: settings,
    setInterval: (callback: () => void) => { tick = callback; return 1; },
    clearInterval: () => { cleared = true; },
    __baiBaiToolkitExtensionInstalled: { installed: true },
  };
  const controller = mountBaiBaiCompatibility(win as unknown as Window & typeof globalThis);
  assert.equal(classes.size, 0);
  settings.baiBaiToolkit.worldInfoListOptimizationEnabled = true;
  tick();
  assert.deepEqual([...classes], ['th-modern-baibai-world']);
  settings.baiBaiToolkit.presetGroupingEnabled = true;
  tick();
  assert.equal(classes.has('th-modern-baibai-preset'), true);
  tick();
  assert.deepEqual(events, [BAIBAI_COMPAT_CHANGE, BAIBAI_COMPAT_CHANGE, BAIBAI_COMPAT_CHANGE]);
  controller.destroy();
  assert.equal(classes.size, 0);
  assert.equal(cleared, true);
});
