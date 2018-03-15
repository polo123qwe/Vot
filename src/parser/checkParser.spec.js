const expect = require('chai').expect;

const {checkTypes} = require('./checkParser');
const {ARG_TYPES} = require('../utils/constants');

describe('Check arg types', () => {
    function makeCheckTypesTest(args, argTypes, expected) {
        return () => {
            let result = checkTypes(args, argTypes);

            expect(result).to.have.same.members(expected);
        };
    }
    it('Correctly detects a string', makeCheckTypesTest(['a'], [ARG_TYPES.STRING], [true]));

    it('Correctly detects a number', makeCheckTypesTest(['5'], [ARG_TYPES.NUMBER], [true]));

    it('Returns false when types do not match', makeCheckTypesTest(['b'], [ARG_TYPES.NUMBER], [false]));

    it('Numbers can be considered strings too', makeCheckTypesTest([1], [ARG_TYPES.STRING], [true]));

    it('Handles multiple elements', () => {
        const args = ['b', '5', 'b'];
        const argTypes = [ARG_TYPES.STRING, ARG_TYPES.NUMBER, ARG_TYPES.NUMBER];

        makeCheckTypesTest(args, argTypes, [true, true, false])();
    });

    it('Stops early if there is more args than argTypes', () => {
        const args = ['b', '5', 'b', 'a'];
        const argTypes = [ARG_TYPES.STRING, ARG_TYPES.NUMBER, ARG_TYPES.NUMBER];

        makeCheckTypesTest(args, argTypes, [true, true, false])();
    });

    it('Returns empty array if args or argTypes are not arrays', makeCheckTypesTest({}, {}, []));
});