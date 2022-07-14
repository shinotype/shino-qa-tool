import { countIssues, IssueInstance } from '../src/qatool';
import { IssueId, issues } from '../src/issues';
import { expectResult, expectContainsResult, expectNoResult } from './expectations';

test("keychain", () => {
  expectResult(countIssues("KeYChain"), issues.keychain.id);
});

test("kind-hearted", () => {
  expectResult(countIssues("KinD-HeArTed"), issues.kind_hearted.id);
});

test("knock-off", () => {
  expectResult(countIssues("knock-OFF"), issues.knock_off.id);
});

test("knowhow", () => {
  expectResult(countIssues("KNOWhow"), issues.knowhow.id);
});

test("laidback", () => {
  expectResult(countIssues("laidBACK"), issues.laidback.id);
});

test("lead", () => {
  expectResult(countIssues("lead away"), issues.lead.id);
});

test("lightbulb", () => {
  expectResult(countIssues("LIGHTbulb"), issues.lightbulb.id);
});

test("light-hearted", () => {
  expectResult(countIssues("LIGHT-hearted"), issues.light_hearted.id);
});

test("light-weight", () => {
  expectResult(countIssues("LIGHT-weight"), issues.light_weight.id);
});

test("line-up", () => {
  expectResult(countIssues("line-UP"), issues.line_up.id);
});

test("mass produce", () => {
  expectResult(countIssues("mAss ProDuCe"), issues.massproduce.id);
});

test("mass-production", () => {
  expectResult(countIssues("MASs-ProDuctIon"), issues.mass_production.id);
});

test("meagre", () => {
  expectResult(countIssues("meAgrE"), issues.meagre.id);
});

test("mid-morning", () => {
  expectResult(countIssues("mId-MorNinG"), issues.mid_morning.id);
});

test("mid-sentence", () => {
  expectResult(countIssues("mID-sEnTenCe"), issues.mid_sentence.id);
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

test("miniscule", () => {
  expectResult(countIssues("miNisCule"), issues.miniscule.id);
});

test("mischevious", () => {
  expectResult(countIssues("MISCheviouS"), issues.mischevious.id);
});

test("moustache", () => {
  expectResult(countIssues("MOUSTache"), issues.moustache.id);
});

test("nevermind", () => {
  expectResult(countIssues("neverMind"), issues.nm.id);
});

test("occured", () => {
  expectResult(countIssues("occuRed"), issues.occured.id);
});

test("occuring", () => {
  expectResult(countIssues("occurInG"), issues.occuring.id);
});

test("ochre", () => {
  expectResult(countIssues("OCHre"), issues.ocher.id);
});

test("off-handed", () => {
  expectResult(countIssues("OFF-handed"), issues.off_handed.id);
});

test("offence", () => {
  expectResult(countIssues("take OFfence"), issues.offence.id);
});

test("omelette", () => {
  expectResult(countIssues("OMElette"), issues.omelette.id);
});

test("on-stage", () => {
  expectResult(countIssues("on-STAGE"), issues.on_stage.id);
});

test("one-time", () => {
  expectResult(countIssues("ONE-time"), issues.one_time.id);
});


