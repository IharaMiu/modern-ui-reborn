import assert from 'node:assert/strict';
import test from 'node:test';
import { worldInfoChanged } from '../src/world-info-concurrency.ts';

test('world book deletion detects server and local changes', () => {
  const original = { entries: { 1: { content: 'before' } } };
  const baseline = JSON.stringify(original);
  const changed = { entries: { 1: { content: 'after' } } };
  assert.equal(worldInfoChanged(baseline, original, original), false);
  assert.equal(worldInfoChanged(baseline, changed, original), true);
  assert.equal(worldInfoChanged(baseline, original, changed), true);
});
