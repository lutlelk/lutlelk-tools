# lutlelk-tools

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
| `@lutlelk-tools/array` | 数组操作工具函数 | ~1.5 KB |
| `@lutlelk-tools/string` | 字符串处理工具函数 | ~4 KB |
| `@lutlelk-tools/object` | 对象操作工具函数 | ~4 KB |
| `@lutlelk-tools/function` | 函数操作工具函数 | ~4 KB |
| `@lutlelk-tools/number` | 数字处理工具函数 | ~4 KB |
| `@lutlelk-tools/date` | 日期时间处理工具函数 | ~1.5 KB |
| `@lutlelk-tools/dom` | DOM 操作工具函数 | ~4 KB |
| `@lutlelk-tools/async` | 异步操作工具函数 | ~1.5 KB |
| `@lutlelk-tools/core` | 核心工具函数 | ~1 KB |

## 性能对比

lutlelk-tools 在大多数常用操作上都比 lodash 更快：

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
pnpm add @lutlelk-tools/array

# 安装多个包
pnpm add @lutlelk-tools/array @lutlelk-tools/string @lutlelk-tools/object
```

## 使用

### 常规导入

```ts
import { chunk } from '@lutlelk-tools/array'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### 单文件按需导入

```ts
import chunk from '@lutlelk-tools/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### CDN 使用

```html
<script src="https://cdn.jsdelivr.net/npm/@lutlelk-tools/array@latest/dist/array.iife.js"></script>
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
git clone https://github.com/yourusername/lutlelk-tools.git
cd lutlelk-tools
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

## 为什么选择 lutlelk-tools？

### 1. 性能优越

在大多数常用操作上，lutlelk-tools 的性能显著优于 lodash：

- 对象操作平均快 **5.27 倍**
- 函数操作平均快 **14.34 倍**
- 数字操作平均快 **5.91 倍**
- 数组操作快 **4.87 倍**

### 2. 体积更小

单个包的体积远小于 lodash：

- lodash: ~70 KB (gzipped)
- @lutlelk-tools/array: ~1.5 KB (gzipped)
- @lutlelk-tools/string: ~4 KB (gzipped)
- @lutlelk-tools/object: ~4 KB (gzipped)

按需使用时，lutlelk-tools 的优势更加明显。

### 3. 更好的 Tree-shaking

模块化设计支持更好的 tree-shaking，只打包使用的代码。

### 4. 完整的 TypeScript 支持

提供完整的类型定义，更好的开发体验和类型安全。

### 5. 现代化设计

使用现代 JavaScript/TypeScript 特性，不依赖过时的兼容代码。

## 贡献

欢迎提交 Issue 和 Pull Request！

## License

### ISC 许可证

本项目采用 ISC 许可证开源。

#### 许可证内容

版权所有 (c) 2025, lutlelk

特此授予任何人免费使用、复制、修改和/或分发本软件的许可，无论是否收费，前提是上述版权声明和本许可声明出现在所有副本中。

本软件按"原样"提供，作者不对本软件承担任何明示或暗示的保证，包括但不限于适销性和适用性的保证。在任何情况下，作者均不对任何特殊、直接、间接或后果性损害或任何损害（包括但不限于因使用、数据或利润损失而导致的损害）承担责任，无论是基于合同、侵权或其他诉讼行为，均由本软件的使用或性能引起。

#### 许可证摘要

- ✅ **商业使用**: 您可以将此代码用于商业目的
- ✅ **修改**: 您可以修改此代码
- ✅ **分发**: 您可以分发原始或修改后的代码
- ✅ **私人使用**: 您可以私人使用此代码
- ⚠️ **责任**: 本软件按"原样"提供，不提供任何保证

详见 [LICENSE](./LICENSE) 文件。
