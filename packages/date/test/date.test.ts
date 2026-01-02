import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import {
  parse,
  format,
  add,
  subtract,
  diff,
  startOf,
  endOf,
  isSame,
  isBefore,
  isAfter,
  isValid,
  now,
  today,
  tomorrow,
  yesterday,
  getDaysInMonth,
  getDayOfYear,
  getWeekOfYear,
  isLeapYear,
  isWeekend,
  isWeekday,
  min,
  max,
  clamp,
  isBetween,
  range
} from '../src'

describe('parse', () => {
  it('应该解析 Date 对象', () => {
    const date = new Date(2024, 0, 1)
    const result = parse(date)
    expect(result).toEqual(date)
    expect(result).not.toBe(date)
  })

  it('应该解析日期字符串', () => {
    const result = parse('2024-01-01')
    expect(result.getFullYear()).toBe(2024)
    expect(result.getMonth()).toBe(0)
    expect(result.getDate()).toBe(1)
  })

  it('应该解析时间戳', () => {
    const timestamp = 1704067200000
    const result = parse(timestamp)
    expect(result.getTime()).toBe(timestamp)
  })

  it('应该抛出无效日期字符串的错误', () => {
    expect(() => parse('invalid-date')).toThrow('Invalid date string')
  })
})

describe('format', () => {
  it('应该格式化日期为默认格式', () => {
    const date = new Date(2024, 0, 1, 12, 30, 45, 123)
    const result = format(date)
    expect(result).toBe('2024-01-01 12:30:45')
  })

  it('应该支持自定义格式', () => {
    const date = new Date(2024, 0, 1, 12, 30, 45, 123)
    expect(format(date, 'YYYY-MM-DD')).toBe('2024-01-01')
    expect(format(date, 'YYYY/MM/DD HH:mm')).toBe('2024/01/01 12:30')
    expect(format(date, 'YY-M-D H:m:s')).toBe('24-1-1 12:30:45')
  })

  it('应该正确处理毫秒', () => {
    const date = new Date(2024, 0, 1, 0, 0, 0, 123)
    expect(format(date, 'SSS')).toBe('123')
    expect(format(date, 'SS')).toBe('12')
    expect(format(date, 'S')).toBe('1')
  })
})

describe('add', () => {
  it('应该添加年份', () => {
    const date = new Date(2024, 0, 1)
    const result = add(date, 1, 'year')
    expect(result.getFullYear()).toBe(2025)
  })

  it('应该添加月份', () => {
    const date = new Date(2024, 0, 1)
    const result = add(date, 2, 'month')
    expect(result.getMonth()).toBe(2)
  })

  it('应该跨年添加月份', () => {
    const date = new Date(2024, 11, 1)
    const result = add(date, 2, 'month')
    expect(result.getFullYear()).toBe(2025)
    expect(result.getMonth()).toBe(1)
  })

  it('应该添加天数', () => {
    const date = new Date(2024, 0, 1)
    const result = add(date, 10, 'day')
    expect(result.getDate()).toBe(11)
  })

  it('应该添加小时', () => {
    const date = new Date(2024, 0, 1, 10, 0)
    const result = add(date, 5, 'hour')
    expect(result.getHours()).toBe(15)
  })

  it('应该添加分钟', () => {
    const date = new Date(2024, 0, 1, 0, 30)
    const result = add(date, 30, 'minute')
    expect(result.getMinutes()).toBe(0)
    expect(result.getHours()).toBe(1)
  })

  it('应该添加秒', () => {
    const date = new Date(2024, 0, 1, 0, 0, 30)
    const result = add(date, 30, 'second')
    expect(result.getSeconds()).toBe(0)
    expect(result.getMinutes()).toBe(1)
  })

  it('应该添加毫秒', () => {
    const date = new Date(2024, 0, 1, 0, 0, 0, 500)
    const result = add(date, 500, 'millisecond')
    expect(result.getMilliseconds()).toBe(0)
    expect(result.getSeconds()).toBe(1)
  })
})

describe('subtract', () => {
  it('应该减去年份', () => {
    const date = new Date(2024, 0, 1)
    const result = subtract(date, 1, 'year')
    expect(result.getFullYear()).toBe(2023)
  })

  it('应该减去月份', () => {
    const date = new Date(2024, 5, 1)
    const result = subtract(date, 2, 'month')
    expect(result.getMonth()).toBe(3)
  })

  it('应该跨年减去月份', () => {
    const date = new Date(2024, 1, 1)
    const result = subtract(date, 2, 'month')
    expect(result.getFullYear()).toBe(2023)
    expect(result.getMonth()).toBe(11)
  })
})

describe('diff', () => {
  it('应该计算毫秒差', () => {
    const date1 = new Date(2024, 0, 1, 0, 0, 0, 100)
    const date2 = new Date(2024, 0, 1, 0, 0, 0, 0)
    expect(diff(date1, date2, 'millisecond')).toBe(100)
  })

  it('应该计算秒差', () => {
    const date1 = new Date(2024, 0, 1, 0, 0, 10)
    const date2 = new Date(2024, 0, 1, 0, 0, 0)
    expect(diff(date1, date2, 'second')).toBe(10)
  })

  it('应该计算分钟差', () => {
    const date1 = new Date(2024, 0, 1, 0, 30, 0)
    const date2 = new Date(2024, 0, 1, 0, 0, 0)
    expect(diff(date1, date2, 'minute')).toBe(30)
  })

  it('应该计算小时差', () => {
    const date1 = new Date(2024, 0, 1, 12, 0, 0)
    const date2 = new Date(2024, 0, 1, 0, 0, 0)
    expect(diff(date1, date2, 'hour')).toBe(12)
  })

  it('应该计算天数差', () => {
    const date1 = new Date(2024, 0, 2)
    const date2 = new Date(2024, 0, 1)
    expect(diff(date1, date2, 'day')).toBe(1)
  })

  it('应该计算月份差', () => {
    const date1 = new Date(2024, 5, 1)
    const date2 = new Date(2024, 0, 1)
    expect(diff(date1, date2, 'month')).toBe(5)
  })

  it('应该计算年份差', () => {
    const date1 = new Date(2025, 0, 1)
    const date2 = new Date(2024, 0, 1)
    expect(diff(date1, date2, 'year')).toBe(1)
  })

  it('应该处理负数差值', () => {
    const date1 = new Date(2024, 0, 1)
    const date2 = new Date(2024, 0, 2)
    expect(diff(date1, date2, 'day')).toBe(-1)
  })
})

describe('startOf', () => {
  it('应该返回年份的开始', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = startOf(date, 'year')
    expect(result.getFullYear()).toBe(2024)
    expect(result.getMonth()).toBe(0)
    expect(result.getDate()).toBe(1)
    expect(result.getHours()).toBe(0)
    expect(result.getMinutes()).toBe(0)
    expect(result.getSeconds()).toBe(0)
    expect(result.getMilliseconds()).toBe(0)
  })

  it('应该返回月份的开始', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = startOf(date, 'month')
    expect(result.getFullYear()).toBe(2024)
    expect(result.getMonth()).toBe(5)
    expect(result.getDate()).toBe(1)
    expect(result.getHours()).toBe(0)
    expect(result.getMinutes()).toBe(0)
    expect(result.getSeconds()).toBe(0)
    expect(result.getMilliseconds()).toBe(0)
  })

  it('应该返回日期的开始', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = startOf(date, 'day')
    expect(result.getHours()).toBe(0)
    expect(result.getMinutes()).toBe(0)
    expect(result.getSeconds()).toBe(0)
    expect(result.getMilliseconds()).toBe(0)
  })

  it('应该返回小时的开始', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = startOf(date, 'hour')
    expect(result.getMinutes()).toBe(0)
    expect(result.getSeconds()).toBe(0)
    expect(result.getMilliseconds()).toBe(0)
  })

  it('应该返回分钟的开始', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = startOf(date, 'minute')
    expect(result.getSeconds()).toBe(0)
    expect(result.getMilliseconds()).toBe(0)
  })

  it('应该返回秒的开始', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45, 123)
    const result = startOf(date, 'second')
    expect(result.getMilliseconds()).toBe(0)
  })
})

describe('endOf', () => {
  it('应该返回年份的结束', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = endOf(date, 'year')
    expect(result.getFullYear()).toBe(2024)
    expect(result.getMonth()).toBe(11)
    expect(result.getDate()).toBe(31)
    expect(result.getHours()).toBe(23)
    expect(result.getMinutes()).toBe(59)
    expect(result.getSeconds()).toBe(59)
    expect(result.getMilliseconds()).toBe(999)
  })

  it('应该返回月份的结束', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = endOf(date, 'month')
    expect(result.getFullYear()).toBe(2024)
    expect(result.getMonth()).toBe(5)
    expect(result.getDate()).toBe(30)
    expect(result.getHours()).toBe(23)
    expect(result.getMinutes()).toBe(59)
    expect(result.getSeconds()).toBe(59)
    expect(result.getMilliseconds()).toBe(999)
  })

  it('应该返回日期的结束', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = endOf(date, 'day')
    expect(result.getHours()).toBe(23)
    expect(result.getMinutes()).toBe(59)
    expect(result.getSeconds()).toBe(59)
    expect(result.getMilliseconds()).toBe(999)
  })

  it('应该返回小时的结束', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = endOf(date, 'hour')
    expect(result.getMinutes()).toBe(59)
    expect(result.getSeconds()).toBe(59)
    expect(result.getMilliseconds()).toBe(999)
  })

  it('应该返回分钟的结束', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45)
    const result = endOf(date, 'minute')
    expect(result.getSeconds()).toBe(59)
    expect(result.getMilliseconds()).toBe(999)
  })

  it('应该返回秒的结束', () => {
    const date = new Date(2024, 5, 15, 12, 30, 45, 123)
    const result = endOf(date, 'second')
    expect(result.getMilliseconds()).toBe(999)
  })
})

describe('isSame', () => {
  it('应该判断完全相同的日期', () => {
    const date1 = new Date(2024, 0, 1, 12, 30, 45)
    const date2 = new Date(2024, 0, 1, 12, 30, 45)
    expect(isSame(date1, date2)).toBe(true)
  })

  it('应该判断相同的年份', () => {
    const date1 = new Date(2024, 5, 15, 12, 30, 45)
    const date2 = new Date(2024, 11, 31, 23, 59, 59)
    expect(isSame(date1, date2, 'year')).toBe(true)
  })

  it('应该判断相同的月份', () => {
    const date1 = new Date(2024, 5, 1, 0, 0, 0)
    const date2 = new Date(2024, 5, 30, 23, 59, 59)
    expect(isSame(date1, date2, 'month')).toBe(true)
  })

  it('应该判断不同的日期', () => {
    const date1 = new Date(2024, 0, 1)
    const date2 = new Date(2024, 0, 2)
    expect(isSame(date1, date2)).toBe(false)
  })
})

describe('isBefore', () => {
  it('应该判断日期是否在之前', () => {
    const date1 = new Date(2024, 0, 1)
    const date2 = new Date(2024, 0, 2)
    expect(isBefore(date1, date2)).toBe(true)
    expect(isBefore(date2, date1)).toBe(false)
  })

  it('应该判断同一年份的不同月份', () => {
    const date1 = new Date(2024, 0, 1)
    const date2 = new Date(2024, 5, 1)
    expect(isBefore(date1, date2, 'month')).toBe(true)
  })
})

describe('isAfter', () => {
  it('应该判断日期是否在之后', () => {
    const date1 = new Date(2024, 0, 2)
    const date2 = new Date(2024, 0, 1)
    expect(isAfter(date1, date2)).toBe(true)
    expect(isAfter(date2, date1)).toBe(false)
  })

  it('应该判断同一年份的不同月份', () => {
    const date1 = new Date(2024, 5, 1)
    const date2 = new Date(2024, 0, 1)
    expect(isAfter(date1, date2, 'month')).toBe(true)
  })
})

describe('isValid', () => {
  it('应该验证有效的日期', () => {
    expect(isValid(new Date())).toBe(true)
    expect(isValid('2024-01-01')).toBe(true)
    expect(isValid(1704067200000)).toBe(true)
  })

  it('应该验证无效的日期', () => {
    expect(isValid('invalid-date')).toBe(false)
    expect(isValid(NaN)).toBe(false)
  })
})

describe('now', () => {
  it('应该返回当前时间', () => {
    const result = now()
    expect(result).toBeInstanceOf(Date)
    expect(Math.abs(result.getTime() - Date.now())).toBeLessThan(100)
  })
})

describe('today', () => {
  it('应该返回今天的开始', () => {
    const result = today()
    expect(result.getHours()).toBe(0)
    expect(result.getMinutes()).toBe(0)
    expect(result.getSeconds()).toBe(0)
    expect(result.getMilliseconds()).toBe(0)
  })
})

describe('tomorrow', () => {
  it('应该返回明天的开始', () => {
    const result = tomorrow()
    const todayDate = today()
    expect(diff(result, todayDate, 'day')).toBe(1)
  })
})

describe('yesterday', () => {
  it('应该返回昨天的开始', () => {
    const result = yesterday()
    const todayDate = today()
    expect(diff(result, todayDate, 'day')).toBe(-1)
  })
})

describe('getDaysInMonth', () => {
  it('应该返回31天的月份', () => {
    expect(getDaysInMonth(new Date(2024, 0, 1))).toBe(31)
    expect(getDaysInMonth(new Date(2024, 2, 1))).toBe(31)
    expect(getDaysInMonth(new Date(2024, 4, 1))).toBe(31)
    expect(getDaysInMonth(new Date(2024, 6, 1))).toBe(31)
    expect(getDaysInMonth(new Date(2024, 7, 1))).toBe(31)
    expect(getDaysInMonth(new Date(2024, 9, 1))).toBe(31)
    expect(getDaysInMonth(new Date(2024, 11, 1))).toBe(31)
  })

  it('应该返回30天的月份', () => {
    expect(getDaysInMonth(new Date(2024, 3, 1))).toBe(30)
    expect(getDaysInMonth(new Date(2024, 5, 1))).toBe(30)
    expect(getDaysInMonth(new Date(2024, 8, 1))).toBe(30)
    expect(getDaysInMonth(new Date(2024, 10, 1))).toBe(30)
  })

  it('应该正确处理闰年二月', () => {
    expect(getDaysInMonth(new Date(2024, 1, 1))).toBe(29)
    expect(getDaysInMonth(new Date(2023, 1, 1))).toBe(28)
  })
})

describe('getDayOfYear', () => {
  it('应该返回一年中的第几天', () => {
    expect(getDayOfYear(new Date(2024, 0, 1))).toBe(1)
    expect(getDayOfYear(new Date(2024, 0, 31))).toBe(31)
    expect(getDayOfYear(new Date(2024, 1, 1))).toBe(32)
    expect(getDayOfYear(new Date(2024, 11, 31))).toBe(366)
  })
})

describe('getWeekOfYear', () => {
  it('应该返回一年中的第几周', () => {
    expect(getWeekOfYear(new Date(2024, 0, 1))).toBe(1)
    expect(getWeekOfYear(new Date(2024, 0, 7))).toBe(2)
  })
})

describe('isLeapYear', () => {
  it('应该识别闰年', () => {
    expect(isLeapYear(new Date(2024, 0, 1))).toBe(true)
    expect(isLeapYear(new Date(2020, 0, 1))).toBe(true)
    expect(isLeapYear(new Date(2000, 0, 1))).toBe(true)
  })

  it('应该识别非闰年', () => {
    expect(isLeapYear(new Date(2023, 0, 1))).toBe(false)
    expect(isLeapYear(new Date(2022, 0, 1))).toBe(false)
    expect(isLeapYear(new Date(1900, 0, 1))).toBe(false)
  })
})

describe('isWeekend', () => {
  it('应该识别周末', () => {
    expect(isWeekend(new Date(2024, 0, 7))).toBe(true)
    expect(isWeekend(new Date(2024, 0, 6))).toBe(true)
  })

  it('应该识别工作日', () => {
    expect(isWeekend(new Date(2024, 0, 1))).toBe(false)
    expect(isWeekend(new Date(2024, 0, 2))).toBe(false)
  })
})

describe('isWeekday', () => {
  it('应该识别工作日', () => {
    expect(isWeekday(new Date(2024, 0, 1))).toBe(true)
    expect(isWeekday(new Date(2024, 0, 2))).toBe(true)
  })

  it('应该识别周末', () => {
    expect(isWeekday(new Date(2024, 0, 7))).toBe(false)
    expect(isWeekday(new Date(2024, 0, 6))).toBe(false)
  })
})

describe('min', () => {
  it('应该返回最小的日期', () => {
    const date1 = new Date(2024, 0, 1)
    const date2 = new Date(2024, 0, 2)
    const date3 = new Date(2024, 0, 3)
    const result = min(date2, date1, date3)
    expect(result).toEqual(date1)
  })
})

describe('max', () => {
  it('应该返回最大的日期', () => {
    const date1 = new Date(2024, 0, 1)
    const date2 = new Date(2024, 0, 2)
    const date3 = new Date(2024, 0, 3)
    const result = max(date2, date1, date3)
    expect(result).toEqual(date3)
  })
})

describe('clamp', () => {
  it('应该返回范围内的日期', () => {
    const date = new Date(2024, 0, 15)
    const minDate = new Date(2024, 0, 1)
    const maxDate = new Date(2024, 0, 31)
    const result = clamp(date, minDate, maxDate)
    expect(result).toEqual(date)
  })

  it('应该返回最小值', () => {
    const date = new Date(2023, 11, 31)
    const minDate = new Date(2024, 0, 1)
    const maxDate = new Date(2024, 0, 31)
    const result = clamp(date, minDate, maxDate)
    expect(result).toEqual(minDate)
  })

  it('应该返回最大值', () => {
    const date = new Date(2024, 1, 1)
    const minDate = new Date(2024, 0, 1)
    const maxDate = new Date(2024, 0, 31)
    const result = clamp(date, minDate, maxDate)
    expect(result).toEqual(maxDate)
  })
})

describe('isBetween', () => {
  it('应该判断日期是否在范围内（包含边界）', () => {
    const date = new Date(2024, 0, 15)
    const startDate = new Date(2024, 0, 1)
    const endDate = new Date(2024, 0, 31)
    expect(isBetween(date, startDate, endDate)).toBe(true)
    expect(isBetween(startDate, startDate, endDate)).toBe(true)
    expect(isBetween(endDate, startDate, endDate)).toBe(true)
  })

  it('应该判断日期是否在范围内（不包含边界）', () => {
    const date = new Date(2024, 0, 15)
    const startDate = new Date(2024, 0, 1)
    const endDate = new Date(2024, 0, 31)
    expect(isBetween(date, startDate, endDate, false)).toBe(true)
    expect(isBetween(startDate, startDate, endDate, false)).toBe(false)
    expect(isBetween(endDate, startDate, endDate, false)).toBe(false)
  })

  it('应该判断日期不在范围内', () => {
    const date = new Date(2024, 1, 1)
    const startDate = new Date(2024, 0, 1)
    const endDate = new Date(2024, 0, 31)
    expect(isBetween(date, startDate, endDate)).toBe(false)
  })
})

describe('range', () => {
  it('应该生成日期范围（按天）', () => {
    const startDate = new Date(2024, 0, 1)
    const endDate = new Date(2024, 0, 3)
    const result = range(startDate, endDate, 'day')
    expect(result).toHaveLength(3)
    expect(result[0].getDate()).toBe(1)
    expect(result[1].getDate()).toBe(2)
    expect(result[2].getDate()).toBe(3)
  })

  it('应该生成日期范围（按月）', () => {
    const startDate = new Date(2024, 0, 1)
    const endDate = new Date(2024, 2, 1)
    const result = range(startDate, endDate, 'month')
    expect(result).toHaveLength(3)
    expect(result[0].getMonth()).toBe(0)
    expect(result[1].getMonth()).toBe(1)
    expect(result[2].getMonth()).toBe(2)
  })

  it('应该生成日期范围（按年）', () => {
    const startDate = new Date(2024, 0, 1)
    const endDate = new Date(2026, 0, 1)
    const result = range(startDate, endDate, 'year')
    expect(result).toHaveLength(3)
    expect(result[0].getFullYear()).toBe(2024)
    expect(result[1].getFullYear()).toBe(2025)
    expect(result[2].getFullYear()).toBe(2026)
  })

  it('应该处理空范围', () => {
    const startDate = new Date(2024, 0, 5)
    const endDate = new Date(2024, 0, 1)
    const result = range(startDate, endDate, 'day')
    expect(result).toHaveLength(0)
  })
})
