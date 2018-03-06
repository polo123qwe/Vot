const {expect} = require('chai');
const {Message} = require('discord.js');
const logger = require('../utils/logger');

const {ERRORS} = require('../utils/constants');
const LEVELS = require('./Permission').LEVELS;
const Command = require('./Command');


describe('Create a command with a command name', () => {
    it('Should create a command with default values', () => {
        let cmd = new Command();

        expect(cmd).to.have.all.keys({
            alias: [],
            argTypes: [],
            category: 'General',
            dmOnly: false,
            reqDB: false,
            minLevel: LEVELS.ALL,
            isTest: false
        });
    });

    it('Exec function should have 2 objects as parameters', () => {
        let cmd = new Command();

        let messageObj = new Message();

        let result = cmd.exec(messageObj, []);
        expect(result).to.be.undefined;
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

    it('Should create a command with default values and isTest as true', () => {
        let cmd = new Command(null, null, true);

        expect(cmd).to.have.all.keys({
            alias: [],
            argTypes: [],
            category: 'General',
            dmOnly: false,
            reqDB: false,
            minLevel: LEVELS.ALL,
            isTest: true
        });
    });
});