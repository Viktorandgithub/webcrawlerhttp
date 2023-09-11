const { normalizeURL, getURLsFromHTML } = require("./crawl.js");
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

test("normalizeURL slash", () => {
  const input = "http://youtube.com/path/";
  const actual = normalizeURL(input);
  const expected = "youtube.com/path";
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML http strip", () => {
  const htmlBodyInput = `<html>
  <body>
  <a href="https://youtube.com/path">
  Youtube.com 
  </a>
  </body>
  </html>`;
  const baseURLInput = "https://youtube.com/path";
  const actual = getURLsFromHTML(htmlBodyInput, baseURLInput);
  const expected = ["https://youtube.com/path"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML http strip relativ url", () => {
  const htmlBodyInput = `<html>
    <body>
    <a href="/path/">
    Youtube.com 
    </a>
    </body>
    </html>`;
  const baseURLInput = "https://youtube.com";
  const actual = getURLsFromHTML(htmlBodyInput, baseURLInput);
  const expected = ["https://youtube.com/path/"];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML multiple urls", () => {
  const htmlBodyInput = `<html>
      <body>
      <a href="/path/">
      Youtube.com 
      </a>
      <a href="/slash/">
      Youtube.com 
      </a>
      <a href="https://youtube.com/path1">
      Youtube.com 
      </a>
      <a href="https://youtube.com/path2">
        Youtube.com 
        </a>
      </body>
      </html>`;
  const baseURLInput = "https://youtube.com";
  const actual = getURLsFromHTML(htmlBodyInput, baseURLInput);
  const expected = [
    "https://youtube.com/path/",
    "https://youtube.com/slash/",
    "https://youtube.com/path1",
    "https://youtube.com/path2",
  ];
  expect(actual).toEqual(expected);
});

test("getURLsFromHTML invalid url", () => {
  const htmlBodyInput = `<html>
      <body>
      <a href="invalid">
      Youtube.com 
      </a>
      </body>
      </html>`;
  const baseURLInput = "https://youtube.com";
  const actual = getURLsFromHTML(htmlBodyInput, baseURLInput);
  const expected = [];
  expect(actual).toEqual(expected);
});
