const directory = require('require-directory');

const allCommands = directory(module, './commands/');
const logger = require('./utils/logger');
const Command = require('./classes/Command');


let commands = {};

for(let cmdFile in allCommands){
    for(let cmdName in allCommands[cmdFile]){
        let command = allCommands[cmdFile][cmdName];
        
        if(command instanceof Command){
            command.name = cmdName;
            commands[cmdName] = command;
        }
    }
}

//logger.info(JSON.stringify(commands, null, 2));

exports.findCommand = function(commandNameToFind) {
    for(let commandName in commands) {

        let command = commands[commandName];
        if(commandName === commandNameToFind){
            return command;
        } else if(command.alias.includes(commandNameToFind)){
            return command;
        }
    }
    return null;
};