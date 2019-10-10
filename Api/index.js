var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const config = require('./config');
const routes = require("./routes/routes.js")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const server = app.listen(config.PORT, function () {
    console.log('Listening on port %s...', server.address().port);

});



