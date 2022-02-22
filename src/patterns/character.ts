/**
 * 制御文字を削除する
 * @param val
 */
export const trimControlCharacters = (val: string): string => {
  return val.replace(/\\b/g, '')
}
