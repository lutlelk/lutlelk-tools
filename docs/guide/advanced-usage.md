# 高级用法

## 单文件按需导入

fe-utils 支持按函数路径导入，实现更细粒度的按需加载和 tree-shaking。

### 基本用法

```ts
// 直接导入单个函数
import chunk from '@fe-utils/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### 多个函数导入

```ts
import chunk from '@fe-utils/array/chunk'
import toCamelCase from '@fe-utils/string/toCamelCase'
import deepClone from '@fe-utils/object/deepClone'
import debounce from '@fe-utils/function/debounce'
import isPrime from '@fe-utils/number/isPrime'
```

### 优势

- **更小的打包体积**: 只打包使用的函数，不包含未使用的代码
- **更快的构建速度**: 减少需要处理的代码量
- **更好的 tree-shaking 效果**: 打包工具可以更精确地优化代码
- **更清晰的依赖**: 明确知道使用了哪些函数

### 对比

#### 常规导入

```ts
import { chunk, flatten, uniq } from '@fe-utils/array'

// 即使只使用 chunk，打包工具也可能包含整个包
const result = chunk([1, 2, 3, 4, 5], 2)
```

#### 单文件按需导入

```ts
import chunk from '@fe-utils/array/chunk'

// 只打包 chunk 函数，不包含其他函数
const result = chunk([1, 2, 3, 4, 5], 2)
```

### 所有可用的单文件导入

#### @fe-utils/array

```ts
import chunk from '@fe-utils/array/chunk'
import flatten from '@fe-utils/array/flatten'
import uniq from '@fe-utils/array/uniq'
import groupBy from '@fe-utils/array/groupBy'
import sortBy from '@fe-utils/array/sortBy'
import find from '@fe-utils/array/find'
import map from '@fe-utils/array/map'
import filter from '@fe-utils/array/filter'
import reduce from '@fe-utils/array/reduce'
```

#### @fe-utils/string

```ts
import toCamelCase from '@fe-utils/string/toCamelCase'
import toKebabCase from '@fe-utils/string/toKebabCase'
import toSnakeCase from '@fe-utils/string/toSnakeCase'
import slugify from '@fe-utils/string/slugify'
import capitalize from '@fe-utils/string/capitalize'
import truncate from '@fe-utils/string/truncate'
import isEmail from '@fe-utils/string/isEmail'
import isUrl from '@fe-utils/string/isUrl'
```

#### @fe-utils/object

```ts
import get from '@fe-utils/object/get'
import set from '@fe-utils/object/set'
import pick from '@fe-utils/object/pick'
import omit from '@fe-utils/object/omit'
import merge from '@fe-utils/object/merge'
import deepMerge from '@fe-utils/object/deepMerge'
import clone from '@fe-utils/object/clone'
import deepClone from '@fe-utils/object/deepClone'
```

#### @fe-utils/function

```ts
import debounce from '@fe-utils/function/debounce'
import throttle from '@fe-utils/function/throttle'
import memoize from '@fe-utils/function/memoize'
import once from '@fe-utils/function/once'
import curry from '@fe-utils/function/curry'
import partial from '@fe-utils/function/partial'
import compose from '@fe-utils/function/compose'
```

#### @fe-utils/number

```ts
import clamp from '@fe-utils/number/clamp'
import random from '@fe-utils/number/random'
import randomInt from '@fe-utils/number/randomInt'
import range from '@fe-utils/number/range'
import round from '@fe-utils/number/round'
import format from '@fe-utils/number/format'
import toCurrency from '@fe-utils/number/toCurrency'
import toBytes from '@fe-utils/number/toBytes'
```

## CDN 使用

fe-utils 提供 IIFE 格式的构建文件，支持通过 CDN 在浏览器中直接使用。

### 基本用法

```html
<!DOCTYPE html>
<html>
<head>
  <title>fe-utils CDN Example</title>
</head>
<body>
  <!-- 引入需要的包 -->
  <script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@fe-utils/string@latest/dist/string.iife.js"></script>

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
<script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js"></script>
```

#### unpkg

```html
<script src="https://unpkg.com/@fe-utils/array@latest/dist/array.iife.js"></script>
```

### 可用的 CDN 包

| 包名 | jsDelivr | unpkg | 全局变量名 |
|------|----------|-------|-----------|
| @fe-utils/array | [链接](https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js) | [链接](https://unpkg.com/@fe-utils/array@latest/dist/array.iife.js) | `window.feUtilsArray` |
| @fe-utils/string | [链接](https://cdn.jsdelivr.net/npm/@fe-utils/string@latest/dist/string.iife.js) | [链接](https://unpkg.com/@fe-utils/string@latest/dist/string.iife.js) | `window.feUtilsString` |
| @fe-utils/object | [链接](https://cdn.jsdelivr.net/npm/@fe-utils/object@latest/dist/object.iife.js) | [链接](https://unpkg.com/@fe-utils/object@latest/dist/object.iife.js) | `window.feUtilsObject` |
| @fe-utils/function | [链接](https://cdn.jsdelivr.net/npm/@fe-utils/function@latest/dist/function.iife.js) | [链接](https://unpkg.com/@fe-utils/function@latest/dist/function.iife.js) | `window.feUtilsFunction` |
| @fe-utils/number | [链接](https://cdn.jsdelivr.net/npm/@fe-utils/number@latest/dist/number.iife.js) | [链接](https://unpkg.com/@fe-utils/number@latest/dist/number.iife.js) | `window.feUtilsNumber` |
| @fe-utils/date | [链接](https://cdn.jsdelivr.net/npm/@fe-utils/date@latest/dist/date.iife.js) | [链接](https://unpkg.com/@fe-utils/date@latest/dist/date.iife.js) | `window.feUtilsDate` |
| @fe-utils/dom | [链接](https://cdn.jsdelivr.net/npm/@fe-utils/dom@latest/dist/dom.iife.js) | [链接](https://unpkg.com/@fe-utils/dom@latest/dist/dom.iife.js) | `window.feUtilsDom` |
| @fe-utils/async | [链接](https://cdn.jsdelivr.net/npm/@fe-utils/async@latest/dist/async.iife.js) | [链接](https://unpkg.com/@fe-utils/async@latest/dist/async.iife.js) | `window.feUtilsAsync` |
| @fe-utils/core | [链接](https://cdn.jsdelivr.net/npm/@fe-utils/core@latest/dist/core.iife.js) | [链接](https://unpkg.com/@fe-utils/core@latest/dist/core.iife.js) | `window.feUtilsCore` |

### 指定版本

```html
<!-- 使用特定版本 -->
<script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@1.0.0/dist/array.iife.js"></script>

<!-- 使用最新版本 -->
<script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js"></script>
```

### 完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>fe-utils CDN 示例</title>
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
  <h1>fe-utils CDN 使用示例</h1>

  <div class="demo">
    <h2>数组操作</h2>
    <script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js"></script>
    <script>
      const chunked = window.feUtilsArray.chunk([1, 2, 3, 4, 5], 2)
      document.write('<div class="result">chunk([1,2,3,4,5], 2): ' + JSON.stringify(chunked) + '</div>')
    </script>
  </div>

  <div class="demo">
    <h2>字符串处理</h2>
    <script src="https://cdn.jsdelivr.net/npm/@fe-utils/string@latest/dist/string.iife.js"></script>
    <script>
      const camelCase = window.feUtilsString.toCamelCase('hello-world')
      document.write('<div class="result">toCamelCase("hello-world"): ' + camelCase + '</div>')

      const slug = window.feUtilsString.slugify('Hello World!')
      document.write('<div class="result">slugify("Hello World!"): ' + slug + '</div>')
    </script>
  </div>

  <div class="demo">
    <h2>对象操作</h2>
    <script src="https://cdn.jsdelivr.net/npm/@fe-utils/object@latest/dist/object.iife.js"></script>
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
    <script src="https://cdn.jsdelivr.net/npm/@fe-utils/function@latest/dist/function.iife.js"></script>
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
    <script src="https://cdn.jsdelivr.net/npm/@fe-utils/number@latest/dist/number.iife.js"></script>
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
