const router = require("express").Router();
const verify = require('./verify-token');
router.get("/", verify, (req, res) => {
    res.json({
        posts: {
            title: "a post secret",
            description: "random data you shouldnt access",
        },
    });
});

module.exports = router;