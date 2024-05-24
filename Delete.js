const {MongoClient} = require('mongodb');
let url = 'mongodb://localhost:27017/';

async function removedata(){
    let mongodb
    try {
        mongodb = new MongoClient(url);
        mongodb.connect();

        let database = mongodb.db("Demo");
        let collection = database.collection("AllData");
        let result = await collection.deleteMany({name:'ZEEL',});
        console.log(result+'Recoerd has been deleted');
    }catch(err){
        console.log(err);
    }finally {
        await mongodb.close();
    }
}
removedata();