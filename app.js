var express = require('express');

var aws = require('AWS-SDK');

var app = express();

var isLogedIn = function(req, res, next) {
  req.loginStatus = "You are not logged in!";
  next();
}

app.use(express.static('static'));

app.use(isLogedIn);

app.get('/', function(req, res){
  res.send('Hello world' + ' ' + req.loginStatus);
});

app.listen(3000);
