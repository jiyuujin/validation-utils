import Punycode from 'punycode/'
import { japaneseCharactersPattern, japaneseKanjiPattern } from './regex'

/**
 * 日本語で書かれているメールアドレスかチェックするためのパターン
 * @param text メールアドレス
 */
export const hasEmailWithJapanese = (text: string): boolean => {
  let flag = false

  if (!text) return !flag

  if (text.indexOf('@') === -1) return !flag

  for (const t of text.split('@')) {
    if (
      new RegExp(japaneseCharactersPattern, 'mu').test(Punycode.toUnicode(t).toString()) === true ||
      new RegExp(japaneseKanjiPattern, 'mu').test(Punycode.toUnicode(t).toString()) === true
    ) {
      flag = true
      break
    }
  }

  return flag
}
