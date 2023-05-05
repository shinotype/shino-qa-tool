import { issues, IssueId, Issue, IssueType } from "./issues";
import { parseHtml, $, copyText } from './utils';

import './db.css';

export function init(initContainer: HTMLElement) {
  const container = parseHtml(`<div class="container"></div>`);
  initContainer.append(container);

  const runButton = parseHtml(`<button class="runButton">Run checks</button>`) as HTMLButtonElement;
  const textBox = parseHtml(`<input type="text"></input>`);
  const addButton = parseHtml(`<button class="addButton">Add new issue</button>`) as HTMLButtonElement;
  const issueContainer = parseHtml(`<div class="issueContainer"></div>`);

  container.append(runButton);
  container.append(textBox);
  container.append(issueContainer);

  addButton.addEventListener('click', () => {
    addNewIssue(issueContainer);
  });
  runButton.addEventListener('click', () => {
    generateIssues(issueContainer, textBox);
  });

  populateIssues(issueContainer);
}

function populateIssues(container: Element) {
  for (const issue of Object.values(issues)) {
    container.appendChild(renderIssue(issue));
  }
}

function renderIssue(issue: Issue) : Element {
  const container = parseHtml(`<div class="issue"></div>`);
  appendField(container, "ID", "id", issue.id);
  appendField(container, "Regex", "regex", issue.regex.toString());
  appendField(container, "UI Label", "fromlabel", issue.ui.label);
  appendField(container, "To Label", "tolabel", issue.ui.toLabel ? issue.ui.toLabel : "");
  appendField(container, "Copy Text", "copy", issue.ui.copy ? issue.ui.copy : "");
  appendField(container, "Paste Text", "paste", issue.ui.paste ? issue.ui.paste : "");
  appendField(container, "MW Link", "mw", issue.ui.mw ? issue.ui.mw : "");
  appendCopyLabels(container, issue);
  appendType(container, issue);
  return container;
}

function renderNewIssue() : Element {
  const container = parseHtml(`<div class="issue"></div>`);
  appendField(container, "ID", "id", "");
  appendField(container, "Regex", "regex", "");
  appendField(container, "UI Label", "fromlabel", "");
  appendField(container, "To Label", "tolabel", "");
  appendField(container, "Copy Text", "copy", "");
  appendField(container, "Paste Text", "paste", "");
  appendField(container, "MW Link", "mw", "");
  appendSelect(container, "Copy Labels?", "copylabels", ["true", "false"], "true");
  appendSelect(container, "Type", "issuetype", ["PG", "SP", "SW", "SL"], "SP");
  return container;

function appendField(container: Element, label: string, inputClass: string, field: string) {
  const fieldContainer = parseHtml(`<div class="field"></div>`);
  fieldContainer.appendChild(parseHtml(`<div class="label">` + label + `</div>`));
  fieldContainer.appendChild(parseHtml(`<input type="text" class=` + inputClass + ` value="` + field + `"></input>`));
  container.appendChild(fieldContainer);
}

function appendCopyLabelsFromIssue(container: Element, issue: Issue) {
  appendCopyLabels(container, issue.ui.copyLabels ? issue.ui.copyLabels.toString() : "false");
}

function appendCopyLabels(container: Element, selected: string) {
  appendSelect(container, "Copy Labels?", "copylabels", ["true", "false"], selected);
}

function appendTypeFromIssue(container: Element, issue: Issue) {
  let issueType = "";
  if (issue.type == IssueType.PG) {
    issueType = "PG";
  } else if (issue.type == IssueType.SL) {
    issueType = "SL";
  } else if (issue.type == IssueType.SW) {
    issueType = "SW";
  } else { 
    // default to SP
    issueType = "SP";
  }
  appendType(container, issueType);
}

function appendType(container: Element, selected: string) {
  appendSelect(container, "Type", "issuetype", ["PG", "SP", "SW", "SL"], selected);
}

function appendSelect(container: Element, label: string, inputClass: string, options: Array<string>, selected: string) {
  const fieldContainer = parseHtml(`<div class="field"></div>`);
  fieldContainer.appendChild(parseHtml(`<div class="label">${label}</div>`));
  let optionHtml = ``;
  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    optionHtml += `<option value="${option}"` + (selected == option ? ` selected` : ``) + `>${option}</option>`
  }
  fieldContainer.appendChild(parseHtml(`<select class="${inputClass}">` + optionHtml + `</select>`));
  container.appendChild(fieldContainer);
}

function generateIssues(issueContainer: Element, textBox: Element) {
  let result = "const idlessIssues = {";
  const issues = issueContainer.querySelectorAll('.issue');
  for (let i = 0; i < issues.length; i++) {
    const issue = issues[i];
    const issueId = getInputValue(issue, "id");
    const regex = getInputValue(issue, "regex");
    const fromLabel = getInputValue(issue, "fromlabel");
    const toLabel = getInputValue(issue, "toLabel");
    const copy = getInputValue(issue, "copy");
    const paste = getInputValue(issue, "paste");
    const mw = getInputValue(issue, "mw");
    const copyLabels = getSelectValue(issue, "copylabels");
    const issueType = getSelectValue(issue, "issuetype");
    console.log(issueType);
    result += `${issueId}: { regex: ${regex}, ui: { label: "${fromLabel}", toLabel: "${toLabel}", copy: "${copy}", paste: "${paste}", mw: "${mw}", copyLabels: ${copyLabels}}, type: IssueType.${issueType}},`
  }
  result += "};";
  (textBox as HTMLInputElement).value = result;
}

function getInputValue(issue: Element, selector: string) {
  return (issue.querySelector('.' + selector) as HTMLInputElement)?.value;
}

function getSelectValue(issue: Element, selector: string) {
  return (issue.querySelector('.' + selector) as HTMLInputElement)?.value;
}

function addNewIssue(issueContainer: Element) {
}

