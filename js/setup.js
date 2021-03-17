var setupBlock = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireball = document.querySelector('.setup-fireball-wrap');
var setupSubmitBtn = document.querySelector('.setup-submit');
var setupPlayer = document.querySelector('.setup-player');
var userNameInput =document.querySelector('.setup-user-name');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)',
                  'rgb(241, 43, 107)',
                  'rgb(146, 100, 161)',
                  'rgb(56, 159, 117)',
                  'rgb(215, 210, 55)',
                  'rgb(0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green']; 
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardLook = {};
var wizardsList = [];
var fragment = document.createDocumentFragment();

// Генератор случайных значенний

var generateValue = function (array) {
    return array[Math.floor(Math.random() * array.length)];
};

// Отрисовка волшебника

var renderWizard = function (wizards) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    return wizardElement;
};

//Создание массива
for (let j = 0; j < 4; j++) {
    wizardLook = {
    name: generateValue(names) + ' ' + generateValue(surnames),
    coatColor: generateValue(coatColors),
    eyesColor: generateValue(eyeColors)
    };
    wizardsList.push(wizardLook);
};

for (var i = 0; i < wizardsList.length; i++) {
    fragment.appendChild(renderWizard(wizardsList));
};

similarListElement.appendChild(fragment);

setupBlock.querySelector('.setup-similar').classList.remove('hidden');

setupOpen.tabIndex = '0'; 
setupClose.tabIndex = '0';    
setupSubmitBtn.tabIndex = '0'; 

// Метод закрытия окна при нажатии на esc
var onPopupEscPress = function (evt) {
    if (userNameInput !== document.activeElement) { 
        if (evt.keyCode === ESC_KEYCODE) {
            popupClose();
        };
    };
};

// Метод открытия окна Setup
var popupOpen = function () {
   setupBlock.classList.remove('hidden');
   document.addEventListener('keydown', onPopupEscPress);

};

// Метод закрытия окна Setup
var popupClose = function () {
    setupBlock.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {    
    popupOpen();
});

setupOpen.addEventListener('keydown', function(evt){
    if (evt.keyCode === ENTER_KEYCODE) {
        popupOpen();
    }
});

setupClose.addEventListener('click', function() {
    popupClose();
});

setupClose.addEventListener('keydown', function(evt){
    if(evt.keyCode === ENTER_KEYCODE) {
        popupClose();
    }
});

// setupSubmitBtn.addEventListener('click', function () {
//     popupClose();
// });

// setupSubmitBtn.addEventListener('keydown', function(evt) {
//     if (evt.keyCode === 13) {
//         popupClose();
//     }
// });

var setWizardCoat = function (evt) {
    evt.currentTarget.style.fill = generateValue(coatColors);
};

var setWizardEyes = function(evt) {
    evt.currentTarget.style.fill = generateValue(eyeColors);
};

var setWizardFireball = function(evt) {
    evt.currentTarget.style.background = generateValue(fireballColors);
};



var setupPlayerInputs = setupPlayer.querySelectorAll('input');

wizardCoat.addEventListener('click', function(evt) {
    setWizardCoat(evt);
    setupPlayerInputs[0].value = wizardCoat.style.fill; 
    console.log(setupPlayerInputs[0]);
});

wizardEyes.addEventListener('click', function(evt) {
    setWizardEyes(evt);
    setupPlayerInputs[1].value = wizardEyes.style.fill; 
    console.log(setupPlayerInputs[1]);
}); 

wizardFireball.addEventListener('click', function(evt) {
    setWizardFireball(evt);
    setupPlayerInputs[2].value = wizardFireball.style.background;
    console.log(setupPlayerInputs[2]);
});

var setupForm = document.querySelector('.setup-wizard-form');

userNameInput.addEventListener('invalid', function(evt) {
    if(userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Имя должно состоять максимум из 15-ти символов');
    } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Обязательное поле');
    } else {
        userNameInput.setCustomValidity('');
    }
});
console.log(userNameInput.validity);











 





