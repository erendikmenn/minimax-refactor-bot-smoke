import test from "node:test";
import assert from "node:assert/strict";

import { scoreTicket } from "../src/challenge.js";

test("scoreTicket handles mixed priority scenarios", () => {
  // Test case 1: high priority + old + enterprise = critical
  {
    const input = { priority: 4, ageHours: 80, customerTier: "enterprise" };
    const actual = scoreTicket(input);
    assert.equal(actual.score, 11);
    assert.equal(actual.label, "critical");
  }

  // Test case 2: high priority + medium age + pro = high
  {
    const input = { priority: 3, ageHours: 40, customerTier: "pro" };
    const actual = scoreTicket(input);
    assert.equal(actual.score, 7);
    assert.equal(actual.label, "high");
  }

  // Test case 3: low priority + fresh + standard = low
  {
    const input = { priority: 2, ageHours: 12, customerTier: "standard" };
    const actual = scoreTicket(input);
    assert.equal(actual.score, 4);
    assert.equal(actual.label, "low");
  }

  // Test case 4: low priority + very old + pro = high (age bonus)
  {
    const input = { priority: 1, ageHours: 90, customerTier: "pro" };
    const actual = scoreTicket(input);
    assert.equal(actual.score, 7);
    assert.equal(actual.label, "high");
  }

  // Test case 5: lowest priority + fresh + enterprise = low (tier bonus)
  {
    const input = { priority: 0, ageHours: 1, customerTier: "enterprise" };
    const actual = scoreTicket(input);
    assert.equal(actual.score, 4);
    assert.equal(actual.label, "low");
  }

  // Test case 6: highest priority + fresh + standard = medium
  {
    const input = { priority: 4, ageHours: 10, customerTier: "standard" };
    const actual = scoreTicket(input);
    assert.equal(actual.score, 6);
    assert.equal(actual.label, "medium");
  }

  // Test case 7: high priority + very old + enterprise = critical
  {
    const input = { priority: 3, ageHours: 100, customerTier: "enterprise" };
    const actual = scoreTicket(input);
    assert.equal(actual.score, 10);
    assert.equal(actual.label, "critical");
  }

  // Test case 8: medium priority + medium age + standard = medium
  {
    const input = { priority: 2, ageHours: 30, customerTier: "standard" };
    const actual = scoreTicket(input);
    assert.equal(actual.score, 5);
    assert.equal(actual.label, "medium");
  }
});