const expect = require('chai').expect;
const {Message, TextChannel} = require('discord.js');

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
            const messageObj = new Message(new TextChannel({id: '1234567'}));

            messageObj.author = {
                id: '01234567890'
            };

            expect(cmd.isTest).to.be.true;
            cmd.exec(messageObj, ['a', 1]).catch(e => {
                expect(e).to.be.null;
            });
        });

        it('Should throw error if types missmatch', () => {
            let cmd = test;
            const messageObj = new Message();

            expect(cmd.isTest).to.be.true;
            cmd.exec(messageObj, ['a', 'b']).catch(e => {
                expect(e).to.be.equals(ERRORS.TYPE_MISSMATCH);
            });
        });
    });
});
