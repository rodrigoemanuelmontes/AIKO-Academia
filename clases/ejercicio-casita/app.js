// Obtengo el canvas creado en HTML
let canvas = document.getElementById("casita");

// Obtengo el contexto para renderizar
let context = canvas.getContext("2d");

// Defino el color de relleno para la casa
context.fillStyle = "yellow";
context.fillRect(50, 250, 200, 200); // Cambié el alto a 200 para que la casa se vea mejor

// Defino el color de relleno para la puerta
context.fillStyle = "brown";
context.fillRect(180, 350, 50, 100); // Ajusté la altura de la puerta


// Dibujo el techo
context.beginPath();
context.moveTo(50, 250); // Esquina izquierda de la casa
context.lineTo(150, 150); // Punta del techo
context.lineTo(250, 250); // Esquina derecha de la casa
context.closePath();
context.fillStyle = "purple"; // Color del techo
context.fill();
context.stroke();

// Dibujo picaporte de la puerta
context.beginPath();
// (x, y, radio, angulo inicial, angulo final, sentido horario)
context.arc(220, 400, 4, 0, Math.PI * 2, false); 
context.fillStyle = "yellow"; 
context.fill();
context.stroke();

// Dibujo pasto verde debajo de la casita
context.fillStyle = "green";
context.fillRect(0, 450, 600, 50);

//Dibujo la ventana 
context.fillStyle = "lightblue";
context.fillRect(60, 350, 100,50);

