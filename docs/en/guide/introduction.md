# Introduction

lutlelk-tools is a lightweight JavaScript utility library that provides a collection of common utility functions. It uses a modular design where each functional package can be installed and used independently.

## Features

- **Lightweight**: Each package is published independently, import on demand to reduce bundle size
- **TypeScript**: Complete TypeScript type support for excellent development experience
- **Modular**: Split into multiple packages by functionality, flexible combination
- **High Quality**: Comprehensive unit tests and type tests to ensure code quality
- **Single File On-Demand Import**: Support importing by function path for more granular tree-shaking
- **CDN Support**: Provides IIFE format for direct browser usage

## Package List

lutlelk-tools includes the following functional packages:

| Package | Description |
|---------|-------------|
| `@lutlelk-tools/array` | Array manipulation utility functions |
| `@lutlelk-tools/string` | String processing utility functions |
| `@lutlelk-tools/object` | Object manipulation utility functions |
| `@lutlelk-tools/function` | Function manipulation utility functions |
| `@lutlelk-tools/number` | Number processing utility functions |
| `@lutlelk-tools/date` | Date and time processing utility functions |
| `@lutlelk-tools/dom` | DOM manipulation utility functions |
| `@lutlelk-tools/async` | Async operation utility functions |
| `@lutlelk-tools/core` | Core utility functions |

## Usage

### npm/yarn/pnpm Installation

```bash
pnpm add @lutlelk-tools/array
```

```ts
import { chunk } from '@lutlelk-tools/array'
```

### Single File On-Demand Import

```ts
import chunk from '@lutlelk-tools/array/chunk'
```

### CDN Usage

```html
<script src="https://cdn.jsdelivr.net/npm/@lutlelk-tools/array@latest/dist/array.iife.js"></script>
<script>
  window.feUtilsArray.chunk([1, 2, 3, 4, 5], 2)
</script>
```

## Browser Support

Modern browsers and Node.js environments.
