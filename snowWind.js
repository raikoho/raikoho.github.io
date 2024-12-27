// snowWind.js
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

const snowflakes = [];

function createSnowflake() {
    return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 2,
        speed: Math.random() * 1 + 0.5,
        sway: Math.random() * 1 - 0.5,
    };
}

for (let i = 0; i < 200; i++) {
    snowflakes.push(createSnowflake());
}

function drawSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    snowflakes.forEach(snowflake => {
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateSnowflakes() {
    snowflakes.forEach(snowflake => {
        snowflake.x += snowflake.sway;
        snowflake.y += snowflake.speed;
        if (snowflake.x > canvas.width) snowflake.x = 0;
        if (snowflake.y > canvas.height) snowflake.y = 0;
    });
}

function animate() {
    drawSnowflakes();
    updateSnowflakes();
    requestAnimationFrame(animate);
}

animate();
