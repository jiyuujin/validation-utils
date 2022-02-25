import { hasEmailWithJapanese } from '../src/patterns/language'

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

test('return the validation result when entry an email with a half-katakana word pattern', () => {
  const target = 'abc@ｱｲｳｴｵ.com'
  const result = hasEmailWithJapanese(target)

  expect(result).toBe(true)
})

test('return the validation result when entry an email with a full-katakana word pattern', () => {
  const target = 'abc@アイウエオ.com'
  const result = hasEmailWithJapanese(target)

  expect(result).toBe(true)
})

test('return the validation result when entry an email with a kanji word pattern', () => {
  const target = 'abc@東京.com'
  const result = hasEmailWithJapanese(target)

  expect(result).toBe(true)
})
