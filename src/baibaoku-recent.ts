const STATUS_URL = '/api/plugins/baibaoku/v1/status';
const FAST_RECENT_URL = '/api/plugins/baibaoku/v1/chats/fast-recent';
const NATIVE_RECENT_URL = '/api/chats/recent';

export async function fetchRecentChatData(
  fetcher: typeof fetch,
  headers: Record<string, string>,
  body: string,
  signal: AbortSignal,
  baiBaiInstalled: boolean,
): Promise<unknown> {
  const request = { method: 'POST', headers, body, cache: 'no-cache' as const, signal };
  if (!baiBaiInstalled) {
    const controller = new AbortController();
    const abort = () => controller.abort();
    if (signal.aborted) abort();
    else signal.addEventListener('abort', abort, { once: true });
    const timeout = setTimeout(abort, 3000);
    try {
      const status = await fetcher(STATUS_URL, { signal: controller.signal, cache: 'no-cache' });
      if (status.ok) {
        const result = await status.json();
        if (result?.ok === true && result.data?.installed === true && result.data?.apiVersion === 'v1') {
          const response = await fetcher(FAST_RECENT_URL, { ...request, signal: controller.signal });
          if (response.ok) {
            const data: unknown = await response.json();
            if (Array.isArray(data) && data.every(item => item && typeof item.file_name === 'string')) return data;
          }
        }
      }
    } catch (error) {
      if (signal.aborted) throw error;
    } finally {
      clearTimeout(timeout);
      signal.removeEventListener('abort', abort);
    }
  }
  const response = await fetcher(NATIVE_RECENT_URL, request);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
