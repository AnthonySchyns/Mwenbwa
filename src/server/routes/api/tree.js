const express = require("express");
const router = express.Router();
const Tree = require("../../models/modeltree");

router.get("/get", (req, res) => {
    Tree.find()
        .then((trees) => {
            let geoloc = [];
            for (let i = 0; i < 100; i++) {
                geoloc.push(trees[i]);
            }
            res.send(geoloc);
        })
        .catch((err) => {
            res.send(err);
        });
});
router.post("/price", (req, res) => {
    const price = req.body.around;
    const sum = price.reduce((acc, val) => {
        return acc + val.leaves;
    });
    res.send(sum);
});

module.exports = router;
