const expect = require('chai').expect;
const {stringifyTimestamp} = require('./utils');

describe('StringyfyTimestamp', () => {
    it('Returns parsed time', () => {
        let date = new Date('1/1/2018 16:10:30');

        let result = stringifyTimestamp(date);
        expect(result).to.be.equal('1 Jan 2018 16:10:30');
    });

    it('Adds 0 to <10 to minutes and seconds', () => {
        let date = new Date('1/1/2018 1:1:5');

        let result = stringifyTimestamp(date);
        expect(result).to.be.equal('1 Jan 2018 1:01:05');
    });
});