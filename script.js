let currentPage = 1;
const totalPages = 3; // for expansion later

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    alert(`Go to page ${currentPage}`);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    alert(`Go to page ${currentPage}`);
  }
});

