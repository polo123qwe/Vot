const {Message} = require('discord.js');
const logger = require('../utils/logger');

const {ERRORS, LEVELS} = require('../utils/constants');
const {checkTypes} = require('../parser/checkParser');
const {isTextChannel} = require('../utils/discordUtils');
const {fetchUserPermission} = require('../auth/permissions');

class Command {
    // Set all the initial values for a command
    constructor(category = 'General', level = LEVELS.ALL, isTest = false) {
        this.minLevel = level;
        this.category = category;

        this.reqDB = false;
        this.dmDisabled = false;
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
        this.checkExecParameters(msg, args);
        let result = checkTypes(args, this.argTypes);

        // If at least one of the parameters doesn't match the expected throw an error
        if(!result.length || result.length && result.every(b => b === true)){

            // Retrieve the permissions of the user from the database
            fetchUserPermission(msg.author.id).then(level => {
                if(this.minLevel >= level){
                    this.run(msg, args);
                } else {
                    // Call customError command
                    logger.customError(ERRORS.NOT_ALLOWED, msg.channel);
                }
                return;
            }).catch(e => {
                // Call customError command
                logger.customError(e, msg.channel);
            });
        } else {
            throw new Error(ERRORS.TYPE_MISSMATCH);
        }
    }

    checkExecParameters(msg, args) {
        if(!(msg instanceof Message)){
            throw new Error(ERRORS.INCORRECT_MESSAGE_OBJECT);
        }
        if(!(args instanceof Array)) {
            throw new Error(ERRORS.NOT_ARRAY);
        }
        if(!isTextChannel(msg.channel) && this.dmDisabled){
            throw new Error(ERRORS.FORBIDDEN_CHANNEL);
        }
    }
}

module.exports = Command;