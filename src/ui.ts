import { UiIssue, findIssues } from './qatool';

import './qatool.css';

export function init(initContainer: HTMLElement, textProvider: () => Promise<string>) {
  const container = parseHtml(`<div class="container"></div>`);
  initContainer.append(container);

  const runButton = parseHtml(`<button class="runButton">Run checks</button>`) as HTMLButtonElement;
  container.append(runButton);

  const resultContainer = parseHtml(`
    <div class="resultContainer">
      <div class="issueContainer"></div>
      <div class="noIssuesMessage">No issues found! :)</div>
    </div>`);
  container.append(resultContainer);

  runButton.addEventListener('click', async () => {
    await runChecks(runButton, resultContainer, textProvider);
  });

  // Run once immediately when initialized. This doesn't await the result which is bad but I don't care.
  runChecks(runButton, resultContainer, textProvider);
}

async function runChecks(
    runButton: HTMLButtonElement,
    resultContainer: Element,
    textProvider: () => Promise<string>) {
  runButton.disabled = true;
  runButton.innerText = 'Checking...';

  const issueContainer = $('.issueContainer', resultContainer);
  const text = await textProvider();
  const result = findIssues(text);
  renderIssues(issueContainer, result);
  result.length === 0 ? resultContainer.classList.add("empty") : resultContainer.classList.remove("empty");

  runButton.innerText = 'Run checks';
  runButton.disabled = false;
}

function renderIssues(issueContainer: Element, issues: UiIssue[]) {
  issueContainer.innerHTML = '';

  for (const issue of issues) {
    const issueElement = parseHtml(`
      <div class="issue">
        <div class="labelContainer"></div>
        <div class="count"></div>
      </div>`);
    $('.count', issueElement).append(String(issue.occurrences));

    const labelContainer = $('.labelContainer', issueElement);

    if (issue.label) {
      const fromLabel = parseHtml(`<div class="label">${issue.label}</div>`);
      if (issue.copy) {
        fromLabel.classList.add("copyLabel");
        fromLabel.addEventListener('click', () => copyText(issue.copy as string));
      }
      labelContainer.append(fromLabel);
    }

    if (issue.toLabel) {
      const toLabel = parseHtml(`<div class="label">${issue.toLabel}</div>`);
      if (issue.paste) {
        toLabel.classList.add("pasteLabel");
        toLabel.addEventListener('click', () => copyText(issue.paste as string));
      }
      const arrowLabel = parseHtml(`<div class="arrowLabel">→</div>`);
      labelContainer.append(arrowLabel);
      labelContainer.append(toLabel);
    }

    if (issue.mw) {
      const mwLabel = parseHtml(`<div class="label mw">MW</div>`);
      mwLabel.addEventListener('click', () => copyText("https://www.merriam-webster.com/dictionary/" + encodeURI(issue.mw as string)));
      labelContainer.append(mwLabel)
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
