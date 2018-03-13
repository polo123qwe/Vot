const chalk = require('chalk');
const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;
const { stringifyTimestamp } = require('./utils');
const errorLogger = require('./errorLogger');

// Set the colors for each type of logging level
const colors = {
    trace: 'magenta',
    verbose: 'cyan',
    prompt: 'grey',
    debug: 'blue',
    info: 'green',
    warn: 'orange',
    error: 'red'
};

const myFormat = printf(info => {
    return chalk[colors[info.level]](`[${stringifyTimestamp(info.timestamp)}] - [${info.level}] - ${info.message}`);
});

const logger = createLogger({
    format: combine(
        timestamp(),
        myFormat
      ),
    transports: [
        new transports.Console({
            prettyPrint: true,
            colorize: true
        }),
        new transports.File({ filename: 'combined.log' })
      ]
});

logger.customError = function(e, channel) {
    this.error(e);
    errorLogger(e, channel);
};

module.exports = logger;