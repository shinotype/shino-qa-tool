import { issues, IssueId, Issue, IssueType, StyleGuide } from "./issues";
import { parseHtml, $, copyText, escapeString } from './utils';

import './db.css';
import { isTSImportEqualsDeclaration } from "@babel/types";

export function init(initContainer: HTMLElement) {
  const container = parseHtml(`
      <div class="container">
        <div class="controls">
          <textarea class="textBox"></textarea>
          <button class="addButton">+</button>
        </div>
        <div class="issueContainer"></div>
      </div>`);
  initContainer.append(container);

  const issueContainer = container.querySelector(".issueContainer")!;
  const textBox = container.querySelector(".textBox")!;
  textBox.addEventListener("click", () => {
    copyText((textBox as HTMLInputElement).value);
  });

  container.querySelector(".addButton")?.addEventListener("click", () => {
    addNewIssue(issueContainer);
  });

  populateIssues(issueContainer);

  issueContainer.addEventListener("change", () => {
      generateIssues(issueContainer, textBox);
  });
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
  appendStyleGuidesFromIssue(container, issue);
  return container;
}

function renderNewIssue() : Element {
  const container = renderIssue("", "", "", "", "", "", "");
  appendSelect(container, "Copy Labels?", "copylabels", ["true", "false"], "true");
  appendSelect(container, "Type", "issuetype", ["PG", "SP", "RW", "SW", "SL"], "SP");
  appendCheckbox(container, "Style Guide", "styleguides", ["JNC", "YP"], []);
  return container;
}

function renderIssue(idValue: string, regexValue: string, fromLabel: string, toLabel: string, copyText: string, pasteText: string, mwText: string) {
  const container = parseHtml(`<div class="issue"></div>`);
  appendField(container, "ID", "id", idValue);
  appendField(container, "Regex", "regex", regexValue);
  appendField(container, "From Label", "fromlabel", fromLabel);
  appendField(container, "To Label", "tolabel", toLabel);
  appendField(container, "Copy", "copy", copyText);
  appendField(container, "Paste", "paste", pasteText);
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
  appendSelect(container, "Type", "issuetype", ["PG", "SP", "RW", "SW", "SL"], selected);
}

function appendStyleGuidesFromIssue(container: Element, issue: Issue) {
  appendStyleGuides(container, styleGuidesToString(issue.styleGuides));
}

function appendStyleGuides(container: Element, selected: string[]) {
  appendCheckbox(container, "Style Guides?", "styleguides", ["JNC", "YP"], selected);
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

function appendCheckbox(container: Element, label: string, inputClass: string, options: Array<string>, selected: string[]) {
  const fieldContainer = parseHtml(`<div class="field"></div>`);
  fieldContainer.appendChild(parseHtml(`<div class="label">${label}</div>`));
  for (let i = 0; i < options.length; i++) {
    let option = options[i];
    // append date to the ID to make it unique on this page so that the label is applied to the correct checkbox
    let optionId = option + Date.now().toString();
    fieldContainer.append(parseHtml(`<input type="checkbox" class="${inputClass}" id="${optionId}" name="${option}"` + (selected.includes(option) ? ` checked` : ``) + `></input>`));
    fieldContainer.append(parseHtml(`<label for="${optionId}">${option}</label>`));
  }
  container.appendChild(fieldContainer);
}

function generateIssues(issueContainer: Element, textBox: Element) {
  const issues = issueContainer.querySelectorAll('.issue');
  const issueObjects : any[] = [];
  for (const issue of issues) {
    issueObjects.push({
      issueId: getInputValue(issue, "id"),
      regex: getInputValue(issue, "regex"),
      fromLabel: escapeString(getInputValue(issue, "fromlabel")),
      toLabel: escapeString(getInputValue(issue, "tolabel")),
      copy: escapeString(getInputValue(issue, "copy")),
      paste: escapeString(getInputValue(issue, "paste")),
      mw: getInputValue(issue, "mw"),
      copyLabels: getSelectValue(issue, "copylabels"),
      issueType: getSelectValue(issue, "issuetype"),
      styleGuides: getCheckboxValues(issue, "styleguides"),
    });
  }
  issueObjects.sort((a, b) => {
    const types = ['PG', 'SP', 'RW', 'SW', 'SL'];
    if (a.issueType != b.issueType) {
      return types.indexOf(a.issueType) - types.indexOf(b.issueType);
    }
    return a.issueId.localeCompare(b.issueId);
  });
  // TODO: string += is slow
  let result = "const idlessIssues = {";
  for (const issue of issueObjects) {
    const styleGuidesArray = ["["];
    for (let i = 0; i < issue.styleGuides.length; i++) {
      styleGuidesArray.push("StyleGuide.");
      styleGuidesArray.push(issue.styleGuides[i])
      if (i < issue.styleGuides.length - 1) {
        styleGuidesArray.push(",");
      }
    }
    styleGuidesArray.push("]");
    const ui = `{ label: "${issue.fromLabel}", toLabel: "${issue.toLabel}", copy: "${issue.copy}", paste: "${issue.paste}", mw: "${issue.mw}", copyLabels: ${issue.copyLabels}}`;
    const toAdd = `\n${issue.issueId}: { regex: ${issue.regex}, ui: ${ui}, type: IssueType.${issue.issueType}, styleGuides: ${styleGuidesArray.join("")}}, `;
    result += toAdd;
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

function getCheckboxValues(issue: Element, selector: string) {
  const checkboxes = issue.querySelectorAll('.' + selector);
  const result = [];
  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i] as HTMLInputElement;
    if (checkbox.checked) {
      result.push(checkbox.name);
    }
  }
  return result;
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
  } else if (input == IssueType.RW) {
    issueType = "RW";
  } else if (input == IssueType.SW) {
    issueType = "SW";
  }
  return issueType;
}

function styleGuidesToString(input?: Symbol[]) : string[] {
  if (input == null || input.length == 0) {
    return [];
  }
  const result = [];
  for (let i = 0; i < input.length; i++) {
    const styleGuide = input[i];
    if (styleGuide == StyleGuide.JNC) {
      result.push("JNC");
    } else if (styleGuide == StyleGuide.YP) {
      result.push("YP");
    }
  }
  return result;
} 

function stringToIssueType(input: string) : Symbol  {
  // default to SP
  let issueType = IssueType.SP;
  if (input == "PG") {
    issueType = IssueType.PG;
  } else if (input == "SL") {
    issueType = IssueType.SL;
  } else if (input == "RW") {
    issueType = IssueType.RW;
  } else if (input = "SW") {
    issueType = IssueType.SW;
  }
  return issueType;
}