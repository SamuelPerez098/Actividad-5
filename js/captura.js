// Captura.js

let btnMenu = document.getElementById("btnMenu");
let sidebar = document.getElementById("sidebar");


btnMenu.addEventListener("click", function() {

    if (sidebar.style.display === "none") {

        sidebar.style.display = "block";

    } else {

        sidebar.style.display = "none";

    }

});

// Submenu Usuarios

let btnUsuarios = document.getElementById("btnUsuarios");

let submenuUsuarios =
    document.getElementById("submenuUsuarios");


btnUsuarios.addEventListener("click", function() {

    if (submenuUsuarios.style.display === "block") {

        submenuUsuarios.style.display = "none";

    } else {

        submenuUsuarios.style.display = "block";

    }

});

// Mostrar sección de captura

let btnCaptura =
    document.getElementById("btnCaptura");

let inicio =
    document.getElementById("inicio");

let seccionCaptura =
    document.getElementById("seccionCaptura");


btnCaptura.addEventListener("click", function() {

    inicio.style.display = "none";

    seccionCaptura.style.display = "block";

});

// validación de formulario de usuario

let formUsuario =
    document.getElementById("formUsuario");


formUsuario.addEventListener("submit", function(evento) {

    evento.preventDefault();


    let nombre =
        document.getElementById("nombreUsuario").value;

    let correo =
        document.getElementById("correoUsuario").value;

    let password =
        document.getElementById("passwordUsuario").value;


    let errorNombre =
        document.getElementById("errorNombreUsuario");

    let errorCorreo =
        document.getElementById("errorCorreoUsuario");

    let errorPassword =
        document.getElementById("errorPasswordUsuario");

    let resultado =
        document.getElementById("resultadoUsuario");


    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorPassword.textContent = "";
    resultado.textContent = "";


    let correcto = true;


    if (nombre === "") {

        errorNombre.textContent =
            "Ingresa un nombre de usuario.";

        correcto = false;
    }


    if (correo === "") {

        errorCorreo.textContent =
            "Ingresa un correo.";

        correcto = false;

    } else if (!validarCorreo(correo)) {

        errorCorreo.textContent =
            "El correo no es válido.";

        correcto = false;
    }


    if (password === "") {

        errorPassword.textContent =
            "Ingresa una contraseña.";

        correcto = false;

    } else if (!validarPassword(password)) {

        errorPassword.textContent =
            "Debe tener mínimo 8 caracteres, mayúscula, minúscula, número y carácter especial.";

        correcto = false;
    }


    if (correcto) {

        resultado.textContent =
            "Usuario validado correctamente.";
    }

});

// formulario de alumno

let formAlumno =
    document.getElementById("formAlumno");


formAlumno.addEventListener("submit", function(evento) {

    evento.preventDefault();


    let nombre =
        document.getElementById("nombreAlumno").value;

    let numeroControl =
        document.getElementById("numeroControl").value;

    let fecha =
        document.getElementById("fechaNacimiento").value;


    let errorNombre =
        document.getElementById("errorNombreAlumno");

    let errorControl =
        document.getElementById("errorNumeroControl");

    let errorFecha =
        document.getElementById("errorFecha");

    let resultado =
        document.getElementById("resultadoAlumno");


    errorNombre.textContent = "";
    errorControl.textContent = "";
    errorFecha.textContent = "";
    resultado.textContent = "";


    let correcto = true;



    // Nombre

    if (nombre === "") {

        errorNombre.textContent =
            "Ingresa el nombre del alumno.";

        correcto = false;

    } else if (!soloLetras(nombre)) {

        errorNombre.textContent =
            "El nombre solo debe contener letras.";

        correcto = false;
    }



    // Número de control

    if (numeroControl === "") {

    errorControl.textContent = "Ingresa el número de control.";
    correcto = false;

    } else if (isNaN(numeroControl)) {

        errorControl.textContent =
            "El número de control solo debe contener números.";
        correcto = false;

    } else if (
        !validarLongitud(numeroControl, 6) ||
        numeroControl.length !== 6
    ) {

        errorControl.textContent =
            "El número de control debe tener exactamente 6 dígitos.";
        correcto = false;
    }



    // Fecha

    if (fecha === "") {

        errorFecha.textContent =
            "Selecciona la fecha de nacimiento.";

        correcto = false;

    } else if (!validarFechaNoFutura(fecha)) {

        errorFecha.textContent =
            "La fecha no puede ser futura.";

        correcto = false;
    }



    if (correcto) {

    resultado.textContent =
        "Datos del alumno validados correctamente.";

    let edad =
        calcularEdad(fecha);

    let modalEdad =
        document.getElementById("modalEdad");

    let resultadoEdad =
        document.getElementById("resultadoEdad");


    if (esMayorDeEdad(fecha)) {

        resultadoEdad.textContent =
            "El alumno tiene " +
            edad +
            " años y es mayor de edad.";

    } else {

        resultadoEdad.textContent =
            "El alumno tiene " +
            edad +
            " años y es menor de edad.";

    }


    modalEdad.style.display = "flex";

}

// MODAL DE EDAD


let modalEdad =
    document.getElementById("modalEdad");

let resultadoEdad =
    document.getElementById("resultadoEdad");

let btnCerrarModal =
    document.getElementById("btnCerrarModal");

let btnAceptarModal =
    document.getElementById("btnAceptarModal");


// Mostrar resultado de edad

if (correcto) {

    resultado.textContent =
        "Datos del alumno validados correctamente.";

    let edad =
        calcularEdad(fecha);

    let modalEdad =
        document.getElementById("modalEdad");

    let resultadoEdad =
        document.getElementById("resultadoEdad");


    if (esMayorDeEdad(fecha)) {

        resultadoEdad.textContent =
            "El alumno tiene " +
            edad +
            " años y es mayor de edad.";

    } else {

        resultadoEdad.textContent =
            "El alumno tiene " +
            edad +
            " años y es menor de edad.";

    }


    modalEdad.style.display = "flex";

}

});


// ==================================================
// CERRAR MODAL DE EDAD
// ==================================================

let modalEdad =
    document.getElementById("modalEdad");

let btnCerrarModal =
    document.getElementById("btnCerrarModal");

let btnAceptarModal =
    document.getElementById("btnAceptarModal");


btnCerrarModal.addEventListener("click", function() {

    modalEdad.style.display = "none";

});


btnAceptarModal.addEventListener("click", function() {

    modalEdad.style.display = "none";

});


window.addEventListener("click", function(evento) {

    if (evento.target === modalEdad) {

        modalEdad.style.display = "none";

    }

});
