const logger = require('../utils/logger');
const Command = require('../classes/Command');
const {ARG_TYPES} = require('../utils/constants');

let test = new Command(null, null, true);
test.run = function(msg) {
    // logger.info('Member: ' + msg.hasOwnProperty('member') + ' User' + msg.hasOwnProperty('user'));
};
test.alias.push('testAlias');

exports.test = test;
exports.notACommand = null;

let testWithArgTypes = new Command(null, null, true);
test.run = function(msg, args) {
    
};
test.argTypes.push(ARG_TYPES.STRING, ARG_TYPES.NUMBER);

exports.testWithArgTypes = testWithArgTypes;

