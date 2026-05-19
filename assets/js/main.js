const btn = document.getElementById('theme-toggle');
const icon = document.getElementById('theme-icon');

// Recupera preferência salva
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  icon.className = 'fa-solid fa-moon';
}

btn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  icon.className = isLight ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});