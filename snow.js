const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SIZE = 2;
const MAX_SNOWFLAKE_SPEED = 0.01;
const SNOWFLAKE_COLOR = '#DDD';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0px';
canvas.style.pointerEvents = 'none'; // to prevent any click events
canvas.width = window.innerWidth - 24;
canvas.height = window.innerHeight - 16;
canvas.style.maxHeight = '1700px'

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 2,
    color: SNOWFLAKE_COLOR,
    sway: Math.random() - 0.5
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.color;
    ctx.fill();
}

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway;
    if(snowflake.y >= canvas.height){
        Object.assign(snowflake, createSnowflake());
    }
}

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
    })

    requestAnimationFrame(animate)
}

for (i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
    snowflakes.push(createSnowflake());
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth - 24;
    canvas.height = window.innerHeight - 16;
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 1700) return;
    canvas.style.top = `${window.scrollY}px`;
})

animate();
