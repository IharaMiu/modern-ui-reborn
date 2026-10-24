import type { Pinia } from 'pinia';
import { createApp } from 'vue';
import Panel from './Panel.vue';

const PANEL_ROOT_CLASS = 'th-modern-panel-root';

export function initPanel(pinia: Pinia) {
  $(`.${PANEL_ROOT_CLASS}`).remove();

  let unmounted = false;
  let panelApp: ReturnType<typeof createApp> | undefined;
  let target = document.getElementById('modern-ui-reborn_container');
  let created = false;

  const mount = () => {
    if (unmounted || panelApp) return;
    const parent = document.getElementById('extensions_settings');
    if (!parent) return;

    panelApp = createApp(Panel).use(pinia);
    if (!target) {
      target = $('<div>')
        .attr('id', 'modern-ui-reborn_container')
        .addClass(PANEL_ROOT_CLASS)
        .appendTo(parent)[0];
      created = true;
    } else {
      target.classList.add(PANEL_ROOT_CLASS);
      $(target).empty();
    }
    panelApp.mount(target);
  };

  mount();

  let observer: MutationObserver | undefined;
  if (!panelApp) {
    observer = new MutationObserver(() => {
      if (document.getElementById('extensions_settings')) {
        observer?.disconnect();
        observer = undefined;
        mount();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  return {
    destroy: () => {
      unmounted = true;
      observer?.disconnect();
      panelApp?.unmount();
      if (created && target) {
        $(target).remove();
      } else if (target) {
        $(target).empty().removeClass(PANEL_ROOT_CLASS);
      }
    },
  };
}
