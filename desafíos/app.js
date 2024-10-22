const root = document.getElementById('root');

/*
1. Crea una variable `nombre` y asígnale tu nombre.
2. Crea una variable `edad` y asígnale tu edad.
3. Crea una variable `esEstudiante` y asígnale `true` si eres estudiante o `false` si no lo eres.
4. Crea una variable `mensaje` que contenga un saludo personalizado utilizando literales de plantilla.
5. Imprime el mensaje en la consola del navegador.
*/

// Escribe la solución aquí ✏️
let nombre = 'Rodrigo Montes';
let edad = 31;
let esEstudiante = true;
let mensaje = `Hola: ${nombre} de ${edad} años de edad, tu estado en estudios es:  ${esEstudiante}`;

// No modifiques el código de abajo 🙅🏽‍♂️
function printPersonalDataList(message) {
  const personalDataList = document.createElement('p');
  personalDataList.innerHTML = message;
  root.appendChild(personalDataList);
}

printPersonalDataList(mensaje);
