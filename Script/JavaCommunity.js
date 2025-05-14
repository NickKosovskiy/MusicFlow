document.addEventListener("DOMContentLoaded", () => {
    // Получаем элементы: кнопку-бургер и меню навигации
    const burger = document.getElementById("burger");
    const nav = document.getElementById("navMenu");

    // Добавляем обработчик клика на кнопку-бургер
    burger.addEventListener("click", () => {
        // Переключаем класс 'active' у меню навигации — открывает/закрывает его
        nav.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Получаем кнопку аккордеона и блок с содержимым
    const toggleBtn = document.querySelector('.accordion-toggle');
    const content = document.querySelector('.accordion-content');

    // Если оба элемента существуют на странице
    if (toggleBtn && content) {
        // Назначаем обработчик клика по кнопке
        toggleBtn.addEventListener('click', () => {
            // Переключаем класс 'active' для отображения/скрытия содержимого
            content.classList.toggle('active');
        });
    }
});
