import { issues, IssueId, Issue, StyleGuide } from "./issues";

export interface IssueInstance {
  id: IssueId,
  occurrences: number,
}

export interface UiIssue {
  id: string,
  label: string,
  toLabel?: string,
  occurrences: number,
  copy?: string,
  paste?: string,
  mw?: string,
}

export function findIssues(text: string, selectedStyleGuide: number): UiIssue[] {
  return countIssuesUsingStyleGuide(text, selectedStyleGuide).map(toUiIssue);
}

export function countIssues(text: string): IssueInstance[] {
  return countIssuesUsingStyleGuide(text, -1);
}

export function countIssuesUsingStyleGuide(text: string, selectedStyleGuide: number): IssueInstance[] {
  const result : IssueInstance[] = [];
  for (const issue of Object.values(issues)) {
    const issueId = issue.id;
    const regex = issue.regex;

    if (!appliesForSelectedStyleGuide(issue, selectedStyleGuide)) {
      continue;
    }

    const numMatches = (text.match(regex) || []).length;

    if (numMatches > 0) {
      result.push({
        id: issueId,
        occurrences: numMatches,
      });
    }
  }
  return result;
}

function toUiIssue(issueInstance: IssueInstance): UiIssue {
  const issueData = issues[issueInstance.id];
  return {
    id: issueData.id,
    label: issueData.ui.label,
    toLabel: issueData.ui.toLabel || "",
    occurrences: issueInstance.occurrences,
    copy: issueData.ui.copyLabels ? issueData.ui.label : (issueData.ui.copy || ""),
    paste: issueData.ui.copyLabels ? issueData.ui.toLabel : (issueData.ui.paste || ""),
    mw: issueData.ui.mw || "",
  };
}

function appliesForSelectedStyleGuide(issue: Issue, selectedStyleGuide: number): boolean {
  if (issue.styleGuides == null || issue.styleGuides.length == 0) {
    return true;
  }
  switch (selectedStyleGuide) {
    case 0: // JNC
      return issue.styleGuides!.includes(StyleGuide.JNC);
    case 1: // YP
      return issue.styleGuides!.includes(StyleGuide.YP);
    case -1: // not selected
    default:
      // if no guide selected or unknown guide provided, assume the rule applies
      return true;
  }
}
