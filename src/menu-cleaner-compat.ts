import { getHostDocument, getHostWindow } from './host-context';

export function mountMenuCleanerCompatibility(): { destroy: () => void } {
  const doc = getHostDocument();
  const win = getHostWindow();
  let destroyed = false;
  const preserveSubgroupMenu = (event: MouseEvent) => {
    const header = event.target instanceof win.Element
      ? event.target.closest<HTMLElement>('.mc3-native-subgroup-header') : null;
    const menu = header?.closest<HTMLElement>('#extensionsMenu, #options');
    if (!menu || win.getComputedStyle(menu).display === 'none') return;
    const display = menu.style.display;
    const trigger = doc.getElementById(menu.id === 'extensionsMenu' ? 'extensionsMenuButton' : 'options_button');
    // TT closes action menus during capture, before the cleaner can stop bubbling.
    win.requestAnimationFrame(() => {
      if (destroyed || !menu.isConnected || !header.isConnected || menu.style.display !== 'none') return;
      menu.style.display = display;
      trigger?.setAttribute('aria-expanded', 'true');
      header.focus({ preventScroll: true });
    });
  };
  doc.addEventListener('click', preserveSubgroupMenu, true);
  return {
    destroy() {
      destroyed = true;
      doc.removeEventListener('click', preserveSubgroupMenu, true);
    },
  };
}
