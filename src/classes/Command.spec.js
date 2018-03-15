const {expect} = require('chai');
const sinon = require('sinon');

const {DMChannel, Message} = require('discord.js');
// const logger = require('../utils/logger');

const {ERRORS, LEVELS} = require('../utils/constants');
const Command = require('./Command');
const permissions = require('../auth/permissions');


describe('Create a command with a command name', () => {
    it('Should create a command with default values', () => {
        let cmd = new Command();

        expect(cmd).to.have.all.keys({
            alias: [],
            argTypes: [],
            category: 'General',
            dmDisabled: false,
            reqDB: false,
            minLevel: LEVELS.ALL,
            isTest: false
        });
    });

    it('Exec function should have 2 objects as parameters', () => {
        let cmd = new Command();

        let messageObj = new Message(null, null);

        // Add a fake id to check id
        messageObj.author = {};
        messageObj.author.id = '0123456789';

        let result = cmd.exec(messageObj, []);
        expect(result).to.be.undefined;
    });

    it('Exec function should throw error if there is not enough permission to execute', () => {
        let fetchUserPermissionStub = sinon.stub(permissions, 'fetchUserPermission');
        fetchUserPermissionStub.rejects();
        
        let cmd = new Command();

        let messageObj = new Message(null, null);

        // Add a null id
        messageObj.author = {};
        messageObj.author.id = null;

        cmd.exec(messageObj, []);
    });

    it('exec should throw an error if first parameter is not an object', () => {
        let cmd = new Command();

        expect(() => cmd.exec({}, [])).to.throw(ERRORS.INCORRECT_MESSAGE_OBJECT);
    });

    it('exec should throw an error if second parameter is not an array', () => {
        let cmd = new Command();

        let messageObj = new Message();

        expect(() => cmd.exec(messageObj, '')).to.throw(ERRORS.NOT_ARRAY);
    });

    it('exec should throw an error if channel is a DM and command is disabled on DMs', () => {
        let cmd = new Command();
        cmd.dmDisabled = true;

        let messageObj = new Message(new DMChannel);

        expect(() => cmd.exec(messageObj, [])).to.throw(ERRORS.FORBIDDEN_CHANNEL);
    });

    it('Should create a command with default values and isTest as true', () => {
        let cmd = new Command(null, null, true);

        expect(cmd).to.contain.keys({
            isTest: true
        });
    });
});