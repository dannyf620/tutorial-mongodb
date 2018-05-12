// eliminar varios documentos
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("claseinformatica");
  var myquery = { address: /Cr*e/ };
  dbo.collection("coleccion").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " documentos(s) eliminados");
    db.close();
  });
});