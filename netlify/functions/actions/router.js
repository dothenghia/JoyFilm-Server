const express = require('express')
const connectToDB = require('../../../src/db')
const Movie = require('./model')
const router = express.Router()


router.get('/', (req, res) => {
    res.status(200).json({ "Hello": "World" });
})

router.get('/movie',async (req, res) => {
    await connectToDB();

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
});

module.exports = router;