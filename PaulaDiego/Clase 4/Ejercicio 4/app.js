var app = {
	arr_lista: [], 

	init : function(){
		if (localStorage.getItem('lista') != undefined) {
			app.arr_lista = JSON.parse(localStorage.getItem('lista'));
		}

		var header = document.getElementById('titulo');
		var footer = document.getElementById('footer');
		var windowHeight = window.innerHeight;
		var headerHeight = header.offsetHeight; 
		var footerHeight = footer.offsetHeight;

		var content = document.getElementById('content');
		var contentHeight = windowHeight - headerHeight - footerHeight; 
		content.style.height = contentHeight + 'px';

		location.hash = '#home';

		window.onhashchange = function () {
			var hash = location.hash; 

			if (hash == '#form') {
				document.getElementById('home').style.display = 'none';
				document.getElementById('form').style.display = 'block';
				document.getElementById('lista_div').style.display = 'none';
			}

			if (hash == '#lista_div') {
				document.getElementById('home').style.display = 'block';
				document.getElementById('form').style.display = 'none';
				document.getElementById('lista_div').style.display = 'block';

				var liHTML = ''; 
				var lista = document.getElementById('lista'); 

				for (var i = 0; i < app.arr_lista.length; i++) {
					liHTML = liHTML + '<li>' + app.arr_lista[i] + '</li>';
				}
				lista.innerHTML = liHTML; 
			}
		}

		document.getElementById('cargar_datos').addEventListener('click', this.event1);
		document.getElementById('guardar_datos').addEventListener('click', this.eventSave);
		document.getElementById('mostrar_lista').addEventListener('click', this.event2);
	},
	event1:function(e){
		location.hash = '#form';
	},
	eventSave:function(e){
		var nombre = document.getElementById('nombre').value; 
		app.arr_lista.push(nombre); 

		localStorage.setItem ('lista', JSON.stringify(app.arr_lista));

		alert (nombre + " agregado");
	}, 
	event2:function(e){
		location.hash = '#lista_div';
	}

};
app.init();


/*
estático
localStorage
setItem (key, value)
getItem (key)

"dinámico"
var arr[]; 
arr.push ("nombre1");
//codifica array u objeto a JSON 
localStorage.setItem ('lista', JSON.stringify (arr)); 

//decodifica de JSON al array u objeto
var arr = JSON.parse (localStorage.getItem('lista'));


typeOf(localStorage.getItem('lista')) == 'null' or 'undefined'
*/
