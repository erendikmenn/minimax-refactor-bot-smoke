import test from "node:test";
import assert from "node:assert/strict";

import { summarizeMetrics } from "../src/metrics.js";

test("summarizeMetrics with values", () => {
  const output = summarizeMetrics([10, 20, 30]);
  assert.match(output, /count=3/);
  assert.match(output, /min=10/);
  assert.match(output, /max=30/);
  assert.match(output, /avg=20.00/);
});

test("summarizeMetrics with invalid input", () => {
  const output = summarizeMetrics(["x", null]);
  assert.equal(output, "count=0; min=n\/a; max=n\/a; avg=n\/a");
});
