const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        console.log(err);

    console.log('connected to the Mongodb server');
    var db = client.db('TodoApp');
    // db.collection('Todos').find({ _id: new ObjectID('5b31f18c0cca2e3100c79985') }).toArray().then((docs) => {
    //     console.log('ToDos Content');
    //     console.log(JSON.stringify(docs, undefined, 4));

    // }, (err) => {
    //     console.log("error which finding the document");
    // });
    // find returns the mongodb cursor and we have toArray method of cursor it returns the array of objects
    // and toArray is promise
   
   db.collection('Todos').find().count().then((count) => {
       console.log('total counts are: -',count);
   }, (err) => {
    console.log("error while counting");
   }
)

    db.collection('Employee').find({name: 'Naveen Rana'}).toArray().then((docs) => {
        console.log(docs);
    },(err) => {
        console.log("No data found",err);
    })

   
   
   
    client.close();






});

