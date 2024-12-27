const NUMBER_OF_RAINDROPS = 500;
const MAX_RAINDROP_LENGTH = 45;
const MAX_RAINDROP_SPEED = 10;
const RAINDROP_COLOR = '#0AF';
const raindrops = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0px';
canvas.style.pointerEvents = 'none'; // Prevent interfering with clicks
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.maxHeight = '1700px';

document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

// Function to create a new raindrop
const createRaindrop = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * MAX_RAINDROP_LENGTH + 5,
    speed: Math.random() * MAX_RAINDROP_SPEED + 2,
    color: RAINDROP_COLOR,
    sway: Math.random() - 0.5 // Slight horizontal movement
});

// Function to draw a raindrop
const drawRaindrop = (raindrop) => {
    ctx.beginPath();
    ctx.moveTo(raindrop.x, raindrop.y);
    ctx.lineTo(raindrop.x + raindrop.sway, raindrop.y + raindrop.length);
    ctx.strokeStyle = raindrop.color;
    ctx.lineWidth = 1;
    ctx.stroke();
}

// Update raindrop position
const updateRaindrop = (raindrop) => {
    raindrop.y += raindrop.speed;
    raindrop.x += raindrop.sway;
    if (raindrop.y >= canvas.height) {
        Object.assign(raindrop, createRaindrop());
        raindrop.y = 0; // Reset to the top
    }
}

// Animation loop
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    raindrops.forEach(raindrop => {
        updateRaindrop(raindrop);
        drawRaindrop(raindrop);
    });

    requestAnimationFrame(animate);
}

// Initialize raindrops
for (let i = 0; i < NUMBER_OF_RAINDROPS; i++) {
    raindrops.push(createRaindrop());
}

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Sync canvas with scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 1700) return;
    canvas.style.top = `${window.scrollY}px`;
});

animate();
