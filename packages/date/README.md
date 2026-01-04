# @lutlelk/date

一个轻量级的 JavaScript 日期处理工具库，提供简洁易用的日期操作 API。

## 安装

```bash
npm install @lutlelk/date
# 或
pnpm add @lutlelk/date
# 或
yarn add @lutlelk/date
```

## 使用

```typescript
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
} from '@lutlelk/date'
```

## API

### parse(date)

解析日期输入并返回 Date 对象。

```typescript
parse(new Date())           // 返回新的 Date 对象
parse('2024-01-01')         // 解析日期字符串
parse(1704067200000)         // 解析时间戳
```

### format(date, formatStr?)

格式化日期为字符串。

```typescript
format(new Date(2024, 0, 1, 12, 30, 45))
// '2024-01-01 12:30:45'

format(new Date(2024, 0, 1), 'YYYY/MM/DD')
// '2024/01/01'

format(new Date(2024, 0, 1), 'YY-M-D')
// '24-1-1'
```

支持的格式化标记：
- `YYYY` - 四位年份
- `YY` - 两位年份
- `MM` - 两位月份
- `M` - 月份
- `DD` - 两位日期
- `D` - 日期
- `HH` - 两位小时（24小时制）
- `H` - 小时
- `mm` - 两位分钟
- `m` - 分钟
- `ss` - 两位秒
- `s` - 秒
- `SSS` - 三位毫秒
- `SS` - 两位毫秒
- `S` - 一位毫秒

### add(date, amount, unit)

向日期添加指定的时间单位。

```typescript
add(new Date(2024, 0, 1), 1, 'year')   // 2025-01-01
add(new Date(2024, 0, 1), 2, 'month')  // 2024-03-01
add(new Date(2024, 0, 1), 10, 'day')   // 2024-01-11
add(new Date(2024, 0, 1, 10), 5, 'hour')   // 2024-01-01 15:00
add(new Date(2024, 0, 1, 0, 30), 30, 'minute')   // 2024-01-01 01:00
add(new Date(2024, 0, 1, 0, 0, 30), 30, 'second')   // 2024-01-01 00:01
add(new Date(2024, 0, 1, 0, 0, 0, 500), 500, 'millisecond')   // 2024-01-01 00:00:01
```

### subtract(date, amount, unit)

从日期减去指定的时间单位。

```typescript
subtract(new Date(2024, 0, 1), 1, 'year')   // 2023-01-01
subtract(new Date(2024, 5, 1), 2, 'month')  // 2024-04-01
subtract(new Date(2024, 0, 2), 1, 'day')     // 2024-01-01
```

### diff(date1, date2, unit?)

计算两个日期之间的差值。

```typescript
diff(new Date(2024, 0, 2), new Date(2024, 0, 1), 'day')   // 1
diff(new Date(2024, 0, 1, 12), new Date(2024, 0, 1), 'hour')   // 12
diff(new Date(2024, 5, 1), new Date(2024, 0, 1), 'month')   // 5
diff(new Date(2025, 0, 1), new Date(2024, 0, 1), 'year')   // 1
```

### startOf(date, unit)

返回指定时间单位的开始时间。

```typescript
startOf(new Date(2024, 5, 15, 12, 30), 'year')   // 2024-01-01 00:00:00
startOf(new Date(2024, 5, 15, 12, 30), 'month')  // 2024-06-01 00:00:00
startOf(new Date(2024, 5, 15, 12, 30), 'day')    // 2024-06-15 00:00:00
startOf(new Date(2024, 5, 15, 12, 30), 'hour')   // 2024-06-15 12:00:00
startOf(new Date(2024, 5, 15, 12, 30), 'minute') // 2024-06-15 12:30:00
```

### endOf(date, unit)

返回指定时间单位的结束时间。

```typescript
endOf(new Date(2024, 5, 15, 12, 30), 'year')   // 2024-12-31 23:59:59
endOf(new Date(2024, 5, 15, 12, 30), 'month')  // 2024-06-30 23:59:59
endOf(new Date(2024, 5, 15, 12, 30), 'day')    // 2024-06-15 23:59:59
endOf(new Date(2024, 5, 15, 12, 30), 'hour')   // 2024-06-15 12:59:59
endOf(new Date(2024, 5, 15, 12, 30), 'minute') // 2024-06-15 12:30:59
```

### isSame(date1, date2, unit?)

判断两个日期是否相同。

```typescript
isSame(new Date(2024, 0, 1), new Date(2024, 0, 1))   // true
isSame(new Date(2024, 0, 1), new Date(2024, 0, 2))   // false
isSame(new Date(2024, 0, 1), new Date(2024, 5, 1), 'year')   // true
```

### isBefore(date1, date2, unit?)

判断 date1 是否在 date2 之前。

```typescript
isBefore(new Date(2024, 0, 1), new Date(2024, 0, 2))   // true
isBefore(new Date(2024, 0, 1), new Date(2024, 0, 1), 'day')   // false
```

### isAfter(date1, date2, unit?)

判断 date1 是否在 date2 之后。

```typescript
isAfter(new Date(2024, 0, 2), new Date(2024, 0, 1))   // true
isAfter(new Date(2024, 0, 1), new Date(2024, 0, 1), 'day')   // false
```

### isValid(date)

验证日期是否有效。

```typescript
isValid(new Date())           // true
isValid('2024-01-01')         // true
isValid('invalid-date')       // false
```

### now()

返回当前时间。

```typescript
now()   // 返回当前 Date 对象
```

### today()

返回今天的开始时间（00:00:00）。

```typescript
today()   // 返回今天的 00:00:00
```

### tomorrow()

返回明天的开始时间（00:00:00）。

```typescript
tomorrow()   // 返回明天的 00:00:00
```

### yesterday()

返回昨天的开始时间（00:00:00）。

```typescript
yesterday()   // 返回昨天的 00:00:00
```

### getDaysInMonth(date)

返回指定日期所在月份的天数。

```typescript
getDaysInMonth(new Date(2024, 0, 1))   // 31
getDaysInMonth(new Date(2024, 1, 1))   // 29 (闰年)
getDaysInMonth(new Date(2023, 1, 1))   // 28
```

### getDayOfYear(date)

返回指定日期是一年中的第几天。

```typescript
getDayOfYear(new Date(2024, 0, 1))   // 1
getDayOfYear(new Date(2024, 11, 31)) // 366 (闰年)
```

### getWeekOfYear(date)

返回指定日期是一年中的第几周。

```typescript
getWeekOfYear(new Date(2024, 0, 1))   // 1
getWeekOfYear(new Date(2024, 0, 7))   // 2
```

### isLeapYear(date)

判断指定日期所在年份是否为闰年。

```typescript
isLeapYear(new Date(2024, 0, 1))   // true
isLeapYear(new Date(2023, 0, 1))   // false
```

### isWeekend(date)

判断指定日期是否为周末。

```typescript
isWeekend(new Date(2024, 0, 7))   // true (周日)
isWeekend(new Date(2024, 0, 6))   // true (周六)
isWeekend(new Date(2024, 0, 1))   // false (周一)
```

### isWeekday(date)

判断指定日期是否为工作日。

```typescript
isWeekday(new Date(2024, 0, 1))   // true (周一)
isWeekday(new Date(2024, 0, 7))   // false (周日)
```

### min(...dates)

返回最小的日期。

```typescript
min(
  new Date(2024, 0, 2),
  new Date(2024, 0, 1),
  new Date(2024, 0, 3)
)   // 2024-01-01
```

### max(...dates)

返回最大的日期。

```typescript
max(
  new Date(2024, 0, 2),
  new Date(2024, 0, 1),
  new Date(2024, 0, 3)
)   // 2024-01-03
```

### clamp(date, minDate, maxDate)

将日期限制在指定范围内。

```typescript
clamp(
  new Date(2024, 0, 15),
  new Date(2024, 0, 1),
  new Date(2024, 0, 31)
)   // 2024-01-15

clamp(
  new Date(2023, 11, 31),
  new Date(2024, 0, 1),
  new Date(2024, 0, 31)
)   // 2024-01-01 (返回最小值)
```

### isBetween(date, startDate, endDate, inclusive?)

判断日期是否在指定范围内。

```typescript
isBetween(
  new Date(2024, 0, 15),
  new Date(2024, 0, 1),
  new Date(2024, 0, 31)
)   // true (包含边界)

isBetween(
  new Date(2024, 0, 15),
  new Date(2024, 0, 1),
  new Date(2024, 0, 31),
  false
)   // true (不包含边界)

isBetween(
  new Date(2024, 0, 1),
  new Date(2024, 0, 1),
  new Date(2024, 0, 31),
  false
)   // false (不包含边界)
```

### range(startDate, endDate, unit?)

生成日期范围数组。

```typescript
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

## 类型定义

```typescript
type DateInput = Date | string | number

type TimeUnit = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'
```

## 许可证

ISC
