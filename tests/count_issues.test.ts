import { countIssues } from '../src/qatool';
import { IssueId, IssueInstance, issues } from '../src/data';

test("number of occurrences is incremented for multiple of the same issue", () => {
  const result = countIssues("'''");
  expect(result).toHaveLength(1);
  expect(result[0].occurrences).toBe(3);
});

test("double spaces", () => {
  expectResult(countIssues("hello  goodbye"), issues.space.id);
});

test("straight single quote", () => {
  expectResult(countIssues("it's no big deal"), issues.apostrophe.id);
});

test("straight double quote", () => {
  expectResult(countIssues("he said \"okay but"), issues.quote.id);
});

test("comma too", () => {
  expectResult(countIssues("i want to go, tOo"), issues.too.id);
});

test("comma too respects word boundaries", () => {
  expectNoResult(countIssues("i went, took my leave"));
});

test("comma either", () => {
  expectResult(countIssues("maybe, eiTHer"), issues.either.id);
});

test("!?", () => {
  expectResult(countIssues("really!?"), issues.bang.id);
});

test("!!", () => {
  expectResult(countIssues("wow!! amazing"), issues.bang2.id);
});

test("!! rule ignores !!!", () => {
  expectNoResult(countIssues("wow!!! amazing"));
});

test("....", () => {
  expectResult(countIssues("Wow.... Cool"), issues.ellipsis1.id);
});

test("... [a-z]", () => {
  expectResult(countIssues("okay... me too"), issues.ellipsis2.id);
});

test("...[A-Z]", () => {
  expectResult(countIssues("why...Not"), issues.ellipsis3.id);
});

test("ellipsis symbol", () => {
  expectResult(countIssues("Wow… Cool"), issues.ellipsis4.id);
});

test("—[space]", () => {
  expectResult(countIssues("wow— no"), issues.emdash1.id);
});

test("[space]—", () => {
  expectResult(countIssues("wow —no"), issues.emdash2.id);
});

test("'cause (wrong curly quote)", () => {
  expectResult(countIssues("‘cause"), issues.causepos.id);
});

test("'sup (wrong curly quote)", () => {
  expectResult(countIssues("‘sup"), issues.suppos.id);
});

test("'em (wrong curly quote)", () => {
  expectResult(countIssues("‘em"), issues.empos.id);
});

test("missing start quotes", () => {
  expectResult(countIssues("He said, “Wow.” And then I said, Sure.”"), issues.startquote.id);
});

test("missing end quotes", () => {
  expectResult(countIssues("He said, “Wow. And then I said, “Sure.”"), issues.endquote.id);
});

test("absent-minded", () => {
  expectResult(countIssues("he was aBseNt-MINDED"), issues.absent_minded.id);
});

test("blood-red", () => {
  expectResult(countIssues("he was blOoD-reD"), issues.blood_red.id);
});

test("blood-sucking", () => {
  expectResult(countIssues("he was BlOod-SUcKing"), issues.blood_sucking.id);
});

test("crossdress", () => {
  expectResult(countIssues("cRosSdReSSing"), issues.crossdress.id);
});

test("cross-section", () => {
  expectResult(countIssues("cross-SECTION"), issues.cross_section.id);
});

test("crystal-clear", () => {
  expectResult(countIssues("CrystAl-CLEAR"), issues.crystal_clear.id);
});

test("dead-set", () => {
  expectResult(countIssues("dEaD-sEt"), issues.dead_set.id);
});

test("dealbreaker", () => {
  expectResult(countIssues("deaLbReaKer"), issues.dealbreaker.id);
});

test("duty-bound", () => {
  expectResult(countIssues("DUtY-BOuNd"), issues.duty_bound.id);
});

test("hand-pick", () => {
  expectResult(countIssues("HanD-picK"), issues.hand_pick.id);
});

test("hardpressed", () => {
  expectResult(countIssues("hardPrEsSed"), issues.hardpressed.id);
});

test("hard-working", () => {
  expectResult(countIssues("HaRd-WorKinG"), issues.hard_working.id);
});

test("iron-fisted", () => {
  expectResult(countIssues("iroN-fiSted"), issues.iron_fisted.id);
});

test("kind-hearted", () => {
  expectResult(countIssues("KinD-HeArTed"), issues.kind_hearted.id);
});

test("knowhow", () => {
  expectResult(countIssues("KNOWhow"), issues.knowhow.id);
});

test("laidback", () => {
  expectResult(countIssues("laidBACK"), issues.laidback.id);
});

test("mass produce", () => {
  expectResult(countIssues("mAss ProDuCe"), issues.massproduce.id);
});

test("mass-production", () => {
  expectResult(countIssues("MASs-ProDuctIon"), issues.mass_production.id);
});

test("mid-morning", () => {
  expectResult(countIssues("mId-MorNinG"), issues.mid_morning.id);
});

test("mid-sentence", () => {
  expectResult(countIssues("mID-sEnTenCe"), issues.mid_sentence.id);
});

test("off-handed", () => {
  expectResult(countIssues("OFF-handed"), issues.off_handed.id);
});

test("on-stage", () => {
  expectResult(countIssues("on-STAGE"), issues.on_stage.id);
});

test("re-examine", () => {
  expectResult(countIssues("rE-eXaMiNe"), issues.re_examine.id);
});

test("roleplay", () => {
  expectResult(countIssues("rOlePlaY"), issues.roleplay.id);
});

test("semi-circle", () => {
  expectResult(countIssues("SEMI-circle"), issues.semi_circle.id);
});

test("singlehanded", () => {
  expectResult(countIssues("sinGlEHanDeD"), issues.singlehanded.id);
});

test("singleminded", () => {
  expectResult(countIssues("SiNglEmiNdeD"), issues.singleminded.id);
});

test("slip-up", () => {
  expectResult(countIssues("SLIP-up"), issues.slip_up.id);
});

test("tipoff", () => {
  expectResult(countIssues("TIPoff"), issues.tipoff.id);
});

test("vice-versa ", () => {
  expectResult(countIssues("vice-VERSA"), issues.vice_versa.id);
});

test("alright", () => {
  expectResult(countIssues("ALright"), issues.alright.id);
});

test("bath house", () => {
  expectResult(countIssues("the BATH house is big"), issues.bathhouse.id);
});

test("flipside", () => {
  expectResult(countIssues("on the FLIPside,"), issues.flipside.id);
});

test("frontlines", () => {
  const result = countIssues("frontLINES of the war");
  // this triggers the "frontline (adjective) rule, so we can't assert there's only one issue
  expect(result[0].id).toBe(issues.frontlines.id);
});

test("good will", () => {
  expectResult(countIssues("GOOD wilL hunting"), issues.goodwill.id);
});

test("haha", () => {
  expectResult(countIssues("hahah! he laughed"), issues.laugh1.id);
});

test("heehee", () => {
  expectResult(countIssues("heehee! he giggled"), issues.laugh2.id);
});

test("keychain", () => {
  expectResult(countIssues("KeYChain"), issues.keychain.id);
});

test("lightbulb", () => {
  expectResult(countIssues("LIGHTbulb"), issues.lightbulb.id);
});

test("nevermind", () => {
  expectResult(countIssues("neverMind"), issues.nm.id);
});

test("photoshoot: ", () => {
  expectResult(countIssues("photoSHOOT"), issues.photoshoot.id);
});

test("shockwave", () => {
  expectResult(countIssues("SHOCKwave"), issues.shockwave.id);
});

test("skillset", () => {
  expectResult(countIssues("skillSET"), issues.skillset.id);
});

test("soulmate", () => {
  expectResult(countIssues("soulMATE"), issues.soul.id);
});

test("tastebud", () => {
  expectResult(countIssues("tasteBUD"), issues.tastebud.id);
});

test("timeframe", () => {
  expectResult(countIssues("timeFrame"), issues.timeframe.id);
});

test("wishlist", () => {
  expectResult(countIssues("WISHlist"), issues.wishlist.id);
});

test("acknowledgement", () => {
  expectResult(countIssues("acKNowlEdgEment"), issues.ack.id);
});

test("accidently", () => {
  expectResult(countIssues("acciDentLy"), issues.accidently.id);
});

test("ambiance", () => {
  expectResult(countIssues("AMBiance"), issues.ambiance.id);
});

test("ax", () => {
  expectResult(countIssues("an AX chops wood"), issues.axe.id);
});

test("ax respects word boundaries", () => {
  expectNoResult(countIssues("maximum pax power"));
});

test("cafe", () => {
  expectResult(countIssues("trendy cafe there"), issues.cafe.id);
});

test("cafe respects word boundaries", () => {
  expectNoResult(countIssues("nescafe coffee"));
});

test("concensus", () => {
  expectResult(countIssues("ConCensus"), issues.concensus.id);
});

test("crystalized", () => {
  expectResult(countIssues("CRYstalIzed"), issues.crystalized.id);
});

test("dieing", () => {
  expectResult(countIssues("DIeing"), issues.dieing.id);
});

test("forsaw", () => {
  expectResult(countIssues("ForSaw"), issues.forsaw.id);
});

test("forsee", () => {
  expectResult(countIssues("foRsEE"), issues.forsee.id);
});

test("geez", () => {
  expectResult(countIssues("GeeZ"), issues.geez.id);
});

test("geez respects word boundaries", () => {
  expectNoResult(countIssues("geezer"));
});

test("grevious", () => {
  expectResult(countIssues("gReVioUs"), issues.grevious.id);
});

test("grinded", () => {
  expectResult(countIssues("grindED"), issues.grinded.id);
});

test("guerrila", () => {
  expectResult(countIssues("GUERrila"), issues.guerrila.id);
});

test("guerilla", () => {
  expectResult(countIssues("GUeRilla"), issues.guerilla.id);
});

test("judgement", () => {
  expectResult(countIssues("juDgeMENT"), issues.judge.id);
});

test("mischevious: ", () => {
  expectResult(countIssues("MISCheviouS"), issues.mischevious.id);
});

test("ochre: ", () => {
  expectResult(countIssues("OCHre"), issues.ocher.id);
});

test("omelette", () => {
  expectResult(countIssues("OMElette"), issues.omelette.id);
});

test("publically", () => {
  expectResult(countIssues("PUBlicaLly"), issues.publically.id);
});

test("straightlaced", () => {
  expectResult(countIssues("STRAIGHTlaced"), issues.strait.id);
});

test("underaged", () => {
  expectResult(countIssues("underAGED"), issues.underaged.id);
});

test("well-kempt ", () => {
  expectResult(countIssues("WELL-kempt"), issues.kempt.id);
});

test("woah: ", () => {
  expectResult(countIssues("WOAh!"), issues.woah.id);
});

test("worshiping ", () => {
  expectResult(countIssues("WORShiping"), issues.worshiping.id);
});

test("worshiper", () => {
  expectResult(countIssues("woRshipEr"), issues.worshiper.id);
});

test("aircon", () => {
  expectResult(countIssues("AirCon"), issues.aircon.id);
});

test("apologise", () => {
  expectResult(countIssues("APOLOgise"), issues.apologise.id);
});

test("cancelled", () => {
  expectResult(countIssues("CANcelled"), issues.cancelled.id);
});

test("cancelling", () => {
  expectResult(countIssues("CANcelling"), issues.cancelling.id);
});

test("cancelation ", () => {
  expectResult(countIssues("canCElation"), issues.cancelation.id);
});

test("colour", () => {
  expectResult(countIssues("colOurfuL"), issues.colour.id);
});

test("centre", () => {
  expectResult(countIssues("CEntRe"), issues.centre.id);
});

test("defence", () => {
  expectResult(countIssues("deFence"), issues.defence.id);
});

test("emphasise", () => {
  expectResult(countIssues("emphaSise"), issues.emphasise.id);
});

test("grey", () => {
  expectResult(countIssues("greying hair"), issues.grey.id);
});

test("meagre", () => {
  expectResult(countIssues("meAgrE"), issues.meagre.id);
});

test("miniscule", () => {
  expectResult(countIssues("miNisCule"), issues.miniscule.id);
});

test("moustache", () => {
  expectResult(countIssues("MOUSTache"), issues.moustache.id);
});

test("offence", () => {
  expectResult(countIssues("take OFfence"), issues.offence.id);
});

test("plough", () => {
  expectResult(countIssues("PloUghing"), issues.plough.id);
});

test("signalling", () => {
  expectResult(countIssues("SIGNAlling"), issues.signalling.id);
});

test("sizeable", () => {
  expectResult(countIssues("SIZEable"), issues.sizeable.id);
});

test("smoulder: ", () => {
  expectResult(countIssues("SMOULder"), issues.smoulder.id);
});

test("travelling", () => {
  expectResult(countIssues("travelLIng"), issues.travelling.id);
});

test("traveller", () => {
  expectResult(countIssues("TRAVELler"), issues.traveller.id);
});

test("frontline", () => {
  expectResult(countIssues("frontline warrior"), issues.frontline1.id);
});

test("front line", () => {
  expectResult(countIssues("front line"), issues.frontline2.id);
});

test("grit", () => {
  expectResult(countIssues("he grit his teeth"), issues.grit.id);
});

test("grit respects word boundaries", () => {
  expectNoResult(countIssues("big gritty fat"));
});

test("heroin", () => {
  expectResult(countIssues("heroin addict"), issues.heroin.id);
});

test("lead", () => {
  expectResult(countIssues("lead away"), issues.lead.id);
});

test("principal", () => {
  expectResult(countIssues("principAlity"), issues.principal.id);
});

test("principle", () => {
  expectResult(countIssues("PRInciplE"), issues.principle.id);
});

test("psych (verb)", () => {
  expectResult(countIssues("psyCh up"), issues.psych.id);
});

test("psyche (noun)", () => {
  expectResult(countIssues("his psycHe"),issues.psyche.id);
});

test("pubic", () => {
  expectResult(countIssues("puBIc bone"), issues.pubic.id);
});

test("sheath (noun)", () => {
  expectResult(countIssues("sword in shEath and"), issues.sheath.id);
});

test("sheathe (verb)", () => {
  expectResult(countIssues("SHeaThe your sword"), issues.sheathe.id);
});

test("first-hand", () => {
  expectResult(countIssues("FIRST-hand"), issues.first_hand.id);
});

test("mid-twenties", () => {
  expectResult(countIssues("mid-TWENties"), issues.mid_twenties.id);
});

test("mid-thirties", () => {
  expectResult(countIssues("mid-THIRtieS"), issues.mid_thirties.id);
});

test("mid-forties", () => {
  expectResult(countIssues("MID-forties"), issues.mid_forties.id);
});

test("one-time", () => {
  expectResult(countIssues("ONE-time"), issues.one_time.id);
});

test("second-hand", () => {
  expectResult(countIssues("second-HAND"), issues.second_hand.id);
});

test("twenty-four-seven", () => {
  expectResult(countIssues("TWENTY-four-sEven"), issues.twentyfourseven.id);
});

test("coup d'etat", () => {
  expectResult(countIssues("cOUp d’Etat"), issues.coup.id);
});

test("deja vu", () => {
  expectResult(countIssues("DEJa vU"), issues.dejavu.id);
});

test("gatling gun", () => {
  expectResult(countIssues("fire my gatling gun"), issues.gatling.id);
});

test("gatling gun NOT case-insensitive", () => {
  expectNoResult(countIssues("fire my GATLING GUN"));
});

test("fiance", () => {
  expectResult(countIssues("my fiance and I"), issues.fiance.id);
});

test("fiance respects word boundaries", () => {
  expectNoResult(countIssues("shout your defiance and"));
});

test("fiancee", () => {
  expectResult(countIssues("my fiancee and I"), issues.fiancee.id);
});

test("paper mache", () => {
  expectResult(countIssues("PAPER mache"), issues.mache.id);
});

test("swiss cheese", () => {
  expectResult(countIssues("ate swiss cheese"), issues.swiss.id);
});

test("swiss cheese NOT case-insensitive", () => {
  expectNoResult(countIssues("ate SWISS CHEESE"));
});

test("tete-a-tete", () => {
  expectResult(countIssues("tete-a-TETE"), issues.tete_a_tete.id);
});

test("hyphenated adverbs (ly-)", () => {
  expectResult(countIssues("BADLY-made"), issues.adverb.id);
});

test("towards", () => {
  expectResult(countIssues("toWards"), issues.towards.id);
});

test("toward", () => {
  expectResult(countIssues("towarD"), issues.toward.id);
});

test("afterwards", () => {
  expectResult(countIssues("afterWards"), issues.afterwards.id);
});

test("afterward", () => {
  expectResult(countIssues("aftErWard"), issues.afterward.id);
});

function expectResult(actualResult: IssueInstance[], expectedResult: string) {
  expect(actualResult).toHaveLength(1);
  expect(actualResult[0].id).toBe(expectedResult);
}

function expectNoResult(actualResult: IssueInstance[]) {
  expect(actualResult).toHaveLength(0);
}

function ids(issues: IssueInstance[]): IssueId[] {
  const issueIds: IssueId[] = [];
  for (const issue of issues) {
    issueIds.push(issue.id);
  }
  return issueIds;
}
