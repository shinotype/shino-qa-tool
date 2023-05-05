import { issues, IssueId, Issue, IssueType } from "./issues";
import { parseHtml, $, copyText, escapeString } from './utils';

import './db.css';
import { isTSImportEqualsDeclaration } from "@babel/types";

export function init(initContainer: HTMLElement) {
  const container = parseHtml(`<div class="container"></div>`);
  initContainer.append(container);

  const runButton = parseHtml(`<button class="runButton">Run checks</button>`) as HTMLButtonElement;
  const textBox = parseHtml(`<textarea class="textBox"></textarea>`);
  const addButton = parseHtml(`<button class="addButton">Add new issue</button>`) as HTMLButtonElement;
  const issueContainer = parseHtml(`<div class="issueContainer"></div>`);

  container.append(runButton);
  container.append(textBox);
  container.append(addButton);
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
    container.appendChild(renderIssueFromIssue(issue));
  }
}

function renderIssueFromIssue(issue: Issue) : Element {
  const container = renderIssue(issue.id, issue.regex.toString(), issue.ui.label, issue.ui.toLabel ? issue.ui.toLabel : "", issue.ui.copy ? issue.ui.copy : "", issue.ui.paste ? issue.ui.paste : "", issue.ui.mw ? issue.ui.mw : "");
  appendCopyLabelsFromIssue(container, issue);
  appendTypeFromIssue(container, issue);
  return container;
}

function renderNewIssue() : Element {
  const container = renderIssue("", "", "", "", "", "", "");
  appendSelect(container, "Copy Labels?", "copylabels", ["true", "false"], "true");
  appendSelect(container, "Type", "issuetype", ["PG", "SP", "SW", "SL"], "SP");
  return container;
}

function renderIssue(idValue: string, regexValue: string, fromLabel: string, toLabel: string, copyText: string, pasteText: string, mwText: string) {
  const container = parseHtml(`<div class="issue"></div>`);
  appendField(container, "ID", "id", "");
  appendField(container, "Regex", "regex", "");
  appendField(container, "UI Label", "fromlabel", "");
  appendField(container, "To Label", "tolabel", "");
  appendField(container, "Copy Text", "copy", "");
  appendField(container, "Paste Text", "paste", "");
  appendField(container, "MW Link", "mw", "");
  return container;
}

function appendField(container: Element, label: string, inputClass: string, field: string) {
  const fieldContainer = parseHtml(`<div class="field"></div>`);
  fieldContainer.appendChild(parseHtml(`<div class="label">` + label + `</div>`)); 
  let inputElement = parseHtml(`<input type="text" class="` + inputClass + `"></input>`);
  inputElement.setAttribute("value", field);
  fieldContainer.appendChild(inputElement);
  container.appendChild(fieldContainer);
}

function appendCopyLabelsFromIssue(container: Element, issue: Issue) {
  appendCopyLabels(container, issue.ui.copyLabels ? issue.ui.copyLabels.toString() : "false");
}

function appendCopyLabels(container: Element, selected: string) {
  appendSelect(container, "Copy Labels?", "copylabels", ["true", "false"], selected);
}

function appendTypeFromIssue(container: Element, issue: Issue) {
  appendType(container, issueTypeToString(issue.type));
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
    const fromLabel = escapeString(getInputValue(issue, "fromlabel"));
    const toLabel = escapeString(getInputValue(issue, "toLabel"));
    const copy = escapeString(getInputValue(issue, "copy"));
    const paste = getInputValue(issue, "paste");
    const mw = getInputValue(issue, "mw");
    const copyLabels = getSelectValue(issue, "copylabels");
    const issueType = getSelectValue(issue, "issuetype");
    result += `\n${issueId}: { regex: ${regex}, ui: { label: "${fromLabel}", toLabel: "${toLabel}", copy: "${copy}", paste: "${paste}", mw: "${mw}", copyLabels: ${copyLabels}}, type: IssueType.${issueType}},`
  }
  result += "};";

  (textBox as HTMLInputElement).value = result;
}

function getInputValue(issue: Element, selector: string) {
  return (issue.querySelector('.' + selector) as HTMLInputElement)?.value ?? "";
}

function getSelectValue(issue: Element, selector: string) {
  return (issue.querySelector('.' + selector) as HTMLInputElement)?.value ?? "";
}

function addNewIssue(issueContainer: Element) {
  issueContainer.prepend(renderNewIssue());
}

function issueTypeToString(input : Symbol) : string {
  // default to SP
  let issueType = "SP";
  if (input == IssueType.PG) {
    issueType = "PG";
  } else if (input == IssueType.SL) {
    issueType = "SL";
  } else if (input == IssueType.SW) {
    issueType = "SW";
  }
  return issueType;
}

function stringToIssueType(input: string) : Symbol  {
  // default to SP
  let issueType = IssueType.SP;
  if (input == "PG") {
    issueType = IssueType.PG;
  } else if (input == "SL") {
    issueType = IssueType.SL;
  } else if (input = "SW") {
    issueType = IssueType.SW;
  }
  return issueType;
}
