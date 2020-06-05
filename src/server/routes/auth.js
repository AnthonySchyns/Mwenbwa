import User from "../models/User";

const router = require("express").Router();


// validation 
import Joi from "@hapi/joi"; //pour validation easy
const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),

});




// reviens a la même chose que faire app.get/post/delete/find
// juste une question de contexte
// defini le comment interagir avec l'API quand on realise la requete http
router.post("/register", async (req, res) => {
    //retourner l'erreur
    const { error } = schema.validate(req.body);
    //si erreor retourne nous l'erreur
    if (error) return res.status(400).send(error.details[0].message);
    // const validation = Joi.validate(req.body, schema);

    //sinon cree un nouvel user
    const user = new User({
        //req.body  en json lorsque l'on envoit nos données elles provienne de request body
        //besoin de body parser pour le lire d'ici
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
