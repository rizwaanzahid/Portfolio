// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Filter logic
const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card[data-type]');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    const f = btn.dataset.filter;
    cards.forEach(c => {
      const show = f === 'all' || c.dataset.type === f;
      c.style.display = show ? '' : 'none';
    });
  });
});

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
