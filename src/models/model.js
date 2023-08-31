// Requiring module
const mongoose = require('mongoose');

// Movie Modal Schema
const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    origin_name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    thumb_url: {
        type: String,
        required: true,
    },
});


// Creating model objects
const MovieModel = mongoose.model('movie', MovieSchema);

// Exporting our model objects
module.exports = MovieModel
