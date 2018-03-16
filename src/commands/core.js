// const logger = require('../utils/logger');

const {CATEGORIES} = require('../utils/constants');
const Command = require('../classes/Command');

let ping = new Command(CATEGORIES.CORE);
ping.run = function(msg, args, client) {
    msg.channel.send(`Pong! (${parseInt(client.ping)}ms)`);
};

exports.ping = ping;