import { DATA } from "./data";

export interface Issue {
  id: string,
  occurrences: number,
}

interface UiIssue {
  label: string,
  occurrences: number,
  copy?: string,
  paste?: string,
  checkTypes: any,
}

export function findIssues(text: string): Issue[] {
  const result : Issue[] = [];
  for (let i = 0; i < DATA.length; i++) {
    const issue = DATA[i];
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
