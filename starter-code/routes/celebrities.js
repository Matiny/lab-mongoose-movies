const express = require('express');
const router  = express.Router();
const Celeb   = require('../models/Celebrity');


router.get('/', (req, res, next) => {
    Celeb.find()
    .then((celebList) => {
        res.render('celebs/celebRoute', {celebList})
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
  });

  router.get('/new', (req, res, next) => {
    res.render('new');
  });

  router.post('/new', (req, res, next) => {
    Celeb.create(req.body)
    .then(() => {
        res.redirect('/celebrities')
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
  });

  router.get('/details/:id', (req, res, next) => {
    Celeb.findById(req.params.id)
    .then((onePerson) => {
        res.render('celebs/show', {onePerson})
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
  });
  
  router.get('/edit/:id', (req, res, next) => {
    Celeb.findById(req.params.id)
    .then((onePerson) => {
        res.render('celebs/edit', {onePerson})
        console.log(onePerson);
        
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
  });

  router.post('/edit/:id', (req, res, next) => {
    Celeb.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
        res.redirect('/celebrities/details/' + req.params.id)
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
  });

  router.post('/delete/:id', (req, res, next) => {
    Celeb.findByIdAndRemove(req.params.id)
    .then(() => {
        res.redirect('/celebrities');
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
  });


module.exports = router;