import type { Pinia } from 'pinia';
import { createApp } from 'vue';
import Panel from './Panel.vue';

const PANEL_ROOT_CLASS = 'th-modern-panel-root';

export function initPanel(pinia: Pinia) {
  $(`.${PANEL_ROOT_CLASS}`).remove();

  const app = createApp(Panel).use(pinia);
  let target = document.getElementById('modern-ui-reborn_container');
  let created = false;
  if (!target) {
    target = $('<div>')
      .attr('id', 'modern-ui-reborn_container')
      .addClass(PANEL_ROOT_CLASS)
      .appendTo('#extensions_settings')[0];
    created = true;
  } else {
    target.classList.add(PANEL_ROOT_CLASS);
    $(target).empty();
  }
  app.mount(target);

  return {
    destroy: () => {
      app.unmount();
      if (created) {
        $(target).remove();
      } else {
        $(target).empty().removeClass(PANEL_ROOT_CLASS);
      }
    },
  };
}
