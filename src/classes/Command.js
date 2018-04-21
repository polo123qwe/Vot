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
        this.help = 'No help provided for this command!';
        this.cd = -1;
    }

    run(/*msg, args, client*/) {
        logger.error('Not implemented!');
        return;
    }

    // Perform the checks and run the command if they pass
    exec(msg, args, client) {
        return new Promise((resolve, reject) => {
            let error = this.checkExecParameters(msg, args);
            if(error) {
                return reject(error);
            }

            let result = checkTypes(args, this.argTypes);
    
            // If at least one of the parameters doesn't match the expected throw an error
            if(!result.length || result.length && result.every(b => b === true)){
    
                // Avoid trying to access the guild parameter if its a DM
                let guildId = msg.guild == undefined ? 0 : msg.guild.id;
    
                // Retrieve the permissions of the user from the database
                fetchUserPermission(msg.author.id, guildId).then(level => this.execThen(msg, args, client, level, resolve, reject)).catch(e => {
                    // Call customError command
                    logger.customError(e, msg.channel);
                    return reject(e);
                });
            } else {
                return reject(ERRORS.TYPE_MISSMATCH);
            }
        });
    }

    execThen(msg, args, client, level, resolve, reject) {
        if(this.minLevel >= level){
            this.run(msg, args, client);
            return resolve();
        } else {
            // Call customError command
            logger.customError(ERRORS.NOT_ALLOWED, msg.channel);
            return reject(ERRORS.NOT_ALLOWED);
        }
    }

    /*
     * Returns and error or null if there was no error
     */
    checkExecParameters(msg, args) {
        if(!(msg instanceof Message)){
            return ERRORS.INCORRECT_MESSAGE_OBJECT;
        }
        if(!(args instanceof Array)) {
            return ERRORS.NOT_ARRAY;
        }
        if(!isTextChannel(msg.channel) && this.dmDisabled){
            return ERRORS.FORBIDDEN_CHANNEL;
        }
    }
}

module.exports = Command;