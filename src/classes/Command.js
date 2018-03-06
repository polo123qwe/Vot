const logger = require('../utils/logger');

const LEVELS = require('./Permission').LEVELS;

class Command {
    constructor(category = 'General', level = LEVELS.ALL) {
        this.minLevel = level;
        this.category = category;

        this.reqDB = false;
        this.dmOnly = false;
        this.alias = [];

        //Input checking
        this.argTypes = [];
    }
    run( /*msg, args*/ ) {
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