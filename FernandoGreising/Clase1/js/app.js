var app={
	init:function(){
		document.getElementById('button').addEventListener('click',this.event);

	},
	event:function(e){
		console.info(e);
		var form=document.getElementById("form");
		if(form.checkValidity()){
			alert("Hola "+document.getElementById('text').value);

		}
	}
};

app.init();