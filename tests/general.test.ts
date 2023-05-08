import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectContainsResult } from './expectations';

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
  expectContainsResult(result, issues.p_comma_too.id, 1);
  expectContainsResult(result, issues.judge.id, 1);
  expectContainsResult(result, issues.p_straight_pos.id, 1);
})
