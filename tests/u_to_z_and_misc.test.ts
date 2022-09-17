import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectNoResult, expectContainsResult } from './expectations';

test("uh huh", () => {
  expectResult(countIssues("uh HUH"), issues.uh_huh.id);
});

test("uh huh: respects word boundaries", () => {
  expectNoResult(countIssues("Nuh HUH"));
});

test("underaged", () => {
  expectResult(countIssues("underAGED"), issues.underaged.id);
});

test("upperhand", () => {
  expectResult(countIssues("upperhand"), issues.upperhand.id);
});

test("vice-versa", () => {
  expectResult(countIssues("vice-VERSA"), issues.vice_versa.id);
});

test("videogame", () => {
  expectResult(countIssues("VIDEOgame"), issues.videogame.id);
});

test("vocal chord", () => {
  expectResult(countIssues("vocal CHORD"), issues.vocal_chord.id);
});

test("wash bowl", () => {
  expectResult(countIssues("wash BOWL"), issues.wash_bowl.id);
});

test("well-kempt", () => {
  expectResult(countIssues("WELL-kempt"), issues.wellkempt.id);
});

test("wide eyed", () => {
  expectResult(countIssues("wide EYED"), issues.wide_eyed.id);
});

test("wide-spread", () => {
  expectResult(countIssues("WIDE-spread"), issues.wide_spread.id);
});

test("willy nilly", () => {
  expectResult(countIssues("WILLY nilly"), issues.willy_nilly.id);
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

test("worst case scenario", () => {
  expectResult(countIssues("WORST case SCENario"), issues.worst_case_scenario.id);
});

test("yada-yada", () => {
  expectResult(countIssues("YADA-yada"), issues.yada_yada.id);
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

test("anymore: respects word boundaries", () => {
  expectNoResult(countIssues("manymore sanymore"));
});


test("any more: respects word boundaries", () => {
  expectNoResult(countIssues("many more bany more"));
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
