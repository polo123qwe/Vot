// const logger = require('./logger');

module.exports = function logError(error, channel) {
    if(channel) {
        channel.send(error);
    }
};