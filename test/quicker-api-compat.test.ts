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
const index = read('../src/index.ts');
const ast = ts.createSourceFile('index.ts', index, ts.ScriptTarget.Latest, true);
const functions = ['createMovedElementRestore', 'mountApiPanelEnhancements'].map(name =>
  ast.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === name)!.getText(ast)).join('\n');
const constants = index.match(/^const (?:BODY_CLASS_TWO_COLUMN|DESKTOP_TWO_COLUMN_QUERY|API_SOURCE_GROUP_CLASS|API_FOOTER_CLASS) = .*;$/gm)!.join('\n');
const code = ts.transpileModule(`const getHostDocument = () => document; ${constants}\n${functions}`, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None },
}).outputText;

for (const width of [1280, 800, 390]) {
  test(`Quicker Api placement, narrow columns and cleanup at ${width}px`, { skip: !existsSync(browser) }, () => {
    // The upstream panel is inserted directly after #chat_completion_source.
    const fixture = `<!doctype html><meta charset="utf-8"><style>
      .quicker-api__field { display:grid; grid-template-columns:minmax(5.5rem,7.5rem) minmax(0,1fr); gap:.55rem; margin-top:.45rem; }
      .quicker-api__row { display:flex; flex-wrap:wrap; gap:.4rem; min-width:0; }
      .quicker-api__row > input, #quicker_api_profile_select, #quicker_api_format { min-width:10rem; flex:1 1 14rem; }
      .quicker-api__url-row { flex-wrap:nowrap; }
      .quicker-api__key-actions { display:flex; gap:.4rem; }
      @media (max-width:760px) {
        .quicker-api__key-row { display:contents; }
        .quicker-api__key-actions { grid-column:2; grid-row:1; }
      }
      .quicker-api { padding:.75rem; border:1px solid; }
      .menu_button { flex-shrink:0; }
      #quicker_api_body[hidden] { display:none !important; }
      #quicker_api_quick_right { flex:0 0 50px; width:50px; height:50px; order:1; }
      ${read('../src/style.css')}${read('../src/quicker-api-compat.css')}
      :root { --SmartThemeBodyColor:#eee; --SmartThemeEmColor:#ddd; --SmartThemeBorderColor:#555;
        --SmartThemeBlurTintColor:#252525; --SmartThemeQuoteColor:#89b4fa; --mainFontSize:16px; }
      #rm_api_block { width:min(940px,100%); }
      body { width:min(${width}px,100%); margin:0; }
      #openai_api { min-width:0; }
      * { transition:none !important; animation:none !important; }
      </style><body class="th-modern-enabled th-modern-two-column">
      <div id="rm_api_block" class="openDrawer"><div class="flex-container flexFlowColumn">
        <div id="main-API-selector-block"><select id="main_api"><option value="openai">Chat</option><option value="kobold">Other</option></select></div>
        <div id="openai_api"><h4>Source</h4><select id="chat_completion_source"><option>Custom</option><option>Claude</option></select><form id="custom_form" style="display:none"></form></div>
      </div></div>
      <form id="send_form"><div id="rightSendForm"><div id="quicker_api_quick_right" tabindex="0">⚡</div><div id="send_but">Send</div></div></form>
      <template id="toolbar"><section id="quicker_api" class="quicker-api">
        <button class="quicker-api__toggle" type="button">Quicker Api</button><div id="quicker_api_body">
        <div class="quicker-api__field"><label>配置</label><div class="quicker-api__row"><select id="quicker_api_profile_select"><option>Long profile name</option></select><button class="menu_button">保存</button><button class="menu_button">复制</button><button class="menu_button">删除</button></div></div>
        <div class="quicker-api__field"><label>格式</label><select id="quicker_api_format"><option>OpenAI Compatible</option></select></div>
        <div class="quicker-api__field"><label>URL</label><div class="quicker-api__row quicker-api__url-row"><input type="url" value="https://example.com/v1"><button class="menu_button">URL</button></div></div>
        <div class="quicker-api__field quicker-api__key-field"><label>Key</label><div class="quicker-api__row quicker-api__key-row"><input type="text" placeholder="无凭据"><div class="quicker-api__key-actions"><button class="menu_button">显示</button><button class="menu_button">复制</button></div></div></div>
        </div></section></template>
      <pre id="result">PENDING</pre><script>${code}
      const check = (ok, message) => { if (!ok) throw new Error(message); };
      window.requestAnimationFrame = callback => setTimeout(() => callback(performance.now()), 1);
      window.cancelAnimationFrame = clearTimeout;
      const tick = () => new Promise(resolve => setTimeout(resolve, 100));
      const insert = () => {
        const node = document.getElementById('toolbar').content.firstElementChild.cloneNode(true);
        document.getElementById('chat_completion_source').after(node); return node;
      };
      (async () => {
        for (const late of [false, true]) {
          if (!late) insert();
          const mounted = mountApiPanelEnhancements();
          if (late) insert();
          await tick();
          const panel = document.getElementById('quicker_api'), source = document.getElementById('chat_completion_source');
          check(panel.parentElement.id === 'openai_api', 'panel stays in provider settings for '+(late?'late':'early')+' load');
          check(source.closest('.th-modern-api-source-group'), 'source remains in source group');
          check(!panel.contains(source), 'source is not duplicated in panel');
          check(getComputedStyle(document.getElementById('custom_form')).display === 'none', 'native hidden form stays hidden');
          check(panel.scrollWidth <= panel.clientWidth + 1, 'panel controls do not overflow');
          if (${width} < 760) check(getComputedStyle(panel.querySelector('.quicker-api__key-row')).display === 'flex', 'key actions do not create an implicit field column');
          const body = document.getElementById('quicker_api_body'); body.hidden = true;
          check(getComputedStyle(body).display === 'none', 'collapsed body stays hidden'); body.hidden = false;
          panel.querySelector('button').focus();
          check(document.activeElement === panel.querySelector('button'), 'toggle is keyboard focusable');
          document.getElementById('openai_api').style.display = 'none';
          check(!panel.getClientRects().length, 'switching provider hides panel');
          document.getElementById('openai_api').style.display = '';
          mounted.destroy();
          check(source.parentElement.id === 'openai_api' && source.nextElementSibling === panel, 'disable restores native insertion point');
          check(!source.hasAttribute('size') && !document.querySelector('.th-modern-api-source-group'), 'source layout cleans up');
          panel.remove();
        }
        const entry = document.getElementById('quicker_api_quick_right');
        check(entry.getBoundingClientRect().width === 32, 'composer entry matches icon width');
        check(+getComputedStyle(entry).order < +getComputedStyle(document.getElementById('send_but')).order, 'entry precedes send button');
        document.getElementById('result').textContent = 'PASS';
      })().catch(error => document.getElementById('result').textContent = 'FAIL: '+error.stack);
      </script>`;
    const directory = mkdtempSync(join(tmpdir(), 'modern-quicker-test-'));
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
