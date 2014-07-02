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
				/*document.getElementById('home').style.display = 'none';
				document.getElementById('form').style.display = 'block';
				document.getElementById('lista_div').style.display = 'none';*/
				
				var xhr = new XMLHttpRequest();
				xhr.responseType = 'blob';
				xhr.onload = function() {
					var imagen = window.webkitURL.createObjectURL(xhr.response);
					document.getElementById('paula').src = imagen;
					alert (imagen);
				};
				xhr.open('GET', 'http://www.embajadoresdelgol.com/wp-content/uploads/2014/06/1126_mascota_mundial_g_afp.jpg', true);
				xhr.send();
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

var connection = {
	send: function (url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'blob';
		xhr.onload = function() {
			callback(window.webkitURL.createObjectURL(xhr.response)); 
		};
		xhr.open("GET", url);
		xhr.send();
	}, 
}; 

var print = function (src) {
	var img = document.createElement('img');
	img.src = src; 
	img.width = 42;
	img.height = 42;
	
	document.getElementById('imagenes').appendChild(img);
}; 

var images = [
'http://2.bp.blogspot.com/-7W67oLNaoU8/U4e7KiHp7yI/AAAAAAAACG0/CXynViBf9ms/s1600/GRECIA+VS+COSTA+DE+MARFIL.jpg',
'http://pasealhueco.com/wp-content/uploads/2014/05/colombia-vs-grecia-mundial-brasil-2014.jpg',
'http://legionamarilla.com/wp-content/uploads/2014/06/arbitros-Vera.jpg',
'http://miseleccion.mx/wp-content/uploads/2013/06/3669-05311321150324544.jpg',
'http://www.greciachile.cl/selecciongriega2014.jpg',
'http://especiales.lanacion.com.ar/multimedia/proyectos/10/infos/img/mundial/cabeza1.jpg'];

images.forEach(function(url) {
	connection.send(url, print);
});

app.init();
