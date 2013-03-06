var nombre;
var mail;
var cant;

$(function() {
  $("#btnIngresar").click(function(){validarUsuario($('#txtNombre').val(),$('#txtContrasena').val());});
	
});



function validarUsuario(pNombre,pass){
	if(pNombre.length>0 && pass.length>4){
		$.ajax({
			url: 'KinderLogs.json',
			type: 'GET',
			success: function(data){
				nombre=data.Nombre;
				mail=data.Mail;
				cant=data.CantComents;
				window.location = "Coments.html?user="+nombre+"&mail=" + mail+"&cant="+cant;
			},
			error: function(){alert('error');}
		});
	}
	else {
		alert("Datos Incorrectos")
	}
}
