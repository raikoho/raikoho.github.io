const TOTAL_PAGES = 2;
const COLORS = ['#ff6347', '#4682b4', '#32cd32'];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function generateRandomContent() {
  const i = Math.floor(Math.random() * TOTAL_PAGES) + 1;
  const res = await fetch(`xedni-gen/${i}.json`);
  const data = await res.json();

  randomHeader.innerHTML = data.header;
  randomParagraph.innerHTML = data.paragraph;

  const c = rand(COLORS);
  randomHeader.style.color = c;
  randomParagraph.style.color = c;
}

window.onload = generateRandomContent;
