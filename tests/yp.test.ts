import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectContainsResult, expectResult, expectNoResult, countIssuesYp } from './expectations';

test("afterwards", () => {
  const result = countIssuesYp("afterWARDS afterward afterWARDs afterWard AFTERwards AFTERWARD afterward");
  expectContainsResult(result, issues.afterwards2.id, 3);
});

test("axe", () => {
  expectResult(countIssuesYp("an AXe chops wood"), issues.ax.id);
});

test("axe respects word boundaries", () => {
  expectNoResult(countIssuesYp("maxed power"));
});

test("backwards", () => {
  const result = countIssuesYp("backWARDS backward backWARDs backWard BACKwards BACKWARD backward");
  expectContainsResult(result, issues.backwards.id, 3);
});

test("blonde", () => {
  const result = countIssuesYp("blond BLONDE blOND blONDe Blond BLONDE blond");
  expectContainsResult(result, issues.blonde2.id, 3);
});

test("cup noodles", () => {
  expectResult(countIssuesYp("a CuP noOdleS a"), issues.cup_noodles.id);
});

test("email", () => {
  expectResult(countIssuesYp("eMaIL"), issues.email.id);
});

test("first ever", () => {
  expectResult(countIssuesYp("FirSt eVer"), issues.first_ever.id);
});

test("goodbye", () => {
  expectResult(countIssuesYp("GoodByE"), issues.goodbye.id);
});

test("haha", () => {
  expectResult(countIssuesYp("lala HaHA mama"), issues.haha.id);
});

test("hm", () => {
  expectResult(countIssuesYp("abc hM xyz"), issues.hm.id);
});

test("hm: respects word boundaries", () => {
  expectNoResult(countIssuesYp("abchmxyz"));
});

test("inbox", () => {
  expectResult(countIssuesYp("abc InboX xyz"), issues.inbox.id);
});

test("inbox: respects word boundaries", () => {
  expectNoResult(countIssuesYp("abc PInboX xyz"));
  expectNoResult(countIssuesYp("abc InboXs xyz"));
});

test("jeez", () => {
  expectResult(countIssuesYp("JeEz"), issues.jeez.id);
});

test("kohai", () => {
  expectResult(countIssuesYp("KoHaI"), issues.kohai.id);
});

test("mangaka", () => {
  expectResult(countIssuesYp("maNgaKa"), issues.mangaka.id);
});

test("manhwaga", () => {
  expectResult(countIssuesYp("MaNHwaGa"), issues.manhwaga.id);
});

test("no comma too", () => {
  expectResult(countIssuesYp("i want to go tOo"), issues.p_comma_too2.id);
});

test("no comma too respects word boundaries", () => {
  expectNoResult(countIssuesYp("i went and took my leave"));
});

test("no comma either", () => {
  expectResult(countIssuesYp("maybe eiTHer"), issues.p_comma_either2.id);
});

test("rom-com", () => {
  expectResult(countIssuesYp("rom-COM"), issues.rom_com.id);
});

test("shojo", () => {
  expectResult(countIssuesYp("shOjO"), issues.shojo.id);
});

test("shonen", () => {
  expectResult(countIssuesYp("SHoNeN"), issues.shonen.id);
});

test("three dots instead of ellipsis symbol", () => {
  expectResult(countIssuesYp("Wow... Cool"), issues.p_ellipsis5.id);
});

test("towards and toward", () => {
  const result = countIssuesYp("toWARDS toward toWARDs toWard TOwards TOWARD toward");
  expectContainsResult(result, issues.towards2.id, 3);
});

test("towards: respects word boundaries", () => {
  const result = countIssuesYp("untoWARDS untoward untoWARDs untoWard unTOwards unTOWARD untoward");
  expectNoResult(result);
});
