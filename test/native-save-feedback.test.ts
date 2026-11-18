import assert from 'node:assert/strict';
import test from 'node:test';
import { hasNewerPresetEdits, savePresetAndCheck } from '../src/native-save-feedback.ts';

test('save confirms only the request that is still current', async () => {
  let finish!: () => void;
  let current = true;
  const pending = savePresetAndCheck(() => new Promise<void>(resolve => { finish = resolve; }), () => current);
  current = false;
  finish();
  assert.equal(await pending, false);
  assert.equal(await savePresetAndCheck(async () => {}, () => true), true);
  await assert.rejects(savePresetAndCheck(async () => { throw new Error('failed'); }, () => true));
});

test('edits made during a save remain unsaved', () => {
  assert.equal(hasNewerPresetEdits(4, 4), false);
  assert.equal(hasNewerPresetEdits(4, 5), true);
});

test('a preset save times out without confirming a late response', async ({ mock }) => {
  mock.timers.enable({ apis: ['setTimeout'] });
  let finish!: () => void;
  let checks = 0;
  const request = new Promise<void>(resolve => { finish = resolve; });
  const pending = savePresetAndCheck(() => request, () => { checks++; return true; });
  mock.timers.tick(30_000);
  await assert.rejects(pending, { name: 'TimeoutError' });
  finish();
  await request;
  assert.equal(checks, 0);
});
