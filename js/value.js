'use strict';

(function () {
    var fireballSize = 22; 
    var getFireballSpeed = function (left) {
        return left ? 5 : 2;
    };    
    var wizardSpeed = 3; 
    var wizardWidth = 75;
    var getWizardHeight = function (wizardWidth) {
        return 1.337 * wizardWidth; 
    };
    var getWizardX = function (width) {
        return width / 2;
    };
    var getWizardY = function (height) {
        return height / 3 * 2; 
    };
    
}) ()