import assert from 'node:assert/strict';
import test from 'node:test';
import { confirmReset } from '../src/panel/confirm-reset.ts';

test('reset requires an affirmative confirmation, including when the host has no result constant', async () => {
  const win = { SillyTavern: { callGenericPopup: async () => undefined }, confirm: () => false } as unknown as Window;
  assert.equal(await confirmReset(win), false);
  (win as any).SillyTavern = undefined;
  assert.equal(await confirmReset(win), false);
  (win as any).confirm = () => true;
  assert.equal(await confirmReset(win), true);
  (win as any).SillyTavern = { POPUP_RESULT: { AFFIRMATIVE: 1 }, callGenericPopup: async () => 1 };
  assert.equal(await confirmReset(win), true);
});
