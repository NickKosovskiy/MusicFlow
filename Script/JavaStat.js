document.addEventListener("DOMContentLoaded", () => {
    // ======= Бургер-меню =======
    const burger = document.getElementById("burger");     // Кнопка-бургер
    const nav = document.getElementById("navMenu");       // Навигационное меню

    if (burger && nav) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("active");               // Переключение отображения меню
        });
    }

    // ======= Аккордеон (мобильная информация) =======
    const toggleBtn = document.querySelector('.accordion-toggle');     // Кнопка аккордеона
    const content = document.querySelector('.accordion-content');      // Контент аккордеона

    if (toggleBtn && content) {
        toggleBtn.addEventListener('click', () => {
            content.classList.toggle('active');           // Показать/скрыть дополнительную информацию
        });
    }

    // ======= Гистограмма жанров музыки =======
    new Chart(document.getElementById('barChart').getContext('2d'), {
        type: 'bar',
        data: {
            labels: ['Рок', 'Поп', 'Хип-хоп', 'Электронная', 'Джаз'], // Названия жанров
            datasets: [{
                label: 'Прослушивания (тыс.)',                        // Название набора данных
                data: [120, 190, 300, 150, 80],                        // Кол-во прослушиваний
                backgroundColor: ['#ff4500', '#ff6347', '#ffa07a', '#fa8072', '#cd5c5c'], // Цвета столбцов
                borderColor: '#ff4500',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500,
                easing: 'easeOutBounce'
            },
            plugins: {
                tooltip: { enabled: true }      // Всплывающие подсказки
            }
        }
    });

    // ======= Пузырьковая диаграмма активности пользователей =======
    new Chart(document.getElementById('bubbleChart').getContext('2d'), {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Активность пользователей',
                data: [
                    { x: 10, y: 20, r: 25 },
                    { x: 20, y: 10, r: 30 },
                    { x: 30, y: 25, r: 20 },
                    { x: 40, y: 18, r: 22 },
                    { x: 50, y: 30, r: 35 }
                ],
                backgroundColor: 'rgba(255, 69, 0, 0.6)',
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1500,
                easing: 'easeOutExpo'
            },
            plugins: {
                tooltip: { enabled: true }
            },
            scales: {
                x: {
                    min: 0,
                    max: 60,
                    title: {
                        display: true,
                        text: 'Время на платформе (часы)'
                    }
                },
                y: {
                    min: 0,
                    max: 40,
                    title: {
                        display: true,
                        text: 'Количество взаимодействий'
                    }
                }
            }
        }
    });
});
