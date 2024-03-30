import { issues, IssueId, Issue, Company } from "./issues";

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

export function findIssues(text: string, selectedCompanyIndex: number): UiIssue[] {
  return countIssues(text, selectedCompanyIndex).map(toUiIssue);
}

export function countIssues(text: string, selectedCompanyIndex: number): IssueInstance[] {
  const result : IssueInstance[] = [];
  for (const issue of Object.values(issues)) {
    const issueId = issue.id;
    const regex = issue.regex;

    if (!companyMatch(issue, selectedCompanyIndex)) {
      console.log("Not company match; returning");
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

function companyMatch(issue: Issue, selectedCompanyIndex: number): boolean {
  if (issue.appliesTo == null || issue.appliesTo.length == 0) {
    return true;
  }
  switch (selectedCompanyIndex) {
    case 0: // JNC
      return issue.appliesTo!.includes(Company.JNC);
    case 1: // YP
      return issue.appliesTo!.includes(Company.YP);
    default:
      throw new Error("Selected company index out of bounds: " + selectedCompanyIndex);
  }
}
