
function solonumeros(e) {
var keynum = window.event ? window.event.keyCode : e.which;
if ( keynum == 8 || keynum == 13 || keynum == 46 ) return true;
return /\d/.test(String.fromCharCode(keynum));
}





/*
El switch en JavaScript funciona de la misma manera que en C
En este caso se captura la variable nombre mediante la función prompt
y luego se chequea con el switch, y dependiendo de su valor se da un
mensaje a través de un alert
*/

// capturo la variable nombre mediante un prompt
function calcular() { 
var n1 = parseFloat(document.form1.unidades.value); 

// chequeo la variable nombre
switch(true)
{
   // si es igual a pedro doy una alerta que diga Hola Pedrito
   case (document.form1.resultado.value=(NaN)) :document.form1.resultado.value=n1=n1=(ddd);
   break;
   case (n1<=72) :document.form1.resultado.value=n1=n1=3600;
    break; // rompo el ciclo para que se salga del switch
   case (n1>=51) :document.form1.resultado.value=n1=n1*70; break;

   
}

if (form1.nocturno.checked == true)
  {
  document.form1.resultado.value=n1=n1+1700;
  }
if (form1.aeropuerto.checked == true)
  {
  document.form1.resultado.value=n1=n1+3600;
  }
if (form1.puerta.checked == true)
  {
  document.form1.resultado.value=n1=n1+600;
  }
if (form1.terminal.checked == true)
  {
  document.form1.resultado.value=n1=n1+500;
  }

  
  var n1 = parseFloat(document.form1.resultado.value); 
 
  function redondearBaja(num, digitos) {
    var mod = Math.pow(10, digitos || 1);
    return Math.round(num/mod) * mod;
	
}
 
document.form1.resultado.value=(redondearBaja(n1, 2))
 
 }  
 
