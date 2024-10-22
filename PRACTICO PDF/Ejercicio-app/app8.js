/*Calculadora de propina: Crear una calculadora donde el usuario
ingrese el total de la cuenta y el porcentaje de propina, y el programa
calcule la propina total.
 */

document.getElementById('calcular').addEventListener('click', function() {
    const total = parseFloat(document.getElementById('total').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value);

    if (!isNaN(total) && !isNaN(porcentaje)) {
        const propina = (total * porcentaje) / 100;
        document.getElementById('resultado').innerText = `La propina total es: $${propina.toFixed(2)}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, ingrese valores válidos.';
    }
});