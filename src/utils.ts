/**
 * Unicode 形式を文字列にアンエスケープ
 * @param code Unicode 形式
 */
export const unescapeCode = (code: string): string => {
  let result = ''

  const _code = code.match(/\\u.{4}/gi)

  if (!_code) return ''

  for (let i = 0, len = _code.length; i < len; i++) {
    result += String.fromCharCode(Number(_code[i].replace('\\u', '0x')))
  }

  return result
}

/**
 * 文字列を Unicode 形式にエスケープ
 * @param text 文字列
 */
export const escapeText = (text: string): string => {
  if (!String.prototype.repeat) {
    String.prototype.repeat = function (digit) {
      let result = ''
      for (let i = 0; i < Number(digit); i++) result += text
      return result
    }
  }

  const _text = text.split('')
  let hex,
    result = ''

  for (let i = 0, len = _text.length; i < len; i++) {
    if (_text[i] !== '|') {
      hex = _text[i].charCodeAt(0).toString(16)
      result += '\\u' + '0'.repeat(Math.abs(hex.length - 4)) + hex
    } else {
      result += '|'
    }
  }

  return result
}
