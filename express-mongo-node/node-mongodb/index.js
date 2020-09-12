const mongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://admin:12345678@localhost:32768/?authSource=admin';
const dbname = 'base_mongo';

mongoClient.connect(url,(err, cliente)=>{
    assert.equal(err, null);

    console.log('Conectado correctamente');

    const db = cliente.db(dbname);
    const collection = db.collection('dishes');

    collection.insert({"name": "juan", "descripcion": 23},(err,resultado)=>{
        assert.equal(err, null);
        console.log('despues de insertar: \n');

        console.log(resultado.ops);

        collection.find({}).toArray((err, docs)=>{
            assert.equal(err, null);

            console.log('encontrado \n');
            console.log(docs);

            db.dropCollection('dishes', (err, resultado)=>{
                assert.equal(err, null);

                cliente.close();
            })
        })
    })
})


