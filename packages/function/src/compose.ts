type AnyFunction = (...args: any[]) => any

export function compose(...funcs: AnyFunction[]): (...args: any[]) => unknown {
  if (funcs.length === 0) {
    return (arg: any) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(
    (a, b) =>
      (...args: any[]) =>
        a(b(...args))
  )
}

export function pipe(...funcs: AnyFunction[]): (...args: any[]) => unknown {
  if (funcs.length === 0) {
    return (arg: any) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(
    (a, b) =>
      (...args: any[]) =>
        b(a(...args))
  )
}
