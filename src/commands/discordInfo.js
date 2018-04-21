const {RichEmbed} = require('discord.js');

const logger = require('../utils/logger');
const {CATEGORIES, GUILD_VERIFICATION_LEVELS} = require('../utils/constants');
const Command = require('../classes/Command');
const {stringifyTimestamp} = require('../utils/utils');

let guild = new Command(CATEGORIES.DISCORD_INFORMATION);
guild.dmDisabled = true;
guild.help = 'Prints various information related to the guild';
guild.run = function(msg) {
    let embed = new RichEmbed();
    let guild = msg.guild;
    embed.setAuthor(guild.name);
    embed.setThumbnail(guild.iconURL);
    embed.addField('Owner', `${guild.owner.user.username}#${guild.owner.user.discriminator}`, true);
    embed.addField('Owner ID', guild.ownerID, true);
    embed.addField('Region', guild.region, true);
    embed.addField('Created', stringifyTimestamp(guild.createdAt), true);
    embed.addField('Verification Level', GUILD_VERIFICATION_LEVELS[guild.verificationLevel], true);
    embed.addField('Emojis', guild.emojis.array().length, true);
    embed.addField('Channels', guild.channels.array().length, true);
    embed.addField('Roles', guild.roles.array().length, true);
    embed.addField('Member count', guild.memberCount, true);
    embed.addField('Bot count', guild.members.filterArray(mem => mem.user.bot == true).length, true);
    
    embed.setTimestamp();
    msg.channel.send({embed: embed}).catch(e => {
        logger.warn(e);
    });
};
guild.alias.push('server', 'g');


exports.guild = guild;