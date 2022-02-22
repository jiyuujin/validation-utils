import { countEmoji, emojiList } from '../src/patterns/emoji'

it.each(emojiList)('return the validation result when entry %s', (emoji) => {
  const result = countEmoji(emoji)

  expect(result).toBe(1)
})
