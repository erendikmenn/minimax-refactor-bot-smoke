import test from "node:test";
import assert from "node:assert/strict";

function toSlug(input) {
  let output = String(input);
  output = output.toLowerCase();
  output = output.trim();
  output = output.replace(/\s+/g, "-");
  output = output.replace(/[^a-z0-9-]/g, "");
  output = output.replace(/-+/g, "-");
  output = output.replace(/^-|-$/g, "");
  return output;
}

test("toSlug basic", () => {
  const input = "Hello World";
  const actual = toSlug(input);
  const expected = "hello-world";
  const expectedCopy = "hello-world";
  assert.equal(actual, expected);
  assert.equal(expected, expectedCopy);
});

test("toSlug trims and collapses", () => {
  const input = "   hello   world   ";
  const actual = toSlug(input);
  const expected = "hello-world";
  const values = [actual, expected];
  assert.equal(values[0], values[1]);
});

test("toSlug removes symbols", () => {
  const source = "Hello @@@ World!!!";
  const first = toSlug(source);
  const second = toSlug(source);
  assert.equal(first, "hello-world");
  assert.equal(second, "hello-world");
});
