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
  expectResult(countIssues("ahaha"), issues.ahaha.id);
})

test("aircon", () => {
  expectResult(countIssues("AirCon"), issues.aircon.id);
});

test("alright", () => {
  expectResult(countIssues("ALright"), issues.alright.id);
});

test("ambiance", () => {
  expectResult(countIssues("AMBiance"), issues.ambiance.id);
});

test("apologise", () => {
  expectResult(countIssues("APOLOgise"), issues.apologise.id);
});

test("ax", () => {
  expectResult(countIssues("an AX chops wood"), issues.axe.id);
});

test("ax respects word boundaries", () => {
  expectNoResult(countIssues("maximum pax power"));
});

test("bath house", () => {
  expectResult(countIssues("the BATH house is big"), issues.bathhouse.id);
});

test("blood-curdling", () => {
  expectResult(countIssues("he was blOoD-CurDling"), issues.blood_curdling.id);
});

test("blood-red", () => {
  expectResult(countIssues("he was blOoD-reD"), issues.blood_red.id);
});

test("blood-sucking", () => {
  expectResult(countIssues("he was BlOod-SUcKing"), issues.blood_sucking.id);
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

test("colour", () => {
  expectResult(countIssues("colOurfuL"), issues.colour.id);
});

test("concensus", () => {
  expectResult(countIssues("ConCensus"), issues.concensus.id);
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

test("defence", () => {
  expectResult(countIssues("deFence"), issues.defence.id);
});

test("deja vu", () => {
  expectResult(countIssues("DEJa vU"), issues.dejavu.id);
});

test("dieing", () => {
  expectResult(countIssues("DIeing"), issues.dieing.id);
});

test("discreet and discrete", () => {
  const result = countIssues("disCreet DIScrete disCreTe DISCREET discREET");
  expectContainsResult(result, issues.discreet.id, 3);
  expectContainsResult(result, issues.discrete.id, 2);
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

test("entree", () => {
  expectResult(countIssues("EntrEe"), issues.entree.id);
});
