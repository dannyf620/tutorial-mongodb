// Aggregation grupos
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("claseinformatica");
  dbo.collection("zips").aggregate([
    { $group: { _id: "$state", sumpop: { $sum: "$pop" } } },
  ], function (err, res) {
    if (err) throw err;
    res.sort({ sumpop: -1 }).toArray().then(function (response) {
      console.log(response);
    });
    db.close();
  });
});