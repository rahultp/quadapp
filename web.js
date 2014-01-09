var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(req, res){
    res.send('hello world- Rahul');
});

app.listen(3000);
