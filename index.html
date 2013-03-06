var usuario = getParameterByName("user");
var mail = getParameterByName("mail");
var cantidad = getParameterByName("cant");
var URL = "KinderComents.json";
var url;
$(function () {
  //switch case de antes.. aca tiene que ir para agarrar el usuario y falta meterlo en el header
	$("#nombreUsuarioTmpl").tmpl().appendTo("#post");
	
	actualizarLista(URL);	
	$("#lstComents li").live("click",function(){
		var tipo=$(this).data("datos");
		var json=$(this).data("json");
		switch (tipo){
			case "simple":
				url="ComentarioTexto.html?json="+json;
				break;
			case "imagen":
				url="ComentarioImagen.html?json="+json;
				break;
			case "video":
				url="ComentarioVideo.html?json="+json;
				break;
		}
		window.location = url;
	});
});



function actualizarLista(URL) {	
	$.ajax({
		url: URL,
		type: 'GET',
		success: function(data){myCallback(data);},
		error: function(){errorFunction();}
	});
};

function errorFunction(datos){
	console.log('error con parametros');
	var data = new Array();
	for(var i=0;i<3;i++){
		var object={};
		var variables=localStorage["comentario"+i].split('+');
		object.asunto = variables[3]+"  desde el local sotarage";
		object.url = variables[0];	
		object.comentario = variables[1];
		object.tipo = variables[2];
		data[i]=object;
	}
	$("#listComentariosTmpl").tmpl(data).appendTo("#lstComents");
	console.log("aca pusieron las iamgenes en el template"); 
};



function onSuccess(fileSystem) {
    alert(fileSystem.name);
    alert(fileSystem.root.name);
}

// request the persistent file system


function myCallback(data) {
	for(var j=0;j<data.comentarios.length;j++){
		var object = {};
		
		localStorage.setItem("comentario"+j,data.comentarios[j].url+"+"+data.comentarios[j].comentario+"+"+data.comentarios[j].tipo+"+"+data.comentarios[j].asunto);
	}
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
	$("#listComentariosTmpl").tmpl(data.comentarios).appendTo("#lstComents");
	console.log("aca pusieron las iamgenes en el template");
};


function getParameterByName(name) {
	name = name.replace(/[[]/, "\\[").replace(/[]]/, "\\]");
	var regexS = "[\\?&]" + name + "=([^]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);
	if (results == null)
	return "";
	else
	return decodeURIComponent(results[1].replace(/\+/g, " ")).split('&')[0];
}
