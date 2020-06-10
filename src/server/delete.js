var MongoClient = require("mongodb").MongoClient;
var url =
    "mongodb+srv://Anthony:1234@cluster0-bjr7b.mongodb.net/test2?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test2");
    var myquery = {arbotag: NaN};
    dbo.collection("trees").deleteMany(myquery, function (err, obj) {
        if (err) console.log(err);
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});
