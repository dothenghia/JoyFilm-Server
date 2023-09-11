const Movie = require('./model')

// ------ Data for Home Screen
exports.getHomePageMovies = async (req, res) => {
    try {
        const newMovies = await Movie.find({}).limit(12);
        const singleMovies = await Movie.find({ "type": "single", "chieurap": false }).limit(12);
        const seriesMovies = await Movie.find({ "type": "series", "chieurap": false }).limit(12);
        const cartoonMovies = await Movie.find({ "type": "hoathinh", "chieurap": false }).limit(12);
        const theaterMovies = await Movie.find({ "chieurap": true }).limit(12);
        
        res.status(200).json({
            success: true,
            data: {
                newMovies,
                singleMovies,
                seriesMovies,
                cartoonMovies,
                theaterMovies
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


// ------ Data for 'Phim Moi Cap Nhat' Screen
exports.getNewMovies = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1;
        const skip = (page - 1) * 24 || 0;

        const query = {};

        const movies = await Movie.find(query).skip(skip).limit(24);
        const totalMovies = await Movie.countDocuments(query);
        
        res.status(200).json({
            success: true,
            data: movies,
            totalPages: Math.ceil(totalMovies / 24),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


// ------ Data for 'Phim Le' Screen
exports.getSingleMovies = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1;
        const skip = (page - 1) * 24 || 0;

        const query = { "type": "single", "chieurap": false };

        const movies = await Movie.find(query).skip(skip).limit(24);
        const totalMovies = await Movie.countDocuments(query);

        res.status(200).json({
            success: true,
            data: movies,
            totalPages: Math.ceil(totalMovies / 24),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


// ------ Data for 'Phim Bo' Screen
exports.getSeriesMovies = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1;
        const skip = (page - 1) * 24 || 0;

        const query = { "type": "series", "chieurap": false };

        const movies = await Movie.find(query).skip(skip).limit(24);
        const totalMovies = await Movie.countDocuments(query);

        res.status(200).json({
            success: true,
            data: movies,
            totalPages: Math.ceil(totalMovies / 24),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


// ------ Data for 'Phim Hoat Hinh' Screen
exports.getCartoonMovies = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1;
        const skip = (page - 1) * 24 || 0;

        const query = { "type": "hoathinh", "chieurap": false };

        const movies = await Movie.find(query).skip(skip).limit(24);
        const totalMovies = await Movie.countDocuments(query);

        res.status(200).json({
            success: true,
            data: movies,
            totalPages: Math.ceil(totalMovies / 24),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


// ------ Data for 'Phim Chieu Rap' Screen
exports.getTheaterMovies = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1;
        const skip = (page - 1) * 24 || 0;

        const query = { "chieurap": true };

        const movies = await Movie.find(query).skip(skip).limit(24);
        const totalMovies = await Movie.countDocuments(query);
        
        res.status(200).json({
            success: true,
            data: movies,
            totalPages: Math.ceil(totalMovies / 24),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


// ------ 'Tim Kiem' Screen
exports.searchMovies = async (req, res) => {
    try {
        const { name } = req.query; // Lấy tham số "name" từ URL query string
        let movies = []

        if (name && name.trim()) {
            let regex = new RegExp(name.trim().replace(/\s/g, '.*'), 'i')
            let query = {
                $or: [
                    { name: { $regex: regex } },
                    { origin_name: { $regex: regex } }
                ]
            };
            movies = await Movie.find(query);
        }

        res.status(200).json({
            success: true,
            data: movies,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}