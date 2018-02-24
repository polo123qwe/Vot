const logger = require('../utils/logger');

const LEVELS = require('./Permission').LEVELS;

class Command {
    constructor(category = 'General', level = LEVELS.ALL) {
        this.minLevel = level;
        this.category = category;

        this.reqDB = false;
        this.dmOnly = false;
        this.alias = [];
    }
    run() {
        return logger.error('Not implemented!');
    }
    
}

module.exports = Command;