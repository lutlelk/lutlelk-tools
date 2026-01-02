export type StringInput = string | number | boolean | null | undefined

export function isBlank(value: unknown): boolean {
  if (value === null || value === undefined) return true
  if (typeof value === 'string') return value.trim().length === 0
  return false
}

export function isEmail(value: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value)
}

export function isUrl(value: string): boolean {
  try {
    new URL(value)
    return true
  } catch {
    return false
  }
}

export function isPhone(value: string, pattern: RegExp = /^1[3-9]\d{9}$/): boolean {
  return pattern.test(value)
}

export function isUUID(value: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
  return uuidRegex.test(value)
}

export function isHex(value: string): boolean {
  return /^[0-9a-fA-F]+$/.test(value)
}

export function isBase64(value: string): boolean {
  if (value.length === 0) return false
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/
  return base64Regex.test(value) && value.length % 4 === 0
}

export function isJson(value: string): boolean {
  try {
    JSON.parse(value)
    return true
  } catch {
    return false
  }
}

export function isNumeric(value: string): boolean {
  return /^-?\d*\.?\d+$/.test(value)
}

export function isAlpha(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value)
}

export function isAlphanumeric(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value)
}

export function isLowercase(value: string): boolean {
  return value === value.toLowerCase() && value !== value.toUpperCase()
}

export function isUppercase(value: string): boolean {
  return value === value.toUpperCase() && value !== value.toLowerCase()
}

export function startsWith(value: string, search: string, position: number = 0): boolean {
  return value.startsWith(search, position)
}

export function endsWith(value: string, search: string, length?: number): boolean {
  return value.endsWith(search, length)
}

export function includes(value: string, search: string, position?: number): boolean {
  return value.includes(search, position)
}

export function contains(value: string, search: string): boolean {
  return value.includes(search)
}

export function equals(value: string, other: string, ignoreCase: boolean = false): boolean {
  if (ignoreCase) {
    return value.toLowerCase() === other.toLowerCase()
  }
  return value === other
}

export function toCamelCase(value: string): string {
  return value
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''))
    .replace(/^(.)/, char => char.toLowerCase())
}

export function toPascalCase(value: string): string {
  const camelCase = toCamelCase(value)
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1)
}

export function toKebabCase(value: string): string {
  return value
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

export function toSnakeCase(value: string): string {
  return value
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase()
}

export function toCapitalCase(value: string): string {
  return value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? ' ' + char.toUpperCase() : ''))
    .replace(/^(.)/, char => char.toUpperCase())
    .trim()
}

export function toSentenceCase(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

export function toLowerCase(value: string): string {
  return value.toLowerCase()
}

export function toUpperCase(value: string): string {
  return value.toUpperCase()
}

export function toTitleCase(value: string): string {
  return value.replace(/\w+/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

export function trim(value: string, chars?: string): string {
  if (chars) {
    const regex = new RegExp(`^[${chars}]+|[${chars}]+$`, 'g')
    return value.replace(regex, '')
  }
  return value.trim()
}

export function trimStart(value: string, chars?: string): string {
  if (chars) {
    const regex = new RegExp(`^[${chars}]+`, 'g')
    return value.replace(regex, '')
  }
  return value.trimStart()
}

export function trimEnd(value: string, chars?: string): string {
  if (chars) {
    const regex = new RegExp(`[${chars}]+$`, 'g')
    return value.replace(regex, '')
  }
  return value.trimEnd()
}

export function truncate(value: string, length: number, omission: string = '...'): string {
  if (value.length <= length) return value
  return value.slice(0, length - omission.length) + omission
}

export function pad(value: string, length: number, char: string = ' '): string {
  const totalPadding = length - value.length
  if (totalPadding <= 0) return value
  const leftPadding = Math.floor(totalPadding / 2)
  const rightPadding = totalPadding - leftPadding
  return char.repeat(leftPadding) + value + char.repeat(rightPadding)
}

export function padStart(value: string, length: number, char: string = ' '): string {
  return value.padStart(length, char)
}

export function padEnd(value: string, length: number, char: string = ' '): string {
  return value.padEnd(length, char)
}

export function repeat(value: string, count: number): string {
  return value.repeat(count)
}

export function replace(value: string, search: string | RegExp, replacement: string): string {
  return value.replace(search, replacement)
}

export function replaceAll(value: string, search: string | RegExp, replacement: string): string {
  if (typeof search === 'string') {
    return value.split(search).join(replacement)
  }
  return value.replace(search, replacement)
}

export function slice(value: string, start?: number, end?: number): string {
  return value.slice(start, end)
}

export function substring(value: string, start: number, end?: number): string {
  return value.substring(start, end)
}

export function split(value: string, separator: string | RegExp, limit?: number): string[] {
  return value.split(separator, limit)
}

export function join(values: string[], separator: string = ''): string {
  return values.join(separator)
}

export function reverse(value: string): string {
  return value.split('').reverse().join('')
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function uncapitalize(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1)
}

export function length(value: string): number {
  return value.length
}

export function size(value: string): number {
  return value.length
}

export function charAt(value: string, index: number): string {
  return value.charAt(index)
}

export function charCodeAt(value: string, index: number): number {
  return value.charCodeAt(index)
}

export function indexOf(value: string, search: string, fromIndex?: number): number {
  return value.indexOf(search, fromIndex)
}

export function lastIndexOf(value: string, search: string, fromIndex?: number): number {
  return value.lastIndexOf(search, fromIndex)
}

export function count(value: string, search: string): number {
  return value.split(search).length - 1
}

export function countWords(value: string): number {
  return value.trim().split(/\s+/).filter(word => word.length > 0).length
}

export function countChars(value: string, char: string): number {
  return value.split(char).length - 1
}

export function first(value: string, n: number = 1): string {
  return value.slice(0, n)
}

export function last(value: string, n: number = 1): string {
  return value.slice(-n)
}

export function initial(value: string, n: number = 1): string {
  return value.slice(0, -n)
}

export function rest(value: string, n: number = 1): string {
  return value.slice(n)
}

export function nth(value: string, index: number): string {
  return value.charAt(index)
}

export function insert(value: string, index: number, substring: string): string {
  return value.slice(0, index) + substring + value.slice(index)
}

export function remove(value: string, search: string | RegExp): string {
  return value.replace(search, '')
}

export function removeAll(value: string, search: string | RegExp): string {
  if (typeof search === 'string') {
    return value.split(search).join('')
  }
  return value.replace(search, '')
}

export function before(value: string, search: string): string {
  const index = value.indexOf(search)
  return index === -1 ? value : value.slice(0, index)
}

export function after(value: string, search: string): string {
  const index = value.indexOf(search)
  return index === -1 ? '' : value.slice(index + search.length)
}

export function between(value: string, start: string, end: string): string {
  const startIndex = value.indexOf(start)
  const endIndex = value.indexOf(end, startIndex + start.length)

  if (startIndex === -1 || endIndex === -1) return ''
  return value.slice(startIndex + start.length, endIndex)
}

export function words(value: string, pattern?: RegExp): string[] {
  const regex = pattern || /\w+/g
  return value.match(regex) || []
}

export function chars(value: string): string[] {
  return value.split('')
}

export function lines(value: string): string[] {
  return value.split(/\r?\n/)
}

export function template(value: string, data: Record<string, unknown>): string {
  return value.replace(/\{\{(\w+)\}\}/g, (_, key) => String(data[key] ?? ''))
}

export function interpolate(value: string, data: Record<string, unknown>): string {
  return value.replace(/\$\{(\w+)\}/g, (_, key) => String(data[key] ?? ''))
}

export function format(value: string, ...args: unknown[]): string {
  return value.replace(/\{(\d+)\}/g, (_, index) => String(args[Number(index)] ?? ''))
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function escape(value: string): string {
  const escapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }
  return value.replace(/[&<>"']/g, char => escapeMap[char])
}

export function unescape(value: string): string {
  const unescapeMap: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'"
  }
  return value.replace(/&(amp|lt|gt|quot|#39);/g, entity => unescapeMap[entity])
}

export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function stripTags(value: string): string {
  return value.replace(/<[^>]*>/g, '')
}

export function stripHtml(value: string): string {
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

export function encodeBase64(value: string): string {
  if (typeof btoa !== 'undefined') {
    try {
      return btoa(value)
    } catch {
      return btoa(unescape(encodeURIComponent(value)))
    }
  }
  return Buffer.from(value).toString('base64')
}

export function decodeBase64(value: string): string {
  if (typeof atob !== 'undefined') {
    return decodeURIComponent(escape(atob(value)))
  }
  return Buffer.from(value, 'base64').toString()
}

export function encodeURI(value: string): string {
  return encodeURIComponent(value)
}

export function decodeURI(value: string): string {
  return decodeURIComponent(value)
}

export function hashCode(value: string): number {
  let hash = 0
  for (let i = 0; i < value.length; i++) {
    const char = value.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash
  }
  return hash
}

export function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, char => {
    const random = (Math.random() * 16) | 0
    const value = char === 'x' ? random : (random & 0x3) | 0x8
    return value.toString(16)
  })
}

export function random(length: number = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function randomNumeric(length: number = 16): string {
  const chars = '0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function randomAlpha(length: number = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function randomAlphaNumeric(length: number = 16): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function randomHex(length: number = 16): string {
  const chars = '0123456789abcdef'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function mask(value: string, visibleChars: number = 4, maskChar: string = '*'): string {
  if (value.length <= visibleChars) return value
  const masked = value.slice(0, -visibleChars).replace(/./g, maskChar)
  return masked + value.slice(-visibleChars)
}

export function maskEmail(email: string, maskChar: string = '*'): string {
  const [username, domain] = email.split('@')
  if (!domain) return email
  if (username.length <= 2) return email
  const maskedUsername = username.slice(0, 2) + maskChar.repeat(username.length - 2)
  return `${maskedUsername}@${domain}`
}

export function maskPhone(phone: string, maskChar: string = '*'): string {
  if (phone.length < 7) return phone
  return phone.slice(0, 3) + maskChar.repeat(4) + phone.slice(-4)
}

export function abbreviate(value: string, length: number = 10): string {
  if (value.length <= length) return value
  return value.slice(0, length) + '.'
}

export function initials(value: string): string {
  return value
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase())
    .join('')
}

export function swapCase(value: string): string {
  return value
    .split('')
    .map(char => {
      if (char === char.toUpperCase()) return char.toLowerCase()
      return char.toUpperCase()
    })
    .join('')
}

export function shuffle(value: string): string {
  const chars = value.split('')
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[chars[i], chars[j]] = [chars[j], chars[i]]
  }
  return chars.join('')
}

export function ensurePrefix(value: string, prefix: string): string {
  return value.startsWith(prefix) ? value : prefix + value
}

export function ensureSuffix(value: string, suffix: string): string {
  return value.endsWith(suffix) ? value : value + suffix
}

export function stripPrefix(value: string, prefix: string): string {
  return value.startsWith(prefix) ? value.slice(prefix.length) : value
}

export function stripSuffix(value: string, suffix: string): string {
  return value.endsWith(suffix) ? value.slice(0, -suffix.length) : value
}

export function dedent(value: string): string {
  const lines = value.split('\n')
  const minIndent = Math.min(
    ...lines
      .filter(line => line.trim().length > 0)
      .map(line => line.match(/^\s*/)?.[0]?.length || 0)
  )
  return lines.map(line => line.slice(minIndent)).join('\n')
}

export function indent(value: string, indent: string = '  ', count: number = 1): string {
  if (!value) return value
  const prefix = indent.repeat(count)
  return value.split('\n').map(line => prefix + line).join('\n')
}

export function wrap(value: string, width: number = 80, separator: string = '\n'): string {
  const words = value.split(/\s+/)
  const lines: string[] = []
  let currentLine = ''

  for (const word of words) {
    if (currentLine.length + word.length + 1 <= width) {
      currentLine += (currentLine ? ' ' : '') + word
    } else {
      if (currentLine) lines.push(currentLine)
      currentLine = word
    }
  }
  if (currentLine) lines.push(currentLine)

  return lines.join(separator)
}

export function toString(value: StringInput): string {
  if (value === null || value === undefined) return ''
  return String(value)
}
