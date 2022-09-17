import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectResult, expectNoResult } from './expectations';

test("double spaces", () => {
  expectResult(countIssues("hello  goodbye"), issues.space.id);
});

test("space after newline", () => {
  expectResult(countIssues("ABC\n DEF"), issues.space2.id);
});

test("space before period", () => {
  expectResult(countIssues("Hello ."), issues.space3.id);
});

test("space before period ignores multiple periods", () => {
  expectNoResult(countIssues("Hello ... There"));
});

test("two periods", () => {
  expectResult(countIssues("Hello .. There"), issues.period.id);
});

test("two periods ignores three periods", () => {
  expectNoResult(countIssues("Hello ... There"));
});

test("period preceding question mark", () => {
  expectResult(countIssues("Hello.?"), issues.period2.id);
});

test("period preceding exclamation mark", () => {
  expectResult(countIssues("Hello.!"), issues.period2.id);
});

test("period preceding question mark ignores multiple periods", () => {
  expectNoResult(countIssues("Hello...?"));
});

test("period preceding exclamation mark ignores multiple periods", () => {
  expectNoResult(countIssues("Hello...!"));
});

test("period following question mark", () => {
  expectResult(countIssues("Hello?."), issues.period3.id);
});

test("period following exclamation mark", () => {
  expectResult(countIssues("Hello!."), issues.period3.id);
});

test("period outside quotes", () => {
  expectResult(countIssues("“wow”. She said"), issues.period4.id);
});

test("period outside quotes: excludes ellipsis", () => {
  expectNoResult(countIssues("“wow”... She said"));
});

test("period outside single quotes", () => {
  expectResult(countIssues("‘wow’. She said"), issues.period5.id);
});

test("period outside single quotes", () => {
  expectNoResult(countIssues("‘wow’... She said"));
});

test("straight single quote", () => {
  expectResult(countIssues("it's no big deal"), issues.apostrophe.id);
});

test("straight single quote", () => {
  expectResult(countIssues("it‘s no big deal"), issues.apostrophe2.id);
})

test("singular possessive", () => {
  expectResult(countIssues("Dennis’ things"), issues.possessive.id);
});

test("singular possessive: ignores if there's an s after the apostrophe", () => {
  expectNoResult(countIssues("Dennis’s things"));
});

test("singular possessive: ignores if there's anything else after the apostrophe", () => {
  expectNoResult(countIssues("Dennis’ll go"));
});

test("comma outside quotes", () => {
  expectResult(countIssues("“wow”, she said"), issues.comma.id);
});

test("comma outside single quotes", () => {
  expectResult(countIssues("‘wow’, she said"), issues.comma2.id);
});

test("straight double quote", () => {
  expectResult(countIssues("he said \"okay but"), issues.quote.id);
});

test("comma too", () => {
  expectResult(countIssues("i want to go, tOo"), issues.too.id);
});

test("comma too respects word boundaries", () => {
  expectNoResult(countIssues("i went, took my leave"));
});

test("comma either", () => {
  expectResult(countIssues("maybe, eiTHer"), issues.either.id);
});

test("!?", () => {
  expectResult(countIssues("really!?"), issues.bang.id);
});

test("!!", () => {
  expectResult(countIssues("wow!! amazing"), issues.bang2.id);
});

test("!! rule ignores !!!", () => {
  expectNoResult(countIssues("wow!!! amazing"));
});

test("....", () => {
  expectResult(countIssues("Wow.... Cool"), issues.ellipsis1.id);
});

test("... [a-z]", () => {
  expectResult(countIssues("okay... me too"), issues.ellipsis2.id);
});

test("...[A-Z]", () => {
  expectResult(countIssues("why...Not"), issues.ellipsis3.id);
});

test("ellipsis symbol", () => {
  expectResult(countIssues("Wow… Cool"), issues.ellipsis4.id);
});

test("—[space]", () => {
  expectResult(countIssues("wow— no"), issues.emdash1.id);
});

test("[space]—", () => {
  expectResult(countIssues("wow —no"), issues.emdash2.id);
});

test("'cause (wrong curly quote)", () => {
  expectResult(countIssues("‘cause"), issues.causepos.id);
});

test("'sup (wrong curly quote)", () => {
  expectResult(countIssues("‘sup"), issues.suppos.id);
});

test("'em (wrong curly quote)", () => {
  expectResult(countIssues("‘em"), issues.empos.id);
});

test("'bout (wrong curly quote)", () => {
  expectResult(countIssues("‘bout"), issues.boutpos.id);
});

test("'nother (wrong curly quote)", () => {
  expectResult(countIssues("‘nother"), issues.notherpos.id);
});

test("'fore (wrong curly quote)", () => {
  expectResult(countIssues("‘fore"), issues.forepos.id);
});

test("'fraid (wrong curly quote)", () => {
  expectResult(countIssues("‘fraid"), issues.fraidpos.id);
});

test("'neath (wrong curly quote)", () => {
  expectResult(countIssues("‘neath"), issues.neathpos.id);
});

test("'gainst (wrong curly quote)", () => {
  expectResult(countIssues("‘gainst"), issues.gainstpos.id);
});

test("'cept (wrong curly quote)", () => {
  expectResult(countIssues("‘cept"), issues.ceptpos.id);
});

test("'round (wrong curly quote)", () => {
  expectResult(countIssues("‘round"), issues.roundpos.id);
});

test("'til (wrong curly quote)", () => {
  expectResult(countIssues("‘til"), issues.tilpos.id);
});

test("'tis (wrong curly quote)", () => {
  expectResult(countIssues("‘tis"), issues.tispos.id);
});

test("'twas (wrong curly quote)", () => {
  expectResult(countIssues("‘twas"), issues.twaspos.id);
});

test("'tween (wrong curly quote)", () => {
  expectResult(countIssues("‘tween"), issues.tweenpos.id);
});

test("'twere (wrong curly quote)", () => {
  expectResult(countIssues("‘twere"), issues.twerepos.id);
});

test("'twixt (wrong curly quote)", () => {
  expectResult(countIssues("‘twixt"), issues.twixtpos.id);
});

test("missing start quotes", () => {
  expectResult(countIssues("He said, “Wow.” And then I said, Sure.”"), issues.startquote.id);
});

test("missing end quotes", () => {
  expectResult(countIssues("He said, “Wow. And then I said, “Sure.”"), issues.endquote.id);
});

test("hyphenated adverbs (ly-)", () => {
  expectResult(countIssues("BADLY-made"), issues.adverb.id);
});

test("hyphenated adverbs (ly-) ignores fully-fledged", () => {
  expectNoResult(countIssues("fully-fledged"));
});

test("hyphenate numbers between 21 and 99", () => {
  expectResult(countIssues("twenty one"), issues.hyphen_numbers.id);
  expectResult(countIssues("thirty two"), issues.hyphen_numbers.id);
  expectResult(countIssues("forty three"), issues.hyphen_numbers.id);
  expectResult(countIssues("fifty four"), issues.hyphen_numbers.id);
  expectResult(countIssues("sixty five"), issues.hyphen_numbers.id);
  expectResult(countIssues("seventy six"), issues.hyphen_numbers.id);
  expectResult(countIssues("eighty seven"), issues.hyphen_numbers.id);
  expectResult(countIssues("ninety eight"), issues.hyphen_numbers.id);
});

test("hyphenate numbers between 21 and 99, case insensitive", () => {
  expectResult(countIssues("NINETY NINE"), issues.hyphen_numbers.id);
});

test("less used for countable quantity", () => {
  expectResult(countIssues("less numbers are good"), issues.less_plural.id);
});

test("less used for countable quantity, case insensitive", () => {
  expectResult(countIssues("LESS NUMBERS ARE GOOD"), issues.less_plural.id);
});

test("less -ous not considered countable quantity", () => {
  expectNoResult(countIssues("less obvious"));
});

test("less used for countable quantity respects word boundaries", () => {
  expectNoResult(countIssues("bless numbersare good"));
});

test("double possessive", () => {
  expectResult(countIssues("Jim’s and Bob’s stuff"), issues.double_possessive.id);
});

test("no space before measurements", () => {
  expectResult(countIssues("it was 10cm long"), issues.space_before_measurement.id);
  expectResult(countIssues("it was 10centimeter long"), issues.space_before_measurement.id);
  expectResult(countIssues("it was 10centimeters long"), issues.space_before_measurement.id);
  expectResult(countIssues("it was 10m long"), issues.space_before_measurement.id);
  expectResult(countIssues("it was 10meter long"), issues.space_before_measurement.id);
  expectResult(countIssues("it was 10meters long"), issues.space_before_measurement.id);
  expectResult(countIssues("it was 10km long"), issues.space_before_measurement.id);
  expectResult(countIssues("it was 10kilometer long"), issues.space_before_measurement.id);
  expectResult(countIssues("it was 10kilometers long"), issues.space_before_measurement.id);
  
  expectResult(countIssues("it weighed 10g in total"), issues.space_before_measurement.id);
  expectResult(countIssues("it weighed 10gram in total"), issues.space_before_measurement.id);
  expectResult(countIssues("it weighed 10grams in total"), issues.space_before_measurement.id);
  expectResult(countIssues("it weighed 10kg in total"), issues.space_before_measurement.id);
  expectResult(countIssues("it weighed 10kilogram in total"), issues.space_before_measurement.id);
  expectResult(countIssues("it weighed 10kilograms in total"), issues.space_before_measurement.id);
});

