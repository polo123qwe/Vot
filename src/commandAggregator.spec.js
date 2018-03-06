const expect = require('chai').expect;

const LEVELS = require('./classes/Permission').LEVELS;
const {findCommand} = require('./commandAggregator');

describe('findCommand', () => {
    it('finds the test command', () => {
        let cmd = findCommand('test');

        expect(cmd).to.contain.keys({
            alias: [],
            argTypes: [],
            category: 'General',
            dmOnly: false,
            reqDB: false,
            minLevel: LEVELS.ALL,
            isTest: true,
            name: 'test'
        });
    });

    it('finds a command by its alias', () => {
        let cmd = findCommand('testAlias');

        expect(cmd).to.contain.keys({
            alias: ['testAlias'],
            argTypes: [],
            category: 'General',
            dmOnly: false,
            reqDB: false,
            minLevel: LEVELS.ALL,
            isTest: true,
            name: 'test'
        });
    });

    it('finds nothing if not passed a string', () => {
        let cmd = findCommand();

        expect(cmd).to.be.null;
    });

    it('finds nothing if the command does not exist', () => {
        let cmd = findCommand('123456789');

        expect(cmd).to.be.null;
    });
});