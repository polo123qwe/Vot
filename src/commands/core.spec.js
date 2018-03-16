const expect = require('chai').expect;
const sinon = require('sinon');

const {ping} = require('./core');

describe('Testing core', () => {
    describe('Ping command', () => {
        it('Calls send command on the channel of the message', () => {
            let fakeMsg = {
                channel: {
                    send: () => 'Pong!'
                }
            };
            let sendSpy = sinon.spy(fakeMsg.channel, 'send');

            ping.run(fakeMsg, [], {ping: 1});
            expect(sendSpy.calledOnce).to.be.true;
            sendSpy.restore();
        });
    });
});