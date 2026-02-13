import test from "node:test";
import assert from "node:assert/strict";

import { multiply } from "../src/multiply.js";

test("multiply numbers", () => {
  assert.equal(multiply(3, 4), 12);
});

test("multiply invalid args", () => {
  assert.equal(multiply("3", 4), null);
});
