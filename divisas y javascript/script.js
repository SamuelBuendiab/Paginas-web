var valor = document.getElementById("valor");

valor.addEventListener('keyup',convertir);
txtResultado = document.getElementById("resultado");

divisa1 = document.getElementById("divisa1");
divisa1.addEventListener('change',convertir);

divisa2 = document.getElementById("divisa2");
divisa2.addEventListener('change',convertir);

var resultado;

function convertir(){

    if(valor.value==''){
        return
    }


numero = valor.value;
numero = parseFloat(numero)

if(divisa1.value=="dolar" && divisa2.value=="dolar"){
resultado = numero * 1;
txtResultado.innerHTML = numero + " Dolar/s valen " + resultado + " dolares";
}

if(divisa1.value=="euro" && divisa2.value=="euro"){
    resultado = numero * 1;
    txtResultado.innerHTML = numero + " Euro/s valen " + resultado + " Euros";
    }

 if(divisa1.value=="yen" && divisa2.value=="yen"){
        resultado = numero * 1;
        txtResultado.innerHTML = numero + " yen/s valen " + resultado + " yen";
        }


if(divisa1.value=="dolar" && divisa2.value=="euro"){
    resultado = numero * 0.90;
    txtResultado.innerHTML = numero + " Dolar/s valen " + resultado + " Euros";
    }

 if(divisa1.value=="euro" && divisa2.value=="dolar"){
        resultado = numero * 1.11;
        txtResultado.innerHTML = numero + " Euro/s valen " + resultado + " Dolares";
        }


 if(divisa1.value=="yen" && divisa2.value=="dolar"){
            resultado = numero * 0.0075;
            txtResultado.innerHTML = numero + " Yen/s valen " + resultado + " Dolares";
            }

if(divisa1.value=="dolar" && divisa2.value=="yen"){
                resultado = numero * 133.82;
                txtResultado.innerHTML = numero + " Dolar/s valen " + resultado + " Yenes";
                }
        
if(divisa1.value=="yen" && divisa2.value=="euro"){
                    resultado = numero * 00067;
                    txtResultado.innerHTML = numero + " Yen/s valen " + resultado + " Euros";
                    }
        
 if(divisa1.value=="euro" && divisa2.value=="yen"){
                        resultado = numero * 148.60;
                        txtResultado.innerHTML = numero + " Euro/s valen " + resultado + " Yenes";
                        }           
                        
 if(divisa1.value=="euro" && divisa2.value=="yen"){
                        resultado = numero * 148.60;
                        txtResultado.innerHTML = numero + " Euro/s valen " + resultado + " Yenes";
                        }  

 if(divisa1.value=="pesos" && divisa2.value=="pesos"){
                            resultado = numero * 1;
                            txtResultado.innerHTML = numero + " Peso/s valen " + resultado + " Pesos";
                            } 
if(divisa1.value=="pesos" && divisa2.value=="dolar"){
                                resultado = numero * 0.00023;
                                txtResultado.innerHTML = numero + " Peso/s valen " + resultado + " Dolares";
                                }  
if(divisa1.value=="pesos" && divisa2.value=="euro"){
                                    resultado = numero * 0.00021;
                                    txtResultado.innerHTML = numero + " Peso/s valen " + resultado + " Euros";
                                    } 
                        
if(divisa1.value=="pesos" && divisa2.value=="yen"){
                                        resultado = numero * 0.030;
                                        txtResultado.innerHTML = numero + " Peso/s valen " + resultado + " Yen";
                                        }  
if(divisa1.value=="yen" && divisa2.value=="pesos"){
                                            resultado = numero * 32.82;
                                            txtResultado.innerHTML = numero + " Yen/s valen " + resultado + " Pesos";
                                            } 
 if(divisa1.value=="dolar" && divisa2.value=="pesos"){
                                                resultado = numero * 439191;
                                                txtResultado.innerHTML = numero + " Dola/s valen " + resultado + " Pesos";
                                                }
 if(divisa1.value=="euro" && divisa2.value=="pesos"){
                                                    resultado = numero * 487700;
                                                    txtResultado.innerHTML = numero + " Euro/s valen " + resultado + " Pesos";
                                                    }        
}


