var setupBlock = document.querySelector('.setup');
var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)',
                  'rgb(241, 43, 107)',
                  'rgb(146, 100, 161)',
                  'rgb(56, 159, 117)',
                  'rgb(215, 210, 55)',
                  'rgb(0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];                  
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

setupBlock.classList.remove('hidden');



for (var i = 0; i < wizardsList.length; i++) {
    fragment.appendChild(renderWizard(wizardsList));
};

similarListElement.appendChild(fragment);

setupBlock.querySelector('.setup-similar').classList.remove('hidden');









 





