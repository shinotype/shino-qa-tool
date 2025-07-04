import { issues } from '../src/issues';
import { expectResult, expectContainsResult, countIssuesJnc, expectNoResult } from './expectations';

test("adzuki", () => {
  expectResult(countIssuesJnc("AdZuKi beans"), issues.adzuki.id);
});

test("afterwards and afterward", () => {
  const result = countIssuesJnc("afterWARDS afterward afterWARDs afterWard AFTERwards AFTERWARD afterward");
  expectContainsResult(result, issues.afterwards.id, 3);
  expectContainsResult(result, issues.afterward.id, 4);
});

test("ahaha", () => {
  expectContainsResult(countIssuesJnc("ahaha"), issues.ahaha.id, 1);
})

test("animes", () => {
  expectResult(countIssuesJnc("My favorite aniMes are"), issues.animes.id);
});

test("ax", () => {
  expectResult(countIssuesJnc("an AX chops wood"), issues.axe.id);
});

test("ax respects word boundaries", () => {
  expectNoResult(countIssuesJnc("maximum pax power"));
});

test("backlines", () => {
  const result = countIssuesJnc("backLINES of the war");
  // this triggers the "backline (adjective) rule, so we can't assert there's only one issue
  expectContainsResult(result, issues.backlines.id, 1);
});

test("backline", () => {
  expectResult(countIssuesJnc("backLINE warrior"), issues.backline1.id);
});

test("back line", () => {
  expectResult(countIssuesJnc("BACK line"), issues.backline2.id);
});

test("backward and backwards", () => {
  const result = countIssuesJnc("backWARDS backward backWARDs backWard bACKwards BACKWARD backward");
  expectContainsResult(result, issues.backwards.id, 3);
  expectContainsResult(result, issues.backward.id, 4);
});

test("battle-ax", () => {
  expectResult(countIssuesJnc("this is my baTTle-ax"), issues.battle_ax.id);
})

test("battle-ax: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("this is my battle-axe"));
})

test("battle royal", () => {
  expectResult(countIssuesJnc("it's a battle royal!"), issues.battle_royal.id);
})

test("battle royal: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("go to battle royally!"));
})

test("bite-size", () => {
  expectResult(countIssuesJnc("BITE-size"), issues.bite_size.id);
});

test("bite-size: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("BITE-sized"));
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

test("'cos", () => {
  expectResult(countIssuesJnc("’cos I wanted to"), issues.cos.id);
});

test("'cos: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("’cosine I wanted to"));
});

test("'coz", () => {
  expectResult(countIssuesJnc("’coz I wanted to"), issues.coz.id);
});

test("'coz: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("’cozing I wanted to"));
});

test("downward and downwards", () => {
  const result = countIssuesJnc("downWARDS downward downWARDs DOWNWard DOWNwards downWARD DOWNward");
  expectContainsResult(result, issues.downwards.id, 3);
  expectContainsResult(result, issues.downward.id, 4);
});

test("dungeon-dive", () => {
  expectResult(countIssuesJnc("dungeon-DIVE"), issues.dungeon_dive.id);
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

test("greatax", () => {
  expectResult(countIssuesJnc("this is my GREATax"), issues.greatax.id);
})

test("greatax: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("this is my GREATaxe"));
})

test("hurrah", () => {
  expectResult(countIssuesJnc("huRRAH"), issues.hurrah.id);
});

test("hurray", () => {
  expectResult(countIssuesJnc("HurRAY"), issues.hurray.id);
});

test("IDs", () => {
  expectResult(countIssuesJnc("these IDs are mine"), issues.ids.id);
});

test("IDs: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("these katyDIDs are mine"));
  expectNoResult(countIssuesJnc("these idso are mine"));
});

test("IDed", () => {
  expectResult(countIssuesJnc("he was IDed as the culprit"), issues.ided.id);
});

test("IDed: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("dided"));
  expectNoResult(countIssuesJnc("ideded"));
});

test("IDing", () => {
  expectResult(countIssuesJnc("he was IDing himself as the culprit"), issues.iding.id);
});

test("IDing: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("diding"));
  expectNoResult(countIssuesJnc("idinged"));
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

test("kimonos", () => {
  expectResult(countIssuesJnc("so many KImonos!"), issues.kimonos.id);
});

test("live-stream", () => {
  expectResult(countIssuesJnc("live-STREAM"), issues.live_stream2.id);
});

test("live stream", () => {
  expectResult(countIssuesJnc("live STREAM"), issues.live_stream3.id);
});

test("kouhai", () => {
  expectResult(countIssuesJnc("He is my KOUhai!"), issues.kouhai.id);
});

test("mangas", () => {
  expectResult(countIssuesJnc("My favorite manGas are"), issues.mangas.id);
});

test("midsize", () => {
  expectResult(countIssuesJnc("a midSIze dog"), issues.midsize.id);
});

test("midsize: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("a midSIzed dog"));
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

test("oversize", () => {
  expectResult(countIssuesJnc("an overSIze dog"), issues.oversize.id);
});

test("oversize: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("a overSIzed dog"));
});

test("pickax", () => {
  expectResult(countIssuesJnc("this is my PICKax"), issues.pickax.id);
})

test("pickax: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("this is my PICKaxe"));
})

test("poleax", () => {
  expectResult(countIssuesJnc("this is my POLEax"), issues.poleax.id);
})

test("poleax: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("this is my POLEaxe"));
})

test("Q & A", () => {
  expectResult(countIssuesJnc("We will do a Q & A session"), issues.q_and_a.id);
});

test("Q and A", () => {
  expectResult(countIssuesJnc("We will do a Q and A session"), issues.q_and_a2.id);
});

test("R & D", () => {
  expectResult(countIssuesJnc("We will do a R & D session"), issues.r_and_d.id);
});

test("rock paper scissors", () => {
  expectResult(countIssuesJnc("rOCK paper scissors"), issues.rock_paper_scissors.id);
});

test("saintess", () => {
  expectResult(countIssuesJnc("she is the saINTess"), issues.saintess.id);
});

test("sempai", () => {
  expectResult(countIssuesJnc("he is my SEMPai"), issues.sempai.id);
});

test("senpais", () => {
  expectResult(countIssuesJnc("I love all my senpais!"), issues.senpais.id);
});

test("shoujo", () => {
  expectResult(countIssuesJnc("I love to read SHOUjo!"), issues.shoujo.id);
});

test("shounen", () => {
  expectResult(countIssuesJnc("I love to read shouNEN!"), issues.shounen.id);
});

test("shousetsuka", () => {
  expectResult(countIssuesJnc("Shousetsuka ni narou"), issues.shousetsuka.id);
});

test("-size", () => {
  expectResult(countIssuesJnc("a big-size drink"), issues._size.id);
});

test("-size: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("a big-sized drink"));
});


test("spell book", () => {
  expectResult(countIssuesJnc("I read a SPELL book"), issues.spell_book.id);
});

test("staffs", () => {
  expectResult(countIssuesJnc("wooden stafFs lined the wall"), issues.staffs.id);
});

test("straight-up", () => {
  expectResult(countIssuesJnc("STRAIGHT-up"), issues.straight_up.id);
});

test("Student Council", () => {
  expectResult(countIssuesJnc("she is Student Council president"), issues.student_council.id);
});

test("Student Council: case sensitive", () => {
  expectNoResult(countIssuesJnc("she is student council president"));
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

test("vice-", () => {
  expectResult(countIssuesJnc("vIcE-presIdent"), issues.vice_.id);
});

test("vice-: respects word boundaries", () => {
  expectNoResult(countIssuesJnc("devIcE-presIdent"));
});

test("vtuber", () => {
  expectResult(countIssuesJnc("she is a vtuber!"), issues.vtuber.id);
});

test("vtuber: case sensitive", () => {
  expectNoResult(countIssuesJnc("she is a VTuber!"));
});

test("yookai", () => {
  expectResult(countIssuesJnc("look at the yōkAi"), issues.yookai.id);
});

test("youkai", () => {
  expectResult(countIssuesJnc("look at the youkAi"), issues.youkai.id);
});

test("yukatas", () => {
  expectResult(countIssuesJnc("they wore yuKatas to the festival"), issues.yukatas.id);
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

test("über", () => {
  expectResult(countIssuesJnc("an übeRmensch"), issues.uber.id);
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

