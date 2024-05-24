const {MongoClient} = require('mongodb');

let url = 'mongodb://localhost:27017';


async function insertQuery(){

    let mongoClient
    try {
        mongoClient = new MongoClient(url);

        mongoClient.connect();

        let DataBase = mongoClient.db("Demo");
        let Collection = DataBase.collection("AllData");

        let allemp = [
            {id: 1, name: "ZEEL", age: 23},
            {id: 2, name: "Nidhi", age: 24},
            {id: 3, name: "Piyush", age: 24},
        ]

        let result = await Collection.insertMany(allemp)
        console.log(result + 'Documet inserted successfully.')
    }catch (e){
        console.log(e);
    }finally {
        await mongoClient.close();
    }
    }
insertQuery();