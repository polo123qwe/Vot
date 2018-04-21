const expect = require('chai').expect;

const Command = require('../classes/Command');

const {owners} = require ('../../config.json');

const {ERRORS} = require('../utils/constants');
const {cooldown} = require('./cooldown');

describe('Cooldown test', () => {
    it('Errors if no command is sent', () => {
        expect(cooldown('', '', null)).to.be.equals(ERRORS.COMMAND_NOT_FOUND);
    });

    it('Returns null if the userId is of an owner', () => {
        let result = cooldown(owners[0], '', new Command());
        expect(result).to.be.null;
    });

    it('Returns null after a command is run more than once in the same guild with no cd', () => {
        let result = cooldown('1234567890', '1234567890', new Command());
        expect(result).to.be.null;
        result = cooldown('1234567890', '1234567890', new Command());
        expect(result).to.be.null;
    });

    it('Returns null if the command has cooldown but its not triggered but gives error after repeating', () => {
        let cmd = new Command();
        cmd.name = 'Ema';
        cmd.cd = .1;
        let result = cooldown('1234567890', '1234567890', cmd);
        expect(result).to.be.null;
        result = cooldown('1234567890', '1234567890', cmd);
        expect(result).to.be.equals(ERRORS.RICH.COMMAND_COOLDOWN(cmd.name, cmd.cd));
        setTimeout(() => {
            result = cooldown('1234567890', '1234567890', cmd);
            expect(result).to.be.null;
        }, 101);
    });
});