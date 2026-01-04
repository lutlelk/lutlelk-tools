# Benchmark

This directory contains performance benchmarks comparing lutlelk with lodash and other popular utility libraries.

## Running Benchmarks

### Run all benchmarks

```bash
pnpm benchmark
```

### Run individual benchmarks

```bash
# Array benchmarks
npx tsx benchmark/array/chunk.bench.ts

# String benchmarks
npx tsx benchmark/string/string.bench.ts

# Object benchmarks
npx tsx benchmark/object/object.bench.ts

# Function benchmarks
npx tsx benchmark/function/function.bench.ts

# Number benchmarks
npx tsx benchmark/number/number.bench.ts
```

## Benchmark Results

The benchmarks compare lutlelk with lodash on various operations:

### Array Operations
- `chunk`: Split array into chunks
- Performance comparison on large arrays (10,000+ elements)

### String Operations
- `toCamelCase`: Convert to camelCase
- `toKebabCase`: Convert to kebab-case
- `slugify`: Create URL-friendly slugs

### Object Operations
- `deepClone`: Deep clone objects
- `pick`: Select specific keys
- `omit`: Remove specific keys

### Function Operations
- `debounce`: Debounce function calls
- `throttle`: Throttle function calls
- `memoize`: Cache function results

### Number Operations
- `clamp`: Clamp numbers between min and max
- `random`: Generate random numbers
- `range`: Generate number ranges

## Expected Results

lutlelk is designed to be:
- **Lightweight**: Smaller bundle size
- **Fast**: Optimized for common use cases
- **Tree-shakeable**: Only bundle what you use
- **Type-safe**: Full TypeScript support

While lodash provides a comprehensive API with many edge cases handled, lutlelk focuses on:
- Simpler, more focused implementations
- Better tree-shaking support
- Smaller bundle sizes
- Modern JavaScript/TypeScript features

## Running Your Own Benchmarks

To add new benchmarks:

1. Create a new `.bench.ts` file in the appropriate directory
2. Import the functions to compare
3. Set up a Benchmark.Suite
4. Run the benchmark

Example:

```typescript
import Benchmark from 'benchmark'
import { myFunction } from '@lutlelk/my-package'
import { myFunction as lodashFunction } from 'lodash'

const suite = new Benchmark.Suite()

suite
  .add('@lutlelk/myFunction', function () {
    myFunction(testData)
  })
  .add('lodash/myFunction', function () {
    lodashFunction(testData)
  })
  .on('cycle', function (event) {
    console.log(String(event.target))
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run({ async: true })
```

## Notes

- Benchmarks are run on Node.js environment
- Results may vary based on hardware and Node.js version
- Always run benchmarks multiple times to get consistent results
- Consider real-world usage patterns when interpreting results
