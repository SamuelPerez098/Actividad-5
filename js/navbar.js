// Obtener datos guardados desde el login

let usuarioSesion =
    localStorage.getItem("usuarioSesion");

let correoSesion =
    localStorage.getItem("correoSesion");


// Si no existe una sesión, regresar al login

if (usuarioSesion === null) {

    window.location.href = "login.html";

}


// Mostrar usuario y correo

document.getElementById("nombreUsuarioNavbar").textContent =
    usuarioSesion;

document.getElementById("correoUsuarioNavbar").textContent =
    correoSesion;


// Menú desplegable del usuario

let btnUsuario =
    document.getElementById("btnUsuario");

let menuUsuario =
    document.getElementById("menuUsuario");


btnUsuario.addEventListener("click", function() {

    if (menuUsuario.style.display === "block") {

        menuUsuario.style.display = "none";

    } else {

        menuUsuario.style.display = "block";

    }

});


// Cerrar sesión

let btnCerrarSesion =
    document.getElementById("btnCerrarSesion");


btnCerrarSesion.addEventListener("click", function() {

    localStorage.removeItem("usuarioSesion");
    localStorage.removeItem("correoSesion");

    window.location.href = "login.html";

});