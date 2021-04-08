"use strict";
// -----------------------Отрисовка волшебников и добавление их в блок других игроков

(function () {
    window.wizard = {
        coatColors: ['rgb(101, 137, 164)',
                    'rgb(241, 43, 107)',
                    'rgb(146, 100, 161)',
                    'rgb(56, 159, 117)',
                    'rgb(215, 210, 55)',
                    'rgb(0, 0, 0)'],
        eyeColors: ['black', 'red', 'blue', 'yellow', 'green']
    };
    var  similarListElement = document.querySelector('.setup-similar-list');
    
    var names = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardLook = {};
    var wizardsList = [];
    var fragment = document.createDocumentFragment();

    // Генератор случайных значенний
    window.generateValue = function (array) {
        return array[Math.floor(Math.random() * array.length)];
    };

    // Создание списка волшебников
    var getWizardsList = function () { 
        for (let j = 0; j < 4; j++) {
        wizardLook = {
        name: generateValue(names) + ' ' + generateValue(surnames),
        coatColor: generateValue(wizard.coatColors),
        eyesColor: generateValue(wizard.eyeColors)
        };
        wizardsList.push(wizardLook);
        };
    };
    
    getWizardsList()

    // Отрисовка волшебников и добавление их в блок других игроков
    var renderWizards = function (array) {
        for (var i = 0; i < array.length; i++) {
            var wizardElement = similarWizardTemplate.cloneNode(true);
            wizardElement.querySelector('.setup-similar-label').textContent = array[i].name;
            wizardElement.querySelector('.wizard-coat').style.fill = array[i].coatColor;
            wizardElement.querySelector('.wizard-eyes').style.fill = array[i].eyesColor;
            fragment.appendChild(wizardElement);
        };
        similarListElement.appendChild(fragment);
    };
    renderWizards(wizardsList);

    // Открытие блока других игроков
    var addSimilarWizardsBlock = function () {
        window.setup.setupBlock.querySelector('.setup-similar').classList.remove('hidden');
    };

    addSimilarWizardsBlock();
}) ()