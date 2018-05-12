// Eliminar una documento
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("claseinformatica");
  var query = { name: 'Udistrital' };
  dbo.collection("coleccion").deleteOne(query, function(err, obj) {
    if (err) throw err;
    console.log("Eliminar");
    console.log(obj.toArray());
    db.close();
  });
});