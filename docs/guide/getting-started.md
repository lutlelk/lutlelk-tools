# 快速开始

## 安装

使用 pnpm 安装单个包：

```bash
pnpm add @lutlelk/array
```

安装多个包：

```bash
pnpm add @lutlelk/array @lutlelk/string @lutlelk/object
```

## 使用

### ESM 方式

```ts
import { chunk } from '@lutlelk/array'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### CommonJS 方式

```js
const { chunk } = require('@lutlelk/array')

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### 单文件按需导入

lutlelk 支持按函数路径导入，实现更细粒度的按需加载和 tree-shaking：

```ts
// 直接导入单个函数
import chunk from '@lutlelk/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

这种方式的优势：
- 更小的打包体积（只打包使用的函数）
- 更快的构建速度
- 更好的 tree-shaking 效果

所有包都支持单文件按需导入，例如：

```ts
import toCamelCase from '@lutlelk/string/toCamelCase'
import deepClone from '@lutlelk/object/deepClone'
import debounce from '@lutlelk/function/debounce'
import isPrime from '@lutlelk/number/isPrime'
```

### CDN 使用

lutlelk 支持 CDN 方式引入，适合在浏览器中直接使用：

```html
<!DOCTYPE html>
<html>
<head>
  <title>lutlelk CDN Example</title>
</head>
<body>
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

可用的 CDN 包：

| 包名 | CDN 链接 | 全局变量名 |
|------|----------|-----------|
| @lutlelk/array | `@lutlelk/array/dist/array.iife.js` | `window.feUtilsArray` |
| @lutlelk/string | `@lutlelk/string/dist/string.iife.js` | `window.feUtilsString` |
| @lutlelk/object | `@lutlelk/object/dist/object.iife.js` | `window.feUtilsObject` |
| @lutlelk/function | `@lutlelk/function/dist/function.iife.js` | `window.feUtilsFunction` |
| @lutlelk/number | `@lutlelk/number/dist/number.iife.js` | `window.feUtilsNumber` |
| @lutlelk/date | `@lutlelk/date/dist/date.iife.js` | `window.feUtilsDate` |
| @lutlelk/dom | `@lutlelk/dom/dist/dom.iife.js` | `window.feUtilsDom` |
| @lutlelk/async | `@lutlelk/async/dist/async.iife.js` | `window.feUtilsAsync` |
| @lutlelk/core | `@lutlelk/core/dist/core.iife.js` | `window.feUtilsCore` |

使用 CDN 的优势：
- 无需构建工具，直接在浏览器中使用
- 适合快速原型开发
- 支持所有现代浏览器

## 开发

克隆仓库并安装依赖：

```bash
git clone https://github.com/yourusername/lutlelk.git
cd lutlelk
pnpm install
```

运行测试：

```bash
pnpm test
```

构建项目：

```bash
pnpm build
```

构建 CDN 版本：

```bash
pnpm build:cdn
```

## 贡献

欢迎提交 Issue 和 Pull Request！
