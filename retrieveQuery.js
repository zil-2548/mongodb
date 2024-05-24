const {MongoClient} = require('mongodb');
let url = 'mongodb://localhost:27017/';

async function finde() {
    let mongodb
    try {
        mongodb = new MongoClient(url);
        mongodb.connect();

        let database = mongodb.db("Demo");
        let collection = mongodb.collection("AllData");
        let result = await collection.find({age:{$lt:25}});
        console.log(result);
        result.forEach(doc => {
            console.log(doc);

        })

    }catch(err) {
        console.log(err);
    }finally {
        await mongodb.close();
    }
}
finde();