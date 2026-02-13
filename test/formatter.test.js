import test from "node:test";
import assert from "node:assert/strict";

import { formatStatCard } from "../src/formatter.js";

test("formatStatCard with unit", () => {
  const output = formatStatCard({ title: "Latency", value: 120, unit: "ms" });
  assert.match(output, /Latency: 120 ms/);
});

test("formatStatCard defaults", () => {
  const output = formatStatCard({});
  assert.match(output, /Untitled: 0/);
});
