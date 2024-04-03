import { issues } from '../src/issues';
import { expectResult, expectContainsResult, countIssuesJnc, expectNoResult } from './expectations';

test("afterwards and afterward", () => {
  const result = countIssuesJnc("afterWARDS afterward afterWARDs afterWard AFTERwards AFTERWARD afterward");
  expectContainsResult(result, issues.afterwards.id, 3);
  expectContainsResult(result, issues.afterward.id, 4);
});

test("ahaha", () => {
  expectContainsResult(countIssuesJnc("ahaha"), issues.ahaha.id, 1);
})

test("ax", () => {
  expectResult(countIssuesJnc("an AX chops wood"), issues.axe.id);
});

test("ax respects word boundaries", () => {
  expectNoResult(countIssuesJnc("maximum pax power"));
});

test("blond and blonde", () => {
  const result = countIssuesJnc("blond BLONDE blOND blONDe Blond BLONDE blond");
  expectContainsResult(result, issues.blond.id, 4);
  expectContainsResult(result, issues.blonde.id, 3);
});

test("comma too", () => {
  expectResult(countIssuesJnc("i want to go, tOo"), issues.p_comma_too.id);
});

test("comma too respects word boundaries", () => {
  expectNoResult(countIssuesJnc("i went, took my leave"));
});

test("comma either", () => {
  expectResult(countIssuesJnc("maybe, eiTHer"), issues.p_comma_either.id);
});

test("ellipsis symbol", () => {
  expectResult(countIssuesJnc("Wow… Cool"), issues.p_ellipsis4.id);
});

test("geez", () => {
  expectResult(countIssuesJnc("GeeZ"), issues.geez.id);
});

test("geez respects word boundaries", () => {
  expectNoResult(countIssuesJnc("geezer"));
});

test("hurrah", () => {
  expectResult(countIssuesJnc("huRRAH"), issues.hurrah.id);
});

test("hurray", () => {
  expectResult(countIssuesJnc("HurRAY"), issues.hurray.id);
});

test("towards and toward", () => {
  const result = countIssuesJnc("toWARDS toward toWARDs toWard TOwards TOWARD toward");
  expectContainsResult(result, issues.towards.id, 3);
  expectContainsResult(result, issues.toward.id, 4);
});

test("towards and toward: respect word boundaries", () => {
  const result = countIssuesJnc("untoWARDS untoward untoWARDs untoWard unTOwards unTOWARD untoward");
  expectNoResult(result);
});

test("twin tail", () => {
  expectResult(countIssuesJnc("TWIN tail"), issues.twin_tail.id);
});

test("twin-tail", () => {
  expectResult(countIssuesJnc("twin-TAIL"), issues.twin_tail2.id);
});

test("twintail", () => {
  expectResult(countIssuesJnc("twinTAIL"), issues.twintail.id);
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

test("woo hoo", () => {
  expectResult(countIssuesJnc("woo HOO"), issues.woo_hoo.id);
});

test("woohoo", () => {
  expectResult(countIssuesJnc("wooHOO"), issues.woohoo.id);
});

