import { IssueInstance } from '../src/qatool';
import { IssueId } from '../src/issues';

export function expectResult(actualResult: IssueInstance[], expectedResult: string) {
  expect(actualResult).toHaveLength(1);
  expect(actualResult[0].id).toBe(expectedResult);
}

export function expectContainsResult(actualResult: IssueInstance[], expectedResult: string, expectedOccurrences: number) {
  expect(actualResult).toContainEqual({
    id: expectedResult,
    occurrences: expectedOccurrences,
  });
}

export function expectNoResult(actualResult: IssueInstance[]) {
  expect(actualResult).toHaveLength(0);
}

export function ids(issues: IssueInstance[]): IssueId[] {
  const issueIds: IssueId[] = [];
  for (const issue of issues) {
    issueIds.push(issue.id);
  }
  return issueIds;
}
