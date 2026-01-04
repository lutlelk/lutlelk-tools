# @lutlelk-tools/date

日期时间处理工具函数集合。

## 安装

```bash
pnpm add @lutlelk-tools/date
```

## 使用

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
  now,
  today,
  yesterday,
  tomorrow
} from '@lutlelk-tools/date'
```

## API

### 解析和格式化

#### parse

解析日期。

```ts
parse(date: DateInput): Date
```

**示例**

```ts
parse('2024-01-01') // Date 对象
parse(1704067200000) // Date 对象
parse(new Date()) // Date 对象
```

#### format

格式化日期。

```ts
format(date: DateInput, formatStr?: string): string
```

**示例**

```ts
format(new Date()) // '2024-01-01 12:00:00'
format(new Date(), 'YYYY-MM-DD') // '2024-01-01'
format(new Date(), 'YYYY年MM月DD日') // '2024年01月01日'
```

**格式化标记**

| 标记 | 描述 | 示例 |
|------|------|------|
| YYYY | 四位年份 | 2024 |
| YY | 两位年份 | 24 |
| MM | 两位月份 | 01 |
| M | 月份 | 1 |
| DD | 两位日期 | 01 |
| D | 日期 | 1 |
| HH | 两位小时（24小时制） | 13 |
| H | 小时（24小时制） | 13 |
| mm | 两位分钟 | 05 |
| m | 分钟 | 5 |
| ss | 两位秒 | 09 |
| s | 秒 | 9 |
| SSS | 三位毫秒 | 123 |
| SS | 两位毫秒 | 12 |
| S | 一位毫秒 | 1 |

### 日期运算

#### add

增加时间。

```ts
add(date: DateInput, amount: number, unit: TimeUnit): Date
```

**示例**

```ts
add(new Date(), 1, 'day') // 明天
add(new Date(), 1, 'month') // 下个月
add(new Date(), 1, 'year') // 明年
```

#### subtract

减少时间。

```ts
subtract(date: DateInput, amount: number, unit: TimeUnit): Date
```

**示例**

```ts
subtract(new Date(), 1, 'day') // 昨天
subtract(new Date(), 1, 'month') // 上个月
```

#### diff

计算日期差。

```ts
diff(date1: DateInput, date2: DateInput, unit?: TimeUnit): number
```

**示例**

```ts
const date1 = new Date('2024-01-01')
const date2 = new Date('2024-01-02')

diff(date2, date1, 'day') // 1
diff(date2, date1, 'hour') // 24
```

### 日期范围

#### startOf

获取时间单位的开始。

```ts
startOf(date: DateInput, unit: TimeUnit): Date
```

**示例**

```ts
startOf(new Date(), 'year') // 当年1月1日 00:00:00
startOf(new Date(), 'month') // 当月1日 00:00:00
startOf(new Date(), 'day') // 当天 00:00:00
```

#### endOf

获取时间单位的结束。

```ts
endOf(date: DateInput, unit: TimeUnit): Date
```

**示例**

```ts
endOf(new Date(), 'year') // 当年12月31日 23:59:59
endOf(new Date(), 'month') // 当月最后一天 23:59:59
endOf(new Date(), 'day') // 当天 23:59:59
```

### 日期比较

#### isSame

比较日期是否相同。

```ts
isSame(date1: DateInput, date2: DateInput, unit?: TimeUnit): boolean
```

**示例**

```ts
const date1 = new Date('2024-01-01')
const date2 = new Date('2024-01-01 12:00:00')

isSame(date1, date2) // false
isSame(date1, date2, 'day') // true
```

#### isBefore

比较日期是否在之前。

```ts
isBefore(date1: DateInput, date2: DateInput, unit?: TimeUnit): boolean
```

**示例**

```ts
const date1 = new Date('2024-01-01')
const date2 = new Date('2024-01-02')

isBefore(date1, date2) // true
isBefore(date1, date2, 'month') // false
```

#### isAfter

比较日期是否在之后。

```ts
isAfter(date1: DateInput, date2: DateInput, unit?: TimeUnit): boolean
```

**示例**

```ts
const date1 = new Date('2024-01-02')
const date2 = new Date('2024-01-01')

isAfter(date1, date2) // true
```

### 便捷函数

#### now

获取当前时间。

```ts
now(): Date
```

**示例**

```ts
now() // 当前时间的 Date 对象
```

#### today

获取今天的日期。

```ts
today(): Date
```

**示例**

```ts
today() // 今天 00:00:00
```

#### yesterday

获取昨天的日期。

```ts
yesterday(): Date
```

**示例**

```ts
yesterday() // 昨天 00:00:00
```

#### tomorrow

获取明天的日期。

```ts
tomorrow(): Date
```

**示例**

```ts
tomorrow() // 明天 00:00:00
```

### 信息获取

#### getDaysInMonth

获取月份的天数。

```ts
getDaysInMonth(date: DateInput): number
```

**示例**

```ts
getDaysInMonth(new Date('2024-02-01')) // 29 (闰年)
getDaysInMonth(new Date('2023-02-01')) // 28
```

#### getDayOfYear

获取一年中的第几天。

```ts
getDayOfYear(date: DateInput): number
```

**示例**

```ts
getDayOfYear(new Date('2024-01-01')) // 1
getDayOfYear(new Date('2024-12-31')) // 366
```

#### getWeekOfYear

获取一年中的第几周。

```ts
getWeekOfYear(date: DateInput): number
```

**示例**

```ts
getWeekOfYear(new Date('2024-01-01')) // 1
```

### 验证函数

#### isValid

检查日期是否有效。

```ts
isValid(date: DateInput): boolean
```

**示例**

```ts
isValid('2024-01-01') // true
isValid('invalid') // false
```

#### isLeapYear

检查是否为闰年。

```ts
isLeapYear(date: DateInput): boolean
```

**示例**

```ts
isLeapYear(new Date('2024-01-01')) // true
isLeapYear(new Date('2023-01-01')) // false
```

#### isWeekend

检查是否为周末。

```ts
isWeekend(date: DateInput): boolean
```

**示例**

```ts
isWeekend(new Date('2024-01-06')) // true (周六)
isWeekend(new Date('2024-01-07')) // true (周日)
isWeekend(new Date('2024-01-08')) // false (周一)
```

#### isWeekday

检查是否为工作日。

```ts
isWeekday(date: DateInput): boolean
```

**示例**

```ts
isWeekday(new Date('2024-01-08')) // true (周一)
```

### 其他函数

#### min

获取最小的日期。

```ts
min(...dates: DateInput[]): Date
```

**示例**

```ts
min(
  new Date('2024-01-01'),
  new Date('2024-01-02'),
  new Date('2024-01-03')
) // 2024-01-01
```

#### max

获取最大的日期。

```ts
max(...dates: DateInput[]): Date
```

**示例**

```ts
max(
  new Date('2024-01-01'),
  new Date('2024-01-02'),
  new Date('2024-01-03')
) // 2024-01-03
```

#### clamp

将日期限制在指定范围内。

```ts
clamp(date: DateInput, minDate: DateInput, maxDate: DateInput): Date
```

**示例**

```ts
const date = new Date('2024-01-15')
const min = new Date('2024-01-10')
const max = new Date('2024-01-20')

clamp(date, min, max) // 2024-01-15
clamp(new Date('2024-01-05'), min, max) // 2024-01-10
clamp(new Date('2024-01-25'), min, max) // 2024-01-20
```

#### isBetween

检查日期是否在范围内。

```ts
isBetween(
  date: DateInput,
  startDate: DateInput,
  endDate: DateInput,
  inclusive?: boolean
): boolean
```

**示例**

```ts
const date = new Date('2024-01-15')
const start = new Date('2024-01-10')
const end = new Date('2024-01-20')

isBetween(date, start, end) // true
isBetween(new Date('2024-01-10'), start, end) // true (包含边界)
```

#### range

生成日期范围。

```ts
range(startDate: DateInput, endDate: DateInput, unit?: TimeUnit): Date[]
```

**示例**

```ts
range(
  new Date('2024-01-01'),
  new Date('2024-01-05')
)
// [2024-01-01, 2024-01-02, 2024-01-03, 2024-01-04, 2024-01-05]
```

### 使用示例

#### 计算倒计时

```ts
import { diff, format } from '@lutlelk-tools/date'

const targetDate = new Date('2024-12-31')
const now = new Date()

const days = diff(targetDate, now, 'day')
const hours = diff(targetDate, now, 'hour')
const minutes = diff(targetDate, now, 'minute')

console.log(`距离目标日期还有 ${days} 天`)
console.log(`距离目标日期还有 ${hours} 小时`)
```

#### 格式化日期显示

```ts
import { format } from '@lutlelk-tools/date'

const date = new Date()

console.log(format(date, 'YYYY年MM月DD日 HH:mm:ss'))
console.log(format(date, 'YYYY-MM-DD'))
console.log(format(date, 'MM/DD/YYYY'))
```

#### 计算年龄

```ts
import { diff } from '@lutlelk-tools/date'

function calculateAge(birthDate: DateInput): number {
  return diff(new Date(), birthDate, 'year')
}

const age = calculateAge('1990-01-01')
console.log(`年龄: ${age} 岁`)
```

#### 日期范围查询

```ts
import { startOf, endOf, isBetween } from '@lutlelk-tools/date'

const date = new Date('2024-01-15')
const monthStart = startOf(date, 'month')
const monthEnd = endOf(date, 'month')

if (isBetween(date, monthStart, monthEnd)) {
  console.log('日期在当月范围内')
}
```
