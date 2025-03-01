const { expect, assert } = require('chai');
const { testOptional, checkForThrowingErrors, CONSTANTS } = require('../extensions/index.js');
const { chainMaker } = require('../src/simple-chain.js');

const { CORRECT_RESULT_MSG } = CONSTANTS;

it.optional = testOptional;

Object.freeze(expect);
Object.freeze(assert);

describe('Make chain!', () => {
    // Presence requirement
    describe('variable presence', () => {
        it.optional('object chainMaker exists', () => {
            expect(chainMaker).to.exist;
            const type = typeof chainMaker;
            expect(type).to.be.equal('object');
        });
    });

    describe('base requirements', () => {
        it.optional('chaining works!', () => {
            assert.deepEqual(chainMaker.addLink(function () { }).addLink('2nd').addLink('3rd').removeLink(2).reverseChain().finishChain(), '( 3rd )~~( function () { } )');
        });

        it.optional('throws an Error with message "You can\'t remove incorrect link!" on trying to remove wrong link', function () {
            const res = checkForThrowingErrors.call(this, [
                () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0),
                () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'),
                () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
                () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
            ], 'You can\'t remove incorrect link!');

            assert.strictEqual(res.every($ => $ === CORRECT_RESULT_MSG), true);
        });
    });

    // Functional requirements
    describe('functional requirements', () => {
        it.optional('function returns correct values', () => {
            assert.deepEqual(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');
            assert.deepEqual(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain(), '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )');
            assert.deepEqual(chainMaker.addLink(false).reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(1.233).addLink(false).addLink(1).reverseChain().addLink(1).finishChain(), '( 1 )~~( false )~~( 1.233 )~~( [object Object] )~~( false )~~( 1 )');
            assert.deepEqual(chainMaker.reverseChain().reverseChain().addLink(NaN).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(true).finishChain(), '( NaN )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( [object Object] )~~( true )');
            assert.deepEqual(chainMaker.addLink(1).reverseChain().addLink(0).reverseChain().addLink(NaN).addLink(1.233).addLink(null).addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).finishChain(), '( [object Object] )~~( null )~~( 1.233 )~~( NaN )~~( 1 )~~( 0 )~~( [object Object] )');
            assert.deepEqual(chainMaker.addLink(NaN).addLink(null).addLink(Infinity).addLink(1).reverseChain().addLink(null).reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).addLink(22).addLink(333).finishChain(), '( null )~~( NaN )~~( null )~~( Infinity )~~( 1 )~~( [object Object] )~~( 22 )~~( 333 )');
            assert.deepEqual(chainMaker.addLink(0).addLink(NaN).addLink(1).reverseChain().addLink(0).reverseChain().reverseChain().addLink(1).finishChain(), '( 1 )~~( 0 )~~( NaN )~~( 0 )~~( 1 )');
        });
    });
});
