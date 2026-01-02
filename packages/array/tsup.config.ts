import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    chunk: 'src/chunk.ts',
    find: 'src/find.ts',
    flatten: 'src/flatten.ts',
    groupBy: 'src/groupBy.ts',
    sort: 'src/sort.ts',
    transform: 'src/transform.ts',
    uniq: 'src/uniq.ts'
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
