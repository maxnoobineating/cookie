var request = require('request');
var calc = require('./calc.js');
var express = require('express');
var fs = require('fs');
var cookie = require('cookie-parser');

var app = express();

app.use(cookieParser());
app.listen(8013,function(err){
	console.log('listening on port 8013');
});