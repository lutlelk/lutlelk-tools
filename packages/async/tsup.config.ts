import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    debounce: 'src/debounce.ts',
    throttle: 'src/throttle.ts',
    concurrency: 'src/concurrency.ts'
  },
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  minify: true,
  clean: true,
  target: 'es2020',
  splitting: false,
  shims: true,
  treeshake: true
})
