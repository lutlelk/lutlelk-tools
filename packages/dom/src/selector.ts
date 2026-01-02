export function $(selector: string, context?: ParentNode): Element | null {
  return (context ?? document).querySelector(selector)
}

export function $$(selector: string, context?: ParentNode): Element[] {
  return Array.from((context ?? document).querySelectorAll(selector))
}
