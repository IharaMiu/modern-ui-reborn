import assert from 'node:assert/strict';
import test from 'node:test';
import { fetchRecentChatData } from '../src/baibaoku-recent.ts';

test('uses the optional fast endpoint and preserves request parameters', async () => {
  const calls: Array<[string, RequestInit | undefined]> = [];
  const fetcher = (async (url: string | URL | Request, init?: RequestInit) => {
    calls.push([String(url), init]);
    return Response.json(calls.length === 1 ? { ok: true, data: { installed: true, apiVersion: 'v1' } } : [{ file_name: 'chat.jsonl' }]);
  }) as typeof fetch;
  const signal = new AbortController().signal;
  assert.deepEqual(await fetchRecentChatData(fetcher, { 'X-CSRF-Token': 'test' }, '{"max":10}', signal, false), [{ file_name: 'chat.jsonl' }]);
  assert.equal(calls[1][0], '/api/plugins/baibaoku/v1/chats/fast-recent');
  assert.equal(calls[1][1]?.body, '{"max":10}');
  assert.equal((calls[1][1]?.headers as Record<string, string>)['X-CSRF-Token'], 'test');
});

test('falls back to the host when the backend is missing, invalid, or fails', async () => {
  for (const failure of ['missing', 'invalid', 'error']) {
    const calls: string[] = [];
    const fetcher = (async (url: string | URL | Request) => {
      calls.push(String(url));
      if (String(url).endsWith('/status')) return failure === 'missing' ? new Response(null, { status: 404 }) : Response.json({ ok: true, data: { installed: true, apiVersion: 'v1' } });
      if (String(url).endsWith('/fast-recent')) {
        if (failure === 'error') throw new Error('network');
        return Response.json({ unexpected: true });
      }
      return Response.json([{ file_name: 'native.jsonl' }]);
    }) as typeof fetch;
    assert.deepEqual(await fetchRecentChatData(fetcher, {}, '{}', new AbortController().signal, false), [{ file_name: 'native.jsonl' }]);
    assert.equal(calls.at(-1), '/api/chats/recent');
  }
});

test('defers to BaiBai and never retries an aborted request', async () => {
  const calls: string[] = [];
  const fetcher = (async (url: string | URL | Request) => { calls.push(String(url)); return Response.json([]); }) as typeof fetch;
  await fetchRecentChatData(fetcher, {}, '{}', new AbortController().signal, true);
  assert.deepEqual(calls, ['/api/chats/recent']);
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(fetchRecentChatData((async () => { throw new Error('aborted'); }) as typeof fetch, {}, '{}', controller.signal, false));
});
