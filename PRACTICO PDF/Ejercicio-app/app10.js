
/*Conversor de unidades (km a millas): Crear un conversor de unidades
que convierta km a millas:
a. El usuario ingresa una cantidad en km.
b. Al hacer click en un botón, el programa convierte esa cantidad a
millas (1 km = 0.621371 millas).
c. Muestra el resultado en la página. */

document.getElementById('convertButton').addEventListener('click', function() {
    const km = parseFloat(document.getElementById('kmInput').value);
    const millas = km * 0.621371;
    document.getElementById('result').innerText = `${km} km son ${millas.toFixed(6)} millas.`;
});