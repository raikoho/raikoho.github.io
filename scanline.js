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
    // Рідке повне очищення для різкості
    if (Math.random() > 0.9) ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Випадкові широкі блоки "шуму"
    if (Math.random() > 0.8) {
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(0, 255, 174, 0.2)' : 'rgba(255, 0, 128, 0.2)';
        ctx.fillRect(0, Math.random() * canvas.height, canvas.width, Math.random() * 20);
    }

    // Швидка скануюча лінія з тінню
    glitchY += 15; // Набагато швидше
    if (glitchY > canvas.height) glitchY = 0;
    
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#ff0080';
    ctx.fillStyle = '#ff0080';
    ctx.fillRect(0, glitchY, canvas.width, 2);

    requestAnimationFrame(drawGlitch);
};
drawGlitch();
