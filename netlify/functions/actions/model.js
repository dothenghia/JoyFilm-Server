const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
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


let movieModel = mongoose.model('movie', moviesSchema); // 'movies' collection
module.exports = movieModel;