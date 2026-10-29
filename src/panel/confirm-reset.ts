export async function confirmReset(win: Window): Promise<boolean> {
  const message = '确定将现代化界面设置重置为默认值吗？';
  const host = (win as Window & { SillyTavern?: any }).SillyTavern;
  if (typeof host?.callGenericPopup !== 'function') return win.confirm(message);
  const result = await host.callGenericPopup(message, host.POPUP_TYPE?.CONFIRM ?? 'confirm');
  return result === true || (host.POPUP_RESULT?.AFFIRMATIVE !== undefined && result === host.POPUP_RESULT.AFFIRMATIVE);
}
