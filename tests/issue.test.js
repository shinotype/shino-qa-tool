const findIssues = require('../qaassist');

test("00000: number of occurrences", () => {
  const result = findIssues("'''");
  expect(result).toHaveLength(1);
  expect(result[0].occurrences).toBe(3);
});

test("00001: double spaces", () => {
  const result = findIssues("hello  goodbye");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00001");
});

test("00002: straight single quote", () => {
  const result = findIssues("it's no big deal");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00002");
});

test("00003: straight double quote", () => {
  const result = findIssues("he said \"okay but");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00003");
});

test("00004: comma too", () => {
  const result = findIssues("i want to go, too");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00004");
});

test("00004: comma too respects word boundaries", () => {
  const result = findIssues("i went, took my leave");
  expect(result).toHaveLength(0);
});

test("00005: comma either", () => {
  const result = findIssues("maybe, either");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00005");
});

test("00006: !?", () => {
  const result = findIssues("really!?");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00006");
});

test("00007: !!", () => {
  const result = findIssues("really!?");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00006");
});

test("00008: ....", () => {
  const result = findIssues("Wow.... Cool");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00008");
});

test("00009: ... [a-z]", () => {
  const result = findIssues("okay... me too");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00009");
});

test("00010: ...[A-Z]", () => {
  const result = findIssues("why...Not");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00010");
});

test("00011: ellipsis symbol", () => {
  const result = findIssues("Wow… Cool");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00011");
});

test("00012: —[space]", () => {
  const result = findIssues("wow— no");
  expect(result).toHaveLength(1);
  expect(result[0].id).toBe("00012");
});