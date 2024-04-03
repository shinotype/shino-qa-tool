import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectContainsResult, expectResult, expectNoResult, countIssuesYp } from './expectations';

test("afterwards", () => {
  const result = countIssuesYp("afterWARDS afterward afterWARDs afterWard AFTERwards AFTERWARD afterward");
  expectContainsResult(result, issues.afterwards2.id, 3);
});

test("all of", () => {
  expectResult(countIssuesYp("all OF"), issues.all_of.id);
});

test("all of: respects word boundaries", () => {
  expectNoResult(countIssuesYp("fAll Off"));
});

test("amongst", () => {
  expectResult(countIssuesYp("AmoNgSt"), issues.amongst.id);
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

test("comma and", () => {
  expectResult(countIssuesYp("And, he went to the store"), issues.p_comma_and.id);
});

test("comma and: respects case", () => {
  expectNoResult(countIssuesYp("then and, he went to the store"));
});

test("comma but", () => {
  expectResult(countIssuesYp("But, he went to the store"), issues.p_comma_but.id);
});

test("comma but: respects case", () => {
  expectNoResult(countIssuesYp("then but, he went to the store"));
});

test("comma now", () => {
  expectResult(countIssuesYp("Now, he went to the store"), issues.p_comma_now.id);
});

test("comma now: respects case", () => {
  expectNoResult(countIssuesYp("then now, he went to the store"));
});

test("comma or", () => {
  expectResult(countIssuesYp("Or, he went to the store"), issues.p_comma_or.id);
});

test("comma or: respects case", () => {
  expectNoResult(countIssuesYp("then or, he went to the store"));
});

test("comma so", () => {
  expectResult(countIssuesYp("So, he went to the store"), issues.p_comma_so.id);
});

test("comma so: respects case", () => {
  expectNoResult(countIssuesYp("then so, he went to the store"));
});

test("comma then", () => {
  expectResult(countIssuesYp("Then, he went to the store"), issues.p_comma_then.id);
});

test("comma then: respects case", () => {
  expectNoResult(countIssuesYp("and then, he went to the store"));
});

test("comma yet", () => {
  expectResult(countIssuesYp("Yet, he went to the store"), issues.p_comma_yet.id);
});

test("comma yet: respects case", () => {
  expectNoResult(countIssuesYp("then yet, he went to the store"));
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

test("forwards", () => {
  const result = countIssuesYp("forWARDS forkward forWARDs forWard FORwards FORWARD forward");
  expectContainsResult(result, issues.forwards.id, 3);
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

test("inside of", () => {
  expectResult(countIssuesYp("inside OF"), issues.inside_of.id);
});

test("inside of: respects word boundaries", () => {
  expectNoResult(countIssuesYp("PinsIde Off"));
});

test("jeez", () => {
  expectResult(countIssuesYp("JeEz"), issues.jeez.id);
});

test("know that", () => {
  expectResult(countIssuesYp("knOw ThAT"), issues.know_that.id);
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

test("off of", () => {
  expectResult(countIssuesYp("Off OF"), issues.off_of.id);
});

test("off of: respects word boundaries", () => {
  expectNoResult(countIssuesYp("Poff Off"));
});

test("outside of", () => {
  expectResult(countIssuesYp("ouTside OF"), issues.outside_of.id);
});

test("outside of: respects word boundaries", () => {
  expectNoResult(countIssuesYp("douTsidE Off"));
});

test("rom-com", () => {
  expectResult(countIssuesYp("rom-COM"), issues.rom_com.id);
});

test("say that", () => {
  expectResult(countIssuesYp("SaY ThAT"), issues.say_that.id);
});

test("shojo", () => {
  expectResult(countIssuesYp("shOjO"), issues.shojo.id);
});

test("shonen", () => {
  expectResult(countIssuesYp("SHoNeN"), issues.shonen.id);
});

test("think that", () => {
  expectResult(countIssuesYp("ThInk ThAT"), issues.think_that.id);
});

test("three dots instead of ellipsis symbol", () => {
  expectResult(countIssuesYp("Wow... Cool"), issues.p_ellipsis5.id);
});

test("tomorrow", () => {
  expectResult(countIssuesYp("TomoRrow"), issues.tomorrow.id);
});

test("towards and toward", () => {
  const result = countIssuesYp("toWARDS toward toWARDs toWard TOwards TOWARD toward");
  expectContainsResult(result, issues.towards2.id, 3);
});

test("towards: respects word boundaries", () => {
  const result = countIssuesYp("untoWARDS untoward untoWARDs untoWard unTOwards unTOWARD untoward");
  expectNoResult(result);
});

test("yesterday", () => {
  expectResult(countIssuesYp("yeSterdAy"), issues.yesterday.id);
});

test("for awhile", () => {
  expectResult(countIssuesYp("For AwHilE"), issues.for_awhile.id);
});
