const {LEVELS, ERRORS} = require('../utils/constants');

/*
 * Retrieves the permission for a user from the DB
 * @param {string} userId - The user Id
 * @returns {Promise} The permission level of a given user
 */
exports.fetchUserPermission = function(userId, guildId) {
    return new Promise((resolve, reject) => {
        if(typeof userId !== 'string' || typeof guildId !== 'string'){
            return reject(ERRORS.ID_NOT_STRING);
        }

        // TODO: Implement
        return resolve(LEVELS.ALL);
    });
};
