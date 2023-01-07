import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectNoResult } from './expectations';

test("paper mache", () => {
  expectResult(countIssues("PAPER mache"), issues.paper_mache.id);
});

test("part timer", () => {
  expectResult(countIssues("PART timer"), issues.part_timer.id);
});

test("phase", () => {
  expectResult(countIssues("PhaSe"), issues.phase.id);
});

test("photoshoot", () => {
  expectResult(countIssues("photoSHOOT"), issues.photoshoot.id);
});

test("piece de resistance", () => {
  expectResult(countIssues("piece DE RESIstance"), issues.piecede.id);
});

test("pipsqueak", () => {
  expectResult(countIssues("PIPsqueak"), issues.pipsqueak.id);
});

test("plain-clothes", () => {
  expectResult(countIssues("pLAin-clothes"), issues.plain_clothes.id);
});

test("plantlife", () => {
  expectResult(countIssues("PlAntLife"), issues.plantlife.id);
});

test("plough", () => {
  expectResult(countIssues("PloUghing"), issues.plough.id);
});

test("point blank", () => {
  expectResult(countIssues("Point BLANK"), issues.point_blank.id);
});

test("power-walk", () => {
  expectResult(countIssues("POWER-walk"), issues.power_walk.id);
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

test("punchline", () => {
  expectResult(countIssues("PUNCHline"), issues.punchline.id);
});

test("punch-line", () => {
  expectResult(countIssues("PUncH-LINE"), issues.punch_line.id);
});

test("puppet-like", () => {
  expectResult(countIssues("puppet-like"), issues.puppet_like.id);
});

test("pureblooded", () => {
  expectResult(countIssues("PUREblooded"), issues.pureblooded.id);
});

test("pushup", () => {
  expectResult(countIssues("puSHup"), issues.pushup.id);
});

test("ragdoll", () => {
  expectResult(countIssues("ragDOLL"), issues.ragdoll.id);
});

test("rag-tag", () => {
  expectResult(countIssues("rag-TAG"), issues.rag_tag.id);
});

test("railgun", () => {
  expectResult(countIssues("RAILgun"), issues.railgun.id);
});

test("rear view mirror", () => {
  expectResult(countIssues("REAR view mirror"), issues.rear_view_mirror.id);
}); 

test("rear-view mirror", () => {
  expectResult(countIssues("REAR-view mirror"), issues.rear_view_mirror2.id);
});

test("re-absorb", () => {
  expectResult(countIssues("re-aBsorB"), issues.re_absorb.id);
});

test("re-categorize", () => {
  expectResult(countIssues("re-categorIZE"), issues.re_categorize.id);
}); 

test("re-enact", () => {
  expectResult(countIssues("RE-enact"), issues.re_enact.id);
});

test("re-evaluate", () => {
  expectResult(countIssues("rE-eVaLuate"), issues.re_evaluate.id);
});

test("re-examine", () => {
  expectResult(countIssues("rE-eXaMiNe"), issues.re_examine.id);
});

test("red faced", () => {
  expectResult(countIssues("RED faced"), issues.red_faced.id);
});

test("ribcage", () => {
  expectResult(countIssues("ribcage"), issues.ribcage.id);
});

test("r.i.p", () => {
  expectResult(countIssues("r.i.P"), issues.rip.id);
});

test("r.i.p.", () => {
  expectResult(countIssues("R.i.P."), issues.rip.id);
});

test("rip doesn't flag R.I.P.", () => {
  expectNoResult(countIssues("Rip it"));
});

test("risque", () => {
  expectResult(countIssues("RISque"), issues.risque.id);
});

test("river bank", () => {
  expectResult(countIssues("river BANK"), issues.river_bank.id);
});

test("river-bank", () => {
  expectResult(countIssues("RIVER-bank"), issues.river_bank2.id);
});

test("role play", () => {
  expectResult(countIssues("rOle PlaY"), issues.role_play.id);
});

test("roleplay", () => {
  expectResult(countIssues("rOlePlaY"), issues.roleplay.id);
});

test("rough and tumble", () => {
  expectResult(countIssues("ROUGH and TUMBLE"), issues.rough_and_tumble.id);
});

test("round robin", () => {
  expectResult(countIssues("ROUND robin"), issues.round_robin.id);
});

test("rundown", () => {
  expectResult(countIssues("RUNdown"), issues.rundown.id);
});

test("run-down", () => {
  expectResult(countIssues("run-DOWN"), issues.run_down.id);
});

test("run down", () => {
  expectResult(countIssues("RUN DoWn"), issues.run_down2.id);
});

test("run in", () => {
  expectResult(countIssues("RUN in"), issues.run_in.id);
});

test("run in: respects word boundaries", () => {
  expectNoResult(countIssues("run into"));
});

test("run-in", () => {
  expectResult(countIssues("run-IN"), issues.run_in2.id);
});

test("saute", () => {
  expectResult(countIssues("sAuTe"), issues.saute.id);
});

test("saw-like", () => {
  expectResult(countIssues("sAW-like"), issues.saw_like.id);
});

test("seatbelt", () => {
  expectResult(countIssues("SEATbelt"), issues.seatbelt.id);
});

test("sea water", () => {
  expectResult(countIssues("sEA water"), issues.sea_water.id);
});

test("second guess", () => {
  expectResult(countIssues("second GUESs"), issues.second_guess.id);
});

test("second-hand", () => {
  expectResult(countIssues("second-HAND"), issues.second_hand.id);
});

test("self expression", () => {
  expectResult(countIssues("SELF expression"), issues.self_expression.id);
});

test("semi-circle", () => {
  expectResult(countIssues("SEMI-circle"), issues.semi_circle.id);
});

test("semi-translucent", () => {
  expectResult(countIssues("SEMI-translucent"), issues.semi_translucent.id);
});
 
test("semi-transparent", () => {
  expectResult(countIssues("SEMI-transparent"), issues.semi_transparent.id);
});

test("semi-truck", () => {
  expectResult(countIssues("SEMI-truck"), issues.semi_truck2.id);
});

test("semi truck", () => {
  expectResult(countIssues("semi TRUCK"), issues.semi_truck.id);
});

test("semi-truck", () => {
  expectResult(countIssues("SEMI-truck"), issues.semi_truck2.id);
});

test("shapeshift", () => {
  expectResult(countIssues("SHapeSHIft"), issues.shapeshift.id);
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

test("short-sighted", () => {
  expectResult(countIssues("SHORT-sighted"), issues.short_sighted.id);
});

test("shuteye", () => {
  expectResult(countIssues("shutEYE"), issues.shuteye.id);
});

test("side by side", () => {
  expectResult(countIssues("side by SIDE"), issues.side_by_side.id);
});

test("side-by-side", () => {
  expectResult(countIssues("side-BY-side"), issues.side_by_side2.id);
});

test("signalling", () => {
  expectResult(countIssues("SIGNAlling"), issues.signalling.id);
});

test("silk-like", () => {
  expectResult(countIssues("silk-LIKE"), issues.silk_like.id);
});

test("simple-minded", () => {
  expectResult(countIssues("simple-MINDED"), issues.simple_minded.id);
});

test("single-file", () => {
  expectResult(countIssues("single-FILE"), issues.single_file.id);
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

test("slayed", () => {
  expectResult(countIssues("SLaYed"), issues.slayed.id);
});

test("slip-up", () => {
  expectResult(countIssues("SLIP-up"), issues.slip_up.id);
});

test("smack dab", () => {
  expectResult(countIssues("SMACK dab"), issues.smack_dab.id);
});

test("smokey", () => {
  expectResult(countIssues("SMOkey"), issues.smokey.id);
});

test("smoulder", () => {
  expectResult(countIssues("SMOULder"), issues.smoulder.id);
});

test("soft-hearted", () => {
  expectResult(countIssues("SOFT-hearted"), issues.soft_hearted.id);
});

test("soft-serve", () => {
  expectResult(countIssues("sOFT-servE"), issues.soft_serve.id);
});

test("soulmate", () => {
  expectResult(countIssues("soulMATE"), issues.soul.id);
});

test("spine-like", () => {
  expectResult(countIssues("spine-LIKE"), issues.spine_like.id);
});

test("standalone", () => {
  expectResult(countIssues("STAnDALONE"), issues.standalone.id);
});

test("stand-out", () => {
  expectResult(countIssues("STand-OUT"), issues.stand_out.id);
});

test("storyline", () => {
  expectResult(countIssues("SToryLine"), issues.storyline.id);
});

test("straightlaced", () => {
  expectResult(countIssues("STRAIGHTlaced"), issues.strait.id);
});

test("sub-par", () => {
  expectResult(countIssues("SUB-par"), issues.sub_par.id);
});

test("sun-tan", () => {
  expectResult(countIssues("SUN-tan"), issues.sun_tan.id);
});

test("swiss cheese", () => {
  expectResult(countIssues("ate swiss cheese"), issues.swiss.id);
});

test("swiss cheese NOT case-insensitive", () => {
  expectNoResult(countIssues("ate SWISS CHEESE"));
});

test("t-shirt", () => {
  expectResult(countIssues("t-shirt"), issues.t_shirt.id);
});

test("t-shirt NOT case-insensitive", () => {
  expectNoResult(countIssues("T-shirt"));
});

test("tastebud", () => {
  expectResult(countIssues("tasteBUD"), issues.tastebud.id);
});

test("tell-tale", () => {
  expectResult(countIssues("TELL-tale"), issues.tell_tale.id);
});

test("test drive", () => {
  expectResult(countIssues("TEST drive"), issues.test_drive.id);
});

test("testdrive", () => {
  expectResult(countIssues("TESTdrive"), issues.testdrive.id);
});

test("testrun", () => {
  expectResult(countIssues("TESTrun"), issues.testrun.id);
});

test("test-run", () => {
  expectResult(countIssues("TEST-run"), issues.test_run.id);
});

test("tete-a-tete", () => {
  expectResult(countIssues("tete-a-TETE"), issues.tete_a_tete.id);
});

test("thrusted", () => {
  expectResult(countIssues("thRUSTed"), issues.thrusted.id);
});

test("timeframe", () => {
  expectResult(countIssues("timeFrame"), issues.timeframe.id);
});

test("timestamp", () => {
  expectResult(countIssues("timeStamp"), issues.timestamp.id);
});

test("time-worn", () => {
  expectResult(countIssues("time-WORN"), issues.time_worn.id);
});

test("tipoff", () => {
  expectResult(countIssues("TIPoff"), issues.tipoff.id);
});

test("top-secret", () => {
  expectResult(countIssues("TOP-secret"), issues.top_secret.id);
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

test("tried and true", () => {
  expectResult(countIssues("tried AND true"), issues.tried_and_true.id);
});

test("twenty-four-seven", () => {
  expectResult(countIssues("TWENTY-four-sEven"), issues.twentyfourseven.id);
});

test("twin tail", () => {
  expectResult(countIssues("TWIN tail"), issues.twin_tail.id);
});

test("twin-tail", () => {
  expectResult(countIssues("twin-TAIL"), issues.twin_tail2.id);
});

test("twintail", () => {
  expectResult(countIssues("twinTAIL"), issues.twintail.id);
});