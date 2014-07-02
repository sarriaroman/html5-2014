// app es un objeto literal algo similar a una clase
var app = {
	init : function(){
		document.getElementById('button').addEventListener('click', this.event);
	},
	event : function(e){
		var varform = document.getElementById('form');

		if(varform.checkValidity()){
			console.info(e); // puede ser info, error, table(imprime un objeto como si feura una tabla), debug, trace (stack trace del error), time
			myTemplate = document.getElementById('myTemplate'); 
			var nom = document.getElementById('nom');

			var myDiv = document.getElementById('myDiv'); 
			myDiv.innerHTML = myTemplate.innerHTML.replace('[name]', nom.value); 
		}
	}
};

var data = {
	name: 'nombre', 
	what: 'mundo'
};

/*
	Hacer una función que permita cambiar todas las claves. Utilizar RegExp. 
*/

app.init();