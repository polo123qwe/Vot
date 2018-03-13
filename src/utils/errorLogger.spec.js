const expect = require('chai').expect;
const errorLogger = require('./errorLogger');

describe('ErrorLogger', () => {
    it('logs a message to a channel', () => {
        expect(() => errorLogger('An error', null)).to.not.throw();
    });
});