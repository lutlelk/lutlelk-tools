export function contains(parent: Node, child: Node): boolean {
  return parent.contains(child)
}

export function isElement(value: unknown): value is Element {
  return value instanceof Element
}

export function isVisible(element: HTMLElement): boolean {
  if (!element.isConnected) return false
  const style = window.getComputedStyle(element)
  return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0'
}
