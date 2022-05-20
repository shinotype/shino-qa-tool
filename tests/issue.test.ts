import { IssueInstance, findIssues } from '../src/qaassist';
import { IssueId, issues } from '../src/data';

function ids(issues: IssueInstance[]): IssueId[] {
  const issueIds: IssueId[] = [];
  for (const issue of issues) {
    issueIds.push(issue.id);
  }
  return issueIds;
}

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
  expectResult(findIssues("OFF-handed"), "00039");
});

test("00040: on-stage", () => {
  expectResult(findIssues("on-STAGE"), "00040");
});

test("00041: re-examine", () => {
  expectResult(findIssues("rE-eXaMiNe"), "00041");
});

test("00042: roleplay", () => {
  expectResult(findIssues("rOlePlaY"), "00042");
});

test("00043: semi-circle", () => {
  expectResult(findIssues("SEMI-circle"), "00043");
});

test("00044: singlehanded", () => {
  expectResult(findIssues("sinGlEHanDeD"), "00044");
});

test("00045: singleminded", () => {
  expectResult(findIssues("SiNglEmiNdeD"), "00045");
});

test("00046: slip-up", () => {
  expectResult(findIssues("SLIP-up"), "00046");
});

test("00047: tipoff", () => {
  expectResult(findIssues("TIPoff"), "00047");
});

test("00048: vice-versa ", () => {
  expectResult(findIssues("vice-VERSA"), "00048");
});

test("00049: alright", () => {
  expectResult(findIssues("ALright"), "00049");
});

test("00050: bath house", () => {
  expectResult(findIssues("the BATH house is big"), "00050");
});

test("00051: flipside", () => {
  expectResult(findIssues("on the FLIPside,"), "00051");
});

test("00052: frontlines", () => {
  const result = findIssues("frontLINES of the war");
  // this triggers the "frontline (adjective) rule, so we can't assert there's only one issue
  expect(result[0].id).toBe("00052");
});

test("00053: good will", () => {
  expectResult(findIssues("GOOD wilL hunting"), "00053");
});

test("00054: haha", () => {
  expectResult(findIssues("hahah! he laughed"), "00054");
});

test("00055: heehee", () => {
  expectResult(findIssues("heehee! he giggled"), "00055");
});

test("00056: keychain", () => {
  expectResult(findIssues("KeYChain"), "00056");
});

test("00057: lightbulb", () => {
  expectResult(findIssues("LIGHTbulb"), "00057");
});

test("00058: nevermind", () => {
  expectResult(findIssues("neverMind"), "00058");
});

test("00059: photoshoot: ", () => {
  expectResult(findIssues("photoSHOOT"), "00059");
});

test("00060: shockwave", () => {
  expectResult(findIssues("SHOCKwave"), "00060");
});

test("00061: skillset", () => {
  expectResult(findIssues("skillSET"), "00061");
});

test("00062: soulmate", () => {
  expectResult(findIssues("soulMATE"), "00062");
});

test("00063: tastebud", () => {
  expectResult(findIssues("tasteBUD"), "00063");
});

test("00064: timeframe", () => {
  expectResult(findIssues("timeFrame"), "00064");
});

test("00065: wishlist", () => {
  expectResult(findIssues("WISHlist"), "00065");
});

test("00066: acknowledgement", () => {
  expectResult(findIssues("acKNowlEdgEment"), "00066");
});

test("00067: accidently", () => {
  expectResult(findIssues("acciDentLy"), "00067");
});

test("00068: ambiance", () => {
  expectResult(findIssues("AMBiance"), "00068");
});

test("00069: ax", () => {
  expectResult(findIssues("an AX chops wood"), "00069");
});

test("00069: ax respects word boundaries", () => {
  expectNoResult(findIssues("maximum pax power"));
});

test("00070: cafe", () => {
  expectResult(findIssues("trendy cafe there"), "00070");
});

test("00070: cafe respects word boundaries", () => {
  expectNoResult(findIssues("nescafe coffee"));
});

test("00071: concensus", () => {
  expectResult(findIssues("ConCensus"), "00071");
});

test("00072: crystalized", () => {
  expectResult(findIssues("CRYstalIzed"), "00072");
});

test("00073: dieing ", () => {
  expectResult(findIssues("DIeing"), "00073");
});

test("00074: forsaw", () => {
  expectResult(findIssues("ForSaw"), "00074");
});

test("00075: forsee", () => {
  expectResult(findIssues("foRsEE"), "00075");
});

test("00076: geez", () => {
  expectResult(findIssues("GeeZ"), "00076");
});

test("00076: geez respects word boundaries", () => {
  expectNoResult(findIssues("geezer"));
});

test("00077: grevious", () => {
  expectResult(findIssues("gReVioUs"), "00077");
});

test("00078: grinded", () => {
  expectResult(findIssues("grindED"), "00078");
});

test("00079: guerrila", () => {
  expectResult(findIssues("GUERrila"), "00079");
});

test("00080: guerilla", () => {
  expectResult(findIssues("GUeRilla"), "00080");
});

test("00081: judgement", () => {
  expectResult(findIssues("juDgeMENT"), "00081");
});

test("00082: mischevious: ", () => {
  expectResult(findIssues("MISCheviouS"), "00082");
});

test("00083: ochre: ", () => {
  expectResult(findIssues("OCHre"), "00083");
});

test("00084: omelette", () => {
  expectResult(findIssues("OMElette"), "00084");
});

test("00085: publically", () => {
  expectResult(findIssues("PUBlicaLly"), "00085");
});

test("00086: straightlaced", () => {
  expectResult(findIssues("STRAIGHTlaced"), "00086");
});

test("00087: underaged", () => {
  expectResult(findIssues("underAGED"), "00087");
});

test("00088: well-kempt ", () => {
  expectResult(findIssues("WELL-kempt"), "00088");
});

test("00089: woah: ", () => {
  expectResult(findIssues("WOAh!"), "00089");
});

test("00090: worshiping ", () => {
  expectResult(findIssues("WORShiping"), "00090");
});

test("00091: worshiper", () => {
  expectResult(findIssues("woRshipEr"), "00091");
});

test("00092: aircon", () => {
  expectResult(findIssues("AirCon"), "00092");
});

test("00093: apologise", () => {
  expectResult(findIssues("APOLOgise"), "00093");
});

test("00094: cancelled", () => {
  expectResult(findIssues("CANcelled"), "00094");
});

test("00095: cancelling", () => {
  expectResult(findIssues("CANcelling"), "00095");
});

test("00096: cancelation ", () => {
  expectResult(findIssues("canCElation"), "00096");
});

test("00097: colour", () => {
  expectResult(findIssues("colOurfuL"), "00097");
});

test("00098: centre", () => {
  expectResult(findIssues("CEntRe"), "00098");
});

test("00099: defence", () => {
  expectResult(findIssues("deFence"), "00099");
});

test("00100: emphasise", () => {
  expectResult(findIssues("emphaSise"), "00100");
});

test("00101: grey", () => {
  expectResult(findIssues("greying hair"), "00101");
});

test("00102: meagre", () => {
  expectResult(findIssues("meAgrE"), "00102");
});

test("00103: miniscule", () => {
  expectResult(findIssues("miNisCule"), "00103");
});

test("00104: moustache", () => {
  expectResult(findIssues("MOUSTache"), "00104");
});

test("00105: offence", () => {
  expectResult(findIssues("take OFfence"), "00105");
});

test("00106: plough", () => {
  expectResult(findIssues("PloUghing"), "00106");
});

test("00107: signalling", () => {
  expectResult(findIssues("SIGNAlling"), "00107");
});

test("00108: sizeable", () => {
  expectResult(findIssues("SIZEable"), "00108");
});

test("00109: smoulder: ", () => {
  expectResult(findIssues("SMOULder"), "00109");
});

test("00110: travelling", () => {
  expectResult(findIssues("travelLIng"), "00110");
});

test("00111: traveller", () => {
  expectResult(findIssues("TRAVELler"), "00111");
});

test("00112: frontline", () => {
  expectResult(findIssues("frontline warrior"), "00112");
});

test("00113: front line", () => {
  expectResult(findIssues("front line"), "00113");
});

test("00114: grit", () => {
  expectResult(findIssues("he grit his teeth"), "00114");
});

test("00115: heroin", () => {
  expectResult(findIssues("heroin addict"), "00115");
});

test("00116: lead", () => {
  expectResult(findIssues("lead away"), "00116");
});

test("00117: principal", () => {
  expectResult(findIssues("principAlity"), "00117");
});

test("00118: principle", () => {
  expectResult(findIssues("PRInciplE"), "00118");
});

test("00119: psych (verb)", () => {
  expectResult(findIssues("psyCh up"), "00119");
});

test("00120: psyche (noun)", () => {
  expectResult(findIssues("his psycHe"),"00120");
});

test("00121: pubic", () => {
  expectResult(findIssues("puBIc bone"), "00121");
});

test("00122: sheath (noun)", () => {
  expectResult(findIssues("sword in shEath and"), "00122");
});

test("00123: sheathe (verb)", () => {
  expectResult(findIssues("SHeaThe your sword"), "00123");
});

test("00124: first-hand", () => {
  expectResult(findIssues("FIRST-hand"), "00124");
});

test("00125: mid-twenties", () => {
  expectResult(findIssues("mid-TWENties"), "00125");
});

test("00126: mid-thirties", () => {
  expectResult(findIssues("mid-THIRtieS"), "00126");
});

test("00127: mid-forties", () => {
  expectResult(findIssues("MID-forties"), "00127");
});

test("00128: one-time", () => {
  expectResult(findIssues("ONE-time"), "00128");
});

test("00129: second-hand", () => {
  expectResult(findIssues("second-HAND"), "00129");
});

test("00130: twenty-four-seven", () => {
  expectResult(findIssues("TWENTY-four-sEven"), "00130");
});

test("00131: coup d'etat", () => {
  expectResult(findIssues("cOUp d’Etat"), "00131");
});

test("00132: deja vu", () => {
  expectResult(findIssues("DEJa vU"), "00132");
});

test("00133: gatling gun", () => {
  expectResult(findIssues("fire my gatling gun"), "00133");
});

test("00133: gatling gun NOT case-insensitive", () => {
  expectNoResult(findIssues("fire my GATLING GUN"));
});

test("00134: fiance", () => {
  expectResult(findIssues("my fiance and I"), "00134");
});

test("00134: fiance respects word boundaries", () => {
  expectNoResult(findIssues("shout your defiance and"));
});

test("00135: fiancee", () => {
  expectResult(findIssues("my fiancee and I"), "00135");
});

test("00136: paper mache", () => {
  expectResult(findIssues("PAPER mache"), "00136");
});

test("00137: swiss cheese", () => {
  expectResult(findIssues("ate swiss cheese"), "00137");
});

test("00137: swiss cheese NOT case-insensitive", () => {
  expectNoResult(findIssues("ate SWISS CHEESE"));
});

test("00138: tete-a-tete", () => {
  expectResult(findIssues("tete-a-TETE"), "00138");
});

test("00139: hyphenated adverbs (ly-)", () => {
  expectResult(findIssues("BADLY-made"), "00139");
});

test("00140: towards", () => {
  expectResult(findIssues("toWards"), "00140");
});

test("00141: toward", () => {
  expectResult(findIssues("towarD"), "00141");
});

test("00142: afterwards", () => {
  expectResult(findIssues("afterWards"), "00142");
});

test("00143: afterward", () => {
  expectResult(findIssues("aftErWard"), "00143");
});

function expectResult(actualResult: Issue[], expectedResult: string) {
  expect(actualResult).toHaveLength(1);
  expect(actualResult[0].id).toBe(expectedResult);
}

function expectNoResult(actualResult: Issue[]) {
  expect(actualResult).toHaveLength(0);
}
