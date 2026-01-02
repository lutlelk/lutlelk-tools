export function addClass(element: Element, ...classNames: string[]): void {
  element.classList.add(...classNames)
}

export function removeClass(element: Element, ...classNames: string[]): void {
  element.classList.remove(...classNames)
}

export function toggleClass(element: Element, className: string, force?: boolean): boolean {
  return element.classList.toggle(className, force)
}

export function hasClass(element: Element, className: string): boolean {
  return element.classList.contains(className)
}
