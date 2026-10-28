import { watch } from 'vue';
import { getHostDocument, getHostWindow } from './host-context';
import type { useModernLayoutStore } from './store';

type Store = ReturnType<typeof useModernLayoutStore>;

export function mountPersonaManagement(store: Store): { destroy: () => void } {
  const doc = getHostDocument();
  const win = getHostWindow();
  let block: HTMLElement | null = null;
  let nav: HTMLElement | null = null;
  let frame = 0;
  let selectView: ((index: number) => void) | null = null;

  const clear = () => {
    nav?.remove();
    block?.removeAttribute('data-th-persona-view');
    nav = null;
    block = null;
    selectView = null;
  };
  const sync = () => {
    frame = 0;
    const current = store.is_active && store.settings.modernPersonaManagement
      ? doc.querySelector<HTMLElement>('#persona-management-block') : null;
    if (current === block && nav?.isConnected) return;
    clear();
    if (!current || !current.querySelector('.persona_management_left_column') || !current.querySelector('.persona_management_right_column')) return;
    block = current;
    nav = doc.createElement('nav');
    nav.className = 'th-modern-persona-navigation';
    nav.setAttribute('aria-label', '用户设定视图');
    const buttons = ['设定列表', '当前设定', '全局设置'].map((label, index) => {
      const button = doc.createElement('button');
      button.type = 'button';
      button.className = 'menu_button';
      button.textContent = label;
      button.addEventListener('click', () => select(index));
      nav!.append(button);
      return button;
    });
    const select = (index: number) => {
      if (!block) return;
      block.dataset.thPersonaView = ['list', 'detail', 'settings'][index];
      buttons.forEach((button, n) => button.setAttribute('aria-pressed', String(n === index)));
    };
    selectView = select;
    select(0);
    current.prepend(nav);
  };
  const onPersonaSelected = (event: Event) => {
    if (!store.is_active || !store.settings.modernPersonaManagement || !win.matchMedia('(max-width: 899.98px)').matches) return;
    const target = event.target instanceof win.Element ? event.target : null;
    if (!target?.closest('#user_avatar_block .avatar-container') || target.closest('a, input, button:not(.sr-only)')) return;
    win.setTimeout(() => selectView?.(1), 0);
  };
  doc.addEventListener('click', onPersonaSelected);
  const schedule = () => { if (!frame) frame = win.requestAnimationFrame(sync); };
  const observer = new win.MutationObserver(schedule);
  observer.observe(doc.body, { childList: true, subtree: true });
  const stop = watch(() => [store.is_active, store.settings.modernPersonaManagement], schedule, { immediate: true });
  return { destroy() { doc.removeEventListener('click', onPersonaSelected); stop(); observer.disconnect(); if (frame) win.cancelAnimationFrame(frame); clear(); } };
}
