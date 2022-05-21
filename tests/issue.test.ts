import { IssueInstance, findIssues } from '../src/qatool';
import { IssueId, issues } from '../src/data';

test("number of occurrences is incremented for multiple of the same issue", () => {
  const result = findIssues("'''");
  expect(result).toHaveLength(1);
  expect(result[0].occurrences).toBe(3);
});

test("double spaces", () => {
  expectResult(findIssues("hello  goodbye"), issues.space.id);
});

test("straight single quote", () => {
  expectResult(findIssues("it's no big deal"), issues.apostrophe.id);
});

test("straight double quote", () => {
  expectResult(findIssues("he said \"okay but"), issues.quote.id);
});

test("comma too", () => {
  expectResult(findIssues("i want to go, tOo"), issues.too.id);
});

test("comma too respects word boundaries", () => {
  expectNoResult(findIssues("i went, took my leave"));
});

test("comma either", () => {
  expectResult(findIssues("maybe, eiTHer"), issues.either.id);
});

test("!?", () => {
  expectResult(findIssues("really!?"), issues.bang.id);
});

test("!!", () => {
  expectResult(findIssues("wow!! amazing"), issues.bang2.id);
});

test("!! rule ignores !!!", () => {
  expectNoResult(findIssues("wow!!! amazing"));
});

test("....", () => {
  expectResult(findIssues("Wow.... Cool"), issues.ellipsis1.id);
});

test("... [a-z]", () => {
  expectResult(findIssues("okay... me too"), issues.ellipsis2.id);
});

test("...[A-Z]", () => {
  expectResult(findIssues("why...Not"), issues.ellipsis3.id);
});

test("ellipsis symbol", () => {
  expectResult(findIssues("Wow… Cool"), issues.ellipsis4.id);
});

test("—[space]", () => {
  expectResult(findIssues("wow— no"), issues.emdash1.id);
});

test("[space]—", () => {
  expectResult(findIssues("wow —no"), issues.emdash2.id);
});

test("'cause (wrong curly quote)", () => {
  expectResult(findIssues("‘cause"), issues.causepos.id);
});

test("'sup (wrong curly quote)", () => {
  expectResult(findIssues("‘sup"), issues.suppos.id);
});

test("'em (wrong curly quote)", () => {
  expectResult(findIssues("‘em"), issues.empos.id);
});

test("missing start quotes", () => {
  expectResult(findIssues("He said, “Wow.” And then I said, Sure.”"), issues.startquote.id);
});

test("missing end quotes", () => {
  expectResult(findIssues("He said, “Wow. And then I said, “Sure.”"), issues.endquote.id);
});

test("absent-minded", () => {
  expectResult(findIssues("he was aBseNt-MINDED"), issues.absent_minded.id);
});

test("blood-red", () => {
  expectResult(findIssues("he was blOoD-reD"), issues.blood_red.id);
});

test("blood-sucking", () => {
  expectResult(findIssues("he was BlOod-SUcKing"), issues.blood_sucking.id);
});

test("crossdress", () => {
  expectResult(findIssues("cRosSdReSSing"), issues.crossdress.id);
});

test("cross-section", () => {
  expectResult(findIssues("cross-SECTION"), issues.cross_section.id);
});

test("crystal-clear", () => {
  expectResult(findIssues("CrystAl-CLEAR"), issues.crystal_clear.id);
});

test("dead-set", () => {
  expectResult(findIssues("dEaD-sEt"), issues.dead_set.id);
});

test("dealbreaker", () => {
  expectResult(findIssues("deaLbReaKer"), issues.dealbreaker.id);
});

test("duty-bound", () => {
  expectResult(findIssues("DUtY-BOuNd"), issues.duty_bound.id);
});

test("hand-pick", () => {
  expectResult(findIssues("HanD-picK"), issues.hand_pick.id);
});

test("hardpressed", () => {
  expectResult(findIssues("hardPrEsSed"), issues.hardpressed.id);
});

test("hard-working", () => {
  expectResult(findIssues("HaRd-WorKinG"), issues.hard_working.id);
});

test("iron-fisted", () => {
  expectResult(findIssues("iroN-fiSted"), issues.iron_fisted.id);
});

test("kind-hearted", () => {
  expectResult(findIssues("KinD-HeArTed"), issues.kind_hearted.id);
});

test("knowhow", () => {
  expectResult(findIssues("KNOWhow"), issues.knowhow.id);
});

test("laidback", () => {
  expectResult(findIssues("laidBACK"), issues.laidback.id);
});

test("mass produce", () => {
  expectResult(findIssues("mAss ProDuCe"), issues.massproduce.id);
});

test("mass-production", () => {
  expectResult(findIssues("MASs-ProDuctIon"), issues.mass_production.id);
});

test("mid-morning", () => {
  expectResult(findIssues("mId-MorNinG"), issues.mid_morning.id);
});

test("mid-sentence", () => {
  expectResult(findIssues("mID-sEnTenCe"), issues.mid_sentence.id);
});

test("off-handed", () => {
  expectResult(findIssues("OFF-handed"), issues.off_handed.id);
});

test("on-stage", () => {
  expectResult(findIssues("on-STAGE"), issues.on_stage.id);
});

test("re-examine", () => {
  expectResult(findIssues("rE-eXaMiNe"), issues.re_examine.id);
});

test("roleplay", () => {
  expectResult(findIssues("rOlePlaY"), issues.roleplay.id);
});

test("semi-circle", () => {
  expectResult(findIssues("SEMI-circle"), issues.semi_circle.id);
});

test("singlehanded", () => {
  expectResult(findIssues("sinGlEHanDeD"), issues.singlehanded.id);
});

test("singleminded", () => {
  expectResult(findIssues("SiNglEmiNdeD"), issues.singleminded.id);
});

test("slip-up", () => {
  expectResult(findIssues("SLIP-up"), issues.slip_up.id);
});

test("tipoff", () => {
  expectResult(findIssues("TIPoff"), issues.tipoff.id);
});

test("vice-versa ", () => {
  expectResult(findIssues("vice-VERSA"), issues.vice_versa.id);
});

test("alright", () => {
  expectResult(findIssues("ALright"), issues.alright.id);
});

test("bath house", () => {
  expectResult(findIssues("the BATH house is big"), issues.bathhouse.id);
});

test("flipside", () => {
  expectResult(findIssues("on the FLIPside,"), issues.flipside.id);
});

test("frontlines", () => {
  const result = findIssues("frontLINES of the war");
  // this triggers the "frontline (adjective) rule, so we can't assert there's only one issue
  expect(result[0].id).toBe(issues.frontlines.id);
});

test("good will", () => {
  expectResult(findIssues("GOOD wilL hunting"), issues.goodwill.id);
});

test("haha", () => {
  expectResult(findIssues("hahah! he laughed"), issues.laugh1.id);
});

test("heehee", () => {
  expectResult(findIssues("heehee! he giggled"), issues.laugh2.id);
});

test("keychain", () => {
  expectResult(findIssues("KeYChain"), issues.keychain.id);
});

test("lightbulb", () => {
  expectResult(findIssues("LIGHTbulb"), issues.lightbulb.id);
});

test("nevermind", () => {
  expectResult(findIssues("neverMind"), issues.nm.id);
});

test("photoshoot: ", () => {
  expectResult(findIssues("photoSHOOT"), issues.photoshoot.id);
});

test("shockwave", () => {
  expectResult(findIssues("SHOCKwave"), issues.shockwave.id);
});

test("skillset", () => {
  expectResult(findIssues("skillSET"), issues.skillset.id);
});

test("soulmate", () => {
  expectResult(findIssues("soulMATE"), issues.soul.id);
});

test("tastebud", () => {
  expectResult(findIssues("tasteBUD"), issues.tastebud.id);
});

test("timeframe", () => {
  expectResult(findIssues("timeFrame"), issues.timeframe.id);
});

test("wishlist", () => {
  expectResult(findIssues("WISHlist"), issues.wishlist.id);
});

test("acknowledgement", () => {
  expectResult(findIssues("acKNowlEdgEment"), issues.ack.id);
});

test("accidently", () => {
  expectResult(findIssues("acciDentLy"), issues.accidently.id);
});

test("ambiance", () => {
  expectResult(findIssues("AMBiance"), issues.ambiance.id);
});

test("ax", () => {
  expectResult(findIssues("an AX chops wood"), issues.axe.id);
});

test("ax respects word boundaries", () => {
  expectNoResult(findIssues("maximum pax power"));
});

test("cafe", () => {
  expectResult(findIssues("trendy cafe there"), issues.cafe.id);
});

test("cafe respects word boundaries", () => {
  expectNoResult(findIssues("nescafe coffee"));
});

test("concensus", () => {
  expectResult(findIssues("ConCensus"), issues.concensus.id);
});

test("crystalized", () => {
  expectResult(findIssues("CRYstalIzed"), issues.crystalized.id);
});

test("dieing", () => {
  expectResult(findIssues("DIeing"), issues.dieing.id);
});

test("forsaw", () => {
  expectResult(findIssues("ForSaw"), issues.forsaw.id);
});

test("forsee", () => {
  expectResult(findIssues("foRsEE"), issues.forsee.id);
});

test("geez", () => {
  expectResult(findIssues("GeeZ"), issues.geez.id);
});

test("geez respects word boundaries", () => {
  expectNoResult(findIssues("geezer"));
});

test("grevious", () => {
  expectResult(findIssues("gReVioUs"), issues.grevious.id);
});

test("grinded", () => {
  expectResult(findIssues("grindED"), issues.grinded.id);
});

test("guerrila", () => {
  expectResult(findIssues("GUERrila"), issues.guerrila.id);
});

test("guerilla", () => {
  expectResult(findIssues("GUeRilla"), issues.guerilla.id);
});

test("judgement", () => {
  expectResult(findIssues("juDgeMENT"), issues.judge.id);
});

test("mischevious: ", () => {
  expectResult(findIssues("MISCheviouS"), issues.mischevious.id);
});

test("ochre: ", () => {
  expectResult(findIssues("OCHre"), issues.ocher.id);
});

test("omelette", () => {
  expectResult(findIssues("OMElette"), issues.omelette.id);
});

test("publically", () => {
  expectResult(findIssues("PUBlicaLly"), issues.publically.id);
});

test("straightlaced", () => {
  expectResult(findIssues("STRAIGHTlaced"), issues.strait.id);
});

test("underaged", () => {
  expectResult(findIssues("underAGED"), issues.underaged.id);
});

test("well-kempt ", () => {
  expectResult(findIssues("WELL-kempt"), issues.kempt.id);
});

test("woah: ", () => {
  expectResult(findIssues("WOAh!"), issues.woah.id);
});

test("worshiping ", () => {
  expectResult(findIssues("WORShiping"), issues.worshiping.id);
});

test("worshiper", () => {
  expectResult(findIssues("woRshipEr"), issues.worshiper.id);
});

test("aircon", () => {
  expectResult(findIssues("AirCon"), issues.aircon.id);
});

test("apologise", () => {
  expectResult(findIssues("APOLOgise"), issues.apologise.id);
});

test("cancelled", () => {
  expectResult(findIssues("CANcelled"), issues.cancelled.id);
});

test("cancelling", () => {
  expectResult(findIssues("CANcelling"), issues.cancelling.id);
});

test("cancelation ", () => {
  expectResult(findIssues("canCElation"), issues.cancelation.id);
});

test("colour", () => {
  expectResult(findIssues("colOurfuL"), issues.colour.id);
});

test("centre", () => {
  expectResult(findIssues("CEntRe"), issues.centre.id);
});

test("defence", () => {
  expectResult(findIssues("deFence"), issues.defence.id);
});

test("emphasise", () => {
  expectResult(findIssues("emphaSise"), issues.emphasise.id);
});

test("grey", () => {
  expectResult(findIssues("greying hair"), issues.grey.id);
});

test("meagre", () => {
  expectResult(findIssues("meAgrE"), issues.meagre.id);
});

test("miniscule", () => {
  expectResult(findIssues("miNisCule"), issues.miniscule.id);
});

test("moustache", () => {
  expectResult(findIssues("MOUSTache"), issues.moustache.id);
});

test("offence", () => {
  expectResult(findIssues("take OFfence"), issues.offence.id);
});

test("plough", () => {
  expectResult(findIssues("PloUghing"), issues.plough.id);
});

test("signalling", () => {
  expectResult(findIssues("SIGNAlling"), issues.signalling.id);
});

test("sizeable", () => {
  expectResult(findIssues("SIZEable"), issues.sizeable.id);
});

test("smoulder: ", () => {
  expectResult(findIssues("SMOULder"), issues.smoulder.id);
});

test("travelling", () => {
  expectResult(findIssues("travelLIng"), issues.travelling.id);
});

test("traveller", () => {
  expectResult(findIssues("TRAVELler"), issues.traveller.id);
});

test("frontline", () => {
  expectResult(findIssues("frontline warrior"), issues.frontline1.id);
});

test("front line", () => {
  expectResult(findIssues("front line"), issues.frontline2.id);
});

test("grit", () => {
  expectResult(findIssues("he grit his teeth"), issues.grit.id);
});

test("grit respects word boundaries", () => {
  expectNoResult(findIssues("big gritty fat"));
});

test("heroin", () => {
  expectResult(findIssues("heroin addict"), issues.heroin.id);
});

test("lead", () => {
  expectResult(findIssues("lead away"), issues.lead.id);
});

test("principal", () => {
  expectResult(findIssues("principAlity"), issues.principal.id);
});

test("principle", () => {
  expectResult(findIssues("PRInciplE"), issues.principle.id);
});

test("psych (verb)", () => {
  expectResult(findIssues("psyCh up"), issues.psych.id);
});

test("psyche (noun)", () => {
  expectResult(findIssues("his psycHe"),issues.psyche.id);
});

test("pubic", () => {
  expectResult(findIssues("puBIc bone"), issues.pubic.id);
});

test("sheath (noun)", () => {
  expectResult(findIssues("sword in shEath and"), issues.sheath.id);
});

test("sheathe (verb)", () => {
  expectResult(findIssues("SHeaThe your sword"), issues.sheathe.id);
});

test("first-hand", () => {
  expectResult(findIssues("FIRST-hand"), issues.first_hand.id);
});

test("mid-twenties", () => {
  expectResult(findIssues("mid-TWENties"), issues.mid_twenties.id);
});

test("mid-thirties", () => {
  expectResult(findIssues("mid-THIRtieS"), issues.mid_thirties.id);
});

test("mid-forties", () => {
  expectResult(findIssues("MID-forties"), issues.mid_forties.id);
});

test("one-time", () => {
  expectResult(findIssues("ONE-time"), issues.onetime.id);
});

test("second-hand", () => {
  expectResult(findIssues("second-HAND"), issues.second_hand.id);
});

test("twenty-four-seven", () => {
  expectResult(findIssues("TWENTY-four-sEven"), issues.twentyfourseven.id);
});

test("coup d'etat", () => {
  expectResult(findIssues("cOUp d’Etat"), issues.coup.id);
});

test("deja vu", () => {
  expectResult(findIssues("DEJa vU"), issues.dejavu.id);
});

test("gatling gun", () => {
  expectResult(findIssues("fire my gatling gun"), issues.gatling.id);
});

test("gatling gun NOT case-insensitive", () => {
  expectNoResult(findIssues("fire my GATLING GUN"));
});

test("fiance", () => {
  expectResult(findIssues("my fiance and I"), issues.fiance.id);
});

test("fiance respects word boundaries", () => {
  expectNoResult(findIssues("shout your defiance and"));
});

test("fiancee", () => {
  expectResult(findIssues("my fiancee and I"), issues.fiancee.id);
});

test("paper mache", () => {
  expectResult(findIssues("PAPER mache"), issues.mache.id);
});

test("swiss cheese", () => {
  expectResult(findIssues("ate swiss cheese"), issues.swiss.id);
});

test("swiss cheese NOT case-insensitive", () => {
  expectNoResult(findIssues("ate SWISS CHEESE"));
});

test("tete-a-tete", () => {
  expectResult(findIssues("tete-a-TETE"), issues.tete_a_tete.id);
});

test("hyphenated adverbs (ly-)", () => {
  expectResult(findIssues("BADLY-made"), issues.adverb.id);
});

test("towards", () => {
  expectResult(findIssues("toWards"), issues.towards.id);
});

test("toward", () => {
  expectResult(findIssues("towarD"), issues.toward.id);
});

test("afterwards", () => {
  expectResult(findIssues("afterWards"), issues.afterwards.id);
});

test("afterward", () => {
  expectResult(findIssues("aftErWard"), issues.afterward.id);
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
