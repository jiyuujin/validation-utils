/**
 * URL を抽出するためのパターン
 */
export const urlPattern = /^(https|http):\/\//g

/**
 * HTTPS URL を抽出するためのパターン
 */
export const httpsUrlPattern = /https:\/\//g

/**
 * Facebook URL を抽出するためのパターン
 */
export const facebookUrlPattern = /facebook.com|ja-jp.facebook.com/g

/**
 * Twitter URL を抽出するためのパターン
 */
export const twitterUrlPattern = /twitter.com|twitter.com\/\?lang=ja/g

/**
 * LinkedIn URL を抽出するためのパターン
 */
export const linkedInUrlPattern = /linkedin.com|jp.linkedin.com/g

/**
 * YouTube 埋め込みタグを抽出するためのパターン
 */
export const youTubeEmbedCodePattern =
  /<iframe.+?src="https:\/\/(www.youtube.com|youtube.com)(.*?)".+?<\/iframe>/g

/**
 * Vimeo 埋め込みタグを抽出するためのパターン
 */
export const vimeoEmbedCodePattern =
  /<iframe.+?src="https:\/\/(player.vimeo.com)(.*?)".+?<\/iframe>/g

/**
 * Sli.do 埋め込みタグを抽出するためのパターン
 */
export const slidoEmbedCodePattern = /<iframe.+?src="https:\/\/app\.sli\.do\/(.*?)".+?<\/iframe>/g
