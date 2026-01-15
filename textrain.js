const rainContainer = document.createElement('div');
rainContainer.style.position = 'absolute';
rainContainer.style.top = '0';
rainContainer.style.left = '0';
rainContainer.style.width = '100%';
rainContainer.style.height = '100%';
rainContainer.style.overflow = 'hidden';
document.body.appendChild(rainContainer);

const randomChar = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()';
    return chars[Math.floor(Math.random() * chars.length)];
};

const createRainDrop = () => {
    const drop = document.createElement('span');
    drop.textContent = randomChar();
    drop.style.position = 'absolute';
    drop.style.color = '#0f0';
    drop.style.fontSize = `${Math.random() * 24 + 10}px`;
    drop.style.left = `${Math.random() * window.innerWidth}px`;
    drop.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;

    rainContainer.appendChild(drop);
    setTimeout(() => drop.remove(), 5000);
};

setInterval(createRainDrop, 100);
