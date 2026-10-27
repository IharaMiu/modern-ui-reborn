/** A cancelled or superseded request must not update the current preset status. */
export async function savePresetAndCheck(save: () => Promise<unknown>, isCurrent: () => boolean): Promise<boolean> {
  await save();
  return isCurrent();
}

export function hasNewerPresetEdits(savedRevision: number, currentRevision: number): boolean {
  return savedRevision !== currentRevision;
}
