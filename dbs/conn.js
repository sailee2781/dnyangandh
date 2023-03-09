var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyparser.json());


mongoose
     .connect("mongodb://localhost:27017/dnyangandh", 
     { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));