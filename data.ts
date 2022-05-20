const Punctuation = Symbol("punctuation");
const Spelling = Symbol("spelling");
const WordsToCheck = Symbol("wordstocheck");
const Misc = Symbol("misc");

export interface IssueData {
  id: string,
  regex: RegExp,
  ui: {
    label: string,
    copy?: string,
    paste?: string,
    checkTypes: any,
  }
}

export const DATA: IssueData[] = [
  { id: "00001", regex: /[ ]{2}/g, ui: { label: "Double spaces", copy: "  ", checkTypes: [Punctuation], }, },
  { id: "00002", regex: /'/g, ui: { label: "'", copy: "\\\'", checkTypes: [Punctuation], }, },
  { id: "00003", regex: /"/g, ui: { label: "\"", copy: "\\\"", checkTypes: [Punctuation], }, },
  { id: "00004", regex: /, too\b/ig, ui: { label: ", too", copy: ", too\\b", checkTypes: [Punctuation], }, },
  { id: "00005", regex: /, either/ig, ui: { label: ", either", copy: ", either", checkTypes: [Punctuation], }, },
  { id: "00006", regex: /!\?/g, ui: { label: "!? → ?!", copy: "!?", checkTypes: [Punctuation], }, },
  { id: "00007", regex: /([^!]|^)!!([^!]|$)/g, ui: { label: "!! → ! or !!!", copy: "!!", checkTypes: [Punctuation], }, },
  { id: "00008", regex: /\.\.\.\./g, ui: { label: "....", copy: "....", checkTypes: [Punctuation], }, },
  { id: "00009", regex: /\.\.\. [a-z]/g, ui: { label: "... a", copy: "\\.\\.\\. [a-z]", checkTypes: [Punctuation], }, },
  { id: "00010", regex: /\.\.\.[A-Z]/g, ui: { label: "...A", copy: "\\.\\.\\.[A-Z]", checkTypes: [Punctuation], }, },
  { id: "00011", regex: /…/g, ui: { label: "… (symbol)", copy: "…", paste: "...", checkTypes: [Punctuation], }, },
  { id: "00012", regex: /— /g, ui: { label: "—[space]", copy: "— ", checkTypes: [Punctuation], }, },
  { id: "00013", regex: / —/g, ui: { label: "[space]—", copy: " —", checkTypes: [Punctuation], }, },
  { id: "00014", regex: /‘cause/ig, ui: { label: "‘cause → ’cause", copy: "‘cause", paste: "’cause", checkTypes: [Punctuation], }, },
  { id: "00015", regex: /‘sup/ig, ui: { label: "‘sup → ’sup", copy: "‘sup", paste: "’sup", checkTypes: [Punctuation], }, },
  { id: "00016", regex: /‘em/ig, ui: { label: "‘em → ’em", copy: "‘em", paste: "’em", checkTypes: [Punctuation], }, },
  { id: "00017", regex: /”[^“]*?”/g, ui: { label: "Missing start quotes", copy: "”[^“]*?”", checkTypes: [Punctuation], }, },
  { id: "00018", regex: /“[^”]*?“/g, ui: { label: "Missing end quotes", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },

  { id: "00019", regex: /absent-minded/ig, ui: { label: "absent-minded → absentminded", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00020", regex: /blood-red/ig, ui: { label: "blood-red → bloodred", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00021", regex: /blood-sucking/ig, ui: { label: "blood-sucking → bloodsucking", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00022", regex: /crossdress/ig, ui: { label: "crossdress → cross-dress", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00023", regex: /cross-section/ig, ui: { label: "cross-section → cross section", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00024", regex: /crystal-clear/ig, ui: { label: "crystal-clear → crystal clear", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00025", regex: /dead-set/ig, ui: { label: "dead-set → dead set", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00026", regex: /dealbreaker/ig, ui: { label: "dealbreaker → deal-breaker", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00027", regex: /duty-bound/ig, ui: { label: "duty-bound → duty bound", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00028", regex: /hand-pick/ig, ui: { label: "hand-pick → handpick", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00029", regex: /hardpressed/ig, ui: { label: "hardpressed → hard-pressed", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00030", regex: /hard-working/ig, ui: { label: "hard-working → hardworking", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00031", regex: /iron-fisted/ig, ui: { label: "iron-fisted → ironfisted", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00032", regex: /kind-hearted/ig, ui: { label: "kind-hearted → kindhearted", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00033", regex: /knowhow/ig, ui: { label: "knowhow → know-how", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00034", regex: /laidback/ig, ui: { label: "laidback → laid-back", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00035", regex: /mass produce/ig, ui: { label: "mass produce → mass-produce", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00036", regex: /mass-production/ig, ui: { label: "mass-production → mass production", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00037", regex: /mid-morning/i, ui: { label: "mid-morning → midmorning", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00038", regex: /mid-sentence/ig, ui: { label: "mid-sentence → midsentence", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00039", regex: /off-handed/ig, ui: { label: "off-handed → offhanded", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00040", regex: /on-stage/ig, ui: { label: "on-stage → onstage", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00041", regex: /re-examine/ig, ui: { label: "re-examine → reexamine", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00042", regex: /roleplay/ig, ui: { label: "roleplay → role-play", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00043", regex: /semi-circle/ig, ui: { label: "semi-circle → semicircle", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00044", regex: /singlehanded/ig, ui: { label: "singlehanded → single-handed", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00045", regex: /singleminded/ig, ui: { label: "singleminded → single-minded", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00046", regex: /slip-up/ig, ui: { label: "slip-up → slipup", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00047", regex: /tipoff/ig, ui: { label: "tipoff → tip-off", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },
  { id: "00048", regex: /vice-versa/ig, ui: { label: "vice-versa → vice versa", copy: "“[^”]*?“", checkTypes: [Punctuation], }, },

  { id: "00049", regex: /alright/ig, ui: { label: "alright → all right", copy: "alright", checkTypes: [Punctuation], }, },
  { id: "00050", regex: /bath house/ig, ui: { label: "bath house → bathhouse", copy: "bath house", checkTypes: [Punctuation], }, },
  { id: "00051", regex: /flipside/ig, ui: { label: "flipside → flip side", copy: "flipside", checkTypes: [Punctuation], }, },
  { id: "00052", regex: /frontlines/ig, ui: { label: "frontlines → front lines", copy: "frontlines", checkTypes: [Punctuation], }, },
  { id: "00053", regex: /good will/ig, ui: { label: "good will → goodwill", copy: "good will", checkTypes: [Punctuation], }, },
  { id: "00054", regex: /haha/ig, ui: { label: "haha → ha ha", copy: "haha", checkTypes: [Punctuation], }, },
  { id: "00055", regex: /heehee/ig, ui: { label: "heehee → hee hee", copy: "heehee", checkTypes: [Punctuation], }, },
  { id: "00056", regex: /keychain/ig, ui: { label: "keychain → key chain", copy: "keychain", checkTypes: [Punctuation], }, },
  { id: "00057", regex: /lightbulb/ig, ui: { label: "lightbulb → light bulb", copy: "lightbulb", checkTypes: [Punctuation], }, },
  { id: "00058", regex: /nevermind/ig, ui: { label: "nevermind → never mind", copy: "nevermind", checkTypes: [Punctuation], }, },
  { id: "00059", regex: /photoshoot/ig, ui: { label: "photoshoot → photo shoot", copy: "photoshoot", checkTypes: [], }, },
  { id: "00060", regex: /shockwave/ig, ui: { label: "shockwave → shock wave", copy: "shockwave", checkTypes: [], }, },
  { id: "00061", regex: /skillset/ig, ui: { label: "skillset → skill set", copy: "skillset", checkTypes: [], }, },
  { id: "00062", regex: /soulmate/ig, ui: { label: "soulmate → soul mate", copy: "soulmate", checkTypes: [], }, },
  { id: "00063", regex: /tastebud/ig, ui: { label: "tastebud → taste bud", copy: "tastebud", checkTypes: [], }, },
  { id: "00064", regex: /timeframe/ig, ui: { label: "timeframe → time frame", copy: "timeframe", checkTypes: [], }, },
  { id: "00065", regex: /wishlist/ig, ui: { label: "wishlist → wish list", copy: "wishlist", checkTypes: [], }, },

  { id: "00066", regex: /acknowledgement/ig, ui: { label: "acknowledgement → acknowledgment", copy: "", checkTypes: [], }, },
  { id: "00067", regex: /accidently/ig, ui: { label: "accidently → accidentally", copy: "", checkTypes: [], }, },
  { id: "00068", regex: /ambiance/ig, ui: { label: "ambiance → ambience", copy: "", checkTypes: [], }, },
  { id: "00069", regex: /\bax\b/ig, ui: { label: "ax → axe", copy: "", checkTypes: [], }, },
  { id: "00070", regex: /\bcafe\b/ig, ui: { label: "cafe → café", copy: "", checkTypes: [], }, },
  { id: "00071", regex: /concensus/ig, ui: { label: "concensus → consensus", copy: "", checkTypes: [], }, },
  { id: "00072", regex: /crystalized/ig, ui: { label: "crystalized → crystallized", copy: "", checkTypes: [], }, },
  { id: "00073", regex: /dieing/ig, ui: { label: "dieing → dying", copy: "", checkTypes: [], }, },
  { id: "00074", regex: /forsaw/ig, ui: { label: "forsaw → foresaw", copy: "", checkTypes: [], }, },
  { id: "00075", regex: /forsee/ig, ui: { label: "forsee → foresee", copy: "", checkTypes: [], }, },
  { id: "00076", regex: /\bgeez\b/ig, ui: { label: "geez → jeez", copy: "", checkTypes: [], }, },
  { id: "00077", regex: /grevious/ig, ui: { label: "grevious → grievous", copy: "", checkTypes: [], }, },
  { id: "00078", regex: /grinded/ig, ui: { label: "grinded → ground", copy: "", checkTypes: [], }, },
  { id: "00079", regex: /guerrila/ig, ui: { label: "guerrila → guerrilla", copy: "", checkTypes: [], }, },
  { id: "00080", regex: /guerilla/ig, ui: { label: "guerilla → guerrilla", copy: "", checkTypes: [], }, },
  { id: "00081", regex: /judgement/ig, ui: { label: "judgement → judgment", copy: "", checkTypes: [], }, },
  { id: "00082", regex: /mischevious/ig, ui: { label: "mischevious → mischievous", copy: "", checkTypes: [], }, },
  { id: "00083", regex: /ochre/ig, ui: { label: "ochre → ocher", copy: "", checkTypes: [], }, },
  { id: "00084", regex: /omelette/ig, ui: { label: "omelette → omelet", copy: "", checkTypes: [], }, },
  { id: "00085", regex: /publically/ig, ui: { label: "publically → publicly", copy: "", checkTypes: [], }, },
  { id: "00086", regex: /straightlaced/ig, ui: { label: "straightlaced → straitlaced", copy: "", checkTypes: [], }, },
  { id: "00087", regex: /underaged/ig, ui: { label: "underaged → underage", copy: "", checkTypes: [], }, },
  { id: "00088", regex: /well-kempt/ig, ui: { label: "well-kempt → well-kept", copy: "", checkTypes: [], }, },
  { id: "00089", regex: /woah/ig, ui: { label: "woah → whoa", copy: "", checkTypes: [], }, },
  { id: "00090", regex: /worshiping/ig, ui: { label: "worshiping → worshipping", copy: "", checkTypes: [], }, },
  { id: "00091", regex: /worshiper/ig, ui: { label: "worshiper → worshipper", copy: "", checkTypes: [], }, },

  { id: "00092", regex: /aircon/ig, ui: { label: "aircon → AC or air conditioning", copy: "", checkTypes: [], }, },
  { id: "00093", regex: /apologise/ig, ui: { label: "apologise → apologize", copy: "", checkTypes: [], }, },
  { id: "00094", regex: /cancelled/ig, ui: { label: "cancelled → canceled", copy: "", checkTypes: [], }, },
  { id: "00095", regex: /cancelling/ig, ui: { label: "cancelling → canceling", copy: "", checkTypes: [], }, },
  { id: "00096", regex: /cancelation/ig, ui: { label: "cancelation → cancellation", copy: "", checkTypes: [], }, },
  { id: "00097", regex: /colour/ig, ui: { label: "colour → color", copy: "", checkTypes: [], }, },
  { id: "00098", regex: /centre/ig, ui: { label: "centre → center", copy: "", checkTypes: [], }, },
  { id: "00099", regex: /defence/ig, ui: { label: "defence → defense", copy: "", checkTypes: [], }, },
  { id: "00100", regex: /emphasise/ig, ui: { label: "emphasise → emphasize", copy: "", checkTypes: [], }, },
  { id: "00101", regex: /grey/ig, ui: { label: "grey → gray", copy: "", checkTypes: [], }, },
  { id: "00102", regex: /meagre/ig, ui: { label: "meagre → meager", copy: "", checkTypes: [], }, },
  { id: "00103", regex: /miniscule/ig, ui: { label: "miniscule → minuscule", copy: "", checkTypes: [], }, },
  { id: "00104", regex: /moustache/ig, ui: { label: "moustache → mustache", copy: "", checkTypes: [], }, },
  { id: "00105", regex: /offence/ig, ui: { label: "offence → offense", copy: "", checkTypes: [], }, },
  { id: "00106", regex: /plough/ig, ui: { label: "plough → plow", copy: "", checkTypes: [], }, },
  { id: "00107", regex: /signalling/ig, ui: { label: "signalling → signaling", copy: "", checkTypes: [], }, },
  { id: "00108", regex: /sizeable/ig, ui: { label: "sizeable → sizable", copy: "", checkTypes: [], }, },
  { id: "00109", regex: /smoulder/ig, ui: { label: "smoulder → smolder", copy: "", checkTypes: [], }, },
  { id: "00110", regex: /travelling/ig, ui: { label: "travelling → traveling", copy: "", checkTypes: [], }, },
  { id: "00111", regex: /traveller/ig, ui: { label: "traveller → traveler", copy: "", checkTypes: [], }, },

  { id: "00112", regex: /frontline/ig, ui: { label: "frontline (adjective)", copy: "", checkTypes: [], }, },
  { id: "00113", regex: /front line/ig, ui: { label: "front line (noun)", copy: "", checkTypes: [], }, },
  { id: "00114", regex: /\bgrit\b/ig, ui: { label: "grit (should be gritted, past tense?)", copy: "", checkTypes: [], }, },
  { id: "00115", regex: /heroin[^e]/ig, ui: { label: "heroin (heroine?)", copy: "", checkTypes: [], }, },
  { id: "00116", regex: /\blead\b/ig, ui: { label: "lead (should be led, past tense?)", copy: "", checkTypes: [], }, },
  { id: "00117", regex: /principal/ig, ui: { label: "principal (head of a school)", copy: "", checkTypes: [], }, },
  { id: "00118", regex: /principle/ig, ui: { label: "principle (concept)", copy: "", checkTypes: [], }, },
  { id: "00119", regex: /psych[^e]\b/ig, ui: { label: "psych (verb)", copy: "", checkTypes: [], }, },
  { id: "00120", regex: /\bpsyche/ig, ui: { label: "psyche (noun)", copy: "", checkTypes: [], }, },
  { id: "00121", regex: /pubic/ig, ui: { label: "pubic (public?)", copy: "", checkTypes: [], }, },
  { id: "00122", regex: /sheath[^e]/ig, ui: { label: "sheath (noun)", copy: "", checkTypes: [], }, },
  { id: "00123", regex: /sheathe/ig, ui: { label: "sheathe (verb)", copy: "", checkTypes: [], }, },
  { id: "00124", regex: /first-hand/ig, ui: { label: "first-hand → firsthand", copy: "", checkTypes: [], }, },
  { id: "00125", regex: /mid-twenties/ig, ui: { label: "mid-twenties → midtwenties", copy: "", checkTypes: [], }, },
  { id: "00126", regex: /mid-thirties/ig, ui: { label: "mid-thirties → midthirties", copy: "", checkTypes: [], }, },
  { id: "00127", regex: /mid-forties/ig, ui: { label: "mid-forties → midforties", copy: "", checkTypes: [], }, },
  { id: "00128", regex: /one-time/ig, ui: { label: "one-time → onetime", copy: "", checkTypes: [], }, },
  { id: "00129", regex: /second-hand/ig, ui: { label: "second-hand → secondhand", copy: "", checkTypes: [], }, },
  { id: "00130", regex: /twenty-four-seven/ig, ui: { label: "twenty-four-seven → twenty-four seven", copy: "", checkTypes: [], }, },

  { id: "00131", regex: /coup d’etat/ig, ui: { label: "coup d’etat →  coup d’état", copy: "", checkTypes: [], }, },
  { id: "00132", regex: /deja vu/ig, ui: { label: "deja vu → déjà vu", copy: "", checkTypes: [], }, },
  { id: "00133", regex: /gatling gun/g, ui: { label: "gatling gun → Gatling gun", copy: "", checkTypes: [], }, },
  { id: "00134", regex: /\bfiance[^e]/ig, ui: { label: "fiance → fiancé", copy: "", checkTypes: [], }, },
  { id: "00135", regex: /fiancee/ig, ui: { label: "fiancee → fiancée", copy: "", checkTypes: [], }, },
  { id: "00136", regex: /paper mache/ig, ui: { label: "paper mache → paper-mache or papier mâché", copy: "", checkTypes: [], }, },
  { id: "00137", regex: /swiss cheese/g, ui: { label: "swiss cheese → Swiss cheese", copy: "", checkTypes: [], }, },
  { id: "00138", regex: /tete-a-tete/ig, ui: { label: "tete-a-tete → tête-à-tête", copy: "", checkTypes: [], }, },
  { id: "00139", regex: /ly-/ig, ui: { label: "hyphenated averbs (ly-)", copy: "", checkTypes: [], }, },
  { id: "00140", regex: /towards/ig, ui: { label: "towards", copy: "", checkTypes: [], }, },
  { id: "00141", regex: /toward[^s]/ig, ui: { label: "toward", copy: "", checkTypes: [], }, },
  { id: "00142", regex: /afterwards/ig, ui: { label: "afterwards", copy: "", checkTypes: [], }, },
  { id: "00143", regex: /afterward[^s]/ig, ui: { label: "afterward", copy: "", checkTypes: [], }, },
]
