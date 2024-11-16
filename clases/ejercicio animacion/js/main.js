
function drawPacman(x, y, radius, mouthAngle, ctx) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0 + mouthAngle, 2 * Math.PI - mouthAngle);
  ctx.lineTo(x, y);
  ctx.fillStyle = "yellow";
  ctx.fill();

  // Dibuja el ojo
  const eyeRadius = radius/10; // Tamaño del ojo
  const eyeX = x + radius * -0.1; // Ajusta esta distancia para centrar el ojo
  const eyeY = y - radius * 0.5;   // Ajusta esta altura para centrar el ojo

  ctx.beginPath();
  ctx.arc(eyeX, eyeY, eyeRadius, 0, 2 * Math.PI); // Dibuja el ojo
  ctx.fillStyle = "black"; // Color del ojo
  ctx.fill();
}


function updateMouth() {
  mouthAngle += mouthSpeed;
  if (mouthAngle > 0.8 || mouthAngle < 0) mouthSpeed *= -1;
}

function updatePosition() {
  x += 1;
}

function drawFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridSystem();
  drawPacman(x, y, radius, mouthAngle, ctx);
  updatePosition();
  updateMouth();
}

setInterval(drawFrame, 1000 / 60);
