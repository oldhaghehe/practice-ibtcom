/*

document.addEventListener('DOMContentLoaded', function() {
    // Меню-бургер
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }

    // Подсветка активной страницы в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Модальное окно "Заказать звонок"
    const orderCallBtn = document.getElementById('orderCallBtn'); // Кнопка в шапке
    const orderCallButtons = document.querySelectorAll('.orderCallButton'); // Кнопки в контенте (с классом)
    const modal = document.getElementById('orderCallModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const orderCallForm = document.getElementById('orderCallForm');
    const myModal3 = document.getElementById('myModal3');


    // Функция открытия модального окна
    const openModal = function() {
        modal.style.display = "block";
    };

    // Привязываем функцию открытия к кнопке в шапке (если она есть)
    if (orderCallBtn) {
        orderCallBtn.onclick = openModal;
    }

    // Привязываем функцию открытия ко всем кнопкам с классом orderCallButton
    orderCallButtons.forEach(button => {
        button.onclick = openModal;
    });

    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Модальное окно "Спасибо за заявку"


    // Обработчик отправки формы
    orderCallForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы по умолчанию

        // Проверка валидности формы
        if (orderCallForm.checkValidity()) {
            //Здесь должна быть логика отправки данных формы на сервер (AJAX)
            //(fetch или XMLHttpRequest)

            // После успешной отправки (или имитации успешной отправки)
            modal.style.display = 'none'; // Скрываем orderCallModal
            myModal3.style.display = 'block'; // Отображаем myModal3

            // Дополнительно: сброс формы
            orderCallForm.reset();
        } else {
            // Если форма не валидна, показываем сообщения об ошибках
            alert("Пожалуйста, заполните все обязательные поля.");
        }
    });

    // Функция для закрытия модального окна myModal3
    const closeMyModal3Btn = myModal3.querySelector('.close-reveal-modal'); // Ищем кнопку внутри myModal3
    if (closeMyModal3Btn) {
        closeMyModal3Btn.addEventListener('click', function() {
            myModal3.style.display = 'none';
        });
    }
});
*/
document.addEventListener('DOMContentLoaded', function() {
    // Меню-бургер
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navUl.classList.toggle('active');
        });
    }

    // Подсветка активной страницы в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Модальное окно "Заказать звонок"
    const orderCallBtn = document.getElementById('orderCallBtn'); // Кнопка в шапке
    const orderCallButtons = document.querySelectorAll('.orderCallButton'); // Кнопки в контенте (с классом)
    const modal = document.getElementById('orderCallModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const orderCallForm = document.getElementById('orderCallForm');
    const myModal3 = document.getElementById('myModal3');


    // Функция открытия модального окна
    const openModal = function() {
        modal.style.display = "block";
    };

    // Привязываем функцию открытия к кнопке в шапке (если она есть)
    if (orderCallBtn) {
        orderCallBtn.onclick = openModal;
    }

    // Привязываем функцию открытия ко всем кнопкам с классом orderCallButton
    orderCallButtons.forEach(button => {
        button.onclick = openModal;
    });

    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    //Модальное окно "Задать вопрос"
    const openQuestionModalBtn = document.getElementById('openQuestionModal');
    const myModal2 = document.getElementById('myModal2');
    const closeQuestionModalBtn = myModal2.querySelector('.close-reveal-modal');
    const questionForm = document.getElementById('questionForm');
    const modalThanks = document.getElementById('myModal3'); //Окно благодарности
    // Открыть окно
    openQuestionModalBtn.addEventListener('click', () => {
        myModal2.style.display = 'block';
    });
    // Закрыть окно
    closeQuestionModalBtn.addEventListener('click', () => {
        myModal2.style.display = 'none';
    });
    //Отправка формы
    questionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (questionForm.checkValidity()) {
            myModal2.style.display = 'none';
            modalThanks.style.display = 'block';
            questionForm.reset();
        } else {
            alert("Пожалуйста, заполните все поля формы");
        }
    });
    //Закрытие окна благодарности
    const closeModalThanksBtn = modalThanks.querySelector('.close-reveal-modal');
    if (closeModalThanksBtn) {
        closeModalThanksBtn.addEventListener('click', () => {
            modalThanks.style.display = 'none';
        });
    }

    // Функция для закрытия модального окна myModal3 (если нужно)
    const closeMyModal3Btn = myModal3.querySelector('.close-reveal-modal'); // Ищем кнопку внутри myModal3
    if (closeMyModal3Btn) {
        closeMyModal3Btn.addEventListener('click', function() {
            myModal3.style.display = 'none';
        });
    }
});