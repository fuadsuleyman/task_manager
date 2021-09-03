const mongo = require('mongodb');

const mongoClient = mongo.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";

const databaseName = "task-manager";

mongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name: 'Fuad',
        age: 27
    })
})