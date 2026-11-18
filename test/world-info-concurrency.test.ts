import assert from 'node:assert/strict';
import test from 'node:test';
import { readWorldInfoWithTimeout, WORLD_INFO_RESPONSE_TIMEOUT, worldInfoChanged, worldInfoSnapshot } from '../src/world-info-concurrency.ts';

test('world book deletion detects server and local changes', () => {
  const original = { entries: { 1: { content: 'before' } } };
  const baseline = worldInfoSnapshot(original)!;
  const changed = { entries: { 1: { content: 'after' } } };
  assert.equal(worldInfoChanged(baseline, original, original), false);
  assert.equal(worldInfoChanged(baseline, changed, original), true);
  assert.equal(worldInfoChanged(baseline, original, changed), true);
});

test('world book snapshots allow object key reordering and detect array order changes', () => {
  const original = { entries: { 1: { uid: 1, key: ['A', 'B'] } }, name: 'Book' };
  const reordered = { name: 'Book', entries: { 1: { key: ['A', 'B'], uid: 1 } } };
  const baseline = worldInfoSnapshot(original)!;
  assert.equal(worldInfoChanged(baseline, reordered, original), false);
  reordered.entries[1].key.reverse();
  assert.equal(worldInfoChanged(baseline, reordered, original), true);
});

test('timing out a world book read aborts its signal and rejects even when the host never settles', async ({ mock }) => {
  mock.timers.enable({ apis: ['setTimeout'] });
  let signal!: AbortSignal;
  const read = readWorldInfoWithTimeout(current => {
    signal = current;
    return new Promise(() => {});
  }, 'World read timed out');
  mock.timers.tick(WORLD_INFO_RESPONSE_TIMEOUT);
  await assert.rejects(read, { message: 'World read timed out' });
  assert.equal(signal.aborted, true);
});
