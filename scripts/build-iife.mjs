import { build } from 'esbuild'
import { mkdirSync, renameSync, existsSync } from 'fs'
import { join } from 'path'

const packages = [
  { name: 'array', globalName: 'FeUtilsArray' },
  { name: 'function', globalName: 'FeUtilsFunction' },
  { name: 'async', globalName: 'FeUtilsAsync' },
  { name: 'dom', globalName: 'FeUtilsDom' },
  { name: 'core', globalName: 'FeUtilsCore' },
  { name: 'date', globalName: 'FeUtilsDate' },
  { name: 'number', globalName: 'FeUtilsNumber' },
  { name: 'object', globalName: 'FeUtilsObject' },
  { name: 'string', globalName: 'FeUtilsString' }
]

async function buildIIFE() {
  for (const pkg of packages) {
    const entryPath = join(process.cwd(), 'packages', pkg.name, 'src', 'index.ts')
    const outputPath = join(process.cwd(), 'packages', pkg.name, 'dist', 'index.global.js')

    if (!existsSync(entryPath)) {
      console.log(`Skipping ${pkg.name}: entry file not found`)
      continue
    }

    try {
      await build({
        entryPoints: [entryPath],
        bundle: true,
        format: 'iife',
        globalName: pkg.globalName,
        outfile: outputPath,
        minify: true,
        target: 'es2020',
        sourcemap: false
      })
      console.log(`✓ Built IIFE for ${pkg.name}`)
    } catch (error) {
      console.error(`✗ Failed to build IIFE for ${pkg.name}:`, error)
    }
  }
}

buildIIFE()
