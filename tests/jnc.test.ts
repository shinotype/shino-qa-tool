import { issues } from '../src/issues';
import { expectContainsResult, countIssuesJnc, expectNoResult } from './expectations';

test("towards and toward", () => {
  const result = countIssuesJnc("toWARDS toward toWARDs toWard TOwards TOWARD toward");
  expectContainsResult(result, issues.towards.id, 3);
  expectContainsResult(result, issues.toward.id, 4);
});

test("towards and toward: respect word boundaries", () => {
  const result = countIssuesJnc("untoWARDS untoward untoWARDs untoWard unTOwards unTOWARD untoward");
  expectNoResult(result);
});

test("space before period ignores multiple periods", () => {
  expectNoResult(countIssuesJnc("Hello ... There"));
});

test("two periods ignores three periods", () => {
  expectNoResult(countIssuesJnc("Hello ... There"));
});

test("period preceding question mark ignores multiple periods", () => {
  expectNoResult(countIssuesJnc("Hello...?"));
});

test("period preceding exclamation mark ignores multiple periods", () => {
  expectNoResult(countIssuesJnc("Hello...!"));
});

test("period outside quotes: excludes ellipsis", () => {
  expectNoResult(countIssuesJnc("“wow”... She said"));
});

test("period outside single quotes: excludes ellipses", () => {
  expectNoResult(countIssuesJnc("‘wow’... She said"));
});
