const expect = require('chai').expect;
const sinon = require('sinon');
const {Collection} = require('discord.js');
const logger = require('../utils/logger');

// const {ERRORS} = require('../utils/constants');
const {guild} = require('./discordInfo');

let sandbox;

describe('Discord Info commands', () => {

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
    });

    describe('Guild command', () => {
        it('Returns guild info', () => {
            let fakeMsg = messageObj;    
            let channelStub = sandbox.stub(fakeMsg.channel, 'send').resolves();

            guild.run(fakeMsg, []);
            expect(channelStub.calledOnce).to.be.true;
        });

        it('Rejects calls the logger', () => {
            let fakeMsg = messageObj;    
            sandbox.stub(fakeMsg.channel, 'send').rejects();
            
            guild.run(fakeMsg, []);
        });

    });

    afterEach(() => {
        sandbox.restore();
    });
});

let messageObj = {
    channel: {
        send: () => new Promise()
    },
    guild: {
        owner: {
            user: {
                username: 'A username',
                discriminator: '1234'
            }
        },
        ownerID: '1234567890',
        region: 'A region',
        createdAt: new Date('1/1/2005'),
        verificationLevel: 1,
        emojis: new Collection(),
        channels: new Collection(),
        roles: new Collection(),
        memberCount: 10,
        members: getMembersCollection()
    }
};

function getMembersCollection() {
    let collection = new Collection([[ 1234567890, {user: {bot: true}} ]]);
    return collection;
}