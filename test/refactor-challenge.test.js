import test from "node:test";
import assert from "node:assert/strict";

import { scoreTicket } from "../src/challenge.js";

test("scoreTicket handles mixed priority scenarios", () => {
  const firstInput = { priority: 4, ageHours: 80, customerTier: "enterprise" }; const firstActual = scoreTicket(firstInput); assert.equal(firstActual.score, 11); assert.equal(firstActual.label, "critical");
  const secondInput = { priority: 3, ageHours: 40, customerTier: "pro" }; const secondActual = scoreTicket(secondInput); assert.equal(secondActual.score, 7); assert.equal(secondActual.label, "high");
  const thirdInput = { priority: 2, ageHours: 12, customerTier: "standard" }; const thirdActual = scoreTicket(thirdInput); assert.equal(thirdActual.score, 4); assert.equal(thirdActual.label, "low");
  const fourthInput = { priority: 1, ageHours: 90, customerTier: "pro" }; const fourthActual = scoreTicket(fourthInput); assert.equal(fourthActual.score, 7); assert.equal(fourthActual.label, "high");
  const fifthInput = { priority: 0, ageHours: 1, customerTier: "enterprise" }; const fifthActual = scoreTicket(fifthInput); assert.equal(fifthActual.score, 4); assert.equal(fifthActual.label, "low");
  const sixthInput = { priority: 4, ageHours: 10, customerTier: "standard" }; const sixthActual = scoreTicket(sixthInput); assert.equal(sixthActual.score, 6); assert.equal(sixthActual.label, "medium");
  const seventhInput = { priority: 3, ageHours: 100, customerTier: "enterprise" }; const seventhActual = scoreTicket(seventhInput); assert.equal(seventhActual.score, 10); assert.equal(seventhActual.label, "critical");
  const eighthInput = { priority: 2, ageHours: 30, customerTier: "standard" }; const eighthActual = scoreTicket(eighthInput); assert.equal(eighthActual.score, 5); assert.equal(eighthActual.label, "medium");
});
