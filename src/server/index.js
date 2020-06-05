/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";

const app = express();

//importer les routes
const authRoute = require("./routes/auth");
//route middleware
//Middleware provide a convenient mechanism for filtering
//HTTP requests entering your application
app.use("/api/users", authRoute);
// process.env.port is Heroku's port if you choose to deploy the app there
const {APP_PORT} = process.env || 12345;

// la ligne pas touche sinon client dead
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
