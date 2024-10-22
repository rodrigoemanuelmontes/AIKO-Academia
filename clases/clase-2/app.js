
//Declaramos la variable
let nombreMascota;

//inicializa variable
nombreMascota = "Capitan";


//usar let para aquellas variables que pueden cambiar con el tiempo
let nombre = "Rodrigo";

//usar const para aquellas variables que no van a cambiar
const pi= 3.1415;


//declaro 3 variables: nombre, edad, ciudad

nombre = "Rodrigo Montes";
let edad;
let ciudad;

//inicializo las variables.
edad = 31;
ciudad= "CABA";


//expresión
let suma;
suma = 2 + 3;

//declaración

alert('Hola Mundo');


//Creamos una variable de cada tipo de dato

let string= "hola";
let number = 1;
let boolean = false; //true
let array =[1,2];
let object = {
    edad:10,
    descripcion: 'x'
}

//Cadenas de texto - string
let ciudadARg= 'Rio cuarto';
let provincia = "Buenos Aires";
let nombreCompleto = `juan
pepito
dominguez`
;

//Saltos de línea

//Console.log() sirve para imprimir en consola
console.log('Hola mi nombre es \n  Rodrigo ')

//Concatenación
console.log('Mi nombre es: ' +nombreCompleto + ' y mi edad es: ' + edad)

//template literal
let misDatos= `Mi nombre es ${nombre} y tengo ${edad} años`;
console.log(misDatos)

//Booleanos
let estaLloviendo= true;
let comemosFideos= false;


//operaciones aritmeticos

const a = 3;
const b = 9;

 suma = a + b;
const resta= a - b;
const division = a / b;
const multiplicacion = a * b;
const modulo = a % b;

console.log ('la suma es : '+ suma);
console.log ('la resta es : '+resta);
console.log ('la division es : '+division);
console.log ('la multiplicacion es : '+multiplicacion);
console.log ('el modulo es : '+modulo);


//operadores de comparación
console.log( a == b);
console.log( a === b);
console.log( a != b);
console.log( a !== b);
console.log( a > b);
console.log( a >= b);
console.log( a < b);
console.log( a <= b);

//operadores lógicos
//and = && 
//not = !
//or = |


//
let sumaCada2 = 0;
suma += 2;
suma += 2;
suma += 2;
suma += 2;
console.log(sumaCada2);

resCada2 -= 2;
mulCada2 *= 2;
divCada2 /= 2;
modCada2 %= 2;

//comentario unilea
/*comentario
multilinea 
*/

//Depuración
console.log('hola')
console.error('hola')
console.warn('hola')
console.info('hola')


//Estructuras

const mayorEdad= 18;
if(mayorEdad>=18){
    console.log("Eres mayor de edad");

}else {
    console.log("eres menor de edad");
}

//ciclo for

const pasos = 5;
let paso= 0;

for(paso = 0; paso <= pasos; paso++)
    {
    console.log("Estoy en el paso: " + paso);

}

//while
let contador= 0;
while(contador <3){
    contador++;

}
console.log("El contador es igual a: ", contador)






/*Ejercicios semanales
Crea un bucle for que imprima los números del 1 al 10 en la consola.

Crea un blucle for que imprima solo los números pares del 1 al 10 en la consola.

Crea un bucle for que imprima "bizz" si el número es divisible por 3, "buzz" si el número es divisible por 5 y "bizzbuzz" si el número es divisible por 3 y 5. De lo contrario, imprime el número.*/

const tipoFruta= "Manazana"






b