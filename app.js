const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/edx-course-db'

MongoClient.connect(url, (err, db) => {
  if (err) return process.exit(1);
  console.log("You connected");
  db.close()
})
