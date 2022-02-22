// regex
export {
  japaneseCharactersPattern,
  japaneseKanjiPattern,
  machineDependentWordPattern,
} from './patterns/regex'

// emoji
export { countEmoji } from './patterns/emoji'

// character
export { trimControlCharacters } from './patterns/character'

// url
export {
  urlPattern,
  httpsUrlPattern,
  facebookUrlPattern,
  twitterUrlPattern,
  linkedInUrlPattern,
  youTubeEmbedCodePattern,
  vimeoEmbedCodePattern,
  slidoEmbedCodePattern,
} from './patterns/url'

// others (experimental)
export { hasEmailWithJapanese } from './patterns/language'
