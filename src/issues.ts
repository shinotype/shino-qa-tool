export type IssueId = keyof typeof idlessIssues;
export type Issues = { [key in IssueId]: Issue };
export interface Issue {
  id: IssueId,
  regex: RegExp,
  ui: {
    label: string,
    toLabel?: string,
    copy?: string,
    paste?: string,
    copyLabels?: boolean,
    mw?: string,
  }
}

const idlessIssues = {

  // PUNCTUATION & GRAMMAR
  space: { regex: /[ ]{2}/g, ui: { label: "Two spaces", toLabel: "One space", copy: "  ", paste: " " }, },
  space2: { regex: /\n /g, ui: { label: "Space after newline", copy: "\\n " }, },
  space3: { regex: / \.([^\.]|$)/g, ui: { label: "Space before period", copy: " \\.([^\\.]|$)" }, }, 
  period: { regex: /([^\.]|^)\.\.([^\.]|$)/g, ui: { label: "..", toLabel: ". or ...", copy: "([^\\.]|^)\\.\\.([^\\.]|$)" }, },
  period2: { regex: /(^|[^\.])\.[?!$]/g, ui: { label: ". before ? or !", copy: "[^\\.]\\.[?!$]" }, },
  period3: { regex: /[?!]\./g, ui: { label: ". after ? or !", copy: "[?!]\\." }, },
  period4: { regex: /”\.([^\.])/ig, ui: { label: "Period outside ”", copy: "”\\.([^\\.])" }, },
  period5: { regex: /’\.([^\.])/ig, ui: { label: "Period outside ’", copy: "’\\.([^\\.])" }, },
  apostrophe: { regex: /'/g, ui: { label: "Straight '", copy: "\\\'" }, },
  quote: { regex: /"/g, ui: { label: "Straight \"", copy: "\\\"" }, },
  startquote: { regex: /”[^“]*?”/g, ui: { label: "Missing start quotes", copy: "”[^“]*?”" }, },
  endquote: { regex: /“[^”]*?“/g, ui: { label: "Missing end quotes", copy: "“[^”]*?“" }, },
  apostrophe2: { regex: /‘s\b/ig, ui: { label: "‘s", toLabel: "’s", copy: "‘s\\b", paste: "’s" }, },
  comma: { regex: /”,/ig, ui: { label: "Comma outside ”", copy: "”," }, },
  comma2: { regex: /’,/ig, ui: { label: "Comma outside ’", copy: "’," }, },
  too: { regex: /, too\b/ig, ui: { label: ", too", copy: ", too\\b" }, },
  either: { regex: /, either/ig, ui: { label: ", either", copy: ", either" }, },
  bang: { regex: /!\?/g, ui: { label: "!?", toLabel: "?!", copy: "!?", paste: "?!" }, },
  bang2: { regex: /([^!]|^)!!([^!]|$)/g, ui: { label: "!!", toLabel: "! or !!!", copy: "\\b!!\\b" }, },
  ellipsis1: { regex: /\.\.\.\./g, ui: { label: "....", copy: "...." }, },
  ellipsis2: { regex: /\.\.\. [a-z]/g, ui: { label: "... a", copy: "\\.\\.\\. [a-z]" }, },
  ellipsis3: { regex: /\.\.\.[A-Z]/g, ui: { label: "...A", copy: "\\.\\.\\.[A-Z]" }, },
  ellipsis4: { regex: /…/g, ui: { label: "… (symbol)", toLabel: "...", copy: "[\\u2026]", paste: "..." }, },
  emdash1: { regex: /— /g, ui: { label: "—[space]", copy: "— " }, },
  emdash2: { regex: / —/g, ui: { label: "[space]—", copy: " —" }, },
  adverb: { regex: /ly-(?!(?:fledged))/ig, ui: { label: "hyphenated adverbs (ly-)", copy: "ly-(?!(?:fledged))" }, },
  hyphen_numbers: { regex: /(twen|thir|for|fif|six|seven|eigh|nine)ty (one|two|three|four|five|six|seven|eight|nine)/ig, ui: { label: "Hyphenate numbers [21-99]", copy: "(twen|thir|for|fif|six|seven|eigh|nine)ty (one|two|three|four|five|six|seven|eight|nine)" }, },
  double_possessive: { regex: /.+’s and .+’s/ig, ui: { label: "Double possessive?", copy: "'s \\band ([^\\s]+)'s" }, },
  less_plural: { regex: /\bless [a-z]+s\b/ig, ui: { label: "'Less' used for countable quantity?", copy: "\\bless [a-z]+s\\b" }, },
  causepos: { regex: /‘cause\b/ig, ui: { label: "‘cause", toLabel: "’cause", copy: "‘cause\\b", paste: "’cause" }, },
  suppos: { regex: /‘sup\b/ig, ui: { label: "‘sup", toLabel: "’sup", copy: "‘sup\\b", paste: "’sup" }, },
  empos: { regex: /‘em\b/ig, ui: { label: "‘em", toLabel: "’em", copy: "‘em\\b", paste: "’em" }, },
  boutpos: { regex: /‘bout\b/ig, ui: { label: "‘bout", toLabel: "’bout", copy: "‘bout\\b", paste: "’bout" }, },
  notherpos: { regex: /‘nother\b/ig, ui: { label: "‘nother", toLabel: "’nother", copy: "‘nother\\b", paste: "’nother" }, },
  forepos: { regex: /‘fore\b/ig, ui: { label: "‘fore", toLabel: "’fore", copy: "‘fore\\b", paste: "’fore" }, },
  fraidpos: { regex: /‘fraid\b/ig, ui: { label: "‘fraid", toLabel: "’fraid", copy: "‘fraid\\b", paste: "’fraid" }, },
  neathpos: { regex: /‘neath\b/ig, ui: { label: "‘neath", toLabel: "’neath", copy: "‘neath\\b", paste: "’neath" }, },
  gainstpos: { regex: /‘gainst\b/ig, ui: { label: "‘gainst", toLabel: "’gainst", copy: "‘gainst\\b", paste: "’gainst" }, },
  ceptpos: { regex: /‘cept\b/ig, ui: { label: "‘cept", toLabel: "’cept", copy: "‘cept\\b", paste: "’cept" }, },
  roundpos: { regex: /‘round\b/ig, ui: { label: "‘round", toLabel: "’round", copy: "‘round\\b", paste: "’round" }, },
  tilpos: { regex: /‘til\b/ig, ui: { label: "‘til", toLabel: "’til", copy: "‘til\\b", paste: "’til" }, },
  tispos: { regex: /‘tis\b/ig, ui: { label: "‘tis", toLabel: "’tis", copy: "‘tis\\b", paste: "’tis" }, },
  twaspos: { regex: /‘twas\b/ig, ui: { label: "‘twas", toLabel: "’twas", copy: "‘twas\\b", paste: "’twas" }, },
  tweenpos: { regex: /‘tween\b/ig, ui: { label: "‘tween", toLabel: "’tween", copy: "‘tween\\b", paste: "’tween" }, },
  twerepos: { regex: /‘twere\b/ig, ui: { label: "‘twere", toLabel: "’twere", copy: "‘twere\\b", paste: "’twere" }, },
  twixtpos: { regex: /‘twixt\b/ig, ui: { label: "‘twixt", toLabel: "’twixt", copy: "‘twixt\\b", paste: "’twixt" }, },

  // A through E
  absent_minded: { regex: /absent-minded/ig, ui: { label: "absent-minded", toLabel: "absentminded", copyLabels: true, mw: "absentminded" }, },
  accidently: { regex: /accidently/ig, ui: { label: "accidently", toLabel: "accidentally", copyLabels: true }, },
  ack: { regex: /acknowledgement/ig, ui: { label: "acknowledgement", toLabel: "acknowledgment", copyLabels: true, mw: "acknowledgment" }, },
  ahaha: { regex: /ahaha/ig, ui: { label: "ahaha", toLabel: "ah ha ha", copy: "ahaha", copyLabels: true }, },
  aircon: { regex: /aircon/ig, ui: { label: "aircon", toLabel: "AC or air conditioning", copy: "aircon" }, },
  air_tight: { regex: /air-tight/ig, ui: { label: "air-tight", toLabel: "airtight", copyLabels: true, mw: "airtight" }, },
  alright: { regex: /alright/ig, ui: { label: "alright", toLabel: "all right", copyLabels: true }, },
  ambiance: { regex: /ambiance/ig, ui: { label: "ambiance", toLabel: "ambience",  copyLabels: true, mw: "ambience" }, },
  animal_like: { regex: /animal-like/ig, ui: { label: "animal-like", toLabel: "animallike",  copyLabels: true, mw: "animallike" }, },
  apologise: { regex: /apologise/ig, ui: { label: "apologise", toLabel: "apologize",  copyLabels: true, mw: "apologize" }, },
  apologising: { regex: /apologising/ig, ui: { label: "apologising", toLabel: "apologizing",  copyLabels: true }, },
  axe: { regex: /\bax\b/ig, ui: { label: "ax", toLabel: "axe", copy: "\\bax\\b", paste: "axe" }, },
  badmouth: { regex: /badmouth/ig, ui: { label: "badmouth", toLabel: "bad-mouth", copyLabels: true }, mw: "bad-mouth" },
  bad_mouth: { regex: /bad mouth/ig, ui: { label: "bad mouth", toLabel: "bad-mouth (verb?)", copy: "bad mouth", paste: "bad-mouth", mw: "bad-mouth" }, },
  bathhouse: { regex: /bath house/ig, ui: { label: "bath house", toLabel: "bathhouse",  copyLabels: true, mw: "bathhouse" }, },
  bite_sized: { regex: /bite-sized/ig, ui: { label: "bite-sized", toLabel: "bite-size", copyLabels: true, mw: "bite-size" }, },
  blood_curdling: { regex: /blood-curdling/ig, ui: { label: "blood-curdling", toLabel: "bloodcurdling",  copyLabels: true, mw: "bloodcurdling" }, },
  blood_red: { regex: /blood-red/ig, ui: { label: "blood-red", toLabel: "bloodred", copyLabels: true, mw: "bloodred" }, },
  blood_red2: { regex: /blood red/ig, ui: { label: "blood red", toLabel: "bloodred", copyLabels: true, mw: "bloodred" }, },
  blood_sucker: { regex: /blood-sucker/ig, ui: { label: "blood-sucker", toLabel: "bloodsucker", copyLabels: true, mw: "bloodsucker" }, },
  blood_sucking: { regex: /blood-sucking/ig, ui: { label: "blood-sucking", toLabel: "bloodsucking", copyLabels: true, mw: "bloodsucking" }, },
  broadminded: { regex: /broadminded/ig, ui: { label: "broadminded", toLabel: "broad-minded", copyLabels: true, mw: "broad-minded" }, },
  build_up: { regex: /build-up/ig, ui: { label: "build-up", toLabel: "buildup", copyLabels: true, mw: "buildup" }, },
  cafe: { regex: /\bcafe\b/ig, ui: { label: "cafe", toLabel: "café", copyLabels: true, mw: "café" }, },
  cancelled: { regex: /cancelled/ig, ui: { label: "cancelled", toLabel: "canceled", copyLabels: true, mw: "cancel" }, },
  cancelling: { regex: /cancelling/ig, ui: { label: "cancelling", toLabel: "canceling", copyLabels: true, mw: "canceling" }, },
  cancelation: { regex: /cancelation/ig, ui: { label: "cancelation", toLabel: "cancellation", copyLabels: true, mw: "cancellation" }, },
  centre: { regex: /centre/ig, ui: { label: "centre", toLabel: "center", copyLabels: true, mw: "center" }, },
  co_worker: { regex: /co-worker/ig, ui: { label: "co-worker", toLabel: "coworker", copyLabels: true, mw: "coworker" }, },
  colour: { regex: /colour/ig, ui: { label: "colour", toLabel: "color", copyLabels: true, mw: "color" }, },
  concensus: { regex: /concensus/ig, ui: { label: "concensus", toLabel: "consensus", copyLabels: true, mw: "consensus" }, },
  coup: { regex: /coup d’etat/ig, ui: { label: "coup d’etat", toLabel: "coup d’état", copyLabels: true, mw: "coup d’état" }, },
  crossdress: { regex: /crossdress/ig, ui: { label: "crossdress", toLabel: "cross-dress", copyLabels: true, mw: "crossdress" }, },
  cross_section: { regex: /cross-section/ig, ui: { label: "cross-section", toLabel: "cross section", copyLabels: true, mw: "cross section" }, },
  crystal_clear: { regex: /crystal-clear/ig, ui: { label: "crystal-clear", toLabel: "crystal clear", copyLabels: true, mw: "crystal clear" }, },
  crystalized: { regex: /crystalized/ig, ui: { label: "crystalized", toLabel: "crystallized", copyLabels: true, mw: "crystallize" }, },
  dead_set: { regex: /dead-set/ig, ui: { label: "dead-set", toLabel: "dead set", copyLabels: true, mw: "dead set" }, },
  dealbreaker: { regex: /dealbreaker/ig, ui: { label: "dealbreaker", toLabel: "deal-breaker", copyLabels: true }, },
  deal_maker: { regex: /deal-maker/ig, ui: { label: "deal-maker", toLabel: "dealmaker", copyLabels: true, mw: "dealmaker" }, },
  deal_making: { regex: /deal-making/ig, ui: { label: "deal-making", toLabel: "dealmaking", copyLabels: true, mw: "dealmaking" }, },
  deep_fry: { regex: /deep fry/ig, ui: { label: "deep fry", toLabel: "deep-fry", copyLabels: true, mw: "deep-fry" }, },
  defence: { regex: /defence/ig, ui: { label: "defence", toLabel: "defense", copyLabels: true, mw: "defense" }, },
  dejavu: { regex: /deja vu/ig, ui: { label: "deja vu", toLabel: "déjà vu", copyLabels: true, mw: "déjà vu" }, },
  dieing: { regex: /dieing/ig, ui: { label: "dieing", toLabel: "dying", copyLabels: true }, },
  discernable: { regex: /discernable/ig, ui: { label: "discernable", toLabel: "discernible", copyLabels: true, mw: "discernible" }, },
  discernably: { regex: /discernably/ig, ui: { label: "discernably", toLabel: "discernibly", copyLabels: true, mw: "discernibly" }, },
  discreet: { regex: /discreet/ig, ui: { label: "discreet (discrete?)", copy: "discreet", }, },
  discrete: { regex: /discrete/ig, ui: { label: "discrete (discreet?)", copy: "discrete" }, },
  doppelganger: { regex: /doppelganger/ig, ui: { label: "doppelganger", toLabel: "doppelgänger", copyLabels: true, mw: "doppelgänger" }, },
  doppleganger: { regex: /doppleganger/ig, ui: { label: "doppleganger", toLabel: "doppelgänger", copyLabels: true, mw: "doppelgänger" }, },
  double_take: { regex: /double-take/ig, ui: { label: "double-take", toLabel: "double take", copyLabels: true, mw: "double take" }, },
  doubletake: { regex: /doubletake/ig, ui: { label: "doubletake", toLabel: "double take", copyLabels: true, mw: "double take" }, },
  drier: { regex: /drier/ig, ui: { label: "drier (adjective)", copy: "drier" }, },
  dryer: { regex: /dryer/ig, ui: { label: "dryer (appliance)", copy: "dryer" }, },
  duty_bound: { regex: /duty-bound/ig, ui: { label: "duty-bound", toLabel: "duty bound", copyLabels: true, mw: "duty bound" }, },
  emphasise: { regex: /emphasise/ig, ui: { label: "emphasise", toLabel: "emphasize", copyLabels: true, mw: "emphasize" }, },
  emphasising: { regex: /emphasising/ig, ui: { label: "emphasising", toLabel: "emphasizing", copyLabels: true, mw: "emphasize" }, },
  entree: { regex: /entree/ig, ui: { label: "entree", toLabel: "entrée", copyLabels: true, mw: "entrée" }, },
  eye_witness: { regex: /eye witness/ig, ui: { label: "eye witness", toLabel: "eyewitness", copyLabels: true, mw: "eyewitness" }, },
  eye_witness2: { regex: /eye-witness/ig, ui: { label: "eye-witness", toLabel: "eyewitness", copyLabels: true, mw: "eyewitness" }, },
  
  // F through J
  face_down: { regex: /face-down/ig, ui: { label: "face-down", toLabel: "facedown", copyLabels: true, mw: "facedown" }, },
  face_to_face: { regex: /face to face/ig, ui: { label: "face to face", toLabel: "face-to-face", copyLabels: true, mw: "face-to-face" }, },
  fast_food: { regex: /fast-food/ig, ui: { label: "fast-food", toLabel: "fast food (noun?)", copy: "fast-food", paste: "fast food", mw: "fast food" }, },
  fast_food2: { regex: /fast food/ig, ui: { label: "fast food", toLabel: "fast-food (adjective?)", copy: "fast food", paste: "fast-food", mw: "fast-food" }, },
  fiance: { regex: /\bfiance[^e]/ig, ui: { label: "fiance", toLabel: "fiancé", copy: "\\bfiance[^e]", paste: "fiancé", mw: "fiancé" }, },
  fiancee: { regex: /fiancee/ig, ui: { label: "fiancee", toLabel: "fiancée", copyLabels: true, mw: "fiancée" }, },
  finger_like: { regex: /finger-like/ig, ui: { label: "finger-like", toLabel: "fingerlike", copyLabels: true, mw: "fingerlike" }, },
  first_hand: { regex: /first-hand/ig, ui: { label: "first-hand", toLabel: "firsthand", copyLabels: true, mw: "firsthand" }, },
  fist_fight: { regex: /fist-fight/ig, ui: { label: "fist-fight", toLabel: "fistfight", copyLabels: true, mw: "fistfight" }, },
  fist_fight2: { regex: /fist fight/ig, ui: { label: "fist fight", toLabel: "fistfight", copyLabels: true, mw: "fistfight" }, },
  flipside: { regex: /flipside/ig, ui: { label: "flipside", toLabel: "flip side", copyLabels: true, mw: "flip side" }, },
  forcefield: { regex: /forcefield/ig, ui: { label: "forcefield", toLabel: "force field", copyLabels: true, mw: "force field" }, },
  forsaw: { regex: /forsaw/ig, ui: { label: "forsaw", toLabel: "foresaw", copyLabels: true, mw: "foresee" }, },
  forsee: { regex: /forsee/ig, ui: { label: "forsee", toLabel: "foresee", copyLabels: true, mw: "foresee" }, },
  frontline1: { regex: /frontline/ig, ui: { label: "frontline (adjective)", copy: "frontline" }, },
  frontline2: { regex: /front line/ig, ui: { label: "front line (noun)", copy: "front line" }, },
  frontlines: { regex: /frontlines/ig, ui: { label: "frontlines", toLabel: "front lines", copyLabels: true }, },
  g_force: { regex: /g force/g, ui: { label: "g force", toLabel: "g-force", copyLabels: true, mw: "g-force" }, },
  gatling: { regex: /gatling gun/g, ui: { label: "gatling gun", toLabel: "Gatling gun", copyLabels: true, mw: "Gatling gun" }, },
  geez: { regex: /\bgeez\b/ig, ui: { label: "geez", toLabel: "jeez", copy: "geez\\b", paste: "jeez", mw: "jeez" }, },
  goodwill: { regex: /good will/ig, ui: { label: "good will", toLabel: "goodwill", copyLabels: true, mw: "goodwill" }, },
  grevious: { regex: /grevious/ig, ui: { label: "grevious", toLabel: "grievous", copyLabels: true, mw: "grievous" }, },
  grey: { regex: /grey/ig, ui: { label: "grey", toLabel: "gray", copyLabels: true, mw: "gray" }, },
  grinded: { regex: /grinded/ig, ui: { label: "grinded", toLabel: "ground", copyLabels: true, mw: "grind" }, },
  grit: { regex: /\bgrit\b/ig, ui: { label: "grit (should be gritted, past tense?)", copy: "grit\\b" }, },
  guerrila: { regex: /guerrila/ig, ui: { label: "guerrila", toLabel: "guerrilla", copyLabels: true, mw: "guerrilla" }, },
  guerilla: { regex: /guerilla/ig, ui: { label: "guerilla", toLabel: "guerrilla", copyLabels: true }, },
  hand_pick: { regex: /hand-pick/ig, ui: { label: "hand-pick", toLabel: "handpick", copyLabels: true, mw: "handpick" }, },
  hardpressed: { regex: /hardpressed/ig, ui: { label: "hardpressed", toLabel: "hard-pressed", copyLabels: true, mw: "hard-pressed" }, },
  hard_working: { regex: /hard-working/ig, ui: { label: "hard-working", toLabel: "hardworking", copyLabels: true, mw: "hardworking" }, },
  head_on: { regex: /head on/ig, ui: { label: "head on", toLabel: "head-on (adverb?)", copy: "head on", paste: "head-on", mw: "head-on" }, },
  head_scratcher: { regex: /head scratcher/ig, ui: { label: "head scratcher", toLabel: "head-scratcher", copyLabels: true, mw: "head-scratcher" }, },
  heroin: { regex: /heroin[^e]/ig, ui: { label: "heroin (heroine?)", copy: "heroin\\e" }, },
  hitman: { regex: /hitman/ig, ui: { label: "hitman", toLabel: "hit man", copyLabels: true, mw: "hit man" }, },
  home_made: { regex: /home-made/ig, ui: { label: "home-made", toLabel: "homemade", copyLabels: true, mw: "homemade" }, },
  home_sick: { regex: /home sick/ig, ui: { label: "home sick", toLabel: "homesick (adjective?)", copy: "home sick", paste: "homesick", mw: "homesick" }, },
  home_sick2: { regex: /home-sick/ig, ui: { label: "home-sick", toLabel: "homesick", copyLabels: true, mw: "homesick" }, },
  human_like: { regex: /human-like/ig, ui: { label: "human-like", toLabel: "humanlike", copyLabels: true, mw: "humanlike" }, },
  iron_clad: { regex: /iron-clad/ig, ui: { label: "iron-clad", toLabel: "ironclad", copyLabels: true, mw: "ironclad" }, },
  iron_fisted: { regex: /iron-fisted/ig, ui: { label: "iron-fisted", toLabel: "ironfisted", copyLabels: true, mw: "ironfisted" }, },
  judge: { regex: /judgement/ig, ui: { label: "judgement", toLabel: "judgment", copyLabels: true, mw: "judgment" }, },
  jungle_like: { regex: /jungle-like/ig, ui: { label: "jungle-like", toLabel: "junglelike", copyLabels: true, mw: "junglelike" }, },
  
  // K through O
  kind_hearted: { regex: /kind-hearted/ig, ui: { label: "kind-hearted", toLabel: "kindhearted", copyLabels: true, mw: "kindhearted" }, },
  kind_hearted2: { regex: /kind hearted/ig, ui: { label: "kind hearted", toLabel: "kindhearted", copyLabels: true, mw: "kindhearted" }, },
  knock_off: { regex: /knock-off/ig, ui: { label: "knock-off", toLabel: "knockoff", copyLabels: true, mw: "knockoff" }, },
  knowhow: { regex: /knowhow/ig, ui: { label: "knowhow", toLabel: "know-how", copyLabels: true, mw: "know-how" }, },
  laidback: { regex: /laidback/ig, ui: { label: "laidback", toLabel: "laid-back", copyLabels: true, mw: "laid-back" }, },
  laugh1: { regex: /haha/ig, ui: { label: "haha", toLabel: "ha ha", copyLabels: true }, },
  laugh2: { regex: /heehee/ig, ui: { label: "heehee", toLabel: "hee hee", copyLabels: true }, },
  lead: { regex: /\blead\b/ig, ui: { label: "lead (should be led, past tense?)", copy: "\\blead\\b" }, },
  life_blood: { regex: /life-blood/ig, ui: { label: "life-blood", toLabel: "lifeblood", copyLabels: true, mw: "lifeblood" }, },
  life_threatening: { regex: /life threatening/ig, ui: { label: "life threatening", toLabel: "life-threatening", copyLabels: true, mw: "life-threatening" }, },
  light_hearted: { regex: /light-hearted/ig, ui: { label: "light-hearted", toLabel: "lighthearted", copyLabels: true, mw: "lighthearted" }, },
  light_hearted2: { regex: /light hearted/ig, ui: { label: "light hearted", toLabel: "lighthearted", copyLabels: true, mw: "lighthearted" }, },
  light_weight: { regex: /light-weight/ig, ui: { label: "light-weight", toLabel: "lightweight", copyLabels: true, mw: "lightweight" }, },
  line_up: { regex: /line-up/ig, ui: { label: "line-up", toLabel: "lineup", copyLabels: true, mw: "lineup" }, },
  liquif: { regex: /liquif(y|ied)/ig, ui: { label: "liquif(y, ied)", toLabel: "liquef(y, ied)", copy: "liquef(y|ied)", mw: "liquefy" }, },
  love_struck: { regex: /love-struck/ig, ui: { label: "love-struck", toLabel: "lovestruck", copyLabels: true, mw: "lovestruck" }, },
  keychain: { regex: /keychain/ig, ui: { label: "keychain", toLabel: "key chain", copyLabels: true, mw: "key chain" }, },
  lightbulb: { regex: /lightbulb/ig, ui: { label: "lightbulb", toLabel: "light bulb", copyLabels: true, mw: "light bulb" }, },
  make_due: { regex: /make due/ig, ui: { label: "make due", toLabel: "make do", copyLabels: true, mw: "make do" }, },
  make_up: { regex: /make-up/ig, ui: { label: "make-up", toLabel: "makeup", copyLabels: true, mw: "makeup" }, },
  mask_like: { regex: /mask-like/ig, ui: { label: "mask-like", toLabel: "masklike", copyLabels: true, mw: "masklike" }, },
  mass_produce: { regex: /mass produce/ig, ui: { label: "mass produce", toLabel: "mass-produce", copyLabels: true, mw: "mass-produce" }, },
  mass_producing: { regex: /mass producing/ig, ui: { label: "mass producing", toLabel: "mass-producing", copyLabels: true, mw: "mass-produce" }, },
  mass_production: { regex: /mass-production/ig, ui: { label: "mass-production", toLabel: "mass production", copyLabels: true, mw: "mass production" }, },
  meagre: { regex: /meagre/ig, ui: { label: "meagre", toLabel: "meager", copyLabels: true, mw: "meager" }, },
  mid_air: { regex: /mid-air/ig, ui: { label: "mid-air", toLabel: "midair", copyLabels: true, mw: "midair" }, },
  mid_morning: { regex: /mid-morning/i, ui: { label: "mid-morning", toLabel: "midmorning", copyLabels: true, mw: "midmorning" }, },
  mid_section: { regex: /mid-section/ig, ui: { label: "mid-section", toLabel: "midsection", copyLabels: true, mw: "midsection" }, },
  mid_sentence: { regex: /mid-sentence/ig, ui: { label: "mid-sentence", toLabel: "midsentence", copyLabels: true }, },
  mid_forties: { regex: /mid-forties/ig, ui: { label: "mid-forties", toLabel: "midforties", copyLabels: true }, },
  mid_thirties: { regex: /mid-thirties/ig, ui: { label: "mid-thirties", toLabel: "midthirties", copyLabels: true }, },
  mid_twenties: { regex: /mid-twenties/ig, ui: { label: "mid-twenties", toLabel: "midtwenties", copyLabels: true }, },
  miniscule: { regex: /miniscule/ig, ui: { label: "miniscule", toLabel: "minuscule", copyLabels: true, mw: "minuscule" }, },
  mischevious: { regex: /mischevious/ig, ui: { label: "mischevious", toLabel: "mischievous", copyLabels: true, mw: "mischievous" }, },
  moustache: { regex: /moustache/ig, ui: { label: "moustache", toLabel: "mustache", copyLabels: true, mw: "mustache" }, },
  naive: { regex: /naïve/ig, ui: { label: "naïve", toLabel: "naive", copyLabels: true, mw: "naive" }, },
  name_drop: { regex: /name drop/ig, ui: { label: "name drop", toLabel: "name-drop", copyLabels: true, mw: "name-drop" }, },
  nm: { regex: /nevermind/ig, ui: { label: "nevermind", toLabel: "never mind", copyLabels: true, mw: "never mind" }, },
  non_combatant: { regex: /non-combatant/ig, ui: { label: "non-combatant", toLabel: "noncombatant", copyLabels: true, mw: "noncombatant" }, },
  non_committal: { regex: /non-committal/ig, ui: { label: "non-committal", toLabel: "noncommittal", copyLabels: true, mw: "noncommittal" }, },
  non_existent: { regex: /non-existent/ig, ui: { label: "non-existent", toLabel: "nonexistent", copyLabels: true, mw: "nonexistent" }, },
  non_hero: { regex: /non-hero/ig, ui: { label: "non-hero", toLabel: "nonhero", copyLabels: true, mw: "nonhero" }, },
  non_living: { regex: /non-living/ig, ui: { label: "non-living", toLabel: "nonliving", copyLabels: true, mw: "nonliving" }, },
  non_zero: { regex: /non-zero/ig, ui: { label: "non-zero", toLabel: "nonzero", copyLabels: true, mw: "nonzero" }, },
  ocher: { regex: /ochre/ig, ui: { label: "ochre", toLabel: "ocher", copyLabels: true, mw: "ocher" }, },
  occured: { regex: /occured/ig, ui: { label: "occured", toLabel: "occurred", copyLabels: true, mw: "occur" }, },
  occuring: { regex: /occuring/ig, ui: { label: "occuring", toLabel: "occurring", copyLabels: true, mw: "occur" }, },
  offence: { regex: /offence/ig, ui: { label: "offence", toLabel: "offense", copyLabels: true, mw: "offense" }, },
  off_balance: { regex: /off balance/ig, ui: { label: "off balance", toLabel: "off-balance", copyLabels: true, mw: "off-balance" }, },
  off_guard: { regex: /off-guard/ig, ui: { label: "off-guard", toLabel: "off guard", copyLabels: true, mw: "off guard" }, },
  off_handed: { regex: /off-handed/ig, ui: { label: "off-handed", toLabel: "offhanded", copyLabels: true, mw: "offhanded" }, },
  omelette: { regex: /omelette/ig, ui: { label: "omelette", toLabel: "omelet", copyLabels: true, mw: "omelet" }, },
  on_stage: { regex: /on-stage/ig, ui: { label: "on-stage", toLabel: "onstage", copyLabels: true, mw: "onstage" }, },
  one_time: { regex: /one-time/ig, ui: { label: "one-time", toLabel: "onetime", copyLabels: true, mw: "onetime" }, },
  over_prepared: { regex: /over-prepared/ig, ui: { label: "over-prepared", toLabel: "overprepared", copyLabels: true, mw: "overprepared" }, },
  over_protect: { regex: /over-protect/ig, ui: { label: "over-protect", toLabel: "overprotect", copyLabels: true, mw: "overprotect" }, },
  
  // P through T
  paper_mache: { regex: /paper mache/ig, ui: { label: "paper mache", toLabel: "paper-mache or papier mâché", copy: "paper mache", mw: "paper-mache" }, },
  photoshoot: { regex: /photoshoot/ig, ui: { label: "photoshoot", toLabel: "photo shoot", copyLabels: true, mw: "photo shoot" }, },
  piecede: { regex: /piece de resistance/ig, ui: { label: "piece de resistance", toLabel: "pièce de résistance", copyLabels: true, mw: "pièce de résistance" }, },
  plough: { regex: /plough/ig, ui: { label: "plough", toLabel: "plow", copyLabels: true, mw: "plow" }, },
  power_walk: { regex: /power-walk/ig, ui: { label: "power-walk", toLabel: "power walk", copyLabels: true, mw: "power walk" }, },
  principal: { regex: /principal/ig, ui: { label: "principal (head of a school)", copy: "principal" }, },
  principle: { regex: /principle/ig, ui: { label: "principle (concept)", copy: "principle" }, },
  psych: { regex: /psych[^e]\b/ig, ui: { label: "psych (verb)", copy: "\\bpsych[^e]" }, },
  psyche: { regex: /\bpsyche/ig, ui: { label: "psyche (noun)", copy: "\\bpsyche" }, },
  pubic: { regex: /pubic/ig, ui: { label: "pubic (public?)", copy: "pubic" }, },
  publically: { regex: /publically/ig, ui: { label: "publically", toLabel: "publicly", copyLabels: true, mw: "publicly" }, },
  punchline: { regex: /punchline/ig, ui: { label: "punchline", toLabel: "punch line", copyLabels: true, mw: "punch line" }, },
  punch_line: { regex: /punch-line/ig, ui: { label: "punch-line", toLabel: "punch line", copyLabels: true, mw: "punch line" }, },
  puppet_like: { regex: /puppet-like/ig, ui: { label: "puppet-like", toLabel: "puppetlike", copyLabels: true, mw: "puppetlike" }, },
  pushup: { regex: /pushup/ig, ui: { label: "pushup", toLabel: "push-up", copyLabels: true, mw: "push-up" }, },
  re_absorb: { regex: /re-absorb/ig, ui: { label: "re-absorb", toLabel: "reabsorb", copyLabels: true, mw: "reabsorb" }, },
  re_examine: { regex: /re-examine/ig, ui: { label: "re-examine", toLabel: "reexamine", copyLabels: true, mw: "reexamine" }, },
  rip: { regex: /r.i.p/ig, ui: { label: "R.I.P", toLabel: "RIP", copyLabels: true, mw: "RIP" }, },
  river_bank: { regex: /river bank/ig, ui: { label: "river bank", toLabel: "riverbank", copyLabels: true, mw: "riverbank" }, },
  river_bank2: { regex: /river-bank/ig, ui: { label: "river-bank", toLabel: "riverbank", copyLabels: true, mw: "riverbank" }, },
  roleplay: { regex: /roleplay/ig, ui: { label: "roleplay", toLabel: "role-play", copyLabels: true, mw: "role-play" }, },
  rough_and_tumble: { regex: /rough and tumble/ig, ui: { label: "rough and tumble", toLabel: "rough-and-tumble", copyLabels: true, mw: "rough-and-tumble" }, },
  saute: { regex: /saute/ig, ui: { label: "saute", toLabel: "sauté", copyLabels: true, mw: "sauté" }, },
  second_guess: { regex: /second guess/ig, ui: { label: "second guess", toLabel: "second-guess (verb?)", copyLabels: true, mw: "second-guess" }, },
  second_hand: { regex: /second-hand/ig, ui: { label: "second-hand", toLabel: "secondhand", copyLabels: true, mw: "secondhand" }, },
  self_expression: { regex: /self expression/ig, ui: { label: "self expression", toLabel: "self-expression", copyLabels: true, mw: "self-expression" }, },
  semi_circle: { regex: /semi-circle/ig, ui: { label: "semi-circle", toLabel: "semicircle", copyLabels: true, mw: "semicircle" }, },
  sheath: { regex: /sheath[^e]/ig, ui: { label: "sheath (noun)", copy: "sheath[^e]" }, },
  sheathe: { regex: /sheathe/ig, ui: { label: "sheathe (verb)", copy: "sheathe" }, },
  shockwave: { regex: /shockwave/ig, ui: { label: "shockwave", toLabel: "shock wave", copyLabels: true, mw: "shock wave" }, },
  shuteye: { regex: /shuteye/ig, ui: { label: "shuteye", toLabel: "shut-eye", copyLabels: true, mw: "shut-eye" }, },
  signalling: { regex: /signalling/ig, ui: { label: "signalling", toLabel: "signaling", copyLabels: true, mw: "signal" }, },
  singlehanded: { regex: /singlehanded/ig, ui: { label: "singlehanded", toLabel: "single-handed", copyLabels: true, mw: "single-handed" }, },
  singleminded: { regex: /singleminded/ig, ui: { label: "singleminded", toLabel: "single-minded", copyLabels: true, mw: "single-minded" }, },
  sizeable: { regex: /sizeable/ig, ui: { label: "sizeable", toLabel: "sizable", copyLabels: true, mw: "sizable" }, },
  skillset: { regex: /skillset/ig, ui: { label: "skillset", toLabel: "skill set", copyLabels: true, mw: "skill set" }, },
  slayed: { regex: /slayed/ig, ui: { label: "slayed (comedy?)", toLabel: "slew (murder?)", copy: "slayed", paste: "slew", mw: "slay" }, },
  slip_up: { regex: /slip-up/ig, ui: { label: "slip-up", toLabel: "slipup", copyLabels: true, mw: "slipup" }, },
  smoulder: { regex: /smoulder/ig, ui: { label: "smoulder", toLabel: "smolder", copyLabels: true, mw: "smolder" }, },
  soft_hearted: { regex: /soft-hearted/ig, ui: { label: "soft-hearted", toLabel: "softhearted", copyLabels: true, mw: "softhearted" }, },
  soul: { regex: /soulmate/ig, ui: { label: "soulmate", toLabel: "soul mate", copyLabels: true, mw: "soul mate" }, },
  standalone: { regex: /standalone/ig, ui: { label: "standalone", toLabel: "stand-alone", copyLabels: true, mw: "stand-alone" }, },
  stand_out: { regex: /stand-out/ig, ui: { label: "stand-out", toLabel: "standout", copyLabels: true, mw: "standout" }, },
  strait: { regex: /straightlaced/ig, ui: { label: "straightlaced", toLabel: "straitlaced", copyLabels: true, mw: "straitlaced" }, },
  swiss: { regex: /swiss cheese/g, ui: { label: "swiss cheese", toLabel: "Swiss cheese", copyLabels: true, mw: "Swiss cheese" }, },
  tastebud: { regex: /tastebud/ig, ui: { label: "tastebud", toLabel: "taste bud", copyLabels: true, mw: "taste bud" }, },
  tete_a_tete: { regex: /tete-a-tete/ig, ui: { label: "tete-a-tete", toLabel: "tête-à-tête", copyLabels: true, mw: "tête-à-tête" }, },
  thrusted: { regex: /thrusted/ig, ui: { label: "thrusted", toLabel: "thrust (past tense)", copy: "thrusted", paste: "thrust", mw: "thrust" }, },
  timeframe: { regex: /timeframe/ig, ui: { label: "timeframe", toLabel: "time frame", copyLabels: true, mw: "time frame" }, },
  tipoff: { regex: /tipoff/ig, ui: { label: "tipoff", toLabel: "tip-off", copyLabels: true, mw: "tip-off" }, },
  travelling: { regex: /travelling/ig, ui: { label: "travelling", toLabel: "traveling", copyLabels: true, mw: "travel" }, },
  travelled: { regex: /travelled/ig, ui: { label: "travelled", toLabel: "traveled", copyLabels: true, mw: "travel" }, },
  traveller: { regex: /traveller/ig, ui: { label: "traveller", toLabel: "traveler", copyLabels: true, mw: "traveler" }, },
  twentyfourseven: { regex: /twenty-four-seven/ig, ui: { label: "twenty-four-seven", toLabel: "twenty-four seven", copyLabels: true, mw: "twenty-four seven" }, },
  twin_tail: { regex: /twin tail/ig, ui: { label: "twin tail", toLabel: "pigtail", copyLabels: true }, },
  twin_tail2: { regex: /twin-tail/ig, ui: { label: "twin-tail", toLabel: "pigtail", copyLabels: true }, },
  twintail: { regex: /twintail/ig, ui: { label: "twintail", toLabel: "pigtail", copyLabels: true }, },
  
  // U through Z
  underaged: { regex: /underaged/ig, ui: { label: "underaged", toLabel: "underage", copyLabels: true, mw: "underage" }, },
  vice_versa: { regex: /vice-versa/ig, ui: { label: "vice-versa", toLabel: "vice versa", copyLabels: true, mw: "vice versa" }, },
  wellkempt: { regex: /well-kempt/ig, ui: { label: "well-kempt", toLabel: "well-kept", copyLabels: true, mw: "well-kept" }, },
  wishlist: { regex: /wishlist/ig, ui: { label: "wishlist", toLabel: "wish list", copyLabels: true, mw: "wish list" }, },
  woah: { regex: /woah/ig, ui: { label: "woah", toLabel: "whoa", copyLabels: true, mw: "whoa" }, },
  worshiping: { regex: /worshiping/ig, ui: { label: "worshiping", toLabel: "worshipping", copyLabels: true, mw: "worship" }, },
  worshiper: { regex: /worshiper/ig, ui: { label: "worshiper", toLabel: "worshipper", copyLabels: true, mw: "worshipper" }, },
  worst_case_scenario: { regex: /worst case scenario/ig, ui: { label: "worst case scenario", toLabel: "worst-case scenario", copyLabels: true, mw: "worst-case" }, },
  
  // Compare similar words
  afterwards: { regex: /afterwards/ig, ui: { label: "afterwards", copy: "afterwards" }, },
  afterward: { regex: /afterward($|[^s])/ig, ui: { label: "afterward", copy: "afterward[^s]" }, },
  anymore: { regex: /anymore/ig, ui: { label: "anymore", copy: "anymore" }, },
  any_more: { regex: /any more/ig, ui: { label: "any more", copy: "any more" }, },
  further: { regex: /further/ig, ui: { label: "further", copy: "further" }, },
  farther: { regex: /farther/ig, ui: { label: "farther", copy: "farther" }, },
  leaped: { regex: /leaped/ig, ui: { label: "leaped", copy: "leaped" }, },
  leapt: { regex: /leapt/ig, ui: { label: "leapt", copy: "leapt" }, },
  towards: { regex: /towards/ig, ui: { label: "towards", copy: "towards" }, },
  toward: { regex: /toward($|[^s])/ig, ui: { label: "toward", copy: "toward[^s]" }, },
};

// variable is unused, but forces a type check
const unusedTypeCheck = idlessIssues as { [key: string]: Omit<Issue, "id"> };

type IdlessIssues = { [key in IssueId]: Omit<Issues[key], 'id'> };

function copyObjectIdsToValues(idlessIssues: IdlessIssues): Issues {
  const issues: Partial<Issues> = {};
  for (const key in idlessIssues) {
    const id = key as IssueId;
    issues[id] = { id, ...idlessIssues[id] as Omit<Issue, 'id'> };
  }
  return issues as Issues;
}

export const issues = copyObjectIdsToValues(idlessIssues);
