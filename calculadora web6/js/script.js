let operacion2 = "";
let operRealizada = document.getElementById("operacionRealizada");
let txtresult = document.getElementById("txtresultado");
let operadorSeleccionado = "";
let numero = "";
let ultimoDigitoPresionado = "";


function Borrar(){
operadorSeleccionado="";
operRealizada.innerHTML = "";
operacion2 = "";
txtresult.innerHTML ="";
numero ="";
ultimoDigitoPresionado = "";

}

function digito(num){
numero = numero + num;
operacion2 = operacion2 +num;
operRealizada.innerHTML = operacion2;


}

function operacion(oper) {
operadorSeleccionado = oper;
ultimoDigitoPresionado = "operacion";
operacion2 = operacion2 + oper;
numero = "";
operRealizada.innerHTML = operacion2;

}

function calcular() {
    operacion2 = eval(operacion2);
    txtresult.innerHTML = operacion2;
    operacion2 = operacion2.toString();
    numero = "";
    operRealizada.innerHTML = operacion2;

if (operRealizada == 'Infinity')
{
    Borrar();
    operRealizada.innerHTML = "ERROR";
    return;
}
}

function decimal(){
  operacion2 += '.';
  operRealizada.innerHTML = operacion2;

}


function porcen(){
    operacion2 = operacion2 /10 ;
    txtresult.innerHTML = operacion2;
  
  }


  function power(pot){
  
    pot = Math.pow(numero, numero) ;
    txtresult.innerHTML = pot;
  
  }