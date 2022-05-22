import { issues, IssueId } from "./issues";

interface IssueInstance {
  id: IssueId,
  occurrences: number,
}

interface UiIssue {
  id: string,
  label: string,
  occurrences: number,
  copy?: string,
  paste?: string,
}

export function findIssues(text: string) {
  const issues = countIssues(text);
  return renderIssues(issues);
}

function countIssues(text: string): IssueInstance[] {
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

function renderIssues(issueInstances: IssueInstance[]): UiIssue[] {
  const result : UiIssue[] = [];
  for (const issueInstance of issueInstances) {
    const issueData = issues[issueInstance.id];
    result.push({
      id: issueData.id,
      label: issueData.ui.label,
      occurrences: issueInstance.occurrences,
      copy: issueData.ui.copy || "",
      paste: issueData.ui.paste || "",
    });
  }
  return result;
}
