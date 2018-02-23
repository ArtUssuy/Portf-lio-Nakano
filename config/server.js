var express = require("express");
var consign = require("consign");
var bodyParser = require("body-parser");
var path = require('path')

var app = express();
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('./app/assets'));
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;