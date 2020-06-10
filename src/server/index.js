/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";
//import {runInNewContext} from "vm";

const {APP_PORT} = process.env;

const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const users = require("./routes/api/users");
const tree = require("./routes/api/tree");

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/tree", tree);

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
