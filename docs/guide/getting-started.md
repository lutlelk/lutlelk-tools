# 快速开始

## 安装

使用 pnpm 安装单个包：

```bash
pnpm add @fe-utils/array
```

安装多个包：

```bash
pnpm add @fe-utils/array @fe-utils/string @fe-utils/object
```

## 使用

### ESM 方式

```ts
import { chunk } from '@fe-utils/array'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### CommonJS 方式

```js
const { chunk } = require('@fe-utils/array')

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### 单文件按需导入

fe-utils 支持按函数路径导入，实现更细粒度的按需加载和 tree-shaking：

```ts
// 直接导入单个函数
import chunk from '@fe-utils/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

这种方式的优势：
- 更小的打包体积（只打包使用的函数）
- 更快的构建速度
- 更好的 tree-shaking 效果

所有包都支持单文件按需导入，例如：

```ts
import toCamelCase from '@fe-utils/string/toCamelCase'
import deepClone from '@fe-utils/object/deepClone'
import debounce from '@fe-utils/function/debounce'
import isPrime from '@fe-utils/number/isPrime'
```

### CDN 使用

fe-utils 支持 CDN 方式引入，适合在浏览器中直接使用：

```html
<!DOCTYPE html>
<html>
<head>
  <title>fe-utils CDN Example</title>
</head>
<body>
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

可用的 CDN 包：

| 包名 | CDN 链接 | 全局变量名 |
|------|----------|-----------|
| @fe-utils/array | `@fe-utils/array/dist/array.iife.js` | `window.feUtilsArray` |
| @fe-utils/string | `@fe-utils/string/dist/string.iife.js` | `window.feUtilsString` |
| @fe-utils/object | `@fe-utils/object/dist/object.iife.js` | `window.feUtilsObject` |
| @fe-utils/function | `@fe-utils/function/dist/function.iife.js` | `window.feUtilsFunction` |
| @fe-utils/number | `@fe-utils/number/dist/number.iife.js` | `window.feUtilsNumber` |
| @fe-utils/date | `@fe-utils/date/dist/date.iife.js` | `window.feUtilsDate` |
| @fe-utils/dom | `@fe-utils/dom/dist/dom.iife.js` | `window.feUtilsDom` |
| @fe-utils/async | `@fe-utils/async/dist/async.iife.js` | `window.feUtilsAsync` |
| @fe-utils/core | `@fe-utils/core/dist/core.iife.js` | `window.feUtilsCore` |

使用 CDN 的优势：
- 无需构建工具，直接在浏览器中使用
- 适合快速原型开发
- 支持所有现代浏览器

## 开发

克隆仓库并安装依赖：

```bash
git clone https://github.com/yourusername/fe-utils.git
cd fe-utils
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
