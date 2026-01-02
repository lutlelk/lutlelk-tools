import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    selector: 'src/selector.ts',
    class: 'src/class.ts',
    attr: 'src/attr.ts',
    style: 'src/style.ts',
    element: 'src/element.ts',
    event: 'src/event.ts',
    util: 'src/util.ts'
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
