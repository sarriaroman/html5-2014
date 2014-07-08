var app = {
	init : function(){
		var header = document.getElementById('titulo');
		var windowHeight = window.innerHeight;
		var headerHeight = header.offsetHeight; 

		var imagenes = document.getElementById('imagenes');
		var imagenesHeight = windowHeight - headerHeight; 
		imagenes.style.height = imagenesHeight + 'px';
		
		document.getElementById('btnSearch').addEventListener('click', this.searchImage);
	}, 
	
	searchImage:function(e){
		var search = document.getElementById('url').value;
		var xhr = new XMLHttpRequest();
		var url = 'https://ajax.googleapis.com/ajax/services/search/images?v=1.0&rsz=8&q=' + search; 

		xhr.open('GET', url, true);
		xhr.onload  = function() {parseJSON(xhr)};
		
		xhr.send(null);
		//connection.send(url, printImage);
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

var parseJSON = function (req) {  
	if (req.status == 200) {
		var jsonResponse = JSON.parse(req.responseText);
		
		jsonResponse.responseData.results.forEach(function(obj) {
			connection.send(obj.url, printImage);
		});
	}
};

var printImage = function (src) {
	var img = document.createElement('img');
	img.src = src; 
	img.width = 100;
	img.height = 100;
	
	document.getElementById('imagenes').appendChild(img);
}; 

app.init();