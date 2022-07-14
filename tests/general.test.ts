import { countIssues, IssueInstance } from '../src/qatool';
import { IssueId, issues } from '../src/issues';
import { expectResult, expectContainsResult } from './expectations';

/**
 * General functionality tests.
 */

test("number of occurrences is incremented for multiple of the same issue", () => {
  const result = countIssues("'''");
  expect(result).toHaveLength(1);
  expect(result[0].occurrences).toBe(3);
});

test("can detect multiple issues", () => {
  const result = countIssues("he's got judgement problems, too, you know.");
  expect(result).toHaveLength(3);
  expectContainsResult(result, issues.too.id, 1);
  expectContainsResult(result, issues.judge.id, 1);
  expectContainsResult(result, issues.apostrophe.id, 1);
})
