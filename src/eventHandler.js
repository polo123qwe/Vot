// const logger = require('./utils/logger');

const {ERRORS} = require('./utils/constants');
const commandParser = require('./parser/commandParser');
const { findCommand } = require('./commandAggregator');


exports.messageHandler = function (msg) {
    let parsed = commandParser(msg);

    if(parsed == null) {
        return null;
    }

    let command = findCommand(parsed.commandName);
    if(command){
        // logger.info('Command found!' + JSON.stringify(command, null, 2));
        command.exec(msg, parsed.args);
        return null;
    } else {
        throw new Error(ERRORS.COMMAND_NOT_FOUND);
    }
};