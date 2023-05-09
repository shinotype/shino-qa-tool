import { countIssues } from '../src/qatool';
import { issues } from '../src/issues';
import { expectContainsResult, expectResult, expectNoResult } from './expectations';

test("lower case after punctuation", () => {
  expectContainsResult(countIssues("a. a b? b c! c"), issues.p_period6.id, 3);
  expectResult(countIssues("a... a"), issues.p_ellipsis2.id);
});

test("double spaces", () => {
  expectResult(countIssues("hello  goodbye"), issues.p_space.id);
});

test("space after newline", () => {
  expectResult(countIssues("ABC.\n DEF"), issues.p_space2.id);
});

test("space before period", () => {
  expectResult(countIssues("Hello ."), issues.p_space3.id);
});

test("space before period ignores multiple periods", () => {
  expectNoResult(countIssues("Hello ... There"));
});

test("space before comma", () => {
  expectResult(countIssues("Hello ,"), issues.p_space4.id);
});

test("space between punctuation and quote", () => {
  expectContainsResult(countIssues("a. ” b? ” c! ”"), issues.p_space5.id, 3);
});

test("two periods", () => {
  expectResult(countIssues("Hello .. There"), issues.p_period.id);
});

test("two periods ignores three periods", () => {
  expectNoResult(countIssues("Hello ... There"));
});

test("period preceding question mark", () => {
  expectResult(countIssues("Hello.?"), issues.p_period2.id);
});

test("period preceding exclamation mark", () => {
  expectResult(countIssues("Hello.!"), issues.p_period2.id);
});

test("period preceding question mark ignores multiple periods", () => {
  expectNoResult(countIssues("Hello...?"));
});

test("period preceding exclamation mark ignores multiple periods", () => {
  expectNoResult(countIssues("Hello...!"));
});

test("period following question mark", () => {
  expectResult(countIssues("Hello?."), issues.p_period3.id);
});

test("period following exclamation mark", () => {
  expectResult(countIssues("Hello!."), issues.p_period3.id);
});

test("period outside quotes", () => {
  expectResult(countIssues("“wow”. She said"), issues.p_period4.id);
});

test("period outside quotes: excludes ellipsis", () => {
  expectNoResult(countIssues("“wow”... She said"));
});

test("period outside single quotes", () => {
  expectResult(countIssues("‘wow’. She said"), issues.p_period5.id);
});

test("period outside single quotes", () => {
  expectNoResult(countIssues("‘wow’... She said"));
});

test("straight single quote", () => {
  expectResult(countIssues("it's no big deal"), issues.p_straight_pos.id);
});

test("straight single quote", () => {
  expectResult(countIssues("it‘s no big deal"), issues.p_straight_pos2.id);
})

test("singular possessive", () => {
  expectResult(countIssues("Dennis’ things"), issues.p_possessive_singular.id);
});

test("singular possessive: ignores if there's an s after the apostrophe", () => {
  expectNoResult(countIssues("Dennis’s things"));
});

test("singular possessive: ignores if there's anything else after the apostrophe", () => {
  expectNoResult(countIssues("Dennis’ll go"));
});

test("comma outside quotes", () => {
  expectResult(countIssues("“wow”, she said"), issues.p_comma.id);
});

test("comma outside single quotes", () => {
  expectResult(countIssues("‘wow’, she said"), issues.p_comma2.id);
});

test("straight double quote", () => {
  expectResult(countIssues("he said \"okay but"), issues.p_straight_quote.id);
});

test("comma too", () => {
  expectResult(countIssues("i want to go, tOo"), issues.p_comma_too.id);
});

test("comma too respects word boundaries", () => {
  expectNoResult(countIssues("i went, took my leave"));
});

test("comma either", () => {
  expectResult(countIssues("maybe, eiTHer"), issues.p_comma_either.id);
});

test("!?", () => {
  expectResult(countIssues("really!?"), issues.p_bang.id);
});

test("!!", () => {
  expectResult(countIssues("wow!! Amazing"), issues.p_bang2.id);
});

test("!! rule ignores !!!", () => {
  expectNoResult(countIssues("wow!!! Amazing"));
});

test("....", () => {
  expectResult(countIssues("Wow.... Cool"), issues.p_ellipsis1.id);
});

test("... [a-z]", () => {
  expectResult(countIssues("okay... me too"), issues.p_ellipsis2.id);
});

test("...[A-Z]", () => {
  expectResult(countIssues("why...Not"), issues.p_ellipsis3.id);
});

test("ellipsis symbol", () => {
  expectResult(countIssues("Wow… Cool"), issues.p_ellipsis4.id);
});

test("—[space]", () => {
  expectResult(countIssues("wow— no"), issues.p_dash_em1.id);
});

test("[space]—", () => {
  expectResult(countIssues("wow —no"), issues.p_dash_em2.id);
});

test("en dash", () => {
  expectResult(countIssues("wow –no"), issues.p_dash_en.id);
});

test("double hyphens", () => {
  expectResult(countIssues("wow --no"), issues.p_dash_double.id);
});

test("incorrect stuttering: t-th", () => {
  expectResult(countIssues("he said T-this is crazy!"), issues.z_stutter_t_th.id);
});

test("incorrect stuttering: w-wh", () => {
  expectResult(countIssues("i said w-WHO are you?!"), issues.z_stutter_w_wh.id);
});

test("'cause (wrong curly quote)", () => {
  expectResult(countIssues("‘cause"), issues.p_pos_cause.id);
});

test("'sup (wrong curly quote)", () => {
  expectResult(countIssues("‘sup"), issues.p_pos_sup.id);
});

test("'em (wrong curly quote)", () => {
  expectResult(countIssues("‘em"), issues.p_pos_em.id);
});

test("'bout (wrong curly quote)", () => {
  expectResult(countIssues("‘bout"), issues.p_pos_bout.id);
});

test("'nother (wrong curly quote)", () => {
  expectResult(countIssues("‘nother"), issues.p_pos_nother.id);
});

test("'fore (wrong curly quote)", () => {
  expectResult(countIssues("‘fore"), issues.p_pos_fore.id);
});

test("'fraid (wrong curly quote)", () => {
  expectResult(countIssues("‘fraid"), issues.p_pos_fraid.id);
});

test("lil’", () => {
  expectResult(countIssues("my lil’ friend"), issues.p_pos_lil1.id);
});

test("lil", () => {
  expectResult(countIssues("boo lil wow"), issues.p_pos_lil2.id);
});

test("'neath (wrong curly quote)", () => {
  expectResult(countIssues("‘neath"), issues.p_pos_neath.id);
});

test("'gainst (wrong curly quote)", () => {
  expectResult(countIssues("‘gainst"), issues.p_pos_gainst.id);
});

test("'cept (wrong curly quote)", () => {
  expectResult(countIssues("‘cept"), issues.p_pos_cept.id);
});

test("peoples", () => {
  expectResult(countIssues("peoples"), issues.p_pos_people1.id);
});

test("mens", () => {
  expectResult(countIssues("mens"), issues.p_pos_people2.id);
});

test("womens", () => {
  expectResult(countIssues("womens"), issues.p_pos_people3.id);
});

test("childrens", () => {
  expectResult(countIssues("childrens"), issues.p_pos_people4.id);
});

test("'round (wrong curly quote)", () => {
  expectResult(countIssues("‘round"), issues.p_pos_round.id);
});

test("'til (wrong curly quote)", () => {
  expectResult(countIssues("‘til"), issues.p_pos_til.id);
});

test("'tis (wrong curly quote)", () => {
  expectResult(countIssues("‘tis"), issues.p_pos_tis.id);
});

test("'twas (wrong curly quote)", () => {
  expectResult(countIssues("‘twas"), issues.p_pos_twas.id);
});

test("'tween (wrong curly quote)", () => {
  expectResult(countIssues("‘tween"), issues.p_pos_tween.id);
});

test("'twere (wrong curly quote)", () => {
  expectResult(countIssues("‘twere"), issues.p_pos_twere.id);
});

test("'twixt (wrong curly quote)", () => {
  expectResult(countIssues("‘twixt"), issues.p_pos_twixt.id);
});

test("missing start quotes", () => {
  expectResult(countIssues("He said, “Wow.” And then I said, Sure.”"), issues.p_quotes_start.id);
});

test("missing end quotes", () => {
  expectResult(countIssues("He said, “Wow. And then I said, “Sure.”"), issues.p_quotes_end.id);
});

test("missing punctuation after paragraph", () => {
  expectResult(countIssues("hello\ngoodbye"), issues.p_punctuation_before_newline.id);
});

test("hyphenated adverbs (ly-)", () => {
  expectResult(countIssues("BADLY-made"), issues.z_adverb.id);
});

test("hyphenated adverbs (ly-) ignores fully-fledged", () => {
  expectNoResult(countIssues("fully-fledged"));
});

test("hyphenate numbers between 21 and 99", () => {
  expectResult(countIssues("twenty one"), issues.z_hyphen_numbers.id);
  expectResult(countIssues("thirty two"), issues.z_hyphen_numbers.id);
  expectResult(countIssues("forty three"), issues.z_hyphen_numbers.id);
  expectResult(countIssues("fifty four"), issues.z_hyphen_numbers.id);
  expectResult(countIssues("sixty five"), issues.z_hyphen_numbers.id);
  expectResult(countIssues("seventy six"), issues.z_hyphen_numbers.id);
  expectResult(countIssues("eighty seven"), issues.z_hyphen_numbers.id);
  expectResult(countIssues("ninety eight"), issues.z_hyphen_numbers.id);
});

test("hyphenate numbers between 21 and 99, case insensitive", () => {
  expectResult(countIssues("NINETY NINE"), issues.z_hyphen_numbers.id);
});

test("less used for countable quantity", () => {
  expectResult(countIssues("less numbers are good"), issues.z_less_plural.id);
});

test("less used for countable quantity, case insensitive", () => {
  expectResult(countIssues("LESS NUMBERS ARE GOOD"), issues.z_less_plural.id);
});

test("less -ous not considered countable quantity", () => {
  expectNoResult(countIssues("less obvious"));
});

test("less used for countable quantity respects word boundaries", () => {
  expectNoResult(countIssues("bless numbersare good"));
});

test("double possessive", () => {
  expectResult(countIssues("Jim’s and Bob’s stuff"), issues.p_possessive_double.id);
});

test("reason why", () => {
  expectResult(countIssues("REASON why"), issues.z_reason_why.id);
});

test("no space before measurements", () => {
  expectResult(countIssues("it was 10cm long"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it was 10centimeter long"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it was 10centimeters long"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it was 10m long"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it was 10meter long"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it was 10meters long"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it was 10km long"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it was 10kilometer long"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it was 10kilometers long"), issues.z_space_before_measurement.id);

  expectResult(countIssues("it weighed 10g in total"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it weighed 10gram in total"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it weighed 10grams in total"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it weighed 10kg in total"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it weighed 10kilogram in total"), issues.z_space_before_measurement.id);
  expectResult(countIssues("it weighed 10kilograms in total"), issues.z_space_before_measurement.id);
});

