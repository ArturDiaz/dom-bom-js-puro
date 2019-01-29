//NOTA DE ERROR:

/*Los botenes con input type="button" no me ejecutaban al usar addEventListener, me apoye con el tutor y me indico que algo pasaba con ese evento por ello lo desarrollo con el <button> y onclick, ya que si tubiese la opcion deL INPUT solo ingresaria document.getElementById("id_input1").addEventListener("click", registrar);  */

//------- EVENTO DEL BOTON ------------//
function registrar(){
	var codigo1 = document.getElementById("codigo1").value;
	var nombre1 = document.getElementById("nombre1").value;
	var nota1 = parseFloat(document.getElementById("nota1").value);

	if(codigo1=="" && nombre1==""){
		alert("Porfavor ingrese los campos..");
	}else{
	//creacion de las propiedades del objeto
	var alumn = {"codigo":codigo1,"nombre":nombre1,"nota":nota1};
	//vinculando el json vacio con alumn
	estudiantes.push(alumn);
	//imprimiendo json con todo lo que tenga el JSON
	leerJson(estudiantes);
	}
}


// JSON VACIO
var estudiantes = [];


function leerJson(param){
	var out="<tr><td>Codigo</td><td>Nombre</td><td>Nota</td></tr>";
	for(var i=0;i<param.length;i++){
		out += "<tr>"+"<td>"+param[i].codigo+"</td>" ;
		out += "<td>"+param[i].nombre+"</td>" ;
		out += "<td>"+param[i].nota+"</td>"+"</tr>" ;
		
	}
	document.getElementById("listado").innerHTML = out;

	limpiar();

}

function limpiar(){
	//alert("Registro Correcto!!");
	document.getElementById("codigo1").value="";
	document.getElementById("nombre1").value="";
	document.getElementById("nota1").value="";
}


function promedio1(prom){
	var out1=0;
	
	for(var i=0;i<prom.length;i++){
		out1 = parseFloat(out1)+parseFloat(prom[i].nota);
		
	}
	var promed = parseFloat(out1)/prom.length;
	alert("El Promedio es: "+promed);
}
function promedio(){
	promedio1(estudiantes);
}


function notaMayor1(mayor){
	var man1 = mayor[0].nota;
	
	for(var i=0;i<mayor.length;i++){
		if(mayor[i].nota>man1){
			man1 = parseFloat(mayor[i].nota);
		}
	}
	alert("La nota Mayor es: "+ man1);
}
function notaMayor(){ //boton
	notaMayor1(estudiantes); //estudiantes es el JSON
}

function notaMenor1(menor){
	var men1 = menor[0].nota;
	
	for(var i=0;i<menor.length;i++){
		if(menor[i].nota<men1){
			men1 = parseFloat(menor[i].nota);
		}
	}
	
	alert("La nota Menor es: "+men1);
}

function notaMenor(){
	notaMenor1(estudiantes);
}