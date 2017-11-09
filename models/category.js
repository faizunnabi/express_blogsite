var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var categorySchema = new Schema({
    name: String,
    category_id: String,
    date: Date
});


var Category = mongoose.model('Category', categorySchema);

module.exports = Category;