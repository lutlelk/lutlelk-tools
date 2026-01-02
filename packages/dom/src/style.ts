export function getStyle(element: HTMLElement, property: string): string {
  return window.getComputedStyle(element).getPropertyValue(property)
}

export function setStyle(element: HTMLElement, property: string, value: string): void {
  element.style.setProperty(property, value)
}
