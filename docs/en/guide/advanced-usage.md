# Advanced Usage

## Single File On-Demand Import

lutlelk supports importing by function path for more granular on-demand loading and tree-shaking.

### Basic Usage

```ts
// Import a single function directly
import chunk from '@lutlelk/array/chunk'

const result = chunk([1, 2, 3, 4, 5], 2)
console.log(result) // [[1, 2], [3, 4], [5]]
```

### Multiple Function Imports

```ts
import chunk from '@lutlelk/array/chunk'
import toCamelCase from '@lutlelk/string/toCamelCase'
import deepClone from '@lutlelk/object/deepClone'
import debounce from '@lutlelk/function/debounce'
import isPrime from '@lutlelk/number/isPrime'
```

### Advantages

- **Smaller bundle size**: Only bundle used functions, exclude unused code
- **Faster build speed**: Reduce amount of code to process
- **Better tree-shaking effect**: Build tools can optimize code more precisely
- **Clearer dependencies**: Clearly know which functions are used

### Comparison

#### Regular Import

```ts
import { chunk, flatten, uniq } from '@lutlelk/array'

// Even if only using chunk, build tools might include the entire package
const result = chunk([1, 2, 3, 4, 5], 2)
```

#### Single File On-Demand Import

```ts
import chunk from '@lutlelk/array/chunk'

// Only bundle chunk function, exclude other functions
const result = chunk([1, 2, 3, 4, 5], 2)
```

### Available Single File Imports

#### @lutlelk/array

```ts
import chunk from '@lutlelk/array/chunk'
import flatten from '@lutlelk/array/flatten'
import uniq from '@lutlelk/array/uniq'
import groupBy from '@lutlelk/array/groupBy'
import sortBy from '@lutlelk/array/sortBy'
import find from '@lutlelk/array/find'
import map from '@lutlelk/array/map'
import filter from '@lutlelk/array/filter'
import reduce from '@lutlelk/array/reduce'
```

#### @lutlelk/string

```ts
import toCamelCase from '@lutlelk/string/toCamelCase'
import toKebabCase from '@lutlelk/string/toKebabCase'
import toSnakeCase from '@lutlelk/string/toSnakeCase'
import slugify from '@lutlelk/string/slugify'
import capitalize from '@lutlelk/string/capitalize'
import truncate from '@lutlelk/string/truncate'
import isEmail from '@lutlelk/string/isEmail'
import isUrl from '@lutlelk/string/isUrl'
```

#### @lutlelk/object

```ts
import get from '@lutlelk/object/get'
import set from '@lutlelk/object/set'
import pick from '@lutlelk/object/pick'
import omit from '@lutlelk/object/omit'
import merge from '@lutlelk/object/merge'
import deepMerge from '@lutlelk/object/deepMerge'
import clone from '@lutlelk/object/clone'
import deepClone from '@lutlelk/object/deepClone'
```

#### @lutlelk/function

```ts
import debounce from '@lutlelk/function/debounce'
import throttle from '@lutlelk/function/throttle'
import memoize from '@lutlelk/function/memoize'
import once from '@lutlelk/function/once'
import curry from '@lutlelk/function/curry'
import partial from '@lutlelk/function/partial'
import compose from '@lutlelk/function/compose'
```

#### @lutlelk/number

```ts
import clamp from '@lutlelk/number/clamp'
import random from '@lutlelk/number/random'
import randomInt from '@lutlelk/number/randomInt'
import range from '@lutlelk/number/range'
import round from '@lutlelk/number/round'
import format from '@lutlelk/number/format'
import toCurrency from '@lutlelk/number/toCurrency'
import toBytes from '@lutlelk/number/toBytes'
```

## CDN Usage

lutlelk provides IIFE format build files for direct browser usage via CDN.

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <title>lutlelk CDN Example</title>
</head>
<body>
  <!-- Import required packages -->
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

### CDN Sources

#### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/@lutlelk/array@latest/dist/array.iife.js"></script>
```

#### unpkg

```html
<script src="https://unpkg.com/@lutlelk/array@latest/dist/array.iife.js"></script>
```

### Available CDN Packages

| Package | jsDelivr | unpkg | Global Variable |
|---------|----------|-------|-----------------|
| @lutlelk/array | [Link](https://cdn.jsdelivr.net/npm/@lutlelk/array@latest/dist/array.iife.js) | [Link](https://unpkg.com/@lutlelk/array@latest/dist/array.iife.js) | `window.feUtilsArray` |
| @lutlelk/string | [Link](https://cdn.jsdelivr.net/npm/@lutlelk/string@latest/dist/string.iife.js) | [Link](https://unpkg.com/@lutlelk/string@latest/dist/string.iife.js) | `window.feUtilsString` |
| @lutlelk/object | [Link](https://cdn.jsdelivr.net/npm/@lutlelk/object@latest/dist/object.iife.js) | [Link](https://unpkg.com/@lutlelk/object@latest/dist/object.iife.js) | `window.feUtilsObject` |
| @lutlelk/function | [Link](https://cdn.jsdelivr.net/npm/@lutlelk/function@latest/dist/function.iife.js) | [Link](https://unpkg.com/@lutlelk/function@latest/dist/function.iife.js) | `window.feUtilsFunction` |
| @lutlelk/number | [Link](https://cdn.jsdelivr.net/npm/@lutlelk/number@latest/dist/number.iife.js) | [Link](https://unpkg.com/@lutlelk/number@latest/dist/number.iife.js) | `window.feUtilsNumber` |
| @lutlelk/date | [Link](https://cdn.jsdelivr.net/npm/@lutlelk/date@latest/dist/date.iife.js) | [Link](https://unpkg.com/@lutlelk/date@latest/dist/date.iife.js) | `window.feUtilsDate` |
| @lutlelk/dom | [Link](https://cdn.jsdelivr.net/npm/@lutlelk/dom@latest/dist/dom.iife.js) | [Link](https://unpkg.com/@lutlelk/dom@latest/dist/dom.iife.js) | `window.feUtilsDom` |
| @lutlelk/async | [Link](https://cdn.jsdelivr.net/npm/@lutlelk/async@latest/dist/async.iife.js) | [Link](https://unpkg.com/@lutlelk/async@latest/dist/async.iife.js) | `window.feUtilsAsync` |
| @lutlelk/core | [Link](https://cdn.jsdelivr.net/npm/@lutlelk/core@latest/dist/core.iife.js) | [Link](https://unpkg.com/@lutlelk/core@latest/dist/core.iife.js) | `window.feUtilsCore` |

### Specify Version

```html
<!-- Use specific version -->
<script src="https://cdn.jsdelivr.net/npm/@lutlelk/array@1.0.0/dist/array.iife.js"></script>

<!-- Use latest version -->
<script src="https://cdn.jsdelivr.net/npm/@lutlelk/array@latest/dist/array.iife.js"></script>
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
