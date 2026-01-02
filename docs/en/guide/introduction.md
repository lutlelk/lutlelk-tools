# Introduction

fe-utils is a lightweight JavaScript utility library that provides a collection of common utility functions. It uses a modular design where each functional package can be installed and used independently.

## Features

- **Lightweight**: Each package is published independently, import on demand to reduce bundle size
- **TypeScript**: Complete TypeScript type support for excellent development experience
- **Modular**: Split into multiple packages by functionality, flexible combination
- **High Quality**: Comprehensive unit tests and type tests to ensure code quality
- **Single File On-Demand Import**: Support importing by function path for more granular tree-shaking
- **CDN Support**: Provides IIFE format for direct browser usage

## Package List

fe-utils includes the following functional packages:

| Package | Description |
|---------|-------------|
| `@fe-utils/array` | Array manipulation utility functions |
| `@fe-utils/string` | String processing utility functions |
| `@fe-utils/object` | Object manipulation utility functions |
| `@fe-utils/function` | Function manipulation utility functions |
| `@fe-utils/number` | Number processing utility functions |
| `@fe-utils/date` | Date and time processing utility functions |
| `@fe-utils/dom` | DOM manipulation utility functions |
| `@fe-utils/async` | Async operation utility functions |
| `@fe-utils/core` | Core utility functions |

## Usage

### npm/yarn/pnpm Installation

```bash
pnpm add @fe-utils/array
```

```ts
import { chunk } from '@fe-utils/array'
```

### Single File On-Demand Import

```ts
import chunk from '@fe-utils/array/chunk'
```

### CDN Usage

```html
<script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js"></script>
<script>
  window.feUtilsArray.chunk([1, 2, 3, 4, 5], 2)
</script>
```

## Browser Support

Modern browsers and Node.js environments.
