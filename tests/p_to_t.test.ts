import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectContainsResult, expectNoResult } from './expectations';

test("pain-killer", () => {
  expectResult(countIssues("PAIN-killer"), issues.pain_killer.id);
});

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

test("plead", () => {
  expectResult(countIssues("PleAD"), issues.plead.id);
});

test("plead: respects word boundaries", () => {
  expectNoResult(countIssues("PLEAded"));
  expectNoResult(countIssues("uNPLead"));
});


test("plough", () => {
  expectResult(countIssues("PloUghing"), issues.plough.id);
});

test("point blank", () => {
  expectResult(countIssues("Point BLANK"), issues.point_blank.id);
});

test("post-haste", () => {
  expectContainsResult(countIssues("POST-haste"), issues.post_haste.id, 1);
});

test("post-haste: respects word boundaries", () => {
  expectNoResult(countIssues("UNPOST-haste"));
});

test("post-", () => {
  expectContainsResult(countIssues("POST-haste"), issues.post_hyphen.id, 1);
});

test("post-: respects word boundaries", () => {
  expectNoResult(countIssues("UNPOST-haste"));
});

test("pour over", () => {
  expectResult(countIssues("POUR OVer"), issues.pour_over.id);
});

test("power-walk", () => {
  expectResult(countIssues("POWER-walk"), issues.power_walk.id);
});

test("pre-", () => {
  expectResult(countIssues("PRE-haste"), issues.pre_hyphen.id);
});

test("pre-: respects word boundaries", () => {
  expectNoResult(countIssues("UNPRE-haste"));
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

test("pure-hearted", () => {
  expectResult(countIssues("PURE-hearted"), issues.pure_hearted.id);
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

test("rain drop", () => {
  expectResult(countIssues("rain DROP"), issues.rain_drop.id);
});

test("rear view mirror", () => {
  expectResult(countIssues("REAR view mirror"), issues.rear_view_mirror.id);
}); 

test("rear-view mirror", () => {
  expectResult(countIssues("REAR-view mirror"), issues.rear_view_mirror2.id);
});

test("reign in", () => {
  expectResult(countIssues("reign IN"), issues.reign_in.id);
});

test("reigned in", () => {
  expectResult(countIssues("reigned IN"), issues.reigned_in.id);
});

test("reigning in", () => {
  expectResult(countIssues("reigning IN"), issues.reigning_in.id);
});

test("re-", () => {
  expectResult(countIssues("RE-haste"), issues.re_hyphen.id);
});

test("re-: respects word boundaries", () => {
  expectNoResult(countIssues("UNRE-haste"));
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

test("re-write", () => {
  expectResult(countIssues("rE-wrIte"), issues.re_write.id);
});

test("red faced", () => {
  expectResult(countIssues("RED faced"), issues.red_faced.id);
});

test("revery", () => {
  expectResult(countIssues("revERY"), issues.revery.id);
});

test("ribcage", () => {
  expectResult(countIssues("ribcage"), issues.ribcage.id);
});

test("right hand man", () => {
  expectResult(countIssues("RIGHT hand man"), issues.right_hand_man.id);
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

test("saddle bag", () => {
  expectResult(countIssues("SADDLE bag"), issues.saddle_bag.id);
});

test("saute", () => {
  expectResult(countIssues("sAuTe"), issues.saute.id);
});

test("saw-like", () => {
  expectResult(countIssues("sAW-like"), issues.saw_like.id);
});

test("scot free", () => {
  expectResult(countIssues("SCOT free"), issues.scot_free.id);
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

test("second in command", () => {
  expectResult(countIssues("second IN command"), issues.second_in_command.id);
});

test("self expression", () => {
  expectResult(countIssues("SELF expression"), issues.self_expression.id);
});

test("self pity", () => {
  expectResult(countIssues("SELF pity"), issues.self_pity.id);
});

test("semi-", () => {
  expectResult(countIssues("SEMI-haste"), issues.semi_hyphen.id);
});

test("semi-: respects word boundaries", () => {
  expectNoResult(countIssues("UNSEMI-haste"));
});

test("semi-circle", () => {
  expectResult(countIssues("SEMI-circle"), issues.semi_circle.id);
});

test("semi-conscious", () => {
  expectResult(countIssues("SEMI-conscious"), issues.semi_conscious.id);
});

test("semi-final", () => {
  expectResult(countIssues("SEMI-final"), issues.semi_final.id);
});

test("semi-final catches semi-finals", () => {
  expectResult(countIssues("SEMI-finalS"), issues.semi_final.id);
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

test("shakeup", () => {
  expectResult(countIssues("SHAKEup"), issues.shakeup.id);
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

test("shootout", () => {
  expectResult(countIssues("SHOOTout"), issues.shootout.id);
});

test("shoulder-to-shoulder", () => {
  expectResult(countIssues("SHOulder-TO-shoulder"), issues.shoulder_to_shoulder.id);
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

test("side-effect", () => {
  expectResult(countIssues("side-EFFECT"), issues.side_effect.id);
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

test("sky high", () => {
  expectResult(countIssues("SKY high"), issues.sky_high.id);
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

test("smokescreen", () => {
  expectResult(countIssues("SMOKEscreen"), issues.smokescreen.id);
});

test("smoke-screen", () => {
  expectResult(countIssues("SMOKE-screen"), issues.smoke_screen.id);
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

test("soul mate", () => {
  expectResult(countIssues("soul MATE"), issues.soul.id);
});

test("soundwave", () => {
  expectResult(countIssues("soundWAVE"), issues.soundwave.id);
});

test("south east", () => {
  expectResult(countIssues("SOUTH east"), issues.south_east.id);
});

test("south west", () => {
  expectResult(countIssues("SOUTH west"), issues.south_west.id);
})

test("space time", () => {
  expectResult(countIssues("space TIME"), issues.space_time.id);
});

test("spacetime", () => {
  expectResult(countIssues("spaceTIME"), issues.spacetime.id);
});

test("spilt", () => {
  expectResult(countIssues("spiLT"), issues.spilt.id);
});

test("spine-like", () => {
  expectResult(countIssues("spine-LIKE"), issues.spine_like.id);
});

test("split second", () => {
  expectResult(countIssues("SPLIT second"), issues.split_second1.id);
});

test("split-second", () => {
  expectResult(countIssues("SPLIT-second"), issues.split_second2.id);
});

test("spread eagle", () => {
  expectResult(countIssues("SPREAD eagle"), issues.spread_eagle.id);
});

test("standalone", () => {
  expectResult(countIssues("STAnDALONE"), issues.standalone.id);
});

test("stepping-stone", () => {
  expectResult(countIssues("STePPIng-STONE"), issues.stepping_stone.id);
});

test("stand-out", () => {
  expectResult(countIssues("STand-OUT"), issues.stand_out.id);
});

test("stock still", () => {
  expectResult(countIssues("STOCK still"), issues.stock_still.id);
});

test("stomach ache", () => {
  expectResult(countIssues("STOMACH ache"), issues.stomach_ache.id);
});

test("stone-like", () => {
  expectResult(countIssues("STONE-like"), issues.stone_like.id);
});

test("story line", () => {
  expectResult(countIssues("STory Line"), issues.story_line.id);
});

test("straight away", () => {
  expectResult(countIssues("STRAIGHT away"), issues.straight_away.id);
});

test("straightlaced", () => {
  expectResult(countIssues("STRAIGHTlaced"), issues.strait.id);
});

test("street light", () => {
  expectResult(countIssues("STREET light"), issues.street_light.id);
});

test("strong arm", () => {
  expectResult(countIssues("STRONG arm"), issues.strong_arm.id);
});

test("strong arm: respects word boundaries", () => {
  expectNoResult(countIssues("big STRONG arms"));
  expectNoResult(countIssues("unSTRONG arm"));
});

test("sub-par", () => {
  expectResult(countIssues("SUB-par"), issues.sub_par.id);
});

test("sub-zero", () => {
  expectResult(countIssues("SUB-zero"), issues.sub_zero.id);
});

test("sun-tan", () => {
  expectResult(countIssues("SUN-tan"), issues.sun_tan.id);
});

test("super duper", () => {
  expectResult(countIssues("SUPER duper"), issues.super_duper.id);
});

test("super-", () => {
  expectResult(countIssues("SUPER-haste"), issues.super_hyphen.id);
});

test("super-: respects word boundaries", () => {
  expectNoResult(countIssues("UNSUPER-haste"));
});

test("swiss cheese", () => {
  expectResult(countIssues("ate swiss cheese"), issues.swiss.id);
});

test("swiss cheese NOT case-insensitive", () => {
  expectNoResult(countIssues("ate SWISS CHEESE"));
});

test("swordfight", () => {
  expectResult(countIssues("swordFIGHT"), issues.swordfight.id);
});

test("t-shirt", () => {
  expectResult(countIssues("t-shirt"), issues.t_shirt.id);
});

test("t-shirt NOT case-insensitive", () => {
  expectNoResult(countIssues("T-shirt"));
});

test("tank-like", () => {
  expectResult(countIssues("tank-LIKE"), issues.tank_like.id);
});

test("tastebud", () => {
  expectResult(countIssues("tasteBUD"), issues.tastebud.id);
});

test("tax-payer", () => {
  expectResult(countIssues("tax-PAYER"), issues.tax_payer.id);
});

test("tax-paying", () => {
  expectResult(countIssues("tax-PAYING"), issues.tax_paying.id);
});

test("tear stain", () => {
  expectResult(countIssues("TEAR STain"), issues.tear_stain.id);
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

test("test fire", () => {
  expectResult(countIssues("TEST fire"), issues.test_fire.id);
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

test("the lead up", () => {
  expectResult(countIssues("THE lead up"), issues.lead_up.id);
});

test("the up and up", () => {
  expectResult(countIssues("THE UP and up"), issues.the_up_and_up.id);
});

test("three-fold", () => {
  expectResult(countIssues("THREE-fold"), issues.three_fold.id);
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

test("toe-to-toe", () => {
  expectResult(countIssues("TOE-to-TOE"), issues.toe_to_toe1.id);
});

test("toe to toe", () => {
  expectResult(countIssues("TOE to TOE"), issues.toe_to_toe2.id);
});

test("top-secret", () => {
  expectResult(countIssues("TOP-secret"), issues.top_secret.id);
});

test("touchy feely", () => {
  expectResult(countIssues("TOUCHy feely"), issues.touchy_feely.id);
});

test("tradeoff", () => {
  expectResult(countIssues("tradeOFF"), issues.tradeoff.id);
});

test("trash talk", () => {
  expectResult(countIssues("trash TALK"), issues.trash_talk.id);
});

test("trash-talk", () => {
  expectResult(countIssues("trash-TALK"), issues.trash_talk2.id);
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

test("two-fold", () => {
  expectResult(countIssues("TWO-fold"), issues.two_fold.id);
});

test("two on two", () => {
  expectResult(countIssues("TWO on TWO"), issues.two_on_two.id);
});
