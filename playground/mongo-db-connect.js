// mongo -cient is used to connect to the server

//onject destructuring is new in ES6, which is shown here
// var user = {name: 'naveen rana' , age : 22 };
//  var {name} = user;
//  console.log(name);c
 
// const MongoClient = require('mongodb').MongoClient;
const  {MongoClient, ObjectID} = require('mongodb'); // this is object destructuring technique
//objectd lets us make new object id and we can attach objecct id to any object to uniquely identified it 
//even if its not used in mongodb   
var obj = new ObjectID();
console.log(obj);


/// to connect to the database we have function connect

// here mongo can create databse itself its not exist yet ulike other databas es
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=> {
    if(err){
         return console.log('Uable to Coonect to Mongodb', err);

    }
    console.log('Mongo Db Connected');

 var db=client.db('Todos');
db.collection('Todos').insertOne({
    text : 'New data added',
    completed :false,
    ttl : 400
},(err, result) => {
    if(err)
        console.log('Unable to inseert the data ');
// result.ops store all the document data which we tried to inseert
console.log(JSON.stringify(result.ops));  

});

//added by me
db.collection('Employee').insertOne({
// _id:007, we can specify owr our own objectid like this    

name : 'Naveen Rana',
age :22
}, (err, result)=>{
    if(err)
        console.log('Error does not added',err);

    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));    
})




db.close();

});