const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';

let time = 0;

function drawRipple() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, Math.sin(time) * 50 + 100, 0, Math.PI * 2);
    ctx.fill();
}

function animate() {
    time += 0.1;
    drawRipple();
    requestAnimationFrame(animate);
}

animate();
