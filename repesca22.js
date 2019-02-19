var operación= prompt("¿Que operación quieres hacer sumar o multiplicar?");

repetimos=1;

while(repetimos){

var puntos=0;
/*Usamos un switch para saber que va a pasar cuando el usuario decida
la operación*/
switch(operación)
{
	case'sumar':

//definimos las sumas a hacer y con los if las condiciones.
		var suma1= prompt("10+5");
			if(suma1=="15"){
				puntos=puntos+10;
				alert('enhorabuena tienes '+ puntos + ' puntos');
		}
			else{
				alert("La has cagado prueba de nuevo");
		}
		var suma2= prompt("5+7");
			if(suma2=="12"){
				puntos=puntos+10
				alert("enhorabuena tienes "+ puntos + " puntos");
		}
			else{
				alert("La has cagado prueba de nuevo");
		}
		var suma3= prompt("6+2");
			if(suma3=="8"){
				puntos=puntos+10
				alert("enhorabuena tienes "+ puntos + " puntos");
		}
			else{
				alert("La has cagado prueba de nuevo");
		}

			document.write(reconpensa);
	break;
//definimos las multiplicaciones a hacer.
	case"multiplicar":
		var multiplicacion1= prompt(10*2);
			if(multiplicacion1=="20"){
			puntos=puntos+10
			alert("enhorabuena tienes "+ puntos + " puntos");
		}
			else{
			alert("La has cagado prueba de nuevo");
		}
			var multiplicacion2= prompt(4*3);
				if(multiplicacion2=="12"){
			puntos = puntos+10
			alert("enhorabuena tienes "+ puntos + " puntos");
		}
			else{
			alert("La has cagado prueba de nuevo");
		}
		var multiplicacion3= prompt(5*6);
			if(multiplicacion3=="30"){
			puntos = puntos+10
			alert("enhorabuena tienes "+ puntos + " puntos");
		}
			else{
			alert("La has cagado prueba de nuevo");
		}

		document.write(reconpensa);
	break;
	default:
		alert("no has puesto ningun valor correcto");

	break;
};
}
var repetir= confirm("¿Repetimos?");


document.write('<button onclick="pulsar()">' + 'reinicia si quieres' + '</button>');



