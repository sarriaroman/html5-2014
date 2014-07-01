/* Agregar en el browser Propiedades/destino (desp de .exe) --disable -web-security */

var array = [];
array.push('http://2.bp.blogspot.com/-YbzWrRwcrGo/Uj8MOLLNfZI/AAAAAAABCzg/y_AqjK689BQ/s1600/minions44.jpg');

function cargar(url,fcallback){
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'blob';
	xhr.onload = function() {
	  fcallback(window.webkitURL.createObjectURL(xhr.response));
	};
	xhr.open('GET', url, true);
	xhr.send();
}

function vuelve(dato){
	  var image = document.createElement("img");
	  image.src = dato;
	  image.height = "250";
	  image.width = "250";
	  var container = document.getElementById("contenido");
	  if(container != undefined) {	  
		container.appendChild(image);
	  }
}
        
        function lanzarBusqueda() {
                var imageSearch = new google.search.ImageSearch();
                var valorABuscar = document.getElementById('txtBuscar').value;
                
                imageSearch.execute(valorABuscar);

                imageSearch.setSearchCompleteCallback(this, mostrarImagenes, [imageSearch]);    
                console.info(imageSearch);
        }
        
        function mostrarImagenes(imgSearcher) {
                if (imgSearcher != undefined)
                {
                        var container = document.getElementById('contenido');
                        var results = imgSearcher.results;
                        
                        for (var i = 0; i < results.length; i++) {                      
                                var newImage = document.createElement('img');
                                newImage.src = results[i].tbUrl;
								newImage.height = "250";
								newImage.width = "250";
                                container.appendChild(newImage);
                        }
                }
        }

var app = {	
	init: function() {	
	google.load("search", "1");
	document.getElementById('contenido').style.height = (window.innerHeight - 
		(document.getElementsByTagName('header')[0].offsetHeight + 
		document.getElementsByTagName('footer')[0].offsetHeight)) + 'px';
		
			for (i = 0; i < array.length; i++) { 
			cargar(array[i],vuelve);
		}
	}	
};

app.init();


