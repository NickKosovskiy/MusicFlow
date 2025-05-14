document.addEventListener("DOMContentLoaded", () => {
    // ======= Бургер-меню =======
    const burger = document.getElementById("burger");     // Кнопка-бургер
    const nav = document.getElementById("navMenu");       // Меню навигации

    if (burger && nav) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("active");               // Переключаем отображение меню
        });
    }

    // ======= Переключение между формами входа и регистрации =======
    const toggleLink = document.getElementById('toggle-link');
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const formTitle = document.getElementById('form-title');

    if (toggleLink && registrationForm && loginForm && formTitle) {
        toggleLink.addEventListener('click', () => {
            const isRegistrationHidden = registrationForm.style.display === 'none';
            registrationForm.style.display = isRegistrationHidden ? 'block' : 'none';
            loginForm.style.display = isRegistrationHidden ? 'none' : 'block';
            formTitle.textContent = isRegistrationHidden ? 'Создать аккаунт' : 'Войти';
            toggleLink.textContent = isRegistrationHidden
                ? 'Уже есть аккаунт? Войти'
                : 'Нет аккаунта? Зарегистрироваться';
        });
    }
});

// ======= Проверка силы пароля =======
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthElement = document.getElementById('password-strength');
    let strength = 0;

    // Увеличиваем силу в зависимости от критериев
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;

    const strengthTexts = [
        "Пароль слишком слабый",
        "Пароль слабый",
        "Пароль средний",
        "Пароль хороший",
        "Пароль очень хороший"
    ];
    const colors = ["red", "orange", "yellow", "green", "green"];

    strengthElement.textContent = strengthTexts[strength];
    strengthElement.style.color = colors[strength];
}

// ======= Проверка совпадения паролей =======
function checkPasswordMatch() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorElement = document.getElementById('password-error');

    if (password !== confirmPassword) {
        errorElement.textContent = "Пароли не совпадают";
        errorElement.style.color = "red";
    } else {
        errorElement.textContent = "";
    }
}

// ======= Валидация формы регистрации =======
function validateForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!username || !email || !password || !confirmPassword) {
        alert("Все поля обязательны для заполнения.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Пожалуйста, введите корректный email.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Пароли не совпадают.");
        return false;
    }

    if (password.length < 6) {
        alert("Пароль должен содержать минимум 6 символов.");
        return false;
    }

    alert("Форма успешно отправлена!");
    return true;
}
