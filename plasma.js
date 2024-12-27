// Створення canvas
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Скрипт
const particles = [];

class SmokeParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 10 + 5;
        this.opacity = 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * -2 - 1;
        this.color = 'rgba(128, 128, 128, ';
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.fill();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.01;
        if (this.opacity <= 0) {
            const index = particles.indexOf(this);
            if (index > -1) particles.splice(index, 1);
        }
        this.draw();
    }
}

function createSmoke(x, y) {
    for (let i = 0; i < 5; i++) {
        particles.push(new SmokeParticle(x, y));
    }
}

canvas.addEventListener('mousemove', (e) => {
    createSmoke(e.clientX, e.clientY);
});

function animateSmoke() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => particle.update());
    requestAnimationFrame(animateSmoke);
}

animateSmoke();
