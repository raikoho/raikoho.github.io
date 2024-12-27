// randomContent.js

// Масиви заголовків і текстів для рандомного вибору
const headers = [
    "Неймовірні можливості чекають на вас!",
    "Ось, що ви могли б дізнатися сьогодні",
    "Приєднуйтесь до нашого світу ідей",
    "Знайдіть нові горизонти разом з нами",
    "Технології, що змінюють майбутнє"
];

const paragraphs = [
    "Ми створюємо інноваційні рішення, які змінюють уявлення про можливості.<br>Приєднуйтесь до нашого проекту, і разом ми можемо змінити світ на краще!",
    "У нас є найкращі ідеї для вашого розвитку — втілюйте їх разом з нами.<br>Наші продукти та послуги допоможуть вам досягти успіху.",
    "Ми прагнемо зробити світ кращим, використовуючи передові технології.<br>Ваша участь у нашому проекті має величезне значення для всіх нас.",
    "Не важливо, що ви шукаєте — у нас є рішення для кожного.<br>Погляньте на наші інноваційні розробки та знайдіть своє ідеальне рішення.",
    "Ми віримо, що кожна ідея може стати реальністю.<br>Долучайтесь до нас і разом будемо створювати майбутнє!"
];

// Масиви для кольорів фону та тексту
const textColors = ['#333333', '#ff6347', '#4682b4', '#32cd32'];

// Функція для рандомного вибору елемента з масиву
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Генерація рандомного контенту
function generateRandomContent() {
    const randomHeader = getRandomElement(headers);
    const randomParagraph = getRandomElement(paragraphs);
    const randomTextColor = getRandomElement(textColors);

    // Вставка заголовка та тексту в HTML
    document.getElementById('random-header').textContent = randomHeader; // Для заголовка без форматування
    document.getElementById('random-paragraph').innerHTML = randomParagraph; // Для абзацу з форматуванням (нові рядки)

    // Зміна кольору тексту
    document.getElementById('random-header').style.color = randomTextColor;
    document.getElementById('random-paragraph').style.color = randomTextColor;
}

// Викликаємо функцію при завантаженні сторінки
window.onload = generateRandomContent;
