const createLight = () => {
    const light = document.createElement('div');
    light.classList.add('light');
    document.body.appendChild(light);

    const size = Math.random() * 50 + 10;
    light.style.width = `${size}px`;
    light.style.height = `${size}px`;
    light.style.left = `${Math.random() * window.innerWidth}px`;
    light.style.top = `${Math.random() * window.innerHeight}px`;

    setInterval(() => {
        light.style.left = `${Math.random() * window.innerWidth}px`;
        light.style.top = `${Math.random() * window.innerHeight}px`;
    }, Math.random() * 3000 + 2000);
};

for (let i = 0; i < 20; i++) {
    createLight();
}
