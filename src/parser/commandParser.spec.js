const expect = require('chai').expect;
const commandParser = require('./commandParser');
const prefix = require('../../config.json').prefix;

describe('CommandParser', () => {
    it('Returns null if no parameter is sent', () => {
        let result = commandParser();

        expect(result).to.be.null;
    });

    it('Returns null if msg content does not contain the prefix', () => {
        let result = commandParser({
            content: ''
        });

        expect(result).to.be.null;
    });

    it('Returns object if it has prefix', () => {
        const msg = {
            content: prefix + 'test'
        };

        let result = commandParser(msg);

        expect(result).to.contain.keys({
            content: msg.content,
            commandName: 'test'
        });
    });

    it('Returns object with parameters', () => {
        const msg = {
            content: prefix + 'test is being tested'
        };

        let result = commandParser(msg);

        let expectedResult = {
            content: msg.content,
            args: ['is', 'being', 'tested'],
            argsAsString: 'is being tested',
            commandName: 'test'
        };

        expect(result).to.have.deep.all.keys(expectedResult);

        expect(result.content).to.be.equal(expectedResult.content);
        expect(result.args).to.have.members(expectedResult.args);
        expect(result.argsAsString).to.be.equal(expectedResult.argsAsString);
        expect(result.commandName).to.be.equal(expectedResult.commandName);
    });
});