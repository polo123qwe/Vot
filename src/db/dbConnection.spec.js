const expect = require('chai').expect;
const sinon = require('sinon');
const MongoClient = require('mongodb').MongoClient;
const dbOptions = require('../../config.json').database;

let Connection = require('./dbConnection');

let url = `mongodb://${dbOptions.username}:${dbOptions.password}@${dbOptions.host}:${dbOptions.port}/`;

let sandbox;
let fakeMongoClient;
let fakeDBObject;

describe('DBConnection', () => {

    beforeEach(() => {
        sandbox = sinon.sandbox.create();
        fakeDBObject = {
            db: () => ''
        };
        fakeMongoClient = sandbox.stub(MongoClient, 'connect').resolves(fakeDBObject);
        
    });

    it('getDB returns a null if there is no db connection', () => {
        expect(Connection.getDB()).to.be.null;
    });
    
    it('The DB is created with the url formed from the config file', () => {
        Connection().catch();
        sinon.assert.calledWith(fakeMongoClient, url);
    });

    it('getDB returns the db if there is a db connection', () => {
        Connection().then(() => {
            return expect(Connection.getDB()).to.be.equal('');
        }).catch();
    });

    afterEach(() => {
        sandbox.restore();
    });
});