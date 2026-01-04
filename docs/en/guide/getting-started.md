# Getting Started

## Installation

Install a single package using pnpm:

```bash
pnpm add @lutlelk/array
```

Install multiple packages:

```bash
pnpm add @lutlelk/array @lutlelk/string @lutlelk/object
```

## Usage

### ESM Style

```ts
import { chunk } from '@lutlelk/array'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### CommonJS Style

```js
const { chunk } = require('@lutlelk/array')

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### Single File On-Demand Import

lutlelk supports importing by function path for more granular on-demand loading and tree-shaking:

```ts
// Import a single function directly
import chunk from '@lutlelk/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

Advantages of this approach:
- Smaller bundle size (only bundle used functions)
- Faster build speed
- Better tree-shaking effect

All packages support single file on-demand import, for example:

```ts
import toCamelCase from '@lutlelk/string/toCamelCase'
import deepClone from '@lutlelk/object/deepClone'
import debounce from '@lutlelk/function/debounce'
import isPrime from '@lutlelk/number/isPrime'
```

### CDN Usage

lutlelk supports CDN import for direct browser usage:

```html
<!DOCTYPE html>
<html>
<head>
  <title>lutlelk CDN Example</title>
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/@lutlelk/array@latest/dist/array.iife.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@lutlelk/string@latest/dist/string.iife.js"></script>
  <script>
    // Use global variables
    const result = window.feUtilsArray.chunk([1, 2, 3, 4, 5], 2)
    console.log(result) // [[1, 2], [3, 4], [5]]

    const camelCase = window.feUtilsString.toCamelCase('hello-world')
    console.log(camelCase) // "helloWorld"
  </script>
</body>
</html>
```

Available CDN packages:

| Package | CDN Link | Global Variable |
|---------|-----------|-----------------|
| @lutlelk/array | `@lutlelk/array/dist/array.iife.js` | `window.feUtilsArray` |
| @lutlelk/string | `@lutlelk/string/dist/string.iife.js` | `window.feUtilsString` |
| @lutlelk/object | `@lutlelk/object/dist/object.iife.js` | `window.feUtilsObject` |
| @lutlelk/function | `@lutlelk/function/dist/function.iife.js` | `window.feUtilsFunction` |
| @lutlelk/number | `@lutlelk/number/dist/number.iife.js` | `window.feUtilsNumber` |
| @lutlelk/date | `@lutlelk/date/dist/date.iife.js` | `window.feUtilsDate` |
| @lutlelk/dom | `@lutlelk/dom/dist/dom.iife.js` | `window.feUtilsDom` |
| @lutlelk/async | `@lutlelk/async/dist/async.iife.js` | `window.feUtilsAsync` |
| @lutlelk/core | `@lutlelk/core/dist/core.iife.js` | `window.feUtilsCore` |

Advantages of using CDN:
- No build tools needed, use directly in browser
- Suitable for rapid prototyping
- Supports all modern browsers

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/lutlelk.git
cd lutlelk
pnpm install
```

Run tests:

```bash
pnpm test
```

Build the project:

```bash
pnpm build
```

Build CDN version:

```bash
pnpm build:cdn
```

## Contributing

Issues and Pull Requests are welcome!
