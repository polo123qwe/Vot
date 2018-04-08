const expect = require('chai').expect;

const {LEVELS, ERRORS} = require('../utils/constants');
const {fetchUserPermission} = require('./permissions');

describe('Permissions test', () => {
    it('It has levels', () => {
        expect(LEVELS).not.to.be.null;
    });

    it('Returns a promise', () => {
        fetchUserPermission('', '').then((level) => {
            expect(level).to.be.equal(LEVELS.ALL);
            return;
        }).catch();
    });

    it('Rejects if parameter is not a string', () => {
        fetchUserPermission({}, {}).then().catch((err) => {
            expect(err).to.be.equal(ERRORS.ID_NOT_STRING);
        });
    });
});
