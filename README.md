# Imágenes aleatorias con js
Obtener una imagen aleatoria da varias ya declaradas, y mostrarlas en una web cada vez que esta carga.

Es de imortante definir las rutas de las imágenes en el array
	Declaramos el array
		`var imgRnd = new Array();`
	A continuación asignamos a cada índice la ruta de una imagen, lo hacemos con todas la imágenes que deseemos.
	

    imgRnd[0]="./img/1.gif";
    imgRnd[1]="./img/2.gif";

Después en el documento html debemos llamar a la función cada vez que se cargue la página.

    <body onload="randomize();">
Por cada **img** que se ecuentre en el documento con el atributo ***name="imgmix"*** , la función cargará una imagen aleatoria en su **src**

Descarga el proyecto para comprender mejor su función
Un enlace con una explicación más clara del proyecto: [Cargar imagen aleatoria](https://gabrielbastid10.blogspot.com)
