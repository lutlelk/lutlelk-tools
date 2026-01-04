---
layout: home

hero:
  name: lutlelk-tools
  text: Lightweight JavaScript Utility Library
  tagline: A collection of common utility functions
  actions:
    - theme: brand
      text: Get Started
      link: /en/guide/introduction
    - theme: alt
      text: GitHub
      link: https://github.com/yourusername/lutlelk-tools

features:
  - title: Lightweight
    details: Each package is published independently, import on demand to reduce bundle size
  - title: TypeScript
    details: Complete TypeScript type support for excellent development experience
  - title: Modular
    details: Split into multiple packages by functionality, flexible combination
  - title: High Quality
    details: Comprehensive unit tests and type tests to ensure code quality
  - title: Single File On-Demand Import
    details: Support importing by function path for more granular tree-shaking
  - title: CDN Support
    details: Provides IIFE format for direct browser usage
---

## Quick Installation

```bash
# Install a single package
pnpm add @lutlelk-tools/array

# Install multiple packages
pnpm add @lutlelk-tools/array @lutlelk-tools/string @lutlelk-tools/object
```

## Usage Examples

### Regular Import

```ts
import { chunk } from '@lutlelk-tools/array'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### Single File On-Demand Import

```ts
import chunk from '@lutlelk-tools/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### CDN Usage

```html
<script src="https://cdn.jsdelivr.net/npm/@lutlelk-tools/array@latest/dist/array.iife.js"></script>
<script>
  const result = window.feUtilsArray.chunk([1, 2, 3, 4, 5], 2)
  console.log(result) // [[1, 2], [3, 4], [5]]
</script>
```
