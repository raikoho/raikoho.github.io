// Випадковий вибір фону in index
const effects = ['plasma2.js', 'textrain.js', 'rain.js', 'snow.js', 'snowWind.js', 'bloomstars.js', ' water.js'];
const randomEffect = effects[Math.floor(Math.random() * effects.length)];
const script = document.createElement('script');
script.src = randomEffect;
document.body.appendChild(script);
