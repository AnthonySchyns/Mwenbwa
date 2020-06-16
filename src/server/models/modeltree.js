const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TreeSchema = new Schema({
    arbotag: {
        type: Number,
        required: true,
    },
    geoloc: {
        lat: {
            type: Number,
            required: true,
        },
        lon: {
            type: Number,
            required: true,
        },
    },
    hauteur_totale: {
        type: Number,
        required: true,
    },
    diametre_cime: {
        type: Number,
        required: true,
    },
    leaves: {
        type: Number,
    },
});
const Tree = mongoose.model("trees", TreeSchema);
module.exports = Tree;
