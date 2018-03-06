const expect = require('chai').expect;
const {Message} = require('discord.js');

const {ERRORS} = require('../utils/constants');
const {test} = require('./test');


describe('Testing commands', () => {
    describe('Test command', () => {
        it('Creates a default command with isTest as true', () => {
            let cmd = test;

            let result = cmd.run({});
            expect(result).to.be.undefined;
            expect(cmd.isTest).to.be.true;
        });
    });

    describe('TestWithArgTypes command', () => {
        it('Should correctly check types', () => {
            let cmd = test;
            const messageObj = new Message();

            expect(cmd.isTest).to.be.true;
            expect(() => cmd.exec(messageObj, ['a', 1])).to.not.throw(ERRORS.TYPE_MISSMATCH);
        });

        it('Should throw error if types missmatch', () => {
            let cmd = test;
            const messageObj = new Message();

            expect(cmd.isTest).to.be.true;
            expect(() => cmd.exec(messageObj, ['a', 'b'])).to.throw(ERRORS.TYPE_MISSMATCH);
        });
    });
});
