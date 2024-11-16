const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;

// Variables
const player = { x: 50, y: 50, size: 20, speed: 5 };
const obstacles = [];
let lives = 3;
let score = 0;
let gameOver = false;

// Crear obstáculos aleatorios
function createObstacles(count) {
    for (let i = 0; i < count; i++) {
        obstacles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            width: 20 + Math.random() * 30,
            height: 20 + Math.random() * 30,
            color: getRandomColor(),
        });
    }
}

// Generar un color aleatorio
function getRandomColor() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

// Dibujar el jugador
function drawPlayer() {
    ctx.fillStyle = 'white';
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

// Dibujar los obstáculos
function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.fillStyle = obstacle.color;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });
}

// Movimiento del jugador
function movePlayer(key) {
    if (key === 'ArrowUp' || key === 'w') player.y -= player.speed;
    if (key === 'ArrowDown' || key === 's') player.y += player.speed;
    if (key === 'ArrowLeft' || key === 'a') player.x -= player.speed;
    if (key === 'ArrowRight' || key === 'd') player.x += player.speed;

    // Limitar el movimiento dentro del canvas
    player.x = Math.max(0, Math.min(player.x, canvas.width - player.size));
    player.y = Math.max(0, Math.min(player.y, canvas.height - player.size));
}

// Detectar colisiones
function checkCollisions() {
    obstacles.forEach(obstacle => {
        if (
            player.x < obstacle.x + obstacle.width &&
            player.x + player.size > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.size > obstacle.y
        ) {
            lives--;
            if (lives <= 0) {
                gameOver = true;
            }
        }
    });
}

// Actualizar puntuación
function updateScore() {
    score++;
}

// Dibujar HUD
function drawHUD() {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Lives: ${lives}`, 10, 20);
    ctx.fillText(`Score: ${score}`, 10, 50);
}

// Ciclo principal del juego
function gameLoop() {
    if (gameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'red';
        ctx.font = '30px Arial';
        ctx.fillText('Game Over', canvas.width / 2 - 75, canvas.height / 2);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    drawObstacles();
    drawHUD();
    checkCollisions();
    updateScore();

    requestAnimationFrame(gameLoop);
}

// Controles
window.addEventListener('keydown', (e) => {
    movePlayer(e.key);
});

// Iniciar el juego
createObstacles(5); // Crear 5 obstáculos
gameLoop();
