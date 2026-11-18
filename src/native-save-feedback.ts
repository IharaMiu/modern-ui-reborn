/** A cancelled or superseded request must not update the current preset status. */
export async function savePresetAndCheck(save: () => Promise<unknown>, isCurrent: () => boolean): Promise<boolean> {
  let timer: ReturnType<typeof setTimeout>;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new DOMException('Preset save timed out', 'TimeoutError')), 30_000);
  });
  try {
    await Promise.race([save(), timeout]);
    return isCurrent();
  } finally {
    clearTimeout(timer);
  }
}

export function hasNewerPresetEdits(savedRevision: number, currentRevision: number): boolean {
  return savedRevision !== currentRevision;
}
