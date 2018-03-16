const MongoClient = require('mongodb').MongoClient;
const dbOptions = require('../../config.json').database;

let url = `mongodb://${dbOptions.username}:${dbOptions.password}@${dbOptions.host}:${dbOptions.port}/`;
let db = null;

function Connection() {
	return new Promise((resolve, reject) => {
		return MongoClient.connect(url).then(database => {
			db = database.db(dbOptions.db);
			return resolve();
		}).catch(reject);
	});

}

Connection.getDB = function() {
	return db;
};

module.exports = Connection;
