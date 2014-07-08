// app es un objeto literal algo similar a una clase
var app = {
	init : function(){
		document.getElementById('button').addEventListener('click', this.event);
	},
	event:function(e){
		varform = document.getElementById('form');
		if(varform.checkValidity()){
			console.info(e); // puede ser info, error, table(imprime un objeto como si feura una tabla), debug, trace (stack trace del error), time
			alert('Hola ' + document.getElementById('name').value);
		}
	}
};
app.init();