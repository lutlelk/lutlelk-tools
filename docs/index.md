---
layout: home

hero:
  name: fe-utils
  text: 轻量级 JavaScript 工具库
  tagline: 提供常用的工具函数集合
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/introduction
    - theme: alt
      text: GitHub
      link: https://github.com/yourusername/fe-utils

features:
  - title: 轻量级
    details: 每个包独立发布，按需引入，减少包体积
  - title: TypeScript
    details: 完整的 TypeScript 类型支持，提供优秀的开发体验
  - title: 模块化
    details: 按功能拆分为多个包，灵活组合使用
  - title: 高质量
    details: 完善的单元测试和类型测试，保证代码质量
  - title: 单文件按需导入
    details: 支持按函数路径导入，实现更细粒度的 tree-shaking
  - title: CDN 支持
    details: 提供 IIFE 格式，支持浏览器直接使用
---

## 快速安装

```bash
# 安装单个包
pnpm add @fe-utils/array

# 安装多个包
pnpm add @fe-utils/array @fe-utils/string @fe-utils/object
```

## 使用示例

### 常规导入

```ts
import { chunk } from '@fe-utils/array'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### 单文件按需导入

```ts
import chunk from '@fe-utils/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### CDN 使用

```html
<script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js"></script>
<script>
  const result = window.feUtilsArray.chunk([1, 2, 3, 4, 5], 2)
  console.log(result) // [[1, 2], [3, 4], [5]]
</script>
```
