const { normalizeURL } = require("./crawl.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL strip protocol", () => {
  const input = "https://youtube.com/path";
  const actual = normalizeURL(input);
  const expected = "youtube.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL strip protocol with trailing slash", () => {
  const input = "https://youtube.com/path/";
  const actual = normalizeURL(input);
  const expected = "youtube.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL capitals", () => {
  const input = "https://youtube.com/path/";
  const actual = normalizeURL(input);
  const expected = "youtube.com/path";
  expect(actual).toEqual(expected);
});

test("normalizeURL http strip", () => {
  const input = "http://youtube.com/path/";
  const actual = normalizeURL(input);
  const expected = "youtube.com/path";
  expect(actual).toEqual(expected);
});
