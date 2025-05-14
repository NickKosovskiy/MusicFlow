document.addEventListener("DOMContentLoaded", () => {
    // ======= Навигация: бургер-меню =======
    const burger = document.getElementById("burger");       // Кнопка-бургер
    const nav = document.getElementById("navMenu");         // Меню навигации

    if (burger && nav) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("active");                 // Переключение видимости меню
        });
    }

    // ======= Переключение новостей (Подробнее/Скрыть) =======
    const toggleButtons = document.querySelectorAll('.toggle-btn');  // Все кнопки "Подробнее"

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newsItem = button.closest('.news-item');            // Родительский блок новости
            newsItem.classList.toggle('active');                      // Переключаем класс активности

            // Меняем текст кнопки в зависимости от состояния
            button.textContent = newsItem.classList.contains('active') ? 'Скрыть' : 'Подробнее';
        });
    });

    // ======= Аккордеон (мобильная версия футера) =======
    const toggleBtn = document.querySelector('.accordion-toggle');     // Кнопка "Информация"
    const content = document.querySelector('.accordion-content');      // Контейнер с содержимым

    if (toggleBtn && content) {
        toggleBtn.addEventListener('click', () => {
            content.classList.toggle('active');                       // Показываем/скрываем контент
        });
    }
});
