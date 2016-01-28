var express = require('express');
var port = process.env.PORT || 3000;

var app = express();

var parser = require('./app/parser.js');

app.get('/', function(req, res) {
	res.send(JSON.stringify(parser(req)), null, '\t');
});

app.listen(port, function() {
	console.log('Server is running on port ' + port);
});