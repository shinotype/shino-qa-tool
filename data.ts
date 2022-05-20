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
]
