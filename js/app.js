/*
 * Copyright (c) 2018. The information in this code is confidential and may be legally privileged.
 * It is intended solely for the development of academical activities related to Next_U and delivered by
 * Juan Martín Peñaranda Camargo addressed in Bogotá, Colombia.
 * Any disclosure, copying, distribution or any action taken or omitted to be taken in reliance on it, is
 * strictly prohibited and may be unlawful.
 * The code developer accepts no responsibility for its use or misuse, or for any act committed or omitted
 * in connection with this project. Also, no responsibility is taken by the developer for any damage arising
 * out of any bug or virus infection caused by this code.
 * If in doubt, please verify the authenticity of the contents with the developer at juanma2550@gmail.com
 */

	var saved = 0;		//
	var result = "x";	//
	var operando;		//
	var OnDisplay = 0;	//


//Esta función actualiza el valor mostrado en la pantalla de la calculadora.
	function PonerEnPantalla(Disp) {
		if(Disp.toString().length <=8){
		document.getElementById("display").textContent=Disp
		} else {var number=Disp.toString(); var resultado="";
		for (var i=0; i<8; i++){
			resultado=resultado+number.charAt(i);
		}
			document.getElementById("display").textContent=resultado;
		}
	};

// Esta función realiza los cálculos matemáticos requeridos según la opción
//seleccionada en la caluladora. 
	function calculo(){
		switch(operando){
		case "dividido":
			if (OnDisplay==0) {
				OnDisplay=Number(saved)/Number(saved);
				PonerEnPantalla(OnDisplay);
			}
			else{
				if(result=="x"){
					result = OnDisplay;
					OnDisplay=Number(saved)/Number(OnDisplay);
					PonerEnPantalla(OnDisplay);
				} else {
					OnDisplay=Number(result)/Number(OnDisplay);
					PonerEnPantalla(OnDisplay);
					saved=OnDisplay;
				}

			}
			break;
		case "por":
			if (OnDisplay==0) {
				OnDisplay=Number(saved)*Number(saved);
				PonerEnPantalla(OnDisplay);
			}
			else{
				if(result=="x"){
					result = OnDisplay;
					OnDisplay=Number(saved)*Number(OnDisplay);
					PonerEnPantalla(OnDisplay);
				} else {
					OnDisplay=Number(result)*Number(OnDisplay);
					PonerEnPantalla(OnDisplay);
					saved=OnDisplay;
				}
			}
			
			break;
		case "menos":
			if (OnDisplay==0) {
				OnDisplay=Number(saved)-Number(saved);
				PonerEnPantalla(OnDisplay);
			}
			else{
				if(result=="x"){
					result = OnDisplay;
					console.log("Saved is: "+saved);
					console.log("Result is: "+result);
					OnDisplay=Number(saved)-Number(OnDisplay);
					PonerEnPantalla(OnDisplay);
				} else {
					OnDisplay=Number(OnDisplay)-Number(result);
					PonerEnPantalla(OnDisplay);
					saved=OnDisplay;
				}
			}
			break;
		case "mas":
			if (OnDisplay==0) {
				OnDisplay=Number(saved)+Number(saved);
				PonerEnPantalla(OnDisplay);
			}
		else{
				if(result=="x"){
					result = OnDisplay;
					OnDisplay=Number(saved)+Number(OnDisplay);
					PonerEnPantalla(OnDisplay);
				} else {
					OnDisplay=Number(result)+Number(OnDisplay);
					PonerEnPantalla(OnDisplay);
					saved=OnDisplay;
				}
			}
			break;
		case undefined: GuardarValor(x);
			break;

		}
	}

//
	function GuardarValor(x){
		operando=x;
		if (OnDisplay=="")
			return;
		if (OnDisplay.toString().charAt(OnDisplay.toString().length-1)=="."){
			OnDisplay=OnDisplay.toString().replace(".","");
		}
			saved=OnDisplay;
			PonerEnPantalla("");
			OnDisplay=0;
			console.log(saved);			
		}

//Captura el ID del elemento "tecla" accionado y envía el valor
//a la función "validate"
	var tecla = document.getElementsByClassName("tecla");
	for (var i = 0; i < tecla.length; i++) {
		tecla[i].onclick = function(){
			validate(this.id);
		};
        tecla[i].onmousedown = function(){
            reducirtamano(this.id);
        };
        tecla[i].onmouseup = function(){
            restaurartamano(this.id);
        };
	}

//Valida si se ingresa un comando o un número y direcciona la
//acción a la función correspondiente.
	function validate(x){
		if(isNaN(Number(x))){
			operacion(x);			
		} else {
			pantalla(x);
		}
	}

//Reduce el tamaño de las teclas al hacerles click
function reducirtamano(img){
	document.getElementById(img).style.height=(document.getElementById(img).offsetHeight)*0.95+"px";
	document.getElementById(img).style.width=(document.getElementById(img).offsetWidth)*0.95+"px";
    console.log(document.getElementById(img).offsetHeight);
	//document.getElementById(img).style.justify-content="center";
}

//Restaura el tamaño de las teclas al después de hacer click
function restaurartamano(img){
    document.getElementById(img).style.height="";
    document.getElementById(img).style.width="";
    //document.getElementById(img).style.justify-content="center";
}

//Identifica la operación o comando deseado.
function operacion (x){
	switch(x){
		case "dividido":
			GuardarValor(x);
			result = "x";
			break;
		case "por":	
			GuardarValor(x);
			result = "x";
			break;
		case "menos":
			GuardarValor(x);
			result = "x";
			break;
		case "mas":
			GuardarValor(x);
			result = "x";
			break;
		case "igual":
			calculo();
		 break;

		case "sign":
			OnDisplay=OnDisplay*-1;
			PonerEnPantalla(OnDisplay);
			break;
		case "on": 
			OnDisplay=0;
			PonerEnPantalla(0);
			break;
		case "punto":
		if(!OnDisplay.toString().includes(".")){
			OnDisplay=OnDisplay+".";
			PonerEnPantalla(OnDisplay);
		 	}
		 	break;
	}
}

//Muestra los números en la pantalla y limita a 8 caracteres.
	function pantalla (num){

		if (OnDisplay == 0){
		    document.getElementById("display").textContent=num;
		    OnDisplay = num;
	        console.log(OnDisplay);
		} else {
	  		var OnDisplayLen = OnDisplay.toString().length;
		    if (OnDisplayLen <8){
			    OnDisplay=OnDisplay+num;
			    console.log(OnDisplay);
		        document.getElementById("display").textContent=OnDisplay;
	   		}
		}
	}
