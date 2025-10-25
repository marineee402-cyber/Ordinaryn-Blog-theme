const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const journalText = document.querySelector('.journal-text');

const entries = [
  `<h1>Ordinaryn ✿</h1>
   <p>Today feels like a quiet rewind...</p>`,
  `<h1>Entry 2</h1>
   <p>Another journal entry...</p>`,
  `<h1>Entry 3</h1>
   <p>Third page content...</p>`
];

let currentPage = 0;

function showPage(index) {
  journalText.innerHTML = entries[index];
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < entries.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// Initialize first page
showPage(currentPage);
