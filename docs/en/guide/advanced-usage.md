# Advanced Usage

## Single File On-Demand Import

lutlelk-tools supports importing by function path for more granular on-demand loading and tree-shaking.

### Basic Usage

```ts
// Import a single function directly
import chunk from '@lutlelk-tools/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### Multiple Function Imports

```ts
import chunk from '@lutlelk-tools/array/chunk'
import toCamelCase from '@lutlelk-tools/string/toCamelCase'
import deepClone from '@lutlelk-tools/object/deepClone'
import debounce from '@lutlelk-tools/function/debounce'
import isPrime from '@lutlelk-tools/number/isPrime'
```

### Advantages

- **Smaller bundle size**: Only bundle used functions, exclude unused code
- **Faster build speed**: Reduce amount of code to process
- **Better tree-shaking effect**: Build tools can optimize code more precisely
- **Clearer dependencies**: Clearly know which functions are used

### Comparison

#### Regular Import

```ts
import { chunk, flatten, uniq } from '@lutlelk-tools/array'

// Even if only using chunk, build tools might include the entire package
const result = chunk([1, 2, 3, 4, 5], 2)
```

#### Single File On-Demand Import

```ts
import chunk from '@lutlelk-tools/array/chunk'

// Only bundle chunk function, exclude other functions
const result = chunk([1, 2, 3, 4, 5], 2)
```

### Available Single File Imports

#### @lutlelk-tools/array

```ts
import chunk from '@lutlelk-tools/array/chunk'
import flatten from '@lutlelk-tools/array/flatten'
import uniq from '@lutlelk-tools/array/uniq'
import groupBy from '@lutlelk-tools/array/groupBy'
import sortBy from '@lutlelk-tools/array/sortBy'
import find from '@lutlelk-tools/array/find'
import map from '@lutlelk-tools/array/map'
import filter from '@lutlelk-tools/array/filter'
import reduce from '@lutlelk-tools/array/reduce'
```

#### @lutlelk-tools/string

```ts
import toCamelCase from '@lutlelk-tools/string/toCamelCase'
import toKebabCase from '@lutlelk-tools/string/toKebabCase'
import toSnakeCase from '@lutlelk-tools/string/toSnakeCase'
import slugify from '@lutlelk-tools/string/slugify'
import capitalize from '@lutlelk-tools/string/capitalize'
import truncate from '@lutlelk-tools/string/truncate'
import isEmail from '@lutlelk-tools/string/isEmail'
import isUrl from '@lutlelk-tools/string/isUrl'
```

#### @lutlelk-tools/object

```ts
import get from '@lutlelk-tools/object/get'
import set from '@lutlelk-tools/object/set'
import pick from '@lutlelk-tools/object/pick'
import omit from '@lutlelk-tools/object/omit'
import merge from '@lutlelk-tools/object/merge'
import deepMerge from '@lutlelk-tools/object/deepMerge'
import clone from '@lutlelk-tools/object/clone'
import deepClone from '@lutlelk-tools/object/deepClone'
```

#### @lutlelk-tools/function

```ts
import debounce from '@lutlelk-tools/function/debounce'
import throttle from '@lutlelk-tools/function/throttle'
import memoize from '@lutlelk-tools/function/memoize'
import once from '@lutlelk-tools/function/once'
import curry from '@lutlelk-tools/function/curry'
import partial from '@lutlelk-tools/function/partial'
import compose from '@lutlelk-tools/function/compose'
```

#### @lutlelk-tools/number

```ts
import clamp from '@lutlelk-tools/number/clamp'
import random from '@lutlelk-tools/number/random'
import randomInt from '@lutlelk-tools/number/randomInt'
import range from '@lutlelk-tools/number/range'
import round from '@lutlelk-tools/number/round'
import format from '@lutlelk-tools/number/format'
import toCurrency from '@lutlelk-tools/number/toCurrency'
import toBytes from '@lutlelk-tools/number/toBytes'
```

## CDN Usage

lutlelk-tools provides IIFE format build files for direct browser usage via CDN.

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <title>lutlelk-tools CDN Example</title>
</head>
<body>
  <!-- Import required packages -->
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

### CDN Sources

#### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/@lutlelk-tools/array@latest/dist/array.iife.js"></script>
```

#### unpkg

```html
<script src="https://unpkg.com/@lutlelk-tools/array@latest/dist/array.iife.js"></script>
```

### Available CDN Packages

| Package | jsDelivr | unpkg | Global Variable |
|---------|----------|-------|-----------------|
| @lutlelk-tools/array | [Link](https://cdn.jsdelivr.net/npm/@lutlelk-tools/array@latest/dist/array.iife.js) | [Link](https://unpkg.com/@lutlelk-tools/array@latest/dist/array.iife.js) | `window.feUtilsArray` |
| @lutlelk-tools/string | [Link](https://cdn.jsdelivr.net/npm/@lutlelk-tools/string@latest/dist/string.iife.js) | [Link](https://unpkg.com/@lutlelk-tools/string@latest/dist/string.iife.js) | `window.feUtilsString` |
| @lutlelk-tools/object | [Link](https://cdn.jsdelivr.net/npm/@lutlelk-tools/object@latest/dist/object.iife.js) | [Link](https://unpkg.com/@lutlelk-tools/object@latest/dist/object.iife.js) | `window.feUtilsObject` |
| @lutlelk-tools/function | [Link](https://cdn.jsdelivr.net/npm/@lutlelk-tools/function@latest/dist/function.iife.js) | [Link](https://unpkg.com/@lutlelk-tools/function@latest/dist/function.iife.js) | `window.feUtilsFunction` |
| @lutlelk-tools/number | [Link](https://cdn.jsdelivr.net/npm/@lutlelk-tools/number@latest/dist/number.iife.js) | [Link](https://unpkg.com/@lutlelk-tools/number@latest/dist/number.iife.js) | `window.feUtilsNumber` |
| @lutlelk-tools/date | [Link](https://cdn.jsdelivr.net/npm/@lutlelk-tools/date@latest/dist/date.iife.js) | [Link](https://unpkg.com/@lutlelk-tools/date@latest/dist/date.iife.js) | `window.feUtilsDate` |
| @lutlelk-tools/dom | [Link](https://cdn.jsdelivr.net/npm/@lutlelk-tools/dom@latest/dist/dom.iife.js) | [Link](https://unpkg.com/@lutlelk-tools/dom@latest/dist/dom.iife.js) | `window.feUtilsDom` |
| @lutlelk-tools/async | [Link](https://cdn.jsdelivr.net/npm/@lutlelk-tools/async@latest/dist/async.iife.js) | [Link](https://unpkg.com/@lutlelk-tools/async@latest/dist/async.iife.js) | `window.feUtilsAsync` |
| @lutlelk-tools/core | [Link](https://cdn.jsdelivr.net/npm/@lutlelk-tools/core@latest/dist/core.iife.js) | [Link](https://unpkg.com/@lutlelk-tools/core@latest/dist/core.iife.js) | `window.feUtilsCore` |

### Specify Version

```html
<!-- Use specific version -->
<script src="https://cdn.jsdelivr.net/npm/@lutlelk-tools/array@1.0.0/dist/array.iife.js"></script>

<!-- Use latest version -->
<script src="https://cdn.jsdelivr.net/npm/@lutlelk-tools/array@latest/dist/array.iife.js"></script>
```

### Advantages of Using CDN

- **No build tools**: Use directly in browser without Webpack, Vite, etc.
- **Rapid prototyping**: Suitable for rapid prototyping and demos
- **Simple and easy**: Just include script tag to use
- **Version control**: Can specify specific version for stability
- **Global distribution**: CDN provides global acceleration for faster loading

### Notes

1. **Global variables**: CDN version mounts functions to `window.feUtils*` global variables
2. **Version compatibility**: When using specific versions, ensure all packages use the same version number
3. **TypeScript support**: CDN version doesn't include type definitions, use npm installation for type support
4. **Production**: Recommend using npm installation in production for better performance and tree-shaking

## Best Practices

### When to Use Single File On-Demand Import

- Project uses only a few functions
- Strict requirements on bundle size
- Need to maximize tree-shaking effect

### When to Use CDN

- Rapid prototyping
- Demos and teaching
- Projects without build tools
- Need to quickly integrate into existing projects

### When to Use Regular Import

- Project uses multiple functions
- Need complete type support
- TypeScript development
- Need better development experience
