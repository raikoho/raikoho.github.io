// randomContent.js

// Масиви заголовків і текстів для рандомного вибору
const content = [
    {
        header: "<span style='color: red; font-weight: bold; text-decoration: underline;'>[THE CODE YOU WERE NEVER MEANT TO SEE]</span>",
        paragraph: `
        <pre style="background: #222; color: #0f0; padding: 10px; border-radius: 5px;">
        <code>
        def decrypt_reality(ciphertext, key):
            for i in range(len(ciphertext)):
                plaintext[i] = ciphertext[i] ^ key[i % len(key)]
            return plaintext
        </code>
        </pre>
        `
    },
    {
        header: "<span style='color: darkblue; font-weight: bold;'>Dark Packets</span>",
        paragraph: `
        <p>I sat in a dark room with <span style="display:none">all ports open</span>
        and only the dim monitor glowing with code. I thought about the black market
        <br>for vulnerabilities and <span style="color: red; font-weight: bold;">XSS DETECTED</span>
        watched unauthorized packets fly through Wireshark.</p>
        
        <p style="color: cyan;">I decided to scan the network. I opened the
        <a href="nmap_scan_results.log" style="color: orange; text-decoration: none;">nmap results</a> and saw:</p>

        <table style="border-collapse: collapse; width: 50%; border: 1px solid #666;">
            <tr style="background: #444; color: white;">
                <th>PORT</th> <th>STATE</th> <th>SERVICE</th>
            </tr>
            <tr><td>22/tcp</td><td>filtered</td><td>ssh</td></tr>
            <tr><td>80/tcp</td><td>open</td><td>http</td></tr>
            <tr><td>443/tcp</td><td>open</td><td>https</td></tr>
            <tr><td>3306/tcp</td><td>open</td><td>mysql</td></tr>
        </table>
        <p>Something was wrong. SSH should have been closed. Someone was already here.</p>
        `
    },
    {
        header: "<span style='color: red; font-weight: bold;'>🛑 [ERROR] SYSTEM.LOG CORRUPTED 🛑</span>",
        paragraph: `
        <pre style="background: black; color: lime; padding: 10px; border-radius: 5px;">
        >>> file://bootstrap/kernel_ontology.fragment
        >>> file://root/hyperstition_vulnerabilities.log
        >>> ERROR: CIRCULAR REFERENCE DETECTED IN MEMORY ALLOCATION
        </pre>
        
        <h3 style="color: yellow;">INJECTION ATTACK: SEMANTIC SQL (SUB-QUANTUM LOGIC)</h3>
        
        <pre style="background: #222; color: red; padding: 10px; border-radius: 5px;">
        SELECT * FROM reality WHERE existence='true' AND consciousness='validated';
        DROP TABLE existence;
        </pre>
        <p>Your reality query is insecure. If this statement is executed, your "self" object is marked for deletion.</p>
        `
    },
    {
        header: "<span style='color: purple; font-weight: bold;'>🛑 ZERO-DAY IN FREE WILL (CVE-0000-0000) 🛑</span>",
        paragraph: `
        <p>An exploit in determinism has been identified:</p>
        
        <blockquote style="border-left: 4px solid red; padding-left: 10px; color: darkred;">
        A pre-existing vulnerability in causality allows remote actors to influence your decisions
        through injected stimuli. Most users believe they have full control over their actions,
        unaware that their cognition is subject to predictive behavioral analytics.
        </blockquote>
        `
    }
];

// Масиви для кольорів фону та тексту
const textColors = ['#ff6347', '#4682b4', '#32cd32'];

// Функція для рандомного вибору елемента з масиву
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Генерація рандомного контенту
function generateRandomContent() {
    const randomContent = getRandomElement(content);
    const randomTextColor = getRandomElement(textColors);

    document.getElementById('random-header').innerHTML = randomContent.header;
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
