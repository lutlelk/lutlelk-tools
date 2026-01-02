# fe-utils

一个轻量级、高性能的 JavaScript 工具库，提供常用的工具函数集合。

## 特性

- **轻量级**: 每个包独立发布，按需引入，减少包体积
- **高性能**: 在大多数操作上比 lodash 快 2-27 倍
- **TypeScript**: 完整的 TypeScript 类型支持，提供优秀的开发体验
- **模块化**: 按功能拆分为多个包，灵活组合使用
- **高质量**: 完善的单元测试和类型测试，保证代码质量
- **单文件按需导入**: 支持按函数路径导入，实现更细粒度的 tree-shaking
- **CDN 支持**: 提供 IIFE 格式，支持浏览器直接使用

## 包列表

| 包名 | 描述 | 体积 (gzipped) |
|------|------|----------------|
| `@fe-utils/array` | 数组操作工具函数 | ~1.5 KB |
| `@fe-utils/string` | 字符串处理工具函数 | ~4 KB |
| `@fe-utils/object` | 对象操作工具函数 | ~4 KB |
| `@fe-utils/function` | 函数操作工具函数 | ~4 KB |
| `@fe-utils/number` | 数字处理工具函数 | ~4 KB |
| `@fe-utils/date` | 日期时间处理工具函数 | ~1.5 KB |
| `@fe-utils/dom` | DOM 操作工具函数 | ~4 KB |
| `@fe-utils/async` | 异步操作工具函数 | ~1.5 KB |
| `@fe-utils/core` | 核心工具函数 | ~1 KB |

## 性能对比

fe-utils 在大多数常用操作上都比 lodash 更快：

### 关键性能提升

- **throttle**: 26.93x 更快 ⚡
- **clamp**: 15.05x 更快 ⚡
- **debounce**: 11.55x 更快 ⚡
- **deepClone**: 5.86x 更快 ⚡
- **pick**: 5.79x 更快 ⚡
- **chunk**: 4.87x 更快 ⚡

查看完整的 [性能对比文档](./docs/guide/benchmark.md) 了解详情。

## 安装

```bash
# 安装单个包
pnpm add @fe-utils/array

# 安装多个包
pnpm add @fe-utils/array @fe-utils/string @fe-utils/object
```

## 使用

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

## 文档

- [快速开始](./docs/guide/getting-started.md)
- [高级用法](./docs/guide/advanced-usage.md)
- [性能对比](./docs/guide/benchmark.md)
- [API 文档](./docs/packages/)

## 开发

### 克隆仓库

```bash
git clone https://github.com/yourusername/fe-utils.git
cd fe-utils
```

### 安装依赖

```bash
pnpm install
```

### 运行测试

```bash
pnpm test
```

### 构建

```bash
pnpm build
```

### 构建 CDN 版本

```bash
pnpm build:cdn
```

### 运行性能测试

```bash
pnpm benchmark
```

### 运行文档

```bash
pnpm docs:dev
```

## 为什么选择 fe-utils？

### 1. 性能优越

在大多数常用操作上，fe-utils 的性能显著优于 lodash：

- 对象操作平均快 **5.27 倍**
- 函数操作平均快 **14.34 倍**
- 数字操作平均快 **5.91 倍**
- 数组操作快 **4.87 倍**

### 2. 体积更小

单个包的体积远小于 lodash：

- lodash: ~70 KB (gzipped)
- @fe-utils/array: ~1.5 KB (gzipped)
- @fe-utils/string: ~4 KB (gzipped)
- @fe-utils/object: ~4 KB (gzipped)

按需使用时，fe-utils 的优势更加明显。

### 3. 更好的 Tree-shaking

模块化设计支持更好的 tree-shaking，只打包使用的代码。

### 4. 完整的 TypeScript 支持

提供完整的类型定义，更好的开发体验和类型安全。

### 5. 现代化设计

使用现代 JavaScript/TypeScript 特性，不依赖过时的兼容代码。

## 贡献

欢迎提交 Issue 和 Pull Request！

## License

ISC
