export function copyText(text: string) {
  navigator.clipboard.writeText(text);
}

export function $(q: string, root: Element = document.body): Element {
  return root.querySelector(q) as Element;
}

export function parseHtml(src: string, wrapperTag='div'): Element {
  let wrapper = document.createElement(wrapperTag);
  wrapper.innerHTML = src;
  return wrapper.children[0];
}

export function escapeString(input: string): string {
  return JSON.stringify(input).slice(1, -1);
}
