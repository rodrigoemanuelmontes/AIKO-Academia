

const canvas = document.getElementById("my-canvas");

canvas.style.backgroundColor = "#000000";

const ctx = canvas.getContext("2d");


/*Comienzo a estilar nuesto contexto */

ctx.strokeStyle = "#00FF00";
ctx.lineWidth = 0.25;
ctx.fillStyle = "#009900";

/*Condicional que permite dibujar la grilla en eje x*/

for (let x = 0; x < canvas.width; x += 10){
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    /*Expresión ternaria  para que si x es divisible por 50 se genere una linea de 0.5 de grosor sino de 0.25*/
    ctx.lineWidth = x%50==0 ? 0.5 : 0.25;
    ctx.stroke();
    /*Creo un texto con parámetros con coordenadas cada 50px */
    if(x%50==0) ctx.fillText(x, x, 10);
}


/*Condicional que permite dibujar la grilla en eje Y*/
for (let y = 0; y < canvas.height; y += 10){
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    /*Expresión ternaria */
    ctx.lineWidth = y%50==0 ? 0.5 : 0.25;
    ctx.stroke();
    if(y%50==0) ctx.fillText(y, 0, y + 10);
}


/*pruebo el sistema de grilla con dibujos en canvas */


ctx.beginPath();
ctx.strokeStyle = "#FFFFFF";
ctx.lineWidth = 2;
ctx.moveTo(50, 50);
drawCoordinate(ctx, 50, 50);
ctx.lineTo(150, 250);
drawCoordinate(ctx, 150, 250);
ctx.lineTo(250,170);
drawCoordinate(ctx, 250, 170);
/*función que conecta el último punto dibujado con el primero para cerrar la figura */
ctx.closePath();
ctx.stroke();


/*Dibuja una coordenada gracias a que tiene un fillStyle*/
function drawCoordinate( ctx, x ,y){

    ctx.fillStyle = "#00FF00";
    ctx.fillText(`(${x},${y})`, x , y);
}





