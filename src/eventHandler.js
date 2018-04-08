const logger = require('./utils/logger');

const {ERRORS} = require('./utils/constants');
const commandParser = require('./parser/commandParser');
const { findCommand } = require('./commandAggregator');


exports.messageHandler = function (msg, client) {
    let parsed = commandParser(msg);

    if(parsed == null) {
        return null;
    }

    let command = findCommand(parsed.commandName);
    if(command){
        // logger.info('Command found!' + JSON.stringify(command, null, 2));
        command.exec(msg, parsed.args, client).catch(e => {
            logger.error(e);
        });
        return null;
    } else {
        throw new Error(ERRORS.COMMAND_NOT_FOUND);
    }
};