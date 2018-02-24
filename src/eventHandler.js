const logger = require('./utils/logger');
const commandParser = require('./parser/commandParser');

const { findCommand } = require('./commandAggregator');

exports.messageHandler = function (msg) {
    let parsed = commandParser(msg);

    let command = findCommand(parsed.commandName);
    if(command){
        logger.info('Command found!' + JSON.stringify(command, null, 2));
    }
};