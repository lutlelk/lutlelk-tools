import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    debounce: 'src/debounce.ts',
    throttle: 'src/throttle.ts',
    memoize: 'src/memoize.ts',
    once: 'src/once.ts',
    partial: 'src/partial.ts',
    curry: 'src/curry.ts',
    compose: 'src/compose.ts',
    delay: 'src/delay.ts',
    retry: 'src/retry.ts'
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
