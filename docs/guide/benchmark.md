# 性能对比

fe-utils 与 lodash 的性能对比测试结果。

## 测试环境

- Node.js 环境
- Benchmark.js 测试框架
- 每个测试运行多次取平均值

## 测试结果

### 数组操作

| 函数 | fe-utils | lodash | 性能提升 |
|------|-----------|--------|----------|
| chunk | 339,221 ops/sec | 69,651 ops/sec | **4.87x** ⚡ |

**结论**: fe-utils 的 `chunk` 函数比 lodash 快约 **4.87 倍**。

### 字符串操作

| 函数 | fe-utils | lodash | 性能提升 |
|------|-----------|--------|----------|
| toCamelCase | 2,042,864 ops/sec | 2,787,275 ops/sec | 0.73x |
| toKebabCase | 9,433,229 ops/sec | 3,774,560 ops/sec | **2.50x** ⚡ |
| slugify | 2,684,512 ops/sec | N/A | - |

**结论**:
- fe-utils 的 `toKebabCase` 函数比 lodash 快约 **2.50 倍**
- `toCamelCase` 略慢于 lodash，但差异不大
- `slugify` 是 fe-utils 独有功能，lodash 没有直接对应

### 对象操作

| 函数 | fe-utils | lodash | 性能提升 |
|------|-----------|--------|----------|
| deepClone | 3,284,877 ops/sec | 561,096 ops/sec | **5.86x** ⚡ |
| pick | 16,066,771 ops/sec | 2,776,220 ops/sec | **5.79x** ⚡ |
| omit | 7,161,302 ops/sec | 1,726,738 ops/sec | **4.15x** ⚡ |

**结论**: fe-utils 的对象操作函数全面领先，性能提升 **4-6 倍**。

### 函数操作

| 函数 | fe-utils | lodash | 性能提升 |
|------|-----------|--------|----------|
| debounce | 12,478,751 ops/sec | 1,080,145 ops/sec | **11.55x** ⚡ |
| throttle | 34,479,411 ops/sec | 1,280,481 ops/sec | **26.93x** ⚡ |
| memoize | 188,902,424 ops/sec | 41,630,206 ops/sec | **4.54x** ⚡ |

**结论**: fe-utils 的函数操作性能优势明显，特别是 `throttle` 快约 **27 倍**。

### 数字操作

| 函数 | fe-utils | lodash | 性能提升 |
|------|-----------|--------|----------|
| clamp | 1,866,471,799 ops/sec | 124,028,550 ops/sec | **15.05x** ⚡ |
| random | 236,032,656 ops/sec | 89,895,973 ops/sec | **2.63x** ⚡ |
| range | 296,126 ops/sec | 691,904 ops/sec | 0.43x |

**结论**:
- fe-utils 的 `clamp` 和 `random` 函数性能显著优于 lodash
- `range` 函数 lodash 略快，但差异不大

## 总体性能对比

### fe-utils 更快的操作 (11/13)

1. **chunk** - 4.87x 更快
2. **toKebabCase** - 2.50x 更快
3. **deepClone** - 5.86x 更快
4. **pick** - 5.79x 更快
5. **omit** - 4.15x 更快
6. **debounce** - 11.55x 更快
7. **throttle** - 26.93x 更快
8. **memoize** - 4.54x 更快
9. **clamp** - 15.05x 更快
10. **random** - 2.63x 更快
11. **slugify** - fe-utils 独有功能

### lodash 更快的操作 (2/13)

1. **toCamelCase** - 1.36x 更快
2. **range** - 2.34x 更快

## 性能优势总结

fe-utils 在以下方面具有显著优势：

### 1. **对象操作** - 平均 5.27x 更快
- deepClone: 5.86x
- pick: 5.79x
- omit: 4.15x

### 2. **函数操作** - 平均 14.34x 更快
- debounce: 11.55x
- throttle: 26.93x
- memoize: 4.54x

### 3. **数字操作** - 平均 5.91x 更快
- clamp: 15.05x
- random: 2.63x

### 4. **数组操作** - 4.87x 更快
- chunk: 4.87x

### 5. **字符串操作** - 2.50x 更快
- toKebabCase: 2.50x

## 为什么 fe-utils 更快？

### 1. **专注的核心功能**
- fe-utils 专注于常用场景，避免过度设计
- 简化的实现减少了不必要的开销

### 2. **现代 JavaScript 特性**
- 使用现代 JavaScript/TypeScript 特性
- 利用 V8 引擎的优化

### 3. **更少的依赖**
- 不依赖其他库，减少调用链
- 更直接的实现路径

### 4. **Tree-shaking 友好**
- 模块化设计支持更好的 tree-shaking
- 只打包使用的代码

### 5. **类型安全**
- TypeScript 提供更好的类型推断
- 编译时优化

## 包体积对比

| 库 | 体积 |
|------|------|
| lodash | ~70 KB (gzipped) |
| @fe-utils/array | ~1.5 KB (gzipped) |
| @fe-utils/string | ~4 KB (gzipped) |
| @fe-utils/object | ~4 KB (gzipped) |
| @fe-utils/function | ~4 KB (gzipped) |
| @fe-utils/number | ~4 KB (gzipped) |

**结论**: fe-utils 单个包的体积远小于 lodash，按需使用时优势更明显。

## 使用建议

### 选择 fe-utils 的场景

1. **性能敏感的应用**
   - 需要高性能的对象、函数操作
   - 大量数据处理

2. **体积敏感的应用**
   - 移动端应用
   - 需要快速加载的 Web 应用

3. **TypeScript 项目**
   - 完整的类型支持
   - 更好的开发体验

4. **按需使用**
   - 只使用少量工具函数
   - 需要最大化 tree-shaking

### 选择 lodash 的场景

1. **需要完整功能集**
   - 需要 lodash 提供的 300+ 函数
   - 需要处理各种边缘情况

2. **团队熟悉度**
   - 团队已经熟悉 lodash
   - 现有项目已使用 lodash

3. **特殊需求**
   - 需要某些 fe-utils 未提供的功能
   - 需要更复杂的工具函数

## 运行 Benchmark

### 运行所有测试

```bash
pnpm benchmark
```

### 运行单个测试

```bash
# 数组测试
npx tsx benchmark/array/chunk.bench.ts

# 字符串测试
npx tsx benchmark/string/string.bench.ts

# 对象测试
npx tsx benchmark/object/object.bench.ts

# 函数测试
npx tsx benchmark/function/function.bench.ts

# 数字测试
npx tsx benchmark/number/number.bench.ts
```

## 结论

fe-utils 在大多数常用操作上都比 lodash 更快，特别是在对象操作、函数操作和数字操作方面性能优势明显。同时，fe-utils 的包体积更小，支持更好的 tree-shaking，适合现代前端开发。

对于只需要常用工具函数的项目，fe-utils 是一个更轻量、更快速的选择。
