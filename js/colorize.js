'use strict';

// ------------------------------------ Настройка персонажа волшебника

(function () {
    var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
    var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
    var wizardFireball = document.querySelector('.setup-fireball-wrap');
    var setupPlayer = document.querySelector('.setup-player');
    var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    
    var setWizardCoat = function (evt) {
        evt.currentTarget.style.fill = window.generateValue(window.wizard.coatColors);
    };

    var setWizardEyes = function(evt) {
        evt.currentTarget.style.fill = window.generateValue(window.wizard.eyeColors);
    };

    var setWizardFireball = function(evt) {
        evt.currentTarget.style.background = window.generateValue(fireballColors);
    };

    var setupPlayerInputs = setupPlayer.querySelectorAll('input');

    wizardCoat.addEventListener('click', function(evt) {
        setWizardCoat(evt);
        setupPlayerInputs[0].value = wizardCoat.style.fill; 
    });

    wizardEyes.addEventListener('click', function(evt) {
        setWizardEyes(evt);
        setupPlayerInputs[1].value = wizardEyes.style.fill; 
    }); 

    wizardFireball.addEventListener('click', function(evt) {
        setWizardFireball(evt);
        setupPlayerInputs[2].value = wizardFireball.style.background;
    });

    var setupForm = document.querySelector('.setup-wizard-form');
}) ()