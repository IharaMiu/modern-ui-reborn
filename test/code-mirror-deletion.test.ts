import assert from 'node:assert/strict';
import test from 'node:test';
import { trackCodeMirrorDeletion } from '../src/code-mirror-deletion.ts';

test('detects actual CodeMirror deletions but ignores unchanged and detached editors', () => {
  class FakeElement {
    innerText = 'abc';
    isConnected = true;
    classList = { contains: (name: string) => name === 'cm-content' };
  }
  const editor = new FakeElement();
  const event = { key: 'Backspace', target: { shadowRoot: { querySelector: () => editor } } } as unknown as KeyboardEvent;
  let scheduled: (() => void) | undefined;
  let changes = 0;
  const watch = () => trackCodeMirrorDeletion(event, callback => { scheduled = callback; }, () => { changes++; });
  watch();
  scheduled?.();
  assert.equal(changes, 0);
  watch();
  editor.innerText = 'ab';
  scheduled?.();
  assert.equal(changes, 1);
  watch();
  editor.innerText = 'a';
  editor.isConnected = false;
  scheduled?.();
  assert.equal(changes, 1);
  editor.isConnected = true;
  (event as any).key = 'Delete';
  watch();
  editor.innerText = '';
  scheduled?.();
  assert.equal(changes, 2);
  scheduled = undefined;
  (event as any).key = 'ArrowLeft';
  watch();
  assert.equal(scheduled, undefined);
});
