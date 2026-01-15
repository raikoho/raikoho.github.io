const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '999'; 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

let glitchY = 0;

const drawGlitch = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Випадкова лінія "шуму"
    if (Math.random() > 0.95) {
        ctx.fillStyle = 'rgba(0, 255, 174, 0.15)';
        ctx.fillRect(0, Math.random() * canvas.height, canvas.width, Math.random() * 5);
    }

    // Тонка скануюча лінія
    glitchY += 2;
    if (glitchY > canvas.height) glitchY = 0;
    
    ctx.fillStyle = 'rgba(255, 0, 128, 0.05)';
    ctx.fillRect(0, glitchY, canvas.width, 1);

    requestAnimationFrame(drawGlitch);
};
drawGlitch();
