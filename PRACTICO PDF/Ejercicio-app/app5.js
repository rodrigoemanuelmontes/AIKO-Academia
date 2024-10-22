
/** Contar vocales: Escribir un programa que permita al usuario ingresar
una palabra y cuente cuántas vocales tiene:
a. Crea un campo de texto donde el usuario pueda ingresar una
palabra.
b. Al hacer click en un botón , se debe contar cuantas vocales
(a,e,i,o,u) contiene la palabra. */

document.getElementById('contarBtn').addEventListener('click', function() {
    const palabra = document.getElementById('inputPalabra').value;
    const vocales = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let letra of palabra.toLowerCase()) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    document.getElementById('resultado').innerText = `La palabra tiene ${contador} vocales.`;
});
