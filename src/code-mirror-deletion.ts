export function trackCodeMirrorDeletion(
  event: KeyboardEvent,
  schedule: (callback: () => void) => void,
  onChange: () => void,
): void {
  if (event.key !== 'Backspace' && event.key !== 'Delete') return;
  const target = event.target as HTMLElement | null;
  const editor = target?.shadowRoot?.querySelector<HTMLElement>('.cm-content')
    ?? target?.closest<HTMLElement>('.cm-content');
  if (!editor) return;
  const before = editor.innerText;
  schedule(() => {
    if (editor.isConnected && editor.innerText !== before) onChange();
  });
}
