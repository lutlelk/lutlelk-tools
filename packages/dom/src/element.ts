export function createElement<K extends keyof HTMLElementTagNameMap>(
  tagName: K,
  options?: {
    attributes?: Record<string, string>
    className?: string
    innerHTML?: string
    textContent?: string
  }
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tagName)
  
  if (options?.attributes) {
    Object.entries(options.attributes).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
  }
  
  if (options?.className) {
    element.className = options.className
  }
  
  if (options?.innerHTML) {
    element.innerHTML = options.innerHTML
  }
  
  if (options?.textContent) {
    element.textContent = options.textContent
  }
  
  return element
}

export function remove(element: Element): void {
  element.remove()
}

export function insertBefore(newNode: Node, referenceNode: Node): void {
  referenceNode.parentNode?.insertBefore(newNode, referenceNode)
}

export function insertAfter(newNode: Node, referenceNode: Node): void {
  referenceNode.parentNode?.insertBefore(newNode, referenceNode.nextSibling)
}
