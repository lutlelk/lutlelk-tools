#!/usr/bin/env node

import { execSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const benchmarks = [
  'array/chunk.bench.ts',
  'string/string.bench.ts',
  'object/object.bench.ts',
  'function/function.bench.ts',
  'number/number.bench.ts'
]

console.log('='.repeat(60))
console.log('lutlelk Performance Benchmark')
console.log('='.repeat(60))
console.log()

for (const benchmark of benchmarks) {
  const benchmarkPath = path.join(__dirname, benchmark)
  console.log(`\nRunning: ${benchmark}`)
  console.log('-'.repeat(60))

  try {
    execSync(`npx tsx ${benchmarkPath}`, {
      stdio: 'inherit',
      cwd: __dirname
    })
  } catch (error) {
    console.error(`Error running ${benchmark}:`, error)
  }
}

console.log()
console.log('='.repeat(60))
console.log('All benchmarks completed!')
console.log('='.repeat(60))
