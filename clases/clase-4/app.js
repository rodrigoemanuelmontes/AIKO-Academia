
//creo una variable y busco el canvas creado en html
let canvas = document.getElementById("miCanvas");


//Creo una variable y obtengo el contexto que va a renderizar y las funciones 
let context = canvas.getContext("2d");

//el fillStyle define el color de relleno que se va a utilizar después de lo que se defina
//con el método fillRect que es una función y no va con el ==
context.fillStyle = "violet";


//(x,y,w,h)

/**ejes
 * (x,y)
 * (0, 0) esquina superior izquierda
 * (0, 300) esquina inferior izquirda
   (300, 0) esquina superior derecha
   (300, 300) esquina inferior derecha   
*/
context.fillRect(0, 260, 300, 100);


context.fillStyle = "green";

context.fillRect(0, 520, 300, 100);


context.fillStyle = "red";

context.fillRect(0, 100, 300, 100);

context.beginPath();
//(x, y, radio, angulo inicial, formula matematica para dibujar el circulo)
context.arc(60, 450, 50 ,0, Math.PI*2, false);
context.fillStyle = "yellow";
context.fill();

//dibuja los bordes
context.stroke();


/*Para dibujar un triángulo */

context.beginPath();
context.moveTo(150, 0);
context.lineTo(250, 250);
context.lineTo(50, 250);
context.closePath();
context.fillStyle= "purple";
context.fill();
context.stroke();










