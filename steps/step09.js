// Insertar departamentos 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("claseinformatica");
  dbo.collection("departamentos").find({
    geometria: {
      $near:
      {
        $geometry: { type: "Point",  coordinates:[ -68.39321972981304, 3.829423313709334 ] },
        $maxDistance: 50000
      }
    }
  }).toArray(function (err, res) {
    if (err) throw err;
    db.close();
  });
});


/* {
  $near: [ -68.39321972981304, 3.829423313709334 ],
  $maxDistance: 0.1
}
 */
/* { $near :
  {
    $geometry: { type: "Point",  coordinates:[ -68.39321972981304, 3.829423313709334 ] },
    $minDistance: 1000,
    $maxDistance: 5000
  }
} */