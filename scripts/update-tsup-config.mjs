import { writeFileSync } from 'fs'
import { join } from 'path'

const packages = ['array', 'async', 'core', 'date', 'dom', 'fp', 'function', 'number', 'object', 'string']

const newConfig = `import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
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
`

for (const pkg of packages) {
  const configPath = join(process.cwd(), 'packages', pkg, 'tsup.config.ts')
  writeFileSync(configPath, newConfig)
  console.log(`✅ Updated ${pkg}/tsup.config.ts`)
}

console.log('\n✨ All tsup configs updated!')
