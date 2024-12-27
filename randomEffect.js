// Випадковий вибір фону
const effects = ['plasma2.js', 'textrain.js', rain.js, snow.js];
const randomEffect = effects[Math.floor(Math.random() * effects.length)];
const script = document.createElement('script');
script.src = randomEffect;
document.body.appendChild(script);
