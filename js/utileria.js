// --------------------------------------------------
// FUNCIONES OBLIGATORIAS
// --------------------------------------------------


/**
 * Valida el formato de un correo electrónico.
 * @param {string} correo - Correo que se desea validar.
 * @returns {boolean} true si el correo es válido, false si no.
 */
function validarCorreo(correo) {
    let formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formato.test(correo);
}


/**
 * Valida que un texto contenga solamente letras y espacios.
 * Acepta mayúsculas, minúsculas, acentos y ñ.
 * @param {string} texto - Texto que se desea validar.
 * @returns {boolean} true si solo contiene letras, false si no.
 */
function soloLetras(texto) {
    let formato = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
    return formato.test(texto);
}


/**
 * Valida que un número no exceda una longitud máxima.
 * @param {string|number} numero - Número que se desea validar.
 * @param {number} maxLongitud - Longitud máxima permitida.
 * @returns {boolean} true si cumple con la longitud, false si no.
 */
function validarLongitud(numero, maxLongitud) {
    let texto = String(numero);
    return texto.length <= maxLongitud;
}


/**
 * Calcula la edad de una persona.
 * @param {string} fechaNacimiento - Fecha de nacimiento.
 * @returns {number} Edad actual de la persona.
 */
function calcularEdad(fechaNacimiento) {

    let hoy = new Date();

    let nacimiento =
        new Date(fechaNacimiento + "T00:00:00");
    let edad =
        hoy.getFullYear() - nacimiento.getFullYear();
    let diferenciaMes =
        hoy.getMonth() - nacimiento.getMonth();
    if (
        diferenciaMes < 0 ||
        (
            diferenciaMes === 0 &&
            hoy.getDate() < nacimiento.getDate()
        )
    ) {
        edad--;
    }
    return edad;
}


/**
 * Valida si una persona tiene 18 años o más.
 * @param {string} fechaNacimiento - Fecha de nacimiento.
 * @returns {boolean} true si es mayor de edad, false si no.
 */
function esMayorDeEdad(fechaNacimiento) {
    let edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
}


/**
 * Valida una contraseña.
 * Requiere mínimo 8 caracteres, una mayúscula,
 * una minúscula, un número y un carácter especial.
 * @param {string} password - Contraseña que se desea validar.
 * @returns {boolean} true si cumple los requisitos, false si no.
 */
function validarPassword(password) {
    let mayuscula = /[A-Z]/.test(password);
    let minuscula = /[a-z]/.test(password);
    let numero = /[0-9]/.test(password);
    let especial = /[^A-Za-z0-9]/.test(password);
    if (
        password.length >= 8 &&
        mayuscula &&
        minuscula &&
        numero &&
        especial
    ) {

        return true;
    }
    return false;
}



// --------------------------------------------------
// Funciones libres
// --------------------------------------------------


/**
 * Valida que un teléfono tenga exactamente 10 dígitos.
 * @param {string} telefono - Número telefónico.
 * @returns {boolean} true si contiene 10 números, false si no.
 */
function validarTelefono(telefono) {
    let formato = /^[0-9]{10}$/;
    return formato.test(telefono);
}


/**
 * Valida que una fecha no sea posterior al día actual.
 * @param {string} fecha - Fecha que se desea validar.
 * @returns {boolean} true si la fecha no es futura, false si lo es.
 */
function validarFechaNoFutura(fecha) {
    let fechaIngresada =
        new Date(fecha + "T00:00:00");
    let hoy = new Date();
    return fechaIngresada <= hoy;
}
