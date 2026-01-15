const NUMBER_OF_PARTICLES = 400; // Збільшено
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

const draw = () => {
    // Ефект "шлейфу": замість clearRect використовуємо напівпрозорий фон
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.x += p.speedX + (Math.random() - 0.5) * 4; // Більше тремтіння
        p.y += p.speedY;

        // Додаємо неонне світіння
        ctx.shadowBlur = 10;
        ctx.shadowColor = PARTICLE_COLOR;
        ctx.fillStyle = PARTICLE_COLOR;
        
        ctx.globalAlpha = Math.random() > 0.9 ? 1 : p.opacity; // Деякі пікселі спалахують
        ctx.fillRect(p.x, p.y, p.size * 2, p.size * 2); // Більший розмір
    });
    requestAnimationFrame(draw);
};

for (let i = 0; i < NUMBER_OF_PARTICLES; i++) particles.push(createParticle());
draw();
