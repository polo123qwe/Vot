const {expect} = require('chai');
const Command = require('./Command');
const LEVELS = require('./Permission').LEVELS;
const {Message} = require('discord.js');

const logger = require('../utils/logger');

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

    it('Run function should have 2 objects as parameters', () => {
        let cmd = new Command();

        let messageObj = new Message();

        let result = cmd.run(messageObj, []);
        expect(result).to.be.undefined;
    });

    it('run should throw an error if first parameter is not an object', () => {
        let cmd = new Command();

        expect(() => cmd.run({}, [])).to.throw('Incorect message object!');
    });

    it('run should throw an error if second parameter is not an array', () => {
        let cmd = new Command();

        let messageObj = new Message();

        expect(() => cmd.run(messageObj, '')).to.throw('args is not an array!');
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