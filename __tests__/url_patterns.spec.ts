import {
  facebookUrlPattern,
  linkedInUrlPattern,
  twitterUrlPattern,
  urlPattern,
  httpsUrlPattern,
} from '../src/patterns/url'

it('return the validation result when entry a Web URL', () => {
  const target = 'http://www.example.com/'
  const result = new RegExp(urlPattern).test(target)

  expect(result).toBe(true)
})

it('return the validation result when entry a Web URL', () => {
  const target = 'https://www.example.com/'
  const result = new RegExp(urlPattern).test(target)

  expect(result).toBe(true)
})

it('return the validation result when entry a Web URL', () => {
  const target = 'http://www.example.com/'
  const result = new RegExp(httpsUrlPattern).test(target)

  expect(result).toBe(false)
})

it('return the validation result when entry a Web URL', () => {
  const target = 'https://www.example.com/'
  const result = new RegExp(httpsUrlPattern).test(target)

  expect(result).toBe(true)
})

it('return the validation result when entry a Facebook URL', () => {
  const target = 'https://www.facebook.com/example'
  const result = new RegExp(facebookUrlPattern).test(target)

  expect(result).toBe(true)
})

it('return the validation result when entry a Twitter URL', () => {
  const target = 'https://www.twitter.com/example'
  const result = new RegExp(twitterUrlPattern).test(target)

  expect(result).toBe(true)
})

it('return the validation result when entry a LinkedIn URL', () => {
  const target = 'https://www.linkedin.com/example'
  const result = new RegExp(linkedInUrlPattern).test(target)

  expect(result).toBe(true)
})
