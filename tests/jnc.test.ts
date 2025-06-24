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

test("backward and backwards", () => {
  const result = countIssuesJnc("backWARDS backward backWARDs backWard bACKwards BACKWARD backward");
  expectContainsResult(result, issues.backwards.id, 3);
  expectContainsResult(result, issues.backward.id, 4);
});

test("battle royal", () => {
  expectResult(countIssuesJnc("it's a battle royal!"), issues.battle_royal.id);
})

test("battle royal: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("go to battle royally!"));
})

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

test("downward and downwards", () => {
  const result = countIssuesJnc("downWARDS downward downWARDs DOWNWard DOWNwards downWARD DOWNward");
  expectContainsResult(result, issues.downwards.id, 3);
  expectContainsResult(result, issues.downward.id, 4);
});

test("e-book", () => {
  expectResult(countIssuesJnc("I read an e-book."), issues.e_book.id);
});

test("e-book: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("I read a she-book."));
});


test("e-mail", () => {
  expectResult(countIssuesJnc("I sent her an e-mail."), issues.e_mail.id);
});

test("e-mail: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("I sent her an she-mail."));
});

test("ellipsis symbol", () => {
  expectResult(countIssuesJnc("Wow… Cool"), issues.p_ellipsis4.id);
});

test("forward and forwards", () => {
  const result = countIssuesJnc("forWARDS forward forWARDs forWard FORwards FORWARD forward");
  expectContainsResult(result, issues.forwards.id, 3);
  expectContainsResult(result, issues.forward.id, 4);
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

test("Internet", () => {
  expectResult(countIssuesJnc("I went on the Internet."), issues.internet.id);
});

test("Internet: case sensitive", () => {
  expectNoResult(countIssuesJnc("I went on the internet."));
});

test("inward and inwards", () => {
  const result = countIssuesJnc("inWARDS inward inWARDs INWard INwards inWARD inward");
  expectContainsResult(result, issues.inwards.id, 3);
  expectContainsResult(result, issues.inward.id, 4);
});

test("jousei", () => {
  expectResult(countIssuesJnc("I love to read JOUsei!"), issues.jousei.id);
});

test("kouhai", () => {
  expectResult(countIssuesJnc("He is my KOUhai!"), issues.kouhai.id);
});

test("outa", () => {
  expectResult(countIssuesJnc("We gotta get ouTa dodge!"), issues.outa.id);
});

test("outa: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("I am abouta go crazy!"));
  expectNoResult(countIssuesJnc("There is an outage!"));
});

test("outward and outwards", () => {
  const result = countIssuesJnc("outWARDS outward outWARDs OUTWard outwards OUTWARD outward");
  expectContainsResult(result, issues.outwards.id, 3);
  expectContainsResult(result, issues.outward.id, 4);
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

test("upward and upwards", () => {
  const result = countIssuesJnc("upWARDS upward upWARDs UPWard upwards upWARD upward");
  expectContainsResult(result, issues.upwards.id, 3);
  expectContainsResult(result, issues.upward.id, 4);
});

test("woo hoo", () => {
  expectResult(countIssuesJnc("woo HOO"), issues.woo_hoo.id);
});

test("woohoo", () => {
  expectResult(countIssuesJnc("wooHOO"), issues.woohoo.id);
});

