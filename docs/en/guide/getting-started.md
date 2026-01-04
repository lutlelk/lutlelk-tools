# Getting Started

## Installation

Install a single package using pnpm:

```bash
pnpm add @lutlelk-tools/array
```

Install multiple packages:

```bash
pnpm add @lutlelk-tools/array @lutlelk-tools/string @lutlelk-tools/object
```

## Usage

### ESM Style

```ts
import { chunk } from '@lutlelk-tools/array'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### CommonJS Style

```js
const { chunk } = require('@lutlelk-tools/array')

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### Single File On-Demand Import

lutlelk-tools supports importing by function path for more granular on-demand loading and tree-shaking:

```ts
// Import a single function directly
import chunk from '@lutlelk-tools/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

Advantages of this approach:
- Smaller bundle size (only bundle used functions)
- Faster build speed
- Better tree-shaking effect

All packages support single file on-demand import, for example:

```ts
import toCamelCase from '@lutlelk-tools/string/toCamelCase'
import deepClone from '@lutlelk-tools/object/deepClone'
import debounce from '@lutlelk-tools/function/debounce'
import isPrime from '@lutlelk-tools/number/isPrime'
```

### CDN Usage

lutlelk-tools supports CDN import for direct browser usage:

```html
<!DOCTYPE html>
<html>
<head>
  <title>lutlelk-tools CDN Example</title>
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/@lutlelk-tools/array@latest/dist/array.iife.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@lutlelk-tools/string@latest/dist/string.iife.js"></script>
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
| @lutlelk-tools/array | `@lutlelk-tools/array/dist/array.iife.js` | `window.feUtilsArray` |
| @lutlelk-tools/string | `@lutlelk-tools/string/dist/string.iife.js` | `window.feUtilsString` |
| @lutlelk-tools/object | `@lutlelk-tools/object/dist/object.iife.js` | `window.feUtilsObject` |
| @lutlelk-tools/function | `@lutlelk-tools/function/dist/function.iife.js` | `window.feUtilsFunction` |
| @lutlelk-tools/number | `@lutlelk-tools/number/dist/number.iife.js` | `window.feUtilsNumber` |
| @lutlelk-tools/date | `@lutlelk-tools/date/dist/date.iife.js` | `window.feUtilsDate` |
| @lutlelk-tools/dom | `@lutlelk-tools/dom/dist/dom.iife.js` | `window.feUtilsDom` |
| @lutlelk-tools/async | `@lutlelk-tools/async/dist/async.iife.js` | `window.feUtilsAsync` |
| @lutlelk-tools/core | `@lutlelk-tools/core/dist/core.iife.js` | `window.feUtilsCore` |

Advantages of using CDN:
- No build tools needed, use directly in browser
- Suitable for rapid prototyping
- Supports all modern browsers

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/lutlelk-tools.git
cd lutlelk-tools
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
