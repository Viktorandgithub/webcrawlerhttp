const { sortPages } = require("./report.js");
const { test, expect } = require("@jest/globals");

test("sort Pages", () => {
  const input = { "https://youtube.com/path": 1, "https://youtube.com": 3 };
  const actual = sortPages(input);
  const expected = [
    ["https://youtube.com", 3],
    ["https://youtube.com/path", 1],
  ];
  expect(actual).toEqual(expected);
});
