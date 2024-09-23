const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.classList.toggle('hidden')
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});