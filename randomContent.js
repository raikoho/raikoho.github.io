// randomContent.js

// Масиви заголовків і текстів для рандомного вибору
const content = [
    {
        header: "[THE CODE YOU WERE NEVER MEANT TO SEE]",
        paragraph: `

        def decrypt_reality(ciphertext, key):
    for i in range(len(ciphertext)):
        plaintext[i] = ciphertext[i] ^ key[i % len(key)]
    return plaintext
    `
    },
    {
        header: "Dark Packets",
        paragraph: `

        I sat <br> in a dark room with <div style="display:none">all ports open</div> and only the dim monitor glowing with code. I thought about the black market <br>for vulnerabilities and <script>alert("XSS DETECTED")</script> watched <br>unauthorized packets fly through Wireshark.
        <br>I decided to scan the network. 
        I opened the <a href="nmap_scan_results.log">nmap results</a> and saw:

        PORT     STATE    SERVICE
22/tcp   filtered ssh
80/tcp   open     http
443/tcp  open     https
3306/tcp open     mysql

Something was wrong. SSH should have been closed. Someone was already here.

I tried SQL injection.
Opened the <style>table.users {display:none}</style> database and wrote:

sql
Copy
Edit
SELECT username, password FROM users WHERE '1'='1';
The passwords were leaked.
    `
        
    },
    {
        header: '<br>[ERROR] SYSTEM.LOG CORRUPTED – REBUILDING INDEX... <br>[WARNING] UNAUTHORIZED ACCESS DETECTED – USER:<br> UNKNOWN[INITIATING AUTO-RECOVERY...]>',
        paragraph: `
        >>> file://bootstrap/kernel_ontology.fragment
>>> file://root/hyperstition_vulnerabilities.log
>>> ERROR: CIRCULAR REFERENCE DETECTED IN MEMORY ALLOCATION
—
Begin transmission.
<script>alert("Ontology Breach Detected")</script>

<h3>INJECTION ATTACK: SEMANTIC SQL (SUB-QUANTUM LOGIC)</h3>
sql

SELECT * FROM reality WHERE existence='true' AND consciousness='validated';
DROP TABLE existence;

Your reality query is insecure. If this statement is executed, your "self" object is marked for deletion. If you ever feel like you're "fading out," it's because your existence is being rewritten in real-time.

Did you think your persistence was guaranteed? That your being() function was immune to garbage collection?
`
    },
    {
        header: "🛑 ZERO-DAY IN FREE WILL (CVE-0000-0000) 🛑",
        paragraph: `
        
An exploit in determinism has been identified:

A pre-existing vulnerability in causality allows remote actors (hidden sysadmins? unknown threat actors?) to influence your decisions through injected stimuli.
Most users believe they have full control over their actions, unaware that their cognition is subject to predictive behavioral analytics.
Your thoughts were precomputed before you ever had them.                `
    }
];

// Масиви для кольорів фону та тексту
const textColors = ['#333333', '#ff6347', '#4682b4', '#32cd32'];

// Функція для рандомного вибору елемента з масиву
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Генерація рандомного контенту
function generateRandomContent() {
    const randomContent = getRandomElement(content);
    const randomTextColor = getRandomElement(textColors);

    document.getElementById('random-header').textContent = randomContent.header;
    document.getElementById('random-paragraph').innerHTML = randomContent.paragraph;

    document.getElementById('random-header').style.color = randomTextColor;
    document.getElementById('random-paragraph').style.color = randomTextColor;
}

// Масив доступних секретних скриптів
const secretScripts = [
    'navigation3xds/encoding/whythissifer.js',
    'navigation3xds/encoding/rrr.js'
];

// Функція для вибору випадкового секретного скрипта
function getRandomSecretScript() {
    const randomIndex = Math.floor(Math.random() * secretScripts.length);
    return secretScripts[randomIndex];
}

// Завантаження та вставка випадкового скрипта в секцію
function loadRandomSecretScript() {
    const secretScriptPath = getRandomSecretScript();
    const scriptElement = document.createElement('script');
    scriptElement.src = secretScriptPath;
    scriptElement.async = true;
    
    // Додаємо новий скрипт у секцію
    const sectionElement = document.getElementById('secret-section');
    sectionElement.innerHTML = ''; // очищаємо старий вміст
    sectionElement.appendChild(scriptElement); // додаємо новий скрипт
}

// Викликаємо функцію при завантаженні сторінки
window.onload = () => {
    generateRandomContent(); // Генерація контенту
    loadRandomSecretScript(); // Завантаження секретного скрипта
};
