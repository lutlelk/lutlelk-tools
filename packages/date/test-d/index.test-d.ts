import { expectType } from 'tsd'
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
  range,
  type DateInput,
  type TimeUnit
} from '../src'

const date: DateInput = new Date()
const dateString: DateInput = '2024-01-01'
const timestamp: DateInput = 1704067200000

const unit: TimeUnit = 'day'

expectType<Date>(parse(date))
expectType<Date>(parse(dateString))
expectType<Date>(parse(timestamp))

expectType<string>(format(date))
expectType<string>(format(date, 'YYYY-MM-DD'))

expectType<Date>(add(date, 1, 'year'))
expectType<Date>(add(date, 2, 'month'))
expectType<Date>(add(date, 3, 'day'))
expectType<Date>(add(date, 4, 'hour'))
expectType<Date>(add(date, 5, 'minute'))
expectType<Date>(add(date, 6, 'second'))
expectType<Date>(add(date, 7, 'millisecond'))

expectType<Date>(subtract(date, 1, 'year'))
expectType<Date>(subtract(date, 2, 'month'))
expectType<Date>(subtract(date, 3, 'day'))
expectType<Date>(subtract(date, 4, 'hour'))
expectType<Date>(subtract(date, 5, 'minute'))
expectType<Date>(subtract(date, 6, 'second'))
expectType<Date>(subtract(date, 7, 'millisecond'))

expectType<number>(diff(date, date))
expectType<number>(diff(date, date, 'year'))
expectType<number>(diff(date, date, 'month'))
expectType<number>(diff(date, date, 'day'))
expectType<number>(diff(date, date, 'hour'))
expectType<number>(diff(date, date, 'minute'))
expectType<number>(diff(date, date, 'second'))
expectType<number>(diff(date, date, 'millisecond'))

expectType<Date>(startOf(date, 'year'))
expectType<Date>(startOf(date, 'month'))
expectType<Date>(startOf(date, 'day'))
expectType<Date>(startOf(date, 'hour'))
expectType<Date>(startOf(date, 'minute'))
expectType<Date>(startOf(date, 'second'))
expectType<Date>(startOf(date, 'millisecond'))

expectType<Date>(endOf(date, 'year'))
expectType<Date>(endOf(date, 'month'))
expectType<Date>(endOf(date, 'day'))
expectType<Date>(endOf(date, 'hour'))
expectType<Date>(endOf(date, 'minute'))
expectType<Date>(endOf(date, 'second'))
expectType<Date>(endOf(date, 'millisecond'))

expectType<boolean>(isSame(date, date))
expectType<boolean>(isSame(date, date, 'year'))
expectType<boolean>(isSame(date, date, 'month'))

expectType<boolean>(isBefore(date, date))
expectType<boolean>(isBefore(date, date, 'day'))

expectType<boolean>(isAfter(date, date))
expectType<boolean>(isAfter(date, date, 'day'))

expectType<boolean>(isValid(date))
expectType<boolean>(isValid(dateString))
expectType<boolean>(isValid(timestamp))

expectType<Date>(now())
expectType<Date>(today())
expectType<Date>(tomorrow())
expectType<Date>(yesterday())

expectType<number>(getDaysInMonth(date))
expectType<number>(getDayOfYear(date))
expectType<number>(getWeekOfYear(date))

expectType<boolean>(isLeapYear(date))
expectType<boolean>(isWeekend(date))
expectType<boolean>(isWeekday(date))

expectType<Date>(min(date, date))
expectType<Date>(min(date, date, date))
expectType<Date>(max(date, date))
expectType<Date>(max(date, date, date))

expectType<Date>(clamp(date, date, date))

expectType<boolean>(isBetween(date, date, date))
expectType<boolean>(isBetween(date, date, date, false))

expectType<Date[]>(range(date, date))
expectType<Date[]>(range(date, date, 'day'))
expectType<Date[]>(range(date, date, 'month'))
expectType<Date[]>(range(date, date, 'year'))
