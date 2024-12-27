// Створення canvas
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Стилі для canvas
canvas.style.position = 'fixed'; // Це дозволить canvas бути поверх вмісту
canvas.style.top = '0'; // Встановлюємо його до верхнього краю
canvas.style.left = '0'; // Встановлюємо його до лівого краю
canvas.style.zIndex = '-1'; // Встановлюємо його позаду всього контенту (як фон)
canvas.style.pointerEvents = 'none'; // Щоб елементи не блокували взаємодію з контентом

// Скрипт (приклад для одного ефекту, решта аналогічні)
let time = 0;

function drawPlasma() {
    const imageData = ctx.createImageData(canvas.width, canvas.height);

    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            const index = (y * canvas.width + x) * 4;

            const red = Math.sin(x * 0.05 + time) * 128 + 128;
            const green = Math.sin(y * 0.05 + time) * 128 + 128;
            const blue = Math.sin((x + y) * 0.02 + time) * 128 + 128;

            imageData.data[index] = red;
            imageData.data[index + 1] = green;
            imageData.data[index + 2] = blue;
            imageData.data[index + 3] = 255;
        }
    }

    ctx.putImageData(imageData, 0, 0);
    time += 0.03;
    requestAnimationFrame(drawPlasma);
}

drawPlasma();
