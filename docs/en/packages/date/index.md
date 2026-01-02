# @fe-utils/date

A lightweight JavaScript date processing utility library with simple and easy-to-use date manipulation APIs.

## Installation

```bash
pnpm add @fe-utils/date
```

## Usage

```ts
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
  yesterday
} from '@fe-utils/date'
```

## API

### parse(date)

Parses date input and returns Date object.

```ts
parse(date: DateInput): Date
```

**Examples**

```ts
parse(new Date())           // Returns new Date object
parse('2024-01-01')         // Parses date string
parse(1704067200000)         // Parses timestamp
```

### format(date, formatStr?)

Formats date to string.

```ts
format(date: DateInput, formatStr?: string): string
```

**Examples**

```ts
format(new Date(2024, 0, 1, 12, 30, 45))
// '2024-01-01 12:30:45'

format(new Date(2024, 0, 1), 'YYYY/MM/DD')
// '2024/01/01'

format(new Date(2024, 0, 1), 'YY-M-D')
// '24-1-1'
```

Supported format tokens:
- `YYYY` - 4-digit year
- `YY` - 2-digit year
- `MM` - 2-digit month
- `M` - month
- `DD` - 2-digit day
- `D` - day
- `HH` - 2-digit hour (24-hour format)
- `H` - hour
- `mm` - 2-digit minute
- `m` - minute
- `ss` - 2-digit second
- `s` - second
- `SSS` - 3-digit millisecond
- `SS` - 2-digit millisecond
- `S` - 1-digit millisecond

### add(date, amount, unit)

Adds specified time unit to date.

```ts
add(date: DateInput, amount: number, unit: TimeUnit): Date
```

**Examples**

```ts
add(new Date(2024, 0, 1), 1, 'year')   // 2025-01-01
add(new Date(2024, 0, 1), 2, 'month')  // 2024-03-01
add(new Date(2024, 0, 1), 10, 'day')   // 2024-01-11
add(new Date(2024, 0, 1, 10), 5, 'hour')   // 2024-01-01 15:00
add(new Date(2024, 0, 1, 0, 30), 30, 'minute')   // 2024-01-01 01:00
add(new Date(2024, 0, 1, 0, 0, 30), 30, 'second')   // 2024-01-01 00:01
add(new Date(2024, 0, 1, 0, 0, 0, 500), 500, 'millisecond')   // 2024-01-01 00:00:01
```

### subtract(date, amount, unit)

Subtracts specified time unit from date.

```ts
subtract(date: DateInput, amount: number, unit: TimeUnit): Date
```

**Examples**

```ts
subtract(new Date(2024, 0, 1), 1, 'year')   // 2023-01-01
subtract(new Date(2024, 5, 1), 2, 'month')  // 2024-04-01
subtract(new Date(2024, 0, 2), 1, 'day')     // 2024-01-01
```

### diff(date1, date2, unit?)

Calculates the difference between two dates.

```ts
diff(date1: DateInput, date2: DateInput, unit?: TimeUnit): number
```

**Examples**

```ts
diff(new Date(2024, 0, 2), new Date(2024, 0, 1), 'day')   // 1
diff(new Date(2024, 0, 1, 12), new Date(2024, 0, 1), 'hour')   // 12
diff(new Date(2024, 5, 1), new Date(2024, 0, 1), 'month')   // 5
diff(new Date(2025, 0, 1), new Date(2024, 0, 1), 'year')   // 1
```

### startOf(date, unit)

Returns the start time of specified time unit.

```ts
startOf(date: DateInput, unit: TimeUnit): Date
```

**Examples**

```ts
startOf(new Date(2024, 5, 15, 12, 30), 'year')   // 2024-01-01 00:00:00
startOf(new Date(2024, 5, 15, 12, 30), 'month')  // 2024-06-01 00:00:00
startOf(new Date(2024, 5, 15, 12, 30), 'day')    // 2024-06-15 00:00:00
startOf(new Date(2024, 5, 15, 12, 30), 'hour')   // 2024-06-15 12:00:00
startOf(new Date(2024, 5, 15, 12, 30), 'minute') // 2024-06-15 12:30:00
```

### endOf(date, unit)

Returns the end time of specified time unit.

```ts
endOf(date: DateInput, unit: TimeUnit): Date
```

**Examples**

```ts
endOf(new Date(2024, 5, 15, 12, 30), 'year')   // 2024-12-31 23:59:59
endOf(new Date(2024, 5, 15, 12, 30), 'month')  // 2024-06-30 23:59:59
endOf(new Date(2024, 5, 15, 12, 30), 'day')    // 2024-06-15 23:59:59
endOf(new Date(2024, 5, 15, 12, 30), 'hour')   // 2024-06-15 12:59:59
endOf(new Date(2024, 5, 15, 12, 30), 'minute') // 2024-06-15 12:30:59
```

### isSame(date1, date2, unit?)

Checks if two dates are the same.

```ts
isSame(date1: DateInput, date2: DateInput, unit?: TimeUnit): boolean
```

**Examples**

```ts
isSame(new Date(2024, 0, 1), new Date(2024, 0, 1))   // true
isSame(new Date(2024, 0, 1), new Date(2024, 0, 2))   // false
isSame(new Date(2024, 0, 1), new Date(2024, 5, 1), 'year')   // true
```

### isBefore(date1, date2, unit?)

Checks if date1 is before date2.

```ts
isBefore(date1: DateInput, date2: DateInput, unit?: TimeUnit): boolean
```

**Examples**

```ts
isBefore(new Date(2024, 0, 1), new Date(2024, 0, 2))   // true
isBefore(new Date(2024, 0, 1), new Date(2024, 0, 1), 'day')   // false
```

### isAfter(date1, date2, unit?)

Checks if date1 is after date2.

```ts
isAfter(date1: DateInput, date2: DateInput, unit?: TimeUnit): boolean
```

**Examples**

```ts
isAfter(new Date(2024, 0, 2), new Date(2024, 0, 1))   // true
isAfter(new Date(2024, 0, 1), new Date(2024, 0, 1), 'day')   // false
```

### isValid(date)

Validates if date is valid.

```ts
isValid(date: DateInput): boolean
```

**Examples**

```ts
isValid(new Date())           // true
isValid('2024-01-01')         // true
isValid('invalid-date')       // false
```

### now()

Returns current time.

```ts
now(): Date
```

**Examples**

```ts
now()   // Returns current Date object
```

### today()

Returns today's start time (00:00:00).

```ts
today(): Date
```

**Examples**

```ts
today()   // Returns today's 00:00:00
```

### tomorrow()

Returns tomorrow's start time (00:00:00).

```ts
tomorrow(): Date
```

**Examples**

```ts
tomorrow()   // Returns tomorrow's 00:00:00
```

### yesterday()

Returns yesterday's start time (00:00:00).

```ts
yesterday(): Date
```

**Examples**

```ts
yesterday()   // Returns yesterday's 00:00:00
```

### getDaysInMonth(date)

Returns the number of days in the month of the specified date.

```ts
getDaysInMonth(date: DateInput): number
```

**Examples**

```ts
getDaysInMonth(new Date(2024, 0, 1))   // 31
getDaysInMonth(new Date(2024, 1, 1))   // 29 (leap year)
getDaysInMonth(new Date(2023, 1, 1))   // 28
```

### getDayOfYear(date)

Returns the day of the year for the specified date.

```ts
getDayOfYear(date: DateInput): number
```

**Examples**

```ts
getDayOfYear(new Date(2024, 0, 1))   // 1
getDayOfYear(new Date(2024, 11, 31)) // 366 (leap year)
```

### getWeekOfYear(date)

Returns the week of the year for the specified date.

```ts
getWeekOfYear(date: DateInput): number
```

**Examples**

```ts
getWeekOfYear(new Date(2024, 0, 1))   // 1
getWeekOfYear(new Date(2024, 0, 7))   // 2
```

### isLeapYear(date)

Checks if the year of the specified date is a leap year.

```ts
isLeapYear(date: DateInput): boolean
```

**Examples**

```ts
isLeapYear(new Date(2024, 0, 1))   // true
isLeapYear(new Date(2023, 0, 1))   // false
```

### isWeekend(date)

Checks if the specified date is a weekend.

```ts
isWeekend(date: DateInput): boolean
```

**Examples**

```ts
isWeekend(new Date(2024, 0, 7))   // true (Sunday)
isWeekend(new Date(2024, 0, 6))   // true (Saturday)
isWeekend(new Date(2024, 0, 1))   // false (Monday)
```

### isWeekday(date)

Checks if the specified date is a weekday.

```ts
isWeekday(date: DateInput): boolean
```

**Examples**

```ts
isWeekday(new Date(2024, 0, 1))   // true (Monday)
isWeekday(new Date(2024, 0, 7))   // false (Sunday)
```

### min(...dates)

Returns the minimum date.

```ts
min(...dates: DateInput[]): Date
```

**Examples**

```ts
min(
  new Date(2024, 0, 2),
  new Date(2024, 0, 1),
  new Date(2024, 0, 3)
)   // 2024-01-01
```

### max(...dates)

Returns the maximum date.

```ts
max(...dates: DateInput[]): Date
```

**Examples**

```ts
max(
  new Date(2024, 0, 2),
  new Date(2024, 0, 1),
  new Date(2024, 0, 3)
)   // 2024-01-03
```

### clamp(date, minDate, maxDate)

Clamps date to specified range.

```ts
clamp(date: DateInput, minDate: DateInput, maxDate: DateInput): Date
```

**Examples**

```ts
clamp(
  new Date(2024, 0, 15),
  new Date(2024, 0, 1),
  new Date(2024, 0, 31)
)   // 2024-01-15

clamp(
  new Date(2023, 11, 31),
  new Date(2024, 0, 1),
  new Date(2024, 0, 31)
)   // 2024-01-01 (returns minimum)
```

### isBetween(date, startDate, endDate, inclusive?)

Checks if date is within specified range.

```ts
isBetween(date: DateInput, startDate: DateInput, endDate: DateInput, inclusive?: boolean): boolean
```

**Examples**

```ts
isBetween(
  new Date(2024, 0, 15),
  new Date(2024, 0, 1),
  new Date(2024, 0, 31)
)   // true (inclusive)

isBetween(
  new Date(2024, 0, 15),
  new Date(2024, 0, 1),
  new Date(2024, 0, 31),
  false
)   // true (exclusive)

isBetween(
  new Date(2024, 0, 1),
  new Date(2024, 0, 1),
  new Date(2024, 0, 31),
  false
)   // false (exclusive)
```

### range(startDate, endDate, unit?)

Generates date range array.

```ts
range(startDate: DateInput, endDate: DateInput, unit?: TimeUnit): Date[]
```

**Examples**

```ts
range(
  new Date(2024, 0, 1),
  new Date(2024, 0, 3)
)   // [2024-01-01, 2024-01-02, 2024-01-03]

range(
  new Date(2024, 0, 1),
  new Date(2024, 2, 1),
  'month'
)   // [2024-01-01, 2024-02-01, 2024-03-01]

range(
  new Date(2024, 0, 1),
  new Date(2026, 0, 1),
  'year'
)   // [2024-01-01, 2025-01-01, 2026-01-01]
```

## Type Definitions

```ts
type DateInput = Date | string | number

type TimeUnit = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'
```

## License

ISC
