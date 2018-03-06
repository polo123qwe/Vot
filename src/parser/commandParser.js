const prefix = require('../../config.json').prefix;

/*
 * Checks if a message is a command and parses it
 * @param {Discord.Message} msg - The message object recieved
 * @return {Object|null} The object with content, commandName and args.
 */
function commandParser(msg = {}) {
    if(!msg || !hasPrefix(msg.content)){
        return null;        
    }

    let messageSplit = msg.content.split(' ');

    return {
        content: msg.content,
        // Remove the prefix
        commandName: messageSplit[0].slice(1, messageSplit[0].length),
        args: messageSplit.slice(1, messageSplit.length),
        argsAsString: messageSplit.slice(1, messageSplit.length).join(' ')
    };
}

function hasPrefix(messageString){
    return !!messageString && messageString.startsWith(prefix);
}

module.exports = commandParser;