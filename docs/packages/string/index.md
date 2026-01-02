# @fe-utils/string

字符串处理工具函数集合。

## 安装

```bash
pnpm add @fe-utils/string
```

## 使用

```ts
import {
  isBlank,
  isEmail,
  isUrl,
  toCamelCase,
  toPascalCase,
  toKebabCase,
  toSnakeCase,
  trim,
  truncate,
  slugify,
  escape,
  generateUUID,
  random
} from '@fe-utils/string'
```

## API

### 验证函数

#### isBlank

检查字符串是否为空白。

```ts
isBlank(value: unknown): boolean
```

**示例**

```ts
isBlank('') // true
isBlank('   ') // true
isBlank('hello') // false
```

#### isEmail

检查是否为有效的邮箱地址。

```ts
isEmail(value: string): boolean
```

**示例**

```ts
isEmail('test@example.com') // true
isEmail('invalid') // false
```

#### isUrl

检查是否为有效的 URL。

```ts
isUrl(value: string): boolean
```

**示例**

```ts
isUrl('https://example.com') // true
isUrl('not a url') // false
```

### 转换函数

#### toCamelCase

转换为驼峰命名。

```ts
toCamelCase(value: string): string
```

**示例**

```ts
toCamelCase('hello-world') // 'helloWorld'
toCamelCase('hello_world') // 'helloWorld'
```

#### toPascalCase

转换为帕斯卡命名。

```ts
toPascalCase(value: string): string
```

**示例**

```ts
toPascalCase('hello-world') // 'HelloWorld'
toPascalCase('hello_world') // 'HelloWorld'
```

#### toKebabCase

转换为短横线命名。

```ts
toKebabCase(value: string): string
```

**示例**

```ts
toKebabCase('helloWorld') // 'hello-world'
toKebabCase('hello_world') // 'hello-world'
```

#### toSnakeCase

转换为下划线命名。

```ts
toSnakeCase(value: string): string
```

**示例**

```ts
toSnakeCase('helloWorld') // 'hello_world'
toSnakeCase('hello-world') // 'hello_world'
```

### 格式化函数

#### trim

去除字符串两端的字符。

```ts
trim(value: string, chars?: string): string
trimStart(value: string, chars?: string): string
trimEnd(value: string, chars?: string): string
```

**示例**

```ts
trim('  hello  ') // 'hello'
trim('***hello***', '*') // 'hello'
```

#### truncate

截断字符串。

```ts
truncate(value: string, length: number, omission?: string): string
```

**示例**

```ts
truncate('hello world', 5) // 'hello...'
truncate('hello world', 5, '...') // 'hello...'
```

#### slugify

转换为 URL 友好的字符串。

```ts
slugify(value: string): string
```

**示例**

```ts
slugify('Hello World!') // 'hello-world'
slugify('This is a test') // 'this-is-a-test'
```

### 转义函数

#### escape

转义 HTML 特殊字符。

```ts
escape(value: string): string
```

**示例**

```ts
escape('<div>hello</div>') // '&lt;div&gt;hello&lt;/div&gt;'
```

#### unescape

反转义 HTML 特殊字符。

```ts
unescape(value: string): string
```

**示例**

```ts
unescape('&lt;div&gt;hello&lt;/div&gt;') // '<div>hello</div>'
```

### 生成函数

#### generateUUID

生成 UUID。

```ts
generateUUID(): string
```

**示例**

```ts
generateUUID() // '550e8400-e29b-41d4-a716-446655440000'
```

#### random

生成随机字符串。

```ts
random(length?: number): string
randomNumeric(length?: number): string
randomAlpha(length?: number): string
randomAlphaNumeric(length?: number): string
randomHex(length?: number): string
```

**示例**

```ts
random(10) // 'aB3dE5fG7h'
randomNumeric(6) // '123456'
randomAlpha(8) // 'aBcDeFgH'
```

### 其他函数

#### words

提取单词。

```ts
words(value: string, pattern?: RegExp): string[]
```

**示例**

```ts
words('hello world') // ['hello', 'world']
```

#### chars

提取字符。

```ts
chars(value: string): string[]
```

**示例**

```ts
chars('hello') // ['h', 'e', 'l', 'l', 'o']
```

#### length

获取字符串长度。

```ts
length(value: string): number
```

**示例**

```ts
length('hello') // 5
```

#### count

统计子串出现次数。

```ts
count(value: string, search: string): number
```

**示例**

```ts
count('hello world hello', 'hello') // 2
```
