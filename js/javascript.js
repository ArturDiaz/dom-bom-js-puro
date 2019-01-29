//-------------------- JSON -------------------------//
var estudiante = '{ "alumnos" :[
	'+'{"codigo" : "", "nombre" : "", "nota" : ""
	}
]}';

var jsonObj = JSON.parse(estudiante);

function leerJSON(estud){
	var out = "";
	
	for(var i=0;i<estud.length; i++){
		out += "<td>"+estud[i].codigo+"</td><td>"+estud[i].nombre+"</td><td>"+estud[i].nota+"</td><br>";
	
	}
	document.getElementById("mostrar").innerHTML = out;
}


	
function registrar(){
	//----------------- OBJETOS-----------------
	/*function objetoJ(codi,nomb,nots){
	this.codi = codi;
	this.nomb = nomb;
	this.nots = nots;
	this.mostrar = function(){
		var reg += "<td>"+this.codi+"</td>";
		var reg += "<td>"this.nomb+"</td>";
		var reg += "<td>"this.nots+"</td>";
		document.getElementById("listado").innerHTML = reg;		
		}

	}
	
	*/
	var codigo1 = document.getElementById("codigo1").value;
	var nombre1 = document.getElementById("nombre1").value;
	var nota1 = parseFloat(document.getElementById("nota1").value);
	//var estudiant = new objetoJ(codigo1,nombre1,nota1);
	//mostrando ejemplo:
	document.getElementById("mostrar").innerHTML=codigo1;
	
	//leerJSON(jsonObj);
	//jsonObj.alumnos.push({});

	//alert(estudiante);
}

/*var estudiantes = '{"alumnos" : [ ]}'; 
var jsonObject = JSON.parse(estudiantes);
Y para agregar los datos así: 
jsonObject.alumnos.push({información acá});*/

//en un objeto lo que coloques en los inputs lo obtienes y se lo asignas como valor a un objeto
//luego agregas ese objeto en un json que declararas al comienzo de manera vacia


/*var cod = document.getElementById("codigo").value;
var nom = document.getElementById("nombre").value;
var not = document.getElementById("nota").value;
jsonObject.alumnos.push({"codigo":cod,"nombre":nom,"nota":not});

6:20 pm
Tomas los valores de los input y entonces los guardas de esa forma.
*/