const expect = require('chai').expect;
const {TextChannel, DMChannel, GroupDMChannel, Guild} = require('discord.js');

const {MACTHING_TYPES} = require('./constants');
const {isUser, isExactUser, isTextChannel} = require('./discordUtils');


describe('DiscordUtils', () => {
    function makeIsUserTest(string, expectToBe, exact = false) {
        return () => {
            if(exact) {
                expect(isExactUser(string, getFakeUser())).to.be.equal(expectToBe);
            } else {
                expect(isUser(string, getFakeUser())).to.be.equal(expectToBe);
            }
        };
    }

    describe('isUser method', () => {
        
        it('Returns USERNAME if matches username', makeIsUserTest('a username', MACTHING_TYPES.USERNAME));

        it('Accepts partial matches for username', makeIsUserTest('a user', MACTHING_TYPES.USERNAME));

        it('Returns NICKNAME if the nickname matches', makeIsUserTest('a nickname', MACTHING_TYPES.NICKNAME));
        
        it('Accepts partial matches for nickname', makeIsUserTest('a nick', MACTHING_TYPES.NICKNAME));
        
        it('Returns ID if the id matches', makeIsUserTest('1234567890', MACTHING_TYPES.ID));

        it('Returns USERNAME_AND_DISCRIMINATOR if it matches username+discriminator', makeIsUserTest('a username#1234', MACTHING_TYPES.USERNAME_AND_DISCRIMINATOR));

        it('Returns NO_MATCH if it does not match anything', makeIsUserTest('abcd', MACTHING_TYPES.NO_MATCH));

        it('Uses default value parameter if its sent a null', makeIsUserTest(undefined, MACTHING_TYPES.USERNAME));
    });

    describe('isExactUser method', () => {

        it('Returns ID if the id matches', makeIsUserTest('1234567890', MACTHING_TYPES.ID, true));

        it('Returns USERNAME_AND_DISCRIMINATOR if it matches username+discriminator', makeIsUserTest('a username#1234', MACTHING_TYPES.USERNAME_AND_DISCRIMINATOR, true));
        
        it('Does not accept matching username', makeIsUserTest('a username', MACTHING_TYPES.NO_MATCH, true));

        it('Does not accept partial matches for username', makeIsUserTest('a user', MACTHING_TYPES.NO_MATCH, true));

        it('Does not accept nickname matches', makeIsUserTest('a nickname', MACTHING_TYPES.NO_MATCH, true));
        
        it('Does not accept partial matches for nickname', makeIsUserTest('a nick', MACTHING_TYPES.NO_MATCH, true));
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

function getFakeUser() {
    return {
        id: '1234567890',
        username: 'a username',
        discriminator: '1234',
        nickname: 'a nickname'
    };
}