import test from "node:test";
import assert from "node:assert/strict";

import { isEven } from "../src/is-even.js";

test("isEven true for even integers", () => {
  assert.strictEqual(isEven(10), true);
});

test("isEven false for odd integers", () => {
  assert.strictEqual(isEven(11), false);
});

test("isEven false for non-integers", () => {
  assert.strictEqual(isEven(3.14), false);
  assert.strictEqual(isEven("10"), false);
});
