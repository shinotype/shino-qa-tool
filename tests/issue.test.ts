import { IssueInstance, findIssues } from '../src/qaassist';
import { IssueId, issues } from '../src/data';

test("00000: number of occurrences", () => {
  const result = findIssues("'''");
  expect(result).toHaveLength(1);
  expect(result[0].occurrences).toBe(3);
});

test("00001: double spaces", () => {
  expectResult(findIssues("hello  goodbye"), "00001");
});

test("00002: straight single quote", () => {
  expectResult(findIssues("it's no big deal"), "00002");
});

test("00003: straight double quote", () => {
  expectResult(findIssues("he said \"okay but"), "00003");
});

test("00004: comma too", () => {
  expectResult(findIssues("i want to go, tOo"), "00004");
});

test("00004: comma too respects word boundaries", () => {
  expectNoResult(findIssues("i went, took my leave"));
});

test("00005: comma either", () => {
  expectResult(findIssues("maybe, eiTHer"), "00005");
});

test("00006: !?", () => {
  expectResult(findIssues("really!?"), "00006");
});

test("00007: !!", () => {
  expectResult(findIssues("wow!! amazing"), "00007");
});

test("00007: ignores !!!", () => {
  expectNoResult(findIssues("wow!!! amazing"));
});

test("00008: ....", () => {
  expectResult(findIssues("Wow.... Cool"), "00008");
});

test("00009: ... [a-z]", () => {
  expectResult(findIssues("okay... me too"), "00009");
});

test("00010: ...[A-Z]", () => {
  expectResult(findIssues("why...Not"), "00010");
});

test("00011: ellipsis symbol", () => {
  expectResult(findIssues("Wow… Cool"), "00011");
});

test("00012: —[space]", () => {
  expectResult(findIssues("wow— no"), "00012");
});

test("00013: [space]—", () => {
  expectResult(findIssues("wow —no"), "00013");
});

test("00014: 'cause (wrong curly quote)", () => {
  expectResult(findIssues("‘cause"), "00014");
});

test("00015: 'sup (wrong curly quote)", () => {
  expectResult(findIssues("‘sup"), "00015");
});

test("00016: 'em (wrong curly quote)", () => {
  expectResult(findIssues("‘em"), "00016");
});

test("00017: missing start quotes", () => {
  expectResult(findIssues("He said, “Wow.” And then I said, Sure.”"), "00017");
});

test("00018: missing end quotes", () => {
  expectResult(findIssues("He said, “Wow. And then I said, “Sure.”"), "00018");
});

test("00019: absent-minded", () => {
  expectResult(findIssues("he was aBseNt-MINDED"), "00019");
});

test("00020: blood-red", () => {
  expectResult(findIssues("he was blOoD-reD"), "00020");
});

test("00021: blood-sucking", () => {
  expectResult(findIssues("he was BlOod-SUcKing"), "00021");
});

test("00022: crossdress", () => {
  expectResult(findIssues("cRosSdReSSing"), "00022");
});

test("00023: cross-section", () => {
  expectResult(findIssues("cross-SECTION"), "00023");
});

test("00024: crystal-clear", () => {
  expectResult(findIssues("CrystAl-CLEAR"), "00024");
});

test("00025: dead-set", () => {
  expectResult(findIssues("dEaD-sEt"), "00025");
});

test("00026: dealbreaker", () => {
  expectResult(findIssues("deaLbReaKer"), "00026");
});

test("00027: duty-bound", () => {
  expectResult(findIssues("DUtY-BOuNd"), "00027");
});

test("00028: hand-pick", () => {
  expectResult(findIssues("HanD-picK"), "00028");
});

test("00029: hardpressed", () => {
  expectResult(findIssues("hardPrEsSed"), "00029");
});

test("00030: hard-working", () => {
  expectResult(findIssues("HaRd-WorKinG"), "00030");
});

test("00031: iron-fisted", () => {
  expectResult(findIssues("iroN-fiSted"), "00031");
});

test("00032: kind-hearted", () => {
  expectResult(findIssues("KinD-HeArTed"), "00032");
});

test("00033: knowhow", () => {
  expectResult(findIssues("KNOWhow"), "00033");
});

test("00034: laidback", () => {
  expectResult(findIssues("laidBACK"), "00034");
});

test("00035: mass produce", () => {
  expectResult(findIssues("mAss ProDuCe"), "00035");
});

test("00036: mass-production", () => {
  expectResult(findIssues("MASs-ProDuctIon"), "00036");
});

test("00037: mid-morning", () => {
  expectResult(findIssues("mId-MorNinG"), "00037");
});

test("00038: mid-sentence", () => {
  expectResult(findIssues("mID-sEnTenCe"), "00038");
});

test("00039: off-handed", () => {
  expectResult(findIssues("OFF-handed"), issues.offhanded.id);
});

test("00040: on-stage", () => {
  expectResult(findIssues("on-STAGE"), issues.onstage.id);
});

test("00041: re-examine", () => {
  expectResult(findIssues("rE-eXaMiNe"), issues.re_examine.id);
});

test("00042: roleplay", () => {
  expectResult(findIssues("rOlePlaY"), issues.roleplay.id);
});

test("00043: semi-circle", () => {
  expectResult(findIssues("SEMI-circle"), issues.semicircle.id);
});

test("00044: singlehanded", () => {
  expectResult(findIssues("sinGlEHanDeD"), issues.singlehanded.id);
});

test("00045: singleminded", () => {
  expectResult(findIssues("SiNglEmiNdeD"), issues.singleminded.id);
});

test("00046: slip-up", () => {
  expectResult(findIssues("SLIP-up"), issues.slip_up.id);
});

test("00047: tipoff", () => {
  expectResult(findIssues("TIPoff"), issues.tipoff.id);
});

test("00048: vice-versa ", () => {
  expectResult(findIssues("vice-VERSA"), issues.vice_versa.id);
});

test("00049: alright", () => {
  expectResult(findIssues("ALright"), issues.alright.id);
});

test("00050: bath house", () => {
  expectResult(findIssues("the BATH house is big"), issues.bathhouse.id);
});

test("00051: flipside", () => {
  expectResult(findIssues("on the FLIPside,"), issues.flipside.id);
});

test("00052: frontlines", () => {
  const result = findIssues("frontLINES of the war");
  // this triggers the "frontline (adjective) rule, so we can't assert there's only one issue
  expect(result[0].id).toBe("00052");
});

test("00053: good will", () => {
  expectResult(findIssues("GOOD wilL hunting"), issues.goodwill.id);
});

test("00054: haha", () => {
  expectResult(findIssues("hahah! he laughed"), issues.laugh1.id);
});

test("00055: heehee", () => {
  expectResult(findIssues("heehee! he giggled"), issues.laugh2.id);
});

test("00056: keychain", () => {
  expectResult(findIssues("KeYChain"), issues.keychain.id);
});

test("00057: lightbulb", () => {
  expectResult(findIssues("LIGHTbulb"), issues.lightbulb.id);
});

test("00058: nevermind", () => {
  expectResult(findIssues("neverMind"), issues.nm.id);
});

test("00059: photoshoot: ", () => {
  expectResult(findIssues("photoSHOOT"), issues.photoshoot.id);
});

test("00060: shockwave", () => {
  expectResult(findIssues("SHOCKwave"), issues.shockwave.id);
});

test("00061: skillset", () => {
  expectResult(findIssues("skillSET"), issues.skillset.id);
});

test("00062: soulmate", () => {
  expectResult(findIssues("soulMATE"), issues.soul.id);
});

test("00063: tastebud", () => {
  expectResult(findIssues("tasteBUD"), issues.tastebud.id);
});

test("00064: timeframe", () => {
  expectResult(findIssues("timeFrame"), issues.timeframe.id);
});

test("00065: wishlist", () => {
  expectResult(findIssues("WISHlist"), issues.wishlist.id);
});

test("00066: acknowledgement", () => {
  expectResult(findIssues("acKNowlEdgEment"), issues.ack.id);
});

test("00067: accidently", () => {
  expectResult(findIssues("acciDentLy"), issues.accidently.id);
});

test("00068: ambiance", () => {
  expectResult(findIssues("AMBiance"), issues.ambiance.id);
});

test("00069: ax", () => {
  expectResult(findIssues("an AX chops wood"), issues.axe.id);
});

test("00069: ax respects word boundaries", () => {
  expectNoResult(findIssues("maximum pax power"));
});

test("00070: cafe", () => {
  expectResult(findIssues("trendy cafe there"), issues.cafe.id);
});

test("00070: cafe respects word boundaries", () => {
  expectNoResult(findIssues("nescafe coffee"));
});

test("00071: concensus", () => {
  expectResult(findIssues("ConCensus"), issues.concensus.id);
});

test("00072: crystalized", () => {
  expectResult(findIssues("CRYstalIzed"), issues.crystalized.id);
});

test("00073: dieing ", () => {
  expectResult(findIssues("DIeing"), issues.dieing.id);
});

test("00074: forsaw", () => {
  expectResult(findIssues("ForSaw"), issues.forsaw.id);
});

test("00075: forsee", () => {
  expectResult(findIssues("foRsEE"), issues.forsee.id);
});

test("00076: geez", () => {
  expectResult(findIssues("GeeZ"), issues.geez.id);
});

test("00076: geez respects word boundaries", () => {
  expectNoResult(findIssues("geezer"));
});

test("00077: grevious", () => {
  expectResult(findIssues("gReVioUs"), issues.grevious.id);
});

test("00078: grinded", () => {
  expectResult(findIssues("grindED"), issues.grinded.id);
});

test("00079: guerrila", () => {
  expectResult(findIssues("GUERrila"), issues.guerrila.id);
});

test("00080: guerilla", () => {
  expectResult(findIssues("GUeRilla"), issues.guerilla.id);
});

test("00081: judgement", () => {
  expectResult(findIssues("juDgeMENT"), issues.judge.id);
});

test("00082: mischevious: ", () => {
  expectResult(findIssues("MISCheviouS"), issues.mischevious.id);
});

test("00083: ochre: ", () => {
  expectResult(findIssues("OCHre"), issues.ocher.id);
});

test("00084: omelette", () => {
  expectResult(findIssues("OMElette"), issues.omelette.id);
});

test("00085: publically", () => {
  expectResult(findIssues("PUBlicaLly"), issues.publically.id);
});

test("00086: straightlaced", () => {
  expectResult(findIssues("STRAIGHTlaced"), issues.strait.id);
});

test("00087: underaged", () => {
  expectResult(findIssues("underAGED"), issues.underaged.id);
});

test("00088: well-kempt ", () => {
  expectResult(findIssues("WELL-kempt"), issues.kempt.id);
});

test("00089: woah: ", () => {
  expectResult(findIssues("WOAh!"), issues.woah.id);
});

test("00090: worshiping ", () => {
  expectResult(findIssues("WORShiping"), issues.worshiping.id);
});

test("00091: worshiper", () => {
  expectResult(findIssues("woRshipEr"), issues.worshiper.id);
});

test("00092: aircon", () => {
  expectResult(findIssues("AirCon"), issues.aircon.id);
});

test("00093: apologise", () => {
  expectResult(findIssues("APOLOgise"), issues.apologise.id);
});

test("00094: cancelled", () => {
  expectResult(findIssues("CANcelled"), issues.cancelled.id);
});

test("00095: cancelling", () => {
  expectResult(findIssues("CANcelling"), issues.cancelling.id);
});

test("00096: cancelation ", () => {
  expectResult(findIssues("canCElation"), issues.cancelation.id);
});

test("00097: colour", () => {
  expectResult(findIssues("colOurfuL"), issues.colour.id);
});

test("00098: centre", () => {
  expectResult(findIssues("CEntRe"), issues.centre.id);
});

test("00099: defence", () => {
  expectResult(findIssues("deFence"), issues.defence.id);
});

test("00100: emphasise", () => {
  expectResult(findIssues("emphaSise"), issues.emphasise.id);
});

test("00101: grey", () => {
  expectResult(findIssues("greying hair"), issues.grey.id);
});

test("00102: meagre", () => {
  expectResult(findIssues("meAgrE"), issues.meagre.id);
});

test("00103: miniscule", () => {
  expectResult(findIssues("miNisCule"), issues.miniscule.id);
});

test("00104: moustache", () => {
  expectResult(findIssues("MOUSTache"), issues.moustache.id);
});

test("00105: offence", () => {
  expectResult(findIssues("take OFfence"), issues.offence.id);
});

test("00106: plough", () => {
  expectResult(findIssues("PloUghing"), issues.plough.id);
});

test("00107: signalling", () => {
  expectResult(findIssues("SIGNAlling"), issues.signalling.id);
});

test("00108: sizeable", () => {
  expectResult(findIssues("SIZEable"), issues.sizeable.id);
});

test("00109: smoulder: ", () => {
  expectResult(findIssues("SMOULder"), issues.smoulder.id);
});

test("00110: travelling", () => {
  expectResult(findIssues("travelLIng"), issues.travelling.id);
});

test("00111: traveller", () => {
  expectResult(findIssues("TRAVELler"), issues.traveller.id);
});

test("00112: frontline", () => {
  expectResult(findIssues("frontline warrior"), issues.frontline1.id);
});

test("00113: front line", () => {
  expectResult(findIssues("front line"), issues.frontline2.id);
});

test("00114: grit", () => {
  expectResult(findIssues("he grit his teeth"), issues.grit.id);
});

test("00115: heroin", () => {
  expectResult(findIssues("heroin addict"), issues.heroin.id);
});

test("00116: lead", () => {
  expectResult(findIssues("lead away"), issues.lead.id);
});

test("00117: principal", () => {
  expectResult(findIssues("principAlity"), issues.principal.id);
});

test("00118: principle", () => {
  expectResult(findIssues("PRInciplE"), issues.principle.id);
});

test("00119: psych (verb)", () => {
  expectResult(findIssues("psyCh up"), issues.psych.id);
});

test("00120: psyche (noun)", () => {
  expectResult(findIssues("his psycHe"),issues.psyche.id);
});

test("00121: pubic", () => {
  expectResult(findIssues("puBIc bone"), issues.pubic.id);
});

test("00122: sheath (noun)", () => {
  expectResult(findIssues("sword in shEath and"), issues.sheath.id);
});

test("00123: sheathe (verb)", () => {
  expectResult(findIssues("SHeaThe your sword"), issues.sheathe.id);
});

test("00124: first-hand", () => {
  expectResult(findIssues("FIRST-hand"), issues.first_hand.id);
});

test("00125: mid-twenties", () => {
  expectResult(findIssues("mid-TWENties"), issues.mid_twenties.id);
});

test("00126: mid-thirties", () => {
  expectResult(findIssues("mid-THIRtieS"), issues.mid_thirties.id);
});

test("00127: mid-forties", () => {
  expectResult(findIssues("MID-forties"), issues.mid_forties.id);
});

test("00128: one-time", () => {
  expectResult(findIssues("ONE-time"), issues.onetime.id);
});

test("00129: second-hand", () => {
  expectResult(findIssues("second-HAND"), issues.second_hand.id);
});

test("00130: twenty-four-seven", () => {
  expectResult(findIssues("TWENTY-four-sEven"), issues.twentyfourseven.id);
});

test("00131: coup d'etat", () => {
  expectResult(findIssues("cOUp d’Etat"), issues.coup.id);
});

test("00132: deja vu", () => {
  expectResult(findIssues("DEJa vU"), issues.dejavu.id);
});

test("00133: gatling gun", () => {
  expectResult(findIssues("fire my gatling gun"), issues.gatling.id);
});

test("00133: gatling gun NOT case-insensitive", () => {
  expectNoResult(findIssues("fire my GATLING GUN"));
});

test("00134: fiance", () => {
  expectResult(findIssues("my fiance and I"), issues.fiance.id);
});

test("00134: fiance respects word boundaries", () => {
  expectNoResult(findIssues("shout your defiance and"));
});

test("00135: fiancee", () => {
  expectResult(findIssues("my fiancee and I"), issues.fiancee.id);
});

test("00136: paper mache", () => {
  expectResult(findIssues("PAPER mache"), issues.mache.id);
});

test("00137: swiss cheese", () => {
  expectResult(findIssues("ate swiss cheese"), issues.swiss.id);
});

test("00137: swiss cheese NOT case-insensitive", () => {
  expectNoResult(findIssues("ate SWISS CHEESE"));
});

test("00138: tete-a-tete", () => {
  expectResult(findIssues("tete-a-TETE"), issues.tete_a_tete.id);
});

test("00139: hyphenated adverbs (ly-)", () => {
  expectResult(findIssues("BADLY-made"), issues.adverb.id);
});

test("00140: towards", () => {
  expectResult(findIssues("toWards"), issues.towards.id);
});

test("00141: toward", () => {
  expectResult(findIssues("towarD"), issues.toward.id);
});

test("00142: afterwards", () => {
  expectResult(findIssues("afterWards"), issues.afterwards.id);
});

test("00143: afterward", () => {
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
