export function getAttr(element: Element, name: string): string | null {
  return element.getAttribute(name)
}

export function setAttr(element: Element, name: string, value: string): void {
  element.setAttribute(name, value)
}

export function removeAttr(element: Element, name: string): void {
  element.removeAttribute(name)
}
