var app={
	init:function(){
		var express = require('express');
		var swig  = require('swig');
		var app = express();
        var request=require("request");
		app.use( express.static(__dirname + '/public/') );

		debugger;
		app.get('/images', function(req, res){
			var imageName=req.query.q;
			request('http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q='+imageName,function(err,response,body){
			   res.send(body);	
			});
			
		});
		app.get('/main', function(req, res){
			
			res.send(swig.renderFile('clase9.html'));
		});
		app.listen(1338);
	}


}
app.init();
