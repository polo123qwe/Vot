const logger = require('../utils/logger');
const Command = require('../classes/Command');

let test = new Command(null, null, true);
test.run = function(msg) {
    // logger.info('Member: ' + msg.hasOwnProperty('member') + ' User' + msg.hasOwnProperty('user'));
};
test.alias.push('testAlias');

exports.test = test;
exports.notACommand = null;