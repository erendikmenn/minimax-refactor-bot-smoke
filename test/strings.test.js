import test from "node:test";
import assert from "node:assert/strict";

function toSlug(input) {
  return String(input)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

test("toSlug basic", () => {
  const actual = toSlug("Hello World");
  const expected = "hello-world";
  assert.equal(actual, expected);
});

test("toSlug trims and collapses", () => {
  const actual = toSlug("   hello   world   ");
  const expected = "hello-world";
  assert.equal(actual, expected);
});

test("toSlug removes symbols", () => {
  const actual = toSlug("Hello @@@ World!!!");
  const expected = "hello-world";
  assert.equal(actual, expected);
});
