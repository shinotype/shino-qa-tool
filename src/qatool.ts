import { issues, IssueId } from "./issues";

export interface IssueInstance {
  id: IssueId,
  occurrences: number,
}

export interface UiIssue {
  id: string,
  label: string,
  occurrences: number,
  copy?: string,
  paste?: string,
}

export function findIssues(text: string): UiIssue[] {
  return countIssues(text).map(toUiIssue);
}

export function countIssues(text: string): IssueInstance[] {
  const result : IssueInstance[] = [];
  for (const issue of Object.values(issues)) {
    const issueId = issue.id;
    const regex = issue.regex;

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
    occurrences: issueInstance.occurrences,
    copy: issueData.ui.copy || "",
    paste: issueData.ui.paste || "",
  };
}
