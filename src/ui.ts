import { UiIssue, findIssues } from './qatool';

import './qatool.css';

export function init(initContainer: HTMLElement, textProvider: () => Promise<string>) {
  const container = parseHtml(`<div class="container"></div>`);
  initContainer.append(container);

  const runButton = parseHtml(`<button class="runButton">Run checks</button>`);
  container.append(runButton);

  const resultContainer = parseHtml(`
    <div class="resultContainer">
      <div class="issueContainer"></div>
      <div class="noIssuesMessage">No issues found! :)</div>
    </div>`);
  container.append(resultContainer);

  runButton.addEventListener('click', async () => {
    const issueContainer = $('.issueContainer', resultContainer);
    const text = await textProvider();
    const result = findIssues(text);
    renderIssues(issueContainer, findIssues(text));
    result.length === 0 ? resultContainer.classList.add("empty") : resultContainer.classList.remove("empty");
  });
}

function renderIssues(issueContainer: Element, issues: UiIssue[]) {
  issueContainer.innerHTML = '';

  for (const issue of issues) {
    const issueElement = parseHtml(`
      <div class="issue">
        <div class="label"></div>
        <div class="count"></div>
      </div>`);
    $('.label', issueElement).append(issue.label);
    $('.count', issueElement).append(String(issue.occurrences));

    if (issue.copy || issue.paste) {
      const buttonContainer = parseHtml('<div class="copyPasteButtonContainer">');

      if (issue.copy) {
        const copyButton = parseHtml('<button class="copyPasteButton">🔍</button>');
        copyButton.addEventListener('click', () => copyText(issue.copy as string));
        buttonContainer.append(copyButton);
      }
      if (issue.paste) {
        const pasteButton = parseHtml('<button class="copyPasteButton pasteButton">📋</button>');
        pasteButton.addEventListener('click', () => copyText(issue.paste as string));
        buttonContainer.append(pasteButton);
      }

      issueElement.append(buttonContainer);
    }


    issueContainer.append(issueElement);
  }
}

function copyText(text: string) {
  navigator.clipboard.writeText(text);
}

function $(q: string, root: Element = document.body): Element {
  return root.querySelector(q) as Element;
}

function parseHtml(src: string, wrapperTag='div'): Element {
  let wrapper = document.createElement(wrapperTag);
  wrapper.innerHTML = src;
  return wrapper.children[0];
}
