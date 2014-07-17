var express = require('express');
var fs = require('fs');
var request = require('request');
//var qs = require('querystring');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	fs.readFile('./Clase 7 - Examen/index.html', 'UTF-8', function (err, data) {
		res.send(data);
	});
});

app.get('/searchImage', function(req, res){
	console.info(req.query.q);
	
	res.set('Access-Control-Allow-Origin', '*');
	request('https://ajax.googleapis.com/ajax/services/search/images?v=1.0&rsz=8&q=' + req.query.q, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			res.send(body); 
			//res.set('access-control-allow-origin', '*');
		}
	});
});

app.get('/loadImage', function(req, res){
	console.info(req.query.url);
	request(req.query.url, function (error, response, body) {
		console.info(error);
		console.info(response.headers);
		if (!error && response.statusCode == 200) {
			res.set(response.headers);
			res.set('Access-Control-Allow-Origin', '*');
			
			res.send(new Buffer(body)); 
			//res.set('access-control-allow-origin', '*');
		}
	});
});

app.listen(3000);