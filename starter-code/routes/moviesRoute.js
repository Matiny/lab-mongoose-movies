const express = require('express');
const router  = express.Router();
const Movie   = require('../models/Movie');

router.get('/', (req, res, next) => {
    Movie.find()
        .then((movieList) => {
            res.render('movies/movieView', { movieList })
        })
        .catch((err) => {
            console.log(err);
            next(err);
        })
});

module.exports = router;