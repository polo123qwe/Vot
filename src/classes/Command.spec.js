const expect = require('chai').expect;
const Command = require('./Command');
const LEVELS = require('./Permission').LEVELS;
const {Logger} = require('winston');

describe('Create a command with a command name', () => {
    it('Should create a command with default values', () => {
        let cmd = new Command();

        expect(cmd).to.have.all.keys({
            alias: [],
            argTypes: [],
            category: 'General',
            dmOnly: false,
            reqDB: false,
            minLevel: LEVELS.ALL
        });
    });

    it('Should have an empty run function that prints an errror', () => {
        let cmd = new Command();

        let result = cmd.run();
        expect(result).to.be.undefined;
    });
});