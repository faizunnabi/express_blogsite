const express = require('express');
const { Article } = require('../models/articles');
var Articlerouter = express.Router();

Articlerouter.get('/', (req, res) => {
    Article.find().then((articles) => {
        res.render('articles/fetch_all.ejs', { articles: articles });
        console.log(articles);
    }, (e) => {
        res.status(400).send(e);
    });
});

Articlerouter.get('/all', (req, res) => {
    Article.find().then((articles) => {
        res.render('articles/fetch_all.ejs', { articles: articles });
        console.log(articles);
    }, (e) => {
        res.status(400).send(e);
    });
});

Articlerouter.get('/id/:id', (req, res) => {
    console.log(req.params.id);
    Article.findOne({ _id: req.params.id }).then((article) => {
        console.log(article);
        res.render('articles/fetch_one.ejs', { article: article });
    }, (e) => {
        res.status(400).send(e);
    });
});

Articlerouter.get('/showbycategory/:id', (req, res) => {
    console.log(req.params.id);
    Article.find({ category_id: req.params.id }).then((articles) => {
        console.log(articles);
        res.render('articles/fetch_all.ejs', { articles: articles });
    }, (e) => {
        res.status(400).send(e);
    });
});

module.exports = { Articlerouter };