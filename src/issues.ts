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
  apostrophe: { regex: /'/g, ui: { label: "Straight '", copy: "\\\'" }, },
  quote: { regex: /"/g, ui: { label: "Straight \"", copy: "\\\"" }, },
  startquote: { regex: /”[^“]*?”/g, ui: { label: "Missing start quotes", copy: "”[^“]*?”" }, },
  endquote: { regex: /“[^”]*?“/g, ui: { label: "Missing end quotes", copy: "“[^”]*?“" }, },
  apostrophe2: { regex: /‘s\b/ig, ui: { label: "‘s", toLabel: "’s", copy: "‘s\\b", paste: "’s" }, },
  comma: { regex: /”,/ig, ui: { label: "Comma outside quotes", copy: "”," }, },
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
  double_possessive: { regex: /.+’s and .+’s/ig, ui: { label: "Double possessive?", copy: ".+‘s and .+‘s" }, },
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
  absent_minded: { regex: /absent-minded/ig, ui: { label: "absent-minded", toLabel: "absentminded", copy: "absent-minded", paste: "absentminded" }, },
  accidently: { regex: /accidently/ig, ui: { label: "accidently", toLabel: "accidentally", copy: "accidently", paste: "accidentally" }, },
  ack: { regex: /acknowledgement/ig, ui: { label: "acknowledgement", toLabel: "acknowledgment", copy: "acknowledgement", paste: "acknowledgment" }, },
  ahaha: { regex: /ahaha/ig, ui: { label: "ahaha", toLabel: "ah ha ha", copy: "ahaha", paste: "ah ha ha" }, },
  aircon: { regex: /aircon/ig, ui: { label: "aircon", toLabel: "AC or air conditioning", copy: "aircon" }, },
  alright: { regex: /alright/ig, ui: { label: "alright", toLabel: "all right", copy: "alright", paste: "all right" }, },
  ambiance: { regex: /ambiance/ig, ui: { label: "ambiance", toLabel: "ambience", copy: "ambiance", paste: "ambience" }, },
  apologise: { regex: /apologise/ig, ui: { label: "apologise", toLabel: "apologize", copy: "apologise", paste: "apologize" }, },
  axe: { regex: /\bax\b/ig, ui: { label: "ax", toLabel: "axe", copy: "\\bax\\b", paste: "axe" }, },
  bathhouse: { regex: /bath house/ig, ui: { label: "bath house", toLabel: "bathhouse", copy: "bath house", paste: "bathhouse" }, },
  blood_curdling: { regex: /blood-curdling/ig, ui: { label: "blood-curdling", toLabel: "bloodcurdling", copy: "blood-curdling", paste: "bloodcurdling" }, },
  blood_red: { regex: /blood-red/ig, ui: { label: "blood-red", toLabel: "bloodred", copy: "blood-red", paste: "bloodred" }, },
  blood_sucking: { regex: /blood-sucking/ig, ui: { label: "blood-sucking", toLabel: "bloodsucking", copy: "blood-sucking", paste: "bloodsucking" }, },
  build_up: { regex: /build-up/ig, ui: { label: "build-up", toLabel: "buildup", copy: "build-up", paste: "buildup" }, },
  cafe: { regex: /\bcafe\b/ig, ui: { label: "cafe", toLabel: "café", copy: "cafe", paste: "café" }, },
  cancelled: { regex: /cancelled/ig, ui: { label: "cancelled", toLabel: "canceled", copy: "cancelled", paste: "canceled" }, },
  cancelling: { regex: /cancelling/ig, ui: { label: "cancelling", toLabel: "canceling", copy: "cancelling", paste: "canceling" }, },
  cancelation: { regex: /cancelation/ig, ui: { label: "cancelation", toLabel: "cancellation", copy: "cancelation", paste: "cancellation" }, },
  centre: { regex: /centre/ig, ui: { label: "centre", toLabel: "center", copy: "centre", paste: "center" }, },
  co_worker: { regex: /co-worker/ig, ui: { label: "co-worker", toLabel: "coworker", copy: "co-worker", paste: "coworker" }, },
  colour: { regex: /colour/ig, ui: { label: "colour", toLabel: "color", copy: "colour", paste: "color" }, },
  concensus: { regex: /concensus/ig, ui: { label: "concensus", toLabel: "consensus", copy: "concensus", paste: "consensus" }, },
  coup: { regex: /coup d’etat/ig, ui: { label: "coup d’etat", toLabel: "coup d’état", copy: "coup d’etat", paste: "coup d’état" }, },
  crossdress: { regex: /crossdress/ig, ui: { label: "crossdress", toLabel: "cross-dress", copy: "crossdress", paste: "cross-dress" }, },
  cross_section: { regex: /cross-section/ig, ui: { label: "cross-section", toLabel: "cross section", copy: "cross-section", paste: "cross section" }, },
  crystal_clear: { regex: /crystal-clear/ig, ui: { label: "crystal-clear", toLabel: "crystal clear", copy: "crystal-clear", paste: "crystal clear" }, },
  crystalized: { regex: /crystalized/ig, ui: { label: "crystalized", toLabel: "crystallized", copy: "crystalized", paste: "crystallized" }, },
  dead_set: { regex: /dead-set/ig, ui: { label: "dead-set", toLabel: "dead set", copy: "dead-set", paste: "dead set" }, },
  dealbreaker: { regex: /dealbreaker/ig, ui: { label: "dealbreaker", toLabel: "deal-breaker", copy: "dealbreaker", paste: "deal-breaker" }, },
  defence: { regex: /defence/ig, ui: { label: "defence", toLabel: "defense", copy: "defence", paste: "defense" }, },
  dejavu: { regex: /deja vu/ig, ui: { label: "deja vu", toLabel: "déjà vu", copy: "deja vu", paste: "déjà vu" }, },
  dieing: { regex: /dieing/ig, ui: { label: "dieing", toLabel: "dying", copy: "dieing", paste: "dying" }, },
  discreet: { regex: /discreet/ig, ui: { label: "discreet (discrete?)", copy: "discreet" }, },
  discrete: { regex: /discrete/ig, ui: { label: "discrete (discreet?)", copy: "discrete" }, },
  drier: { regex: /drier/ig, ui: { label: "drier (adjective)", copy: "drier" }, },
  dryer: { regex: /dryer/ig, ui: { label: "dryer (appliance)", copy: "dryer" }, },
  duty_bound: { regex: /duty-bound/ig, ui: { label: "duty-bound", toLabel: "duty bound", copy: "duty-bound", paste: "duty bound" }, },
  emphasise: { regex: /emphasise/ig, ui: { label: "emphasise", toLabel: "emphasize", copy: "emphasise", paste: "emphasize" }, },
  entree: { regex: /entree/ig, ui: { label: "entree", toLabel: "entrée", copy: "entree", paste: "entrée" }, },
  
  // F through J
  face_down: { regex: /face-down/ig, ui: { label: "face-down", toLabel: "facedown", copy: "face-down", paste: "facedown" }, },
  fiance: { regex: /\bfiance[^e]/ig, ui: { label: "fiance", toLabel: "fiancé", copy: "\\bfiance[^e]", paste: "fiancé" }, },
  fiancee: { regex: /fiancee/ig, ui: { label: "fiancee", toLabel: "fiancée", copy: "fiancee", paste: "fiancée" }, },
  finger_like: { regex: /finger-like/ig, ui: { label: "finger-like", toLabel: "fingerlike", copy: "finger-like", paste: "fingerlike" }, },
  first_hand: { regex: /first-hand/ig, ui: { label: "first-hand", toLabel: "firsthand", copy: "first-hand", paste: "firsthand" }, },
  flipside: { regex: /flipside/ig, ui: { label: "flipside", toLabel: "flip side", copy: "flipside", paste: "flip side" }, },
  forcefield: { regex: /forcefield/ig, ui: { label: "forcefield", toLabel: "force field", copy: "forcefield", paste: "force field" }, },
  forsaw: { regex: /forsaw/ig, ui: { label: "forsaw", toLabel: "foresaw", copy: "forsaw", paste: "foresaw" }, },
  forsee: { regex: /forsee/ig, ui: { label: "forsee", toLabel: "foresee", copy: "forsee", paste: "foresee" }, },
  frontline1: { regex: /frontline/ig, ui: { label: "frontline (adjective)", copy: "frontline" }, },
  frontline2: { regex: /front line/ig, ui: { label: "front line (noun)", copy: "front line" }, },
  frontlines: { regex: /frontlines/ig, ui: { label: "frontlines", toLabel: "front lines", copy: "frontlines", paste: "front lines" }, },
  gatling: { regex: /gatling gun/g, ui: { label: "gatling gun", toLabel: "Gatling gun", copy: "gatling gun", paste: "Gatling gun" }, },
  geez: { regex: /\bgeez\b/ig, ui: { label: "geez", toLabel: "jeez", copy: "geez", paste: "jeez" }, },
  goodwill: { regex: /good will/ig, ui: { label: "good will", toLabel: "goodwill", copy: "good will", paste: "goodwill" }, },
  grevious: { regex: /grevious/ig, ui: { label: "grevious", toLabel: "grievous", copy: "grevious", paste: "grievous" }, },
  grey: { regex: /grey/ig, ui: { label: "grey", toLabel: "gray", copy: "grey", paste: "gray" }, },
  grinded: { regex: /grinded/ig, ui: { label: "grinded", toLabel: "ground", copy: "grinded", paste: "ground" }, },
  grit: { regex: /\bgrit\b/ig, ui: { label: "grit (should be gritted, past tense?)", copy: "grit\\b" }, },
  guerrila: { regex: /guerrila/ig, ui: { label: "guerrila", toLabel: "guerrilla", copy: "guerrila", paste: "guerrilla" }, },
  guerilla: { regex: /guerilla/ig, ui: { label: "guerilla", toLabel: "guerrilla", copy: "guerilla", paste: "guerrilla" }, },
  hand_pick: { regex: /hand-pick/ig, ui: { label: "hand-pick", toLabel: "handpick", copy: "hand-pick", paste: "handpick" }, },
  hardpressed: { regex: /hardpressed/ig, ui: { label: "hardpressed", toLabel: "hard-pressed", copy: "hardpressed", paste: "hard-pressed" }, },
  hard_working: { regex: /hard-working/ig, ui: { label: "hard-working", toLabel: "hardworking", copy: "hard-working", paste: "hardworking" }, },
  heroin: { regex: /heroin[^e]/ig, ui: { label: "heroin (heroine?)", copy: "heroin\\e" }, },
  home_made: { regex: /home-made/ig, ui: { label: "home-made", toLabel: "homemade", copy: "home-made", paste: "homemade" }, },
  human_like: { regex: /human-like/ig, ui: { label: "human-like", toLabel: "humanlike", copy: "human-like", paste: "humanlike" }, },
  iron_clad: { regex: /iron-clad/ig, ui: { label: "iron-clad", toLabel: "ironclad", copy: "iron-clad", paste: "ironclad" }, },
  iron_fisted: { regex: /iron-fisted/ig, ui: { label: "iron-fisted", toLabel: "ironfisted", copy: "iron-fisted", paste: "ironfisted" }, },
  judge: { regex: /judgement/ig, ui: { label: "judgement", toLabel: "judgment", copy: "judgement", paste: "judgment" }, },
  jungle_like: { regex: /jungle-like/ig, ui: { label: "jungle-like", toLabel: "junglelike", copy: "jungle-like", paste: "junglelike" }, },
  
  // K through O
  kind_hearted: { regex: /kind-hearted/ig, ui: { label: "kind-hearted", toLabel: "kindhearted", copy: "kind-hearted", paste: "kindhearted" }, },
  knock_off: { regex: /knock-off/ig, ui: { label: "knock-off", toLabel: "knockoff", copy: "knock-off", paste: "knockoff" }, },
  knowhow: { regex: /knowhow/ig, ui: { label: "knowhow", toLabel: "know-how", copy: "knowhow", paste: "know-how" }, },
  laidback: { regex: /laidback/ig, ui: { label: "laidback", toLabel: "laid-back", copy: "laidback", paste: "laid-back" }, },
  laugh1: { regex: /haha/ig, ui: { label: "haha", toLabel: "ha ha", copy: "haha", paste: "ha ha" }, },
  laugh2: { regex: /heehee/ig, ui: { label: "heehee", toLabel: "hee hee", copy: "heehee", paste: "hee hee" }, },
  lead: { regex: /\blead\b/ig, ui: { label: "lead (should be led, past tense?)", copy: "\\blead\\b" }, },
  life_blood: { regex: /life-blood/ig, ui: { label: "life-blood", toLabel: "lifeblood", copy: "life-blood", paste: "lifeblood" }, },
  light_hearted: { regex: /light-hearted/ig, ui: { label: "light-hearted", toLabel: "lighthearted", copy: "light-hearted", paste: "lighthearted" }, },
  light_weight: { regex: /light-weight/ig, ui: { label: "light-weight", toLabel: "lightweight", copy: "light-weight", paste: "lightweight" }, },
  line_up: { regex: /line-up/ig, ui: { label: "line-up", toLabel: "lineup", copy: "line-up", paste: "lineup" }, },
  love_struck: { regex: /love-struck/ig, ui: { label: "love-struck", toLabel: "lovestruck", copy: "love-struck", paste: "lovestruck" }, },
  keychain: { regex: /keychain/ig, ui: { label: "keychain", toLabel: "key chain", copy: "keychain", paste: "key chain" }, },
  lightbulb: { regex: /lightbulb/ig, ui: { label: "lightbulb", toLabel: "light bulb", copy: "lightbulb", paste: "light bulb" }, },
  mask_like: { regex: /mask-like/ig, ui: { label: "mask-like", toLabel: "masklike", copy: "mask-like", paste: "masklike" }, },
  massproduce: { regex: /mass produce/ig, ui: { label: "mass produce", toLabel: "mass-produce", copy: "mass produce", paste: "mass-produce" }, },
  mass_production: { regex: /mass-production/ig, ui: { label: "mass-production", toLabel: "mass production", copy: "mass-production", paste: "mass production" }, },
  meagre: { regex: /meagre/ig, ui: { label: "meagre", toLabel: "meager", copy: "meagre", paste: "meager" }, },
  mid_air: { regex: /mid-air/ig, ui: { label: "mid-air", toLabel: "midair", copy: "mid-air", paste: "midair" }, },
  mid_morning: { regex: /mid-morning/i, ui: { label: "mid-morning", toLabel: "midmorning", copy: "mid-morning", paste: "midmorning" }, },
  mid_sentence: { regex: /mid-sentence/ig, ui: { label: "mid-sentence", toLabel: "midsentence", copy: "mid-sentence", paste: "midsentence" }, },
  mid_forties: { regex: /mid-forties/ig, ui: { label: "mid-forties", toLabel: "midforties", copy: "mid-forties", paste: "midforties" }, },
  mid_thirties: { regex: /mid-thirties/ig, ui: { label: "mid-thirties", toLabel: "midthirties", copy: "mid-thirties", paste: "midthirties" }, },
  mid_twenties: { regex: /mid-twenties/ig, ui: { label: "mid-twenties", toLabel: "midtwenties", copy: "mid-twenties", paste: "midtwenties" }, },
  miniscule: { regex: /miniscule/ig, ui: { label: "miniscule", toLabel: "minuscule", copy: "miniscule", paste: "minuscule" }, },
  mischevious: { regex: /mischevious/ig, ui: { label: "mischevious", toLabel: "mischievous", copy: "mischevious", paste: "mischievous" }, },
  moustache: { regex: /moustache/ig, ui: { label: "moustache", toLabel: "mustache", copy: "moustache", paste: "mustache" }, },
  nm: { regex: /nevermind/ig, ui: { label: "nevermind", toLabel: "never mind", copy: "nevermind", paste: "never mind" }, },
  non_combatant: { regex: /non-combatant/ig, ui: { label: "non-combatant", toLabel: "noncombatant", copy: "non-combatant", paste: "noncombatant" }, },
  non_hero: { regex: /non-hero/ig, ui: { label: "non-hero", toLabel: "nonhero", copy: "non-hero", paste: "nonhero" }, },
  non_living: { regex: /non-living/ig, ui: { label: "non-living", toLabel: "nonliving", copy: "non-living", paste: "nonliving" }, },
  non_zero: { regex: /non-zero/ig, ui: { label: "non-zero", toLabel: "nonzero", copy: "non-zero", paste: "nonzero" }, },
  ocher: { regex: /ochre/ig, ui: { label: "ochre", toLabel: "ocher", copy: "ochre", paste: "ocher" }, },
  occured: { regex: /occured/ig, ui: { label: "occured", toLabel: "occurred", copy: "occured", paste: "occurred" }, },
  occuring: { regex: /occuring/ig, ui: { label: "occuring", toLabel: "occurring", copy: "occuring", paste: "occurring" }, },
  offence: { regex: /offence/ig, ui: { label: "offence", toLabel: "offense", copy: "offence", paste: "offense" }, },
  off_handed: { regex: /off-handed/ig, ui: { label: "off-handed", toLabel: "offhanded", copy: "off-handed", paste: "offhanded" }, },
  omelette: { regex: /omelette/ig, ui: { label: "omelette", toLabel: "omelet", copy: "omelette", paste: "omelet" }, },
  on_stage: { regex: /on-stage/ig, ui: { label: "on-stage", toLabel: "onstage", copy: "on-stage", paste: "onstage" }, },
  one_time: { regex: /one-time/ig, ui: { label: "one-time", toLabel: "onetime", copy: "one-time", paste: "onetime" }, },
  over_prepared: { regex: /over-prepared/ig, ui: { label: "over-prepared", toLabel: "overprepared", copy: "over-prepared", paste: "overprepared" }, },
  over_protect: { regex: /over-protect/ig, ui: { label: "over-protect", toLabel: "overprotect", copy: "over-protect", paste: "overprotect" }, },
  
  // P through T
  paper_mache: { regex: /paper mache/ig, ui: { label: "paper mache", toLabel: "paper-mache or papier mâché", copy: "paper mache" }, },
  photoshoot: { regex: /photoshoot/ig, ui: { label: "photoshoot", toLabel: "photo shoot", copy: "photoshoot", paste: "photo shoot" }, },
  plough: { regex: /plough/ig, ui: { label: "plough", toLabel: "plow", copy: "plough", paste: "plow" }, },
  principal: { regex: /principal/ig, ui: { label: "principal (head of a school)", copy: "principal" }, },
  principle: { regex: /principle/ig, ui: { label: "principle (concept)", copy: "principle" }, },
  psych: { regex: /psych[^e]\b/ig, ui: { label: "psych (verb)", copy: "\\bpsych[^e]" }, },
  psyche: { regex: /\bpsyche/ig, ui: { label: "psyche (noun)", copy: "\\bpsyche" }, },
  pubic: { regex: /pubic/ig, ui: { label: "pubic (public?)", copy: "pubic" }, },
  publically: { regex: /publically/ig, ui: { label: "publically", toLabel: "publicly", copy: "publically", paste: "publicly" }, },
  puppet_like: { regex: /puppet-like/ig, ui: { label: "puppet-like", toLabel: "puppetlike", copy: "puppet-like", paste: "puppetlike" }, },
  re_absorb: { regex: /re-absorb/ig, ui: { label: "re-absorb", toLabel: "reabsorb", copy: "re-absorb", paste: "reabsorb" }, },
  re_examine: { regex: /re-examine/ig, ui: { label: "re-examine", toLabel: "reexamine", copy: "re-examine", paste: "reexamine" }, },
  roleplay: { regex: /roleplay/ig, ui: { label: "roleplay", toLabel: "role-play", copy: "roleplay", paste: "role-play" }, },
  second_hand: { regex: /second-hand/ig, ui: { label: "second-hand", toLabel: "secondhand", copy: "second-hand", paste: "secondhand" }, },
  semi_circle: { regex: /semi-circle/ig, ui: { label: "semi-circle", toLabel: "semicircle", copy: "“semi-circle", paste: "semicircle" }, },
  sheath: { regex: /sheath[^e]/ig, ui: { label: "sheath (noun)", copy: "sheath[^e]" }, },
  sheathe: { regex: /sheathe/ig, ui: { label: "sheathe (verb)", copy: "sheathe" }, },
  shockwave: { regex: /shockwave/ig, ui: { label: "shockwave", toLabel: "shock wave", copy: "shockwave", paste: "shock wave" }, },
  signalling: { regex: /signalling/ig, ui: { label: "signalling", toLabel: "signaling", copy: "signalling", paste: "signaling" }, },
  singlehanded: { regex: /singlehanded/ig, ui: { label: "singlehanded", toLabel: "single-handed", copy: "singlehanded", paste: "single-handed" }, },
  singleminded: { regex: /singleminded/ig, ui: { label: "singleminded", toLabel: "single-minded", copy: "singleminded", paste: "single-minded" }, },
  sizeable: { regex: /sizeable/ig, ui: { label: "sizeable", toLabel: "sizable", copy: "sizeable", paste: "sizable" }, },
  skillset: { regex: /skillset/ig, ui: { label: "skillset", toLabel: "skill set", copy: "skillset", paste: "skill set" }, },
  slip_up: { regex: /slip-up/ig, ui: { label: "slip-up", toLabel: "slipup", copy: "slip-up", paste: "slipup" }, },
  smoulder: { regex: /smoulder/ig, ui: { label: "smoulder", toLabel: "smolder", copy: "smoulder", paste: "smolder" }, },
  soft_hearted: { regex: /soft-hearted/ig, ui: { label: "soft-hearted", toLabel: "softhearted", copy: "soft-hearted", paste: "softhearted" }, },
  soul: { regex: /soulmate/ig, ui: { label: "soulmate", toLabel: "soul mate", copy: "soulmate", paste: "soul mate" }, },
  standalone: { regex: /standalone/ig, ui: { label: "standalone", toLabel: "stand-alone", copy: "standalone", paste: "stand-alone" }, },
  strait: { regex: /straightlaced/ig, ui: { label: "straightlaced", toLabel: "straitlaced", copy: "straightlaced", paste: "straitlaced" }, },
  swiss: { regex: /swiss cheese/g, ui: { label: "swiss cheese", toLabel: "Swiss cheese", copy: "swiss cheese", paste: "Swiss cheese" }, },
  tastebud: { regex: /tastebud/ig, ui: { label: "tastebud", toLabel: "taste bud", copy: "tastebud", paste: "taste bud" }, },
  tete_a_tete: { regex: /tete-a-tete/ig, ui: { label: "tete-a-tete", toLabel: "tête-à-tête", copy: "tete-a-tete", paste: "tête-à-tête" }, },
  timeframe: { regex: /timeframe/ig, ui: { label: "timeframe", toLabel: "time frame", copy: "timeframe", paste: "time frame" }, },
  tipoff: { regex: /tipoff/ig, ui: { label: "tipoff", toLabel: "tip-off", copy: "tipoff", paste: "tip-off" }, },
  travelling: { regex: /travelling/ig, ui: { label: "travelling", toLabel: "traveling", copy: "travelling", paste: "traveling" }, },
  travelled: { regex: /travelled/ig, ui: { label: "travelled", toLabel: "traveler", copy: "travelled", paste: "traveled" }, },
  traveller: { regex: /traveller/ig, ui: { label: "traveller", toLabel: "traveler", copy: "traveller", paste: "traveler" }, },
  twentyfourseven: { regex: /twenty-four-seven/ig, ui: { label: "twenty-four-seven", toLabel: "twenty-four seven", copy: "twenty-four-seven", paste: "twenty-four seven" }, },
  
  // U through Z
  underaged: { regex: /underaged/ig, ui: { label: "underaged", toLabel: "underage", copy: "underaged", paste: "underage" }, },
  vice_versa: { regex: /vice-versa/ig, ui: { label: "vice-versa", toLabel: "vice versa", copy: "vice-versa", paste: "vice versa" }, },
  wellkempt: { regex: /well-kempt/ig, ui: { label: "well-kempt", toLabel: "well-kept", copy: "well-kempt", paste: "well-kept" }, },
  wishlist: { regex: /wishlist/ig, ui: { label: "wishlist", toLabel: "wish list", copy: "wishlist", paste: "wish list" }, },
  woah: { regex: /woah/ig, ui: { label: "woah", toLabel: "whoa", copy: "woah", paste: "whoa" }, },
  worshiping: { regex: /worshiping/ig, ui: { label: "worshiping", toLabel: "worshipping", copy: "worshiping", paste: "worshipping" }, },
  worshiper: { regex: /worshiper/ig, ui: { label: "worshiper", toLabel: "worshipper", copy: "worshiper", paste: "worshipper" }, },
  
  // Compare similar words
  afterwards: { regex: /afterwards/ig, ui: { label: "afterwards (compare: afterward)", copy: "afterwards" }, },
  afterward: { regex: /afterward($|[^s])/ig, ui: { label: "afterward (compare: afterwards)", copy: "afterward[^s]" }, },
  anymore: { regex: /anymore/ig, ui: { label: "anymore (compare: any more)", copy: "anymore" }, },
  any_more: { regex: /any more/ig, ui: { label: "any more (compare: anymore)", copy: "any more" }, },
  further: { regex: /further/ig, ui: { label: "further", copy: "further (compare: farther)" }, },
  farther: { regex: /farther/ig, ui: { label: "farther", copy: "farther (compare: further)" }, },
  towards: { regex: /towards/ig, ui: { label: "towards (compare: toward)", copy: "towards" }, },
  toward: { regex: /toward($|[^s])/ig, ui: { label: "toward (compare: towards)", copy: "toward[^s]" }, },
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
