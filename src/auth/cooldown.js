const {owners} = require ('../../config.json');

const {ERRORS} = require('../utils/constants');

let lastTimeRan = {};

/*
 * Checks when the command was last ran and if the user is allowed to execute
 * or is still in cooldown
 * @param {string} userId - The user Id
 * @param {string} serverId - The server Id
 * @param {Command} command - The command to execute
 * @returns {string|null} String with the error or null if the command is not on cooldown
 */
exports.cooldown = function(userId, serverId, command) {
	if (command == null) {
        return ERRORS.COMMAND_NOT_FOUND;
	}
	let cmdName = command.name;

	/* If userID is of a bot owner, can run the command regardless of cooldown */
	if(owners.includes(userId)) return null;

	if (!lastTimeRan.hasOwnProperty(serverId)) {
		lastTimeRan[serverId] = {};
	}
	if (!lastTimeRan[serverId].hasOwnProperty(cmdName)) {
		lastTimeRan[serverId][cmdName] = {};
	}

    let now = Date.now();
    if (command.hasOwnProperty('cd') && command.cd > 0) {
		if (!lastTimeRan[serverId][cmdName].hasOwnProperty(userId)) {
			lastTimeRan[serverId][cmdName][userId] = new Date().valueOf();
			return null;
		}
	
		let userCd = lastTimeRan[serverId][cmdName][userId];
		if (now < (userCd + (command.cd * 1000))) {
            let time = Math.round((((userCd + command.cd * 1000) - now) / 1000) * 10) / 10;
            return ERRORS.RICH.COMMAND_COOLDOWN(cmdName, time);
		}

	}
	lastTimeRan[serverId][cmdName][userId] = now;
	return null;
};