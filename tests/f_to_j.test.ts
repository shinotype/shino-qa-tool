import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectNoResult, expectContainsResult } from './expectations';

test("fiance", () => {
  expectResult(countIssues("my fiance and I"), issues.fiance.id);
});

test("fiance respects word boundaries", () => {
  expectNoResult(countIssues("shout your defiance and"));
});

test("fiancee", () => {
  expectResult(countIssues("my fiancee and I"), issues.fiancee.id);
});

test("first-hand", () => {
  expectResult(countIssues("FIRST-hand"), issues.first_hand.id);
});

test("flipside", () => {
  expectResult(countIssues("on the FLIPside,"), issues.flipside.id);
});

test("forcefield", () => {
  expectResult(countIssues("forCeFielD"), issues.forcefield.id);
});

test("forsaw", () => {
  expectResult(countIssues("ForSaw"), issues.forsaw.id);
});

test("forsee", () => {
  expectResult(countIssues("foRsEE"), issues.forsee.id);
});

test("frontlines", () => {
  const result = countIssues("frontLINES of the war");
  // this triggers the "frontline (adjective) rule, so we can't assert there's only one issue
  expectContainsResult(result, issues.frontlines.id, 1);
});

test("frontline", () => {
  expectResult(countIssues("frontline warrior"), issues.frontline1.id);
});

test("front line", () => {
  expectResult(countIssues("front line"), issues.frontline2.id);
});

test("gatling gun", () => {
  expectResult(countIssues("fire my gatling gun"), issues.gatling.id);
});

test("gatling gun NOT case-insensitive", () => {
  expectNoResult(countIssues("fire my GATLING GUN"));
});

test("geez", () => {
  expectResult(countIssues("GeeZ"), issues.geez.id);
});

test("geez respects word boundaries", () => {
  expectNoResult(countIssues("geezer"));
});

test("good will", () => {
  expectResult(countIssues("GOOD wilL hunting"), issues.goodwill.id);
});

test("grevious", () => {
  expectResult(countIssues("gReVioUs"), issues.grevious.id);
});

test("grey", () => {
  expectResult(countIssues("greying hair"), issues.grey.id);
});

test("grinded", () => {
  expectResult(countIssues("grindED"), issues.grinded.id);
});

test("grit", () => {
  expectResult(countIssues("he grit his teeth"), issues.grit.id);
});

test("grit respects word boundaries", () => {
  expectNoResult(countIssues("big gritty fat"));
});

test("guerrila", () => {
  expectResult(countIssues("GUERrila"), issues.guerrila.id);
});

test("guerilla", () => {
  expectResult(countIssues("GUeRilla"), issues.guerilla.id);
});

test("haha", () => {
  expectResult(countIssues("hahah! he laughed"), issues.laugh1.id);
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

test("heehee", () => {
  expectResult(countIssues("heehee! he giggled"), issues.laugh2.id);
});

test("heroin", () => {
  expectResult(countIssues("heroin addict"), issues.heroin.id);
});

test("iron-clad", () => {
  expectResult(countIssues("iroN-ClaD"), issues.iron_clad.id);
});

test("iron-fisted", () => {
  expectResult(countIssues("iroN-fiSted"), issues.iron_fisted.id);
});

test("judgement", () => {
  expectResult(countIssues("juDgeMENT"), issues.judge.id);
});


