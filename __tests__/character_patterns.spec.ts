import { trimControlCharacters } from '../src/patterns/character'

it('return the result when entry control characters will include to text', () => {
  const target = 'abc\\b'
  const result = trimControlCharacters(target)

  expect(result).toBe('abc')
})
