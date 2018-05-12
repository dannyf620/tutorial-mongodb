// Insertar multiples documentos
var MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var url = "mongodb://localhost:27017/";

var Objetos = JSON.parse(fs.readFileSync('../Data/zips.json', 'utf8'));
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("claseinformatica");
  dbo.collection("zips").insertMany(Objetos, function(err, res) {
    if (err) throw err;
    console.log(res.result.n+" documentos nuevos");
    db.close();
  });
});