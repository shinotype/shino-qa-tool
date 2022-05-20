import { issues, IssueId } from "./data";

export interface IssueInstance {
  id: IssueId,
  occurrences: number,
}

interface UiIssue {
  label: string,
  occurrences: number,
  copy?: string,
  paste?: string,
  checkTypes: any,
}

export function findIssues(text: string) {
  const result : IssueInstance[] = [];
  for (const issue of Object.values(issues)) {
    const issueId = issue.id as IssueId;
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
