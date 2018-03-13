const expect = require('chai').expect;
const logger = require('./logger');

describe('Logger', () => {
    it('customError does not throw', () => {
        expect(() => logger.customError('An error', null)).not.to.throw();
    });
});