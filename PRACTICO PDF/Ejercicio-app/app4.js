
/*. FizzBuzz: Escribir una función llamada fizzBuzz que reciba un número y
retorne un string de acuerdo a lo siguiente:
a. “fizz” si el número es múltiplo de 3.
b. “buzz” si el número es múltiplo de 5.
c. “fizzbuzz” si el número es múltiplo tanto de 3 como de 5.
d. Si no cumple ninguna de las condiciones anteriores debe
retornar el mismo número.
 */

let numero = 15;
let numero2= 3;
let numero3 = 5;

function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } else if (numero % 3 === 0) {
        return "fizz";
    } else if (numero % 5 === 0) {
        return "buzz";
    } else {
        return numero.toString();
    }
}

// Llamar a la función y mostrar el resultado
const resultado = fizzBuzz(numero);
console.log(resultado); // Esto mostrará "fizz" si numero es 3
const resultado2 = fizzBuzz(numero2);
console.log(resultado2);
const resultado3 = fizzBuzz(numero3);
console.log(resultado3);
