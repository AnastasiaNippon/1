document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(item => {
      item.addEventListener('mouseover', () => {
        item.style.color = '#ffd700';
        item.style.textShadow = '0 0 10px #ffd700';
      });
      item.addEventListener('mouseout', () => {
        item.style.color = '';
        item.style.textShadow = '';
      });
    });
  });

document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');

  burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});
