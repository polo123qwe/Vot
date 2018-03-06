const logger = require('../utils/logger');

const LEVELS = require('./Permission').LEVELS;
const {Message} = require('discord.js');
const {checkTypes} = require('../parser/checkParser');
const {ERRORS} = require('../utils/constants');

class Command {
    // Set all the initial values for a command
    constructor(category = 'General', level = LEVELS.ALL, isTest = false) {
        this.minLevel = level;
        this.category = category;

        this.reqDB = false;
        this.dmOnly = false;
        this.alias = [];

        // Input checking
        this.argTypes = [];

        // If the command is created for testing purposes, mark it as such
        this.isTest = isTest;
    }

    run(/*msg, args*/) {
        logger.error('Not implemented!');
        return;
    }

    // Perform the checks and run the command if they pass
    exec(msg, args) {
        if(!(msg instanceof Message)){
            throw new Error(ERRORS.INCORRECT_MESSAGE_OBJECT);
        }
        if(!(args instanceof Array)) {
            throw new Error(ERRORS.NOT_ARRAY);
        }

        let result = checkTypes(args, this.argTypes);

        if(!result.length || result.length && result.every(b => b === true)){
            this.run(msg, args);
        } else {
            throw new Error(ERRORS.TYPE_MISSMATCH);
        }
    }
    
}

module.exports = Command;