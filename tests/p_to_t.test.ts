import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectNoResult } from './expectations';

test("paper mache", () => {
  expectResult(countIssues("PAPER mache"), issues.paper_mache.id);
});

test("photoshoot", () => {
  expectResult(countIssues("photoSHOOT"), issues.photoshoot.id);
});

test("plough", () => {
  expectResult(countIssues("PloUghing"), issues.plough.id);
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

test("publically", () => {
  expectResult(countIssues("PUBlicaLly"), issues.publically.id);
});

test("puppet-like", () => {
  expectResult(countIssues("puppet-like"), issues.puppet_like.id);
});

test("re-absorb", () => {
  expectResult(countIssues("re-aBsorB"), issues.re_absorb.id);
});

test("re-examine", () => {
  expectResult(countIssues("rE-eXaMiNe"), issues.re_examine.id);
});

test("roleplay", () => {
  expectResult(countIssues("rOlePlaY"), issues.roleplay.id);
});

test("second-hand", () => {
  expectResult(countIssues("second-HAND"), issues.second_hand.id);
});

test("semi-circle", () => {
  expectResult(countIssues("SEMI-circle"), issues.semi_circle.id);
});

test("sheath (noun)", () => {
  expectResult(countIssues("sword in shEath and"), issues.sheath.id);
});

test("sheathe (verb)", () => {
  expectResult(countIssues("SHeaThe your sword"), issues.sheathe.id);
});

test("shockwave", () => {
  expectResult(countIssues("SHOCKwave"), issues.shockwave.id);
});

test("signalling", () => {
  expectResult(countIssues("SIGNAlling"), issues.signalling.id);
});

test("singlehanded", () => {
  expectResult(countIssues("sinGlEHanDeD"), issues.singlehanded.id);
});

test("singleminded", () => {
  expectResult(countIssues("SiNglEmiNdeD"), issues.singleminded.id);
});

test("sizeable", () => {
  expectResult(countIssues("SIZEable"), issues.sizeable.id);
});

test("skillset", () => {
  expectResult(countIssues("skillSET"), issues.skillset.id);
});

test("slip-up", () => {
  expectResult(countIssues("SLIP-up"), issues.slip_up.id);
});

test("smoulder", () => {
  expectResult(countIssues("SMOULder"), issues.smoulder.id);
});

test("soft-hearted", () => {
  expectResult(countIssues("SOFT-hearted"), issues.soft_hearted.id);
});

test("soulmate", () => {
  expectResult(countIssues("soulMATE"), issues.soul.id);
});

test("standalone", () => {
  expectResult(countIssues("STAnDALONE"), issues.standalone.id);
});

test("straightlaced", () => {
  expectResult(countIssues("STRAIGHTlaced"), issues.strait.id);
});

test("swiss cheese", () => {
  expectResult(countIssues("ate swiss cheese"), issues.swiss.id);
});

test("swiss cheese NOT case-insensitive", () => {
  expectNoResult(countIssues("ate SWISS CHEESE"));
});

test("tastebud", () => {
  expectResult(countIssues("tasteBUD"), issues.tastebud.id);
});

test("tete-a-tete", () => {
  expectResult(countIssues("tete-a-TETE"), issues.tete_a_tete.id);
});

test("timeframe", () => {
  expectResult(countIssues("timeFrame"), issues.timeframe.id);
});

test("tipoff", () => {
  expectResult(countIssues("TIPoff"), issues.tipoff.id);
});

test("travelling", () => {
  expectResult(countIssues("travelLIng"), issues.travelling.id);
});

test("travelled", () => {
  expectResult(countIssues("travelLed"), issues.travelled.id);
});

test("traveller", () => {
  expectResult(countIssues("TRAVELler"), issues.traveller.id);
});

test("twenty-four-seven", () => {
  expectResult(countIssues("TWENTY-four-sEven"), issues.twentyfourseven.id);
});