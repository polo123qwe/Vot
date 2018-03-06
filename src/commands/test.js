const logger = require('../utils/logger');
const Command = require('../classes/Command');

let test = new Command();
test.run = function(msg) {
    msg.channel.send('Hello');
    logger.info('Member: ' + msg.hasOwnProperty('member') + ' User' + msg.hasOwnProperty('user'));
};

exports.test = test;
exports.else = new Command();
