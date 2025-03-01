const { expect, assert } = require('chai');
const { testOptional, checkForThrowingErrors, CONSTANTS } = require('../extensions/index.js');
const { VigenereCipheringMachine } = require('../src/vigenere-cipher.js');

const { CORRECT_RESULT_MSG } = CONSTANTS;

it.optional = testOptional;

Object.freeze(expect);
Object.freeze(assert);

describe('Vigenère Cipher', () => {
  it.optional('should correctly encode and decode messages', () => {
    const machine = new VigenereCipheringMachine();

    // Encoding tests
    assert.strictEqual(machine.encrypt('HELLO', 'KEY'), 'RIJVS');
    assert.strictEqual(machine.encrypt('ATTACKATDAWN', 'LEMON'), 'LXFOPV EF RNHR');
    assert.strictEqual(machine.encrypt('Hello World!', 'KEY'), 'RIJVS UYVJN!');

    // Decoding tests
    assert.strictEqual(machine.decrypt('RIJVS', 'KEY'), 'HELLO');
    assert.strictEqual(machine.decrypt('LXFOPV EF RNHR', 'LEMON'), 'ATTACKATDAWN');
    assert.strictEqual(machine.decrypt('RIJVS UYVJN!', 'KEY'), 'HELLO WORLD!');
  });

  it.optional('should handle edge cases', () => {
    const machine = new VigenereCipheringMachine();

    // Test with empty string
    assert.strictEqual(machine.encrypt('', 'KEY'), '');
    assert.strictEqual(machine.decrypt('', 'KEY'), '');

    // Test with empty key
    assert.throws(() => machine.encrypt('HELLO', ''), 'Error: Invalid key!');
    assert.throws(() => machine.decrypt('HELLO', ''), 'Error: Invalid key!');

    // Test with non-alphabetic characters in message
    assert.strictEqual(machine.encrypt('HELLO WORLD 123!', 'KEY'), 'RIJVS UYVJN 123!');
    assert.strictEqual(machine.decrypt('RIJVS UYVJN 123!', 'KEY'), 'HELLO WORLD 123!');
  });

  it.optional('should handle invalid inputs', () => {
    const machine = new VigenereCipheringMachine();

    // Invalid message input (e.g., numbers or special chars)
    assert.throws(() => machine.encrypt(12345, 'KEY'), 'Error: Invalid message!');
    assert.throws(() => machine.decrypt(12345, 'KEY'), 'Error: Invalid message!');
  });

  it.optional('should handle a random long string', () => {
    const machine = new VigenereCipheringMachine();
    const randomMessage = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%' +
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%' +
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$(),./|*-&^%';
    const randomKey = 'RANDOMKEY';

    const encrypted = machine.encrypt(randomMessage, randomKey);
    const decrypted = machine.decrypt(encrypted, randomKey);

    assert.strictEqual(decrypted, randomMessage);
  });
});
