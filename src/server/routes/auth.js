const router = require("express").Router();
// reviens a la même chose que faire app.get/post/delete/find
// juste une question de contexte
// defini le comment interagir avec l'API quand on realise la requete http
router.post("/register", (req, res) => {
    res.send("Register");
});

module.exports = router;
