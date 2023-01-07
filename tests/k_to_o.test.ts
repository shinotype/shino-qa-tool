import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult } from './expectations';

test("keychain", () => {
  expectResult(countIssues("KeYChain"), issues.keychain.id);
});

test("kind-hearted", () => {
  expectResult(countIssues("KinD-HeArTed"), issues.kind_hearted.id);
});

test("kind hearted", () => {
  expectResult(countIssues("KinD HeArTed"), issues.kind_hearted2.id);
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

test("landmine", () => {
  expectResult(countIssues("LANDmine"), issues.landmine.id);
});

test("last ditch", () => {
  expectResult(countIssues("LAST ditch"), issues.last_ditch.id);
});

test("last-ditch", () => {
  expectResult(countIssues("last-DITCH"), issues.last_ditch2.id);
});

test("off-handed", () => {
  expectResult(countIssues("OFF-handed"), issues.off_handed.id);
});

test("lead", () => {
  expectResult(countIssues("lead away"), issues.lead.id);
});

test("let-down", () => {
  expectResult(countIssues("let-DOWN"), issues.let_down.id);
});

test("life and death", () => {
  expectResult(countIssues("life AND death"), issues.life_and_death.id);
});

test("life-blood", () => {
  expectResult(countIssues("life-BLOOD"), issues.life_blood.id);
});

test("life form", () => {
  expectResult(countIssues("life form"), issues.life_form.id);
});

test("lifeform", () => {
  expectResult(countIssues("lifeform"), issues.lifeform.id);
});

test("lifespan", () => {
  expectResult(countIssues("lifespan"), issues.lifespan.id);
});

test("life span", () => {
  expectResult(countIssues("life span"), issues.life_span.id);
});

test("life threatening", () => {
  expectResult(countIssues("life THREATENING"), issues.life_threatening.id);
});

test("lightbulb", () => {
  expectResult(countIssues("LIGHTbulb"), issues.lightbulb.id);
});

test("light headed", () => {
  expectResult(countIssues("LIGHT headed"), issues.light_headed.id);
});

test("lightheaded", () => {
  expectResult(countIssues("LIGHTheaded"), issues.lightheaded.id);
});

test("light-hearted", () => {
  expectResult(countIssues("LIGHT-hearted"), issues.light_hearted.id);
});

test("light hearted", () => {
  expectResult(countIssues("LIGHT hearted"), issues.light_hearted2.id);
});

test("light-weight", () => {
  expectResult(countIssues("LIGHT-weight"), issues.light_weight.id);
});

test("line-up", () => {
  expectResult(countIssues("line-UP"), issues.line_up.id);
});

test("liquify", () => {
  expectResult(countIssues("liquify"), issues.liquif.id);
});

test("liquified", () => {
  expectResult(countIssues("liquified"), issues.liquif.id);
});

test("long-time", () => {
  expectResult(countIssues("loNG-time"), issues.long_time.id);
});

test("lookalike", () => {
  expectResult(countIssues("looKAlike"), issues.lookalike.id);
});

test("love-struck", () => {
  expectResult(countIssues("love-STRUCK"), issues.love_struck.id);
});

test("lunchbox", () => {
  expectResult(countIssues("lunchBOX"), issues.lunchbox.id);
});

test("make due", () => {
  expectResult(countIssues("MAKE due"), issues.make_due.id);
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

test("mid-point", () => {
  expectResult(countIssues("mid-POINT"), issues.mid_point.id);
});

test("mid-section", () => {
  expectResult(countIssues("mID-SectION"), issues.mid_section.id);
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

test("mini-car", () => {
  expectResult(countIssues("mini-CAR"), issues.mini_car.id);
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
  expectResult(countIssues("naïvE"), issues.naive.id);
});

test("name drop", () => {
  expectResult(countIssues("NAME drop"), issues.name_drop.id);
});

test("nevermind", () => {
  expectResult(countIssues("neverMind"), issues.nm.id);
});

test("non-answer", () => {
  expectResult(countIssues("NON-answer"), issues.non_answer.id);
});

test("non-combatant", () => {
  expectResult(countIssues("NON-combatant"), issues.non_combatant.id);
});

test("non-committal", () => {
  expectResult(countIssues("NON-committal"), issues.non_committal.id);
});

test("non-confrontational", () => {
  expectResult(countIssues("NON-confrontational"), issues.non_confrontational.id);
});

test("non-existent", () => {
  expectResult(countIssues("NON-existent"), issues.non_existent.id);
});

test("non-hero", () => {
  expectResult(countIssues("non-HERO"), issues.non_hero.id);
});

test("non-living", () => {
  expectResult(countIssues("NON-living"), issues.non_living.id);
});

test("non-participant", () => {
  expectResult(countIssues("NON-participant"), issues.non_participant.id);
});

test("non-stop", () => {
  expectResult(countIssues("NoN-StoP"), issues.non_stop.id);
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

test("off balance", () => {
  expectResult(countIssues("OFF balance"), issues.off_balance.id);
});

test("off-duty", () => {
  expectResult(countIssues("OFF-duty"), issues.off_duty.id);
});

test("off-guard", () => {
  expectResult(countIssues("off-GUARD"), issues.off_guard.id);
});

test("off-handed", () => {
  expectResult(countIssues("OFF-handed"), issues.off_handed.id);
});

test("offload", () => {
  expectResult(countIssues("OFFload"), issues.offload.id);
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

test("over-excited", () => {
  expectResult(countIssues("OVER-excited"), issues.over_excited.id);
});

test("over-extend", () => {
  expectResult(countIssues("OVER-extend"), issues.over_extend.id);
});

test("over-familiar", () => {
  expectResult(countIssues("OVER-familiar"), issues.over_familiar.id);
});

test("over-prepared", () => {
  expectResult(countIssues("over-PREPARED"), issues.over_prepared.id);
});

test("over-protect", () => {
  expectResult(countIssues("OVER-protect"), issues.over_protect.id);
});
