import { readFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

const packages = [
  'array',
  'string',
  'object',
  'number',
  'function',
  'date',
  'dom',
  'core',
  'async'
]

const errors = []
const warnings = []

console.log('🔍 Checking packages for publication...\n')

packages.forEach(pkgName => {
  const pkgPath = join(rootDir, 'packages', pkgName, 'package.json')
  
  if (!existsSync(pkgPath)) {
    errors.push(`❌ Package ${pkgName}: package.json not found`)
    return
  }
  
  const pkg = JSON.parse(readFileSync(pkgPath, 'utf-8'))
  
  console.log(`\n📦 Checking @lutlelk/${pkgName}...`)
  
  if (pkg.private) {
    errors.push(`❌ Package ${pkgName}: private is set to true`)
  } else {
    console.log('  ✓ Not private')
  }
  
  if (!pkg.publishConfig || pkg.publishConfig.access !== 'public') {
    errors.push(`❌ Package ${pkgName}: publishConfig.access is not set to 'public'`)
  } else {
    console.log('  ✓ publishConfig.access is public')
  }
  
  if (!pkg.description) {
    warnings.push(`⚠️  Package ${pkgName}: missing description`)
  } else {
    console.log(`  ✓ Has description: "${pkg.description.substring(0, 50)}..."`)
  }
  
  if (!pkg.keywords || pkg.keywords.length === 0) {
    warnings.push(`⚠️  Package ${pkgName}: missing keywords`)
  } else {
    console.log(`  ✓ Has ${pkg.keywords.length} keywords`)
  }
  
  if (!pkg.version) {
    errors.push(`❌ Package ${pkgName}: missing version`)
  } else {
    console.log(`  ✓ Version: ${pkg.version}`)
  }
  
  if (!pkg.main) {
    errors.push(`❌ Package ${pkgName}: missing main field`)
  } else {
    console.log(`  ✓ Main: ${pkg.main}`)
  }
  
  if (!pkg.module) {
    errors.push(`❌ Package ${pkgName}: missing module field`)
  } else {
    console.log(`  ✓ Module: ${pkg.module}`)
  }
  
  if (!pkg.types) {
    errors.push(`❌ Package ${pkgName}: missing types field`)
  } else {
    console.log(`  ✓ Types: ${pkg.types}`)
  }
  
  if (!pkg.exports) {
    errors.push(`❌ Package ${pkgName}: missing exports field`)
  } else {
    console.log('  ✓ Has exports')
  }
  
  const distPath = join(rootDir, 'packages', pkgName, 'dist')
  if (!existsSync(distPath)) {
    warnings.push(`⚠️  Package ${pkgName}: dist directory does not exist (run 'pnpm build' first)`)
  } else {
    console.log('  ✓ Dist directory exists')
  }
})

console.log('\n' + '='.repeat(60))

if (errors.length > 0) {
  console.log('\n❌ Errors found:')
  errors.forEach(error => console.log(`  ${error}`))
}

if (warnings.length > 0) {
  console.log('\n⚠️  Warnings:')
  warnings.forEach(warning => console.log(`  ${warning}`))
}

if (errors.length > 0) {
  console.log('\n❌ Publication check failed! Please fix the errors above.')
  process.exit(1)
} else if (warnings.length > 0) {
  console.log('\n✅ Publication check passed with warnings.')
  console.log('   You can publish, but consider fixing the warnings.')
} else {
  console.log('\n✅ All checks passed! Ready to publish.')
  console.log('\nNext steps:')
  console.log('  1. Run: pnpm build')
  console.log('  2. Run: pnpm changeset version')
  console.log('  3. Run: pnpm changeset publish')
}
