import { issues, IssueId, Issue, IssueType } from "./issues";
import { parseHtml, $, copyText } from './utils';

export function init(initContainer: HTMLElement) {
  const container = parseHtml(`<div class="container"></div>`);
  initContainer.append(container);

  const runButton = parseHtml(`<button class="runButton">Run checks</button>`) as HTMLButtonElement;
  const textBox = parseHtml(`<input type="text"></input>`);
  const issueContainer = parseHtml(`<div class="issueContainer"></div>`);

  container.append(runButton);
  container.append(textBox);
  container.append(issueContainer);

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
  appendField(container, "Copy Labels?", "copylabels", issue.ui.copyLabels ? issue.ui.copyLabels.toString() : "false");
  appendField(container, "MW Link", "mw", issue.ui.mw ? issue.ui.mw : "");
  appendType(container, issue);
  return container;
}

function appendField(container: Element, label: string, inputClass: string, field: string) {
  const fieldContainer = parseHtml(`<div class="field"></div>`);
  fieldContainer.appendChild(parseHtml(`<div class="label">` + label + `</div>`));
  fieldContainer.appendChild(parseHtml(`<input type="text" class=` + inputClass + ` value="` + field + `"></input>`));
  container.appendChild(fieldContainer);
}

function appendType(container: Element, issue: Issue) {
  const fieldContainer = parseHtml(`<div class="field"></div>`);
  fieldContainer.appendChild(parseHtml(`<div class="label">` + "Type" + `</div>`));
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
  fieldContainer.appendChild(parseHtml(`<select><option value="pg"` + (issueType == "PG" ? ` selected` : ``) + `>PG</option><option value="sp"` + (issueType == "SP" ? ` selected` : ``) + `>SP</option><option value="SW"` + (issueType == "SW" ? ` selected` : ``) + `>SW</option><option value="SL"` + (issueType == "SL" ? ` selected` : ``) + `>SL</option></select>`));
  container.appendChild(fieldContainer);
}

function generateIssues(issueContainer: Element, textBox: Element) {
  console.log(issueContainer);
}