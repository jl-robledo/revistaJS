/* --- PARA ACCEDER AL FORMULARIO --- */
const formulario = document.getElementById('formulario');

/* --- PARA ACCEDER A LOS INPUT --- */
const inputs = document.querySelectorAll('#formulario input');

/* --- PARA CONTROLAR LAS EXPRESIONES REGULARES --- */
const expresiones = {
	nombre: /^[a-zA-Z0-9\_\-]{4,40}$/, // Letras, numeros, guion y guion_bajo. 4 a 16 caracteres
	apellido1: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos. 4 a 40 caracteres
	apellido2: /^[a-zA-Z0-9\_\-]{4,40}$/, // Letras, numeros, guion y guion_bajo. 4 a 16 caracteres
	dni: /^[a-zA-Z0-9\-]{4,16}$/, // Letras, numeros, guion . 9 caracteres
}


// iniciamos todo el objeto en false, porque si esta correcto se cambia a true despues de cada validacion
const campos = {
	nombre: false,
	apellido1: false,
	apellido2: false,
	dni: false
}


const validarFormulario = (e) => {
    switch (e.target.name){
        
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;

        case "apellido1":
            validarCampo(expresiones.apellido1, e.target, 'apellido1');
        break;

        case "apellido2":
            validarCampo(expresiones.apellido2, e.target, 'apellido2');
        break;

        case "dni":
            validarCampo(expresiones.dni, e.target, 'dni');
        break;

    }
}

// funcion de validar campo con 3 parametros ( expresion que queremos validar, el input, el campo del objeto)
const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}



inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    
    //terminos y condiciones chequeado
    const terminos = document.getElementById('terminos');
    
	if(campos.nombre && campos.apellido1 && campos.apellido2 && campos.dni ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});



// ----- ----- ----- VALIDAR FECHA MAYOR DE EDAD ----- ----- ----- //

// asignamos los elementos del DOM a constantes para manejarlos
const edad = document.getElementById("fechaNac");
const boton = document.getElementById("Enviar");


// funcion que validara si se ingreso una 
