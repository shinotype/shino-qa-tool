import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult } from './expectations';

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

test("life-blood", () => {
  expectResult(countIssues("life-BLOOD"), issues.life_blood.id);
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

test("love-struck", () => {
  expectResult(countIssues("love-STRUCK"), issues.love_struck.id);
});

test("make-up", () => {
  expectResult(countIssues("MAKE-up"), issues.make_up.id);
});

test("mask-like", () => {
  expectResult(countIssues("mask-LIKE"), issues.mask_like.id);
});

test("mass produce", () => {
  expectResult(countIssues("mAss ProDuCe"), issues.mass_produce.id);
});

test("mass producing", () => {
  expectResult(countIssues("mAss ProDuCiNG"), issues.mass_producing.id);
});

test("mass-production", () => {
  expectResult(countIssues("MASs-ProDuctIon"), issues.mass_production.id);
});

test("meagre", () => {
  expectResult(countIssues("meAgrE"), issues.meagre.id);
});

test("mid-air", () => {
  expectResult(countIssues("mid-AIR"), issues.mid_air.id);
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

test("naive", () => {
  expectResult(countIssues("na??vE"), issues.naive.id);
});

test("nevermind", () => {
  expectResult(countIssues("neverMind"), issues.nm.id);
});

test("non-combatant", () => {
  expectResult(countIssues("NON-combatant"), issues.non_combatant.id);
});

test("non-hero", () => {
  expectResult(countIssues("non-HERO"), issues.non_hero.id);
});

test("non-living", () => {
  expectResult(countIssues("NON-living"), issues.non_living.id);
});

test("non-zero", () => {
  expectResult(countIssues("non-ZERO"), issues.non_zero.id);
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

test("over-prepared", () => {
  expectResult(countIssues("over-PREPARED"), issues.over_prepared.id);
});

test("over-protect", () => {
  expectResult(countIssues("OVER-protect"), issues.over_protect.id);
});
