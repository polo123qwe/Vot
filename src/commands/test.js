// const logger = require('../utils/logger');

const {ARG_TYPES} = require('../utils/constants');
const Command = require('../classes/Command');

let test = new Command(null, null, true);
test.run = function() {
    // logger.info('Member: ' + msg.hasOwnProperty('member') + ' User' + msg.hasOwnProperty('user'));
};
test.alias.push('testAlias');

exports.test = test;
exports.notACommand = null;

let testWithArgTypes = new Command(null, null, true);
test.argTypes.push(ARG_TYPES.STRING, ARG_TYPES.NUMBER);

exports.testWithArgTypes = testWithArgTypes;

