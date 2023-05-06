import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectNoResult, expectContainsResult } from './expectations';

test("face to face", () => {
  expectResult(countIssues("face TO face"), issues.face_to_face.id);
});

test("faint-hearted", () => {
  expectResult(countIssues("faint-HEARTed"), issues.faint_hearted.id);
});

test("farm work", () => {
  expectResult(countIssues("FARM work"), issues.farm_work.id);
});

test("farsight", () => {
  expectResult(countIssues("faRsiGHt"), issues.farsight.id);
});

test("fast-food", () => {
  expectResult(countIssues("fast-FOOD"), issues.fast_food.id);
});

test("fast food", () => {
  expectResult(countIssues("fast FOOD"), issues.fast_food2.id);
});

test("fed-up", () => {
  expectResult(countIssues("fed-UP"), issues.fed_up.id);
});

test("fiance", () => {
  expectResult(countIssues("my fiance and I"), issues.fiance.id);
});

test("fiance respects word boundaries", () => {
  expectNoResult(countIssues("shout your defiance and"));
});

test("fiancee", () => {
  expectResult(countIssues("my fiancee and I"), issues.fiancee.id);
});

test("filet", () => {
  expectResult(countIssues("FiLeT"), issues.filet.id);
});

test("fine tune", () => {
  expectResult(countIssues("fine TUNE"), issues.fine_tune.id);
});

test("fine tuning", () => {
  expectResult(countIssues("FINE tuning"), issues.fine_tuning.id);
});

test("finger-like", () => {
  expectResult(countIssues("finger-LIKE"), issues.finger_like.id);
});

test("first-aid", () => {
  expectResult(countIssues("FIRST-aid"), issues.first_aid.id);
});

test("first-hand", () => {
  expectResult(countIssues("FIRST-hand"), issues.first_hand.id);
});

test("first hand", () => {
  expectResult(countIssues("FIRST hand"), issues.first_hand2.id);
});

test("fist-fight", () => {
  expectResult(countIssues("FIST-fight"), issues.fist_fight.id);
});

test("fist fight", () => {
  expectResult(countIssues("fist FIGHT"), issues.fist_fight2.id);
});

test("fist full", () => {
  expectResult(countIssues("FIST full"), issues.fist_full.id);
});

test("flipside", () => {
  expectResult(countIssues("on the FLIPside,"), issues.flipside.id);
});

test("flack", () => {
  expectResult(countIssues("FLaCk"), issues.flack.id);
});

test("followup", () => {
  expectResult(countIssues("followUP"), issues.followup.id);
});

test("footsoldier", () => {
  expectResult(countIssues("FOOTsoldier"), issues.footsoldier.id);
});

test("forcefield", () => {
  expectResult(countIssues("forCeFielD"), issues.forcefield.id);
});

test("forego", () => {
  expectResult(countIssues("foREgo"), issues.forego.id);
});

test("forego: detects foregone", () => {
  expectResult(countIssues("FOReGone"), issues.forego.id);
});

test("forewent", () => {
  expectResult(countIssues("FOREwent"), issues.forewent.id);
});

test("form-fitting", () => {
  expectResult(countIssues("FORM-fitting"), issues.form_fitting.id);
});

test("forsaw", () => {
  expectResult(countIssues("ForSaw"), issues.forsaw.id);
});

test("forsee", () => {
  expectResult(countIssues("foRsEE"), issues.forsee.id);
});

test("foul-mouthed", () => {
  expectResult(countIssues("foul-MOUTHED"), issues.foul_mouthed.id);
});

test("free-fall", () => {
  expectResult(countIssues("FREE-fall"), issues.free_fall.id);
});

test("free fall", () => {
  expectResult(countIssues("FREE fall"), issues.free_fall2.id);
});

test("free flowing", () => {
  expectResult(countIssues("free FLOWING"), issues.free_flowing.id);
});

test("free reign", () => {
  expectResult(countIssues("FREE reign"), issues.free_reign.id);
});

test("free spirited", () => {
  expectResult(countIssues("FREE spirited"), issues.free_spirited.id);
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

test("fully-fledged", () => {
  expectNoResult(countIssues("FULLY-fledged"));
});

test("g force", () => {
  expectResult(countIssues("g force"), issues.g_force.id);
});

test("g force: respects word breaks", () => {
  expectNoResult(countIssues("overwhelming force"));
});

test("game-changer", () => {
  expectResult(countIssues("game-CHANGER"), issues.game_changer.id);
});

test("gamechanger", () => {
  expectResult(countIssues("gameCHANGER"), issues.gamechanger.id);
});

test("gameplan", () => {
  expectResult(countIssues("gamePLAN"), issues.gameplan.id);
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

test("glovebox", () => {
  expectResult(countIssues("gloveBOX"), issues.glovebox.id);
});

test("god-like", () => {
  expectResult(countIssues("GOD-like"), issues.god_like.id);
});

test("good will", () => {
  expectResult(countIssues("GOOD wilL hunting"), issues.goodwill.id);
});

test("good-will", () => {
  expectResult(countIssues("GOOD-wilL hunting"), issues.good_will.id);
});

test("goosebump", () => {
  expectResult(countIssues("GOOseBump"), issues.goosebump.id);
});

test("great grand", () => {
  expectResult(countIssues("great GRAND"), issues.great_grand.id);
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

test("grownup", () => {
  expectResult(countIssues("GROWNup"), issues.grownup.id);
});

test("guerrila", () => {
  expectResult(countIssues("GUERrila"), issues.guerrila.id);
});

test("guerilla", () => {
  expectResult(countIssues("GUeRilla"), issues.guerilla.id);
});

test("gun powder", () => {
  expectResult(countIssues("GUn Powder"), issues.gun_powder.id);
});

test("haha", () => {
  expectResult(countIssues("hahah! He laughed"), issues.laugh1.id);
});

test("halfmoon", () => {
  expectResult(countIssues("halFMOON"), issues.halfmoon.id);
});

test("half moon", () => {
  expectResult(countIssues("half MOON"), issues.half_moon.id);
}); 

test("halftruth", () => {
  expectResult(countIssues("halFTRUTH"), issues.halftruth.id);
});

test("half truth", () => {
  expectResult(countIssues("halF TRUTH"), issues.half_truth.id);
});

test("halfwit", () => {
  expectResult(countIssues("halFWIT"), issues.halfwit.id);
});

test("hand-in-hand", () => {
  expectResult(countIssues("HanD-in-HAND"), issues.hand_in_hand.id);
});

test("hand-like", () => {
  expectResult(countIssues("HanD-LiKe"), issues.hand_like.id);
});

test("hand-pick", () => {
  expectResult(countIssues("HanD-picK"), issues.hand_pick.id);
});

test("hard and fast", () => {
  expectResult(countIssues("Hard AND fast"), issues.hard_and_fast.id);
});

test("hard pressed", () => {
  expectResult(countIssues("hard PrEsSed"), issues.hard_pressed.id);
});

test("hardpressed", () => {
  expectResult(countIssues("hardPrEsSed"), issues.hardpressed.id);
});

test("hard-working", () => {
  expectResult(countIssues("HaRd-WorKinG"), issues.hard_working.id);
});

test("head on", () => {
  expectResult(countIssues("head ON"), issues.head_on.id);
});

test("head on: respects word boundaries", () => {
  expectNoResult(countIssues("ahead ON"));
  expectNoResult(countIssues("head Onto"));
});

test("head scratcher", () => {
  expectResult(countIssues("HEAD scRATcher"), issues.head_scratcher.id);
});

test("heehee", () => {
  expectResult(countIssues("heehee! He giggled"), issues.laugh2.id);
});

test("her majesty", () => {
  expectResult(countIssues("her majesty"), issues.her_majesty1.id);
});

test("her Majesty", () => {
  expectResult(countIssues("her Majesty"), issues.her_majesty2.id);
}); 

test("Her majesty", () => {
  expectResult(countIssues("Her majesty"), issues.her_majesty3.id);
});

test("heroin", () => {
  expectResult(countIssues("heroin addict"), issues.heroin.id);
});

test("high five", () => {
  expectResult(countIssues("HIGH five"), issues.high_five.id);
});

test("high-five", () => {
  expectResult(countIssues("HIGH-five"), issues.high_five2.id);
});

test("high-performance", () => {
  expectResult(countIssues("HIGH-performance"), issues.high_performance.id);
});

test("higher ups", () => {
  expectResult(countIssues("HIGHER ups"), issues.higher_ups.id);
});

test("high-schooler", () => {
  expectResult(countIssues("high-SCHOOLER"), issues.high_schooler.id);
});

test("his majesty", () => {
  expectResult(countIssues("his majesty"), issues.his_majesty1.id);
});

test("his Majesty", () => {
  expectResult(countIssues("his Majesty"), issues.his_majesty2.id);
}); 

test("His majesty", () => {
  expectResult(countIssues("His majesty"), issues.his_majesty3.id);
});

test("hitman", () => {
  expectResult(countIssues("hitMAN"), issues.hitman.id);
});

test("home-made", () => {
  expectResult(countIssues("home-MADE"), issues.home_made.id);
});

test("home sick", () => {
  expectResult(countIssues("home SIcK"), issues.home_sick.id);
});

test("home-sick", () => {
  expectResult(countIssues("hOme-SIcK"), issues.home_sick2.id);
});

test("human-like", () => {
  expectResult(countIssues("HUMAN-like"), issues.human_like.id);
});

test("hurrah", () => {
  expectResult(countIssues("huRRAH"), issues.hurrah.id);
});

test("hurray", () => {
  expectResult(countIssues("HurRAY"), issues.hurray.id);
});

test("ice box", () => {
  expectResult(countIssues("ICE box"), issues.ice_box.id);
});

test("ice cream cone", () => {
  expectResult(countIssues("ice creAm CONE"), issues.ice_cream_cone.id);
});

test("icepack", () => {
  expectResult(countIssues("ICEpack"), issues.icepack.id);
});

test("illicit", () => {
  expectResult(countIssues("ILLIcit"), issues.illicit.id);
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

test("jungle-like", () => {
  expectResult(countIssues("jungle-LIKE"), issues.jungle_like.id);
});


