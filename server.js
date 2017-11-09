const express = require('express');
const http = require('http');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const { Articlerouter } = require('./routes/article_routes');
const { Userrouter } = require('./routes/user_routes');
const { ObjectId } = require('mongodb');
const { mongoose } = require('./DB/mongoose');


const app = express();

function checkAuth(req, res, next) {
    if (!req.session || !req.session.authenticated) {
        res.locals.user = null;
    }
    res.locals.user = req.session.username;
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }));
app.use(checkAuth);
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/articles', Articlerouter);
app.use('/users', Userrouter);




var server = http.createServer(app);
server.listen(8080, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Blogger server listening at http://%s:%s", host, port);
});