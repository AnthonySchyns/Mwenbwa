let MongoClient = require("mongodb").MongoClient;
let url =
    "mongodb+srv://Anthony:1234@cluster0-bjr7b.mongodb.net/test2?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("test2");
    let myquery = { arbotag: NaN };
    dbo.collection("trees").deleteMany(myquery, function (err, obj) {
        if (err) console.log(err);
        console.log(obj.result.n + " document(s) deleted");
        db.close();
    });
});
