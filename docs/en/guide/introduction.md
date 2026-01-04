# Introduction

lutlelk is a lightweight JavaScript utility library that provides a collection of common utility functions. It uses a modular design where each functional package can be installed and used independently.

## Features

- **Lightweight**: Each package is published independently, import on demand to reduce bundle size
- **TypeScript**: Complete TypeScript type support for excellent development experience
- **Modular**: Split into multiple packages by functionality, flexible combination
- **High Quality**: Comprehensive unit tests and type tests to ensure code quality
- **Single File On-Demand Import**: Support importing by function path for more granular tree-shaking
- **CDN Support**: Provides IIFE format for direct browser usage

## Package List

lutlelk includes the following functional packages:

| Package | Description |
|---------|-------------|
| `@lutlelk/array` | Array manipulation utility functions |
| `@lutlelk/string` | String processing utility functions |
| `@lutlelk/object` | Object manipulation utility functions |
| `@lutlelk/function` | Function manipulation utility functions |
| `@lutlelk/number` | Number processing utility functions |
| `@lutlelk/date` | Date and time processing utility functions |
| `@lutlelk/dom` | DOM manipulation utility functions |
| `@lutlelk/async` | Async operation utility functions |
| `@lutlelk/core` | Core utility functions |

## Usage

### npm/yarn/pnpm Installation

```bash
pnpm add @lutlelk/array
```

```ts
import { chunk } from '@lutlelk/array'
```

### Single File On-Demand Import

```ts
import chunk from '@lutlelk/array/chunk'
```

### CDN Usage

```html
<script src="https://cdn.jsdelivr.net/npm/@lutlelk/array@latest/dist/array.iife.js"></script>
<script>
  window.feUtilsArray.chunk([1, 2, 3, 4, 5], 2)
</script>
```

## Browser Support

Modern browsers and Node.js environments.
