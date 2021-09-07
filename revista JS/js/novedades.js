function imprimeDatos(){
	document.write("<br> Noticia: " + this.noticia);
	document.write("<br> Url: " + this.url);
	document.write("<br> Descripcion: " + this.descripcion )
}

function novedadesNoticias(url, noticia, descripcion){
	this.url = url;
	this.noticia = noticia;
	this.descripcion = descripcion;
				
	this.imprimeDatos = imprimeDatos;
}
			

var novedades = new Array ();

	novedades[0] = new novedadesNoticias ("<a href='https://elpais.com/ciencia/2020-10-02/las-abejas-que-dibujan-los-panales-mas-bellos-del-mundo.html'>", "Dibujos de los panales</a>", 
					"<p>Damos por hecho que las abejas son trabajadoras obedientes y solidarias y, por supuesto, armadas de aguijón. No siempre es así. La Tetragonula carbonaria, una abeja que vive en Australia, solo es trabajadora. No tiene aguijón, no sigue instrucciones de nadie y no trabaja en equipo. Y lo curioso es que, su trabajo independiente le hace producir algunos de los panales más artísticos y complejos que pueden encontrarse en la naturaleza. </p>");
	novedades[1] = new novedadesNoticias ("<a href='https://elpais.com/ciencia/2020-04-15/como-los-animales-recurren-a-las-matematicas-para-sobrevivir.html'>", "Animales y las Matematicas</a>",
					"<p>Los animales usan los números en su día a día para tomar las buenas decisiones, que sea para reproducirse, comer, cazar, protegerse o desplazarse. “Los seres humanos hemos heredado de todo esto y saberlo nos ayuda a entender cómo ven el mundo en comparación con nosotros. En realidad, todas las especies, para negociar y sobrevivir, necesitamos tener bases matemáticas”</p>");
	novedades[2] = new novedadesNoticias ("<a href='https://elpais.com/elpais/2020/02/20/ciencia/1582157640_907150.html'>", "Inteligencia animales</a>",
					"<p>El cerebro de la abeja tiene un millón de neuronas frente a los más de ochenta mil millones del de los humanos, pero cada nueva investigación sobre sus capacidades cognitivas obliga a repreguntarse cuál es el límite de la inteligencia en la familia de las abejas.</p>");
	novedades[3] = new novedadesNoticias ("<a href='https://elpais.com/ccaa/2019/05/20/valencia/1558366767_813573.html'>","Polinizacion y economia</a>",
					"<p>El valor que aporta la polinización apícola para la agricultura en la Comunitat Valenciana supera la cantidad de 400 millones de euros anuales, según ha destacado la Unió de Llauradors i Ramaders este lunes, Día Mundial de las Abejas.</p>");

			


for ( var i = 0 ; i < novedades.length ; i++) {
				
	document.write(novedades[i].url + "<br>");
	document.write(novedades[i].noticia + "<br>");
	document.write(novedades[i].descripcion + "<br>")
				
	document.write("<br>");
}