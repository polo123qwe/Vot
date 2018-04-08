const expect = require('chai').expect;
const sinon = require('sinon');

const {ping} = require('./core');

let sandbox;

describe('Testing core', () => {

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    describe('Ping command', () => {
        it('Calls send command on the channel of the message', () => {
            let fakeMsg = {
                channel: {
                    send: () => new Promise()
                }
            };

            let channelStub = sandbox.stub(fakeMsg.channel, 'send').resolves();

            ping.run(fakeMsg, [], {ping: 1});
            expect(channelStub.calledOnce).to.be.true;
        });
    });

    afterEach(() => {
        sandbox.restore();
    });
});