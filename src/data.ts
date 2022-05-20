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
  double_spaces: { regex: /[ ]{2}/g, ui: { label: "Double spaces", copy: "  ", checkTypes: [Punctuation], }, },
  single_quote: { regex: /'/g, ui: { label: "'", copy: "\\\'", checkTypes: [Punctuation], }, },
  double_quote: { regex: /"/g, ui: { label: "\"", copy: "\\\"", checkTypes: [Punctuation], }, },
  comma_too: { regex: /, too\b/ig, ui: { label: ", too", copy: ", too\\b", checkTypes: [Punctuation], }, },
  comma_either: { regex: /, either/ig, ui: { label: ", either", copy: ", either", checkTypes: [Punctuation], }, },
};

const unusedTypeCheck = idlessIssues as { [key: string]: Omit<Issue, "id"> };

type RemoveIdFromValue<T> = { [key in keyof T]: Omit<T[key], 'id'> };
function copyObjectIdsToValues(idlessIssues: RemoveIdFromValue<Issues>): Issues {
  const issues: Partial<Issues> = {};
  for (const key in idlessIssues) {
    const id = key as IssueId;
    issues[id] = { id, ...idlessIssues[id] as Omit<Issue, 'id'> };
  }
  return issues as Issues;
}

export const issues = copyObjectIdsToValues(idlessIssues);
