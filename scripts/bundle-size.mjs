#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'
import { gzipSync } from 'zlib'

const packagesDir = join(process.cwd(), 'packages')
const packages = readdirSync(packagesDir)

const results = []

for (const pkg of packages) {
  const distDir = join(packagesDir, pkg, 'dist')
  try {
    const files = readdirSync(distDir)
    const esmFile = files.find(f => f === 'index.js')
    const cjsFile = files.find(f => f === 'index.cjs')
    const dtsFile = files.find(f => f === 'index.d.ts')

    const result = {
      package: `@lutlelk/${pkg}`,
      esm: null,
      cjs: null,
      dts: null,
      esmGzip: null,
      cjsGzip: null
    }

    if (esmFile) {
      const esmPath = join(distDir, esmFile)
      const esmSize = statSync(esmPath).size
      const esmContent = readFileSync(esmPath)
      const esmGzipSize = gzipSync(esmContent).length

      result.esm = formatSize(esmSize)
      result.esmGzip = formatSize(esmGzipSize)
    }

    if (cjsFile) {
      const cjsPath = join(distDir, cjsFile)
      const cjsSize = statSync(cjsPath).size
      const cjsContent = readFileSync(cjsPath)
      const cjsGzipSize = gzipSync(cjsContent).length

      result.cjs = formatSize(cjsSize)
      result.cjsGzip = formatSize(cjsGzipSize)
    }

    if (dtsFile) {
      const dtsPath = join(distDir, dtsFile)
      const dtsSize = statSync(dtsPath).size
      result.dts = formatSize(dtsSize)
    }

    results.push(result)
  } catch (error) {
  }
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`
}

console.log('\n📦 包大小统计\n')
console.log('┌─────────────────────┬────────┬────────┬────────┬────────┬────────┐')
console.log('│ Package          │ ESM    │ CJS    │ ESM    │ CJS    │ Types  │')
console.log('│                  │ Size    │ Size    │ Gzip   │ Gzip   │ Size   │')
console.log('├─────────────────────┼────────┼────────┼────────┼────────┼────────┤')

for (const result of results) {
  const pkgName = result.package.padEnd(17)
  const esm = (result.esm || '-').padEnd(8)
  const cjs = (result.cjs || '-').padEnd(8)
  const esmGzip = (result.esmGzip || '-').padEnd(8)
  const cjsGzip = (result.cjsGzip || '-').padEnd(8)
  const dts = (result.dts || '-').padEnd(7)
  console.log(`│ ${pkgName} │ ${esm} │ ${cjs} │ ${esmGzip} │ ${cjsGzip} │ ${dts} │`)
}

console.log('└─────────────────────┴────────┴────────┴────────┴────────┴────────┘')

const totalESM = results.reduce((sum, r) => {
  if (!r.esm) return sum
  const sizeStr = r.esm.replace(' KB', '').replace(' B', '')
  return sum + parseFloat(sizeStr)
}, 0)

const totalCJS = results.reduce((sum, r) => {
  if (!r.cjs) return sum
  const sizeStr = r.cjs.replace(' KB', '').replace(' B', '')
  return sum + parseFloat(sizeStr)
}, 0)

console.log(`\n📊 总计`)
console.log(`   ESM 总大小: ${totalESM.toFixed(2)} KB`)
console.log(`   CJS 总大小: ${totalCJS.toFixed(2)} KB`)
console.log(`   总大小: ${(totalESM + totalCJS).toFixed(2)} KB`)
console.log(`   包数量: ${results.length}`)
console.log(`   平均大小: ${((totalESM + totalCJS) / results.length).toFixed(2)} KB\n`)
