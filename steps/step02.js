// crear coleccion en claseinformatica
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("claseinformatica");
  dbo.createCollection("coleccion", function(err, res) {
    if (err) throw err;
    console.log("coleccion Creada");
    db.close();
  });
});