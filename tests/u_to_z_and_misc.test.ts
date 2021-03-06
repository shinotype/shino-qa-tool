import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectContainsResult } from './expectations';

test("underaged", () => {
  expectResult(countIssues("underAGED"), issues.underaged.id);
});

test("vice-versa", () => {
  expectResult(countIssues("vice-VERSA"), issues.vice_versa.id);
});

test("well-kempt", () => {
  expectResult(countIssues("WELL-kempt"), issues.wellkempt.id);
});

test("wishlist", () => {
  expectResult(countIssues("WISHlist"), issues.wishlist.id);
});

test("woah", () => {
  expectResult(countIssues("WOAh!"), issues.woah.id);
});

test("worshiping", () => {
  expectResult(countIssues("WORShiping"), issues.worshiping.id);
});

test("worshiper", () => {
  expectResult(countIssues("woRshipEr"), issues.worshiper.id);
});

test("afterwards and afterward", () => {
  const result = countIssues("afterWARDS afterward afterWARDs afterWard AFTERwards AFTERWARD afterward");
  expectContainsResult(result, issues.afterwards.id, 3);
  expectContainsResult(result, issues.afterward.id, 4);
});

test("anymore and any more", () => {
  const result = countIssues("anymore any more anyMORE ANY more any MORE");
  expectContainsResult(result, issues.anymore.id, 2);
  expectContainsResult(result, issues.any_more.id, 3);
});

test("further and farther", () => {
  const result = countIssues("further FURTHER farTher FARTHER farthER");
  expectContainsResult(result, issues.further.id, 2);
  expectContainsResult(result, issues.farther.id, 3);
});

test("leapt and leaped", () => {
  const result = countIssues("leaped LEAPED leaPT LEAPT lEAPt");
  expectContainsResult(result, issues.leaped.id, 2);
  expectContainsResult(result, issues.leapt.id, 3);
});

test("towards and toward", () => {
  const result = countIssues("toWARDS toward toWARDs toWard TOwards TOWARD toward");
  expectContainsResult(result, issues.towards.id, 3);
  expectContainsResult(result, issues.toward.id, 4);
});
