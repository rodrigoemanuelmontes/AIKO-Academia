

/*Contador con botones: Crear un contador que se incrementa o
decrementa con botones.
Instrucciones:
a. Crea un h2 que muestre un número (inicialmente 0)
b. Añade dos botones : “Incrementar” y “Decrementar”.
c. Al hacer click en los botones , el número debe aumentar o
disminuir en 1.
 */

let contador = 0;

const h2 = document.getElementById('contador');
const btnIncrementar = document.getElementById('suma');
const btnDecrementar = document.getElementById('resta');

btnIncrementar.addEventListener('click', () => {
    contador++;
    h2.textContent = contador;
});

btnDecrementar.addEventListener('click', () => {
    contador--;
    h2.textContent = contador;
});
