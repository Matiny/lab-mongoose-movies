const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

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
            res.redirect('/')
        })
        .catch((err) => {
            next(err);
        })
})



module.exports = router;