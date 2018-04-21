exports.ARG_TYPES = {
    'STRING': 1,
    'NUMBER': 2,
};

exports.ERRORS = {
    RICH: {
        COMMAND_COOLDOWN: (cmdName, time) => 
        `The command ${cmdName} is on cooldown for ${time} seconds!`
    },
    TYPE_MISSMATCH: 'Types do not match!',
    INCORRECT_MESSAGE_OBJECT: 'Incorrect message object!',
    NOT_ARRAY: 'args is not an array!',
    COMMAND_NOT_FOUND: 'Command not found!',
    FORBIDDEN_CHANNEL: 'You cannot execute this command in a DM!',
    NOT_ALLOWED: 'You are not allowed to execute that',
    ID_NOT_STRING: 'UserId and/or GuildId is not a string!'
};


exports.CATEGORIES = {
    CORE: 'Core',
    DISCORD_INFORMATION: 'Discord Information'
};

exports.LEVELS = {
    'DISABLED': -1,
    'ALL': 1,
    'MEMBERS': 2,
    'HIGHER': 3,
    'MODERATOR': 4,
    'ADMIN': 5,
    'SUPER': 9000
};

exports.MACTHING_TYPES = {
    NICKNAME: 1,
    USERNAME: 2,
    USERNAME_AND_DISCRIMINATOR: 3,
    ID: 5,
    NO_MATCH: 10
};

exports.GUILD_VERIFICATION_LEVELS = {
    0: 'None',
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Maximum'
};