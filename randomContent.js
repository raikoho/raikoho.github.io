const TOTAL_PAGES = 6;
const COLORS = ['#ff6347', '#4682b4', '#32cd32'];

function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

async function generateRandomContent() {
    try {
        const i = Math.floor(Math.random() * TOTAL_PAGES) + 1;
        const res = await fetch(`xedni-gen/${i}.json`);
        if (!res.ok) throw new Error('JSON not found');

        const data = await res.json();

        const headerEl = document.getElementById('random-header');
        const paragraphEl = document.getElementById('random-paragraph');

        headerEl.innerHTML = data.header;
        paragraphEl.innerHTML = data.paragraph;

        const c = rand(COLORS);
        headerEl.style.color = c;
        paragraphEl.style.color = c;

    } catch (e) {
        console.error(e);
    }
}

window.addEventListener('load', generateRandomContent);
