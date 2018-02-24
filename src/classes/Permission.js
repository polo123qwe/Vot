const LEVELS = {
    'DISABLED': -1,
    'ALL': 1,
    'MEMBERS': 2,
    '': 3,
    'MODERATOR': 4,
    'ADMIN': 5,
    'SUPER': 9000
};

class Permission {
    constructor() {
        
    }

    /*
     * @param {string} userId - The user Id
     * @returns {Promise} The permission level of a given user
     */
    fetchUserPermission(userId) {
        return new Promise((resolve, reject) => {
            if(typeof userId !== 'string'){
                return reject('UserId is not a string!');
            }

            // TODO: Implement
            return resolve(LEVELS.ALL);
        });
    }    
}

Permission.LEVELS = LEVELS;
module.exports = Permission;