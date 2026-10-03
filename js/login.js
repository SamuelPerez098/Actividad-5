// ==================================================
// LOGIN
// ==================================================

let formLogin =
    document.getElementById("formLogin");


formLogin.addEventListener("submit", function(evento) {

    evento.preventDefault();


    let correo =
        document.getElementById("correoLogin").value.trim();

    let password =
        document.getElementById("passwordLogin").value;


    let errorCorreo =
        document.getElementById("errorCorreoLogin");

    let errorPassword =
        document.getElementById("errorPasswordLogin");

    let resultado =
        document.getElementById("resultadoLogin");


    errorCorreo.textContent = "";
    errorPassword.textContent = "";
    resultado.textContent = "";


    let correcto = true;


    // Validar correo

    if (correo === "") {

        errorCorreo.textContent =
            "Ingresa tu correo electrónico.";

        correcto = false;

    } else if (!validarCorreo(correo)) {

        errorCorreo.textContent =
            "El correo no es válido.";

        correcto = false;

    }


    // Validar contraseña

    if (password === "") {

        errorPassword.textContent =
            "Ingresa tu contraseña.";

        correcto = false;

    } else if (!validarPassword(password)) {

        errorPassword.textContent =
            "La contraseña debe tener mínimo 8 caracteres, mayúscula, minúscula, número y carácter especial.";

        correcto = false;

    }


    // Login correcto

    if (correcto) {

        localStorage.setItem("usuarioSesion", correo);

        window.location.href = "index.html";

    }

});