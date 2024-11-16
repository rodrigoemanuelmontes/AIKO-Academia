const canvas = document.getElementById("my-canvas");
canvas.style.backgroundColor = "#000000";
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;
let mouthAngle = 0;
let mouthSpeed = 0.1;

function drawGridSystem() {
    ctx.strokeStyle = "#00FF00";
    ctx.lineWidth = 0.25;

    for (let x = 0; x < canvas.width; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.lineWidth = x % 50 === 0 ? 0.5 : 0.25;
        ctx.stroke();
        if (x % 50 === 0) ctx.fillText(x, x, 10);
    }

    for (let y = 0; y < canvas.height; y += 10) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.lineWidth = y % 50 === 0 ? 0.5 : 0.25;
        ctx.stroke();
        if (y % 50 === 0) ctx.fillText(y, 0, y + 10);
    }
}

