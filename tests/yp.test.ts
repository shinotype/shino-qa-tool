import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectContainsResult, expectResult, expectNoResult, countIssuesYp } from './expectations';

test("towards and toward", () => {
  const result = countIssuesYp("toWARDS toward toWARDs toWard TOwards TOWARD toward");
  expectContainsResult(result, issues.towards2.id, 3);
});

test("towards: respects word boundaries", () => {
  const result = countIssuesYp("untoWARDS untoward untoWARDs untoWard unTOwards unTOWARD untoward");
  expectNoResult(result);
});
