import test from "node:test";
import assert from "node:assert/strict";

import { buildAuthorLines, formatArticleSummary, normalizeTitle } from "../src/text-utils.js";

test("normalizeTitle capitalizes words", () => {
  assert.equal(normalizeTitle("   hELLo   worLD  "), "Hello World");
});

test("normalizeTitle handles non-string", () => {
  assert.equal(normalizeTitle(null), "");
});

test("buildAuthorLines returns indexed lines", () => {
  assert.deepEqual(buildAuthorLines(["Ada", "Grace"]), ["Author 1: Ada", "Author 2: Grace"]);
});

test("formatArticleSummary keeps stable lines", () => {
  const output = formatArticleSummary({
    title: " new model release ",
    author: "Eren",
    date: "2026-02-13",
    tags: ["ai", "release"]
  });

  assert.match(output, /Title: new model release/);
  assert.match(output, /Author: Eren/);
  assert.match(output, /Date: 2026-02-13/);
  assert.match(output, /Tag: ai/);
  assert.match(output, /Tag: release/);
});
