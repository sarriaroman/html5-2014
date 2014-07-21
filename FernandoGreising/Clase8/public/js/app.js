var app={
	
	init:function(){
		document.getElementById('btnSearchImages').addEventListener('click',this.searchImagesHandler);
		location.hash="home";
	},
	searchImagesHandler:function(e){

      var search=document.getElementById('txtImgeSearch').value;
      HTTPSender.get(new HTTPObject('http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q='+search,'json','GET',app.onLoadCallback));
  },
  onLoadCallback:function(object){
    app.clearImages();
     var images=object.response.responseData.results;
     if(images.length<=0){
        var div=document.createElement('div');
        div.innerText='No Search Result';
        document.getElementById('imageContainer').appendChild(div);
     }else{
     images.forEach(function(element,index,array){
         app.renderImage(element.url);
     });
   }
  },
  onErrorCallback:function(event){
    alert(event);
  },
  onProgressCallback:function(event){
    alert(event);
  },
  renderImage:function(url){
    var imageElement=document.createElement('img');
    DOMUtil.addAttribute(imageElement,'class','imageClass');
    imageElement.src=url;
    var imageContainer=document.getElementById('imageContainer');
    DOMUtil.addAttribute(imageContainer,'class','imageContainer');
    DOMUtil.addAttribute(imageElement,'class','imageClass');
    imageContainer.appendChild(imageElement);
  },
  clearImages:function(){
    var imageContainer=document.getElementById('imageContainer');
    imageContainer.innerHTML='';
  }
}
var HTTPSender={
  prepareHTTPRequest:function(httpObject){
    var xhr = new XMLHttpRequest();
   
    xhr.responseType = httpObject.responseType;
    xhr.onload = function(e){
      httpObject.onloadCallback({'response':xhr.response,'event':e});
    };
    xhr.onerror=httpObject.onErrorCallback;
    xhr.onabort=httpObject.onAbortCallback;
    xhr.onloadend=httpObject.onLoadEndCallback;
    xhr.onloadstart=httpObject.onLoadStartCallback;
    xhr.onprogress=httpObject.onProgressCallback;
    xhr.ontimeout=httpObject.onTimeoutCallback;
    xhr.open(httpObject.httpMethod,httpObject.url, true);
    return xhr;
  },
  get:function(url,responseType,onloadCallback){
    var httpObject=new HTTPObject(url,responseType,'GET',onloadCallback);
    this.prepareHTTPRequest(url,responseType,callback,'GET').send();;
  },
  get:function(object){
   object.httpMethod='GET';
   try{
   this.prepareHTTPRequest(object).send();
    }catch(error){
        alert(error);
    }
 },
 post:function(object){
  object.httpMethod='POST';
  this.prepareHTTPRequestWithObject(object).send(object.formData);
},
post:function(url,callback,formData){
  this.prepareHTTPRequest(url,responseType,callback,'POST').send(fromData);
}
}
function HTTPObject(url,responseType,httpMethod,onloadCallback,onErrorCallback,onAbortCallback,onLoadEndCallback,onLoadStartCallback,onProgressCallback,onTimeoutCallback){
  this.url=url,
  this.responseType=responseType,
  this.httpMethod=httpMethod,
  this.onloadCallback=onloadCallback||function(){},
  this.onErrorCallback=onErrorCallback||function(){},
  this.onAbortCallback=onAbortCallback||function(){},
  this.onLoadEndCallback=onLoadEndCallback||function(){},
  this.onLoadStartCallback=onLoadStartCallback||function(){},
  this.onProgressCallback=onProgressCallback||function(){},
  this.onTimeoutCallback=onTimeoutCallback||function(){}
}
var DOMUtil={
addAttribute:function(element,attributeName,attributeValue){
var attribute=document.createAttribute(attributeName);
attribute.value=attributeValue;
element.setAttributeNode(attribute);
}
}
app.init();
