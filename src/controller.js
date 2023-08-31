const Movie = require('./model')

//get all the data in the model and return it as response
exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).json({
            success: true,
            data: movies,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


exports.getNewMovies = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1; // Lấy giá trị của tham số "page", mặc định là 1 nếu không có.
        const perPage = 24; // Số phim trên mỗi trang.
        const skip = (page - 1) * perPage; // Số bản ghi bỏ qua để lấy trang thứ "page".

        const movies = await Movie.find({}).skip(skip).limit(perPage);
        res.status(200).json({
            success: true,
            data: movies,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


exports.getSingleMovies = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1; // Lấy giá trị của tham số "page", mặc định là 1 nếu không có.
        const perPage = 24; // Số phim trên mỗi trang.
        const skip = (page - 1) * perPage; // Số bản ghi bỏ qua để lấy trang thứ "page".

        const movies = await Movie.find({ "type": "single", "chieurap": false }).skip(skip).limit(perPage);
        res.status(200).json({
            success: true,
            data: movies,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


exports.getSeriesMovies = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1; // Lấy giá trị của tham số "page", mặc định là 1 nếu không có.
        const perPage = 24; // Số phim trên mỗi trang.
        const skip = (page - 1) * perPage; // Số bản ghi bỏ qua để lấy trang thứ "page".

        const movies = await Movie.find({ "type": "series", "chieurap": false }).skip(skip).limit(perPage);
        res.status(200).json({
            success: true,
            data: movies,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


exports.getCartoonMovies = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1; // Lấy giá trị của tham số "page", mặc định là 1 nếu không có.
        const perPage = 24; // Số phim trên mỗi trang.
        const skip = (page - 1) * perPage; // Số bản ghi bỏ qua để lấy trang thứ "page".

        const movies = await Movie.find({ "type": "hoathinh", "chieurap": false }).skip(skip).limit(perPage);
        res.status(200).json({
            success: true,
            data: movies,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


exports.getTheaterMovies = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1; // Lấy giá trị của tham số "page", mặc định là 1 nếu không có.
        const perPage = 24; // Số phim trên mỗi trang.
        const skip = (page - 1) * perPage; // Số bản ghi bỏ qua để lấy trang thứ "page".

        const movies = await Movie.find({ "chieurap": true }).skip(skip).limit(perPage);
        res.status(200).json({
            success: true,
            data: movies,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error server' });
    }
}


exports.searchMovies = async (req, res) => {
    try {
        const { name } = req.query; // Lấy tham số "name" từ URL query string
        console.log(name);
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


