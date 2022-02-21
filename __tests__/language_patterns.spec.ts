import {
  hasEmailWithJapanese,
  japaneseCharactersPattern,
  japaneseKanjiPattern,
} from '../src/language_patterns'

it('return the validation result when entry an alphabet word pattern', () => {
  const target = 'abcde'
  const result = new RegExp(japaneseCharactersPattern).test(target)

  expect(result).toBe(false)
})

it('return the validation result when entry a hiragana word pattern', () => {
  const target = 'あいうえお'
  const result = new RegExp(japaneseCharactersPattern).test(target)

  expect(result).toBe(true)
})

it('return the validation result when entry a hiragana word pattern', () => {
  const target = 'アイウエオ'
  const result = new RegExp(japaneseCharactersPattern).test(target)

  expect(result).toBe(true)
})

it('return the validation result when entry a hiragana word pattern', () => {
  const target = '漢字'
  const result = new RegExp(japaneseCharactersPattern).test(target)

  expect(result).toBe(false)
})

it('return the validation result when entry a kanji word pattern', () => {
  const target = 'abcde'
  const result = new RegExp(japaneseKanjiPattern).test(target)

  expect(result).toBe(false)
})

it('return the validation result when entry a kanji word pattern', () => {
  const target = 'あいうえお'
  const result = new RegExp(japaneseKanjiPattern).test(target)

  expect(result).toBe(false)
})

it('return the validation result when entry a kanji word pattern', () => {
  const target = 'アイウエオ'
  const result = new RegExp(japaneseKanjiPattern).test(target)

  expect(result).toBe(false)
})

it('return the validation result when entry a kanji word pattern', () => {
  const target = '漢字'
  const result = new RegExp(japaneseKanjiPattern).test(target)

  expect(result).toBe(true)
})

test('return the validation result when entry an email with a hiragana word pattern', () => {
  const target = 'abc@example.com'
  const result = hasEmailWithJapanese(target)

  expect(result).toBe(false)
})

test('return the validation result when entry an email with a hiragana word pattern', () => {
  const target = 'abc@あいうえお.com'
  const result = hasEmailWithJapanese(target)

  expect(result).toBe(true)
})

test('return the validation result when entry an email with a kanji word pattern', () => {
  const target = 'abc@東京.com'
  const result = hasEmailWithJapanese(target)

  expect(result).toBe(true)
})
