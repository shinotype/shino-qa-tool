import { issues, IssueId, IssueInstance, UiIssue } from "./data";

export function findIssues(text: string) {
  return countIssues(text);
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

export function renderIssues(issues: IssueInstance[]): UiIssue[] {

}
