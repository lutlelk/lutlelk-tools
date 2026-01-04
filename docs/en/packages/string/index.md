# @lutlelk-tools/string

Collection of string processing utility functions.

## Installation

```bash
pnpm add @lutlelk-tools/string
```

## Usage

```ts
import { toCamelCase, toKebabCase, slugify, capitalize, isEmail, isUrl } from '@lutlelk-tools/string'
```

## API

### Validation

#### isBlank

Checks if value is blank (null, undefined, or empty string).

```ts
isBlank(value: unknown): boolean
```

**Examples**

```ts
isBlank('') // true
isBlank('   ') // true
isBlank(null) // true
isBlank('hello') // false
```

#### isEmail

Checks if value is a valid email address.

```ts
isEmail(value: string): boolean
```

**Examples**

```ts
isEmail('test@example.com') // true
isEmail('invalid-email') // false
```

#### isUrl

Checks if value is a valid URL.

```ts
isUrl(value: string): boolean
```

**Examples**

```ts
isUrl('https://example.com') // true
isUrl('not-a-url') // false
```

#### isPhone

Checks if value is a valid phone number.

```ts
isPhone(value: string, pattern?: RegExp): boolean
```

**Examples**

```ts
isPhone('13800138000') // true
isPhone('12345') // false
```

#### isUUID

Checks if value is a valid UUID.

```ts
isUUID(value: string): boolean
```

**Examples**

```ts
isUUID('550e8400-e29b-41d4-a716-446655440000') // true
isUUID('not-a-uuid') // false
```

### Case Conversion

#### toCamelCase

Converts string to camelCase.

```ts
toCamelCase(value: string): string
```

**Examples**

```ts
toCamelCase('hello-world') // "helloWorld"
toCamelCase('hello_world') // "helloWorld"
toCamelCase('Hello World') // "helloWorld"
```

#### toPascalCase

Converts string to PascalCase.

```ts
toPascalCase(value: string): string
```

**Examples**

```ts
toPascalCase('hello-world') // "HelloWorld"
toPascalCase('hello_world') // "HelloWorld"
```

#### toKebabCase

Converts string to kebab-case.

```ts
toKebabCase(value: string): string
```

**Examples**

```ts
toKebabCase('helloWorld') // "hello-world"
toKebabCase('HelloWorld') // "hello-world"
```

#### toSnakeCase

Converts string to snake_case.

```ts
toSnakeCase(value: string): string
```

**Examples**

```ts
toSnakeCase('helloWorld') // "hello_world"
toSnakeCase('HelloWorld') // "hello_world"
```

#### capitalize

Capitalizes first character.

```ts
capitalize(value: string): string
```

**Examples**

```ts
capitalize('hello') // "Hello"
capitalize('hello world') // "Hello world"
```

#### truncate

Truncates string to specified length.

```ts
truncate(value: string, length: number, omission?: string): string
```

**Examples**

```ts
truncate('hello world', 5) // "he..."
truncate('hello world', 8, '...') // "hello..."
```

### Formatting

#### slugify

Converts string to URL-friendly slug.

```ts
slugify(value: string): string
```

**Examples**

```ts
slugify('Hello World!') // "hello-world"
slugify('This is a Test') // "this-is-a-test"
```

#### pad

Pads string on both sides.

```ts
pad(value: string, length: number, char?: string): string
```

**Examples**

```ts
pad('hello', 10) // "  hello   "
pad('hello', 10, '*') // "**hello***"
```

#### padStart

Pads string at the start.

```ts
padStart(value: string, length: number, char?: string): string
```

**Examples**

```ts
padStart('hello', 10) // "     hello"
padStart('hello', 10, '0') // "00000hello"
```

#### padEnd

Pads string at the end.

```ts
padEnd(value: string, length: number, char?: string): string
```

**Examples**

```ts
padEnd('hello', 10) // "hello     "
padEnd('hello', 10, '0') // "hello00000"
```

### Trimming

#### trim

Removes characters from both ends of string.

```ts
trim(value: string, chars?: string): string
```

**Examples**

```ts
trim('  hello  ') // "hello"
trim('---hello---', '-') // "hello"
```

#### trimStart

Removes characters from start of string.

```ts
trimStart(value: string, chars?: string): string
```

**Examples**

```ts
trimStart('  hello  ') // "hello  "
trimStart('---hello---', '-') // "hello---"
```

#### trimEnd

Removes characters from end of string.

```ts
trimEnd(value: string, chars?: string): string
```

**Examples**

```ts
trimEnd('  hello  ') // "  hello"
trimEnd('---hello---', '-') // "---hello"
```

### Manipulation

#### repeat

Repeats string count times.

```ts
repeat(value: string, count: number): string
```

**Examples**

```ts
repeat('hello', 3) // "hellohellohello"
repeat('ab', 2) // "abab"
```

#### replace

Replaces first occurrence of search string.

```ts
replace(value: string, search: string | RegExp, replacement: string): string
```

**Examples**

```ts
replace('hello world', 'world', 'there') // "hello there"
replace('hello world', /o/, 'a') // "hella world"
```

#### replaceAll

Replaces all occurrences of search string.

```ts
replaceAll(value: string, search: string | RegExp, replacement: string): string
```

**Examples**

```ts
replaceAll('hello world', 'l', 'x') // "hexxo worxd"
```

### Encoding

#### encodeBase64

Encodes string to Base64.

```ts
encodeBase64(value: string): string
```

**Examples**

```ts
encodeBase64('hello world') // "aGVsbG8gd29ybGQ="
```

#### decodeBase64

Decodes Base64 string.

```ts
decodeBase64(value: string): string
```

**Examples**

```ts
decodeBase64('aGVsbG8gd29ybGQ=') // "hello world"
```

### Generation

#### generateUUID

Generates a random UUID.

```ts
generateUUID(): string
```

**Examples**

```ts
generateUUID() // "550e8400-e29b-41d4-a716-446655440000"
```

#### random

Generates random alphanumeric string.

```ts
random(length?: number): string
```

**Examples**

```ts
random() // "aB3xY9zP2kL8mN4"
random(8) // "xY9zP2kL"
```

### Masking

#### mask

Masks string with visible characters at end.

```ts
mask(value: string, visibleChars?: number, maskChar?: string): string
```

**Examples**

```ts
mask('1234567890') // "******7890"
mask('1234567890', 4, '*') // "******7890"
```

#### maskEmail

Masks email address.

```ts
maskEmail(email: string, maskChar?: string): string
```

**Examples**

```ts
maskEmail('john@example.com') // "jo******@example.com"
```

#### maskPhone

Masks phone number.

```ts
maskPhone(phone: string, maskChar?: string): string
```

**Examples**

```ts
maskPhone('13800138000') // "138****8000"
```
