var app={
	init:function(){
		var express = require('express');
		var swig  = require('swig');
		var app = express();

		app.use( express.static(__dirname + '/public/') );

		debugger;
		app.get('/redirect1', function(req, res){
			res.send('Redirect 2');
		});
        app.get('/template', function(req, res){
			res.send(swig.renderFile('clase8.html'));
		});
		app.listen(1338);
	}


}
app.init();
