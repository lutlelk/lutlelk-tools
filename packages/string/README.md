# @fe-utils/string

A comprehensive string utility library for TypeScript/JavaScript with validation, transformation, formatting, encoding, and generation capabilities.

## Installation

```bash
npm install @fe-utils/string
# or
pnpm add @fe-utils/string
# or
yarn add @fe-utils/string
```

## Usage

### Import the entire package

```typescript
import { toCamelCase, slugify, isEmail, mask } from '@fe-utils/string'

toCamelCase('hello-world') // => "helloWorld"
slugify('Hello World!') // => "hello-world"
isEmail('test@example.com') // => true
```

### Import specific functions (tree-shaking supported)

```typescript
import { toKebabCase, capitalize, generateUUID } from '@fe-utils/string'

toKebabCase('helloWorld') // => "hello-world"
capitalize('hello') // => "Hello"
generateUUID() // => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
```

## API

### Validation

#### `isBlank(value: unknown): boolean`

Check if value is blank (null, undefined, or empty string).

```typescript
isBlank('') // => true
isBlank('   ') // => true
isBlank(null) // => true
isBlank('hello') // => false
```

#### `isEmail(value: string): boolean`

Check if value is a valid email address.

```typescript
isEmail('test@example.com') // => true
isEmail('invalid-email') // => false
```

#### `isUrl(value: string): boolean`

Check if value is a valid URL.

```typescript
isUrl('https://example.com') // => true
isUrl('not-a-url') // => false
```

#### `isPhone(value: string, pattern?: RegExp): boolean`

Check if value is a valid phone number.

```typescript
isPhone('13800138000') // => true
isPhone('12345') // => false
```

#### `isUUID(value: string): boolean`

Check if value is a valid UUID.

```typescript
isUUID('550e8400-e29b-41d4-a716-446655440000') // => true
isUUID('not-a-uuid') // => false
```

#### `isHex(value: string): boolean`

Check if value is a hexadecimal string.

```typescript
isHex('ff00ff') // => true
isHex('xyz') // => false
```

#### `isBase64(value: string): boolean`

Check if value is a valid Base64 string.

```typescript
isBase64('SGVsbG8gV29ybGQ=') // => true
isBase64('not-base64!') // => false
```

#### `isJson(value: string): boolean`

Check if value is valid JSON.

```typescript
isJson('{"name":"John"}') // => true
isJson('not-json') // => false
```

#### `isNumeric(value: string): boolean`

Check if value is numeric.

```typescript
isNumeric('123.45') // => true
isNumeric('abc') // => false
```

#### `isAlpha(value: string): boolean`

Check if value contains only letters.

```typescript
isAlpha('hello') // => true
isAlpha('hello123') // => false
```

#### `isAlphanumeric(value: string): boolean`

Check if value contains only letters and numbers.

```typescript
isAlphanumeric('hello123') // => true
isAlphanumeric('hello!') // => false
```

#### `isLowercase(value: string): boolean`

Check if value is all lowercase.

```typescript
isLowercase('hello') // => true
isLowercase('Hello') // => false
```

#### `isUppercase(value: string): boolean`

Check if value is all uppercase.

```typescript
isUppercase('HELLO') // => true
isUppercase('Hello') // => false
```

### Query

#### `startsWith(value: string, search: string, position?: number): boolean`

Check if string starts with search string.

```typescript
startsWith('hello world', 'hello') // => true
startsWith('hello world', 'world') // => false
```

#### `endsWith(value: string, search: string, length?: number): boolean`

Check if string ends with search string.

```typescript
endsWith('hello world', 'world') // => true
endsWith('hello world', 'hello') // => false
```

#### `includes(value: string, search: string, position?: number): boolean`

Check if string contains search string.

```typescript
includes('hello world', 'world') // => true
includes('hello world', 'test') // => false
```

#### `contains(value: string, search: string): boolean`

Check if string contains search string (alias for includes).

```typescript
contains('hello world', 'world') // => true
```

#### `equals(value: string, other: string, ignoreCase?: boolean): boolean`

Check if two strings are equal.

```typescript
equals('hello', 'hello') // => true
equals('hello', 'HELLO', true) // => true
equals('hello', 'HELLO') // => false
```

### Case Conversion

#### `toCamelCase(value: string): string`

Convert string to camelCase.

```typescript
toCamelCase('hello-world') // => "helloWorld"
toCamelCase('hello_world') // => "helloWorld"
toCamelCase('Hello World') // => "helloWorld"
```

#### `toPascalCase(value: string): string`

Convert string to PascalCase.

```typescript
toPascalCase('hello-world') // => "HelloWorld"
toPascalCase('hello_world') // => "HelloWorld"
```

#### `toKebabCase(value: string): string`

Convert string to kebab-case.

```typescript
toKebabCase('helloWorld') // => "hello-world"
toKebabCase('HelloWorld') // => "hello-world"
```

#### `toSnakeCase(value: string): string`

Convert string to snake_case.

```typescript
toSnakeCase('helloWorld') // => "hello_world"
toSnakeCase('HelloWorld') // => "hello_world"
```

#### `toCapitalCase(value: string): string`

Convert string to Capital Case.

```typescript
toCapitalCase('hello-world') // => "Hello World"
toCapitalCase('hello_world') // => "Hello World"
```

#### `toSentenceCase(value: string): string`

Convert string to sentence case.

```typescript
toSentenceCase('HELLO WORLD') // => "Hello world"
toSentenceCase('hello world') // => "Hello world"
```

#### `toLowerCase(value: string): string`

Convert string to lowercase.

```typescript
toLowerCase('HELLO WORLD') // => "hello world"
```

#### `toUpperCase(value: string): string`

Convert string to uppercase.

```typescript
toUpperCase('hello world') // => "HELLO WORLD"
```

#### `toTitleCase(value: string): string`

Convert string to title case.

```typescript
toTitleCase('hello world') // => "Hello World"
toTitleCase('HELLO WORLD') // => "Hello World"
```

### Trimming

#### `trim(value: string, chars?: string): string`

Remove characters from both ends of string.

```typescript
trim('  hello  ') // => "hello"
trim('---hello---', '-') // => "hello"
trim('***hello***', '*') // => "hello"
```

#### `trimStart(value: string, chars?: string): string`

Remove characters from start of string.

```typescript
trimStart('  hello  ') // => "hello  "
trimStart('---hello---', '-') // => "hello---"
```

#### `trimEnd(value: string, chars?: string): string`

Remove characters from end of string.

```typescript
trimEnd('  hello  ') // => "  hello"
trimEnd('---hello---', '-') // => "---hello"
```

### Padding

#### `pad(value: string, length: number, char?: string): string`

Pad string on both sides.

```typescript
pad('hello', 10) // => "  hello   "
pad('hello', 10, '*') // => "**hello***"
```

#### `padStart(value: string, length: number, char?: string): string`

Pad string at the start.

```typescript
padStart('hello', 10) // => "     hello"
padStart('hello', 10, '0') // => "00000hello"
```

#### `padEnd(value: string, length: number, char?: string): string`

Pad string at the end.

```typescript
padEnd('hello', 10) // => "hello     "
padEnd('hello', 10, '0') // => "hello00000"
```

### Manipulation

#### `truncate(value: string, length: number, omission?: string): string`

Truncate string to specified length.

```typescript
truncate('hello world', 5) // => "he..."
truncate('hello world', 8, '...') // => "hello..."
truncate('hello', 10) // => "hello"
```

#### `repeat(value: string, count: number): string`

Repeat string count times.

```typescript
repeat('hello', 3) // => "hellohellohello"
repeat('ab', 2) // => "abab"
```

#### `replace(value: string, search: string | RegExp, replacement: string): string`

Replace first occurrence of search string.

```typescript
replace('hello world', 'world', 'there') // => "hello there"
replace('hello world', /o/, 'a') // => "hella world"
```

#### `replaceAll(value: string, search: string | RegExp, replacement: string): string`

Replace all occurrences of search string.

```typescript
replaceAll('hello world', 'l', 'x') // => "hexxo worxd"
replaceAll('hello world', /o/g, 'a') // => "hella warld"
```

#### `slice(value: string, start?: number, end?: number): string`

Extract section of string.

```typescript
slice('hello world', 0, 5) // => "hello"
slice('hello world', 6) // => "world"
slice('hello world', -5) // => "world"
```

#### `substring(value: string, start: number, end?: number): string`

Extract characters from string between indices.

```typescript
substring('hello world', 0, 5) // => "hello"
substring('hello world', 6) // => "world"
```

#### `split(value: string, separator: string | RegExp, limit?: number): string[]`

Split string into array.

```typescript
split('hello world', ' ') // => ["hello", "world"]
split('a,b,c', ',') // => ["a", "b", "c"]
```

#### `join(values: string[], separator?: string): string`

Join array of strings.

```typescript
join(['hello', 'world'], ' ') // => "hello world"
join(['a', 'b', 'c'], ',') // => "a,b,c"
```

#### `reverse(value: string): string`

Reverse string.

```typescript
reverse('hello') // => "olleh"
reverse('world') // => "dlrow"
```

### Character Operations

#### `capitalize(value: string): string`

Capitalize first character.

```typescript
capitalize('hello') // => "Hello"
capitalize('hello world') // => "Hello world"
```

#### `uncapitalize(value: string): string`

Uncapitalize first character.

```typescript
uncapitalize('Hello') // => "hello"
uncapitalize('Hello World') // => "hello World"
```

#### `length(value: string): number`

Get string length.

```typescript
length('hello') // => 5
length('hello world') // => 11
```

#### `size(value: string): number`

Get string size (alias for length).

```typescript
size('hello') // => 5
```

#### `charAt(value: string, index: number): string`

Get character at index.

```typescript
charAt('hello', 0) // => "h"
charAt('hello', 4) // => "o"
```

#### `charCodeAt(value: string, index: number): number`

Get character code at index.

```typescript
charCodeAt('hello', 0) // => 104
charCodeAt('hello', 4) // => 111
```

### Position

#### `indexOf(value: string, search: string, fromIndex?: number): number`

Get index of first occurrence.

```typescript
indexOf('hello world', 'world') // => 6
indexOf('hello world', 'test') // => -1
```

#### `lastIndexOf(value: string, search: string, fromIndex?: number): number`

Get index of last occurrence.

```typescript
lastIndexOf('hello world hello', 'hello') // => 12
lastIndexOf('hello world', 'test') // => -1
```

### Counting

#### `count(value: string, search: string): number`

Count occurrences of substring.

```typescript
count('hello world hello', 'hello') // => 2
count('hello world', 'l') // => 3
```

#### `countWords(value: string): number`

Count words in string.

```typescript
countWords('hello world') // => 2
countWords('  hello   world  ') // => 2
```

#### `countChars(value: string, char: string): number`

Count occurrences of character.

```typescript
countChars('hello', 'l') // => 2
countChars('hello world', 'o') // => 2
```

### Slicing

#### `first(value: string, n?: number): string`

Get first n characters.

```typescript
first('hello world') // => "h"
first('hello world', 5) // => "hello"
```

#### `last(value: string, n?: number): string`

Get last n characters.

```typescript
last('hello world') // => "d"
last('hello world', 5) // => "world"
```

#### `initial(value: string, n?: number): string`

Get all but last n characters.

```typescript
initial('hello world') // => "hello worl"
initial('hello world', 6) // => "hello"
```

#### `rest(value: string, n?: number): string`

Get all but first n characters.

```typescript
rest('hello world') // => "ello world"
rest('hello world', 6) // => "world"
```

#### `nth(value: string, index: number): string`

Get character at index.

```typescript
nth('hello', 0) // => "h"
nth('hello', 4) // => "o"
```

### Insert/Remove

#### `insert(value: string, index: number, substring: string): string`

Insert substring at index.

```typescript
insert('hello world', 5, ' beautiful') // => "hello beautiful world"
insert('hello', 0, 'say ') // => "say hello"
```

#### `remove(value: string, search: string | RegExp): string`

Remove first occurrence.

```typescript
remove('hello world', 'world') // => "hello "
remove('hello world', /o/) // => "hella world"
```

#### `removeAll(value: string, search: string | RegExp): string`

Remove all occurrences.

```typescript
removeAll('hello world hello', 'hello') // => " world "
removeAll('hello world', /l/g) // => "heo word"
```

### Extraction

#### `before(value: string, search: string): string`

Get substring before search string.

```typescript
before('hello world', 'world') // => "hello "
before('hello world', 'test') // => "hello world"
```

#### `after(value: string, search: string): string`

Get substring after search string.

```typescript
after('hello world', 'hello') // => " world"
after('hello world', 'test') // => ""
```

#### `between(value: string, start: string, end: string): string`

Get substring between start and end.

```typescript
between('hello [world] test', '[', ']') // => "world"
between('hello (world) test', '(', ')') // => "world"
```

### Splitting

#### `words(value: string, pattern?: RegExp): string[]`

Split string into words.

```typescript
words('hello world') // => ["hello", "world"]
words('hello-world', /[-\s]+/) // => ["hello", "world"]
```

#### `chars(value: string): string[]`

Split string into characters.

```typescript
chars('hello') // => ["h", "e", "l", "l", "o"]
```

#### `lines(value: string): string[]`

Split string into lines.

```typescript
lines('hello\nworld') // => ["hello", "world"]
lines('hello\r\nworld') // => ["hello", "world"]
```

### Template

#### `template(value: string, data: Record<string, unknown>): string`

Replace {{key}} placeholders.

```typescript
template('Hello {{name}}!', { name: 'John' }) // => "Hello John!"
template('Age: {{age}}', { age: 30 }) // => "Age: 30"
```

#### `interpolate(value: string, data: Record<string, unknown>): string`

Replace ${key} placeholders.

```typescript
interpolate('Hello ${name}!', { name: 'John' }) // => "Hello John!"
interpolate('Age: ${age}', { age: 30 }) // => "Age: 30"
```

#### `format(value: string, ...args: unknown[]): string`

Format string with positional arguments.

```typescript
format('Hello {0}!', 'John') // => "Hello John!"
format('{0} + {1} = {2}', 1, 2, 3) // => "1 + 2 = 3"
```

### Formatting

#### `slugify(value: string): string`

Convert string to URL-friendly slug.

```typescript
slugify('Hello World!') // => "hello-world"
slugify('This is a Test') // => "this-is-a-test"
```

### Escaping

#### `escape(value: string): string`

Escape HTML special characters.

```typescript
escape('<div>hello</div>') // => "&lt;div&gt;hello&lt;/div&gt;"
escape('"hello"') // => "&quot;hello&quot;"
```

#### `unescape(value: string): string`

Unescape HTML special characters.

```typescript
unescape('&lt;div&gt;hello&lt;/div&gt;') // => "<div>hello</div>"
unescape('&quot;hello&quot;') // => "\"hello\""
```

#### `escapeRegExp(value: string): string`

Escape special regex characters.

```typescript
escapeRegExp('hello.world') // => "hello\\.world"
escapeRegExp('[test]') // => "\\[test\\]"
```

#### `stripTags(value: string): string`

Remove HTML tags.

```typescript
stripTags('<div>hello</div>') // => "hello"
stripTags('<p>test</p>') // => "test"
```

#### `stripHtml(value: string): string`

Remove HTML and decode entities.

```typescript
stripHtml('<div>hello</div>') // => "hello"
stripHtml('&amp;') // => "&"
```

### Encoding

#### `encodeBase64(value: string): string`

Encode string to Base64.

```typescript
encodeBase64('hello world') // => "aGVsbG8gd29ybGQ="
encodeBase64('你好') // => "5L2g5aW9"
```

#### `decodeBase64(value: string): string`

Decode Base64 string.

```typescript
decodeBase64('aGVsbG8gd29ybGQ=') // => "hello world"
decodeBase64('5L2g5aW9') // => "你好"
```

#### `encodeURI(value: string): string`

Encode URI component.

```typescript
encodeURI('hello world') // => "hello%20world"
encodeURI('你好') // => "%E4%BD%A0%E5%A5%BD"
```

#### `decodeURI(value: string): string`

Decode URI component.

```typescript
decodeURI('hello%20world') // => "hello world"
decodeURI('%E4%BD%A0%E5%A5%BD') // => "你好"
```

### Hash

#### `hashCode(value: string): number`

Get hash code of string.

```typescript
hashCode('hello') // => 99162322
hashCode('world') // => 113318802
```

### Generation

#### `generateUUID(): string`

Generate a random UUID.

```typescript
generateUUID() // => "550e8400-e29b-41d4-a716-446655440000"
```

#### `random(length?: number): string`

Generate random alphanumeric string.

```typescript
random() // => "aB3xY9zP2kL8mN4"
random(8) // => "xY9zP2kL"
```

#### `randomNumeric(length?: number): string`

Generate random numeric string.

```typescript
randomNumeric() // => "1234567890123456"
randomNumeric(8) // => "12345678"
```

#### `randomAlpha(length?: number): string`

Generate random alphabetic string.

```typescript
randomAlpha() // => "aBxYzPkLmN"
randomAlpha(8) // => "xYzPkLmN"
```

#### `randomAlphaNumeric(length?: number): string`

Generate random alphanumeric string (alias for random).

```typescript
randomAlphaNumeric() // => "aB3xY9zP2kL8mN4"
```

#### `randomHex(length?: number): string`

Generate random hexadecimal string.

```typescript
randomHex() // => "a3f2b9c4d8e1f6a7"
randomHex(8) // => "a3f2b9c4"
```

### Masking

#### `mask(value: string, visibleChars?: number, maskChar?: string): string`

Mask string with visible characters at end.

```typescript
mask('1234567890') // => "******7890"
mask('1234567890', 4, '*') // => "******7890"
mask('hello world', 2, '#') // => "#########ld"
```

#### `maskEmail(email: string, maskChar?: string): string`

Mask email address.

```typescript
maskEmail('john@example.com') // => "jo******@example.com"
maskEmail('test@example.com', '#') // => "te**@example.com"
```

#### `maskPhone(phone: string, maskChar?: string): string`

Mask phone number.

```typescript
maskPhone('13800138000') // => "138****8000"
maskPhone('1234567890', '#') // => "123####890"
```

### Abbreviation

#### `abbreviate(value: string, length?: number): string`

Abbreviate string.

```typescript
abbreviate('hello world') // => "hello worl."
abbreviate('hello', 10) // => "hello"
```

#### `initials(value: string): string`

Get initials from string.

```typescript
initials('John Doe') // => "JD"
initials('hello world test') // => "hwt"
```

### Case Swapping

#### `swapCase(value: string): string`

Swap case of all characters.

```typescript
swapCase('Hello World') // => "hELLO wORLD"
swapCase('ABC') // => "abc"
```

### Shuffling

#### `shuffle(value: string): string`

Shuffle characters in string.

```typescript
shuffle('hello') // => "loleh" (random order)
```

### Prefix/Suffix

#### `ensurePrefix(value: string, prefix: string): string`

Ensure string starts with prefix.

```typescript
ensurePrefix('world', 'hello ') // => "hello world"
ensurePrefix('hello world', 'hello ') // => "hello world"
```

#### `ensureSuffix(value: string, suffix: string): string`

Ensure string ends with suffix.

```typescript
ensureSuffix('hello', ' world') // => "hello world"
ensureSuffix('hello world', ' world') // => "hello world"
```

#### `stripPrefix(value: string, prefix: string): string`

Remove prefix if present.

```typescript
stripPrefix('hello world', 'hello ') // => "world"
stripPrefix('world', 'hello ') // => "world"
```

#### `stripSuffix(value: string, suffix: string): string`

Remove suffix if present.

```typescript
stripSuffix('hello world', ' world') // => "hello"
stripSuffix('hello', ' world') // => "hello"
```

### Indentation

#### `dedent(value: string): string`

Remove common indentation.

```typescript
dedent('  hello\n  world') // => "hello\nworld"
```

#### `indent(value: string, indent?: string, count?: number): string`

Add indentation to each line.

```typescript
indent('hello\nworld', '  ') // => "  hello\n  world"
indent('hello\nworld', '  ', 2) // => "    hello\n    world"
```

#### `wrap(value: string, width?: number, separator?: string): string`

Wrap text to specified width.

```typescript
wrap('hello world this is a test', 10)
// => "hello\nworld\nthis is a\ntest"
```

### Utility

#### `toString(value: StringInput): string`

Convert value to string.

```typescript
toString(123) // => "123"
toString(null) // => ""
toString(undefined) // => ""
toString(true) // => "true"
```

## License

MIT
