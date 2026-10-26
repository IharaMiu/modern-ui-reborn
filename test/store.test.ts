import assert from 'node:assert/strict';
import test from 'node:test';
import {
  DEFAULT_INPUT_BOTTOM_GAP,
  DEFAULT_LEFT_SIDEBAR_WIDTH,
  EXTENSION_SETTINGS_KEY,
  ModernLayoutSettings,
  persistSettings,
  readSettings,
} from '../src/store.ts';

test('ModernLayoutSettings parses defaults cleanly', () => {
  const parsed = ModernLayoutSettings.parse({});
  assert.equal(parsed.enabled, true);
  assert.equal(parsed.desktopTwoColumn, true);
  assert.equal(parsed.leftSidebarWidth, DEFAULT_LEFT_SIDEBAR_WIDTH);
  assert.equal(parsed.inputBottomGap, DEFAULT_INPUT_BOTTOM_GAP);
  assert.equal(parsed.singleLineChatInput, false);
  assert.equal(parsed.modernPresetEditor, false);
});

test('ModernLayoutSettings handles singleLineChatInput option correctly', () => {
  const parsed = ModernLayoutSettings.parse({ singleLineChatInput: true });
  assert.equal(parsed.singleLineChatInput, true);

  const fallback = ModernLayoutSettings.parse({ singleLineChatInput: 'invalid' as any });
  assert.equal(fallback.singleLineChatInput, false);
});

test('ModernLayoutSettings clamps out-of-range values with catch defaults', () => {
  const parsed = ModernLayoutSettings.parse({
    leftSidebarWidth: 100, // below min 320
  });
  assert.equal(parsed.leftSidebarWidth, DEFAULT_LEFT_SIDEBAR_WIDTH);
});

test('readSettings handles legacy desktopThreeColumn and width migrations', () => {
  (globalThis as any).extension_settings = {
    [EXTENSION_SETTINGS_KEY]: {
      desktopThreeColumn: false,
      leftSidebarWidth: 340, // legacy default
    },
  };

  const settings = readSettings();
  assert.equal(settings.desktopTwoColumn, false);
  assert.equal(settings.leftSidebarWidth, DEFAULT_LEFT_SIDEBAR_WIDTH);
});

test('persistSettings preserves extra keys in extension_settings', () => {
  (globalThis as any).extension_settings = {
    [EXTENSION_SETTINGS_KEY]: {
      enabled: true,
      th_modern_world_book_favorites: ['fav-book-1', 'fav-book-2'],
    },
  };

  const parsed = ModernLayoutSettings.parse({});
  persistSettings(parsed);

  const saved = (globalThis as any).extension_settings[EXTENSION_SETTINGS_KEY];
  assert.equal(saved.enabled, true);
  assert.deepEqual(saved.th_modern_world_book_favorites, ['fav-book-1', 'fav-book-2']);
});

