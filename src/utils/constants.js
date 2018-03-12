exports.ARG_TYPES = {
    'STRING': 1,
    'NUMBER': 2,
};

exports.ERRORS = {
    TYPE_MISSMATCH: 'Types do not match!',
    INCORRECT_MESSAGE_OBJECT: 'Incorrect message object!',
    NOT_ARRAY: 'args is not an array!',
    COMMAND_NOT_FOUND: 'Command not found!',
    FORBIDDEN_CHANNEL: 'You cannot execute this command in a DM!',
    NOW_ALLOWED: 'You are not allowed to execute that'
};

exports.CATEGORIES = {
    CORE: 'Core'
};

exports.LEVELS = {
    'DISABLED': -1,
    'ALL': 1,
    'MEMBERS': 2,
    '': 3,
    'MODERATOR': 4,
    'ADMIN': 5,
    'SUPER': 9000
};