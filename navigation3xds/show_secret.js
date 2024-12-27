// Список доступних файлів, з яких вибиратиметься випадковий
const scripts = [
    'encoding/whythissifer.js',
    'encoding/rrr.js'
];

// Функція для вибору випадкового скрипта
function getRandomScript() {
    const randomIndex = Math.floor(Math.random() * scripts.length);
    return scripts[randomIndex];
}
// Завантаження випадкового скрипта
function loadRandomScript() {
    const scriptPath = getRandomScript();
    const scriptElement = document.createElement('script');
    scriptElement.src = scriptPath;
    scriptElement.async = true;  // Запуск асинхронно, щоб не блокувати завантаження сторінки
    document.body.appendChild(scriptElement);
}
// Викликаємо функцію для завантаження випадкового скрипта при кожному оновленні сторінки
loadRandomScript();
