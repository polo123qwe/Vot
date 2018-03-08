const expect = require('chai').expect;
const {TextChannel, DMChannel, GroupDMChannel, Guild} = require('discord.js');

const {isUser, isTextChannel} = require('./discordUtils');


describe('DiscordUtils', () => {
    describe('isUser method', () => {
        it('Returns true if matches username', () => {
            let result = isUser('a username', {
                username: 'a username',
            });

            expect(result).to.be.true;
        });

        it('Accepts partial matches for username', () => {
            let result = isUser('a user', {
                username: 'a username',
            });

            expect(result).to.be.true;
        });

        it('Accepts partial matches for nickname', () => {
            let result = isUser('a nick', {
                username: 'a username',
                nickname: 'a nickname'
            });

            expect(result).to.be.true;
        });

        it('Returns true if the id matches', () => {
            let result = isUser('1234567890', {
                id: '1234567890',
                username: 'a username',
            });

            expect(result).to.be.true;
        });

        it('Returns true if the nickname matches', () => {
            let result = isUser('a nickname', {
                id: '1234567890',
                username: 'a username',
                nickname: 'a nickname'
            });

            expect(result).to.be.true;
        });

        it('Returns true if it matches username+discriminator', () => {
            let result = isUser('a username#1234', {
                id: '1234567890',
                username: 'a username',
                discriminator: '1234',
            });

            expect(result).to.be.true;
        });

        it('Strict returns true if it matches username+discriminator', () => {
            let result = isUser('a username#1234', {
                id: '1234567890',
                username: 'a username',
                discriminator: '1234',
            }, true);

            expect(result).to.be.true;
        });

        it('Strict returns true if it matches username+discriminator', () => {
            let result = isUser('a username#1234', {
                id: '1234567890',
                username: 'a username',
                discriminator: '1234',
            }, true);

            expect(result).to.be.true;
        });

        it('Strict returns true if it matches username', () => {
            let result = isUser('a username', {
                id: '1234567890',
                username: 'a username',
                discriminator: '1234',
            }, true);

            expect(result).to.be.true;
        });

        it('Strict returns false if its a partial match for username', () => {
            let result = isUser('a user', {
                username: 'a username',
                discriminator: '1234',
            }, true);

            expect(result).to.be.false;
        });

        it('Strict returns false if its a partial match for nickname', () => {
            let result = isUser('a nick', {
                username: 'a username',
                discriminator: '1234',
                nickname: 'a nickname'
            }, true);

            expect(result).to.be.false;
        });
    });
    describe('isGuildChannel', () => {
        it('Should return false if param is null', () => {
            expect(isTextChannel()).to.be.false;
        });

        it('Should return true if param is a TextChannel', () => {
            let textChannel = new TextChannel(new Guild());
            expect(isTextChannel(textChannel)).to.be.true;
        });

        it('Should return false if param is any other type of Channel', () => {
            let dmChannel = new DMChannel();
            let groupDmChannel = new GroupDMChannel();

            expect(isTextChannel(dmChannel)).to.be.false;
            expect(isTextChannel(groupDmChannel)).to.be.false;
        });
    });
});