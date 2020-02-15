//declaramos un arreglo
//an array
var imgRnd = new Array();

//asignamos una ruta de imagen a cada celda del array
//assign an image path to each cell in the array
imgRnd[0]="https://marianodamianch.github.io/versiculo/jpg/001.jpg";
imgRnd[1]="https://marianodamianch.github.io/versiculo/jpg/002.jpg";
imgRnd[2]="https://marianodamianch.github.io/versiculo/jpg/003.jpg";
imgRnd[3]="https://marianodamianch.github.io/versiculo/jpg/004.jpg";
imgRnd[4]="https://marianodamianch.github.io/versiculo/jpg/005.jpg";
imgRnd[5]="https://marianodamianch.github.io/versiculo/jpg/006.jpg";
imgRnd[6]="https://marianodamianch.github.io/versiculo/jpg/007.jpg";
imgRnd[7]="https://marianodamianch.github.io/versiculo/jpg/008.jpg";
imgRnd[8]="https://marianodamianch.github.io/versiculo/jpg/009.jpg";
imgRnd[9]="https://marianodamianch.github.io/versiculo/jpg/010.jpg";

//imgRnd[0]="../img/1.gif";
//imgRnd[1]="../img/2.gif";
//imgRnd[2]="../img/3.gif";
//imgRnd[3]="../img/4.gif";
//imgRnd[4]="../img/5.gif";
//imgRnd[5]="../img/6.gif";
//imgRnd[6]="../img/7.gif";
//imgRnd[7]="../img/8.gif";
//imgRnd[8]="../img/9.gif";
//imgRnd[9]="../img/10.gif";

//funcion para imagen aleatoria
//rand image function
function randomize(){
	
	//asignamos la dimension del arreglo a la variable rnd
	//assign the dimension of the array to the variable rnd
	var rnd = Math.floor(Math.random()*imgRnd.length);
	
	//modificamos el src de las imagenes cuyo nombre sean imgmix
	//modify the src of the images whose name is imgmix
	document.images["imgmix"].src=imgRnd[rnd];
	
	//escribimos en consola
	//print log
	console.log("La imagen mostrada es: "+imgRnd[rnd]);
}
