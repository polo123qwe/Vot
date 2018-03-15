const expect = require('chai').expect;
const sinon = require('sinon');

const errorLogger = require('./errorLogger');

describe('ErrorLogger', () => {
    it('does nothing if no channel is sent as a parameter', () => {
        expect(errorLogger('An error')).to.be.undefined;
    });

    it('logs a message to a channel', () => {
        let fakeChannel = {
            send: function() {}
        };
        let spy = sinon.spy(fakeChannel, 'send');

        errorLogger('An error', fakeChannel);
        sinon.assert.calledOnce(spy);
    });
});