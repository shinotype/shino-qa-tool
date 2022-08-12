import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectContainsResult, expectNoResult } from './expectations';

test("absent-minded", () => {
  expectResult(countIssues("he was aBseNt-MINDED"), issues.absent_minded.id);
});

test("acknowledgement", () => {
  expectResult(countIssues("acKNowlEdgEment"), issues.ack.id);
});

test("accidently", () => {
  expectResult(countIssues("acciDentLy"), issues.accidently.id);
});

test("ahaha", () => {
  expectContainsResult(countIssues("ahaha"), issues.ahaha.id, 1);
})

test("aircon", () => {
  expectResult(countIssues("AirCon"), issues.aircon.id);
});

test("air-tight", () => {
  expectResult(countIssues("AIR-tight"), issues.air_tight.id);
});

test("alright", () => {
  expectResult(countIssues("ALright"), issues.alright.id);
});

test("ambiance", () => {
  expectResult(countIssues("AMBiance"), issues.ambiance.id);
});

test("animal-like", () => {
  expectResult(countIssues("animal-LIKE"), issues.animal_like.id);
});

test("apologise", () => {
  expectResult(countIssues("APOLOgise"), issues.apologise.id);
});

test("apologising", () => {
  expectResult(countIssues("APOLOgising"), issues.apologising.id);
});

test("ax", () => {
  expectResult(countIssues("an AX chops wood"), issues.axe.id);
});

test("ax respects word boundaries", () => {
  expectNoResult(countIssues("maximum pax power"));
});

test("bad-mouth", () => {
  expectResult(countIssues("BAD mouth"), issues.bad_mouth.id);
});

test("badmouth", () => {
  expectResult(countIssues("BADmouth"), issues.badmouth.id);
});

test("backup", () => {
  expectResult(countIssues("BAckUP"), issues.backup.id);
});

test("back up", () => {
  expectResult(countIssues("BACK up"), issues.back_up.id);
});

test("back-up", () => {
  expectResult(countIssues("back-UP"), issues.back_up2.id);
});

test("bath house", () => {
  expectResult(countIssues("the BATH house is big"), issues.bathhouse.id);
});

test("bed time", () => {
  expectResult(countIssues("bed TIME"), issues.bed_time.id);
});

test("bite-sized", () => {
  expectResult(countIssues("BITE-sized"), issues.bite_sized.id);
});

test("black and white", () => {
  expectResult(countIssues("BLACK and WHITE"), issues.black_and_white.id);
});

test("blindspot", () => {
  expectResult(countIssues("blindSPot"), issues.blindspot.id);
});

test("blood-curdling", () => {
  expectResult(countIssues("he was blOoD-CurDling"), issues.blood_curdling.id);
});

test("blood-red", () => {
  expectResult(countIssues("he was blOoD-reD"), issues.blood_red.id);
});

test("blood red", () => {
  expectResult(countIssues("he was blOoD reD"), issues.blood_red2.id);
});

test("blood-sucker", () => {
  expectResult(countIssues("he was BlOod-SUcKer"), issues.blood_sucker.id);
});

test("blood-sucking", () => {
  expectResult(countIssues("he was BlOod-SUcKing"), issues.blood_sucking.id);
});

test("broadminded", () => {
  expectResult(countIssues("BROADminded"), issues.broadminded.id);
});

test("buildup", () => {
  expectResult(countIssues("buiLd-Up"), issues.build_up.id);
});

test("cafe", () => {
  expectResult(countIssues("trendy cafe there"), issues.cafe.id);
});

test("cafe respects word boundaries", () => {
  expectNoResult(countIssues("nescafe coffee"));
});

test("cancelled", () => {
  expectResult(countIssues("CANcelled"), issues.cancelled.id);
});

test("cancelling", () => {
  expectResult(countIssues("CANcelling"), issues.cancelling.id);
});

test("cancelation", () => {
  expectResult(countIssues("canCElation"), issues.cancelation.id);
});

test("centre", () => {
  expectResult(countIssues("CEntRe"), issues.centre.id);
});

test("collar bone", () => {
  expectResult(countIssues("colLAR bone"), issues.collar_bone.id);
});

test("colour", () => {
  expectResult(countIssues("colOurfuL"), issues.colour.id);
});

test("concensus", () => {
  expectResult(countIssues("ConCensus"), issues.concensus.id);
});

test("counter attack", () => {
  expectResult(countIssues("counter ATTACK"), issues.counter_attack.id);
});

test("coup d'etat", () => {
  expectResult(countIssues("cOUp d’Etat"), issues.coup.id);
});

test("co-worker", () => {
  expectResult(countIssues("co-WORker"), issues.co_worker.id);
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

test("crystalized", () => {
  expectResult(countIssues("CRYstalIzed"), issues.crystalized.id);
});

test("dead-set", () => {
  expectResult(countIssues("dEaD-sEt"), issues.dead_set.id);
});

test("dealbreaker", () => {
  expectResult(countIssues("deaLbReaKer"), issues.dealbreaker.id);
});

test("deal-maker", () => {
  expectResult(countIssues("DEAL-maker"), issues.deal_maker.id);
});

test("deal-making", () => {
  expectResult(countIssues("deal-MAKING"), issues.deal_making.id);
});

test("deep fry", () => {
  expectResult(countIssues("DEEP FRY"), issues.deep_fry.id);
});

test("defence", () => {
  expectResult(countIssues("deFence"), issues.defence.id);
});

test("deja vu", () => {
  expectResult(countIssues("DEJa vU"), issues.dejavu.id);
});

test("dieing", () => {
  expectResult(countIssues("DIeing"), issues.dieing.id);
});

test("discernable", () => {
  expectResult(countIssues("DIScernable"), issues.discernable.id);
});

test("discernably", () => {
  expectResult(countIssues("discernaBLY"), issues.discernably.id);
});

test("discreet and discrete", () => {
  const result = countIssues("disCreet DIScrete disCreTe DISCREET discREET");
  expectContainsResult(result, issues.discreet.id, 3);
  expectContainsResult(result, issues.discrete.id, 2);
});

test("doppelganger", () => {
  expectResult(countIssues("doppELgAnger"), issues.doppelganger.id);
});

test("doppleganger", () => {
  expectResult(countIssues("DOPPLEganger"), issues.doppleganger.id);
});

test("double-take", () => {
  expectResult(countIssues("DOUBLE-take"), issues.double_take.id);
});

test("doubletake", () => {
  expectResult(countIssues("doubleTAKE"), issues.doubletake.id);
});

test("draw string", () => {
  expectResult(countIssues("draw STRING"), issues.draw_string.id);
});

test("drier and dryer", () => {
  const result = countIssues("drier DRYeR driER DRier drYer");
  expectContainsResult(result, issues.drier.id, 3);
  expectContainsResult(result, issues.dryer.id, 2);
});

test("duty-bound", () => {
  expectResult(countIssues("DUtY-BOuNd"), issues.duty_bound.id);
});

test("emphasise", () => {
  expectResult(countIssues("emphaSise"), issues.emphasise.id);
});

test("emphasising", () => {
  expectResult(countIssues("emphaSisING"), issues.emphasising.id);
});

test("enroute", () => {
  expectResult(countIssues("EnRoute"), issues.enroute.id);
});

test("entree", () => {
  expectResult(countIssues("EntrEe"), issues.entree.id);
});

test("eye witness", () => {
  expectResult(countIssues("eye WITNESS"), issues.eye_witness.id);
});

test("eye-witness", () => {
  expectResult(countIssues("EYE-witness"), issues.eye_witness2.id);
});