function crearUserPassword() {
    // recojo los datos rellenos en el formulario cuando se pulsa el boton enviar 
    var nombre = document.getElementById("nombre").value; 
    var apellido1 = document.getElementById("apellido1").value;
    var apellido2 = document.getElementById("apellido2").value;
    var fechaNac = document.getElementById("fechaNac").value;
    var dni = document.getElementById("dni").value;

    // creo los arrays vacios para almacenar los datos
    var array_nombre = [];
    var array_apellido1 = [];
    var array_apellido2 = [];
    var array_fechaNac = [];
    var array_dni = [];


    // relleno los arrays vacios separando los string en caracteres 
    for (let i = 0; i < nombre.length; i++) {
        array_nombre[i] = nombre[i];
    }

    for (let i = 0; i < apellido1.length; i++) {
        array_apellido1[i] = apellido1[i];
    }

    for (let i = 0; i < apellido2.length; i++) {
        array_apellido2[i] = apellido2[i];
    }

    for (let i = 0; i < dni.length; i++) {
        array_dni[i] = dni[i];
    }
    

    // puede que salga Undefined en alguna posicion, ya que si algun campo no tiene la misma longitud
    // por eso al no encontrarlo sale undefined
    alert("Nombre de usuario: " + array_nombre[array_dni[0]] 
                                + array_apellido1[array_dni[5]]
                                + array_apellido2[array_dni[7]]  
                                + array_dni[array_dni[2]]      
                                + array_nombre[array_dni[4]] 
                                + array_apellido1[array_dni[6]] +
                "\nContraseña: " + array_dni[array_dni[5]]  
                                 + array_nombre[array_dni[0]] 
                                 + array_dni[array_dni[3]] 
                                 + array_dni[array_dni[7]] 
                                 + array_nombre[array_dni[6]] 
                                 + array_apellido1[array_dni[3]]
    );

    
}