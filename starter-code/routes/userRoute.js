const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const passport = require("passport");

router.get('/register', (req, res, next) => {
    res.render('user/register');
});

router.post('/register', (req, res, next) => {

    const { username, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hashedPassWord = bcrypt.hashSync(password, salt);

    User.create({
        username: username,
        password: hashedPassWord
    })
        .then(() => {
            console.log(`User info is... ${username}, and ${password}`);
            res.redirect('/user/login')
        })
        .catch((err) => {
            next(err);
        })
})


router.get('/login', (req, res, next)=>{
    res.render('user/login')
})

router.post("/login", passport.authenticate("local", {
    successRedirect: "/movies/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  }));


  router.post('/logout', (req, res, next)=>{
    req.logout();
    res.redirect("/login");
  })
  


module.exports = router;