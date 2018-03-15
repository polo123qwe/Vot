const expect = require('chai').expect;

const {stringifyTimestamp} = require('./utils');

describe('StringyfyTimestamp', () => {
    function makeStringifyTimestampTest(date, expected) {
        return () => {
            expect(stringifyTimestamp(date)).to.be.equal(expected);
        };
    }
    it('Returns parsed time', makeStringifyTimestampTest(new Date('1/1/2018 16:10:30'), '1 Jan 2018 16:10:30'));

    it('Adds 0 to <10 to minutes and seconds', makeStringifyTimestampTest(new Date('1/1/2018 1:1:5'), '1 Jan 2018 1:01:05'));
});