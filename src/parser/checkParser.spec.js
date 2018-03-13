const expect = require('chai').expect;

const {checkTypes} = require('./checkParser');
const {ARG_TYPES} = require('../utils/constants');

describe('Check arg types', () => {
    it('Correctly detects a string', () => {
        let result = checkTypesWithArgs(['a'], [ARG_TYPES.STRING]);

        expect(result).to.have.same.members([true]);
    });

    it('Correctly detects a number', () => {
        let result = checkTypesWithArgs(['5'], [ARG_TYPES.NUMBER]);

        expect(result).to.have.same.members([true]);
    });

    it('Returns false when types do not match', () => {
        let result = checkTypesWithArgs(['b'], [ARG_TYPES.NUMBER]);

        expect(result).to.have.same.members([false]);
    });

    it('Numbers can be considered strings too', () => {
        let result = checkTypesWithArgs([1], [ARG_TYPES.STRING]);

        expect(result).to.have.same.members([true]);
    });

    it('Handles multiple elements', () => {
        const args = ['b', '5', 'b'];
        const argTypes = [ARG_TYPES.STRING, ARG_TYPES.NUMBER, ARG_TYPES.NUMBER];

        let result = checkTypesWithArgs(args, argTypes);

        expect(result).to.have.same.members([true, true, false]);
    });

    it('Stops if there is more args than argTypes', () => {
        const args = ['b', '5', 'b', 'a'];
        const argTypes = [ARG_TYPES.STRING, ARG_TYPES.NUMBER, ARG_TYPES.NUMBER];

        let result = checkTypesWithArgs(args, argTypes);

        expect(result).to.have.same.members([true, true, false]);
    });

    it('Returns empty array if args or argTypes are not arrays', () => {
        let result = checkTypes({}, {});

        expect(result).to.have.same.members([]);
    });
});

function checkTypesWithArgs(args, argTypes) {
    return checkTypes(args, argTypes);
}