export type DateInput = Date | string | number

export type TimeUnit = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'

export type FormatToken =
  | 'YYYY'
  | 'YY'
  | 'MM'
  | 'M'
  | 'DD'
  | 'D'
  | 'HH'
  | 'H'
  | 'mm'
  | 'm'
  | 'ss'
  | 's'
  | 'SSS'
  | 'SS'
  | 'S'

export function parse(date: DateInput): Date {
  if (date instanceof Date) {
    return new Date(date)
  }
  if (typeof date === 'string') {
    const parsed = new Date(date)
    if (isNaN(parsed.getTime())) {
      throw new Error(`Invalid date string: ${date}`)
    }
    return parsed
  }
  if (typeof date === 'number') {
    return new Date(date)
  }
  throw new Error(`Invalid date input: ${date}`)
}

export function format(date: DateInput, formatStr: string = 'YYYY-MM-DD HH:mm:ss'): string {
  const d = parse(date)

  const tokens: Record<FormatToken, string> = {
    YYYY: d.getFullYear().toString(),
    YY: d.getFullYear().toString().slice(-2),
    MM: padZero(d.getMonth() + 1),
    M: (d.getMonth() + 1).toString(),
    DD: padZero(d.getDate()),
    D: d.getDate().toString(),
    HH: padZero(d.getHours()),
    H: d.getHours().toString(),
    mm: padZero(d.getMinutes()),
    m: d.getMinutes().toString(),
    ss: padZero(d.getSeconds()),
    s: d.getSeconds().toString(),
    SSS: padZero(d.getMilliseconds(), 3),
    SS: padZero(Math.floor(d.getMilliseconds() / 10)),
    S: Math.floor(d.getMilliseconds() / 100).toString()
  }

  let result = formatStr
  Object.entries(tokens).forEach(([token, value]) => {
    result = result.replace(new RegExp(token, 'g'), value)
  })

  return result
}

function padZero(num: number, length: number = 2): string {
  return num.toString().padStart(length, '0')
}

export function add(date: DateInput, amount: number, unit: TimeUnit): Date {
  const d = parse(date)
  const result = new Date(d)

  switch (unit) {
    case 'year':
      result.setFullYear(d.getFullYear() + amount)
      break
    case 'month':
      result.setMonth(d.getMonth() + amount)
      break
    case 'day':
      result.setDate(d.getDate() + amount)
      break
    case 'hour':
      result.setHours(d.getHours() + amount)
      break
    case 'minute':
      result.setMinutes(d.getMinutes() + amount)
      break
    case 'second':
      result.setSeconds(d.getSeconds() + amount)
      break
    case 'millisecond':
      result.setMilliseconds(d.getMilliseconds() + amount)
      break
  }

  return result
}

export function subtract(date: DateInput, amount: number, unit: TimeUnit): Date {
  return add(date, -amount, unit)
}

export function diff(date1: DateInput, date2: DateInput, unit: TimeUnit = 'millisecond'): number {
  const d1 = parse(date1)
  const d2 = parse(date2)
  const diffMs = d1.getTime() - d2.getTime()

  switch (unit) {
    case 'millisecond':
      return diffMs
    case 'second':
      return Math.floor(diffMs / 1000)
    case 'minute':
      return Math.floor(diffMs / (1000 * 60))
    case 'hour':
      return Math.floor(diffMs / (1000 * 60 * 60))
    case 'day':
      return Math.floor(diffMs / (1000 * 60 * 60 * 24))
    case 'month':
      const yearDiff = d1.getFullYear() - d2.getFullYear()
      const monthDiff = d1.getMonth() - d2.getMonth()
      return yearDiff * 12 + monthDiff
    case 'year':
      return d1.getFullYear() - d2.getFullYear()
    default:
      return diffMs
  }
}

export function startOf(date: DateInput, unit: TimeUnit): Date {
  const d = parse(date)
  const result = new Date(d)

  switch (unit) {
    case 'year':
      result.setMonth(0)
      result.setDate(1)
      result.setHours(0, 0, 0, 0)
      break
    case 'month':
      result.setDate(1)
      result.setHours(0, 0, 0, 0)
      break
    case 'day':
      result.setHours(0, 0, 0, 0)
      break
    case 'hour':
      result.setMinutes(0, 0, 0)
      break
    case 'minute':
      result.setSeconds(0, 0)
      break
    case 'second':
      result.setMilliseconds(0)
      break
    case 'millisecond':
      break
  }

  return result
}

export function endOf(date: DateInput, unit: TimeUnit): Date {
  const d = parse(date)
  const result = new Date(d)

  switch (unit) {
    case 'year':
      result.setMonth(11)
      result.setDate(31)
      result.setHours(23, 59, 59, 999)
      break
    case 'month':
      result.setMonth(d.getMonth() + 1)
      result.setDate(0)
      result.setHours(23, 59, 59, 999)
      break
    case 'day':
      result.setHours(23, 59, 59, 999)
      break
    case 'hour':
      result.setMinutes(59, 59, 999)
      break
    case 'minute':
      result.setSeconds(59, 999)
      break
    case 'second':
      result.setMilliseconds(999)
      break
    case 'millisecond':
      break
  }

  return result
}

export function isSame(date1: DateInput, date2: DateInput, unit?: TimeUnit): boolean {
  const d1 = parse(date1)
  const d2 = parse(date2)

  if (!unit) {
    return d1.getTime() === d2.getTime()
  }

  return diff(startOf(d1, unit), startOf(d2, unit), 'millisecond') === 0
}

export function isBefore(date1: DateInput, date2: DateInput, unit?: TimeUnit): boolean {
  const d1 = parse(date1)
  const d2 = parse(date2)

  if (!unit) {
    return d1.getTime() < d2.getTime()
  }

  return diff(startOf(d1, unit), startOf(d2, unit), 'millisecond') < 0
}

export function isAfter(date1: DateInput, date2: DateInput, unit?: TimeUnit): boolean {
  const d1 = parse(date1)
  const d2 = parse(date2)

  if (!unit) {
    return d1.getTime() > d2.getTime()
  }

  return diff(startOf(d1, unit), startOf(d2, unit), 'millisecond') > 0
}

export function isValid(date: DateInput): boolean {
  try {
    const d = parse(date)
    return !isNaN(d.getTime())
  } catch {
    return false
  }
}

export function now(): Date {
  return new Date()
}

export function today(): Date {
  return startOf(now(), 'day')
}

export function tomorrow(): Date {
  return add(today(), 1, 'day')
}

export function yesterday(): Date {
  return subtract(today(), 1, 'day')
}

export function getDaysInMonth(date: DateInput): number {
  const d = parse(date)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  return new Date(year, month, 0).getDate()
}

export function getDayOfYear(date: DateInput): number {
  const d = parse(date)
  const start = startOf(d, 'year')
  return diff(d, start, 'day') + 1
}

export function getWeekOfYear(date: DateInput): number {
  const d = parse(date)
  const start = startOf(d, 'year')
  const days = diff(d, start, 'day')
  return Math.ceil((days + start.getDay() + 1) / 7)
}

export function isLeapYear(date: DateInput): boolean {
  const d = parse(date)
  const year = d.getFullYear()
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export function isWeekend(date: DateInput): boolean {
  const d = parse(date)
  const day = d.getDay()
  return day === 0 || day === 6
}

export function isWeekday(date: DateInput): boolean {
  return !isWeekend(date)
}

export function min(...dates: DateInput[]): Date {
  return dates.reduce((result: Date, date) => {
    const d = parse(date)
    return d < result ? d : result
  }, parse(dates[0]))
}

export function max(...dates: DateInput[]): Date {
  return dates.reduce((result: Date, date) => {
    const d = parse(date)
    return d > result ? d : result
  }, parse(dates[0]))
}

export function clamp(date: DateInput, minDate: DateInput, maxDate: DateInput): Date {
  const d = parse(date)
  const minD = parse(minDate)
  const maxD = parse(maxDate)

  if (d < minD) return minD
  if (d > maxD) return maxD
  return d
}

export function isBetween(
  date: DateInput,
  startDate: DateInput,
  endDate: DateInput,
  inclusive: boolean = true
): boolean {
  const d = parse(date)
  const start = parse(startDate)
  const end = parse(endDate)

  if (inclusive) {
    return d >= start && d <= end
  }
  return d > start && d < end
}

export function range(startDate: DateInput, endDate: DateInput, unit: TimeUnit = 'day'): Date[] {
  const start = parse(startDate)
  const end = parse(endDate)
  const result: Date[] = []

  let current = new Date(start)
  while (current <= end) {
    result.push(new Date(current))
    current = add(current, 1, unit)
  }

  return result
}
