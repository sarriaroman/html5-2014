var app={
	init:function(){
		document.getElementById('content').style.height=(window.innerHeight-(document.getElementById('footer').offsetHeight+document.getElementById('header').offsetHeight))+'px';

	},
	renderValue:function(){
		var e=document.getElementById('render');
	}
	
};

app.init();