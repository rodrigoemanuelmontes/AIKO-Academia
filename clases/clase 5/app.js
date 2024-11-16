
const canvas = document.getElementById("mycanvas");
const ctx = canvas.getContext("2d");

function dibujarCirculo() {
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.stroke();
  }

  dibujarCirculo();
  

  function dibujarCirculos(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, Math.PI * 2);
    ctx.stroke();
  }

  dibujarCirculos(150,200);

  dibujarCirculos(200,200);
  dibujarCirculos(300,200);


  function areaDelCirculo(radio) {
    return Math.PI * radio * radio;
  }

  let area = areaDelCirculo(50);
  console.log(area); 



  function dibujarCasa(x, y) {
    // Dibujar la casa
    ctx.beginPath();
    ctx.rect(x, y, 200, 150);
    ctx.stroke();
  
    // Dibujar la puerta
    ctx.beginPath();
    ctx.rect(x + 75, y + 100, 50, 50);
    ctx.stroke();
  
    // Dibujar la ventana
    ctx.beginPath();
    ctx.rect(x + 25, y + 25, 50, 50);
    ctx.stroke();
  
    // Dibujar el techo
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 100, y - 50);
    ctx.lineTo(x + 200, y);
    ctx.closePath();
    ctx.stroke();
  }

  dibujarCasa(10,350)
  
  dibujarCasa(250,350)
  
  dibujarCasa(480,350)