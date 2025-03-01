const { expect, assert } = require('chai');
const { testOptional, checkForThrowingErrors, CONSTANTS } = require('../extensions/index.js');
const { transform } = require('../src/transform-array.js');

const { CORRECT_RESULT_MSG } = CONSTANTS;

it.optional = testOptional;

Object.freeze(expect);
Object.freeze(assert);

describe('transform', function() {
    it('should return an array with the control sequences applied correctly', function() {
        const input = [1, 2, 3, '--double-next', 4, 5];
        const expectedOutput = [1, 2, 3, 4, 4, 5];
        expect(transform(input)).to.deep.equal(expectedOutput);
    });

    it('should discard the previous element when "--discard-prev" is used', function() {
        const input = [1, 2, 3, '--discard-prev', 4, 5];
        const expectedOutput = [1, 2, 4, 5];
        expect(transform(input)).to.deep.equal(expectedOutput);
    });

    it('should throw an error if the input is not an array', function() {
        expect(() => transform("not an array")).to.throw('arr parameter must be an instance of the Array!');
    });

    it('should correctly duplicate the next element when "--double-next" is used', function() {
        const input = [1, 2, 3, '--double-next', 4, 5];
        const expectedOutput = [1, 2, 3, 4, 4, 5];
        expect(transform(input)).to.deep.equal(expectedOutput);
    });

    it('should return an empty array if input array is empty', function() {
        const input = [];
        const expectedOutput = [];
        expect(transform(input)).to.deep.equal(expectedOutput);
    });

    it('should throw an error if there are consecutive control sequences', function() {
        const input = ['--discard-prev', '--double-next'];
        expect(() => transform(input)).to.throw('arr parameter must be an instance of the Array!');
    });
});
