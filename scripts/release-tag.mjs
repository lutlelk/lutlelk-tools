import { execSync } from 'child_process'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

if (!GITHUB_TOKEN) {
  console.error('GITHUB_TOKEN is required')
  process.exit(1)
}

const packageJsonPath = join(process.cwd(), 'package.json')
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
const version = packageJson.version

console.log(`Creating release tag v${version}...`)

try {
  const tagName = `v${version}`
  
  execSync(`git tag -a ${tagName} -m "Release ${tagName}"`, { stdio: 'inherit' })
  execSync(`git push origin ${tagName}`, { stdio: 'inherit' })
  
  console.log(`✓ Successfully created and pushed tag ${tagName}`)
  
  const changelogPath = join(process.cwd(), 'CHANGELOG.md')
  let releaseNotes = `Release ${tagName}`
  
  if (existsSync(changelogPath)) {
    const changelog = readFileSync(changelogPath, 'utf-8')
    const match = changelog.match(new RegExp(`## \\[${version}\\][\\s\\S]*?(?=## \\[|$)`))
    if (match) {
      releaseNotes = match[0]
    }
  }
  
  execSync(`gh release create ${tagName} --title "${tagName}" --notes "${releaseNotes.replace(/"/g, '\\"')}"`, { 
    stdio: 'inherit',
    env: { ...process.env, GITHUB_TOKEN }
  })
  
  console.log(`✓ Successfully created GitHub release ${tagName}`)
} catch (error) {
  console.error('Error creating release tag:', error.message)
  process.exit(1)
}
