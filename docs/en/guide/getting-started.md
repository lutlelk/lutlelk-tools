# Getting Started

## Installation

Install a single package using pnpm:

```bash
pnpm add @fe-utils/array
```

Install multiple packages:

```bash
pnpm add @fe-utils/array @fe-utils/string @fe-utils/object
```

## Usage

### ESM Style

```ts
import { chunk } from '@fe-utils/array'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### CommonJS Style

```js
const { chunk } = require('@fe-utils/array')

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### Single File On-Demand Import

fe-utils supports importing by function path for more granular on-demand loading and tree-shaking:

```ts
// Import a single function directly
import chunk from '@fe-utils/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

Advantages of this approach:
- Smaller bundle size (only bundle used functions)
- Faster build speed
- Better tree-shaking effect

All packages support single file on-demand import, for example:

```ts
import toCamelCase from '@fe-utils/string/toCamelCase'
import deepClone from '@fe-utils/object/deepClone'
import debounce from '@fe-utils/function/debounce'
import isPrime from '@fe-utils/number/isPrime'
```

### CDN Usage

fe-utils supports CDN import for direct browser usage:

```html
<!DOCTYPE html>
<html>
<head>
  <title>fe-utils CDN Example</title>
</head>
<body>
  <script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@fe-utils/string@latest/dist/string.iife.js"></script>
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
| @fe-utils/array | `@fe-utils/array/dist/array.iife.js` | `window.feUtilsArray` |
| @fe-utils/string | `@fe-utils/string/dist/string.iife.js` | `window.feUtilsString` |
| @fe-utils/object | `@fe-utils/object/dist/object.iife.js` | `window.feUtilsObject` |
| @fe-utils/function | `@fe-utils/function/dist/function.iife.js` | `window.feUtilsFunction` |
| @fe-utils/number | `@fe-utils/number/dist/number.iife.js` | `window.feUtilsNumber` |
| @fe-utils/date | `@fe-utils/date/dist/date.iife.js` | `window.feUtilsDate` |
| @fe-utils/dom | `@fe-utils/dom/dist/dom.iife.js` | `window.feUtilsDom` |
| @fe-utils/async | `@fe-utils/async/dist/async.iife.js` | `window.feUtilsAsync` |
| @fe-utils/core | `@fe-utils/core/dist/core.iife.js` | `window.feUtilsCore` |

Advantages of using CDN:
- No build tools needed, use directly in browser
- Suitable for rapid prototyping
- Supports all modern browsers

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/fe-utils.git
cd fe-utils
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
