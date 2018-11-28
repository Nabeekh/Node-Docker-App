// Server starter
const express = require('express');
const app = express();
var path = require('path');

const mongodb = require('mongodb');
const mongoose = require('mongoose');
const config = require('./configs');
const PORT = config.PORT ? config.PORT : 8000;
// mongo db connection.
mongoose.connect(config.DBURL,{ useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});


app.get('/', function(req, res) {
     res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.listen(PORT, function(){
    console.log('Your node js server is running on PORT:',PORT);
});