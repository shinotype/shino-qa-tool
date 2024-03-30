import { UiIssue, findIssues } from './qatool';
import { parseHtml, $, copyText } from './utils';

import './qatool.css';

export function init(initContainer: HTMLElement, textProvider: () => Promise<string>) {
  const container = parseHtml(`<div class="container"></div>`);
  initContainer.append(container);

  const runButton = parseHtml(`<button class="runButton">Run checks</button>`) as HTMLButtonElement;
  const toggleContainer = parseHtml(`<div class="toggleContainer"></div>`);
  toggleContainer.append(runButton);

  const selectCompany = parseHtml(`<select class="companySelect"><option selected value="jnc">JNC</option><option value="yp">YP</option></select>`) as HTMLSelectElement;
  toggleContainer.append(selectCompany);
  container.append(toggleContainer);

  const resultContainer = parseHtml(`
    <div class="resultContainer">
      <div class="issueContainer"></div>
      <div class="noIssuesMessage">No issues found! :)</div>
    </div>`);
  container.append(resultContainer);

  runButton.addEventListener('click', async () => {
    await runChecks(runButton, selectCompany.selectedIndex, resultContainer, textProvider);
  });

  selectCompany.addEventListener('change', async () => {
    await runChecks(runButton, selectCompany.selectedIndex, resultContainer, textProvider);
  });

  // Run once immediately when initialized. This doesn't await the result which is bad but I don't care.
  runChecks(runButton, selectCompany.selectedIndex, resultContainer, textProvider);
}

async function runChecks(
    runButton: HTMLButtonElement,
    selectedCompanyIndex: number,
    resultContainer: Element,
    textProvider: () => Promise<string>) {
  runButton.disabled = true;
  runButton.innerText = 'Checking...';

  const issueContainer = $('.issueContainer', resultContainer);
  const text = await textProvider();
  const result = findIssues(text, selectedCompanyIndex);
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
      const mwCopyLabel = parseHtml(`<div class="label mw copy" title="Copy MW link"><img src="img/link.png"></div>`);
      mwCopyLabel.addEventListener('click', () => copyText("https://www.merriam-webster.com/dictionary/" + encodeURI(issue.mw as string)));
      labelContainer.append(mwCopyLabel);

      const mwGoLabel = parseHtml(`<a href="https://www.merriam-webster.com/dictionary/${encodeURI(issue.mw as string)}" target="_blank" rel="noopener noreferrer"><div class="label mw go" title="Go to MW"><img src="img/share.png"></div></a>`);
      labelContainer.append(mwGoLabel);
    }

    issueContainer.append(issueElement);
  }
}
