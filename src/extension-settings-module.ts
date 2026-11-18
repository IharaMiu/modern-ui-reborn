import { watch } from 'vue';

import { getHostDocument, getHostWindow } from './host-context';
import type { useModernLayoutStore } from './store';

const BODY_CLASS = 'th-modern-extension-settings';
const PANEL_CLASS = 'th-modern-extension-panel';
const LAYOUT_CLASS = 'th-modern-extension-layout';
const NAV_CLASS = 'th-modern-extension-nav';
const NAV_LIST_CLASS = 'th-modern-extension-nav-list';
const NAV_COUNT_CLASS = 'th-modern-extension-nav-count';
const NAV_ITEM_CLASS = 'th-modern-extension-nav-item';
const NAV_ITEM_ACTIVE_CLASS = 'is-active';
const COLUMN_CLASS = 'th-modern-extension-column';
const COLUMN_ACTIVE_CLASS = 'is-active';
const HOST_HIDDEN_CLASS = 'th-modern-extension-host-hidden';
const HOST_ACTIVE_CLASS = 'th-modern-extension-host-active';
const DRAWER_CLASS = 'th-modern-extension-drawer';
const DRAWER_ACTIVE_CLASS = 'th-modern-extension-drawer-active';
const OWN_ENTRY_CLASSES = new Set([HOST_HIDDEN_CLASS, HOST_ACTIVE_CLASS, DRAWER_CLASS, DRAWER_ACTIVE_CLASS]);
const STRUCTURE_CLASSES = ['inline-drawer', 'inline-drawer-toggle', 'inline-drawer-content', 'standoutHeader'];
const MOBILE_ACCORDION_CLASS = 'th-modern-extension-mobile-accordion';
const MOBILE_ACCORDION_MAX_DRAWER_WIDTH = 440;
const SELECTED_EXTENSION_STORAGE_KEY = 'TavernHelper.modernLayout.selectedExtensionSettings';

type Store = ReturnType<typeof useModernLayoutStore>;

type ExtensionEntry = {
  column: HTMLElement;
  sourceHost: HTMLElement;
  content: HTMLElement | null;
  drawer: HTMLElement | null;
  header: HTMLElement | null;
  host: HTMLElement;
  key: string;
  title: string;
  badge: string | null;
};

function normalizeText(value: string | null | undefined): string {
  return (value ?? '').replace(/\s+/g, ' ').trim();
}

function findTopLevelDrawers(host: HTMLElement): HTMLElement[] {
  if (host.matches('.inline-drawer')) {
    return [host];
  }

  return Array.from(host.querySelectorAll<HTMLElement>('.inline-drawer')).filter(drawer => {
    const parentDrawer = drawer.parentElement?.closest('.inline-drawer');
    return !parentDrawer || !host.contains(parentDrawer);
  });
}

function findDirectBranch(host: HTMLElement, descendant: HTMLElement): HTMLElement {
  let branch = descendant;
  while (branch.parentElement && branch.parentElement !== host) {
    branch = branch.parentElement;
  }
  return branch;
}

function getEntryTitle(host: HTMLElement, drawer: HTMLElement | null): { title: string; badge: string | null } {
  const header = drawer?.querySelector<HTMLElement>(
    ':scope > .inline-drawer-toggle.inline-drawer-header, :scope > .inline-drawer-toggle',
  );
  const heading =
    header?.querySelector<HTMLElement>('b, strong, h3, h4') ??
    header ??
    host.querySelector<HTMLElement>('h3, h4, .standoutHeader');

  if (!heading) {
    const fallback = normalizeText(host.id.replace(/_container$/i, '').replaceAll('_', ' ')) || '未命名扩展';
    return { title: fallback, badge: null };
  }

  const clone = heading.cloneNode(true) as HTMLElement;

  // 1. 移除无关操作性元素（链接、重置按钮、图标、抽屉指示箭头等）
  clone.querySelectorAll('a, button, .notes-link, i, svg, .inline-drawer-icon').forEach(el => el.remove());

  // 2. 识别并提取独立角标（例如 JS-Slash-Runner 的 "New!" 更新提示标签）
  let badge: string | null = null;
  const badgeElement = Array.from(clone.querySelectorAll<HTMLElement>('span, small, em')).find(el => {
    const text = normalizeText(el.textContent);
    const isBadgeClass =
      el.classList.contains('text-red-500') ||
      el.classList.contains('badge') ||
      el.classList.contains('th-text-xs');
    const isBadgeText = /^new!?$/i.test(text);
    return (isBadgeClass || isBadgeText) && text.length > 0;
  });

  if (badgeElement) {
    badge = normalizeText(badgeElement.textContent) || null;
    badgeElement.remove();
  }

  let title = normalizeText(clone.textContent);

  // 若移除角标后内容为空但有角标，则回退为角标文字
  if (!title && badge) {
    title = badge;
    badge = null;
  }

  if (!title) {
    title = normalizeText(host.id.replace(/_container$/i, '').replaceAll('_', ' ')) || '未命名扩展';
  }

  return { title, badge };
}

export function mountExtensionSettings(store: Store): { destroy: () => void } {
  const hostDocument = getHostDocument();
  const hostWindow = getHostWindow();
  let panel: HTMLElement | null = null;
  let layout: HTMLElement | null = null;
  let navigation: HTMLElement | null = null;
  let navigationList: HTMLElement | null = null;
  let navigationCount: HTMLElement | null = null;
  let columns: HTMLElement[] = [];
  let entries: ExtensionEntry[] = [];
  let entryHosts = new Set<HTMLElement>();
  let selectedKey = readSelectedKey();
  let renderedSignature = '';
  let entriesDirty = false;
  let syncFrame = 0;
  let openFrame = 0;
  let structureObserver: MutationObserver | null = null;
  let panelObserver: MutationObserver | null = null;
  let panelResizeObserver: ResizeObserver | null = null;
  let viewportMediaQuery: MediaQueryList | null = null;

  const isMobileViewport = (): boolean => hostWindow.matchMedia('(max-width: 899.98px)').matches;
  let usesMobileAccordion = isMobileViewport() || hostWindow.matchMedia(`(max-width: ${MOBILE_ACCORDION_MAX_DRAWER_WIDTH}px)`).matches;

  const handleViewportChange = () => {
    if (panel) {
      updateResponsiveMode(panel.getBoundingClientRect().width);
    }
  };

  function readSelectedKey(): string | null {
    try {
      return hostWindow.sessionStorage.getItem(SELECTED_EXTENSION_STORAGE_KEY);
    } catch {
      return null;
    }
  }

  function writeSelectedKey(key: string | null): void {
    try {
      if (key) {
        hostWindow.sessionStorage.setItem(SELECTED_EXTENSION_STORAGE_KEY, key);
      } else {
        hostWindow.sessionStorage.removeItem(SELECTED_EXTENSION_STORAGE_KEY);
      }
    } catch {
      // Session storage can be unavailable in privacy-restricted browser contexts.
    }
  }

  function getOrderedChildren(column: HTMLElement): Element[] {
    return Array.from(column.children)
      .map(node => ({ node, order: Number(hostWindow.getComputedStyle(node).order) }))
      .sort((a, b) => a.order - b.order)
      .map(item => item.node);
  }

  function collectEntries(): ExtensionEntry[] {
    const keyCounts = new Map<string, number>();
    const nextEntries: ExtensionEntry[] = [];

    const appendEntry = (
      column: HTMLElement,
      sourceHost: HTMLElement,
      host: HTMLElement,
      drawer: HTMLElement | null,
      rawKeyOverride?: string,
    ) => {
      const { title, badge } = getEntryTitle(host, drawer);
      const scriptId =
        host.getAttribute('script_id') ?? drawer?.getAttribute('script_id') ?? sourceHost.getAttribute('script_id');
      const rawKey =
        rawKeyOverride ??
        (host.id
          ? `id:${host.id}`
          : drawer?.id
            ? `id:${drawer.id}`
            : scriptId
              ? `script:${scriptId}`
              : `column:${column.id}:title:${title}`);
      const duplicateIndex = keyCounts.get(rawKey) ?? 0;
      keyCounts.set(rawKey, duplicateIndex + 1);
      const key = duplicateIndex === 0 ? rawKey : `${rawKey}:${duplicateIndex}`;
      const header =
        drawer?.querySelector<HTMLElement>(
          ':scope > .inline-drawer-toggle.inline-drawer-header, :scope > .inline-drawer-toggle',
        ) ?? null;
      const content = drawer?.querySelector<HTMLElement>(':scope > .inline-drawer-content') ?? null;

      nextEntries.push({ column, sourceHost, content, drawer, header, host, key, title, badge });
    };

    columns.forEach(column => {
      const children = getOrderedChildren(column);
      children.forEach(node => {
        if (!(node instanceof hostWindow.HTMLElement) || node === navigation) {
          return;
        }
        if (node.matches('.mc3-native-subgroup-header')) {
          return;
        }

        // 跳过被菜单精简器等扩展/脚本隐藏的容器
        if (
          node.classList.contains('mc3-hidden') ||
          node.classList.contains('displayNone') ||
          node.hidden ||
          (node.style.display === 'none' && !node.classList.contains(HOST_HIDDEN_CLASS))
        ) {
          return;
        }

        const drawers = findTopLevelDrawers(node);
        const visibleDrawers = drawers.filter(
          d =>
            !d.classList.contains('mc3-hidden') &&
            !d.classList.contains('displayNone') &&
            !d.hidden &&
            d.style.display !== 'none',
        );
        const hasFallbackContent = node.childElementCount > 0 && normalizeText(node.textContent).length > 0;
        if (drawers.length > 0 && visibleDrawers.length === 0) {
          return;
        }
        if (visibleDrawers.length === 0 && !hasFallbackContent) {
          return;
        }

        if (visibleDrawers.length <= 1) {
          appendEntry(column, node, node, visibleDrawers[0] ?? null);
          return;
        }

        const branches = visibleDrawers.map(drawer => findDirectBranch(node, drawer));
        const branchCounts = new Map<HTMLElement, number>();
        branches.forEach(branch => branchCounts.set(branch, (branchCounts.get(branch) ?? 0) + 1));
        const sourceRawKey = node.id
          ? `id:${node.id}`
          : node.getAttribute('script_id')
            ? `script:${node.getAttribute('script_id')}`
            : undefined;

        visibleDrawers.forEach((drawer, index) => {
          const branch = branches[index];
          const entryHost = branchCounts.get(branch) === 1 ? branch : drawer;
          appendEntry(column, node, entryHost, drawer, index === 0 ? sourceRawKey : undefined);
        });
      });
    });

    return nextEntries;
  }

  function isEntryExpanded(entry: ExtensionEntry): boolean {
    if (!entry.content) {
      return true;
    }

    if (entry.drawer?.classList.contains('open') || entry.content.classList.contains('open')) {
      return true;
    }

    if (entry.header?.querySelector('.inline-drawer-icon')?.classList.contains('up')) {
      return true;
    }

    if (entry.content.style.display) {
      return entry.content.style.display !== 'none';
    }

    return false;
  }

  function updateNavigationState(): void {
    navigationList?.querySelectorAll<HTMLButtonElement>(`.${NAV_ITEM_CLASS}`).forEach(button => {
      const isActive = button.dataset.extensionKey === selectedKey;
      button.classList.toggle(NAV_ITEM_ACTIVE_CLASS, isActive);
      button.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
  }

  function renderNavigation(): void {
    if (!navigationList || !navigationCount) {
      return;
    }

    const focusedSubgroup = navigationList.contains(hostDocument.activeElement)
      ? (hostDocument.activeElement as HTMLElement)?.dataset.cleanerSubgroupId : undefined;
    const fragment = hostDocument.createDocumentFragment();
    const appendEntry = (entry: ExtensionEntry) => {
      const button = hostDocument.createElement('button');
      button.type = 'button';
      button.className = NAV_ITEM_CLASS;
      button.dataset.extensionKey = entry.key;
      button.title = entry.badge ? `${entry.title} (${entry.badge})` : entry.title;

      const label = hostDocument.createElement('span');
      label.className = 'th-modern-extension-nav-label';
      label.textContent = entry.title;
      button.append(label);

      if (entry.badge) {
        const badgeSpan = hostDocument.createElement('span');
        badgeSpan.className = 'th-modern-extension-nav-badge';
        badgeSpan.textContent = entry.badge;
        button.append(badgeSpan);
      }

      fragment.append(button);
    };
    columns.forEach(column => {
      getOrderedChildren(column)
        .forEach(source => {
          if (source.matches('.mc3-native-subgroup-header')) {
            if (source.matches('.mc3-hidden, .displayNone, [hidden]') || (source as HTMLElement).style.display === 'none') return;
            const button = hostDocument.createElement('button');
            button.type = 'button';
            button.className = NAV_ITEM_CLASS;
            button.dataset.cleanerSubgroupId = source.id;
            button.textContent = source.textContent;
            button.setAttribute('aria-expanded', source.getAttribute('aria-expanded') ?? 'false');
            button.addEventListener('click', () => (source as HTMLElement).click());
            fragment.append(button);
          } else {
            entries.filter(entry => entry.sourceHost === source).forEach(appendEntry);
          }
        });
    });

    navigationList.replaceChildren(fragment);
    if (focusedSubgroup) {
      Array.from(navigationList.querySelectorAll<HTMLButtonElement>('button'))
        .find(button => button.dataset.cleanerSubgroupId === focusedSubgroup)?.focus({ preventScroll: true });
    }
    navigationCount.textContent = String(entries.length);
    updateNavigationState();
  }

  function applySelection(): void {
    if (usesMobileAccordion) {
      entries.forEach(entry => {
        entry.host.classList.remove(HOST_HIDDEN_CLASS, HOST_ACTIVE_CLASS);
        entry.drawer?.classList.remove(DRAWER_ACTIVE_CLASS);
      });
      columns.forEach(column => {
        column.classList.remove(COLUMN_ACTIVE_CLASS);
        Array.from(column.children).forEach(child => {
          if (child instanceof hostWindow.HTMLElement && child !== navigation) {
            child.classList.remove(HOST_HIDDEN_CLASS, HOST_ACTIVE_CLASS);
          }
        });
      });
      updateNavigationState();
      return;
    }

    const selectedEntry = entries.find(entry => entry.key === selectedKey) ?? null;

    entries.forEach(entry => {
      const isActive = entry === selectedEntry;
      entry.host.classList.toggle(HOST_HIDDEN_CLASS, !isActive);
      entry.host.classList.toggle(HOST_ACTIVE_CLASS, isActive);
      entry.drawer?.classList.toggle(DRAWER_ACTIVE_CLASS, isActive);
      if (entry.content) {
        entry.content.classList.toggle('open', isActive);
        if (isActive && entry.content.style.display === 'none') {
          entry.content.style.removeProperty('display');
        }
      }
    });

    columns.forEach(column => {
      const isColActive = selectedEntry?.column === column;
      column.classList.toggle(COLUMN_ACTIVE_CLASS, isColActive);
      Array.from(column.children).forEach(child => {
        if (child instanceof hostWindow.HTMLElement && child !== navigation) {
          const isSelectedChild =
            isColActive && selectedEntry
              ? child === selectedEntry.sourceHost ||
                child === selectedEntry.host ||
                child.contains(selectedEntry.host)
              : false;
          child.classList.toggle(HOST_HIDDEN_CLASS, !isSelectedChild);
        }
      });
    });
    updateNavigationState();
  }

  function ensureSelectedEntryOpen(): void {
    openFrame = 0;
    if (usesMobileAccordion || !panel?.classList.contains('openDrawer')) {
      return;
    }

    const selectedEntry = entries.find(entry => entry.key === selectedKey);
    if (!selectedEntry?.header || !selectedEntry.content || isEntryExpanded(selectedEntry)) {
      return;
    }

    selectedEntry.header.click();
  }

  function scheduleEnsureSelectedEntryOpen(): void {
    if (openFrame !== 0) {
      return;
    }

    openFrame = hostWindow.requestAnimationFrame(ensureSelectedEntryOpen);
  }

  function selectEntry(key: string): void {
    if (!entries.some(entry => entry.key === key)) {
      return;
    }

    selectedKey = key;
    writeSelectedKey(selectedKey);
    applySelection();
    scheduleEnsureSelectedEntryOpen();
  }

  function updateResponsiveMode(width: number): void {
    const nextUsesMobileAccordion = isMobileViewport() || (width > 0 && width < MOBILE_ACCORDION_MAX_DRAWER_WIDTH);
    panel?.classList.toggle(MOBILE_ACCORDION_CLASS, nextUsesMobileAccordion);
    if (usesMobileAccordion === nextUsesMobileAccordion) {
      return;
    }

    usesMobileAccordion = nextUsesMobileAccordion;
    applySelection();
    if (!usesMobileAccordion) {
      scheduleEnsureSelectedEntryOpen();
    }
  }

  function syncEntries(): void {
    syncFrame = 0;
    if (!layout?.isConnected) {
      return;
    }

    entriesDirty = false;
    const nextEntries = collectEntries();
    const nextHosts = new Set(nextEntries.map(entry => entry.host));
    const nextDrawers = new Set(nextEntries.map(entry => entry.drawer));
    // Keep live entries visible: hiding them during a drag resets the column scroll.
    entries.forEach(entry => {
      if (!nextHosts.has(entry.host)) {
        entry.host.classList.remove(HOST_HIDDEN_CLASS, HOST_ACTIVE_CLASS);
      }
      if (!nextDrawers.has(entry.drawer)) {
        entry.drawer?.classList.remove(DRAWER_CLASS, DRAWER_ACTIVE_CLASS);
      }
    });
    entries = nextEntries;
    entryHosts = nextHosts;
    entries.forEach(entry => entry.drawer?.classList.add(DRAWER_CLASS));

    if (!entries.some(entry => entry.key === selectedKey)) {
      selectedKey = entries.find(isEntryExpanded)?.key ?? entries[0]?.key ?? null;
      writeSelectedKey(selectedKey);
    }

    const nextSignature = JSON.stringify([
      entries.map(entry => [entry.key, entry.title, entry.badge, entry.column.id]),
      columns.map(column => Array.from(column.children).map(node => [
        hostWindow.getComputedStyle(node).order,
        node.matches('.mc3-native-subgroup-header') ? [node.id, node.textContent, node.getAttribute('aria-expanded'),
          node.matches('.mc3-hidden, .displayNone, [hidden]'), (node as HTMLElement).style.display] : null,
      ])),
    ]);
    if (nextSignature !== renderedSignature) {
      renderedSignature = nextSignature;
      renderNavigation();
    }

    applySelection();
    observeStructure();
    scheduleEnsureSelectedEntryOpen();
  }

  function scheduleSyncEntries(): void {
    entriesDirty = true;
    if (!panel?.classList.contains('openDrawer') || syncFrame !== 0) {
      return;
    }

    syncFrame = hostWindow.requestAnimationFrame(() => {
      syncFrame = 0;
      if (panel?.classList.contains('openDrawer')) syncEntries();
    });
  }

  function handleStructureMutations(records: MutationRecord[]): void {
    if (entriesDirty || records.some(isDirectoryMutation)) scheduleSyncEntries();
  }

  function isDirectoryMutation(record: MutationRecord): boolean {
    const element = record.target instanceof hostWindow.HTMLElement ? record.target : record.target.parentElement;
    if (!element) return false;
    const column = columns.find(item => item.contains(element));
    if (!column) return false;
    if (element === column) return record.type === 'childList';
    const closestDrawer = element.closest('.inline-drawer');
    const drawer = column.contains(closestDrawer) ? closestDrawer : null;
    if (column.contains(drawer?.parentElement?.closest('.inline-drawer') ?? null)) return false;

    const directChild = element.parentElement === column;
    const subgroup = element.closest('.mc3-native-subgroup-header');
    const header = element.closest('.inline-drawer-toggle, h3, h4, .standoutHeader');
    const content = element.closest('.inline-drawer-content');
    const inContent = !!drawer && content !== drawer && drawer.contains(content);
    if (inContent && element.parentElement !== drawer) return false;
    if (record.type === 'attributes') {
      if (record.attributeName === 'aria-expanded') return element === subgroup;
      if (record.attributeName === 'class') {
        const previous = (record.oldValue ?? '').split(/\s+/).filter(name => name && !OWN_ENTRY_CLASSES.has(name));
        const current = Array.from(element.classList).filter(name => !OWN_ENTRY_CLASSES.has(name));
        if (previous.join(' ') === current.join(' ')) return false;
        if (STRUCTURE_CLASSES.some(name => previous.includes(name) !== current.includes(name))) return true;
      }
      return directChild || element === drawer ||
        ((record.attributeName === 'id' || record.attributeName === 'script_id') && entryHosts.has(element)) ||
        (record.attributeName === 'class' && !inContent && !!header && !element.closest('a, button, i, svg, .notes-link, .inline-drawer-icon'));
    }
    if (inContent) return false;
    if (subgroup || (header && !element.closest('a, button, i, svg, .notes-link, .inline-drawer-icon'))) return true;
    return record.type === 'childList' && (!drawer || element === drawer);
  }

  function observeStructure(): void {
    structureObserver?.disconnect();
    if (!structureObserver) {
      return;
    }

    columns.forEach(column => {
      structureObserver?.observe(column, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['class', 'style', 'hidden', 'id', 'script_id', 'aria-expanded'],
      });
      column.querySelectorAll(':scope > .mc3-native-subgroup-header').forEach(header => {
        structureObserver?.observe(header, { characterData: true, subtree: true });
      });
    });

    entries.forEach(entry => {
      const title = entry.header ?? entry.host.querySelector('h3, h4, .standoutHeader');
      if (title) {
        structureObserver?.observe(title, {
          characterData: true,
          subtree: true,
        });
      }
    });
  }

  function handleNavigationClick(event: MouseEvent): void {
    const target = event.target instanceof hostWindow.Element ? event.target : null;
    const button = target?.closest<HTMLButtonElement>(`.${NAV_ITEM_CLASS}`);
    if (!button || !navigation?.contains(button)) {
      return;
    }

    const key = button.dataset.extensionKey;
    if (key) {
      selectEntry(key);
    }
  }

  function createNavigation(): HTMLElement {
    const nav = hostDocument.createElement('nav');
    nav.className = NAV_CLASS;
    nav.setAttribute('aria-label', '扩展程序设置');

    const header = hostDocument.createElement('div');
    header.className = 'th-modern-extension-nav-header';
    const title = hostDocument.createElement('span');
    title.textContent = '扩展设置';
    const count = hostDocument.createElement('span');
    count.className = NAV_COUNT_CLASS;
    header.append(title, count);

    const list = hostDocument.createElement('div');
    list.className = NAV_LIST_CLASS;
    nav.append(header, list);
    nav.addEventListener('click', handleNavigationClick);
    navigationList = list;
    navigationCount = count;
    return nav;
  }

  function mountLayout(): void {
    if (layout?.isConnected) {
      scheduleSyncEntries();
      return;
    }

    panel = hostDocument.querySelector<HTMLElement>('#rm_extensions_block');
    layout = panel?.querySelector<HTMLElement>(':scope > .extensions_block') ?? null;
    columns = ['extensions_settings', 'extensions_settings2']
      .map(id => hostDocument.getElementById(id))
      .filter((column): column is HTMLElement => column instanceof hostWindow.HTMLElement);
    if (!panel || !layout || columns.length === 0) {
      panel = null;
      layout = null;
      columns = [];
      return;
    }

    hostDocument.body.classList.add(BODY_CLASS);
    panel.classList.add(PANEL_CLASS);
    layout.classList.add(LAYOUT_CLASS);
    columns.forEach(column => column.classList.add(COLUMN_CLASS));
    const initialPanelWidth = panel.getBoundingClientRect().width;
    usesMobileAccordion = isMobileViewport() || (initialPanelWidth > 0 && initialPanelWidth < MOBILE_ACCORDION_MAX_DRAWER_WIDTH);
    panel.classList.toggle(MOBILE_ACCORDION_CLASS, usesMobileAccordion);
    navigation = createNavigation();
    columns[0].before(navigation);

    viewportMediaQuery = hostWindow.matchMedia('(max-width: 899.98px)');
    viewportMediaQuery.addEventListener?.('change', handleViewportChange);

    structureObserver = new hostWindow.MutationObserver(handleStructureMutations);
    observeStructure();
    panelObserver = new hostWindow.MutationObserver(() => {
      if (entriesDirty) scheduleSyncEntries();
      else scheduleEnsureSelectedEntryOpen();
    });
    panelObserver.observe(panel, { attributes: true, attributeFilter: ['class'] });
    panelResizeObserver = new hostWindow.ResizeObserver(records => {
      const panelRecord = records.find(record => record.target === panel);
      if (panelRecord) {
        updateResponsiveMode(panelRecord.contentRect.width);
      }
    });
    panelResizeObserver.observe(panel);
    if (panel.classList.contains('openDrawer')) syncEntries();
    else entriesDirty = true;
  }

  function unmountLayout(): void {
    viewportMediaQuery?.removeEventListener?.('change', handleViewportChange);
    viewportMediaQuery = null;
    structureObserver?.disconnect();
    structureObserver = null;
    panelObserver?.disconnect();
    panelObserver = null;
    panelResizeObserver?.disconnect();
    panelResizeObserver = null;
    if (syncFrame !== 0) {
      hostWindow.cancelAnimationFrame(syncFrame);
      syncFrame = 0;
    }
    if (openFrame !== 0) {
      hostWindow.cancelAnimationFrame(openFrame);
      openFrame = 0;
    }

    navigation?.removeEventListener('click', handleNavigationClick);
    navigation?.remove();
    entries.forEach(entry => {
      entry.host.classList.remove(HOST_HIDDEN_CLASS, HOST_ACTIVE_CLASS);
      entry.drawer?.classList.remove(DRAWER_CLASS, DRAWER_ACTIVE_CLASS);
    });
    columns.forEach(column => {
      column.classList.remove(COLUMN_CLASS, COLUMN_ACTIVE_CLASS);
      column
        .querySelectorAll<HTMLElement>(`.${DRAWER_ACTIVE_CLASS}`)
        .forEach(drawer => drawer.classList.remove(DRAWER_ACTIVE_CLASS));
      Array.from(column.children).forEach(child => child.classList.remove(HOST_HIDDEN_CLASS, HOST_ACTIVE_CLASS));
    });
    layout?.classList.remove(LAYOUT_CLASS);
    panel?.classList.remove(PANEL_CLASS, MOBILE_ACCORDION_CLASS);
    hostDocument.body.classList.remove(BODY_CLASS);

    panel = null;
    layout = null;
    navigation = null;
    navigationList = null;
    navigationCount = null;
    columns = [];
    entries = [];
    entryHosts.clear();
    renderedSignature = '';
    entriesDirty = false;
  }

  const stopWatch = watch(
    () => [store.is_active, store.settings.modernExtensionSettings] as const,
    ([isActive, isEnabled]) => {
      if (isActive && isEnabled) {
        mountLayout();
      } else {
        unmountLayout();
      }
    },
    { immediate: true },
  );

  return {
    destroy() {
      stopWatch();
      unmountLayout();
    },
  };
}
