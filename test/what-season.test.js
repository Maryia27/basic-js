const { expect, assert } = require('chai');
const { testOptional, checkForThrowingErrors, checkForNotThrowingErrors, CONSTANTS } = require('../extensions/index.js');
const { getSeason } = require('../src/what-season.js');

const { CORRECT_RESULT_MSG, INCORRECT_RESULT_MSG } = CONSTANTS;

it.optional = testOptional;

Object.freeze(expect);
Object.freeze(assert);

describe('What season', () => {
    // Presence requirement
    describe('variable presence', () => {
        it.optional('function getSeason exists', () => {
            expect(getSeason).to.exist;
            expect(getSeason).to.be.instanceOf(Function);
        });
    });

    // Specific requirements
    describe('base requirements', () => {
        it.optional('returns proper value', () => {
            const [
                winter,
                spring,
                summer,
                autumn,
            ] = [
                new Date(2019, 11, 22, 23, 45, 11, 500), // Winter
                new Date(2018, 4, 17, 11, 27, 4, 321),  // Spring
                new Date(2017, 6, 11, 23, 45, 11, 500), // Summer
                new Date(1994, 8, 26, 3, 0, 11, 500),   // Autumn
            ];

            assert.equal(getSeason(winter), 'winter');
            assert.equal(getSeason(spring), 'spring');
            assert.equal(getSeason(summer), 'summer');
            expect(getSeason(autumn)).to.match(/autumn|fall/);
        });
    });

    // Handling edge cases for invalid input
    describe('invalid inputs', () => {
        it.optional('should return undefined for invalid input', () => {
            assert.isUndefined(getSeason('not a date'));
            assert.isUndefined(getSeason(null));
            assert.isUndefined(getSeason(undefined));
            assert.isUndefined(getSeason({}));
        });

        it.optional('should handle invalid date object gracefully', () => {
            const invalidDate = new Date('invalid date');
            assert.isNaN(invalidDate.getTime(), 'Date is invalid');
            assert.isUndefined(getSeason(invalidDate));
        });
    });
});
