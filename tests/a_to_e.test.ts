import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectContainsResult, expectNoResult } from './expectations';

test("above ground", () => {
  expectResult(countIssues("he was aBOVE ground"), issues.above_ground.id);
});

test("absentminded", () => {
  expectResult(countIssues("he was aBseNtMINDED"), issues.absentminded.id);
});

test("absentminded: respects word boundaries", () => {
  expectNoResult(countIssues("he was aBseNtMINDEDally"));
});

test("absent-mindedly", () => {
  expectResult(countIssues("he was aBseNt-MiNdedly"), issues.absent_mindedly.id);
});

test("absent-mindedness", () => {
  expectResult(countIssues("he was aBseNt-MINDEDness"), issues.absent_mindedness.id);
});

test("acknowledgement", () => {
  expectResult(countIssues("acKNowlEdgEment"), issues.ack.id);
});

test("accidently", () => {
  expectResult(countIssues("acciDentLy"), issues.accidently.id);
});

test("adult-like", () => {
  expectResult(countIssues("adult-LIKE"), issues.adult_like.id);
})

test("adverting", () => {
  expectResult(countIssues("adVERting"), issues.adverting.id);
})

test("after-effect", () => {
  expectResult(countIssues("after-EFFECT"), issues.after_effect.id);
})

test("aircon", () => {
  expectResult(countIssues("AirCon"), issues.aircon.id);
});

test("air tight", () => {
  expectResult(countIssues("AIR tight"), issues.air_tight.id);
});

test("air-tight", () => {
  expectResult(countIssues("AIR-tight"), issues.air_tight2.id);
});

test("all out", () => {
  expectResult(countIssues("ALL out"), issues.all_out.id);
});

test("all out: respects word boundaries", () => {
  expectNoResult(countIssues("CALL out to him"));
  expectNoResult(countIssues("ALL outside the house"));
});

test("all-out", () => {
  expectResult(countIssues("ALL-out"), issues.all_out2.id);
});

test("all-out: respects word boundaries", () => {
  expectNoResult(countIssues("ALL-outside"));
  expectNoResult(countIssues("CALL-out post"));
});

test("alright", () => {
  expectResult(countIssues("ALright"), issues.alright.id);
});

test("ambiance", () => {
  expectResult(countIssues("AMBiance"), issues.ambiance.id);
});

test("ambiant", () => {
  expectResult(countIssues("AMBiant"), issues.ambiant.id);
});

test("animal-like", () => {
  expectResult(countIssues("animal-LIKE"), issues.animal_like.id);
});

test("anti-", () => {
  expectResult(countIssues("ANti-dote"), issues.anti_hyphen.id);
});

test("anti-: respects word boundaries", () => {
  expectNoResult(countIssues("MANti-s"));
});

test("any time soon-", () => {
  expectResult(countIssues("ANY time SOON"), issues.any_time_soon.id);
});

test("arm-in-arm", () => {
  expectResult(countIssues("aRM-in-ARM"), issues.arm_in_arm.id);
});

test("apologise", () => {
  expectResult(countIssues("APOLOgise"), issues.apologise.id);
});

test("apologising", () => {
  expectResult(countIssues("APOLOgising"), issues.apologising.id);
});

test("auto-pilot", () => {
  expectResult(countIssues("Auto-PiloT"), issues.auto_pilot.id);
});

test("back yard", () => {
  expectResult(countIssues("BACK yard"), issues.back_yard.id);
});

test("bad-mouth", () => {
  expectResult(countIssues("BAD mouth"), issues.bad_mouth.id);
});

test("badmouth", () => {
  expectResult(countIssues("BADmouth"), issues.badmouth.id);
});

test("back-and-forth", () => {
  expectResult(countIssues("BAck-AND-forth"), issues.back_and_forth.id);
});

test("back and forth", () => {
  expectResult(countIssues("BAck AND forth"), issues.back_and_forth2.id);
});

test("back-breaking", () => {
  expectResult(countIssues("BAck-BREAking"), issues.back_breaking.id);
});

test("back to back", () => {
  expectResult(countIssues("BAck to BACK"), issues.back_to_back.id);
});

test("backup", () => {
  expectResult(countIssues("BAckUP"), issues.backup.id);
});

test("back up", () => {
  expectResult(countIssues("BACK up"), issues.back_up.id);
});

test("back up: respects word boundaries", () => {
  expectNoResult(countIssues("BACK upon"));
  expectNoResult(countIssues("reBACK up"));
});

test("back-up", () => {
  expectResult(countIssues("back-UP"), issues.back_up2.id);
});

test("barebones", () => {
  expectResult(countIssues("bareBONES"), issues.barebones.id);
});

test("bare bones", () => {
  expectResult(countIssues("bare BONES"), issues.bare_bones.id);
});

test("bath house", () => {
  expectResult(countIssues("the BATH house is big"), issues.bathhouse.id);
});

test("bed time", () => {
  expectResult(countIssues("bed TIME"), issues.bed_time.id);
});

test("best-seller", () => {
  expectResult(countIssues("best-SELLER"), issues.best_seller.id);
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

test("blood curdling", () => {
  expectResult(countIssues("he was blOoD CurDling"), issues.blood_curdling2.id);
});

test("blood-red", () => {
  expectResult(countIssues("he was blOoD-reD"), issues.blood_red.id);
});

test("blood red", () => {
  expectResult(countIssues("he was blOoD reD"), issues.blood_red2.id);
}); 

test("blood stain", () => {
  expectResult(countIssues("BlOOD stain"), issues.blood_stain.id);
});

test("blood-stain", () => {
  expectResult(countIssues("BlOOD-stain"), issues.blood_stain2.id);
});

test("blood-sucker", () => {
  expectResult(countIssues("he was BlOod-SUcKer"), issues.blood_sucker.id);
});

test("blood-sucker", () => {
  expectResult(countIssues("he was BlOod-SUcKer"), issues.blood_sucker.id);
});

test("blood-sucking", () => {
  expectResult(countIssues("he was BlOod-SUcKing"), issues.blood_sucking.id);
});

test("bow string", () => {
  expectResult(countIssues("BOw string"), issues.bow_string.id);
});

test("braindead", () => {
  expectResult(countIssues("BRAINdead"), issues.braindead.id);
});

test("brain dead", () => {
  expectResult(countIssues("BRAIN dead"), issues.brain_dead.id);
});

test("breakdancing", () => {
  expectResult(countIssues("BREAKdancing"), issues.breakdancing.id);
});

test("broadminded", () => {
  expectResult(countIssues("BROADminded"), issues.broadminded.id);
});

test("buildup", () => {
  expectResult(countIssues("buiLd-Up"), issues.build_up.id);
});

test("bullseye", () => {
  expectResult(countIssues("BULLSeye"), issues.bullseye.id);
});

test("bull's eye", () => {
  expectResult(countIssues("bull’s EYE"), issues.bulls_eye.id);
});

test("business-like", () => {
  expectResult(countIssues("business-LIKE"), issues.business_like.id);
});

test("bye bye", () => {
  expectResult(countIssues("bye BYE"), issues.bye_bye.id);
});

test("bye, bye", () => {
  expectResult(countIssues("bye, BYE"), issues.bye_bye2.id);
});

test("cafe", () => {
  expectResult(countIssues("trendy cafe there"), issues.cafe.id);
});

test("cafe respects word boundaries", () => {
  expectNoResult(countIssues("nescafe coffee"));
});

test("canape", () => {
  expectResult(countIssues("CAnapE"), issues.canape.id);
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

test("candle holder", () => {
  expectResult(countIssues("candle HOLDER"), issues.candle_holder.id);
});

test("canons", () => {
  expectResult(countIssues("CAnons"), issues.canons.id);
});

test("catch phrase", () => {
  expectResult(countIssues("caTCH phrase"), issues.catch_phrase.id);
});

test("catch-phrase", () => {
  expectResult(countIssues("caTCH-phrase"), issues.catch_phrase2.id);
});

test("cat-like", () => {
  expectResult(countIssues("cat-LIKE"), issues.cat_like.id);
});

test("centre", () => {
  expectResult(countIssues("CEntRe"), issues.centre.id);
});

test("chainmail", () => {
  expectResult(countIssues("CHAINmail"), issues.chainmail.id);
});

test("check-up", () => {
  expectResult(countIssues("check-UP"), issues.check_up.id);
});

test("child-like", () => {
  expectResult(countIssues("child-LIKE"), issues.child_like.id);
});

test("chit-chat", () => {
  expectResult(countIssues("CHIT-chat"), issues.chit_chat.id);
});

test("chit chat", () => {
  expectResult(countIssues("CHIT chat"), issues.chit_chat2.id);
});

test("chock full", () => {
  expectResult(countIssues("CHOCK full"), issues.chock_full.id);
});

test("chokehold", () => {
  expectResult(countIssues("CHOKEhold"), issues.chokehold.id);
});

test("city state", () => {
  expectResult(countIssues("CITY state"), issues.city_state.id);
});

test("clean-up", () => {
  expectResult(countIssues("Clean-UP"), issues.clean_up.id);
});

test("clear-headed", () => {
  expectResult(countIssues("Clear-HEAded"), issues.clear_headed.id);
});

test("cliche", () => {
  expectResult(countIssues("clicHE"), issues.cliche.id);
});

test("cliff hanger", () => {
  expectResult(countIssues("CLIFF hanger"), issues.cliff_hanger.id);
});

test("cliffhanger", () => {
  expectResult(countIssues("CLIFFhanger"), issues.cliffhanger.id);
});

test("climatic", () => {
  expectResult(countIssues("CLImatic"), issues.climatic.id);
});

test("closeup", () => {
  expectResult(countIssues("xd cLOseUp xd"), issues.closeup.id);
});

test("cold-hearted", () => {
  expectResult(countIssues("colD-hearTED"), issues.cold_hearted.id);
});

test("collar bone", () => {
  expectResult(countIssues("colLAR bone"), issues.collar_bone.id);
});

test("colour", () => {
  expectResult(countIssues("colOurfuL"), issues.colour.id);
});

test("commander-in-chief", () => {
  expectResult(countIssues("commander-IN-chief"), issues.commander_in_chief.id);
});

test("comprised of", () => {
  expectResult(countIssues("compriSed OF"), issues.comprised_of.id);
});

test("concensus", () => {
  expectResult(countIssues("ConCensus"), issues.concensus.id);
});

test("cool-headed", () => {
  expectResult(countIssues("COOl-headed"), issues.cool_headed.id);
});

test("counter attack", () => {
  expectResult(countIssues("counter ATTACK"), issues.counter_attack.id);
});

test("counter invasion", () => {
  expectResult(countIssues("counter INVASION"), issues.counter_invasion.id);
});

test("counter-offensive", () => {
  expectResult(countIssues("counter-OFFENSIVE"), issues.counter_offensive.id);
});

test("coup d'etat", () => {
  expectResult(countIssues("cOUp d’Etat"), issues.coup.id);
});

test("coup de grace", () => {
  expectResult(countIssues("coup de GRACE"), issues.coup_de_grace.id);
});

test("co-exist", () => {
  expectResult(countIssues("xd co-ExiSt xd"), issues.co_exist.id);
});

test("co-worker", () => {
  expectResult(countIssues("co-WORker"), issues.co_worker.id);
});

test("creeped", () => {
  expectResult(countIssues("crEEpeD"), issues.creeped.id);
});

test("criss-cross", () => {
  expectResult(countIssues("crisS-CROSS"), issues.criss_cross.id);
});

test("crossdress", () => {
  expectResult(countIssues("cRosSdReSSing"), issues.crossdress.id);
}); 

test("cross-fire", () => {
  expectResult(countIssues("cRosS-FirE"), issues.cross_fire.id);
});

test("crossfire", () => {
  expectResult(countIssues("cRosSFirE"), issues.crossfire.id);
});

test("cross-hair", () => {
  expectResult(countIssues("cROSS-hair"), issues.cross_hair.id);
});

test("cross hair", () => {
  expectResult(countIssues("cROSS hair"), issues.cross_hair2.id);
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

test("curtsey", () => {
  expectResult(countIssues("CURTsey"), issues.curtsey.id);
});

test("cut and dried", () => {
  expectResult(countIssues("CUT and dried"), issues.cut_and_dried.id);
});

test("cut and dry", () => {
  expectResult(countIssues("CUT and DRY"), issues.cut_and_dry.id);
});

test("cut-and-dry", () => {
  expectResult(countIssues("CUT-and-DRY"), issues.cut_and_dry2.id);
});

test("dagger-like", () => {
  expectResult(countIssues("DAGGER-like"), issues.dagger_like.id);
});

test("damndest", () => {
  expectResult(countIssues("dAMNdest"), issues.damndest.id);
});

test("day-LONG", () => {
  expectResult(countIssues("DAY-long"), issues.day_long.id);
});

test("day to day life", () => {
  expectResult(countIssues("DAY to day LIFE"), issues.day_to_day_life.id);
});

test("dead on", () => {
  expectResult(countIssues("DEAD on"), issues.dead_on.id);
});

test("deadset", () => {
  expectResult(countIssues("dEaDsEt"), issues.deadset.id);
});

test("dead-set", () => {
  expectResult(countIssues("dEaD-sEt"), issues.dead_set.id);
});

test("deal breaker", () => {
  expectResult(countIssues("deaL bReaKer"), issues.deal_breaker.id);
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

test("decision making", () => {
  expectResult(countIssues("DEcisION making"), issues.decision_making.id);
});

test("defence", () => {
  expectResult(countIssues("deFence"), issues.defence.id);
});

test("deja vu", () => {
  expectResult(countIssues("DEJa vU"), issues.dejavu.id);
});

test("descendent", () => {
  expectResult(countIssues("deSCENdent"), issues.descendent.id);
});

test("DINNER time", () => {
  expectResult(countIssues("DINNER time"), issues.dinner_time.id);
});

test("dieing", () => {
  expectResult(countIssues("DIeing"), issues.dieing.id);
});

test("dilly dally", () => {
  expectResult(countIssues("DILLY dally"), issues.dilly_dally.id);
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

test("dream world", () => {
  expectResult(countIssues("dream WORLD"), issues.dream_world.id);
});

test("dream-world", () => {
  expectResult(countIssues("dream-WORLD"), issues.dream_world2.id);
});

test("drop-out", () => {
  expectResult(countIssues("Drop-Out"), issues.drop_out.id);
});

test("drier and dryer", () => {
  const result = countIssues("drier DRYeR driER DRier drYer");
  expectContainsResult(result, issues.drier.id, 3);
  expectContainsResult(result, issues.dryer.id, 2);
});

test("dust-up", () => {
  expectResult(countIssues("DUsT-Up"), issues.dust_up.id);
});

test("duty-bound", () => {
  expectResult(countIssues("DUtY-BOuNd"), issues.duty_bound.id);
});

test("ear-splitting", () => {
  expectResult(countIssues("EAR-splitting"), issues.ear_splitting.id);
});

test("earth-shaking", () => {
  expectResult(countIssues("EARTH-shaking"), issues.earth_shaking.id);
});

test("elicit", () => {
  expectResult(countIssues("ELIcit"), issues.elicit.id);
});

test("emphasise", () => {
  expectResult(countIssues("emphaSise"), issues.emphasise.id);
});

test("emphasising", () => {
  expectResult(countIssues("emphaSisING"), issues.emphasising.id);
});

test("enquire", () => {
  expectResult(countIssues("ENQuire"), issues.enquire.id);
}); 

test("enroute", () => {
  expectResult(countIssues("EnRoute"), issues.enroute.id);
});

test("entree", () => {
  expectResult(countIssues("EntrEe"), issues.entree.id);
}); 

test("ever-so", () => {
  expectResult(countIssues("ever-SO"), issues.ever_so.id);
});

test("extra-", () => {
  expectResult(countIssues("EXtra-large"), issues.extra_hyphen.id);
});

test("extra-: respects word boundaries", () => {
  expectNoResult(countIssues("sEXtra-large"));
});

test("eyepatch", () => {
  expectResult(countIssues("eyePATCH"), issues.eyepatch.id);
});

test("eye-patch", () => {
  expectResult(countIssues("eye-PATCH"), issues.eye_patch.id);
});

test("eye-to-eye", () => {
  expectResult(countIssues("eye-TO-eye"), issues.eye_to_eye.id);
});

test("eye witness", () => {
  expectResult(countIssues("eye WITNESS"), issues.eye_witness.id);
});

test("eye-witness", () => {
  expectResult(countIssues("EYE-witness"), issues.eye_witness2.id);
});
