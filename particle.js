const particles = [];

const createParticle = (x, y) => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    // Випадковий розмір і напрям
    const size = Math.random() * 6 + 4;
    const velocity = {
        x: (Math.random() - 0.5) * 5,
        y: (Math.random() - 0.5) * 5
    };

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    particles.push({ element: particle, velocity, life: 100 });
};

const updateParticles = () => {
    particles.forEach((p, i) => {
        p.life -= 2;
        p.velocity.y += 0.2; // Гравітація
        p.element.style.transform = `translate(${p.velocity.x}px, ${p.velocity.y}px)`;
        p.element.style.opacity = p.life / 100;

        if (p.life <= 0) {
            p.element.remove();
            particles.splice(i, 1);
        }
    });
};

document.addEventListener('mousemove', (e) => {
    createParticle(e.clientX, e.clientY);
});

setInterval(updateParticles, 16);
