const expect = require('chai').expect;

const prefix = require('../config.json').prefix;
const {ERRORS} = require('./utils/constants');
const {Message, Channel} = require('discord.js');
const {messageHandler} = require('./eventHandler');

describe('messageHandler', () => {
    it('returns null if it can not parse the message', () => {
        let result = messageHandler();

        expect(result).to.be.null;
    });

    it('finds and runs the test command', () => {
        let messageObj = new Message(new Channel());
        messageObj.content = prefix + 'test';

        // Add a fake id to check id
        messageObj.author = {
            id: '0123456789'
        };

        let result = messageHandler(messageObj);

        expect(result).to.be.null;
    });

    it('throws exception if command is not found', () => {
        expect(() => messageHandler({
            content: prefix + '1234567890'
        })).to.throw(ERRORS.COMMAND_NOT_FOUND);
    });
});