/** Compare both the server and the live host cache with the data used for deletion. */
export function worldInfoChanged(baseline: string, server: unknown, current: unknown): boolean {
  return worldInfoSnapshot(server) !== baseline || worldInfoSnapshot(current) !== baseline;
}

export function worldInfoSnapshot(data: unknown): string | undefined {
  return JSON.stringify(data, (_, value) => {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) return value;
    return Object.fromEntries(Object.keys(value).sort().map(key => [key, value[key]]));
  });
}

export const WORLD_INFO_RESPONSE_TIMEOUT = 30_000;

export async function readWorldInfoWithTimeout<T>(read: (signal: AbortSignal) => Promise<T>, message: string): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(new Error(message)), WORLD_INFO_RESPONSE_TIMEOUT);
  try {
    const deadline = new Promise<never>((_, reject) => {
      controller.signal.addEventListener('abort', () => reject(controller.signal.reason), { once: true });
    });
    return await Promise.race([read(controller.signal), deadline]);
  } finally {
    clearTimeout(timer);
  }
}
