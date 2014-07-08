var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	console.info('Accesing');
	res.redirect('/clase7');
});

app.get('/clase7', function(req, res){
	console.info('Accesing Clase 7');
	fs.readFile('./Clase 7 - Examen/index.html', 'UTF-8', function (err, data) {
		res.send(data);
	});
});

app.listen(3000);