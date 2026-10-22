/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare const SillyTavern: any;
declare namespace SillyTavern {
  type v1CharData = any;
}

declare const toastr: any;
declare const _: any;
declare const $: any;
declare type JQuery<T = HTMLElement> = any;
declare type JQueryStatic = any;

declare namespace JQuery {
  type KeyDownEvent = any;
  type TriggeredEvent = any;
}

interface Window {
  SillyTavern?: any;
  toastr?: any;
  _?: any;
  $?: any;
  jQuery?: any;
  extension_settings?: Record<string, any>;
  eventSource?: any;
  event_types?: Record<string, string>;
  saveSettingsDebounced?: () => void;
}

