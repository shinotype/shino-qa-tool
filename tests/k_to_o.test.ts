import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectNoResult, expectResult } from './expectations';

test("keychain", () => {
  expectResult(countIssues("KeYChain"), issues.keychain.id);
});

test("kickstart", () => {
  expectResult(countIssues("KiCKstArt"), issues.kickstart.id);
});

test("kind-hearted", () => {
  expectResult(countIssues("KinD-HeArTed"), issues.kind_hearted.id);
});

test("kind hearted", () => {
  expectResult(countIssues("KinD HeArTed"), issues.kind_hearted2.id);
});

test("knick-knack", () => {
  expectResult(countIssues("knick-KNACK"), issues.knick_knack.id);
});

test("knock-off", () => {
  expectResult(countIssues("knock-OFF"), issues.knock_off.id);
});

test("knowhow", () => {
  expectResult(countIssues("KNOWhow"), issues.knowhow.id);
});

test("laid", () => {
  expectResult(countIssues("laID"), issues.lie3.id);
});

test("laid: respects word boundaries", () => {
  expectNoResult(countIssues("PlaID"));
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

test("laying", () => {
  expectResult(countIssues("laYIng"), issues.lie2.id);
});

test("laying: respects word boundaries", () => {
  expectNoResult(countIssues("PlAYIng"));
});

test("lay man", () => {
  expectResult(countIssues("lay MAN"), issues.lay_man.id);
});

test("lay men", () => {
  expectResult(countIssues("lay MEN"), issues.lay_men.id);
});

test("lay people", () => {
  expectResult(countIssues("lay PEOPLE"), issues.lay_people.id);
});

test("lay person", () => {
  expectResult(countIssues("lay PERSON"), issues.lay_person.id);
});

test("lay woman", () => {
  expectResult(countIssues("lay WOMAN"), issues.lay_woman.id);
});

test("lay women", () => {
  expectResult(countIssues("lay WOMEN"), issues.lay_women.id);
});

test("learnt", () => {
  expectResult(countIssues("LEARnt"), issues.learnt.id);
});

test("lied", () => {
  expectResult(countIssues("LieD"), issues.lie1.id);
});

test("lied: respects word boundaries", () => {
  expectNoResult(countIssues("pLieD"));
});

test("lily white", () => {
  expectResult(countIssues("LILY white"), issues.lily_white.id);
});

test("lead", () => {
  expectResult(countIssues("He lead me away"), issues.lead.id);
});

test("lead: doesn't detect valid uses", () => {
  expectNoResult(countIssues("The lead is good, I have a lead, I could lead you there, I couldn’t lead you there, I would lead you there, I wouldn’t lead you there"));
  expectNoResult(countIssues("I should lead you there, I shouldn’t lead you there, I can lead you, I can’t lead you, I will lead, I won’t lead, I shall lead, I shan’t lead"));
  expectNoResult(countIssues("I might lead, I may lead, I did lead, I didn’t lead, to lead me on, I’ll lead you"));
});

test("let-down", () => {
  expectResult(countIssues("let-DOWN"), issues.let_down.id);
});

test("level-headed", () => {
  expectResult(countIssues("level-HEADED"), issues.level_headed.id);
});

test("life and death", () => {
  expectResult(countIssues("life AND death"), issues.life_and_death.id);
});

test("life-blood", () => {
  expectResult(countIssues("life-BLOOD"), issues.life_blood.id);
});

test("life form", () => {
  expectResult(countIssues("LIFE form"), issues.life_form.id);
});

test("lifeform", () => {
  expectResult(countIssues("LIFEform"), issues.lifeform.id);
});

test("life span", () => {
  expectResult(countIssues("life SPAN"), issues.life_span2.id);
});

test("life-span", () => {
  expectResult(countIssues("life-SPAN"), issues.life_span.id);
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

test("light-headed", () => {
  expectResult(countIssues("LIGHT-headed"), issues.light_headed2.id);
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

test("-like", () => {
  expectResult(countIssues("apple-liKE"), issues.like_hyphen.id);
});

test("-like: respects word boundaries", () => {
  expectNoResult(countIssues("apple-likeS"));
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

test("longshot", () => {
  expectResult(countIssues("loNGShoT"), issues.longshot.id);
});

test("long-shot", () => {
  expectResult(countIssues("loNG-ShoT"), issues.long_shot.id);
});

test("long-time", () => {
  expectResult(countIssues("loNG-time"), issues.long_time.id);
});

test("long time, no see", () => {
  expectResult(countIssues("LONG time, no SEE"), issues.long_time_no_see.id);
});

test("lookalike", () => {
  expectResult(countIssues("looKAlike"), issues.lookalike.id);
});

test("loveable", () => {
  expectResult(countIssues("loveABLE"), issues.loveable.id);
});

test("love-struck", () => {
  expectResult(countIssues("love-STRUCK"), issues.love_struck.id);
});

test("lunchbox", () => {
  expectResult(countIssues("lunchBOX"), issues.lunchbox.id);
});

test("lunch time", () => {
  expectResult(countIssues("lunch TIME"), issues.lunch_time.id);
});

test("make due", () => {
  expectResult(countIssues("MAKE due"), issues.make_due.id);
});

test("make-up", () => {
  expectResult(countIssues("MAKE-up"), issues.make_up.id);
});

test("manmade", () => {
  expectResult(countIssues("MANMade"), issues.manmade.id);
});

test("man power", () => {
  expectResult(countIssues("MAN power"), issues.man_power.id);
});

test("manpower", () => {
  expectResult(countIssues("MANpower"), issues.manpower.id);
});

test("map-maker", () => {
  expectResult(countIssues("MAP-maker"), issues.map_maker.id);
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

test("masterclass", () => {
  expectResult(countIssues("MASTERclass"), issues.masterclass.id);
});

test("match-up", () => {
  expectResult(countIssues("MATCH-up"), issues.match_up.id);
});

test("maze-like", () => {
  expectResult(countIssues("MAZE-like"), issues.maze_like.id);
});

test("meagre", () => {
  expectResult(countIssues("meAgrE"), issues.meagre.id);
});

test("mid-air", () => {
  expectResult(countIssues("mid-AIR"), issues.mid_air.id);
});

test("mid-day", () => {
  expectResult(countIssues("mid-DAY"), issues.mid_day.id);
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

test("midsentence", () => {
  expectResult(countIssues("mIDsEnTenCe"), issues.midsentence.id);
});

test("midtwenties", () => {
  expectResult(countIssues("midTWENties"), issues.midtwenties.id);
});

test("midthirties", () => {
  expectResult(countIssues("midtHIRtieS"), issues.midthirties.id);
});

test("midforties", () => {
  expectResult(countIssues("MIDforties"), issues.midforties.id);
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

test("mont blanc", () => {
  expectResult(countIssues("mont blanc"), issues.mont_blanc.id);
});

test("mont blanc: case sensitive", () => {
  expectNoResult(countIssues("Mont Blanc"));
});


test("month-long", () => {
  expectResult(countIssues("month-LONG"), issues.month_long.id);
});

test("mothership", () => {
  expectResult(countIssues("MOTHERship"), issues.mothership.id);
});

test("moustache", () => {
  expectResult(countIssues("MOUSTache"), issues.moustache.id);
});

test("multi-", () => {
  expectResult(countIssues("MULTI-minded"), issues.multi_hyphen.id);
});

test("multi-: respects word boundaries", () => {
  expectNoResult(countIssues("SMULTI-minded"));
});

test("multi-headed", () => {
  expectResult(countIssues("MULTI-headed"), issues.multi_headed.id);
});

test("My Lady", () => {
  expectResult(countIssues("My Lady, this is quite"), issues.my_lady.id);
});

test("My Lady: case sensitive", () => {
  expectNoResult(countIssues("My lady, this is quite"));
});

test("Milady", () => {
  expectResult(countIssues("Milady, this is quite"), issues.milady.id);
});

test("Milady: case sensitive", () => {
  expectNoResult(countIssues("milady, this is quite"));
});

test("My Lord", () => {
  expectResult(countIssues("My Lord, this is quite"), issues.my_lord.id);
});

test("My Lord: case sensitive", () => {
  expectNoResult(countIssues("My lord, this is quite"));
});

test("Milord", () => {
  expectResult(countIssues("Milord, this is quite"), issues.milord.id);
});

test("Milord: case sensitive", () => {
  expectNoResult(countIssues("milord, this is quite"));
});

test("naive", () => {
  expectResult(countIssues("naïvE"), issues.naive.id);
});

test("name drop", () => {
  expectResult(countIssues("NAME drop"), issues.name_drop.id);
});

test("nametag", () => {
  expectResult(countIssues("NAMEtag"), issues.nametag.id);
});

test("nation state", () => {
  expectResult(countIssues("NATION state"), issues.nation_state.id);
});

test("natural born", () => {
  expectResult(countIssues("NATURAL born"), issues.natural_born.id);
});

test("near-", () => {
  expectResult(countIssues("NEAR-far"), issues.near_hyphen.id);
});

test("near-: respects word boundaries", () => {
  expectNoResult(countIssues("SNEAR-far"));
});

test("neverending", () => {
  expectResult(countIssues("neverENDING"), issues.neverending.id);
});

test("nevermind", () => {
  expectResult(countIssues("neverMind"), issues.nm.id);
});

test("new found", () => {
  expectResult(countIssues("new FOUND"), issues.new_found.id);
});

test("new-found", () => {
  expectResult(countIssues("new-FOUND"), issues.new_found2.id);
}); 

test("non-", () => {
  expectResult(countIssues("non-banana"), issues.non_hyphen.id);
});

test("non-: respects word boundaries", () => {
  expectNoResult(countIssues("SNON-big"));
});

test("non-alcoholic", () => {
  expectResult(countIssues("NON-alcoholic"), issues.non_alcoholic.id);
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

test("non-intervention", () => {
  expectResult(countIssues("non-INTERvention"), issues.non_intervention.id);
});

test("non-living", () => {
  expectResult(countIssues("NON-living"), issues.non_living.id);
});

test("non-negotiable", () => {
  expectResult(countIssues("NON-negotiable"), issues.non_negotiable.id);
});

test("non-participant", () => {
  expectResult(countIssues("NON-participant"), issues.non_participant.id);
});

test("nonsequitur", () => {
  expectResult(countIssues("NoNsequitur"), issues.nonsequitur.id);
});

test("non-sequitur", () => {
  expectResult(countIssues("NoN-sequitur"), issues.non_sequitur.id);
});

test("non-standard", () => {
  expectResult(countIssues("NoN-StAndarD"), issues.non_standard.id);
});

test("non-stop", () => {
  expectResult(countIssues("NoN-StoP"), issues.non_stop.id);
});

test("non-threatening", () => {
  expectResult(countIssues("NoN-ThreAteNing"), issues.non_threatening.id);
});

test("non-zero", () => {
  expectResult(countIssues("non-ZERO"), issues.non_zero.id);
});

test("north east", () => {
  expectResult(countIssues("NORTH east"), issues.north_east.id);
});

test("north west", () => {
  expectResult(countIssues("NORTH west"), issues.north_west.id);
});

test("notetaking", () => {
  expectResult(countIssues("NOTEtaking"), issues.notetaking.id);
});

test("note taking", () => {
  expectResult(countIssues("NOTE taking"), issues.note_taking.id);
});

test("number-one", () => {
  expectResult(countIssues("Number-One"), issues.number_one.id);
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

test("off center", () => {
  expectResult(countIssues("OFF center"), issues.off_center.id);
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

test("off limits", () => {
  expectResult(countIssues("OFF limits"), issues.off_limits.id);
});

test("off putting", () => {
  expectResult(countIssues("OFF balance"), issues.off_balance.id);
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

test("on screen", () => {
  expectResult(countIssues("it is on SCREEN right now"), issues.on_screen.id);
});

test("on screen: respects word boundaries", () => {
  expectNoResult(countIssues("PARTITIon SCREEN door"));
  expectNoResult(countIssues("on SCREENS"));
});

test("onscreen", () => {
  expectResult(countIssues("onSCREEN"), issues.onscreen.id);
});

test("on site", () => {
  expectResult(countIssues("it is on SITE right now"), issues.on_site.id);
});

test("on-stage", () => {
  expectResult(countIssues("on-STAGE"), issues.on_stage.id);
});

test("on stage", () => {
  expectResult(countIssues("on STAGE"), issues.on_stage2.id);
});

test("one night stand", () => {
  expectResult(countIssues("ONE night STAND"), issues.one_night_stand.id);
});

test("one on one", () => {
  expectResult(countIssues("ONE on ONE"), issues.one_on_one.id);
});

test("one-time", () => {
  expectResult(countIssues("ONE-time"), issues.one_time.id);
});

test("out-bluff", () => {
  expectResult(countIssues("OUT-bluff"), issues.out_bluff.id);
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
