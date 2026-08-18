document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.site-burger');
  const menu = document.getElementById('siteMenu');
  if (!burger || !menu) return;

  const setOpen = (open) => {
    burger.classList.toggle('is-active', open);
    menu.classList.toggle('is-active', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.documentElement.classList.toggle('menu-open', open);
  };

  burger.addEventListener('click', () => setOpen(!menu.classList.contains('is-active')));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) setOpen(false);
  });
});
