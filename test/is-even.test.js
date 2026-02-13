import test from "node:test";
import assert from "node:assert/strict";

import { isEven } from "../src/is-even.js";

test("isEven true for even integers", () => {
  assert.equal(isEven(10), true);
});

test("isEven false for odd integers", () => {
  assert.equal(isEven(11), false);
});

test("isEven false for non-integers", () => {
  assert.equal(isEven(3.14), false);
  assert.equal(isEven("10"), false);
});
