const MongoClient = require("mongodb").MongoClient;
const dbConnectionUrl = 'mongodb+srv://<user>:<password>@cluster0-on1ek.mongodb.net/test?retryWrites=true&w=majority';

async function initialize(
    dbName,
    dbCollectionName,
) {
    try {
        const dbInstance = await  MongoClient.connect(dbConnectionUrl);
        const dbObject = dbInstance.db(dbName);
        const dbCollection = dbObject.collection(dbCollectionName);

        console.log("[MongoDB connection] SUCCESS");
        return dbCollection;
    } catch (err) {
        console.log(`[MongoDB connection] ERROR: ${err}`);

        throw err;
    }
}

module.exports = {
    initialize,
}

//