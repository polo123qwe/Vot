const Discord = require('discord.js');

//  Config parameters   //
const token = require('./config').token;
//////////////////////////

const logger = require('./src/utils/logger');

const eventHandler = require('./src/eventHandler');

const client = new Discord.Client({
    //fetchAllMembers: true,
    disableEveryone: true
});

const startTime = Date.now();
client.on('ready', () => {
	var interval = Date.now() - startTime;
	logger.info(`Bot connected (${interval} ms)`);
});

client.on('message', (msg) => {
    eventHandler.messageHandler(msg);
});

client.login(token).then(() => {
    return logger.info('Logged in!');
}).catch(() => {
    return logger.info('Could not log in! (Check if token is correct)');
});