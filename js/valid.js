'use strict';

// ---------------------------Валидация поля ввода имени игрока  на странице настройки
(function () {
    window.setup.userNameInput.addEventListener('invalid', function(evt) {
        if(window.setup.userNameInput.validity.tooShort) {
            window.setup.userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
        } else if (window.setup.userNameInput.validity.tooLong) {
            window.setup.userNameInput.setCustomValidity('Имя должно состоять максимум из 15-ти символов');
        } else if (window.setup.userNameInput.validity.valueMissing) {
            window.setup.userNameInput.setCustomValidity('Обязательное поле');
        } else {
            window.setup.userNameInput.setCustomValidity('');
        }
    });
}) ()