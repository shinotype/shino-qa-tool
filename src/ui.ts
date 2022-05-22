import { UiIssue, findIssues } from './qatool';

import './qatool.css';

export function init(container: HTMLElement, textProvider: () => string) {
  const runButton = parseHtml(`<button class="runButton">Run checks</button>`);
  container.append(runButton);

  const resultContainer = parseHtml(`
    <div class="resultContainer">
      <div class="issueContainer"></div>
      <div class="noIssuesMessage">No issues found! :)</div>
    </div>`);
  container.append(resultContainer);

  runButton.addEventListener('click', () => {
    const issueContainer = $('.issueContainer', resultContainer);
    const text = textProvider();
    renderIssues(issueContainer, findIssues(text));
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

    if (issue.copy) {
      const copyButton = parseHtml('<button class="copyPasteButton">🔍</button>');
      copyButton.addEventListener('click', () => copyText(issue.copy as string));
      issueElement.append(copyButton);
    }

    if (issue.paste) {
      const pasteButton = parseHtml('<button class="copyPasteButton">📋</button>');
      pasteButton.addEventListener('click', () => copyText(issue.paste as string));
      issueElement.append(pasteButton);
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
