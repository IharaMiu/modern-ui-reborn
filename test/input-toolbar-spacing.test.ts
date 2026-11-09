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
const source = read('../src/index.ts');
const ast = ts.createSourceFile('index.ts', source, ts.ScriptTarget.Latest, true);
const fn = (name: string) => ast.statements.find(node => ts.isFunctionDeclaration(node) && node.name?.text === name)!.getText(ast);
const constants = source.match(/^const (?:QUICK_REPLY_\w+|INPUT_\w+_VARIABLE|BODY_CLASS_QUICK_REPLIES_COLLAPSED) = .*;$/gm)!.join('\n');
const controller = ts.transpileModule(`${constants}
  const getHostDocument = () => document, getHostWindow = () => window;
  const setHostCssVariable = (name, value) => [document.documentElement, document.body].forEach(el => el.style.setProperty(name, value));
  const removeHostCssVariable = name => [document.documentElement, document.body].forEach(el => el.style.removeProperty(name));
  ${fn('parseCssPixelValue')}
  ${fn('mountQuickReplyController')}`, { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;

for (const width of [1440, 390]) {
  test(`reply toolbar stays above input, plugins and attachments at ${width}px`, { skip: !existsSync(browser) }, () => {
    const fixture = `<!doctype html><meta charset="utf-8"><style>
      :root { --SmartThemeBodyColor:#eee; --SmartThemeBlurTintColor:#252525; --SmartThemeChatTintColor:#202020;
        --SmartThemeQuoteColor:#9ac0e8; --mainFontSize:16px; --SmartThemeShadowColor:#000; }
      body { margin:0; font:16px sans-serif; background:#202020; color:#eee; }
      #form_sheld { position:relative; margin-top:240px; }
      #send_form { position:relative; }
      textarea { box-sizing:border-box; width:100%; height:80px; color:inherit; background:#252525; }
      .displayNone { display:none !important; }
      ${read('../src/style.css')}
      * { transition:none !important; animation:none !important; }
    </style><body class="th-modern-enabled">
      <div id="form_sheld"><form id="send_form">
        <div id="qr--bar"><div class="qr--buttons"><button class="qr--button">继续对话</button><button class="qr--button">查看角色状态</button></div></div>
        <div id="plugin" style="height:40px">插件操作区</div>
        <div id="file_form" class="displayNone" style="height:48px">附件</div>
        <div id="nonQRFormItems"><textarea id="send_textarea">第一行文字不会被遮挡\n第二行内容\n第三行内容</textarea><div id="leftSendForm"></div><div id="rightSendForm"></div></div>
      </form></div><pre id="result">PENDING</pre><script>
      window.requestAnimationFrame = callback => setTimeout(() => callback(performance.now()), 1);
      window.cancelAnimationFrame = clearTimeout;
      ${controller}
      const check=(ok,message)=>{if(!ok)throw Error(message)};
      const tick=()=>new Promise(r=>setTimeout(r,100));
      (async()=>{
        const store={settings:{quickReplyCollapsed:false}};
        const runtime=mountQuickReplyController(store);
        const rect=id=>document.getElementById(id).getBoundingClientRect();
        for(const floating of [false,true]) for(const single of [false,true]) for(const attachments of [false,true]) {
          document.body.classList.toggle('th-modern-floating-input',floating);
          document.body.classList.toggle('th-modern-single-line-input',single);
          document.getElementById('file_form').classList.toggle('displayNone',!attachments);
          document.getElementById('send_textarea').style.height=attachments?'160px':'80px';
          await tick();
          const bar=rect('qr--bar'), toggle=rect('th-modern-quick-reply-toggle');
          for(const id of ['send_textarea','plugin',...(attachments?['file_form']:[])]) {
            check(bar.bottom<=rect(id).top-7.5,'toolbar overlaps '+id+' '+JSON.stringify({floating,single,attachments,barBottom:bar.bottom,inputTop:rect(id).top,offset:getComputedStyle(document.body).getPropertyValue('--th-modern-input-stack-offset')}));
            check(toggle.bottom<=rect(id).top-7.5,'toggle overlaps '+id);
          }
          const reserve=parseFloat(getComputedStyle(document.body).getPropertyValue('--th-modern-quick-reply-reserve-height'));
          check(reserve>=Math.max(bar.height,toggle.height)+7.5,'chat reserve omits toolbar');
        }
        document.body.classList.add('th-modern-quick-replies-collapsed'); await tick();
        check(rect('qr--bar').height===0,'collapsed toolbar occupies space');
        check(rect('th-modern-quick-reply-toggle').bottom<=rect('send_textarea').top-7.5,'collapsed toggle overlaps text');
        document.body.classList.remove('th-modern-quick-replies-collapsed'); await tick();
        check(rect('qr--bar').height>=28,'expanded toolbar is clipped after collapse');
        runtime.destroy();
        check(!document.getElementById('th-modern-quick-reply-toggle'),'toggle cleanup');
        document.getElementById('result').textContent='PASS';
      })().catch(e=>document.getElementById('result').textContent='FAIL: '+e.stack);
    </script>`;
    const directory = mkdtempSync(join(tmpdir(), 'modern-input-spacing-'));
    try {
      const path = join(directory, 'fixture.html'); writeFileSync(path, fixture);
      const result = spawnSync(browser, ['--headless', '--disable-gpu', '--no-first-run', `--window-size=${width},900`,
        `--user-data-dir=${join(directory, 'profile')}`, '--dump-dom', '--virtual-time-budget=5000', pathToFileURL(path).href],
        { encoding:'utf8', timeout:30000, maxBuffer:3*1024*1024, windowsHide:true });
      assert.ifError(result.error);
      const report = result.stdout.match(/<pre id="result">([\s\S]*?)<\/pre>/)?.[1];
      assert.equal(report, 'PASS', report ?? result.stderr);
    } finally { rmSync(directory, { recursive:true, force:true }); }
  });
}
