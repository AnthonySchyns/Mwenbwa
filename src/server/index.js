/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

//{ json }
import express from "express";
import path from "path";
import mongoose from "mongoose";
const postRoute = require("./routes/post");
// importer la clef de connection au cluster mongoose
const db = require("./config/keys").mongoURI;
const app = express();

//importer les routes
const authRoute = require("./routes/auth");
//route middleware
//Middleware provide a convenient mechanism for filtering
//HTTP requests entering your application
app.use(express.json());

app.use("/api/users", authRoute);
app.use("/api/posts", postRoute);
// process.env.port is Heroku's port if you choose to deploy the app there
const { APP_PORT } = process.env || 12345;

// la ligne pas touche sinon client dead
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// Connect to MongoDB
//don't  forget to autorize all ip adress
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
