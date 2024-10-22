/*1. Validar Contraseña: Escribir una función que valide si una contraseña
es correcta basándose en dos opciones predefinidas.
Instrucciones:
a. Escribe una función llamada contraseñaValida que reciba un
string como argumento.
b. Si el string es igual a una de las dos contraseñas definidas , la
función debe devolver un mensaje en la consola.
c. Si el string es diferente de estos valores, debe devolver otro
mensaje en la consola. */

const password1 = "admin";
const password2 = "admin2";
const passwordactual = "admin3";

function contraseñaValida(passwordactual) {
    if (passwordactual === password1 || passwordactual === password2) {
        console.log("Bienvenido");
    } else {
        console.log("Intente con otra contraseña");
    }
}

contraseñaValida(passwordactual);


