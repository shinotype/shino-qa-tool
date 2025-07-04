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

test("space before comma", () => {
  expectResult(countIssues("Hello ,"), issues.p_space4.id);
});

test("space between punctuation and quote", () => {
  expectContainsResult(countIssues("a. ” b? ” c! ”"), issues.p_space5.id, 3);
  expectContainsResult(countIssues("a. ’ b? ’ c! ’"), issues.p_space5.id, 3);
});

test("no space after end sentence punctuation", () => {
  expectResult(countIssues("Where do we go now?I dunno."), issues.p_space6.id);
  expectResult(countIssues("Where do we go now.I dunno."), issues.p_space6.id);
  expectResult(countIssues("Where do we go now!I dunno."), issues.p_space6.id);
});

test("two periods", () => {
  expectResult(countIssues("Hello .. There"), issues.p_period.id);
});

test("period preceding question mark", () => {
  expectResult(countIssues("Hello.?"), issues.p_period2.id);
});

test("period preceding exclamation mark", () => {
  expectResult(countIssues("Hello.!"), issues.p_period2.id);
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

test("period outside single quotes", () => {
  expectResult(countIssues("‘wow’. She said"), issues.p_period5.id);
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

test("e.g.", () => {
  expectResult(countIssues("Many vegetables e.g. carrots and onions"), issues.p_comma_eg.id);
});

test("e.g.: passes with comma", () => {
  expectNoResult(countIssues("Many vegetables e.g., carrots and onions"));
});

test("e.g.: periods should be escaped", () => {
  expectNoResult(countIssues("potatoes eggs and carrots"));
});

test("i.e.", () => {
  expectResult(countIssues("Many vegetables i.e. carrots and onions"), issues.p_comma_ie.id);
});

test("i.e.: passes with comma", () => {
  expectNoResult(countIssues("Many vegetables i.e., carrots and onions"));
});

test("i.e.: periods should be escaped", () => {
  expectNoResult(countIssues("cold icey and freezing"));
});

test("incorrect stuttering: t-th", () => {
  expectResult(countIssues("he said T-this is crazy!"), issues.z_stutter_t_th.id);
});

test("incorrect stuttering: w-wh", () => {
  expectResult(countIssues("i said w-WHO are you?!"), issues.z_stutter_w_wh.id);
});

test("subjunctive mood", () => {
  expectResult(countIssues("It was as if he was there"), issues.z_subjunctive.id);
  expectResult(countIssues("IT'S AS IF I WAS A REAL BOY"), issues.z_subjunctive.id);
});

test("subjunctive mood: only looks for one word", () => {
  expectNoResult(countIssues("It was as if he blah blah blah. Then I was"));
});

test("'cause (wrong curly quote)", () => {
  expectResult(countIssues("‘cause"), issues.p_pos_cause.id);
});

test("'cuz (wrong curly quote)", () => {
  expectResult(countIssues("‘cuz"), issues.p_pos_cuz.id);
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

test("lil’: respects word boundaries", () => {
  expectNoResult(countIssues("my blil’ friend"));
});

test("lil", () => {
  expectResult(countIssues("boo lil wow"), issues.p_pos_lil2.id);
});

test("lil: respects word boundaries", () => {
  expectNoResult(countIssues("lily green"));
  expectNoResult(countIssues("slil green"));
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
  expectResult(countIssues("PeopLEs"), issues.p_pos_people1.id);
});

test("mens", () => {
  expectResult(countIssues("MeNs"), issues.p_pos_people2.id);
});

test("mens: respects word boundaries", () => {
  expectNoResult(countIssues("CLemens"));
  expectNoResult(countIssues("MENstruAte"));
});

test("womens", () => {
  expectResult(countIssues("WoMeNs"), issues.p_pos_people3.id);
});

test("childrens", () => {
  expectResult(countIssues("chiLdRens"), issues.p_pos_people4.id);
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

test("each others'", () => {
  expectResult(countIssues("each OThers’"), issues.p_pos_each_others.id);
});

test("one anothers'", () => {
  expectResult(countIssues("one ANOThers’"), issues.p_pos_one_anothers.id);
});

test("missing start quotes", () => {
  expectResult(countIssues("He said, “Wow.” And then I said, Sure.”"), issues.p_quotes_start.id);
});

test("missing end quotes", () => {
  expectResult(countIssues("He said, “Wow. And then I said, “Sure.”"), issues.p_quotes_end.id);
});

test("punctuation inside single quotes", () => {
  expectResult(countIssues("“He said, ‘good?’”"), issues.p_quotes_single.id);
  expectResult(countIssues("“He said, ‘good!’”"), issues.p_quotes_single.id);
});

test("punctuation inside single quotes: doesn't flag outside", () => {
  expectNoResult(countIssues("“He said, ‘good’?”"));
  expectNoResult(countIssues("“He said, ‘good’!”"));
});

test("missing punctuation after paragraph", () => {
  expectResult(countIssues("hello\nfarewell"), issues.p_punctuation_before_newline.id);
});

test("missing punctuation after paragraph: doesn't flag punctuation", () => {
  expectNoResult(countIssues("hello!\nfarewell"));
  expectNoResult(countIssues("hello.\nfarewell"));
  expectNoResult(countIssues("hello?\nfarewell"));
  expectNoResult(countIssues("hello”\nfarewell"));
  expectNoResult(countIssues("hello:\nfarewell"));
  expectNoResult(countIssues("hello)\nfarewell"));
  expectNoResult(countIssues("hello]\nfarewell"));
  expectNoResult(countIssues("hello—\nfarewell"));
});

test("hyphenated adverbs (ly-)", () => {
  expectResult(countIssues("BADLY-made"), issues.z_adverb.id);
});

test("hyphenated adverbs (ly-) ignores fully-fledged", () => {
  expectNoResult(countIssues("fully-fledged"));
});

test("numbers under 100", () => {
  expectResult(countIssues("I have 1 red balloon"), issues.z_numbers_under_hundred.id);
  expectResult(countIssues("I have 5 red balloons"), issues.z_numbers_under_hundred.id);
  expectResult(countIssues("I have 10 red balloons"), issues.z_numbers_under_hundred.id);
  expectResult(countIssues("I have 22 red balloons"), issues.z_numbers_under_hundred.id);
  expectResult(countIssues("I have 48 red balloons"), issues.z_numbers_under_hundred.id);
  expectResult(countIssues("I have 99 red balloons"), issues.z_numbers_under_hundred.id);
});

test("numbers under 100: doesn't detect valid uses", () => {
  expectNoResult(countIssues("Chapter 5, Part 1, Section 3, Grade 8, Level 9, Tier 22, Class 14, Rank 30"));
  expectNoResult(countIssues("chapter 5, part 1, section 3, grade 8, level 9, tier 22, class 14, rank 30"));
  expectNoResult(countIssues("10 LP, 9 HP, 8 MP, 7 XP, 6 coins, 5 gold, 4 points, 3 experience"));
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

test("suggest adding commas to large numbers", () => {
  expectResult(countIssues("1000"), issues.z_big_numbers_comma.id);
  expectResult(countIssues("211111"), issues.z_big_numbers_comma.id);
  expectResult(countIssues("32323"), issues.z_big_numbers_comma.id);
  expectResult(countIssues("41234"), issues.z_big_numbers_comma.id);
  expectResult(countIssues("5123456"), issues.z_big_numbers_comma.id);
  expectResult(countIssues("67890"), issues.z_big_numbers_comma.id);
  expectResult(countIssues("7890"), issues.z_big_numbers_comma.id);
  expectResult(countIssues("81111111111"), issues.z_big_numbers_comma.id);
  expectResult(countIssues("99999"), issues.z_big_numbers_comma.id);
});

test("don't suggest adding commas for small numbers", () => {
  // will detect numbers under 100
  expectContainsResult(countIssues("100 213 345 45 5 678 71 82 910"), issues.z_numbers_under_hundred.id, 2);
});

test("no hyphens for big numbers", () => {
  expectResult(countIssues("one-billion"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("two-hundred"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("three-million"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("four-thousand"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("five-hundred"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("six-billion"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("seven-thousand"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("eight-million"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("nine-hundred"), issues.z_big_numbers_hyphen.id);

  expectResult(countIssues("twenty-thousand"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("thirty-billion"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("forty-million"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("fifty-thousand"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("sixty-billion"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("seventy-million"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("eighty-thousand"), issues.z_big_numbers_hyphen.id);
  expectResult(countIssues("ninety-billion"), issues.z_big_numbers_hyphen.id);
});

test("no hyphens for times", () => {
  expectResult(countIssues("one-ten"), issues.z_open_times.id);
  expectResult(countIssues("two-fifteen"), issues.z_open_times.id);
  expectResult(countIssues("three-twenty"), issues.z_open_times.id);
  expectResult(countIssues("four-thirty"), issues.z_open_times.id);
  expectResult(countIssues("five-forty"), issues.z_open_times.id);
  expectResult(countIssues("six-fifty"), issues.z_open_times.id);
  expectResult(countIssues("seven-ten"), issues.z_open_times.id);
  expectResult(countIssues("eight-fifteen"), issues.z_open_times.id);
  expectResult(countIssues("nine-twenty"), issues.z_open_times.id);
  expectResult(countIssues("ten-thirty"), issues.z_open_times.id);
  expectResult(countIssues("eleven-forty"), issues.z_open_times.id);
  expectResult(countIssues("twelve-fifty"), issues.z_open_times.id);
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

test("shared possessive", () => {
  expectResult(countIssues("Jim and Bob’s stuff"), issues.p_possessive_shared.id);
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

test("symbol: ampersand", () => {
  expectResult(countIssues("me & you"), issues.z_symbol_ampersand.id);
});

test("symbol: dollar", () => {
  expectResult(countIssues("it cost five hundred $ and cents"), issues.z_symbol_dollar.id);
});

test("symbol: hex", () => {
  expectResult(countIssues("I am # 1"), issues.z_symbol_hex.id);
});

test("symbol: percent", () => {
  expectResult(countIssues("it is fifty % more"), issues.z_symbol_percent.id);
});

test("symbol: tilde", () => {
  expectResult(countIssues("she said aaa~ I am happy"), issues.z_symbol_tilde.id);
});

test("symbol: macron", () => {
  expectContainsResult(countIssues("ā, ē, ī, ō, ū, Ā, Ē, Ī, Ō and Ū"), issues.z_symbol_macron.id, 10);
});

test("symbol: greater than", () => {
  expectResult(countIssues("seven > three"), issues.z_symbol_greater_than.id);
});

test("symbol: less than", () => {
  expectResult(countIssues("three < seven"), issues.z_symbol_less_than.id);
});