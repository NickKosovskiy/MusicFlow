document.addEventListener('DOMContentLoaded', () => {
    // ======= Обработчик кнопки смены текста =======
    const changeTextBtn = document.getElementById('changeTextBtn');          // Кнопка "Сменить текст"
    const changeableText = document.getElementById('changeableText');        // Параграф с изменяемым текстом

    if (changeTextBtn && changeableText) {
        changeTextBtn.addEventListener('click', () => {
            // При нажатии изменяется содержимое параграфа
            changeableText.textContent = 'Здесь могла быть ваша реклама';
        });
    }

    // ======= Навигация: бургер-меню =======
    const burger = document.getElementById('burger');     // Кнопка-бургер
    const nav = document.getElementById('navMenu');       // Навигационное меню

    if (burger && nav) {
        // Переключаем класс "active" для показа/скрытия меню
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // ======= Аккордеон (отображается на мобильных) =======
    const toggleBtn = document.querySelector('.accordion-toggle');      // Кнопка "Информация о MusicFlow"
    const content = document.querySelector('.accordion-content');       // Скрытый блок с информацией

    if (toggleBtn && content) {
        toggleBtn.addEventListener('click', () => {
            // Переключаем класс "active" для показа/скрытия контента
            content.classList.toggle('active');
        });
    }
});
