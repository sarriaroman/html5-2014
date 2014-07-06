var app={
	
	init:function(){
		window.onhashchange=this.hashEvent;
		location.hash="home";
	},
	btnCargarDatosEvent:function(e){
		document.location.hash="form";
		
	},
	btnListEvent:function(e){
		document.location.hash="list";
		
	},
  hashEvent:function(){
    var hash=location.hash.replace('#','');
    
    template=document.getElementById(hash).innerHTML;
    var content=document.getElementById("content");
    
    if(hash==="form"){
     content.innerHTML=template;
     document.getElementById("btnGuardar").addEventListener('click',app.btnGuardarEvent);

   }else if(hash=="list"){
     
     var listText='';
     for(var i=0;i<app.array.length;i++){
      listText+='<li>'+app.array[i]+'</li>';
    }
    content.innerHTML=template;
    document.getElementById("listContent").innerHTML=listText;
  }else if(hash=='home'){
   content.innerHTML=template;
   document.getElementById('btnCargarDatos').addEventListener('click',app.btnCargarDatosEvent);
   document.getElementById('btnLista').addEventListener('click',app.btnListEvent);
 }
 
},
btnGuardarEvent:function(e){
 app.array.push(document.getElementById("text").value);
 localStorage.setItem("lista",JSON.stringify(app.array));
 document.location.hash="home";
 
},
array:[]
}

app.init();
