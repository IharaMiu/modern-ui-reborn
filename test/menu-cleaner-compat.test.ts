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

for (const width of [1280, 800]) {
test(`menu cleaner navigation, menu dismissal and QR folding at ${width}px`, { skip: !existsSync(browser) }, () => {
  const index = read('../src/index.ts');
  const ast = ts.createSourceFile('index.ts', index, ts.ScriptTarget.Latest, true);
  const qr = ast.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === 'mountQuickReplyController')!;
  const constants = index.match(/^const (?:QUICK_REPLY_\w+|INPUT_\w+_VARIABLE|BODY_CLASS_QUICK_REPLIES_COLLAPSED) = .*;$/gm)!.join('\n');
  const fixture = `<!doctype html><meta charset="utf-8"><style>${read('../src/style.css')}${read('../src/extension-settings.css')}
  * { transition: none !important; animation: none !important; }</style>
  <body class="th-modern-enabled th-modern-quick-replies-collapsed">
  <div id="rm_extensions_block" class="openDrawer"><div class="extensions_block"><h3>扩展</h3>
    <div id="extensions_settings">
      <div id="first" style="order:5"><div class="inline-drawer"><div class="inline-drawer-toggle inline-drawer-header"><b>First</b></div><div class="inline-drawer-content">First settings</div></div></div>
      <div id="second" style="order:1"><div class="inline-drawer"><div class="inline-drawer-toggle inline-drawer-header"><b>Second</b></div><div class="inline-drawer-content">Second settings</div></div></div>
      <button type="button" id="group" class="mc3-native-subgroup-header" style="order:4" aria-expanded="true">▼ Group</button>
    </div><div id="extensions_settings2"></div></div></div>
  <button id="extensionsMenuButton"></button><div id="extensionsMenu" style="display:flex">
    <button id="wand-group" class="mc3-native-subgroup-header">▼ Wand group</button><button id="action">Action</button>
  </div>
  <div id="form_sheld"><form id="send_form"><div id="qr--bar"><button type="button" id="mc3-qr-toggle-btn" class="mc3-qr-toggle-btn">▼</button><div class="qr--buttons"><button class="qr--button">Reply</button></div></div><div id="nonQRFormItems">Input</div></form></div>
  <pre id="result">PENDING</pre><script>
  const check = (ok, message) => { if (!ok) throw new Error(message); };
  const tick = () => new Promise(resolve => setTimeout(resolve, 80));
  window.requestAnimationFrame = callback => setTimeout(() => callback(performance.now()), 1);
  window.cancelAnimationFrame = clearTimeout;
  const require = () => ({ getHostDocument: () => document, getHostWindow: () => window,
    watch: (read, callback) => { callback(read()); return () => {}; } });
  const load = code => { const exports = {}; new Function('exports', 'require', code)(exports, require); return exports; };
  const {mountExtensionSettings} = load(${JSON.stringify(compile(read('../src/extension-settings-module.ts')))});
  const {mountMenuCleanerCompatibility} = load(${JSON.stringify(compile(read('../src/menu-cleaner-compat.ts')))});
  const {mountQuickReplyController} = load(${JSON.stringify(compile(`
    const {getHostDocument, getHostWindow} = require('host');
    const setHostCssVariable = (name, value) => document.documentElement.style.setProperty(name, value);
    const removeHostCssVariable = name => document.documentElement.style.removeProperty(name);
    ${constants}
    export ${qr.getText(ast)}
  `))});
  (async () => {
    const store = {is_active:true, settings:{modernExtensionSettings:true, quickReplyCollapsed:true}};
    const ext = mountExtensionSettings(store);
    const nav = () => [...document.querySelectorAll('.th-modern-extension-nav-list button')];
    check(nav().map(n=>n.textContent).join('|') === 'Second|▼ Group|First', 'CSS order and subgroup header reach navigation');
    const group = document.getElementById('group'), first = document.getElementById('first');
    group.addEventListener('click', () => { first.classList.toggle('mc3-hidden'); group.setAttribute('aria-expanded', String(!first.classList.contains('mc3-hidden'))); });
    nav()[1].click(); await tick();
    check(nav().length === 2 && nav()[1].getAttribute('aria-expanded') === 'false', 'group collapse hides members without creating a fallback entry');
    nav()[1].click(); await tick();
    check(nav().length === 3, 'group expands again');
    first.style.order = '-1'; await tick();
    check(nav()[0].textContent === 'First', 'live reorder refreshes navigation');
    document.getElementById('extensions_settings2').append(first); await tick();
    check(nav().at(-1).textContent === 'First', 'moving columns updates navigation');
    first.firstElementChild.classList.add('mc3-hidden'); await tick();
    check(!nav().some(n=>n.textContent === 'First'), 'hidden nested drawer does not become an unnamed fallback');
    ext.destroy();
    check(!document.querySelector('.th-modern-extension-nav'), 'navigation cleans up');

    const compat = mountMenuCleanerCompatibility();
    const menu = document.getElementById('extensionsMenu'), trigger = document.getElementById('extensionsMenuButton');
    menu.addEventListener('click', () => { menu.style.display='none'; trigger.setAttribute('aria-expanded','false'); }, true);
    let toggles=0;
    document.getElementById('wand-group').addEventListener('click', e => { toggles++; e.stopImmediatePropagation(); });
    document.getElementById('wand-group').click(); await tick();
    check(menu.style.display==='flex' && toggles===1 && trigger.getAttribute('aria-expanded')==='true', 'capture dismissal preserves subgroup click');
    document.getElementById('action').click(); await tick();
    check(menu.style.display==='none', 'ordinary actions still close the menu');
    compat.destroy();

    const controller = mountQuickReplyController(store); await tick();
    const bar = document.getElementById('qr--bar'), cleaner = document.getElementById('mc3-qr-toggle-btn');
    const modern = document.getElementById('th-modern-quick-reply-toggle');
    check(modern.hidden && !bar.inert && getComputedStyle(bar).opacity==='1', 'cleaner owns folding even when modern saved state is collapsed: '+modern.hidden+' '+bar.inert+' '+getComputedStyle(bar).opacity);
    check(getComputedStyle(cleaner).pointerEvents==='auto', 'cleaner toggle can receive clicks');
    bar.querySelector('.qr--buttons').classList.add('mc3-qr-content-collapsed'); await tick();
    check(getComputedStyle(bar.querySelector('.qr--buttons')).display==='none' && !bar.inert, 'cleaner collapse leaves toggle usable');
    bar.querySelector('.qr--buttons').classList.remove('mc3-qr-content-collapsed');
    cleaner.style.display='none'; await tick();
    check(!modern.hidden && bar.inert && !document.body.classList.contains('th-modern-quick-reply-external'), 'disabling cleaner fold restores modern fold');
    cleaner.style.display='inline-flex'; await tick();
    check(modern.hidden && !bar.inert, 'cleaner fold can be enabled again');
    controller.destroy();
    check(!document.body.classList.contains('th-modern-quick-reply-external') && !bar.inert, 'QR cleanup restores bar');
    const cleanerSource = ${JSON.stringify(process.env.MENU_CLEANER_SOURCE ? readFileSync(process.env.MENU_CLEANER_SOURCE, 'utf8') : '')};
    if (cleanerSource) {
      first.firstElementChild.classList.remove('mc3-hidden');
      cleaner.remove();
      new Function(cleanerSource)();
      const api = window.__mc3;
      check(api, 'actual cleaner script initializes');
      const realExt = mountExtensionSettings(store), realQr = mountQuickReplyController(store);
      const records = api.scanGroup(api.getGroup('extensionsSettings'));
      const member = records.find(r => r.unit?.id === 'first' || r.el.id === 'first');
      check(member, 'actual cleaner scans extension');
      const subgroup = api.addSubgroup('extensionsSettings');
      subgroup.name = 'Actual group'; subgroup.memberKeys = [member.key];
      api.applyAll(); await tick();
      const getGroupButton = () => matchMedia('(max-width:899.98px)').matches
        ? document.querySelector('#extensions_settings > .mc3-native-subgroup-header')
        : nav().find(n=>n.textContent.includes('Actual group'));
      const groupButton = getGroupButton();
      check(groupButton, 'actual cleaner group reaches navigation');
      groupButton.focus(); groupButton.click(); await tick();
      check(!nav().some(n=>n.textContent === 'First'), 'actual cleaner collapses group');
      check(document.activeElement === getGroupButton(), 'group retains keyboard focus');
      getGroupButton().click(); await tick();
      check(nav().some(n=>n.textContent === 'First'), 'actual cleaner expands group');
      api.setColumnMode('single'); await tick();
      check(document.getElementById('extensions_settings').contains(first), 'actual single-column move');
      api.settings.enableQrFold = true; api.applyAll(); await tick();
      check(document.getElementById('th-modern-quick-reply-toggle').hidden, 'actual QR folding owns toggle');
      document.getElementById('mc3-qr-toggle-btn').click(); await tick();
      check(bar.classList.contains('mc3-qr-bar-collapsed') && !bar.inert, 'actual QR collapses');
      document.getElementById('mc3-qr-toggle-btn').click(); await tick();
      check(!bar.classList.contains('mc3-qr-bar-collapsed'), 'actual QR expands');
      api.settings.enableQrFold = false; api.applyAll(); await tick();
      check(!document.getElementById('th-modern-quick-reply-toggle').hidden, 'actual QR fold can be disabled');
      const realCompat = mountMenuCleanerCompatibility();
      const wandMember = api.scanGroup(api.getGroup('extensionsMenu')).find(r=>r.el.id==='action');
      const wandSubgroup = api.addSubgroup('extensionsMenu');
      wandSubgroup.memberKeys=[wandMember.key]; api.applyAll(); await tick();
      menu.style.display='flex';
      menu.querySelector('.mc3-native-subgroup-header[data-gid="extensionsMenu"]').click(); await tick();
      check(menu.style.display==='flex' && wandSubgroup.collapsed, 'actual wand subgroup toggles without dismissing native menu');
      realCompat.destroy(); realExt.destroy(); realQr.destroy();
    }
    document.getElementById('result').textContent='PASS';
  })().catch(error => { document.getElementById('result').textContent='FAIL: '+error.stack; });
  </script>`;
  const directory = mkdtempSync(join(tmpdir(), 'modern-menu-cleaner-test-'));
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
