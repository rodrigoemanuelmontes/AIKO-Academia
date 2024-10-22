/*Calculo de Impuestos: Escribir una función llamada calculoImpuestos
que recibe dos argumentos numéricos: edad e ingresos. Si la edad es
igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe
retornar ingresos * 40% . De lo contrario retornar cero
 */

let edad;
let ingresos;

function calculoImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return console.log(ingresos * 0.40); // Cambié 40% a 0.40
    } else {
        return console.log(0);
    }
}

edad=16;
ingresos= 700;
calculoImpuestos(edad, ingresos);

edad= 19;
ingresos= 1200;

calculoImpuestos(edad, ingresos);