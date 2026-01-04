# 高级用法

## 单文件按需导入

lutlelk 支持按函数路径导入，实现更细粒度的按需加载和 tree-shaking。

### 基本用法

```ts
// 直接导入单个函数
import chunk from '@lutlelk/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### 多个函数导入

```ts
import chunk from '@lutlelk/array/chunk'
import toCamelCase from '@lutlelk/string/toCamelCase'
import deepClone from '@lutlelk/object/deepClone'
import debounce from '@lutlelk/function/debounce'
import isPrime from '@lutlelk/number/isPrime'
```

### 优势

- **更小的打包体积**: 只打包使用的函数，不包含未使用的代码
- **更快的构建速度**: 减少需要处理的代码量
- **更好的 tree-shaking 效果**: 打包工具可以更精确地优化代码
- **更清晰的依赖**: 明确知道使用了哪些函数

### 对比

#### 常规导入

```ts
import { chunk, flatten, uniq } from '@lutlelk/array'

// 即使只使用 chunk，打包工具也可能包含整个包
const result = chunk([1, 2, 3, 4, 5], 2)
```

#### 单文件按需导入

```ts
import chunk from '@lutlelk/array/chunk'

// 只打包 chunk 函数，不包含其他函数
const result = chunk([1, 2, 3, 4, 5], 2)
```

### 所有可用的单文件导入

#### @lutlelk/array

```ts
import chunk from '@lutlelk/array/chunk'
import flatten from '@lutlelk/array/flatten'
import uniq from '@lutlelk/array/uniq'
import groupBy from '@lutlelk/array/groupBy'
import sortBy from '@lutlelk/array/sortBy'
import find from '@lutlelk/array/find'
import map from '@lutlelk/array/map'
import filter from '@lutlelk/array/filter'
import reduce from '@lutlelk/array/reduce'
```

#### @lutlelk/string

```ts
import toCamelCase from '@lutlelk/string/toCamelCase'
import toKebabCase from '@lutlelk/string/toKebabCase'
import toSnakeCase from '@lutlelk/string/toSnakeCase'
import slugify from '@lutlelk/string/slugify'
import capitalize from '@lutlelk/string/capitalize'
import truncate from '@lutlelk/string/truncate'
import isEmail from '@lutlelk/string/isEmail'
import isUrl from '@lutlelk/string/isUrl'
```

#### @lutlelk/object

```ts
import get from '@lutlelk/object/get'
import set from '@lutlelk/object/set'
import pick from '@lutlelk/object/pick'
import omit from '@lutlelk/object/omit'
import merge from '@lutlelk/object/merge'
import deepMerge from '@lutlelk/object/deepMerge'
import clone from '@lutlelk/object/clone'
import deepClone from '@lutlelk/object/deepClone'
```

#### @lutlelk/function

```ts
import debounce from '@lutlelk/function/debounce'
import throttle from '@lutlelk/function/throttle'
import memoize from '@lutlelk/function/memoize'
import once from '@lutlelk/function/once'
import curry from '@lutlelk/function/curry'
import partial from '@lutlelk/function/partial'
import compose from '@lutlelk/function/compose'
```

#### @lutlelk/number

```ts
import clamp from '@lutlelk/number/clamp'
import random from '@lutlelk/number/random'
import randomInt from '@lutlelk/number/randomInt'
import range from '@lutlelk/number/range'
import round from '@lutlelk/number/round'
import format from '@lutlelk/number/format'
import toCurrency from '@lutlelk/number/toCurrency'
import toBytes from '@lutlelk/number/toBytes'
```

## CDN 使用

lutlelk 提供 IIFE 格式的构建文件，支持通过 CDN 在浏览器中直接使用。

### 基本用法

```html
<!DOCTYPE html>
<html>
<head>
  <title>lutlelk CDN Example</title>
</head>
<body>
  <!-- 引入需要的包 -->
  <script src="https://cdn.jsdelivr.net/npm/@lutlelk/array@latest/dist/array.iife.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@lutlelk/string@latest/dist/string.iife.js"></script>

  <script>
    // 使用全局变量
    const result = window.feUtilsArray.chunk([1, 2, 3, 4, 5], 2)
    console.log(result) // [[1, 2], [3, 4], [5]]

    const camelCase = window.feUtilsString.toCamelCase('hello-world')
    console.log(camelCase) // "helloWorld"
  </script>
</body>
</html>
```

### CDN 源

#### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/@lutlelk/array@latest/dist/array.iife.js"></script>
```

#### unpkg

```html
<script src="https://unpkg.com/@lutlelk/array@latest/dist/array.iife.js"></script>
```

### 可用的 CDN 包

| 包名 | jsDelivr | unpkg | 全局变量名 |
|------|----------|-------|-----------|
| @lutlelk/array | [链接](https://cdn.jsdelivr.net/npm/@lutlelk/array@latest/dist/array.iife.js) | [链接](https://unpkg.com/@lutlelk/array@latest/dist/array.iife.js) | `window.feUtilsArray` |
| @lutlelk/string | [链接](https://cdn.jsdelivr.net/npm/@lutlelk/string@latest/dist/string.iife.js) | [链接](https://unpkg.com/@lutlelk/string@latest/dist/string.iife.js) | `window.feUtilsString` |
| @lutlelk/object | [链接](https://cdn.jsdelivr.net/npm/@lutlelk/object@latest/dist/object.iife.js) | [链接](https://unpkg.com/@lutlelk/object@latest/dist/object.iife.js) | `window.feUtilsObject` |
| @lutlelk/function | [链接](https://cdn.jsdelivr.net/npm/@lutlelk/function@latest/dist/function.iife.js) | [链接](https://unpkg.com/@lutlelk/function@latest/dist/function.iife.js) | `window.feUtilsFunction` |
| @lutlelk/number | [链接](https://cdn.jsdelivr.net/npm/@lutlelk/number@latest/dist/number.iife.js) | [链接](https://unpkg.com/@lutlelk/number@latest/dist/number.iife.js) | `window.feUtilsNumber` |
| @lutlelk/date | [链接](https://cdn.jsdelivr.net/npm/@lutlelk/date@latest/dist/date.iife.js) | [链接](https://unpkg.com/@lutlelk/date@latest/dist/date.iife.js) | `window.feUtilsDate` |
| @lutlelk/dom | [链接](https://cdn.jsdelivr.net/npm/@lutlelk/dom@latest/dist/dom.iife.js) | [链接](https://unpkg.com/@lutlelk/dom@latest/dist/dom.iife.js) | `window.feUtilsDom` |
| @lutlelk/async | [链接](https://cdn.jsdelivr.net/npm/@lutlelk/async@latest/dist/async.iife.js) | [链接](https://unpkg.com/@lutlelk/async@latest/dist/async.iife.js) | `window.feUtilsAsync` |
| @lutlelk/core | [链接](https://cdn.jsdelivr.net/npm/@lutlelk/core@latest/dist/core.iife.js) | [链接](https://unpkg.com/@lutlelk/core@latest/dist/core.iife.js) | `window.feUtilsCore` |

### 指定版本

```html
<!-- 使用特定版本 -->
<script src="https://cdn.jsdelivr.net/npm/@lutlelk/array@1.0.0/dist/array.iife.js"></script>

<!-- 使用最新版本 -->
<script src="https://cdn.jsdelivr.net/npm/@lutlelk/array@latest/dist/array.iife.js"></script>
```

### 完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>lutlelk CDN 示例</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
    }
    .demo {
      background: #f5f5f5;
      padding: 20px;
      margin: 20px 0;
      border-radius: 8px;
    }
    .result {
      background: #e8f5e9;
      padding: 10px;
      margin: 10px 0;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <h1>lutlelk CDN 使用示例</h1>

  <div class="demo">
    <h2>数组操作</h2>
    <script src="https://cdn.jsdelivr.net/npm/@lutlelk/array@latest/dist/array.iife.js"></script>
    <script>
      const chunked = window.feUtilsArray.chunk([1, 2, 3, 4, 5], 2)
      document.write('<div class="result">chunk([1,2,3,4,5], 2): ' + JSON.stringify(chunked) + '</div>')
    </script>
  </div>

  <div class="demo">
    <h2>字符串处理</h2>
    <script src="https://cdn.jsdelivr.net/npm/@lutlelk/string@latest/dist/string.iife.js"></script>
    <script>
      const camelCase = window.feUtilsString.toCamelCase('hello-world')
      document.write('<div class="result">toCamelCase("hello-world"): ' + camelCase + '</div>')

      const slug = window.feUtilsString.slugify('Hello World!')
      document.write('<div class="result">slugify("Hello World!"): ' + slug + '</div>')
    </script>
  </div>

  <div class="demo">
    <h2>对象操作</h2>
    <script src="https://cdn.jsdelivr.net/npm/@lutlelk/object@latest/dist/object.iife.js"></script>
    <script>
      const obj = { name: 'John', age: 30, email: 'john@example.com' }
      const picked = window.feUtilsObject.pick(obj, ['name', 'age'])
      document.write('<div class="result">pick(obj, ["name", "age"]): ' + JSON.stringify(picked) + '</div>')

      const cloned = window.feUtilsObject.deepClone(obj)
      document.write('<div class="result">deepClone(obj): ' + JSON.stringify(cloned) + '</div>')
    </script>
  </div>

  <div class="demo">
    <h2>函数工具</h2>
    <script src="https://cdn.jsdelivr.net/npm/@lutlelk/function@latest/dist/function.iife.js"></script>
    <script>
      let count = 0
      const debouncedFn = window.feUtilsFunction.debounce(() => {
        count++
        document.write('<div class="result">Debounced function called ' + count + ' times</div>')
      }, 300)

      // 模拟多次调用
      debouncedFn()
      debouncedFn()
      debouncedFn()
    </script>
  </div>

  <div class="demo">
    <h2>数字处理</h2>
    <script src="https://cdn.jsdelivr.net/npm/@lutlelk/number@latest/dist/number.iife.js"></script>
    <script>
      const randomNum = window.feUtilsNumber.randomInt(1, 100)
      document.write('<div class="result">randomInt(1, 100): ' + randomNum + '</div>')

      const currency = window.feUtilsNumber.toCurrency(1234.56)
      document.write('<div class="result">toCurrency(1234.56): ' + currency + '</div>')
    </script>
  </div>
</body>
</html>
```

### 使用 CDN 的优势

- **无需构建工具**: 直接在浏览器中使用，无需 Webpack、Vite 等构建工具
- **快速原型开发**: 适合快速原型开发和演示
- **简单易用**: 只需引入 script 标签即可使用
- **版本控制**: 可以指定特定版本，确保稳定性
- **全球分发**: CDN 提供全球加速，提高加载速度

### 注意事项

1. **全局变量**: CDN 版本会将函数挂载到 `window.feUtils*` 全局变量上
2. **版本兼容**: 使用特定版本时，确保所有包使用相同的版本号
3. **TypeScript 支持**: CDN 版本不包含类型定义，如需类型支持请使用 npm 安装方式
4. **生产环境**: 建议在生产环境使用 npm 安装方式，以获得更好的性能和 tree-shaking 效果

## 最佳实践

### 何时使用单文件按需导入

- 项目中只使用少量函数
- 对打包体积有严格要求
- 需要最大化 tree-shaking 效果

### 何时使用 CDN

- 快速原型开发
- 演示和教学
- 不使用构建工具的项目
- 需要快速集成到现有项目

### 何时使用常规导入

- 项目中使用多个函数
- 需要完整的类型支持
- 使用 TypeScript 开发
- 需要更好的开发体验
