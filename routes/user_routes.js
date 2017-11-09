const express = require('express');
const { User } = require('../models/user');
const session = require('express-session');
var Userrouter = express.Router();

Userrouter.get('/login', (req, res) => {
    res.render('users/login', {});
});

Userrouter.post('/login', (req, res) => {
    User.findOne({ username: req.body.username, password: req.body.password }).then((user) => {
        console.log(req.body.username + " " + req.body.password);
        console.log(user);
        if (user != null) {
            req.session.authenticated = true;
            req.session.username = req.body.username;
            res.redirect('/articles');
        } else {
            res.redirect('/users/login');
        }
    }, (e) => {
        res.redirect('/users/login');
    });
});

Userrouter.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/articles');
});


module.exports = { Userrouter };