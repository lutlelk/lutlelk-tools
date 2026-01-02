import { expectType } from 'tsd'
import {
  isBlank,
  isEmail,
  isUrl,
  isPhone,
  isUUID,
  isHex,
  isBase64,
  isJson,
  isNumeric,
  isAlpha,
  isAlphanumeric,
  isLowercase,
  isUppercase,
  startsWith,
  endsWith,
  includes,
  contains,
  equals,
  toCamelCase,
  toPascalCase,
  toKebabCase,
  toSnakeCase,
  toCapitalCase,
  toSentenceCase,
  toLowerCase,
  toUpperCase,
  toTitleCase,
  trim,
  trimStart,
  trimEnd,
  truncate,
  pad,
  padStart,
  padEnd,
  repeat,
  replace,
  replaceAll,
  slice,
  substring,
  split,
  join,
  reverse,
  capitalize,
  uncapitalize,
  length,
  size,
  charAt,
  charCodeAt,
  indexOf,
  lastIndexOf,
  count,
  countWords,
  countChars,
  first,
  last,
  initial,
  rest,
  nth,
  insert,
  remove,
  removeAll,
  before,
  after,
  between,
  words,
  chars,
  lines,
  template,
  interpolate,
  format,
  slugify,
  escape,
  unescape,
  escapeRegExp,
  stripTags,
  stripHtml,
  encodeBase64,
  decodeBase64,
  encodeURI,
  decodeURI,
  hashCode,
  generateUUID,
  random,
  randomNumeric,
  randomAlpha,
  randomAlphaNumeric,
  randomHex,
  mask,
  maskEmail,
  maskPhone,
  abbreviate,
  initials,
  swapCase,
  shuffle,
  ensurePrefix,
  ensureSuffix,
  stripPrefix,
  stripSuffix,
  dedent,
  indent,
  wrap,
  toString,
  type StringInput
} from '../src'

expectType<boolean>(isBlank('  '))
expectType<boolean>(isBlank('hello'))
expectType<boolean>(isEmail('test@example.com'))
expectType<boolean>(isUrl('https://example.com'))
expectType<boolean>(isPhone('13812345678'))
expectType<boolean>(isUUID('550e8400-e29b-41d4-a716-446655440000'))
expectType<boolean>(isHex('1a2b3c'))
expectType<boolean>(isBase64('SGVsbG8='))
expectType<boolean>(isJson('{"key":"value"}'))
expectType<boolean>(isNumeric('123.45'))
expectType<boolean>(isAlpha('abc'))
expectType<boolean>(isAlphanumeric('abc123'))
expectType<boolean>(isLowercase('hello'))
expectType<boolean>(isUppercase('HELLO'))
expectType<boolean>(startsWith('hello', 'he'))
expectType<boolean>(endsWith('hello', 'lo'))
expectType<boolean>(includes('hello', 'ell'))
expectType<boolean>(contains('hello', 'ell'))
expectType<boolean>(equals('hello', 'hello'))
expectType<boolean>(equals('hello', 'HELLO', true))
expectType<string>(toCamelCase('hello-world'))
expectType<string>(toPascalCase('hello-world'))
expectType<string>(toKebabCase('helloWorld'))
expectType<string>(toSnakeCase('helloWorld'))
expectType<string>(toCapitalCase('hello-world'))
expectType<string>(toSentenceCase('hello world'))
expectType<string>(toLowerCase('HELLO'))
expectType<string>(toUpperCase('hello'))
expectType<string>(toTitleCase('hello world'))
expectType<string>(trim('  hello  '))
expectType<string>(trimStart('  hello'))
expectType<string>(trimEnd('hello  '))
expectType<string>(truncate('hello world', 5))
expectType<string>(pad('hello', 10))
expectType<string>(padStart('hello', 10))
expectType<string>(padEnd('hello', 10))
expectType<string>(repeat('hello', 3))
expectType<string>(replace('hello world', 'world', 'there'))
expectType<string>(replaceAll('hello world hello', 'hello', 'hi'))
expectType<string>(slice('hello', 1, 3))
expectType<string>(substring('hello', 1, 3))
expectType<string[]>(split('hello world', ' '))
expectType<string>(join(['hello', 'world'], ' '))
expectType<string>(reverse('hello'))
expectType<string>(capitalize('hello'))
expectType<string>(uncapitalize('Hello'))
expectType<number>(length('hello'))
expectType<number>(size('hello'))
expectType<string>(charAt('hello', 1))
expectType<number>(charCodeAt('hello', 1))
expectType<number>(indexOf('hello', 'e'))
expectType<number>(lastIndexOf('hello', 'l'))
expectType<number>(count('hello world', 'l'))
expectType<number>(countWords('hello world'))
expectType<number>(countChars('hello', 'l'))
expectType<string>(first('hello', 2))
expectType<string>(last('hello', 2))
expectType<string>(initial('hello', 2))
expectType<string>(rest('hello', 2))
expectType<string>(nth('hello', 1))
expectType<string>(insert('hello', 2, 'xx'))
expectType<string>(remove('hello world', 'world'))
expectType<string>(removeAll('hello hello', 'hello'))
expectType<string>(before('hello world', 'world'))
expectType<string>(after('hello world', 'hello '))
expectType<string>(between('hello [world]', '[', ']'))
expectType<string[]>(words('hello world'))
expectType<string[]>(chars('hello'))
expectType<string[]>(lines('hello\nworld'))
expectType<string>(template('Hello {{name}}', { name: 'World' }))
expectType<string>(interpolate('Hello ${name}', { name: 'World' }))
expectType<string>(format('Hello {0}', 'World'))
expectType<string>(slugify('Hello World!'))
expectType<string>(escape('<div>'))
expectType<string>(unescape('&lt;div&gt;'))
expectType<string>(escapeRegExp('hello.world'))
expectType<string>(stripTags('<div>hello</div>'))
expectType<string>(stripHtml('<div>hello</div>'))
expectType<string>(encodeBase64('hello'))
expectType<string>(decodeBase64('aGVsbG8='))
expectType<string>(encodeURI('hello world'))
expectType<string>(decodeURI('hello%20world'))
expectType<number>(hashCode('hello'))
expectType<string>(generateUUID())
expectType<string>(random(10))
expectType<string>(randomNumeric(10))
expectType<string>(randomAlpha(10))
expectType<string>(randomAlphaNumeric(10))
expectType<string>(randomHex(10))
expectType<string>(mask('1234567890', 4))
expectType<string>(maskEmail('test@example.com'))
expectType<string>(maskPhone('13812345678'))
expectType<string>(abbreviate('hello world', 5))
expectType<string>(initials('hello world'))
expectType<string>(swapCase('hello'))
expectType<string>(shuffle('hello'))
expectType<string>(ensurePrefix('hello', 'pre-'))
expectType<string>(ensureSuffix('hello', '-suffix'))
expectType<string>(stripPrefix('pre-hello', 'pre-'))
expectType<string>(stripSuffix('hello-suffix', '-suffix'))
expectType<string>(dedent('  hello\n  world'))
expectType<string>(indent('hello', '  ', 1))
expectType<string>(wrap('hello world', 10))
expectType<string>(toString('hello'))
expectType<string>(toString(123))
expectType<string>(toString(null))
expectType<string>(toString(undefined))
expectType<string>(toString(true))
