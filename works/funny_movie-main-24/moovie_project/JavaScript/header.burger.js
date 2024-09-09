document.addEventListener("DOMContentLoaded", () => {
  // Анимация наведения на элементы меню
  const menuItems = document.querySelectorAll("nav ul li a");
  menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.color = "#ffd700";
      item.style.textShadow = "0 0 10px #ffd700";
    });
    item.addEventListener("mouseout", () => {
      item.style.color = "";
      item.style.textShadow = "";
    });
  });

  // Бургер-меню: открытие/закрытие и автоматическое закрытие при клике на раздел
  const burgerMenu = document.getElementById("burger-menu");
  const navLinks = document.getElementById("nav-links");
  const navItems = navLinks.querySelectorAll("a");

  burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // Кнопка "Наверх": отображение/скрытие и плавная прокрутка
  const backToTopButton = document.getElementById("back-to-top");

  let timeout;
  const toggleBackToTopButton = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (window.scrollY > 200) {
        backToTopButton.classList.remove("hidden");
      } else {
        backToTopButton.classList.add("hidden");
      }
    }, 100);
  };

  window.addEventListener("scroll", toggleBackToTopButton);

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  toggleBackToTopButton(); // Инициализация видимости кнопки
});
