import User from "../models/User";
import { loginValidation, registerValidation } from "../validations";
const router = require("express").Router();

// reviens a la même chose que faire app.get/post/delete/find
// juste une question de contexte
// defini le comment interagir avec l'API quand on realise la requete http
router.post("/register", async (req, res) => {
    //retourner l'erreur
    const { error } = registerValidation(req.body);
    //si erreor retourne nous l'erreur
    if (error) return res.status(400).send(error.details[0].message);
    // const validation = Joi.validate(req.body, schema);

    //check si l'utilisateur est deja dans la data base
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exists');


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
