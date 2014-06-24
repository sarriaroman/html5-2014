var app={
	
	init:function(){
		document.getElementById('button').addEventListener('click',this.event);

	},
	event:function(e){
		var div=document.getElementById('render');

		var arr=Object.keys(data);
		var template=document.getElementById('template').innerHTML;
		for(var i=0;i<arr.length;i++){
		template=template.replace(new RegExp('{'+arr[i]+'}','g'),data[arr[i]]);
		}
		div.innerHTML=template;
		
	}

};

app.init();

var data={
	name:'Hola',
    what:'MUNDO!'
}