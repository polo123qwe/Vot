const expect = require('chai').expect;
const Permission = require('./Permission');

describe('Permissions test', () => {
    it('It has levels', () => {
        expect(Permission.LEVELS).not.to.be.null;
    });

    it('Returns a promise', () => {
        let permission = new Permission();

        permission.fetchUserPermission('').then((level) => {
            expect(level).to.be.equal(Permission.LEVELS.ALL);
            return;
        }).catch();
    });

    it('Rejects if parameter is not a string', () => {
        let permission = new Permission();

        permission.fetchUserPermission({}).then().catch((err) => {
            expect(err).to.be.equal('UserId is not a string!');
        });
    });
});
