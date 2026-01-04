# @lutlelk-tools/async

异步操作工具函数集合。

## 安装

```bash
pnpm add @lutlelk-tools/async
```

## 使用

```ts
import { debounce, throttle, concurrency } from '@lutlelk-tools/async'
```

## API

### debounce

异步防抖函数。

```ts
debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void
```

**示例**

```ts
const debouncedFn = debounce(async () => {
  const result = await fetchData()
  console.log(result)
}, 300)

debouncedFn()
debouncedFn() // 只有最后一次调用会执行
```

### throttle

异步节流函数。

```ts
throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void
```

**示例**

```ts
const throttledFn = throttle(async () => {
  const result = await fetchData()
  console.log(result)
}, 300)

throttledFn()
throttledFn() // 在 300ms 内只会执行一次
```

### concurrency

并发控制。

```ts
concurrency<T>(
  tasks: (() => Promise<T>)[],
  limit: number
): Promise<T[]>
```

**示例**

```ts
const tasks = [
  () => fetch('https://api.example.com/1').then(r => r.json()),
  () => fetch('https://api.example.com/2').then(r => r.json()),
  () => fetch('https://api.example.com/3').then(r => r.json()),
  () => fetch('https://api.example.com/4').then(r => r.json()),
  () => fetch('https://api.example.com/5').then(r => r.json())
]

const results = await concurrency(tasks, 2) // 最多同时执行 2 个任务
```

### 使用场景

#### 搜索输入防抖

```ts
import { debounce } from '@lutlelk-tools/async'

const handleSearch = debounce(async (keyword: string) => {
  const results = await searchAPI(keyword)
  displayResults(results)
}, 300)

searchInput.addEventListener('input', (e) => {
  handleSearch(e.target.value)
})
```

#### 滚动事件节流

```ts
import { throttle } from '@lutlelk-tools/async'

const handleScroll = throttle(async () => {
  const moreData = await loadMoreData()
  appendData(moreData)
}, 200)

window.addEventListener('scroll', handleScroll)
```

#### 批量请求并发控制

```ts
import { concurrency } from '@lutlelk-tools/async'

const urls = Array.from({ length: 100 }, (_, i) => `https://api.example.com/${i}`)

const tasks = urls.map(url => () => fetch(url).then(r => r.json()))

const results = await concurrency(tasks, 10) // 最多同时 10 个请求
```
