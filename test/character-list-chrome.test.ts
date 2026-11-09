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

for (const width of [1280, 390]) {
  test(`character empty header and selection count at ${width}px`, { skip: !existsSync(browser) }, () => {
    const code = compile(read('../src/character-management-module.ts'));
    const fixture = `<!doctype html><meta charset="utf-8"><style>${read('../src/character-management.css')}</style>
      <body class="th-modern-enabled"><div id="right-nav-panel" data-menu-type="characters">
      <div id="rm_PinAndTabs"><div id="rm_button_selected_ch"><h2> </h2></div><div id="result_info" style="display:none">Tokens</div></div>
      <div id="bulkSelectedCount"> </div></div><pre id="result">PENDING</pre><script>
      window.requestAnimationFrame = callback => setTimeout(callback,1); window.cancelAnimationFrame = clearTimeout;
      const require = name => name === 'vue' ? {watch: (read,cb)=>{cb();return ()=>{};}} : {getHostDocument:()=>document,getHostWindow:()=>window};
      const exports={}; new Function('exports','require',${JSON.stringify(code)})(exports,require);
      const check=(ok,msg)=>{if(!ok)throw Error(msg)};
      const tick=()=>new Promise(r=>setTimeout(r,80));
      const visible=node=>!!node.getClientRects().length;
      (async()=>{
        const runtime=exports.mountCharacterManagement({is_active:true,settings:{modernCharacterManagement:true}}); await tick();
        const header=document.getElementById('rm_PinAndTabs'), count=document.getElementById('bulkSelectedCount');
        check(!visible(header)&&!visible(count),'blank header and whitespace count hidden');
        document.querySelector('h2').textContent='Seraphina'; count.textContent='2'; await tick();
        check(visible(header)&&visible(count),'populated header and count restored');
        check(getComputedStyle(count,'::before').content.includes('已选'),'count has selection label');
        count.firstChild.data='0'; await tick();
        check(!visible(count),'zero count hidden on text node update');
        count.firstChild.data='3'; await tick(); check(visible(count),'count recovers after zero');
        runtime.destroy();
        check(!document.getElementById('right-nav-panel').classList.contains('th-modern-character-empty-header'),'header cleanup');
        check(!count.hasAttribute('data-th-modern-count'),'count cleanup');
        document.getElementById('result').textContent='PASS';
      })().catch(e=>document.getElementById('result').textContent='FAIL: '+e.stack);
      </script>`;
    const directory=mkdtempSync(join(tmpdir(),'modern-character-chrome-'));
    try {
      const path=join(directory,'fixture.html'); writeFileSync(path,fixture);
      const result=spawnSync(browser,['--headless','--disable-gpu','--no-first-run',`--window-size=${width},900`,
        `--user-data-dir=${join(directory,'profile')}`,'--dump-dom','--virtual-time-budget=5000',pathToFileURL(path).href],
        {encoding:'utf8',timeout:30000,maxBuffer:3*1024*1024,windowsHide:true});
      assert.ifError(result.error);
      const report=result.stdout.match(/<pre id="result">([\s\S]*?)<\/pre>/)?.[1];
      assert.equal(report,'PASS',report??result.stderr);
    } finally {rmSync(directory,{recursive:true,force:true,maxRetries:5,retryDelay:100});}
  });
}
