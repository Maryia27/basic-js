const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { getSumOfDigits } = require('../src/sum-digits.js');

it.optional = testOptional;

Object.freeze(assert);

describe('Sum digits', () => {
  it.optional('should return the sum of digits', () => {
    // Test cases for getSumOfDigits function
    assert.strictEqual(getSumOfDigits(91), 1);   // 9 + 1 = 10, 1 + 0 = 1
    assert.strictEqual(getSumOfDigits(100), 1);  // 1 + 0 + 0 = 1
    assert.strictEqual(getSumOfDigits(35), 8);   // 3 + 5 = 8
    assert.strictEqual(getSumOfDigits(99), 9);   // 9 + 9 = 18, 1 + 8 = 9
    assert.strictEqual(getSumOfDigits(123), 6);  // 1 + 2 + 3 = 6
    assert.strictEqual(getSumOfDigits(999), 9);  // 9 + 9 + 9 = 27, 2 + 7 = 9
    assert.strictEqual(getSumOfDigits(8), 8);    // 8 (single digit)
  });
});
