export function getHostDocument(): Document {
  return document;
}

export function getHostWindow(): Window & typeof globalThis {
  return window as Window & typeof globalThis;
}
