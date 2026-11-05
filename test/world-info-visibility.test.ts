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
      window.$ = () => ({ on() {}, off() {} });
      window.SillyTavern = { reloadWorldInfoEditor() {} };
      const host = { getHostDocument: () => document, getHostWindow: () => window };
      let selectors;
      const require = name => name === 'vue' ? {watch: (read, callback) => { callback(read()); return () => {}; }}
        : name.includes('mobile-world-select-module') ? selectors : host;
      const load = code => { const exports = {}; new Function('exports', 'require', code)(exports, require); return exports; };
      selectors = load(${JSON.stringify(compile(read('../src/mobile-world-select-module.ts')))});
      const {mountWorldInfoEditor, TestEnhancer} = load(${JSON.stringify(compile(read('../src/world-info-module.ts') + '\nexport const TestEnhancer = NativeWorldInfoEnhancer;'))});
      let enhancer;
      const mount = TestEnhancer.prototype.mount;
      TestEnhancer.prototype.mount = function() { enhancer = this; return mount.call(this); };
      const visible = node => !!node && node.getClientRects().length > 0 && getComputedStyle(node).visibility !== 'hidden';
      const checkSelectors = message => {
        for (const id of ['world_info', 'world_editor_select']) {
          check(visible(document.querySelector('.th-modern-mobile-world-control[data-source="'+id+'"]')), message+': '+id);
        }
      };
      (async () => {
        const controller = mountWorldInfoEditor({is_active:true, settings:{modernWorldInfoEditor:true, modernWorldSelect:true}});
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
        controller.destroy(); document.getElementById('result').textContent = 'PASS';
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
