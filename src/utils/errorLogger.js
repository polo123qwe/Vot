const logger = require('./logger');

module.exports = function logError(error, channel) {
    // TODO: Send a message to the channel
    if(channel) {
        channel.send(error);
    }
};