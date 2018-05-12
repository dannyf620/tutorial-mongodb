// Insertar 1 documento
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("claseinformatica");
  var objeto = { name: "Udistrital", address: "Crr 8 40" };
  dbo.collection("coleccion").insertOne(objeto, function(err, res) {
    if (err) throw err;
    console.log("1 documento");
    db.close();
  });
});