import { test } from "node:test";
import assert from "node:assert/strict";
import { total } from "../../src/price.js";

test("AC-01 total adds 7% VAT", () => {
  assert.equal(total(100), 107);
  assert.equal(total(99.99), 106.99);
});
