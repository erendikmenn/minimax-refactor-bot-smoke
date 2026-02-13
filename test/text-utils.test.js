import test from "node:test";
import assert from "node:assert/strict";

import { buildAuthorLines, normalizeTitle } from "../src/text-utils.js";

test("normalizeTitle capitalizes words", () => {
  assert.equal(normalizeTitle("   hELLo   worLD  "), "Hello World");
});

test("normalizeTitle handles non-string", () => {
  assert.equal(normalizeTitle(null), "");
});

test("buildAuthorLines returns indexed lines", () => {
  assert.deepEqual(buildAuthorLines(["Ada", "Grace"]), ["Author 1: Ada", "Author 2: Grace"]);
});
