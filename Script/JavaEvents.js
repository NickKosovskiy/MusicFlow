document.addEventListener("DOMContentLoaded", () => {
    // === Фильтрация событий по городу ===
    const filter = document.getElementById('city-filter');
    const events = document.querySelectorAll('.event-card');

    filter?.addEventListener('change', () => {
        const selected = filter.value;
        events.forEach(event => {
            const city = event.getAttribute('data-city');
            event.style.display = (selected === 'all' || city === selected) ? 'block' : 'none';
        });
    });

    // === Открытие и закрытие модальных окон ===
    const modalButtons = document.querySelectorAll('.more-btn');
    const modals = document.querySelectorAll('.modal');
    const closes = document.querySelectorAll('.close');

    modalButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closes.forEach(close => {
        close.addEventListener('click', () => {
            close.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', e => {
        modals.forEach(modal => {
            if (e.target === modal) modal.style.display = 'none';
        });
    });

    // === Бургер-меню для мобильной навигации ===
    const burger = document.getElementById("burger");
    const nav = document.getElementById("navMenu");

    burger?.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // === Аккордеон футера для мобильных ===
    const toggleBtn = document.querySelector('.accordion-toggle');
    const content = document.querySelector('.accordion-content');

    if (toggleBtn && content) {
        toggleBtn.addEventListener('click', () => {
            content.classList.toggle('active');
        });
    }
});
