# `@jiyuujin/validation-utils`

Install `@jiyuujin/validation-utils`

```bash
# npm
npm i @jiyuujin/validation-utils

# yarn
yarn add @jiyuujin/validation-utils
```

## Usage

### Use regular expressions for Japanese characters

Use `japaneseCharactersPattern` in `@jiyuujin/validation-utils`.

```ts
import { japaneseCharactersPattern } from '@jiyuujin/validation-utils'
```

#### Targets

- Full-width spaces, punctuation marks, and other symbols
- Japanese hiragana and katakana expressions
- Cloud points and half cloud points
- Others
  - `ゝ`, `ゞ`, `・`, `ー`, `ヽ`, `ヾ`

### Use regular expressions for Kanji characters

Use `japaneseKanjiPattern` in `@jiyuujin/validation-utils`.

```ts
import { japaneseKanjiPattern } from '@jiyuujin/validation-utils'
```

#### Targets

- Japanese kanji

### Use regular expressions for machine dependent word patterns

Use `machineDependentWordPattern` in `@jiyuujin/validation-utils`.

```ts
import { machineDependentWordPattern } from '@jiyuujin/validation-utils'
```

#### Targets

```bash
①|②|③|④|⑤|⑥|⑦|⑧|⑨|⑩|⑪|⑫|⑬|⑭|⑯|⑰|⑱|⑲|⑳|Ⅰ|Ⅱ|Ⅲ|Ⅳ|Ⅴ|Ⅵ|Ⅶ|Ⅷ|Ⅸ|Ⅹ|㍉|㌔|㌢|㍍|㌘|㌧|㌃|㌶|㍑|㍗|㌍|㌦|㌣|㌫|㍊|㌻|㎜|㎝|㎞|㎎|㎏|㏄|㎡|㍻|〝|〟|№|㏍|℡|㊤|㊥|㊦|㊧|㊨|㈱|㈲|㈹|㍾|㍽|㍼|∮|∟|⊿|纊|褜|鍈|銈|蓜|俉|炻|昱|棈|鋹|曻|彅|丨|仡|仼|伀|伃|伹|佖|侒|侊|侚|侔|俍|偀|倢|俿|倞|偆|偰|偂|傔|僴|僘|兊|兤|冝|冾|凬|刕|劜|劦|勀|勛|匀|匇|匤|卲|厓|厲|叝|﨎|咜|咊|咩|哿|喆|坙|坥|垬|埈|埇|﨏|增|墲|夋|奓|奛|奝|奣|妤|妺|孖|寀|甯|寘|寬|尞|岦|岺|峵|崧|嵓|﨑|嵂|嵭|嶸|嶹|巐|弡|弴|彧|德|忞|恝|悅|悊|惞|惕|愠|惲|愑|愷|愰|憘|戓|抦|揵|摠|撝|擎|敎|昀|昕|昻|昉|昮|昞|昤|晥|晗|晙|晳|暙|暠|暲|暿|曺|朎|杦|枻|桒|柀|栁|桄|棏|﨓|楨|﨔|榘|槢|樰|橫|橆|橳|橾|櫢|櫤|毖|氿|汜|沆|汯|泚|洄|涇|浯|涖|涬|淏|淸|淲|淼|渹|湜|渧|渼|溿|澈|澵|濵|瀅|瀇|瀨|炅|炫|焏|焄|煜|煆|煇|凞|燁|燾|犱|犾|猤|獷|玽|珉|珖|珣|珒|琇|珵|琦|琪|琩|琮|瑢|璉|璟|甁|畯|皂|皜|皞|皛|皦|睆|劯|砡|硎|硤|礰|禔|禛|竑|竧|竫|箞|絈|絜|綷|綠|緖|繒|罇|羡|茁|荢|荿|菇|菶|葈|蒴|蕓|蕙|蕫|﨟|薰|蘒|﨡|蠇|裵|訒|訷|詹|誧|誾|諟|諶|譓|譿|賰|賴|贒|赶|﨣|軏|﨤|遧|郞|鄕|鄧|釚|釗|釞|釭|釮|釤|釥|鈆|鈐|鈊|鈺|鉀|鈼|鉎|鉙|鉑|鈹|鉧|銧|鉷|鉸|鋧|鋗|鋙|鋐|﨧|鋕|鋠|鋓|錥|錡|鋻|﨨|錞|鋿|錝|錂|鍰|鍗|鎤|鏆|鏞|鏸|鐱|鑅|鑈|閒|﨩|隝|隯|霳|霻|靃|靍|靏|靑|靕|顗|顥|餧|馞|驎|髙|髜|魵|魲|鮏|鮱|鮻|鰀|鵰|鵫|鸙|黑|ⅰ|ⅱ|ⅲ|ⅳ|ⅴ|ⅵ|ⅶ|ⅷ|ⅸ|ⅹ|￢|￤|＇|＂|≒|≡|∫|∑|√|⊥|∠|∵|∩|∪|€|㍵|〷|☯|☸|☬|☤|☡|℆|℅|℄|℁|℀|⁀|‿|‷|‶|‵|‴|‱|🔣|�|✇|☣|㈳|㈴|㈵|㈶|㈷|㈸|㈺|㈻|㈼|㈽|㈾|㈿|㉀|㉁|㉂|㉃|㈪|㈫|㈬|㈭|㈮|㈯|㈰|❶|❷|❸|❹|❺|❻|❼|❽|❾|❿|➊|➋|➌|➍|➎|➏|➐|➑|➒|➓|⑴|⑵|⑶|⑷|⑸|⑹|⑺|⑻|⑼|⑽|⑾|⑿|⒀|⒁|⒂|⒃|⒄|⒅|⒆|⒇|₁|₂|₃|₄|₅|₆|₇|₈|₉|¹|²|³|⁴|⁵|⁶|⁷|⁸|⁹|㈠|㈡|㈢|㈣|㈤|㈥|㈦|㈧|㈨|㈩|㊀|㊁|㊂|㊃|㊄|㊅|㊆|㊇|㊈|㊉|⑮|㉑|㉒|㉓|㉔|㉕|㉖|㉗|㉘|㉙|㉚|㉛|㉜|㉝|㉞|㉟|㊱|㊲|㊳|㊴|㊵|㊶|㊷|㊸|㊹|㊺|㊻|㊼|㊽|㊾|㊿|㋿|凞|硺|蘒
```

### Use regular expressions for emoji

Use `countEmoji` in `@jiyuujin/validation-utils`.

```ts
import { countEmoji } from '@jiyuujin/validation-utils'
```

#### Targets

```bash
😄|😃|😀|😊|☺|😉|😍|😘|😚|😗|😙|😜|😝|😛|😳|😁|😔|😌|😒|😞|😣|😢|😂|😭|😪|😥|😰|😅|😓|😩|😫|😨|😱|😠|😡|😤|😖|😆|😋|😷|😎|😴|😵|😲|😟|😦|😧|😈|👿|😮|😬|😐|😕|😯|😶|😇|😏|😑|👲|👳|👮|👷|💂|👶|👦|👧|👨|👩|👴|👵|👱|👼|👸|😺|😸|😻|😽|😼|🙀|😿|😹|😾|👹|👺|🙈|🙉|🙊|💀|👽|💩|🔥|✨|🌟|💫|💥|💢|💦|💧|💤|💨|👂|👀|👃|👅|👄|👍|👎|👌|👊|✊|✌|👋|✋|👐|👆|👇|👉|👈|🙌|🙏|☝|👏|💪|🚶|🏃|💃|👫|👪|👬|👭|💏|💑|👯|🙆|🙅|💁|🙋|💆|💇|💅|👰|🙎|🙍|🙇|🎩|👑|👒|👟|👞|👡|👠|👢|👕|👔|👚|👗|🎽|👖|👘|👙|💼|👜|👝|👛|👓|🎀|🌂|💄|💛|💙|💜|💚|❤|💔|💗|💓|💕|💖|💞|💘|💌|💋|💍|💎|👤|👥|💬|👣|💭|🐶|🐺|🐱|🐭|🐹|🐰|🐸|🐯|🐨|🐻|🐷|🐽|🐮|🐗|🐵|🐒|🐴|🐑|🐘|🐼|🐧|🐦|🐤|🐥|🐣|🐔|🐍|🐢|🐛|🐝|🐜|🐞|🐌|🐙|🐚|🐠|🐟|🐬|🐳|🐋|🐄|🐏|🐀|🐃|🐅|🐇|🐉|🐎|🐐|🐓|🐕|🐖|🐁|🐂|🐲|🐡|🐊|🐫|🐪|🐆|🐈|🐩|🐾|💐|🌸|🌷|🍀|🌹|🌻|🌺|🍁|🍃|🍂|🌿|🌾|🍄|🌵|🌴|🌲|🌳|🌰|🌱|🌼|🌐|🌞|🌝|🌚|🌑|🌒|🌓|🌔|🌕|🌖|🌗|🌘|🌜|🌛|🌙|🌍|🌎|🌏|🌋|🌌|🌠|⭐|☀|⛅|☁|⚡|☔|❄|⛄|🌀|🌁|🌈|🌊|🎍|💝|🎎|🎒|🎓|🎏|🎆|🎇|🎐|🎑|🎃|👻|🎅|🎄|🎁|🎋|🎉|🎊|🎈|🎌|🔮|🎥|📷|📹|📼|💿|📀|💽|💾|💻|📱|☎|📞|📟|📠|📡|📺|📻|🔊|🔉|🔈|🔇|🔔|🔕|📢|📣|⏳|⌛|⏰|⌚|🔓|🔒|🔏|🔐|🔑|🔎|💡|🔦|🔆|🔅|🔌|🔋|🔍|🛁|🛀|🚿|🚽|🔧|🔩|🔨|🚪|🚬|💣|🔫|🔪|💊|💉|💰|💴|💵|💷|💶|💳|💸|📲|📧|📥|📤|✉|📩|📨|📯|📫|📪|📬|📭|📮|📦|📝|📄|📃|📑|📊|📈|📉|📜|📋|📅|📆|📇|📁|📂|✂|📌|📎|✒|✏|📏|📐|📕|📗|📘|📙|📓|📔|📒|📚|📖|🔖|📛|🔬|🔭|📰|🎨|🎬|🎤|🎧|🎼|🎵|🎶|🎹|🎻|🎺|🎷|🎸|👾|🎮|🃏|🎴|🀄|🎲|🎯|🏈|🏀|⚽|⚾|🎾|🎱|🏉|🎳|⛳|🚵|🚴|🏁|🏇|🏆|🎿|🏂|🏊|🏄|🎣|☕|🍵|🍶|🍼|🍺|🍻|🍸|🍹|🍷|🍴|🍕|🍔|🍟|🍗|🍖|🍝|🍛|🍤|🍱|🍣|🍥|🍙|🍘|🍚|🍜|🍲|🍢|🍡|🍳|🍞|🍩|🍮|🍦|🍨|🍧|🎂|🍰|🍪|🍫|🍬|🍭|🍯|🍎|🍏|🍊|🍋|🍒|🍇|🍉|🍓|🍑|🍈|🍌|🍐|🍍|🍠|🍆|🍅|🌽|🏠|🏡|🏫|🏢|🏣|🏥|🏦|🏪|🏩|🏨|💒|⛪|🏬|🏤|🌇|🌆|🏯|🏰|⛺|🏭|🗼|🗾|🗻|🌄|🌅|🌃|🗽|🌉|🎠|🎡|⛲|🎢|🚢|⛵|🚤|🚣|⚓|🚀|✈|💺|🚁|🚂|🚊|🚉|🚞|🚆|🚄|🚅|🚈|🚇|🚝|🚋|🚃|🚎|🚌|🚍|🚙|🚘|🚗|🚕|🚖|🚛|🚚|🚨|🚓|🚔|🚒|🚑|🚐|🚲|🚡|🚟|🚠|🚜|💈|🚏|🎫|🚦|🚥|⚠|🚧|🔰|⛽|🏮|🎰|♨|🗿|🎪|🎭|📍|🚩|🔟|🔢|🔣|⬆|⬇|⬅|➡|🔠|🔡|🔤|↗|↖|↘|↙|↔|↕|🔄|◀|▶|🔼|🔽|↩|↪|ℹ|⏪|⏩|⏫|⏬|⤵|⤴|🆗|🔀|🔁|🔂|🆕|🆙|🆒|🆓|🆖|📶|🎦|🈁|🈯|🈳|🈵|🈴|🈲|🉐|🈹|🈺|🈶|🈚|🚻|🚹|🚺|🚼|🚾|🚰|🚮|🅿|♿|🚭|🈷|🈸|🈂|Ⓜ|🛂|🛄|🛅|🛃|🉑|㊙|㊗|🆑|🆘|🆔|🚫|🔞|📵|🚯|🚱|🚳|🚷|🚸|⛔|✳|❇|❎|✅|✴|💟|🆚|📳|📴|🅰|🅱|🆎|🅾|💠|➿|♻|♈|♉|♊|♋|♌|♍|♎|♏|♐|♑|♒|♓|⛎|🔯|🏧|💹|💲|💱|©|®|™|〽|〰|🔝|🔚|🔙|🔛|🔜|❌|⭕|❗|❓|❕|❔|🔃|🕛|🕧|🕐|🕜|🕑|🕝|🕒|🕞|🕓|🕟|🕔|🕠|🕕|🕖|🕗|🕘|🕙|🕚|🕡|🕢|🕣|🕤|🕥|🕦|✖|➕|➖|➗|♠|♥|♣|♦|💮|💯|✔|☑|🔘|🔗|➰|🔱|🔲|🔳|◼|◻|◾|◽|▪|▫|🔺|⬜|⬛|⚫|⚪|🔴|🔵|🔻|🔶|🔷|🔸|🔹|
```

### Delete control characters

Use `trimControlCharacters` in `@jiyuujin/validation-utils`.

```ts
import { trimControlCharacters } from '@jiyuujin/validation-utils'
```

#### Targets

- `\b`

### Filter url patterns

Mainly use `urlPattern` in `@jiyuujin/validation-utils`.

```ts
import {
  urlPattern,
  httpsUrlPattern,
  facebookUrlPattern,
  twitterUrlPattern,
  linkedInUrlPattern,
  youTubeEmbedCodePattern,
  vimeoEmbedCodePattern,
  slidoEmbedCodePattern,
} from '@jiyuujin/validation-utils'
```

#### Targets

- HTTP
- SSL (HTTPS)
- Facebook URL
- Twitter URL
- LinkedIn URL
- YouTube iframe
- Vimeo iframe
- Sli.do iframe
