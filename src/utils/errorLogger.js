// const logger = require('./logger');

module.exports = function logError(error, channel) {
    if(channel != undefined && channel.hasOwnProperty('send')) {
        channel.send(error);
    }
};