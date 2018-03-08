const {
	TextChannel
} = require('discord.js');

/*
 * Perform various tests to find out if the value matches a given user, checking name,
 * nick and ID. We use isStrict as a boolean to accept partial matches.
 */
exports.isUser = function (value, user, isStrict = false) {

	value = value.toLowerCase();
	var username = user.username.toLowerCase();
	var nick = user.nickname;
	var bool = false;
	if (isStrict) {
		bool = (username + '#' + user.discriminator) == value;
		bool = bool || username == value;
		if (nick) {
			nick = nick.toLowerCase();
			bool = bool || nick == value;
		}
	} else {
		bool = username.includes(value) || !!value && value.includes(username);
		if (nick) {
			nick = nick.toLowerCase();
			bool = bool || nick.includes(value);
		}
	}
	bool = bool || user.id == value;
	return bool;
};

exports.isTextChannel = function (channel) {
	return !!channel && (channel instanceof TextChannel);
};