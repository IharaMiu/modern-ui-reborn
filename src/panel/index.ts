import type { Pinia } from 'pinia';
import { createApp } from 'vue';
import Panel from './Panel.vue';

const PANEL_ROOT_CLASS = 'th-modern-panel-root';

export function initPanel(pinia: Pinia) {
  $(`#extensions_settings > .${PANEL_ROOT_CLASS}`).remove();

  const app = createApp(Panel).use(pinia);
  const $app = $('<div>').addClass(PANEL_ROOT_CLASS).appendTo('#extensions_settings');
  app.mount($app[0]);

  return {
    destroy: () => {
      app.unmount();
      $app.remove();
    },
  };
}
