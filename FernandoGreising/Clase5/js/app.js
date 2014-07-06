var app={
	
	init:function(){
		document.getElementById('btnloadImage').addEventListener('click',this.imageLoadEvent);
		location.hash="home";
	},
	imageLoadEvent:function(e){
    var array=['http://www.canadigital.com.ar/blog/wp-content/uploads/2010/03/icono-itunes-10.jpg','http://t2.gstatic.com/images?q=tbn:ANd9GcRmmKxAi6c0fe1R22UdAVIZKusXzOIK01cI35GQ2plBT7XGG_ZAXA','http://www.definicionabc.com/wp-content/uploads/icono1.png','https://resnickscity.files.wordpress.com/2009/06/firefox-habemus-icon.jpg'];
    for(var i=0;i<array.length;i++){
      HTTP.get(array[i],app.imageLoadCallback);
    }
  },
  imageLoadCallback:function(url){
    var div=document.getElementById('imageContainer');
    var imageElement=document.createElement('img');
    imageElement.src=url;
    div.appendChild(imageElement);
  }
}
var HTTP={

  get:function(url,callback){
   var xhr = new XMLHttpRequest();
   xhr.responseType = 'blob';
   xhr.onload = function(){
    callback(window.webkitURL.createObjectURL(xhr.response));
  };
  xhr.open('GET', url, true);
  xhr.send();
},
post:function(url,callback){
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(){
    callback(window.webkitURL.createObjectURL(xhr.response));
  };
  xhr.open('POST', url, true);
  xhr.send();
}
}
app.init();
