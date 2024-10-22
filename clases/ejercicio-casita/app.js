

//creo una variable y busco el canvas creado en html
let canvas = document.getElementById("casita");


//Creo una variable y obtengo el contexto que va a renderizar y las funciones 
let context = canvas.getContext("2d");

//el fillStyle define el color de relleno que se va a utilizar después de lo que se defina
//con el método fillRect que es una función y no va con el ==
context.fillStyle = "red";


//(x,y,w,h)

/**ejes
 * (x,y)
 * (0, 0) esquina superior izquierda
 * (0, 300) esquina inferior izquirda
   (300, 0) esquina superior derecha
   (300, 300) esquina inferior derecha   
*/
context.fillRect(50, 250, 200, 250);


context.fillStyle = "brown";
context.fillRect(100, 350, 100, 150);


context.beginPath();
context.moveTo(100, 100);
context.lineTo(150, 150);
context.lineTo(50, 250);
context.closePath();
context.fillStyle= "purple";
context.fill();
context.stroke();

