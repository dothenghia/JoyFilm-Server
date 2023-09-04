const connectToDB = require('./db')

const express = require('express')
const router = express.Router()

const controller = require('./controller')

connectToDB();

router.get('/', controller.getHomePageMovies)

router.get('/new/:page', controller.getNewMovies)
router.get('/single/:page', controller.getSingleMovies)
router.get('/series/:page', controller.getSeriesMovies)
router.get('/cartoon/:page', controller.getCartoonMovies)
router.get('/theater/:page', controller.getTheaterMovies)

router.get('/search', controller.searchMovies)

module.exports = router;