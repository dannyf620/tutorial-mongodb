// consultar 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
// Query
// find({}).toArray
// find({}).sort({}).toArray
// find({}).limit(1).toArray
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("claseinformatica");
  dbo.collection("coleccion").findOne({}, function(err, result) {
    if (err) throw err;
    console.dir(result);
    db.close();
  });
});