var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    user_id: String,
    date: Date
});

var User = mongoose.model('User', userSchema);

module.exports = { User };