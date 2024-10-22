document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById("micanvas");
    const ctx = canvas.getContext("2d");
    
    //código para centrar el círculo
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    //código para el radio del círculo
    const radius = 120;

    //Código para dibujar el círculo
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle="2a2a2a"
    ctx.stroke();

    //Código para dibujar la línea del radio
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius, centerY);
    ctx.strokeStyle= "#2a2a2a"
    ctx.stroke();

    //Código para calcular el área del círculo

    const area = Math.PI * Math.pow(radius, 2); //pow es la portencia (radio, 2 ) elevado al cuadrado

    //mostrar le área en el documento
    document.getElementById("area").textContent = `El area del circulo es igual a: ${area.toFixed(2)} unidades cuadradas`;






});