import assert from 'node:assert/strict';
import test from 'node:test';
import { existsSync, mkdtempSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';
import ts from 'typescript';

const browser = process.env.CHROME_BIN ?? 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';
const read = (path: string) => readFileSync(new URL(path, import.meta.url), 'utf8');
const compile = (source: string) => ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;

for (const width of [1280, 800, 390]) {
  test(`world selectors recover after closing details and changing books at ${width}px`, { skip: !existsSync(browser) }, () => {
    const fixture = `<!doctype html><meta charset="utf-8"><style>${read('../src/world-info.css')}${read('../src/mobile-world-select.css')}
      #WorldInfo { width:100%; height:800px; } #WorldInfo:not(.openDrawer) { display:none; }
      </style><body class="th-modern-enabled">
      <div id="WorldInfo" class="openDrawer"><div id="wiTopBlock"><div id="WIMultiSelector"><div class="range-block-range">
        <select id="world_info" multiple><option value="A">Book A</option></select>
      </div></div></div><div id="world_popup"><div class="flex-container">
        <button id="world_create_button">Create</button><select id="world_editor_select"><option value="A">Book A</option><option value="B">Book B</option></select>
      </div><div class="flex-container"><input id="world_info_search"></div><div id="world_popup_entries_list"></div></div></div>
      <div id="selected-entry"></div><pre id="result">PENDING</pre><script>
      const check = (ok, message) => { if (!ok) throw new Error(message); };
      const tick = () => new Promise(resolve => setTimeout(resolve, 80));
      window.requestAnimationFrame = callback => setTimeout(() => callback(performance.now()), 1);
      window.cancelAnimationFrame = clearTimeout;
      const handlers = new Map();
      window.$ = node => ({
        on(name, selector, handler) {
          if (typeof selector === 'function') { handler = selector; selector = null; }
          const entries = handlers.get(node) ?? []; entries.push({name, selector, handler}); handlers.set(node, entries);
        },
        off(name, selector, handler) {
          if (typeof selector === 'function') { handler = selector; selector = null; }
          handlers.set(node, (handlers.get(node) ?? []).filter(entry => entry.name !== name || entry.handler !== handler || entry.selector !== selector));
        },
        trigger(name) {
          for (let current = node; current; current = current.parentNode) {
            for (const entry of handlers.get(current) ?? []) {
              if (entry.name.split('.')[0] === name && (!entry.selector || node.matches(entry.selector))) entry.handler({target:node});
            }
          }
        },
      });
      window.SillyTavern = { reloadWorldInfoEditor() {} };
      const host = { getHostDocument: () => document, getHostWindow: () => window };
      let selectors;
      const require = name => name === 'vue' ? {watch: (read, callback) => { callback(read()); return () => {}; }}
        : name.includes('mobile-world-select-module') ? selectors : host;
      const load = code => { const exports = {}; new Function('exports', 'require', code)(exports, require); return exports; };
      selectors = load(${JSON.stringify(compile(read('../src/mobile-world-select-module.ts') + '\nexport const TestManager = MobileWorldSelectManager;'))});
      let controllerRefreshes = 0;
      const mountControllers = selectors.TestManager.prototype.mountControllers;
      selectors.TestManager.prototype.mountControllers = function() { controllerRefreshes++; return mountControllers.call(this); };
      const {mountWorldInfoEditor, TestEnhancer} = load(${JSON.stringify(compile(read('../src/world-info-module.ts') + '\nexport const TestEnhancer = NativeWorldInfoEnhancer;'))});
      let enhancer;
      const mount = TestEnhancer.prototype.mount;
      TestEnhancer.prototype.mount = function() { enhancer = this; return mount.call(this); };
      const visible = node => !!node && node.getClientRects().length > 0 && getComputedStyle(node).visibility !== 'hidden';
      const checkSelectors = message => {
        check(document.getElementById('WorldInfo').classList.contains('th-modern-wi-enabled'), message+': editor mounted');
        check(document.getElementById('WorldInfo').classList.contains('th-modern-world-select-custom'), message+': custom selectors mounted');
        for (const id of ['world_info', 'world_editor_select']) {
          check(visible(document.querySelector('.th-modern-mobile-world-control[data-source="'+id+'"]')), message+': '+id);
        }
      };
      (async () => {
        const initialPanel = document.getElementById('WorldInfo');
        const replacementPanel = initialPanel.cloneNode(true);
        const delayedPopup = document.getElementById('world_popup');
        initialPanel.remove();
        delayedPopup.remove();
        const controller = mountWorldInfoEditor({is_active:true, settings:{modernWorldInfoEditor:true, modernWorldSelect:true}});
        await tick();
        document.body.prepend(initialPanel);
        await tick();
        initialPanel.append(delayedPopup);
        await tick(); checkSelectors('initial selectors visible');
        const panel = document.getElementById('WorldInfo');
        const openDetail = () => {
          enhancer.selectedEntry = document.getElementById('selected-entry');
          enhancer.mobileDetailOpen = true; enhancer.syncResponsiveMode();
        };
        openDetail();
        if (matchMedia('(max-width:899.98px)').matches) {
          check(!visible(document.querySelector('[data-source="world_info"]')), 'detail hides global selector');
          check(!visible(document.querySelector('[data-source="world_editor_select"]')), 'detail hides editor selector');
        }
        panel.classList.remove('openDrawer'); await tick();
        panel.classList.add('openDrawer'); await tick();
        checkSelectors('closing and reopening restores both selectors');
        openDetail();
        document.getElementById('world_editor_select').value = 'B';
        document.getElementById('world_editor_select').dispatchEvent(new Event('change', {bubbles:true}));
        await tick(); checkSelectors('book change clears stale detail flags');
        for (const id of ['world_info', 'world_editor_select']) {
          document.querySelector('[data-source="'+id+'"] .th-modern-mobile-world-trigger').click(); await tick();
          check(document.querySelector('dialog.th-modern-mobile-world-picker')?.open, 'recovered selector opens: '+id);
          document.querySelector('.th-modern-mobile-world-picker-close').click(); await tick();
        }
        check(!panel.classList.contains('th-modern-wi-mobile-detail-open'), 'root detail flag cleared');
        check(!document.querySelector('.th-modern-wi-detail-open'), 'shell detail flag cleared');
        panel.replaceWith(replacementPanel); await tick();
        checkSelectors('replacing the panel restores selectors');
        for (const id of ['world_info', 'world_editor_select']) {
          const source = document.getElementById(id);
          source.replaceWith(source.cloneNode(true)); await tick();
          const current = document.getElementById(id);
          const select2 = document.createElement('span'); select2.className = 'select2-container';
          current.after(select2); await tick();
          check(!visible(select2), 'late Select2 stays hidden: '+id);
          checkSelectors('source replacement and late Select2');
          document.querySelector('[data-source="'+id+'"] .th-modern-mobile-world-trigger').click(); await tick();
          check(document.querySelector('dialog.th-modern-mobile-world-picker')?.open, 'replacement selector opens: '+id);
          replacementPanel.classList.remove('openDrawer'); await tick();
          check(!document.querySelector('dialog.th-modern-mobile-world-picker'), 'replacement panel closes picker');
          replacementPanel.classList.add('openDrawer'); await tick();
        }
        document.getElementById('world_editor_select').value = 'B';
        window.$(document.getElementById('world_editor_select')).trigger('change');
        await tick();
        check(enhancer.selectedWorldName === 'Book B', 'replacement selector change reaches editor');
        await tick();
        const refreshesBeforeChat = controllerRefreshes;
        const chat = document.createElement('div'); document.body.append(chat);
        for (let index = 0; index < 10; index++) {
          for (let token = 0; token < 10; token++) chat.append(document.createElement('span'));
          await tick();
        }
        check(controllerRefreshes === refreshesBeforeChat, 'chat streaming does not rescan world selectors');
        let mutations = 0;
        const observer = new MutationObserver(records => { mutations += records.length; });
        observer.observe(replacementPanel, {attributes:true, childList:true, subtree:true});
        await tick(); const settled = mutations; await tick();
        check(mutations === settled, 'recovery does not cause a refresh loop'); observer.disconnect();
        controller.destroy();
        check((handlers.get(document) ?? []).length === 0, 'destroy removes delegated world change handler');
        replacementPanel.append(document.createElement('div')); await tick();
        check(!document.querySelector('.th-modern-mobile-world-control'), 'destroy removes controllers and stops recovery');
        const {PresetEditor} = load(${JSON.stringify(compile(read('../src/preset-module.ts')))});
        const presetBlock = document.createElement('div');
        presetBlock.id = 'respective-presets-block';
        presetBlock.innerHTML = '<select id="settings_preset_openai"><option value="A">A</option><option value="B">B</option></select>';
        document.body.append(presetBlock);
        const presetEditor = new PresetEditor({is_active:true, settings:{modernPresetEditor:true}});
        presetEditor.renderDirty = () => {};
        let writes = 0;
        let allowWrite = false;
        presetEditor.flushEditorApply = () => { writes++; return allowWrite; };
        presetEditor.ensureToolbar(presetBlock);
        const oldPresetSelect = document.getElementById('settings_preset_openai');
        oldPresetSelect.replaceWith(oldPresetSelect.cloneNode(true));
        const presetSelect = document.getElementById('settings_preset_openai');
        presetSelect.value = 'B'; presetSelect.dispatchEvent(new Event('change', {bubbles:true}));
        check(writes === 1 && presetSelect.value === 'A', 'replacement preset selector blocks switch when draft cannot be written');
        allowWrite = true;
        presetSelect.value = 'B'; presetSelect.dispatchEvent(new Event('change', {bubbles:true}));
        check(writes === 2 && presetEditor.isSwitchingPreset, 'replacement preset selector flushes draft before switching');
        const presetPanel = document.createElement('div'); presetPanel.id = 'left-nav-panel';
        presetPanel.className = 'openDrawer';
        presetPanel.innerHTML = '<div id="openai_settings"></div><div id="completion_prompt_manager"></div>';
        document.body.append(presetPanel);
        host.getPromptGroups = () => [];
        presetEditor.host = {getPromptManager: () => ({serviceSettings:{}})};
        for (const method of ['ensurePanelPin', 'ensurePromptShell', 'applyTab', 'loadCollapsed', 'syncEditor', 'ensureDirtyPolling']) presetEditor[method] = () => {};
        presetEditor.buildListSignature = () => '';
        const syncPreset = presetEditor.sync.bind(presetEditor);
        let presetSyncs = 0;
        presetEditor.sync = () => { presetSyncs++; syncPreset(); };
        presetEditor.sync();
        for (let index = 0; index < 6; index++) await tick();
        check(presetSyncs <= 2, 'idle preset panel does not continuously schedule itself');
        presetEditor.destroy();
        const writesAfterDestroy = writes;
        presetSelect.dispatchEvent(new Event('change', {bubbles:true}));
        check(writes === writesAfterDestroy, 'preset teardown removes delegated listener');
        document.getElementById('result').textContent = 'PASS';
      })().catch(error => { document.getElementById('result').textContent = 'FAIL: '+error.stack; });
      </script>`;
    const directory = mkdtempSync(join(tmpdir(), 'modern-world-visibility-test-'));
    try {
      const path = join(directory, 'fixture.html');
      writeFileSync(path, fixture);
      const result = spawnSync(browser, ['--headless', '--disable-gpu', '--no-first-run', `--window-size=${width},900`,
        `--user-data-dir=${join(directory, 'profile')}`, '--dump-dom', '--virtual-time-budget=5000', pathToFileURL(path).href],
      { encoding: 'utf8', timeout: 30000, maxBuffer: 3 * 1024 * 1024, windowsHide: true });
      assert.ifError(result.error);
      const report = result.stdout.match(/<pre id="result">([\s\S]*?)<\/pre>/)?.[1];
      assert.equal(report, 'PASS', report ?? result.stderr);
    } finally {
      rmSync(directory, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
    }
  });
}
