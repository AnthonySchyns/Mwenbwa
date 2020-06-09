const jwt = require('jsonwebtoken');

import keys from "../config/keys";

module.exports = function auth(req, res, next) {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, keys.secretOrKey);
        req.user = verified;
    } catch (err) {
        res.status(400).send('invalid Token');
    }
}