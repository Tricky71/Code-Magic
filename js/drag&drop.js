'use strict';

// ---------------------------Настройка перетаскивания окна настройки персонажа волшебника

( function () {
    var dialogHandler = window.setup.setupBlock.querySelector('.upload');

    dialogHandler.addEventListener('mousedown', function(evt) {
        evt.preventDefault();

        var startCoords = {
            x: evt.clientX,
            y: evt.clientY
        };

        var dragged = false;

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
            dragged = true;

            var shift = {
                x: startCoords.x - moveEvt.clientX,
                y: startCoords.y - moveEvt.clientY
            };

            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };
            window.setup.setupBlock.style.top = (window.setup.setupBlock.offsetTop - shift.y) + 'px';
            window.setup.setupBlock.style.left = (window.setup.setupBlock.offsetLeft - shift.x) + 'px';
            console.log(window.setup.setupBlock.style.top);
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);

            if (dragged) {
                var onClickPreventDefault = function (evt) {
                    evt.preventDefault();
                    dialogHandler.removeEventListener('click', onClickPreventDefault);
                };
                dialogHandler.addEventListener('click', onClickPreventDefault);
            };
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
}) ()    
