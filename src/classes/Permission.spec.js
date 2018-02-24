const expect = require('chai').expect;
const Permissions = require('./Permission');

describe('Permissions test', () => {
    it('It has levels', () => {
        expect(Permissions.LEVELS).not.to.be.null;
    });
});