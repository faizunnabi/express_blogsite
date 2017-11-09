var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var articleSchema = new Schema({
    title: String,
    body: String,
    pic: String,
    categoryid: String,
    user_id: String,
    date: Date
});

var Article = mongoose.model('Article', articleSchema);

module.exports = { Article };