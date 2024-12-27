// Створення canvas
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Скрипт
const particles = [];
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

class BlackHoleParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedX = (centerX - this.x) * 0.01;
        this.speedY = (centerY - this.y) * 0.01;
        this.radius = Math.random() * 3 + 1;
        this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (Math.hypot(centerX - this.x, centerY - this.y) < 5) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }

        this.draw();
    }
}

function createParticles() {
    for (let i = 0; i < 100; i++) {
        particles.push(new BlackHoleParticle());
    }
}

function animateBlackHole() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => particle.update());
    requestAnimationFrame(animateBlackHole);
}

createParticles();
animateBlackHole();
