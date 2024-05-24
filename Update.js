const {MongoClient} = require('mongodb');

let url = 'mongodb://localhost:27017/';

async function update() {
    let Mongodb
    try {
        Mongodb = new MongoClient(url);
        Mongodb.connect();

        let Database=Mongodb.db("Demo");
        let Collection = Database.collection("AllData");
        let result = await Collection.updateOne({id:1},{$set:{name:"Zil",age:24}});
        console.log(result+'Documet updated successfully.');

    }catch (e){
        console.log(e);
    }finally {
        await Mongodb.close();
    }
}
update();