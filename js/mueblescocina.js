class Mueble {
	constructor(producto, imagen, descripcion, valor) {
		this.producto = producto;
		this.imagen = imagen;
		this.descripcion = descripcion;
		this.valor = valor;
	}
}

const Productos = [];

Productos.push(new Mueble ("Estanteria Deco", "assets/cocinaestanteria.jpg", "Antes: $9500" ,"Ahora desde: $7999"));
Productos.push(new Mueble ("Mesa Paraiso", "assets/cocinamesa.jpg", "Antes: $9000" ,"Ahora desde: $7499"));
Productos.push(new Mueble ("Alacena Nordica", "assets/cocinaalacena.jpg", "Antes: $10000" ,"Ahora desde: $6999"));
Productos.push(new Mueble ("Esquinero Pop","assets/cocinaesquinero.jpg", "Antes: $8000" ,"Ahora desde: $4699"));
Productos.push(new Mueble ("Bajo Mesada", "assets/cocinabajomesada.jpg", "Antes: $7000" ,"Ahora desde: $3999"));
Productos.push(new Mueble ("Organizador", "assets/cocinaorganizador.jpg", "Antes: $7500" ,"Ahora desde: $5999"));

Productos.forEach(element => {

	let contenedor = document.createElement("div")
	contenedor.setAttribute("class", "productos")

	let h3= document.createElement("div")
	h3.textContent = `${element.producto}`;
	contenedor.appendChild(h3)
	h3.setAttribute("class", "h3")

	let img = document.createElement("img")
	contenedor.appendChild(img)
	img.setAttribute("src", element.imagen)
	img.setAttribute("width", 300)
	img.setAttribute("height", 300)
	
	let p4 = document.createElement("p")
	contenedor.appendChild(p4)
	p4.textContent = `${element.descripcion}`
	p4.setAttribute("class", "ptitulo")

	let p5 = document.createElement("p")
	contenedor.appendChild(p5)
	p5.textContent = `${element.valor}`
	p5.setAttribute("class", "ptexto")
	
	let imprimir = document.querySelector("#productos");
	imprimir.appendChild(contenedor)

});

function elegirMueble (){
    let mueble = document.querySelector("#mueble").value;
    switch(mueble){
        case "Estanteria":
			return 5000;
			break;
		case "Mesa":
			return 4500;
			break;
		case "Alacena":
			return 3900;
			break;
		case "Esquinero":
			return 5200;
			break;
		case "Bajo Mesada":
			return 835;
			break;
		case "Organizador":
			return 2100;
			break;
    }
}
function elegirAltura (){
    let altura = document.querySelector("#altura").value;
    switch(altura){
        case "180 cm":
			return 4000;
			break;
		case "160 cm":
			return 3000;
			break;
		case "140 cm":
			return 2000;
			break;
		case "120 cm":
			return 1000;
			break;
    }
}
function elegirLargo (){
    let largo = document.querySelector("#largo").value;
    switch(largo){
        case "120 cm":
			return 4000;
			break;
		case "100 cm":
			return 3000;
			break;
		case "80 cm":
			return 2000;
			break;
		case "60 cm":
			return 1000;
			break;
    }
}
function elegirMaterial (){
    let material = document.querySelector("#material").value;
    switch(material){
        case "Melanina":
			return 2500;
			break;
		case "Pino":
			return 1000;
			break;
		case "Roble":
			return 5000;
			break;
    }
}

$(document).ready(function(){

	$("#show").click(function(){
		$("#PersMueble").slideDown(1000);
	});

	$("#hide").click(function(){
		$("#PersMueble").slideUp(1000);
	});

});

btncalcularValor.addEventListener("click",imprimir)

function imprimir () {
	
	let importeTotal = elegirMueble() + elegirAltura() + elegirLargo() + elegirMaterial();

	let h3 = document.getElementById("h3calcularValor")
    h3.innerText= "Tu mueble personalizado costaría: $ " + importeTotal

}	

