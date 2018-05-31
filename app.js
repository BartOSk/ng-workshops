var express = require('express');

var app = express();

var port = 5000;

app.get('/', function(req, res){
    res.send("Hello world");
});

app.get('/books', function(req, res){
    res.send("Hello Books");
});

app.listen(port, function(err){
    console.log("runnning server on port" + port);
});