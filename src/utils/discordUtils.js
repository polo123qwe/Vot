const {
	TextChannel
} = require('discord.js');
const {MACTHING_TYPES} = require('./constants');

/*
 * Perform various tests to find out if the value matches a given user, checking name,
 * nick and ID.
 * @returns {MACHING_TYPES value}
 */
exports.isUser = function (value, user) {
	value = value.toLowerCase();
	let username = user.username.toLowerCase();
	let nickname = user.nickname;
	
	let isExact = exports.isExactUser(value, user);
	if(isExact != MACTHING_TYPES.NO_MATCH) {
		return isExact;
	}

	if(username.includes(value) || !!value && value.includes(username)) return MACTHING_TYPES.USERNAME;

	if(nickname && nickname.toLowerCase().includes(value)) return MACTHING_TYPES.NICKNAME;

	return MACTHING_TYPES.NO_MATCH;
};

/*
 * Same as isUser method but only accepts matches for username+discriminator or id
 */
exports.isExactUser = function (value, user) {
	value = value.toLowerCase();
	let username = user.username.toLowerCase();

	if(user.id == value) return MACTHING_TYPES.ID;

	if((username + '#' + user.discriminator) == value) return MACTHING_TYPES.USERNAME_AND_DISCRIMINATOR;

	return MACTHING_TYPES.NO_MATCH;
};

exports.isTextChannel = function (channel) {
	return !!channel && (channel instanceof TextChannel);
};