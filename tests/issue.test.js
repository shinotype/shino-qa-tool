const findIssues = require('../qaassist');

test("00000: number of occurrences", () => {
  const result = findIssues("'''");
  expect(result).toHaveLength(1);
  expect(result[0].occurrences).toBe(3);
});

test("00001: double spaces", () => {
  const result = findIssues("hello  goodbye");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00001");
});

test("00002: straight single quote", () => {
  const result = findIssues("it's no big deal");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00002");
});

test("00003: straight double quote", () => {
  const result = findIssues("he said \"okay but");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00003");
});

test("00004: comma too", () => {
  const result = findIssues("i want to go, tOo");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00004");
});

test("00004: comma too respects word boundaries", () => {
  const result = findIssues("i went, took my leave");
  expect(result).toHaveLength(0);
});

test("00005: comma either", () => {
  const result = findIssues("maybe, eiTHer");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00005");
});

test("00006: !?", () => {
  const result = findIssues("really!?");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00006");
});

test("00007: !!", () => {
  const result = findIssues("wow!! amazing");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00007");
});

test("00007: ignores !!!", () => {
  const result = findIssues("wow!!! amazing");
  expect(result).toHaveLength(0);
});

test("00008: ....", () => {
  const result = findIssues("Wow.... Cool");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00008");
});

test("00009: ... [a-z]", () => {
  const result = findIssues("okay... me too");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00009");
});

test("00010: ...[A-Z]", () => {
  const result = findIssues("why...Not");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00010");
});

test("00011: ellipsis symbol", () => {
  const result = findIssues("Wow… Cool");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00011");
});

test("00012: —[space]", () => {
  const result = findIssues("wow— no");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00012");
});

test("00013: [space]—", () => {
  const result = findIssues("wow —no");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00013");
});

test("00014: 'cause (wrong curly quote)", () => {
  const result = findIssues("‘cause");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00014");
});

test("00015: 'sup (wrong curly quote)", () => {
  const result = findIssues("‘sup");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00015");
});

test("00016: 'em (wrong curly quote)", () => {
  const result = findIssues("‘em");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00016");
});

test("00017: missing start quotes", () => {
  const result = findIssues("He said, “Wow.” And then I said, Sure.”");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00017");
});

test("00018: missing end quotes", () => {
  const result = findIssues("He said, “Wow. And then I said, “Sure.”");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00018");
});

test("00019: absent-minded", () => {
  const result = findIssues("he was aBseNt-MINDED");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00019");
});

test("00020: blood-red", () => {
  const result = findIssues("he was blOoD-reD");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00020");
});

test("00021: blood-sucking", () => {
  const result = findIssues("he was BlOod-SUcKing");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00021");
});

test("00022: crossdress", () => {
  const result = findIssues("cRosSdReSSing");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00022");
});

test("00023: cross-section", () => {
  const result = findIssues("cross-SECTION");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00023");
});

test("00024: crystal-clear", () => {
  const result = findIssues("CrystAl-CLEAR");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00024");
});

test("00025: dead-set", () => {
  const result = findIssues("dEaD-sEt");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00025");
});

test("00026: dealbreaker", () => {
  const result = findIssues("deaLbReaKer");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00026");
});

test("00027: duty-bound", () => {
  const result = findIssues("DUtY-BOuNd");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00027");
});

test("00028: hand-pick", () => {
  const result = findIssues("HanD-picK");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00028");
});

test("00029: hardpressed", () => {
  const result = findIssues("hardPrEsSed");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00029");
});

test("00030: hard-working", () => {
  const result = findIssues("HaRd-WorKinG");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00030");
});

test("00031: iron-fisted", () => {
  const result = findIssues("iroN-fiSted");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00031");
});

test("00032: kind-hearted", () => {
  const result = findIssues("KinD-HeArTed");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00032");
});

test("00033: knowhow", () => {
  const result = findIssues("KNOWhow");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00033");
});

test("00034: laidback", () => {
  const result = findIssues("laidBACK");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00034");
});

test("00035: mass produce", () => {
  const result = findIssues("mAss ProDuCe");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00035");
});

test("00036: mass-production", () => {
  const result = findIssues("MASs-ProDuctIon");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00036");
});

test("00037: mid-morning", () => {
  const result = findIssues("mId-MorNinG");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00037");
});

test("00038: mid-sentence", () => {
  const result = findIssues("mID-sEnTenCe");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00038");
});

test("00039: off-handed", () => {
  const result = findIssues("OFF-handed");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00039");
});

test("00040: on-stage", () => {
  const result = findIssues("on-STAGE");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00040");
});

test("00041: re-examine", () => {
  const result = findIssues("rE-eXaMiNe");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00041");
});

test("00042: roleplay", () => {
  const result = findIssues("rOlePlaY");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00042");
});

test("00043: semi-circle", () => {
  const result = findIssues("SEMI-circle");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00043");
});

test("00044: singlehanded", () => {
  const result = findIssues("sinGlEHanDeD");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00044");
});

test("00045: singleminded", () => {
  const result = findIssues("SiNglEmiNdeD");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00045");
});

test("00046: slip-up", () => {
  const result = findIssues("SLIP-up");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00046");
});

test("00047: tipoff", () => {
  const result = findIssues("TIPoff");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00047");
});

test("00048: vice-versa ", () => {
  const result = findIssues("vice-VERSA");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00048");
});

test("00049: alright", () => {
  const result = findIssues("ALright");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00049");
});

test("00050: bath house", () => {
  const result = findIssues("the BATH house is big");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00050");
});

test("00051: flipside", () => {
  const result = findIssues("on the FLIPside,");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00051");
});

// test("00052: frontlines", () => {
//   const result = findIssues("frontLINES of the war");
//   expect(result).toHaveLength(1);
//   expect(result[0].id).toBe("00052");
// });

test("00053: good will", () => {
  const result = findIssues("GOOD wilL hunting");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00053");
});

test("00054: haha", () => {
  const result = findIssues("hahah! he laughed");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00054");
});

test("00055: heehee", () => {
  const result = findIssues("heehee! he giggled");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00055");
});

test("00056: keychain", () => {
  const result = findIssues("KeYChain");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00056");
});

test("00057: lightbulb", () => {
  const result = findIssues("LIGHTbulb");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00057");
});

test("00058: nevermind", () => {
  const result = findIssues("neverMind");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00058");
});

test("00059: photoshoot: ", () => {
  const result = findIssues("photoSHOOT");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00059");
});

test("00060: shockwave", () => {
  const result = findIssues("SHOCKwave");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00060");
});

test("00061: skillset", () => {
  const result = findIssues("skillSET");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00061");
});

test("00062: soulmate", () => {
  const result = findIssues("soulMATE");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00062");
});

test("00063: tastebud", () => {
  const result = findIssues("tasteBUD");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00063");
});

test("00064: timeframe", () => {
  const result = findIssues("timeFrame");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00064");
});

test("00065: wishlist", () => {
  const result = findIssues("WISHlist");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00065");
});

test("00066: acknowledgement", () => {
  const result = findIssues("acKNowlEdgEment");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00066");
});

test("00067: accidently", () => {
  const result = findIssues("acciDentLy");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00067");
});

test("00068: ambiance", () => {
  const result = findIssues("AMBiance");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00068");
});

test("00069: ax", () => {
  const result = findIssues("an AX chops wood");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00069");
});

test("00069: ax respects word boundaries", () => {
  const result = findIssues("maximum pax power");
  expect(result).toHaveLength(0);
});

test("00070: cafe", () => {
  const result = findIssues("trendy cafe there");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00070");
});

test("00070: cafe respects word boundaries", () => {
  const result = findIssues("nescafe coffee");
  expect(result).toHaveLength(0);
});

test("00071: concensus", () => {
  const result = findIssues("ConCensus");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00071");
});

test("00072: crystalized", () => {
  const result = findIssues("CRYstalIzed");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00072");
});

test("00073: dieing ", () => {
  const result = findIssues("DIeing");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00073");
});

test("00074: forsaw", () => {
  const result = findIssues("ForSaw");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00074");
});

test("00075: forsee", () => {
  const result = findIssues("foRsEE");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00075");
});

test("00076: geez", () => {
  const result = findIssues("GeeZ");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00076");
});

test("00076: geez respects word boundaries", () => {
  const result = findIssues("geezer");
  expect(result).toHaveLength(0);
});

test("00077: grevious", () => {
  const result = findIssues("gReVioUs");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00077");
});

test("00078: grinded", () => {
  const result = findIssues("grindED");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00078");
});

test("00079: guerrila", () => {
  const result = findIssues("GUERrila");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00079");
});

test("00080: guerilla", () => {
  const result = findIssues("GUeRilla");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00080");
});

test("00081: judgement", () => {
  const result = findIssues("juDgeMENT");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00081");
});

test("00082: mischevious: ", () => {
  const result = findIssues("MISCheviouS");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00082");
});

test("00083: ochre: ", () => {
  const result = findIssues("OCHre");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00083");
});

test("00084: omelette", () => {
  const result = findIssues("OMElette");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00084");
});

test("00085: publically", () => {
  const result = findIssues("PUBlicaLly");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00085");
});

test("00086: straightlaced", () => {
  const result = findIssues("STRAIGHTlaced");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00086");
});

test("00087: underaged", () => {
  const result = findIssues("underAGED");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00087");
});

test("00088: well-kempt ", () => {
  const result = findIssues("WELL-kempt");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00088");
});

test("00089: woah: ", () => {
  const result = findIssues("WOAh!");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00089");
});

test("00090: worshiping ", () => {
  const result = findIssues("WORShiping");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00090");
});

test("00091: worshiper", () => {
  const result = findIssues("woRshipEr");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00091");
});

test("00092: aircon", () => {
  const result = findIssues("AirCon");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00092");
});

test("00093: apologise", () => {
  const result = findIssues("APOLOgise");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00093");
});

test("00094: cancelled", () => {
  const result = findIssues("CANcelled");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00094");
});

test("00095: cancelling", () => {
  const result = findIssues("CANcelling");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00095");
});

test("00096: cancelation ", () => {
  const result = findIssues("canCElation");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00096");
});

test("00097: colour", () => {
  const result = findIssues("colOurfuL");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00097");
});

test("00098: centre", () => {
  const result = findIssues("CEntRe");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00098");
});

test("00099: defence", () => {
  const result = findIssues("deFence");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00099");
});

test("00100: emphasise", () => {
  const result = findIssues("emphaSise");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00100");
});

test("00101: grey", () => {
  const result = findIssues("greying hair");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00101");
});

test("00102: meagre", () => {
  const result = findIssues("meAgrE");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00102");
});

test("00103: miniscule", () => {
  const result = findIssues("miNisCule");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00103");
});

test("00104: moustache", () => {
  const result = findIssues("MOUSTache");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00104");
});

test("00105: offence", () => {
  const result = findIssues("take OFfence");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00105");
});

test("00106: plough", () => {
  const result = findIssues("PloUghing");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00106");
});

test("00107: signalling", () => {
  const result = findIssues("SIGNAlling");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00107");
});

test("00108: sizeable", () => {
  const result = findIssues("SIZEable");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00108");
});

test("00109: smoulder: ", () => {
  const result = findIssues("SMOULder");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00109");
});

test("00110: travelling", () => {
  const result = findIssues("travelLIng");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00110");
});

test("00111: traveller", () => {
  const result = findIssues("TRAVELler");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00111");
});

test("00112: frontline", () => {
  const result = findIssues("frontline warrior");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00112");
});

test("00113: front line", () => {
  const result = findIssues("front line");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00113");
});

test("00114: grit", () => {
  const result = findIssues("he grit his teeth");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00114");
});

test("00115: heroin", () => {
  const result = findIssues("heroin addict");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00115");
});

test("00116: lead", () => {
  const result = findIssues("lead away");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00116");
});

test("00117: principal", () => {
  const result = findIssues("principAlity");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00117");
});

test("00118: principle", () => {
  const result = findIssues("PRInciplE");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00118");
});

test("00119: psych (verb)", () => {
  const result = findIssues("psyCh up");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00119");
});

test("00120: psyche (noun)", () => {
  const result = findIssues("his psycHe");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00120");
});

test("00121: pubic", () => {
  const result = findIssues("puBIc bone");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00121");
});

test("00122: sheath (noun)", () => {
  const result = findIssues("sword in shEath and");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00122");
});

test("00123: sheathe (verb)", () => {
  const result = findIssues("SHeaThe your sword");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00123");
});

test("00124: first-hand", () => {
  const result = findIssues("FIRST-hand");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00124");
});

test("00125: mid-twenties", () => {
  const result = findIssues("mid-TWENties");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00125");
});

test("00126: mid-thirties", () => {
  const result = findIssues("mid-THIRtieS");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00126");
});

test("00127: mid-forties", () => {
  const result = findIssues("MID-forties");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00127");
});

test("00128: one-time", () => {
  const result = findIssues("ONE-time");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00128");
});

test("00129: second-hand", () => {
  const result = findIssues("second-HAND");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00129");
});

test("00130: twenty-four-seven", () => {
  const result = findIssues("TWENTY-four-sEven");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00130");
});

test("00131: coup d'etat", () => {
  const result = findIssues("cOUp d’Etat");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00131");
});

test("00132: deja vu", () => {
  const result = findIssues("DEJa vU");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00132");
});

test("00133: gatling gun", () => {
  const result = findIssues("fire my gatling gun");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00133");
});

test("00133: gatling gun NOT case-insensitive", () => {
  const result = findIssues("fire my GATLING GUN");
  expect(result).toHaveLength(0);
});

test("00134: fiance", () => {
  const result = findIssues("my fiance and I");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00134");
});

test("00134: fiance respects word boundaries", () => {
  const result = findIssues("shout your defiance and");
  expect(result).toHaveLength(0);
});

test("00135: fiancee", () => {
  const result = findIssues("my fiancee and I");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00135");
});

test("00136: paper mache", () => {
  const result = findIssues("PAPER mache");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00136");
});

test("00137: swiss cheese", () => {
  const result = findIssues("ate swiss cheese");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00137");
});

test("00137: swiss cheese NOT case-insensitive", () => {
  const result = findIssues("ate SWISS CHEESE");
  expect(result).toHaveLength(0);
});

test("00138: tete-a-tete", () => {
  const result = findIssues("a tete-a-TETE");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00138");
});

test("00139: hyphenated adverbs (ly-)", () => {
  const result = findIssues("BADLY-made");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00139");
});

test("00140: towards", () => {
  const result = findIssues("toWards");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00140");
});

test("00141: toward", () => {
  const result = findIssues("towarD the light");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00141");
});

test("00142: afterwards", () => {
  const result = findIssues("afterWards");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00142");
});

test("00143: afterward", () => {
  const result = findIssues("aftErWard he went");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00143");
});
