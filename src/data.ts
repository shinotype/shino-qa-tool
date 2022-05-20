const Punctuation = Symbol("punctuation");
const Spelling = Symbol("spelling");
const WordsToCheck = Symbol("wordstocheck");
const Misc = Symbol("misc");

export type IssueId = keyof typeof rawIssues;
export type Issues = { [key in IssueId]: Issue };
export interface Issue {
  id: string,
  regex: RegExp,
  ui: {
    label: string,
    copy?: string,
    paste?: string,
    checkTypes: any,
  }
}

const rawIssues = {
  double_spaces: { regex: /[ ]{2}/g, ui: { label: "Double spaces", copy: "  ", checkTypes: [Punctuation], }, },
  single_quote: { regex: /'/g, ui: { label: "'", copy: "\\\'", checkTypes: [Punctuation], }, },
  double_quote: { regex: /"/g, ui: { label: "\"", copy: "\\\"", checkTypes: [Punctuation], }, },
  // single_quote: { regex: /'/g, ui: { label: "'", copy: "\\\'", checkTypes: [Punctuation], }, },
  comma_too: { regex: /, too\b/ig, ui: { label: ", too", copy: ", too\\b", checkTypes: [Punctuation], }, },
  comma_either: { regex: /, either/ig, ui: { label: ", either", copy: ", either", checkTypes: [Punctuation], }, },
};

const _ = rawIssues as { [key: string]: RawIssueData };

type NoId<T> = { [key in keyof T]: Omit<T[key], 'id'> };
function idify2(rawIssues: NoId<Issues>): Issues {
  const issues: Partial<Issues> = {};
  for (const key in rawIssues) {
    const id = key as IssueId;
    issues[id] = { id, ...rawIssues[id] as Omit<Issue, 'id'> };
  }
  return issues as Issues;
}

export const issues = idify2(rawIssues);





type RawIssueData = Omit<Issue, "id">;

const rawData: RawIssueData[] = [
  { regex: /[ ]{2}/g, ui: { label: "Double spaces", copy: "  ", checkTypes: [Punctuation], }, },
  { regex: /'/g, ui: { label: "'", copy: "\\\'", checkTypes: [Punctuation], }, },
  { regex: /"/g, ui: { label: "\"", copy: "\\\"", checkTypes: [Punctuation], }, },
  { regex: /, too\b/ig, ui: { label: ", too", copy: ", too\\b", checkTypes: [Punctuation], }, },
  { regex: /, either/ig, ui: { label: ", either", copy: ", either", checkTypes: [Punctuation], }, },
  { regex: /!\?/g, ui: { label: "!? → ?!", copy: "!?", checkTypes: [Punctuation], }, },
  { regex: /([^!]|^)!!([^!]|$)/g, ui: { label: "!! → ! or !!!", copy: "!!", checkTypes: [Punctuation], }, },
  { regex: /\.\.\.\./g, ui: { label: "....", copy: "....", checkTypes: [Punctuation], }, },
  { regex: /\.\.\. [a-z]/g, ui: { label: "... a", copy: "\\.\\.\\. [a-z]", checkTypes: [Punctuation], }, },
  { regex: /\.\.\.[A-Z]/g, ui: { label: "...A", copy: "\\.\\.\\.[A-Z]", checkTypes: [Punctuation], }, },
  { regex: /…/g, ui: { label: "… (symbol)", copy: "…", paste: "...", checkTypes: [Punctuation], }, },
  { regex: /— /g, ui: { label: "—[space]", copy: "— ", checkTypes: [Punctuation], }, },
  { regex: / —/g, ui: { label: "[space]—", copy: " —", checkTypes: [Punctuation], }, },
  { regex: /‘cause/ig, ui: { label: "‘cause → ’cause", copy: "‘cause", paste: "’cause", checkTypes: [Punctuation], }, },
  { regex: /‘sup/ig, ui: { label: "‘sup → ’sup", copy: "‘sup", paste: "’sup", checkTypes: [Punctuation], }, },
  { regex: /‘em/ig, ui: { label: "‘em → ’em", copy: "‘em", paste: "’em", checkTypes: [Punctuation], }, },
  { regex: /”[^“]*?”/g, ui: { label: "Missing start quotes", copy: "”[^“]*?”", checkTypes: [Punctuation], }, },
  { regex: /“[^”]*?“/g, ui: { label: "Missing end quotes", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },

  { regex: /absent-minded/ig, ui: { label: "absent-minded → absentminded", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /blood-red/ig, ui: { label: "blood-red → bloodred", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /blood-sucking/ig, ui: { label: "blood-sucking → bloodsucking", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /crossdress/ig, ui: { label: "crossdress → cross-dress", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /cross-section/ig, ui: { label: "cross-section → cross section", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /crystal-clear/ig, ui: { label: "crystal-clear → crystal clear", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /dead-set/ig, ui: { label: "dead-set → dead set", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /dealbreaker/ig, ui: { label: "dealbreaker → deal-breaker", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /duty-bound/ig, ui: { label: "duty-bound → duty bound", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /hand-pick/ig, ui: { label: "hand-pick → handpick", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /hardpressed/ig, ui: { label: "hardpressed → hard-pressed", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /hard-working/ig, ui: { label: "hard-working → hardworking", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /iron-fisted/ig, ui: { label: "iron-fisted → ironfisted", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /kind-hearted/ig, ui: { label: "kind-hearted → kindhearted", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /knowhow/ig, ui: { label: "knowhow → know-how", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /laidback/ig, ui: { label: "laidback → laid-back", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /mass produce/ig, ui: { label: "mass produce → mass-produce", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /mass-production/ig, ui: { label: "mass-production → mass production", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /mid-morning/i, ui: { label: "mid-morning → midmorning", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /mid-sentence/ig, ui: { label: "mid-sentence → midsentence", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /off-handed/ig, ui: { label: "off-handed → offhanded", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /on-stage/ig, ui: { label: "on-stage → onstage", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /re-examine/ig, ui: { label: "re-examine → reexamine", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /roleplay/ig, ui: { label: "roleplay → role-play", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /semi-circle/ig, ui: { label: "semi-circle → semicircle", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /singlehanded/ig, ui: { label: "singlehanded → single-handed", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /singleminded/ig, ui: { label: "singleminded → single-minded", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /slip-up/ig, ui: { label: "slip-up → slipup", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /tipoff/ig, ui: { label: "tipoff → tip-off", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { regex: /vice-versa/ig, ui: { label: "vice-versa → vice versa", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },

  { regex: /alright/ig, ui: { label: "alright → all right", copy: "alright", checkTypes: [Punctuation], }, },
  { regex: /bath house/ig, ui: { label: "bath house → bathhouse", copy: "bath house", checkTypes: [Punctuation], }, },
  { regex: /flipside/ig, ui: { label: "flipside → flip side", copy: "flipside", checkTypes: [Punctuation], }, },
  { regex: /frontlines/ig, ui: { label: "frontlines → front lines", copy: "frontlines", checkTypes: [Punctuation], }, },
  { regex: /good will/ig, ui: { label: "good will → goodwill", copy: "good will", checkTypes: [Punctuation], }, },
  { regex: /haha/ig, ui: { label: "haha → ha ha", copy: "haha", checkTypes: [Punctuation], }, },
  { regex: /heehee/ig, ui: { label: "heehee → hee hee", copy: "heehee", checkTypes: [Punctuation], }, },
  { regex: /keychain/ig, ui: { label: "keychain → key chain", copy: "keychain", checkTypes: [Punctuation], }, },
  { regex: /lightbulb/ig, ui: { label: "lightbulb → light bulb", copy: "lightbulb", checkTypes: [Punctuation], }, },
  { regex: /nevermind/ig, ui: { label: "nevermind → never mind", copy: "nevermind", checkTypes: [Punctuation], }, },
  { regex: /photoshoot/ig, ui: { label: "photoshoot → photo shoot", copy: "photoshoot", checkTypes: [], }, },
  { regex: /shockwave/ig, ui: { label: "shockwave → shock wave", copy: "shockwave", checkTypes: [], }, },
  { regex: /skillset/ig, ui: { label: "skillset → skill set", copy: "skillset", checkTypes: [], }, },
  { regex: /soulmate/ig, ui: { label: "soulmate → soul mate", copy: "soulmate", checkTypes: [], }, },
  { regex: /tastebud/ig, ui: { label: "tastebud → taste bud", copy: "tastebud", checkTypes: [], }, },
  { regex: /timeframe/ig, ui: { label: "timeframe → time frame", copy: "timeframe", checkTypes: [], }, },
  { regex: /wishlist/ig, ui: { label: "wishlist → wish list", copy: "wishlist", checkTypes: [], }, },

  { regex: /acknowledgement/ig, ui: { label: "acknowledgement → acknowledgment", copy: "", checkTypes: [], }, },
  { regex: /accidently/ig, ui: { label: "accidently → accidentally", copy: "", checkTypes: [], }, },
  { regex: /ambiance/ig, ui: { label: "ambiance → ambience", copy: "", checkTypes: [], }, },
  { regex: /\bax\b/ig, ui: { label: "ax → axe", copy: "", checkTypes: [], }, },
  { regex: /\bcafe\b/ig, ui: { label: "cafe → café", copy: "", checkTypes: [], }, },
  { regex: /concensus/ig, ui: { label: "concensus → consensus", copy: "", checkTypes: [], }, },
  { regex: /crystalized/ig, ui: { label: "crystalized → crystallized", copy: "", checkTypes: [], }, },
  { regex: /dieing/ig, ui: { label: "dieing → dying", copy: "", checkTypes: [], }, },
  { regex: /forsaw/ig, ui: { label: "forsaw → foresaw", copy: "", checkTypes: [], }, },
  { regex: /forsee/ig, ui: { label: "forsee → foresee", copy: "", checkTypes: [], }, },
  { regex: /\bgeez\b/ig, ui: { label: "geez → jeez", copy: "", checkTypes: [], }, },
  { regex: /grevious/ig, ui: { label: "grevious → grievous", copy: "", checkTypes: [], }, },
  { regex: /grinded/ig, ui: { label: "grinded → ground", copy: "", checkTypes: [], }, },
  { regex: /guerrila/ig, ui: { label: "guerrila → guerrilla", copy: "", checkTypes: [], }, },
  { regex: /guerilla/ig, ui: { label: "guerilla → guerrilla", copy: "", checkTypes: [], }, },
  { regex: /judgement/ig, ui: { label: "judgement → judgment", copy: "", checkTypes: [], }, },
  { regex: /mischevious/ig, ui: { label: "mischevious → mischievous", copy: "", checkTypes: [], }, },
  { regex: /ochre/ig, ui: { label: "ochre → ocher", copy: "", checkTypes: [], }, },
  { regex: /omelette/ig, ui: { label: "omelette → omelet", copy: "", checkTypes: [], }, },
  { regex: /publically/ig, ui: { label: "publically → publicly", copy: "", checkTypes: [], }, },
  { regex: /straightlaced/ig, ui: { label: "straightlaced → straitlaced", copy: "", checkTypes: [], }, },
  { regex: /underaged/ig, ui: { label: "underaged → underage", copy: "", checkTypes: [], }, },
  { regex: /well-kempt/ig, ui: { label: "well-kempt → well-kept", copy: "", checkTypes: [], }, },
  { regex: /woah/ig, ui: { label: "woah → whoa", copy: "", checkTypes: [], }, },
  { regex: /worshiping/ig, ui: { label: "worshiping → worshipping", copy: "", checkTypes: [], }, },
  { regex: /worshiper/ig, ui: { label: "worshiper → worshipper", copy: "", checkTypes: [], }, },

  { regex: /aircon/ig, ui: { label: "aircon → AC or air conditioning", copy: "", checkTypes: [], }, },
  { regex: /apologise/ig, ui: { label: "apologise → apologize", copy: "", checkTypes: [], }, },
  { regex: /cancelled/ig, ui: { label: "cancelled → canceled", copy: "", checkTypes: [], }, },
  { regex: /cancelling/ig, ui: { label: "cancelling → canceling", copy: "", checkTypes: [], }, },
  { regex: /cancelation/ig, ui: { label: "cancelation → cancellation", copy: "", checkTypes: [], }, },
  { regex: /colour/ig, ui: { label: "colour → color", copy: "", checkTypes: [], }, },
  { regex: /centre/ig, ui: { label: "centre → center", copy: "", checkTypes: [], }, },
  { regex: /defence/ig, ui: { label: "defence → defense", copy: "", checkTypes: [], }, },
  { regex: /emphasise/ig, ui: { label: "emphasise → emphasize", copy: "", checkTypes: [], }, },
  { regex: /grey/ig, ui: { label: "grey → gray", copy: "", checkTypes: [], }, },
  { regex: /meagre/ig, ui: { label: "meagre → meager", copy: "", checkTypes: [], }, },
  { regex: /miniscule/ig, ui: { label: "miniscule → minuscule", copy: "", checkTypes: [], }, },
  { regex: /moustache/ig, ui: { label: "moustache → mustache", copy: "", checkTypes: [], }, },
  { regex: /offence/ig, ui: { label: "offence → offense", copy: "", checkTypes: [], }, },
  { regex: /plough/ig, ui: { label: "plough → plow", copy: "", checkTypes: [], }, },
  { regex: /signalling/ig, ui: { label: "signalling → signaling", copy: "", checkTypes: [], }, },
  { regex: /sizeable/ig, ui: { label: "sizeable → sizable", copy: "", checkTypes: [], }, },
  { regex: /smoulder/ig, ui: { label: "smoulder → smolder", copy: "", checkTypes: [], }, },
  { regex: /travelling/ig, ui: { label: "travelling → traveling", copy: "", checkTypes: [], }, },
  { regex: /traveller/ig, ui: { label: "traveller → traveler", copy: "", checkTypes: [], }, },

  { regex: /frontline/ig, ui: { label: "frontline (adjective)", copy: "", checkTypes: [], }, },
  { regex: /front line/ig, ui: { label: "front line (noun)", copy: "", checkTypes: [], }, },
  { regex: /\bgrit\b/ig, ui: { label: "grit (should be gritted, past tense?)", copy: "", checkTypes: [], }, },
  { regex: /heroin[^e]/ig, ui: { label: "heroin (heroine?)", copy: "", checkTypes: [], }, },
  { regex: /\blead\b/ig, ui: { label: "lead (should be led, past tense?)", copy: "", checkTypes: [], }, },
  { regex: /principal/ig, ui: { label: "principal (head of a school)", copy: "", checkTypes: [], }, },
  { regex: /principle/ig, ui: { label: "principle (concept)", copy: "", checkTypes: [], }, },
  { regex: /psych[^e]\b/ig, ui: { label: "psych (verb)", copy: "", checkTypes: [], }, },
  { regex: /\bpsyche/ig, ui: { label: "psyche (noun)", copy: "", checkTypes: [], }, },
  { regex: /pubic/ig, ui: { label: "pubic (public?)", copy: "", checkTypes: [], }, },
  { regex: /sheath[^e]/ig, ui: { label: "sheath (noun)", copy: "", checkTypes: [], }, },
  { regex: /sheathe/ig, ui: { label: "sheathe (verb)", copy: "", checkTypes: [], }, },
  { regex: /first-hand/ig, ui: { label: "first-hand → firsthand", copy: "", checkTypes: [], }, },
  { regex: /mid-twenties/ig, ui: { label: "mid-twenties → midtwenties", copy: "", checkTypes: [], }, },
  { regex: /mid-thirties/ig, ui: { label: "mid-thirties → midthirties", copy: "", checkTypes: [], }, },
  { regex: /mid-forties/ig, ui: { label: "mid-forties → midforties", copy: "", checkTypes: [], }, },
  { regex: /one-time/ig, ui: { label: "one-time → onetime", copy: "", checkTypes: [], }, },
  { regex: /second-hand/ig, ui: { label: "second-hand → secondhand", copy: "", checkTypes: [], }, },
  { regex: /twenty-four-seven/ig, ui: { label: "twenty-four-seven → twenty-four seven", copy: "", checkTypes: [], }, },

  { regex: /coup d’etat/ig, ui: { label: "coup d’etat →  coup d’état", copy: "", checkTypes: [], }, },
  { regex: /deja vu/ig, ui: { label: "deja vu → déjà vu", copy: "", checkTypes: [], }, },
  { regex: /gatling gun/g, ui: { label: "gatling gun → Gatling gun", copy: "", checkTypes: [], }, },
  { regex: /\bfiance[^e]/ig, ui: { label: "fiance → fiancé", copy: "", checkTypes: [], }, },
  { regex: /fiancee/ig, ui: { label: "fiancee → fiancée", copy: "", checkTypes: [], }, },
  { regex: /paper mache/ig, ui: { label: "paper mache → paper-mache or papier mâché", copy: "", checkTypes: [], }, },
  { regex: /swiss cheese/g, ui: { label: "swiss cheese → Swiss cheese", copy: "", checkTypes: [], }, },
  { regex: /tete-a-tete/ig, ui: { label: "tete-a-tete → tête-à-tête", copy: "", checkTypes: [], }, },
  { regex: /ly-/ig, ui: { label: "hyphenated averbs (ly-)", copy: "", checkTypes: [], }, },
  { regex: /towards/ig, ui: { label: "towards", copy: "", checkTypes: [], }, },
  { regex: /toward[^s]/ig, ui: { label: "toward", copy: "", checkTypes: [], }, },
  { regex: /afterwards/ig, ui: { label: "afterwards", copy: "", checkTypes: [], }, },
  { regex: /afterward[^s]/ig, ui: { label: "afterward", copy: "", checkTypes: [], }, },
];

function idify(rawIssues: RawIssueData[]): Issue[] {
  const issues: Issue[] = [];
  for (const rawIssue of rawIssues) {
    const id = ('00000' + (issues.length + 1)).slice(-5);
    issues.push({ id, ...rawIssue });
  }
  return issues;
}

export const DATA = idify(rawData);
