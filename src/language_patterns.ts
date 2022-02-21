import Punycode from 'punycode/'

/**
 * 日本語 (全角スペース、句読点などの記号、ひらがな、カタカナ、濁点、半濁点、「ゝ」、「ゞ」、「・」、「ー」、「ヽ」、「ヾ」) を抽出するためのパターン
 * \u{3000}-\u{301C}: 全角スペース、句読点などの記号
 * \u{3041}-\u{3093}: ひらがな
 * \u{30A1}-\u{30F6}: カタカナ
 * \u{309B}-\u{309E}: 濁点、半濁点、「ゝ」、「ゞ」
 * \u{30FB}-\u{30FE}: 「・」、「ー」、「ヽ」、「ヾ」
 */
export const japaneseCharactersPattern =
  /[\u{3000}-\u{301C}\u{3041}-\u{3093}\u{30A1}-\u{30F6}\u{309B}-\u{309E}\u{30FB}-\u{30FE}]/mu

/**
 * 日本語 (漢字) を抽出するためのパターン
 * \u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}: 漢字
 */
export const japaneseKanjiPattern =
  /([\u{3005}\u{3007}\u{303b}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?)/mu

/**
 * 日本語で書かれているメールアドレスかチェックするためのパターン
 * @param text メールアドレス
 */
export const hasEmailWithJapanese = (text: string): boolean => {
  let flag = false

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
