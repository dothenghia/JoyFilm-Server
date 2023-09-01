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
    episode_current: {
        type: String,
        required: true,
    }, // Thêm trường episode_current
    category: [ // Thêm mảng category
        {
            id: String, // hoặc ObjectId nếu bạn muốn lưu trữ ObjectId
            name: String,
            slug: String,
        },
    ],
    chieurap: Boolean,
    type: String,
    view: Number, // Thêm trường view
});


let movieModel = mongoose.model('movie', moviesSchema); // 'movies' collection
module.exports = movieModel;