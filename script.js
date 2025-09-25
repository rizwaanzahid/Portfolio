// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
  
  // Filter buttons logic
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card[data-type]');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      const filter = button.dataset.filter;
      cards.forEach(card => {
        const show = filter === 'all' || card.dataset.type === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });
  
  // Dynamic current year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
