//Alumnos:
//Santa Cruz, Maximiliano
//Soria, Federico

/* --disable -web-security */

var helperObject=new Helper();

function onClick()
{	
	var txt = document.getElementById("txtBusqueda");
	var container = document.getElementById("photos");
	container.innerHTML="";
	if(txt!='undefined')
	{
		//showDiv(true);
		helperObject.Buscar(txt.value,helperObject.Procesar);
	}
}

function showDiv(show)
{
debugger
	var loader = document.getElementById("loader");
	if (show==true)
	{		
		loader.style.display="block";
	}
	else
	{
		loader.style.display="none";
	}
}

function Helper()
{
	var self = this;
	this.Buscar = function(q, callback)
	{
		var xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.onload = function() {
		  callback(xhr.response);
		};
		xhr.open('GET', "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q="+q, true);
		xhr.send();
	},
	this.Procesar = function(jsonResult)
	{
		//debugger
		jsonResult.responseData.results.forEach(self.Mostrar)		
	},
	this.Mostrar = function(resultObject)	{	
		//debugger
		var container = document.getElementById("photos");		
		if(container!='undefined')
		{
			var img = document.createElement("img");			
			container.appendChild(img);
			img.src=resultObject.unescapedUrl;			
		}
	}
}

