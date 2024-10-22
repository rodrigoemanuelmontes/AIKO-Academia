/*Semáforo interactivo: Simular un semáforo donde las lucen cambian de
color al hacer click en botones:
c. Crea tres botones: “Rojo”, “Amarillo” y “Verde”.
d. Crea un círculo que represente el semáforo.
e. Al hacer click en cada botón, el círculo debe cambiar de color
para simular el estado del semáforo
*/


const canvas = document.getElementById('semaforo');
const context = canvas.getContext('2d');

function drawCircle(color) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.arc(60, 150, 50, 0, Math.PI * 2, false);
    context.fillStyle = color;
    context.fill();
    context.stroke();
}

document.getElementById('rojo').addEventListener('click', () => drawCircle('red'));
document.getElementById('amarillo').addEventListener('click', () => drawCircle('yellow'));
document.getElementById('verde').addEventListener('click', () => drawCircle('green'));

// Dibuja el estado inicial (apagado)
drawCircle('white'); 