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
  test(`world book entry, batch deletion and selector interactions at ${width}px`, { skip: !existsSync(browser) }, () => {
    const fixture = `<!doctype html><meta charset="utf-8"><style>${read('../src/world-info.css')}${read('../src/mobile-world-select.css')}${read('../src/preset.css')}
      #WorldInfo { width:100%; height:800px; } #WorldInfo:not(.openDrawer) { display:none; }
      #left-nav-panel.closedDrawer { display:none; }
      .range-block { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; }
      </style><body class="th-modern-enabled">
      <div id="WorldInfo" class="openDrawer"><div id="wiTopBlock"><div id="WIMultiSelector"><div class="range-block-range">
        <select id="world_info" multiple><option value="A">Book A</option></select>
      </div></div></div><div id="world_popup"><div class="flex-container">
        <button id="world_create_button">Create</button><select id="world_editor_select"><option value="A">Book A</option><option value="B">Book B</option></select>
      </div><div class="flex-container"><input id="world_info_search"></div><div id="world_popup_entries_list"></div></div></div>
      <div id="selected-entry"></div><pre id="result">PENDING</pre><script>
      const check = (ok, message) => { if (!ok) throw new Error(message); };
      const tick = () => new Promise(resolve => setTimeout(resolve, 80));
      const setTimer = window.setTimeout.bind(window);
      window.setTimeout = (callback, delay, ...args) => setTimer(callback, delay === 30000 ? 200 : delay, ...args);
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
      let world = { entries: { 1: {uid:1}, 2: {uid:2}, 3: {uid:3} } };
      let cachedWorld;
      let changeCacheDuringRead = false;
      let holdRead = false, finishRead, readSignal;
      let holdSave = false, finishSave;
      let persistSave = true;
      const savedWorlds = [];
      const reloadedWorlds = [];
      const errors = [];
      const notices = [];
      window.toastr = { error: message => errors.push(message), info: message => notices.push(message) };
      let confirmation;
      window.confirm = message => { confirmation = message; return true; };
      window.fetch = async (url, options) => {
        check(url === '/api/worldinfo/get' && JSON.parse(options.body).name === 'Book A', 'checks the current book');
        if (holdRead) {
          readSignal = options.signal;
          await new Promise(resolve => { finishRead = resolve; });
        }
        if (changeCacheDuringRead) cachedWorld = {entries: {...world.entries, 2: {uid:2, comment:'changed'}}};
        return { ok:true, json: async () => structuredClone(world) };
      };
      window.SillyTavern = { getContext: () => ({
        loadWorldInfo: async () => structuredClone(cachedWorld ?? world),
        getRequestHeaders: () => ({}),
        saveWorldInfo: async (name, data, immediately) => {
          savedWorlds.push([name, immediately]);
          if (holdSave) await new Promise(resolve => { finishSave = resolve; });
          if (persistSave) world = data;
        },
        reloadWorldInfoEditor: (name, force) => { reloadedWorlds.push([name, force]); },
      }) };
      const host = { getHostDocument: () => document, getHostWindow: () => window };
      let selectors;
      const require = name => name === 'vue' ? {watch: (read, callback) => { callback(read()); return () => {}; }}
        : name.includes('mobile-world-select-module') ? selectors
        : name.includes('preset-prompt-model') ? presetModel
        : name.includes('world-info-concurrency') ? concurrency : host;
      const load = code => { const exports = {}; new Function('exports', 'require', code)(exports, require); return exports; };
      const concurrency = load(${JSON.stringify(compile(read('../src/world-info-concurrency.ts')))});
      const presetModel = load(${JSON.stringify(compile(read('../src/preset-prompt-model.ts')))});
      selectors = load(${JSON.stringify(compile(read('../src/mobile-world-select-module.ts') + '\nexport const TestManager = MobileWorldSelectManager;'))});
      let controllerRefreshes = 0;
      const mountControllers = selectors.TestManager.prototype.mountControllers;
      selectors.TestManager.prototype.mountControllers = function() { controllerRefreshes++; return mountControllers.call(this); };
      const {mountWorldInfoEditor, TestEnhancer, removeWorldInfoEntries} = load(${JSON.stringify(compile(read('../src/world-info-module.ts') + '\nexport { NativeWorldInfoEnhancer as TestEnhancer, removeWorldInfoEntries };'))});
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
        const zeroUid = { entries: { 0: {uid:0} }, originalData: { entries: [{id:0}, {id:null}, {id:''}] } };
        const afterZero = removeWorldInfoEntries(zeroUid, new Set([0]), window);
        check(afterZero.originalData.entries.length === 2 && zeroUid.entries[0], 'UID 0 only removes its matching imported entry from the clone');
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
        const multiButton = panel.querySelector('.th-modern-wi-multi-toggle');
        const deleteButton = panel.querySelector('.th-modern-wi-delete-selected');
        const list = document.getElementById('world_popup_entries_list');
        const addEntry = (uid, book, title) => {
          const entry = document.createElement('div');
          entry.className = 'world_entry';
          entry.setAttribute('uid', uid);
          entry.innerHTML = '<form class="world_entry_form"><div class="inline-drawer"><div class="inline-drawer-header"><textarea name="comment"></textarea><button type="button" class="move_entry_button"></button></div></div></form>';
          entry.querySelector('textarea').value = title;
          entry.querySelector('.move_entry_button').dataset.currentWorld = book;
          list.append(entry);
          return entry;
        };
        const stale = addEntry(2, 'Book B', 'Stale row');
        const first = addEntry(1, 'Book A', 'Entry one');
        const third = addEntry(3, 'Book A', 'Entry three');
        await tick();
        const summary = entry => entry.querySelector('.th-modern-wi-row-summary');
        if (!matchMedia('(max-width:899.98px)').matches) {
          check(enhancer.selectedEntry === first, 'desktop picks the first row of the current book after a stale row');
        }
        summary(stale).click();
        check(enhancer.selectedEntry !== stale, 'a stale row cannot open in a different book');
        const title = first.querySelector('textarea');
        title.value = '';
        title.dispatchEvent(new Event('input', {bubbles:true}));
        await tick();
        check(first.querySelector('.th-modern-wi-row-title').textContent === 'UID 1', 'clearing the title clears the cached summary');
        multiButton.click();
        summary(stale).click();
        check(deleteButton.hidden, 'a stale row cannot be selected for deletion');
        summary(first).click();
        summary(third).dispatchEvent(new KeyboardEvent('keydown', {key:'Enter', bubbles:true}));
        third.remove();
        await tick();
        holdRead = true;
        deleteButton.click();
        await tick(); await tick(); await tick();
        check(readSignal.aborted && errors.pop()?.includes('读取世界书超时') && !deleteButton.disabled, 'read timeout unlocks deletion and aborts the request');
        holdRead = false;
        finishRead(); await tick();
        check(savedWorlds.length === 0 && !deleteButton.hidden, 'late read cannot delete and preserves the selection');
        world.entries[3].uid = 1;
        deleteButton.click(); await tick();
        check(errors.pop()?.includes('重复 UID 1') && savedWorlds.length === 0, 'duplicate UID cannot delete unrelated entries');
        world.entries[3].uid = 3;
        changeCacheDuringRead = true;
        deleteButton.click();
        await tick();
        check(errors.pop()?.includes('世界书已更改') && savedWorlds.length === 0 && !deleteButton.hidden, 'a changed host cache stops deletion and retains the selection');
        changeCacheDuringRead = false;
        cachedWorld = undefined;
        persistSave = false;
        deleteButton.click();
        await tick();
        check(errors.pop()?.includes('无法确认世界书已保存') && reloadedWorlds.length === 0 && !deleteButton.hidden, 'a silent write failure keeps the selection and reports the error');
        savedWorlds.length = 0;
        persistSave = true;
        deleteButton.click();
        await tick();
        check(errors.length === 0, 'batch delete errors: '+errors.join(', '));
        check(confirmation.includes('Book A') && confirmation.includes('UID 3'), 'confirmation identifies the book and off-page entry');
        check(Object.keys(world.entries).join(',') === '2', 'batch delete preserves the unselected entry');
        check(JSON.stringify(savedWorlds) === '[["Book A",true]]', 'batch delete saves once through the host context');
        check(JSON.stringify(reloadedWorlds) === '[["Book A",null]]', 'batch delete reloads only the selected book through the host context');
        const selectForDelete = document.getElementById('world_editor_select');
        world = { entries: { 1: {uid:1}, 2: {uid:2} } };
        summary(first).click();
        holdSave = true;
        deleteButton.click();
        await tick(); await tick(); await tick();
        const main = panel.querySelector('.th-modern-wi-native-main');
        check(finishSave && main.inert && !selectForDelete.disabled && notices.pop()?.includes('仍在保存'), 'slow write protects the book and leaves the selector available');
        selectForDelete.value = 'B';
        selectForDelete.dispatchEvent(new Event('change', {bubbles:true}));
        await tick();
        check(!main.inert, 'switching away unlocks the other book');
        holdSave = false;
        finishSave(); await tick();
        check(selectForDelete.value === 'B' && reloadedWorlds.length === 1 && Object.keys(world.entries).join(',') === '2', 'late write does not reload the old book over the new selection');
        selectForDelete.value = 'A';
        selectForDelete.dispatchEvent(new Event('change', {bubbles:true}));
        multiButton.click();
        list.replaceChildren();
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
          const pickerTrigger = document.querySelector('[data-source="'+id+'"] .th-modern-mobile-world-trigger');
          pickerTrigger.click(); await tick();
          check(document.querySelector('dialog.th-modern-mobile-world-picker')?.open, 'recovered selector opens: '+id);
          document.querySelector('.th-modern-mobile-world-picker-close').click(); await tick();
          check(pickerTrigger.getAttribute('aria-expanded') === 'false', 'closing the picker resets expanded state');
        }
        const editorSource = panel.querySelector('#world_editor_select');
        panel.querySelector('[data-source="world_editor_select"] .th-modern-mobile-world-trigger').click(); await tick();
        const staleOptionButton = document.querySelector('.th-modern-mobile-world-picker-row-select');
        editorSource.options[0].replaceWith(new Option('Replacement book', 'A'));
        staleOptionButton.click();
        check(editorSource.value === 'B' && document.querySelector('dialog.th-modern-mobile-world-picker')?.open, 'an old picker row cannot select a replacement at the same index');
        document.querySelector('.th-modern-mobile-world-picker-close').click();
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
        let editorSelect = document.getElementById('world_editor_select');
        const none = new Option('--- Pick to Edit ---', '');
        const replacementList = document.getElementById('world_popup_entries_list');
        let nativeRefreshes = 0;
        const renderBook = () => {
          nativeRefreshes++;
          const entry = first.cloneNode(true);
          entry.querySelector('.move_entry_button').dataset.currentWorld = 'Book B';
          replacementList.style.display = '';
          replacementList.replaceChildren(entry);
        };
        window.$(editorSelect).on('change', renderBook);
        editorSelect.replaceChildren(none, new Option('Book B', 'new-B'), new Option('Book A', 'A'));
        check(editorSelect.value === '', 'background rebuild temporarily resets the native selector');
        await tick();
        check(editorSelect.value === 'new-B' && nativeRefreshes === 1, 'rebuilding options restores the same book by name and reloads once');
        check(visible(replacementList.querySelector('.world_entry')), 'reloaded book entries remain visible');
        const newSelect = editorSelect.cloneNode(true);
        newSelect.value = '';
        editorSelect.replaceWith(newSelect);
        editorSelect = newSelect;
        window.$(editorSelect).on('change', renderBook);
        await tick();
        check(editorSelect.value === 'new-B' && nativeRefreshes === 2, 'replacing the selector also restores the selected book');
        const editorSearch = document.getElementById('world_info_search');
        for (const [display, search, expectedRefreshes] of [['none', '', 3], ['', '', 4], ['', 'no results', 4]]) {
          replacementPanel.classList.remove('openDrawer'); await tick();
          // The host can park the list while closed and refresh its options without a change event.
          replacementList.remove();
          replacementList.replaceChildren();
          replacementList.style.display = display;
          editorSearch.value = search;
          editorSelect.replaceChildren(new Option('--- Pick to Edit ---', ''), new Option('Book B', 'new-B', false, true), new Option('Book A', 'A'));
          await tick();
          replacementPanel.querySelector('#world_popup').append(replacementList);
          replacementPanel.classList.add('openDrawer'); await tick();
          check(editorSelect.value === 'new-B' && nativeRefreshes === expectedRefreshes, 'reopening recovers a cleared list once and respects search');
          check(search ? !replacementList.querySelector('.world_entry') : visible(replacementList.querySelector('.world_entry')), 'entries show on open unless the search excludes them');
        }
        editorSearch.value = '';
        replacementPanel.classList.remove('openDrawer'); await tick();
        const selectParent = editorSelect.parentElement;
        editorSelect.remove();
        editorSelect.value = '';
        replacementList.replaceChildren();
        await tick();
        check(enhancer.selectedWorldName === 'Book B', 'temporarily detached selector keeps the last selected book');
        selectParent.prepend(editorSelect);
        replacementPanel.classList.add('openDrawer'); await tick();
        check(editorSelect.value === 'new-B' && nativeRefreshes === 5 && visible(replacementList.querySelector('.world_entry')), 'reopening restores a temporarily detached selector and its entries');
        await tick();
        check(nativeRefreshes === 5, 'entry recovery produces one native reload');
        editorSelect.options[1].remove();
        await tick();
        check(enhancer.selectedWorldName === '' && nativeRefreshes === 5, 'removing the selected book leaves no book selected');
        editorSelect.append(new Option('Book B', 'B'));
        await tick();
        check(editorSelect.value === '', 'adding a deleted book back does not reopen it');
        editorSelect.value = 'B';
        window.$(editorSelect).trigger('change');
        editorSelect.value = ''; editorSelect.dispatchEvent(new Event('change', {bubbles:true})); await tick();
        const emptyMessage = document.querySelector('.th-modern-wi-empty-world');
        check(visible(emptyMessage) && emptyMessage.textContent === '选择世界书以查看条目', 'no-book guidance visible');
        check(document.querySelector('.th-modern-wi-toolbar').inert, 'entry actions unavailable without a book');
        const trigger = document.querySelector('[data-source="world_editor_select"] .th-modern-mobile-world-trigger');
        trigger.click(); await tick();
        let picker = document.querySelector('.th-modern-mobile-world-picker');
        check(picker.querySelector('[data-tab="all"] span').textContent === '2', 'placeholder excluded from book count');
        check(picker.querySelector('.is-placeholder .th-modern-mobile-world-picker-row-label').textContent === '不选择世界书', 'placeholder explains cancellation');
        check(picker.querySelector('.th-modern-mobile-world-picker-status').textContent.includes('2 本'), 'status counts real books');
        if (matchMedia('(min-width:1200px)').matches) check(picker.querySelector('.th-modern-mobile-world-picker-sheet').getBoundingClientRect().height < 500, 'short list shrinks desktop picker');
        picker.querySelectorAll('.th-modern-mobile-world-picker-row-select')[1].click(); await tick();
        check(editorSelect.value === 'A', 'real book selection still works');
        check(!visible(emptyMessage) && !document.querySelector('.th-modern-wi-toolbar').inert, 'selection restores entry tools');
        trigger.click(); await tick();
        picker = document.querySelector('.th-modern-mobile-world-picker');
        picker.querySelector('.is-placeholder .th-modern-mobile-world-picker-row-select').click(); await tick();
        check(editorSelect.value === '' && visible(emptyMessage), 'cancel selection returns to empty state');
        for (let i = 0; i < 1000; i++) editorSelect.append(new Option('Additional book '+i, 'extra-'+i));
        await tick(); trigger.click(); await tick();
        picker = document.querySelector('.th-modern-mobile-world-picker');
        const viewport = picker.querySelector('.th-modern-mobile-world-picker-viewport');
        check(viewport.scrollHeight > viewport.clientHeight, 'long list remains scrollable');
        const pickerRows = '.th-modern-mobile-world-picker-row';
        check(picker.querySelectorAll(pickerRows).length < 40, 'large world list bounds the number of DOM rows');
        const pickerSearch = picker.querySelector('.th-modern-mobile-world-picker-search input');
        const arrowDown = () => document.activeElement.dispatchEvent(new KeyboardEvent('keydown', {key:'ArrowDown', bubbles:true}));
        pickerSearch.focus(); arrowDown();
        for (let i = 0; i < 30; i++) arrowDown();
        check(document.activeElement.closest(pickerRows)?.getAttribute('aria-posinset') === '31', 'keyboard moves beyond the initial virtual world rows');
        viewport.scrollTop = viewport.scrollHeight;
        viewport.dispatchEvent(new Event('scroll'));
        await tick();
        const lastWorld = picker.querySelector(pickerRows+'[aria-posinset="1003"]:not([hidden])');
        check(lastWorld?.textContent.includes('Additional book 999'), 'scroll reaches the last virtual world');
        const favorite = lastWorld.querySelector('.th-modern-mobile-world-picker-favorite');
        favorite.click();
        check(favorite.getAttribute('aria-pressed') === 'true', 'last virtual world can be favorited');
        pickerSearch.value = 'Additional book 999';
        pickerSearch.dispatchEvent(new Event('input'));
        await new Promise(resolve => setTimeout(resolve, 125));
        check(picker.querySelectorAll(pickerRows+':not([hidden])').length === 1, 'search filters the whole world list from the last page');
        pickerSearch.focus(); arrowDown();
        document.activeElement.click(); await tick();
        check(editorSelect.value === 'extra-999' && !picker.isConnected, 'keyboard can select a world found outside the initial window');
        controller.destroy();
        check((handlers.get(document) ?? []).length === 0, 'destroy removes delegated world change handler');
        replacementPanel.append(document.createElement('div')); await tick();
        check(!document.querySelector('.th-modern-mobile-world-control'), 'destroy removes controllers and stops recovery');
        const {PresetEditor} = load(${JSON.stringify(compile(read('../src/preset-module.ts')))});
        const presetBlock = document.createElement('div');
        presetBlock.id = 'respective-presets-block';
        presetBlock.innerHTML = '<select id="settings_preset_openai"><option value="A">A</option><option value="B">B</option></select>';
        document.body.append(presetBlock);
        localStorage.setItem('th-modern-preset-tab', 'prompts');
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
        presetPanel.className = 'closedDrawer';
        presetPanel.style.width = 'min(1024px, 100%)';
        presetPanel.innerHTML = '<select id="main_api"><option value="openai">Chat Completion</option></select><div class="scrollableInner"><div id="ai_response_configuration"><div id="advanced-ai-config-block"><div id="openai_settings"><div class="range-block"><div id="completion_prompt_manager"></div></div></div></div></div></div>';
        presetPanel.querySelector('#ai_response_configuration').prepend(presetBlock.closest('.th-modern-preset-toolbar'));
        document.body.append(presetPanel);
        const prompt = {identifier:'sample', name:'Sample'}, spare = {identifier:'spare', name:'Spare'};
        const order = [prompt, spare].map(({identifier}) => ({identifier, enabled:true}));
        const pm = {configuration:{prefix:'completion_'}, serviceSettings:{prompts:[prompt, spare]},
          getPromptOrderForCharacter: () => order, getPromptById: id => pm.serviceSettings.prompts.find(item => item.identifier === id) ?? null,
          isPromptEditAllowed: () => false, isPromptDeletionAllowed: () => true, isPromptToggleAllowed: () => true};
        presetEditor.host = {getPromptManager: () => pm};
        const syncPreset = presetEditor.sync.bind(presetEditor);
        let presetSyncs = 0;
        presetEditor.sync = () => { presetSyncs++; syncPreset(); };
        presetEditor.sync();
        presetPanel.classList.replace('closedDrawer', 'openDrawer');
        await Promise.resolve();
        check(presetPanel.querySelector('[data-id="sample"]') && presetPanel.querySelector('.th-modern-pm-editor-placeholder').textContent === '选择提示词条目以查看内容', 'opening the remembered prompts tab renders both panes before delayed sync');
        for (let index = 0; index < 6; index++) await tick();
        check(presetSyncs <= 3, 'idle preset panel does not continuously schedule itself');
        document.querySelector('.th-modern-preset-tab[data-tab="prompts"]').click();
        const presetList = presetPanel.querySelector('.th-modern-pm-list');
        const presetDetail = presetPanel.querySelector('.th-modern-pm-editor');
        const presetRow = presetList.querySelector('[data-id="sample"]');
        const promptSearch = presetPanel.querySelector('.th-modern-pm-search input');
        const searchPrompts = value => { promptSearch.value = value; promptSearch.dispatchEvent(new Event('input')); };
        searchPrompts('sam');
        check(presetList.querySelector('[data-id="sample"]') === presetRow && !presetList.querySelector('[data-id="spare"]'), 'search preserves the matching row and drops the other row');
        searchPrompts('');
        check(presetList.querySelector('[data-id="sample"]') === presetRow && presetRow.nextElementSibling?.dataset.id === 'spare', 'clearing search keeps retained rows and restores order');
        const desktop = matchMedia('(min-width:900px)').matches;
        const inset = (node, side) => node.getBoundingClientRect()[side];
        const fillDrawer = () => {
          const toolbar = presetPanel.querySelector('.th-modern-pm-toolbar');
          const section = presetPanel.querySelector('.th-modern-preset-pm-section');
          check(Math.abs(inset(toolbar, 'left') - inset(section, 'left')) < 1 && Math.abs(inset(toolbar, 'right') - inset(section, 'right')) < 1, 'prompt toolbar stretches across the native range block');
          if (desktop) check(Math.abs(inset(presetList, 'left') - inset(toolbar, 'left')) < 1 && Math.abs(inset(presetDetail, 'right') - inset(toolbar, 'right')) < 1, 'both panes align with the full-width toolbar');
        };
        fillDrawer();
        check(visible(presetList) && presetRow.getAttribute('aria-selected') === 'false', 'prompt list starts with no selected entry');
        check(visible(presetDetail) === desktop, 'desktop displays the detail column');
        if (desktop) {
          check(presetList.getBoundingClientRect().right < presetDetail.getBoundingClientRect().left, 'prompt list sits to the left of the detail');
          check(presetDetail.textContent === '选择提示词条目以查看内容', 'desktop detail shows only the empty-state prompt');
        }
        const listWidth = presetList.getBoundingClientRect().width;
        presetRow.click();
        check(visible(presetDetail) && visible(presetList) === desktop, 'selection shows details with the correct desktop or mobile layout');
        const copyPrompt = presetDetail.querySelector('[title="复制此条目生成副本"]');
        copyPrompt.focus();
        presetEditor.sync();
        check(copyPrompt.isConnected && document.activeElement === copyPrompt, 'unchanged preset sync preserves the focused action');
        prompt.name = 'Sample renamed';
        presetEditor.sync();
        check(presetDetail.querySelector('.th-modern-pm-editor-title').textContent === 'Sample renamed', 'prompt metadata changes still update the editor header');
        if (desktop) {
          fillDrawer();
          check(Math.abs(presetList.getBoundingClientRect().width - listWidth) < 1, 'selecting a prompt does not resize the list');
          document.querySelector('.th-modern-preset-tab[data-tab="params"]').click();
          document.querySelector('.th-modern-preset-tab[data-tab="prompts"]').click();
          presetPanel.style.width = '510px'; await tick();
          fillDrawer();
          check(visible(presetDetail) && presetDetail.textContent === '选择提示词条目以查看内容', 'the empty pane remains visible in a narrow desktop drawer');
        } else {
          presetDetail.querySelector('.th-modern-pm-back').click();
          check(visible(presetList) && !visible(presetDetail), 'mobile can return to the list');
        }
        searchPrompts('from-content');
        check(!presetList.querySelector('[data-id="spare"]'), 'unmatched prompt is hidden');
        spare.content = 'from-content';
        presetEditor.sync();
        check(presetList.querySelector('[data-id="spare"]'), 'external prompt content updates search results');
        searchPrompts('');
        pm.serviceSettings.extensions = {luker:{prompt_groups:[{id:'test-group', name:'Test group', identifiers:['sample']}]}};
        presetEditor.sync();
        presetList.querySelector('[data-group-id="test-group"]').click();
        const groupName = presetDetail.querySelector('.th-modern-pm-group-form input');
        groupName.focus();
        groupName.value = 'Pending edit';
        presetEditor.sync();
        check(document.activeElement === groupName && groupName.value === 'Pending edit', 'unchanged group sync preserves focus and uncommitted text');
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
        `--user-data-dir=${join(directory, 'profile')}`, '--dump-dom', '--virtual-time-budget=8000', pathToFileURL(path).href],
      { encoding: 'utf8', timeout: 30000, maxBuffer: 3 * 1024 * 1024, windowsHide: true });
      assert.ifError(result.error);
      const report = result.stdout.match(/<pre id="result">([\s\S]*?)<\/pre>/)?.[1];
      assert.equal(report, 'PASS', report ?? result.stderr);
    } finally {
      rmSync(directory, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
    }
  });
}
