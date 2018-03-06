const expect = require('chai').expect;

const {checkTypes} = require('./checkParser');
const {ARG_TYPES} = require('../utils/constants');

describe('Check arg types', () => {
    it('Correctly detects a string', () => {
        const args = ['a'];
        const argTypes = [ARG_TYPES.STRING];

        let result = checkTypes(args, argTypes);

        expect(result).to.have.same.members([true]);
    });

    it('Correctly detects a number', () => {
        const args = ['5'];
        const argTypes = [ARG_TYPES.NUMBER];

        let result = checkTypes(args, argTypes);

        expect(result).to.have.same.members([true]);
    });

    it('Returns false when types do not match', () => {
        const args = ['b'];
        const argTypes = [ARG_TYPES.NUMBER];

        let result = checkTypes(args, argTypes);

        expect(result).to.have.same.members([false]);
    });

    it('Numbers can be considered strings too', () => {
        const args = [1];
        const argTypes = [ARG_TYPES.STRING];

        let result = checkTypes(args, argTypes);

        expect(result).to.have.same.members([true]);
    });

    it('Handles multiple elements', () => {
        const args = ['b', '5', 'b'];
        const argTypes = [ARG_TYPES.STRING, ARG_TYPES.NUMBER, ARG_TYPES.NUMBER];

        let result = checkTypes(args, argTypes);

        expect(result).to.have.same.members([true, true, false]);
    });

    it('Stops if there is more args than argTypes', () => {
        const args = ['b', '5', 'b', 'a'];
        const argTypes = [ARG_TYPES.STRING, ARG_TYPES.NUMBER, ARG_TYPES.NUMBER];

        let result = checkTypes(args, argTypes);

        expect(result).to.have.same.members([true, true, false]);
    });

    it('Returns empty array if args or argTypes are not arrays', () => {
        let result = checkTypes({}, {});

        expect(result).to.have.same.members([]);
    });
});