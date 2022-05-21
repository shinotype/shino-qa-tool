const Punctuation = Symbol("punctuation");
const Spelling = Symbol("spelling");
const WordsToCheck = Symbol("wordstocheck");
const Misc = Symbol("misc");

export type IssueId = keyof typeof idlessIssues;
export type Issues = { [key in IssueId]: Issue };
export interface Issue {
  id: IssueId,
  regex: RegExp,
  ui: {
    label: string,
    copy?: string,
    paste?: string,
    checkTypes: any,
  }
}

const idlessIssues = {
  space: { regex: /[ ]{2}/g, ui: { label: "Double spaces", copy: "  ", checkTypes: [Punctuation], }, },
  apostrophe: { regex: /'/g, ui: { label: "'", copy: "\\\'", checkTypes: [Punctuation], }, },
  quote: { regex: /"/g, ui: { label: "\"", copy: "\\\"", checkTypes: [Punctuation], }, },
  too: { regex: /, too\b/ig, ui: { label: ", too", copy: ", too\\b", checkTypes: [Punctuation], }, },
  either: { regex: /, either/ig, ui: { label: ", either", copy: ", either", checkTypes: [Punctuation], }, },
  bang: { regex: /!\?/g, ui: { label: "!? → ?!", copy: "!?", checkTypes: [Punctuation], }, },
  bang2: { regex: /([^!]|^)!!([^!]|$)/g, ui: { label: "!! → ! or !!!", copy: "!!", checkTypes: [Punctuation], }, },
  ellipsis1: { regex: /\.\.\.\./g, ui: { label: "....", copy: "....", checkTypes: [Punctuation], }, },
  ellipsis2: { regex: /\.\.\. [a-z]/g, ui: { label: "... a", copy: "\\.\\.\\. [a-z]", checkTypes: [Punctuation], }, },
  ellipsis3: { regex: /\.\.\.[A-Z]/g, ui: { label: "...A", copy: "\\.\\.\\.[A-Z]", checkTypes: [Punctuation], }, },
  ellipsis4: { regex: /…/g, ui: { label: "… (symbol)", copy: "…", paste: "...", checkTypes: [Punctuation], }, },
  emdash1: { regex: /— /g, ui: { label: "—[space]", copy: "— ", checkTypes: [Punctuation], }, },
  emdash2: { regex: / —/g, ui: { label: "[space]—", copy: " —", checkTypes: [Punctuation], }, },
  causepos: { regex: /‘cause/ig, ui: { label: "‘cause → ’cause", copy: "‘cause", paste: "’cause", checkTypes: [Punctuation], }, },
  suppos: { regex: /‘sup/ig, ui: { label: "‘sup → ’sup", copy: "‘sup", paste: "’sup", checkTypes: [Punctuation], }, },
  empos: { regex: /‘em/ig, ui: { label: "‘em → ’em", copy: "‘em", paste: "’em", checkTypes: [Punctuation], }, },
  startquote: { regex: /”[^“]*?”/g, ui: { label: "Missing start quotes", copy: "”[^“]*?”", checkTypes: [Punctuation], }, },
  endquote: { regex: /“[^”]*?“/g, ui: { label: "Missing end quotes", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },

  absent_minded: { regex: /absent-minded/ig, ui: { label: "absent-minded → absentminded", copy: "absent-minded", paste: "absentminded", checkTypes: [Punctuation], }, },
  blood_red: { regex: /blood-red/ig, ui: { label: "blood-red → bloodred", copy: "blood-red", paste: "bloodred", checkTypes: [Punctuation], }, },
  blood_sucking: { regex: /blood-sucking/ig, ui: { label: "blood-sucking → bloodsucking", copy: "blood-sucking", paste: "bloodsucking", checkTypes: [Punctuation], }, },
  crossdress: { regex: /crossdress/ig, ui: { label: "crossdress → cross-dress", copy: "crossdress", paste: "cross-dress", checkTypes: [Punctuation], }, },
  cross_section: { regex: /cross-section/ig, ui: { label: "cross-section → cross section", copy: "cross-section", paste: "cross section", checkTypes: [Punctuation], }, },
  crystal_clear: { regex: /crystal-clear/ig, ui: { label: "crystal-clear → crystal clear", copy: "crystal-clear", paste: "crystal clear", checkTypes: [Punctuation], }, },
  dead_set: { regex: /dead-set/ig, ui: { label: "dead-set → dead set", copy: "dead-set", paste: "dead set", checkTypes: [Punctuation], }, },
  dealbreaker: { regex: /dealbreaker/ig, ui: { label: "dealbreaker → deal-breaker", copy: "dealbreaker", paste: "deal-breaker", checkTypes: [Punctuation], }, },
  duty_bound: { regex: /duty-bound/ig, ui: { label: "duty-bound → duty bound", copy: "duty-bound", paste: "duty bound", checkTypes: [Punctuation], }, },
  hand_pick: { regex: /hand-pick/ig, ui: { label: "hand-pick → handpick", copy: "hand-pick", paste: "handpick", checkTypes: [Punctuation], }, },
  hardpressed: { regex: /hardpressed/ig, ui: { label: "hardpressed → hard-pressed", copy: "hardpressed", paste: "hard-pressed", checkTypes: [Punctuation], }, },
  hard_working: { regex: /hard-working/ig, ui: { label: "hard-working → hardworking", copy: "hard-working", paste: "hardworking", checkTypes: [Punctuation], }, },
  iron_fisted: { regex: /iron-fisted/ig, ui: { label: "iron-fisted → ironfisted", copy: "iron-fisted", paste: "ironfisted", checkTypes: [Punctuation], }, },
  kind_hearted: { regex: /kind-hearted/ig, ui: { label: "kind-hearted → kindhearted", copy: "kind-hearted", paste: "kindhearted", checkTypes: [Punctuation], }, },
  knowhow: { regex: /knowhow/ig, ui: { label: "knowhow → know-how", copy: "knowhow", paste: "know-how", checkTypes: [Punctuation], }, },
  laidback: { regex: /laidback/ig, ui: { label: "laidback → laid-back", copy: "laidback", paste: "laid-back", checkTypes: [Punctuation], }, },
  massproduce: { regex: /mass produce/ig, ui: { label: "mass produce → mass-produce", copy: "mass produce", paste: "mass-produce", checkTypes: [Punctuation], }, },
  mass_production: { regex: /mass-production/ig, ui: { label: "mass-production → mass production", copy: "mass-production", paste: "mass production", checkTypes: [Punctuation], }, },
  mid_morning: { regex: /mid-morning/i, ui: { label: "mid-morning → midmorning", copy: "mid-morning", paste: "midmorning", checkTypes: [Punctuation], }, },
  mid_sentence: { regex: /mid-sentence/ig, ui: { label: "mid-sentence → midsentence", copy: "mid-sentence", paste: "midsentence", checkTypes: [Punctuation], }, },
  off_handed: { regex: /off-handed/ig, ui: { label: "off-handed → offhanded", copy: "off-handed", paste: "offhanded", checkTypes: [Punctuation], }, },
  on_stage: { regex: /on-stage/ig, ui: { label: "on-stage → onstage", copy: "on-stage", paste: "onstage", checkTypes: [Punctuation], }, },
  re_examine: { regex: /re-examine/ig, ui: { label: "re-examine → reexamine", copy: "re-examine", paste: "reexamine", checkTypes: [Punctuation], }, },
  roleplay: { regex: /roleplay/ig, ui: { label: "roleplay → role-play", copy: "roleplay", paste: "role-play", checkTypes: [Punctuation], }, },
  semi_circle: { regex: /semi-circle/ig, ui: { label: "semi-circle → semicircle", copy: "“semi-circle", paste: "semicircle", checkTypes: [Punctuation], }, },
  singlehanded: { regex: /singlehanded/ig, ui: { label: "singlehanded → single-handed", copy: "singlehanded", paste: "single-handed", checkTypes: [Punctuation], }, },
  singleminded: { regex: /singleminded/ig, ui: { label: "singleminded → single-minded", copy: "singleminded", paste: "single-minded", checkTypes: [Punctuation], }, },
  slip_up: { regex: /slip-up/ig, ui: { label: "slip-up → slipup", copy: "slip-up", paste: "slipup", checkTypes: [Punctuation], }, },
  tipoff: { regex: /tipoff/ig, ui: { label: "tipoff → tip-off", copy: "tipoff", paste: "tip-off", checkTypes: [Punctuation], }, },
  vice_versa: { regex: /vice-versa/ig, ui: { label: "vice-versa → vice versa", copy: "vice-versa", paste: "vice versa", checkTypes: [Punctuation], }, },

  first_hand: { regex: /first-hand/ig, ui: { label: "first-hand → firsthand", copy: "first-hand", checkTypes: [Spelling], }, },
  mid_twenties: { regex: /mid-twenties/ig, ui: { label: "mid-twenties → midtwenties", copy: "mid-twenties", checkTypes: [Spelling], }, },
  mid_thirties: { regex: /mid-thirties/ig, ui: { label: "mid-thirties → midthirties", copy: "mid-thirties", checkTypes: [Spelling], }, },
  mid_forties: { regex: /mid-forties/ig, ui: { label: "mid-forties → midforties", copy: "mid-forties", checkTypes: [Spelling], }, },
  one_time: { regex: /one-time/ig, ui: { label: "one-time → onetime", copy: "one-time", checkTypes: [Spelling], }, },
  second_hand: { regex: /second-hand/ig, ui: { label: "second-hand → secondhand", copy: "second-hand", checkTypes: [Spelling], }, },
  twentyfourseven: { regex: /twenty-four-seven/ig, ui: { label: "twenty-four-seven → twenty-four seven", copy: "twenty-four-seven", checkTypes: [Spelling], }, },

  alright: { regex: /alright/ig, ui: { label: "alright → all right", copy: "alright", paste: "all right", checkTypes: [Spelling], }, },
  bathhouse: { regex: /bath house/ig, ui: { label: "bath house → bathhouse", copy: "bath house", paste: "bathhouse", checkTypes: [Spelling], }, },
  flipside: { regex: /flipside/ig, ui: { label: "flipside → flip side", copy: "flipside", paste: "flip side", checkTypes: [Spelling], }, },
  frontlines: { regex: /frontlines/ig, ui: { label: "frontlines → front lines", copy: "frontlines", paste: "front lines", checkTypes: [Spelling], }, },
  goodwill: { regex: /good will/ig, ui: { label: "good will → goodwill", copy: "good will", paste: "goodwill", checkTypes: [Spelling], }, },
  laugh1: { regex: /haha/ig, ui: { label: "haha → ha ha", copy: "haha", paste: "ha ha", checkTypes: [Spelling], }, },
  laugh2: { regex: /heehee/ig, ui: { label: "heehee → hee hee", copy: "heehee", paste: "hee hee", checkTypes: [Spelling], }, },
  keychain: { regex: /keychain/ig, ui: { label: "keychain → key chain", copy: "keychain", paste: "key chain", checkTypes: [Spelling], }, },
  lightbulb: { regex: /lightbulb/ig, ui: { label: "lightbulb → light bulb", copy: "lightbulb", paste: "light bulb", checkTypes: [Spelling], }, },
  nm: { regex: /nevermind/ig, ui: { label: "nevermind → never mind", copy: "nevermind", paste: "never mind", checkTypes: [Spelling], }, },
  photoshoot: { regex: /photoshoot/ig, ui: { label: "photoshoot → photo shoot", copy: "photoshoot", paste: "photo shoot", checkTypes: [Spelling], }, },
  shockwave: { regex: /shockwave/ig, ui: { label: "shockwave → shock wave", copy: "shockwave", paste: "shock wave", checkTypes: [Spelling], }, },
  skillset: { regex: /skillset/ig, ui: { label: "skillset → skill set", copy: "skillset", paste: "skill set", checkTypes: [Spelling], }, },
  soul: { regex: /soulmate/ig, ui: { label: "soulmate → soul mate", copy: "soulmate", paste: "soul mate", checkTypes: [Spelling], }, },
  tastebud: { regex: /tastebud/ig, ui: { label: "tastebud → taste bud", copy: "tastebud", paste: "taste bud", checkTypes: [Spelling], }, },
  timeframe: { regex: /timeframe/ig, ui: { label: "timeframe → time frame", copy: "timeframe", paste: "time frame", checkTypes: [Spelling], }, },
  wishlist: { regex: /wishlist/ig, ui: { label: "wishlist → wish list", copy: "wishlist", paste: "wish list", checkTypes: [Spelling], }, },

  ack: { regex: /acknowledgement/ig, ui: { label: "acknowledgement → acknowledgment", copy: "acknowledgement", paste: "acknowledgment", checkTypes: [Spelling], }, },
  accidently: { regex: /accidently/ig, ui: { label: "accidently → accidentally", copy: "accidently", paste: "accidentally", checkTypes: [Spelling], }, },
  ambiance: { regex: /ambiance/ig, ui: { label: "ambiance → ambience", copy: "ambiance", paste: "ambience", checkTypes: [Spelling], }, },
  axe: { regex: /\bax\b/ig, ui: { label: "ax → axe", copy: "\\bax\\b", paste: "axe", checkTypes: [Spelling], }, },
  cafe: { regex: /\bcafe\b/ig, ui: { label: "cafe → café", copy: "cafe", paste: "café", checkTypes: [Spelling], }, },
  concensus: { regex: /concensus/ig, ui: { label: "concensus → consensus", copy: "concensus", paste: "consensus", checkTypes: [Spelling], }, },
  crystalized: { regex: /crystalized/ig, ui: { label: "crystalized → crystallized", copy: "crystalized", paste: "crystallized", checkTypes: [Spelling], }, },
  dieing: { regex: /dieing/ig, ui: { label: "dieing → dying", copy: "dieing", paste: "dying", checkTypes: [Spelling], }, },
  forsaw: { regex: /forsaw/ig, ui: { label: "forsaw → foresaw", copy: "forsaw", paste: "foresaw", checkTypes: [Spelling], }, },
  forsee: { regex: /forsee/ig, ui: { label: "forsee → foresee", copy: "forsee", paste: "foresee", checkTypes: [Spelling], }, },
  geez: { regex: /\bgeez\b/ig, ui: { label: "geez → jeez", copy: "geez", paste: "jeez", checkTypes: [Spelling], }, },
  grevious: { regex: /grevious/ig, ui: { label: "grevious → grievous", copy: "grevious", paste: "grievous", checkTypes: [Spelling], }, },
  grinded: { regex: /grinded/ig, ui: { label: "grinded → ground", copy: "grinded", paste: "ground", checkTypes: [Spelling], }, },
  guerrila: { regex: /guerrila/ig, ui: { label: "guerrila → guerrilla", copy: "guerrila", paste: "guerrilla", checkTypes: [Spelling], }, },
  guerilla: { regex: /guerilla/ig, ui: { label: "guerilla → guerrilla", copy: "guerilla", paste: "guerrilla", checkTypes: [Spelling], }, },
  judge: { regex: /judgement/ig, ui: { label: "judgement → judgment", copy: "judgement", paste: "judgment", checkTypes: [Spelling], }, },
  mischevious: { regex: /mischevious/ig, ui: { label: "mischevious → mischievous", copy: "mischevious", paste: "mischievous", checkTypes: [Spelling], }, },
  ocher: { regex: /ochre/ig, ui: { label: "ochre → ocher", copy: "ochre", paste: "ocher", checkTypes: [Spelling], }, },
  omelette: { regex: /omelette/ig, ui: { label: "omelette → omelet", copy: "omelette", paste: "omelet", checkTypes: [Spelling], }, },
  publically: { regex: /publically/ig, ui: { label: "publically → publicly", copy: "publically", paste: "publicly", checkTypes: [Spelling], }, },
  strait: { regex: /straightlaced/ig, ui: { label: "straightlaced → straitlaced", copy: "straightlaced", paste: "straitlaced", checkTypes: [Spelling], }, },
  underaged: { regex: /underaged/ig, ui: { label: "underaged → underage", copy: "underaged", paste: "underage", checkTypes: [Spelling], }, },
  kempt: { regex: /well-kempt/ig, ui: { label: "well-kempt → well-kept", copy: "well-kempt", paste: "well-kept", checkTypes: [Spelling], }, },
  woah: { regex: /woah/ig, ui: { label: "woah → whoa", copy: "woah", paste: "whoa", checkTypes: [Spelling], }, },
  worshiping: { regex: /worshiping/ig, ui: { label: "worshiping → worshipping", copy: "worshiping", paste: "worshipping", checkTypes: [Spelling], }, },
  worshiper: { regex: /worshiper/ig, ui: { label: "worshiper → worshipper", copy: "worshiper", paste: "worshipper", checkTypes: [Spelling], }, },

  aircon: { regex: /aircon/ig, ui: { label: "aircon → AC or air conditioning", copy: "aircon", checkTypes: [Spelling], }, },
  apologise: { regex: /apologise/ig, ui: { label: "apologise → apologize", copy: "apologise", paste: "apologize", checkTypes: [Spelling], }, },
  cancelled: { regex: /cancelled/ig, ui: { label: "cancelled → canceled", copy: "cancelled", paste: "canceled", checkTypes: [Spelling], }, },
  cancelling: { regex: /cancelling/ig, ui: { label: "cancelling → canceling", copy: "cancelling", paste: "canceling", checkTypes: [Spelling], }, },
  cancelation: { regex: /cancelation/ig, ui: { label: "cancelation → cancellation", copy: "cancelation", paste: "cancellation", checkTypes: [Spelling], }, },
  colour: { regex: /colour/ig, ui: { label: "colour → color", copy: "colour", paste: "color", checkTypes: [Spelling], }, },
  centre: { regex: /centre/ig, ui: { label: "centre → center", copy: "centre", paste: "center", checkTypes: [Spelling], }, },
  defence: { regex: /defence/ig, ui: { label: "defence → defense", copy: "defence", paste: "defense", checkTypes: [Spelling], }, },
  emphasise: { regex: /emphasise/ig, ui: { label: "emphasise → emphasize", copy: "emphasise", paste: "emphasize", checkTypes: [Spelling], }, },
  grey: { regex: /grey/ig, ui: { label: "grey → gray", copy: "grey", paste: "gray", checkTypes: [Spelling], }, },
  meagre: { regex: /meagre/ig, ui: { label: "meagre → meager", copy: "meagre", paste: "meager", checkTypes: [Spelling], }, },
  miniscule: { regex: /miniscule/ig, ui: { label: "miniscule → minuscule", copy: "miniscule", paste: "minuscule", checkTypes: [Spelling], }, },
  moustache: { regex: /moustache/ig, ui: { label: "moustache → mustache", copy: "moustache", paste: "mustache", checkTypes: [Spelling], }, },
  offence: { regex: /offence/ig, ui: { label: "offence → offense", copy: "offence", paste: "offense", checkTypes: [Spelling], }, },
  plough: { regex: /plough/ig, ui: { label: "plough → plow", copy: "plough", paste: "plow", checkTypes: [Spelling], }, },
  signalling: { regex: /signalling/ig, ui: { label: "signalling → signaling", copy: "signalling", paste: "signaling", checkTypes: [Spelling], }, },
  sizeable: { regex: /sizeable/ig, ui: { label: "sizeable → sizable", copy: "sizeable", paste: "sizable", checkTypes: [Spelling], }, },
  smoulder: { regex: /smoulder/ig, ui: { label: "smoulder → smolder", copy: "smoulder", paste: "smolder", checkTypes: [Spelling], }, },
  travelling: { regex: /travelling/ig, ui: { label: "travelling → traveling", copy: "travelling", paste: "traveling", checkTypes: [Spelling], }, },
  traveller: { regex: /traveller/ig, ui: { label: "traveller → traveler", copy: "traveller", paste: "traveler", checkTypes: [Spelling], }, },

  frontline1: { regex: /frontline/ig, ui: { label: "frontline (adjective)", copy: "frontline", checkTypes: [WordsToCheck], }, },
  frontline2: { regex: /front line/ig, ui: { label: "front line (noun)", copy: "front line", checkTypes: [WordsToCheck], }, },
  grit: { regex: /\bgrit\b/ig, ui: { label: "grit (should be gritted, past tense?)", copy: "grit\\b", checkTypes: [WordsToCheck], }, },
  heroin: { regex: /heroin[^e]/ig, ui: { label: "heroin (heroine?)", copy: "heroin\\e", checkTypes: [WordsToCheck], }, },
  lead: { regex: /\blead\b/ig, ui: { label: "lead (should be led, past tense?)", copy: "\\blead\\b", checkTypes: [WordsToCheck], }, },
  principal: { regex: /principal/ig, ui: { label: "principal (head of a school)", copy: "principal", checkTypes: [WordsToCheck], }, },
  principle: { regex: /principle/ig, ui: { label: "principle (concept)", copy: "principle", checkTypes: [WordsToCheck], }, },
  psych: { regex: /psych[^e]\b/ig, ui: { label: "psych (verb)", copy: "\\bpsych[^e]", checkTypes: [WordsToCheck], }, },
  psyche: { regex: /\bpsyche/ig, ui: { label: "psyche (noun)", copy: "\\bpsyche", checkTypes: [WordsToCheck], }, },
  pubic: { regex: /pubic/ig, ui: { label: "pubic (public?)", copy: "pubic", checkTypes: [WordsToCheck], }, },
  sheath: { regex: /sheath[^e]/ig, ui: { label: "sheath (noun)", copy: "sheath[^e]", checkTypes: [WordsToCheck], }, },
  sheathe: { regex: /sheathe/ig, ui: { label: "sheathe (verb)", copy: "sheathe", checkTypes: [WordsToCheck], }, },

  coup: { regex: /coup d’etat/ig, ui: { label: "coup d’etat →  coup d’état", copy: "coup d’etat", paste: "coup d’état", checkTypes: [Spelling], }, },
  dejavu: { regex: /deja vu/ig, ui: { label: "deja vu → déjà vu", copy: "deja vu", paste: "déjà vu", checkTypes: [Spelling], }, },
  gatling: { regex: /gatling gun/g, ui: { label: "gatling gun → Gatling gun", copy: "gatling gun", paste: "Gatling gun", checkTypes: [Spelling], }, },
  fiance: { regex: /\bfiance[^e]/ig, ui: { label: "fiance → fiancé", copy: "\\bfiance[^e]", paste: "fiancé", checkTypes: [Spelling], }, },
  fiancee: { regex: /fiancee/ig, ui: { label: "fiancee → fiancée", copy: "fiancee", paste: "fiancée", checkTypes: [Spelling], }, },
  mache: { regex: /paper mache/ig, ui: { label: "paper mache → paper-mache or papier mâché", copy: "paper mache", checkTypes: [Spelling], }, },
  swiss: { regex: /swiss cheese/g, ui: { label: "swiss cheese → Swiss cheese", copy: "swiss cheese", paste: "Swiss cheese", checkTypes: [Spelling], }, },
  tete_a_tete: { regex: /tete-a-tete/ig, ui: { label: "tete-a-tete → tête-à-tête", copy: "tete-a-tete", paste: "tête-à-tête", checkTypes: [Spelling], }, },
  adverb: { regex: /ly-/ig, ui: { label: "hyphenated averbs (ly-)", copy: "ly-", checkTypes: [Punctuation], }, },
  towards: { regex: /towards/ig, ui: { label: "towards", copy: "towards", checkTypes: [WordsToCheck], }, },
  toward: { regex: /toward($|[^s])/ig, ui: { label: "toward", copy: "toward[^s]", checkTypes: [WordsToCheck], }, },
  afterwards: { regex: /afterwards/ig, ui: { label: "afterwards", copy: "afterwards", checkTypes: [WordsToCheck], }, },
  afterward: { regex: /afterward($|[^s])/ig, ui: { label: "afterward", copy: "afterward[^s]", checkTypes: [WordsToCheck], }, },
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

export interface IssueInstance {
  id: IssueId,
  occurrences: number,
}

export interface UiIssue {
  label: string,
  occurrences: number,
  copy?: string,
  paste?: string,
  checkTypes: any,
}
