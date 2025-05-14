document.addEventListener("DOMContentLoaded", () => {
    // ======= Навигация: бургер-меню =======
    const burger = document.getElementById("burger");       // Кнопка-бургер
    const nav = document.getElementById("navMenu");         // Меню навигации

    if (burger && nav) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("active");                 // Переключаем класс 'active' у меню
        });
    }

    // ======= Аккордеон в футере (на мобильных) =======
    const toggleBtn = document.querySelector('.accordion-toggle');     // Кнопка "Информация"
    const content = document.querySelector('.accordion-content');      // Контейнер аккордеона

    if (toggleBtn && content) {
        toggleBtn.addEventListener('click', () => {
            content.classList.toggle('active');                         // Показываем/скрываем блок
        });
    }
});
