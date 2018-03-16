const {LEVELS} = require('../utils/constants');

/*
 * Retrieves the permission for a user from the DB
 * @param {string} userId - The user Id
 * @returns {Promise} The permission level of a given user
 */
exports.fetchUserPermission = function(userId) {
    return new Promise((resolve, reject) => {
        if(typeof userId !== 'string'){
            return reject('UserId is not a string!');
        }

        // TODO: Implement
        return resolve(LEVELS.ALL);
    });
};
