const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const Tree = require("./models/modeltree");
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));
Tree.find()
    .then((trees) => {
        for (let i = 0; i < trees.length; i++) {
            trees[i].leaves = trees[i].diametre_cime * trees[i].hauteur_totale;
            trees[i].leaves = Math.floor(trees[i].leaves);
            trees[i].save((err, doc) => {
                if (err) return console.error(err);
                return console.log(trees[i].leaves);
            });
        }
    })
    .catch((err) => {
        console.log(err);
    });
