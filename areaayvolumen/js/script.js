var seleccion = null;


function show_hide_form(x){
	var seleccionar = 	document.querySelectorAll(".default_form");
	for(var i = 0; i<seleccionar.length; i++){
		seleccionar[i].style.display = "none";
	}
	seleccion = parseFloat(x.options[x.selectedIndex].value);
	seleccionar[seleccion].style.display = "block";
}

function calcular(){
		switch(seleccion){
			case null:
				alert("No se ha seleccionado una figura");
			break;

			case 0:
				var attrs = Array.from
				(document.querySelectorAll(".Circulo"),
					({ value }) => value);
				
				var resultado = circulos(parseFloat(attrs[0]));
				print_result(resultado);
				modify_title(["Area del Circulo","Volumen de la Esfera"]);
			break;

			case 1:
				var attrs = Array.from
				(document.querySelectorAll(".Triangulo"),
					({ value }) => value);
				var resultado = triangulos(parseFloat(attrs[0]), parseFloat(attrs[1]));
				print_result(resultado);
				modify_title(["Area del Triangulo","Volumen de la Piramide"]);
			break;

			case 2:
				var attrs = Array.from
				(document.querySelectorAll(".Cuadrado"),
					({ value }) => value);
				var resultado = cuadrados(parseFloat(attrs[0]));
				print_result(resultado);
				modify_title(["Area del Cuadrado","Volumen del Cubo"]);
			break;


		}

}

function circulos(x){
	if (isNaN(x) || isNaN(x)) {
        alert("Ingresa valores para el radio.");
        return null;
    }

	const area = 2 * Math.PI * x*x;
	const volumen = (4/3)*Math.PI*(x*x*x);

	
	return [area, volumen];
}

function triangulos(x,y){
	if (isNaN(x) || isNaN(y)) {
        alert("Ingresa valores numéricos para la base y la altura.");
        return null;
    }
    const area = (x*y)/2;
    const volumen = ((x**2)*y)/3;
    return [area, volumen];
}

function cuadrados(x){
	if (isNaN(x) || isNaN(x)) {
        alert("Ingresa valores numéricos para el lado.");
        return null;
    }
    const area = x**2;
    const volumen = x**3;
    return [area, volumen];

}

function print_result(x){
	var span_result = document.querySelectorAll(".resultados");
	for (var i = 0; i<span_result.length; i++) {
			span_result[i].innerHTML = x[i];	
			}
}

function modify_title(x){

		var titles = document.querySelectorAll(".result_tittle");
		for (var i = 0; i<titles.length; i++) {
			titles[i].innerHTML = x[i];	
			}
}