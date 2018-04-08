const Discord = require('discord.js');

//  Config parameters   //
const token = require('./config').token;
//////////////////////////

const logger = require('./src/utils/logger');

const eventHandler = require('./src/eventHandler');

let Connection = require('./src/db/dbConnection');
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
    try {
        eventHandler.messageHandler(msg, client);
    } catch(e) {
        logger.error(e);
    }
});

client.login(token).then(() => {
    logger.info('Logged in!');
    Connection().then(() => {
        return logger.info('Connected to the database');
    }).catch((e) => {
        logger.error('Database connection failed! ' + e);
    });
    return;
}).catch(() => {
    logger.error('Could not log in! (Check if token is correct)');
});