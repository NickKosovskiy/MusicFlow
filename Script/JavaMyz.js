document.addEventListener("DOMContentLoaded", () => {
    // === Бургер-меню для мобильной навигации ===
    const burger = document.getElementById("burger");        // Кнопка-бургер
    const nav = document.getElementById("navMenu");          // Навигационное меню

    if (burger && nav) {
        burger.addEventListener("click", () => {
            // Переключаем класс .active для показа/скрытия меню
            nav.classList.toggle("active");
        });
    }

    // === Аккордеон футера для мобильных ===
    const toggleBtn = document.querySelector('.accordion-toggle');   // Кнопка "Развернуть"
    const content = document.querySelector('.accordion-content');    // Контейнер со скрытым содержимым

    if (toggleBtn && content) {
        toggleBtn.addEventListener('click', () => {
            // Переключаем класс .active для отображения/скрытия содержимого
            content.classList.toggle('active');
        });
    }
});
