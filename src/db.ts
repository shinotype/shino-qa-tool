import { issues, IssueId, Issue, IssueType } from "./issues";
import { parseHtml, $, copyText, escapeString } from './utils';

import './db.css';
import { isTSImportEqualsDeclaration } from "@babel/types";

export function init(initContainer: HTMLElement) {
  const container = parseHtml(`
      <div class="container">
        <textarea class="textBox"></textarea>
        <button class="runButton">Generate issues</button>
        <button class="addButton">Add new issue</button>
        <div class="issueContainer"></div>
      </div>`);
  initContainer.append(container);

  const issueContainer = container.querySelector(".issueContainer")!;
  const textBox = container.querySelector(".textBox")!;

  container.querySelector(".addButton")?.addEventListener("click", () => {
    addNewIssue(issueContainer);
  });
  container.querySelector(".runButton")?.addEventListener("click", () => {
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
  appendField(container, "ID", "id", idValue);
  appendField(container, "Regex", "regex", regexValue);
  appendField(container, "UI Label", "fromlabel", fromLabel);
  appendField(container, "To Label", "tolabel", copyText);
  appendField(container, "Paste Text", "paste", pasteText);
  appendField(container, "MW Link", "mw", mwText);
  return container;
}

function appendField(container: Element, label: string, inputClass: string, field: string) {
  const fieldContainer = parseHtml(`
      <div class="field">
        <div class="label">${label}</div>
        <input type="text" class="${inputClass}">
      </div>`);
  fieldContainer.querySelector('input')?.setAttribute("value", field);
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
  const issues = issueContainer.querySelectorAll('.issue');
  const issueObjects = [];
  for (const issue of issues) {
    issueObjects.push({
      issueId: getInputValue(issue, "id"),
      regex: getInputValue(issue, "regex"),
      fromLabel: escapeString(getInputValue(issue, "fromlabel")),
      toLabel: escapeString(getInputValue(issue, "toLabel")),
      copy: escapeString(getInputValue(issue, "copy")),
      paste: getInputValue(issue, "paste"),
      mw: getInputValue(issue, "mw"),
      copyLabels: getSelectValue(issue, "copylabels"),
      issueType: getSelectValue(issue, "issuetype"),
    });
  }
  issueObjects.sort((a, b) => {
    const types = ['PG', 'SP', 'SW', 'SL'];
    if (a.issueType != b.issueType) {
      return types.indexOf(a.issueType) - types.indexOf(b.issueType);
    }
    return a.issueId.localeCompare(b.issueId);
  });
  let result = "const idlessIssues = {";
  for (const issue of issueObjects) {
    const ui = `{ label: "${issue.fromLabel}", toLabel: "${issue.toLabel}", copy: "${issue.copy}", paste: "${issue.paste}", mw: "${issue.mw}", copyLabels: ${issue.copyLabels}}`;
    result += `\n${issue.issueId}: { regex: ${issue.regex}, ui: ${ui}, type: IssueType.${issue.issueType}},`;
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
