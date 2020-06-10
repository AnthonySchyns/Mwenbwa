const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/model");
router.post("/register", (req, res) => {
    // Form validation
    const {errors, isValid} = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    return User.findOne({email: req.body.email}).then((user) => {
        if (user) {
            return res.status(400).json({email: "Email already exists"});
        }
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            token: "",
        });
        // Hash password before saving in database
        return bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err1, hash) => {
                if (err1) {
                    throw err1;
                }
                newUser.password = hash;
                newUser
                    .save()
                    .then((user1) => res.json(user1))
                    .catch((err2) => console.log(err2));
            });
        });
    });
});
router.post("/login", (req, res) => {
    // Form validation
    const {errors, isValid} = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    return User.findOne({email}).then((user) => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({emailnotfound: "Email not found"});
        }
        // Check password
        return bcrypt.compare(password, user.password).then((isMatch) => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name,
                };
                // Sign token
                return jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926, // 1 year in seconds
                    },
                    (err, token) => {
                        User.updateOne({email}, {token: token});
                        res.json({
                            success: true,
                            token: `Bearer ${token}`,
                        });
                    },
                );
            }
            return res
                .status(400)
                .json({passwordincorrect: "Password incorrect"});
        });
    });
});
module.exports = router;
