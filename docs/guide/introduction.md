# 介绍

fe-utils 是一个轻量级的 JavaScript 工具库，提供常用的工具函数集合。它采用模块化设计，每个功能包都可以独立安装和使用。

## 特性

- **轻量级**: 每个包独立发布，按需引入，减少包体积
- **TypeScript**: 完整的 TypeScript 类型支持，提供优秀的开发体验
- **模块化**: 按功能拆分为多个包，灵活组合使用
- **高质量**: 完善的单元测试和类型测试，保证代码质量
- **单文件按需导入**: 支持按函数路径导入，实现更细粒度的 tree-shaking
- **CDN 支持**: 提供 IIFE 格式，支持浏览器直接使用

## 包列表

fe-utils 包含以下功能包：

| 包名 | 描述 |
|------|------|
| `@fe-utils/array` | 数组操作工具函数 |
| `@fe-utils/string` | 字符串处理工具函数 |
| `@fe-utils/object` | 对象操作工具函数 |
| `@fe-utils/function` | 函数操作工具函数 |
| `@fe-utils/number` | 数字处理工具函数 |
| `@fe-utils/date` | 日期时间处理工具函数 |
| `@fe-utils/dom` | DOM 操作工具函数 |
| `@fe-utils/async` | 异步操作工具函数 |
| `@fe-utils/core` | 核心工具函数 |

## 使用方式

### npm/yarn/pnpm 安装

```bash
pnpm add @fe-utils/array
```

```ts
import { chunk } from '@fe-utils/array'
```

### 单文件按需导入

```ts
import chunk from '@fe-utils/array/chunk'
```

### CDN 使用

```html
<script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js"></script>
<script>
  window.feUtilsArray.chunk([1, 2, 3, 4, 5], 2)
</script>
```

## 浏览器支持

现代浏览器和 Node.js 环境。
