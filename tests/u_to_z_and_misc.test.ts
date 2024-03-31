import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectNoResult, expectContainsResult } from './expectations';

test("uh huh", () => {
  expectResult(countIssues("uh HUH"), issues.uh_huh.id);
});

test("uh huh: respects word boundaries", () => {
  expectNoResult(countIssues("Nuh HUH"));
});

test("uh oh", () => {
  expectResult(countIssues("uh OH"), issues.uh_oh.id);
});

test("uh oh: respects word boundaries", () => {
  expectNoResult(countIssues("Buh OH"));
  expectNoResult(countIssues("uh OHn"));
});

test("ultra-thin", () => {
  expectResult(countIssues("ULTRA-thin"), issues.ultra_thin.id);
});

test("underaged", () => {
  expectResult(countIssues("underAGED"), issues.underaged.id);
});

test("un-", () => {
  expectResult(countIssues("UN-house"), issues.un_hyphen.id);
});

test("un-: respects word boundaries", () => {
  expectNoResult(countIssues("FUN-house"));
});

test("unnamable", () => {
  expectResult(countIssues("UNnamable"), issues.unnamable.id);
});

test("unshakeable", () => {
  expectResult(countIssues("unSHAKEable"), issues.unshakeable.id);
});

test("up-front", () => {
  expectResult(countIssues("UP-front"), issues.up_front.id);
});

test("up front", () => {
  expectResult(countIssues("UP front"), issues.up_front2.id);
});

test("upperhand", () => {
  expectResult(countIssues("upperhand"), issues.upperhand.id);
});

test("vermillion", () => {
  expectResult(countIssues("VERmillion"), issues.vermillion.id);
});

test("vice-like", () => {
  expectResult(countIssues("vice-LIKE"), issues.vice_like.id);
});

test("vicelike", () => {
  expectResult(countIssues("viceLIKE"), issues.vicelike.id);
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

test("wake up call", () => {
  expectResult(countIssues("wake UP call"), issues.wake_up_call.id);
});

test("walkthrough", () => {
  expectResult(countIssues("waLKthrough"), issues.walkthrough.id);
});

test("wash bowl", () => {
  expectResult(countIssues("wash BOWL"), issues.wash_bowl.id);
});

test("watch tower", () => {
  expectResult(countIssues("watch TOWER"), issues.watch_tower.id);
});

test("week-long", () => {
  expectResult(countIssues("week-long"), issues.week_long.id);
});

test("wellbeing", () => {
  expectResult(countIssues("WELLbeing"), issues.wellbeing.id);
});

test("well-kempt", () => {
  expectResult(countIssues("WELL-kempt"), issues.wellkempt.id);
});

test("whole-hearted", () => {
  expectResult(countIssues("whole-HEARTED"), issues.whole_hearted.id);
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

test("willy-nilly", () => {
  expectNoResult(countIssues("WILLY-nilly"));
});

test("wishlist", () => {
  expectResult(countIssues("WISHlist"), issues.wishlist.id);
});

test("witch-like", () => {
  expectResult(countIssues("WITCH-like"), issues.witch_like.id);
});

test("woah", () => {
  expectResult(countIssues("WOAh!"), issues.woah.id);
});

test("woo hoo", () => {
  expectResult(countIssues("woo HOO"), issues.woo_hoo.id);
});

test("woohoo", () => {
  expectResult(countIssues("wooHOO"), issues.woohoo.id);
});

test("work room", () => {
  expectResult(countIssues("work ROOM"), issues.work_room.id);
});

test("work room: respects word boundaries", () => {
  expectNoResult(countIssues("badwork ROOM"));
  expectNoResult(countIssues("work ROOMING"));
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

test("year-long", () => {
  expectResult(countIssues("Year-Long"), issues.year_long.id);
});

test("your grace", () => {
  expectResult(countIssues("your grace"), issues.your_grace1.id);
});

test("your Grace", () => {
  expectResult(countIssues("your Grace"), issues.your_grace2.id);
});

test("Your grace", () => {
  expectResult(countIssues("Your grace"), issues.your_grace3.id);
});

test("your highness", () => {
  expectResult(countIssues("your highness"), issues.your_highness1.id);
});

test("your Highness", () => {
  expectResult(countIssues("your Highness"), issues.your_highness2.id);
});

test("Your highness", () => {
  expectResult(countIssues("Your highness"), issues.your_highness3.id);
});

test("your majesty", () => {
  expectResult(countIssues("your majesty"), issues.your_majesty1.id);
});

test("your Majesty", () => {
  expectResult(countIssues("your Majesty"), issues.your_majesty2.id);
});

test("Your majesty", () => {
  expectResult(countIssues("Your majesty"), issues.your_majesty3.id);
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

test("blond and blonde", () => {
  const result = countIssues("blond BLONDE blOND blONDe Blond BLONDE blond");
  expectContainsResult(result, issues.blond.id, 4);
  expectContainsResult(result, issues.blonde.id, 3);
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

test("spaz", () => {
  expectResult(countIssues("this spaz that"), issues.spaz.id);
});

test("retard", () => {
  expectResult(countIssues("this retard that"), issues.retard.id);
});

test("fuck", () => {
  expectResult(countIssues("this fuck that"), issues.fuck.id);
});
