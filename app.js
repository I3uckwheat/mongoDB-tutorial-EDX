const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/edx-course-db'

MongoClient.connect(url, (err, db) => {
  if (err) return process.exit(1);
  console.log("You connected");
  insertDocuments(db, () => {
    db.close()
  })
})

function insertDocuments(db, callback){
  const collection = db.collection('edx-course-students');

  collection.insert([
    {name: 'Bob'}, {name: "John"}, {name: "peter"}
  ], (error, result) => {
    if(error) return process.exit(1);
    console.log(result.result.n);
    console.log(result.ops.length);
    console.log("Inserted 3 documents in teh edx course celection")
    callback(result);
  });
}
