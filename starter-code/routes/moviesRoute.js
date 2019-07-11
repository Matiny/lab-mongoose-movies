const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const Celeb  = require('../models/Celebrity');

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


router.get('/new', (req, res, next) => {
    if(!req.user){
        req.flash('error', 'Matiny Error')
        res.redirect('/user/login')
    }

    Celeb.find()
    .then((celebList)=>{
        res.render('movies/new', {actors: celebList});
    })
    .catch((err)=>{
        next(err);
    })
});

router.post('/new', (req, res, next) => {
    Movie.create(req.body)
        .then(() => {
            res.redirect('/movies')
        })
        .catch((err) => {
            console.log(err);
            next(err);
        })
});

router.get('/details/:id', (req, res, next) => {
    Movie.findById(req.params.id)
        .then((oneMovie) => {
            res.render('movies/oneMovie', { oneMovie })
        })
        .catch((err) => {
            console.log(err);
            next(err);
        })
});

router.post('/delete/:id', (req, res, next) => {
    Movie.findByIdAndRemove(req.params.id)
        .then((oneMovie) => {
            res.redirect('/movies')
        })
        .catch((err) => {
            console.log(err);
            next(err);
        })
});

module.exports = router;