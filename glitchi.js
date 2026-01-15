const NUMBER_OF_PARTICLES = 150;
const PARTICLE_COLOR = '#00ffae';
const particles = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'fixed'; // Використовуємо fixed, щоб не гратися зі scroll
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '1'; 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const createParticle = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.5,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
    opacity: Math.random()
});
t
const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.speedX + (Math.random() - 0.5) * 2; // додаємо мікро-глітч
        p.y += p.speedY;
        
        if(p.x < 0) p.x = canvas.width;
        if(p.x > canvas.width) p.x = 0;
        if(p.y < 0) p.y = canvas.height;
        if(p.y > canvas.height) p.y = 0;

        ctx.fillStyle = PARTICLE_COLOR;
        ctx.globalAlpha = p.opacity;
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    requestAnimationFrame(draw);
};

for (let i = 0; i < NUMBER_OF_PARTICLES; i++) particles.push(createParticle());
draw();
