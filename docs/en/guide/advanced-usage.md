# Advanced Usage

## Single File On-Demand Import

fe-utils supports importing by function path for more granular on-demand loading and tree-shaking.

### Basic Usage

```ts
// Import a single function directly
import chunk from '@fe-utils/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### Multiple Function Imports

```ts
import chunk from '@fe-utils/array/chunk'
import toCamelCase from '@fe-utils/string/toCamelCase'
import deepClone from '@fe-utils/object/deepClone'
import debounce from '@fe-utils/function/debounce'
import isPrime from '@fe-utils/number/isPrime'
```

### Advantages

- **Smaller bundle size**: Only bundle used functions, exclude unused code
- **Faster build speed**: Reduce amount of code to process
- **Better tree-shaking effect**: Build tools can optimize code more precisely
- **Clearer dependencies**: Clearly know which functions are used

### Comparison

#### Regular Import

```ts
import { chunk, flatten, uniq } from '@fe-utils/array'

// Even if only using chunk, build tools might include the entire package
const result = chunk([1, 2, 3, 4, 5], 2)
```

#### Single File On-Demand Import

```ts
import chunk from '@fe-utils/array/chunk'

// Only bundle chunk function, exclude other functions
const result = chunk([1, 2, 3, 4, 5], 2)
```

### Available Single File Imports

#### @fe-utils/array

```ts
import chunk from '@fe-utils/array/chunk'
import flatten from '@fe-utils/array/flatten'
import uniq from '@fe-utils/array/uniq'
import groupBy from '@fe-utils/array/groupBy'
import sortBy from '@fe-utils/array/sortBy'
import find from '@fe-utils/array/find'
import map from '@fe-utils/array/map'
import filter from '@fe-utils/array/filter'
import reduce from '@fe-utils/array/reduce'
```

#### @fe-utils/string

```ts
import toCamelCase from '@fe-utils/string/toCamelCase'
import toKebabCase from '@fe-utils/string/toKebabCase'
import toSnakeCase from '@fe-utils/string/toSnakeCase'
import slugify from '@fe-utils/string/slugify'
import capitalize from '@fe-utils/string/capitalize'
import truncate from '@fe-utils/string/truncate'
import isEmail from '@fe-utils/string/isEmail'
import isUrl from '@fe-utils/string/isUrl'
```

#### @fe-utils/object

```ts
import get from '@fe-utils/object/get'
import set from '@fe-utils/object/set'
import pick from '@fe-utils/object/pick'
import omit from '@fe-utils/object/omit'
import merge from '@fe-utils/object/merge'
import deepMerge from '@fe-utils/object/deepMerge'
import clone from '@fe-utils/object/clone'
import deepClone from '@fe-utils/object/deepClone'
```

#### @fe-utils/function

```ts
import debounce from '@fe-utils/function/debounce'
import throttle from '@fe-utils/function/throttle'
import memoize from '@fe-utils/function/memoize'
import once from '@fe-utils/function/once'
import curry from '@fe-utils/function/curry'
import partial from '@fe-utils/function/partial'
import compose from '@fe-utils/function/compose'
```

#### @fe-utils/number

```ts
import clamp from '@fe-utils/number/clamp'
import random from '@fe-utils/number/random'
import randomInt from '@fe-utils/number/randomInt'
import range from '@fe-utils/number/range'
import round from '@fe-utils/number/round'
import format from '@fe-utils/number/format'
import toCurrency from '@fe-utils/number/toCurrency'
import toBytes from '@fe-utils/number/toBytes'
```

## CDN Usage

fe-utils provides IIFE format build files for direct browser usage via CDN.

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <title>fe-utils CDN Example</title>
</head>
<body>
  <!-- Import required packages -->
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

### CDN Sources

#### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js"></script>
```

#### unpkg

```html
<script src="https://unpkg.com/@fe-utils/array@latest/dist/array.iife.js"></script>
```

### Available CDN Packages

| Package | jsDelivr | unpkg | Global Variable |
|---------|----------|-------|-----------------|
| @fe-utils/array | [Link](https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js) | [Link](https://unpkg.com/@fe-utils/array@latest/dist/array.iife.js) | `window.feUtilsArray` |
| @fe-utils/string | [Link](https://cdn.jsdelivr.net/npm/@fe-utils/string@latest/dist/string.iife.js) | [Link](https://unpkg.com/@fe-utils/string@latest/dist/string.iife.js) | `window.feUtilsString` |
| @fe-utils/object | [Link](https://cdn.jsdelivr.net/npm/@fe-utils/object@latest/dist/object.iife.js) | [Link](https://unpkg.com/@fe-utils/object@latest/dist/object.iife.js) | `window.feUtilsObject` |
| @fe-utils/function | [Link](https://cdn.jsdelivr.net/npm/@fe-utils/function@latest/dist/function.iife.js) | [Link](https://unpkg.com/@fe-utils/function@latest/dist/function.iife.js) | `window.feUtilsFunction` |
| @fe-utils/number | [Link](https://cdn.jsdelivr.net/npm/@fe-utils/number@latest/dist/number.iife.js) | [Link](https://unpkg.com/@fe-utils/number@latest/dist/number.iife.js) | `window.feUtilsNumber` |
| @fe-utils/date | [Link](https://cdn.jsdelivr.net/npm/@fe-utils/date@latest/dist/date.iife.js) | [Link](https://unpkg.com/@fe-utils/date@latest/dist/date.iife.js) | `window.feUtilsDate` |
| @fe-utils/dom | [Link](https://cdn.jsdelivr.net/npm/@fe-utils/dom@latest/dist/dom.iife.js) | [Link](https://unpkg.com/@fe-utils/dom@latest/dist/dom.iife.js) | `window.feUtilsDom` |
| @fe-utils/async | [Link](https://cdn.jsdelivr.net/npm/@fe-utils/async@latest/dist/async.iife.js) | [Link](https://unpkg.com/@fe-utils/async@latest/dist/async.iife.js) | `window.feUtilsAsync` |
| @fe-utils/core | [Link](https://cdn.jsdelivr.net/npm/@fe-utils/core@latest/dist/core.iife.js) | [Link](https://unpkg.com/@fe-utils/core@latest/dist/core.iife.js) | `window.feUtilsCore` |

### Specify Version

```html
<!-- Use specific version -->
<script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@1.0.0/dist/array.iife.js"></script>

<!-- Use latest version -->
<script src="https://cdn.jsdelivr.net/npm/@fe-utils/array@latest/dist/array.iife.js"></script>
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
