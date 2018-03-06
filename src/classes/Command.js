const logger = require('../utils/logger');

const LEVELS = require('./Permission').LEVELS;
const {Message} = require('discord.js');

class Command {
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

    run(msg, args) {
        if(!(msg instanceof Message)){
            throw new Error('Incorect message object!');
        }
        if(!(args instanceof Array)) {
            throw new Error('args is not an array!');
        }
        logger.error('Not implemented!');
        return;
    }

    exec() {
        /*if(){
            this.run();
        }*/
    }
    
}

module.exports = Command;