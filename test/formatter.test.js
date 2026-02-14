import test from "node:test";
import assert from "node:assert/strict";

import { formatStatCard } from "../src/formatter.js";

function assertFormat(input, expectedPattern) {
  const output = formatStatCard(input);
  assert.match(output, expectedPattern);
}

test("formatStatCard with unit", () => {
  assertFormat({ title: "Latency", value: 120, unit: "ms" }, /Latency: 120 ms/);
});

test("formatStatCard defaults", () => {
  assertFormat({}, /Untitled: 0/);
});
 