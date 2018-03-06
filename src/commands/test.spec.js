const expect = require('chai').expect;
const {test} = require('./test');

describe('Test command', () => {
    it('Creates a default command with isTest as true', () => {
        let cmd = test;

        let result = cmd.run({});
        expect(result).to.be.undefined;
        expect(cmd.isTest).to.be.true;
    });
});