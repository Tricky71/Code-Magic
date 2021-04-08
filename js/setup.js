'use strict';

(function () {
    window.setup = {
        setupBlock: document.querySelector('.setup'),
        userNameInput: document.querySelector('.setup-user-name')
        };
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = document.querySelector('.setup-close');
    
    var setupSubmitBtn = document.querySelector('.setup-submit');
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;

    // Задание tabindex кнопкам
    var setTabIndex = function () {
        setupOpen.tabIndex = '0'; 
        setupClose.tabIndex = '0';    
        setupSubmitBtn.tabIndex = '0';
    };

    setTabIndex();

    // Метод открытия окна Setup
    var popupOpen = function () {
    setup.setupBlock.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    };

    // Метод закрытия окна Setup
    var popupClose = function () {
        setup.setupBlock.classList.add('hidden');
        document.removeEventListener('keydown', onPopupEscPress);
    };

    // Метод закрытия окна Setup при нажатии на esc
    var onPopupEscPress = function (evt) {
        if (setup.userNameInput !== document.activeElement) { 
            if (evt.keyCode === ESC_KEYCODE) {
                popupClose();
            };
        };
    };

    // Обработчики на иконку игрока (открывает окно настроек)
    setupOpen.addEventListener('click', function() {   
        popupOpen();
    });

    setupOpen.addEventListener('keydown', function(evt){
        if (evt.keyCode === ENTER_KEYCODE) {
            popupOpen();
        };
    });

    // Обработчики на кнопку закрытия окна настроек
    setupClose.addEventListener('click', function() {
        popupClose();
    });

    setupClose.addEventListener('keydown', function(evt){
        if(evt.keyCode === ENTER_KEYCODE) {
            popupClose();
        }
    });

}) ()



















 





