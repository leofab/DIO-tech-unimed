"use strict";
const button = document.getElementsByTagName('button')[0];
const input = document.getElementsByTagName('input')[0];
const input2 = document.getElementsByTagName('input')[1];
function addNumber(numero1, numero2) {
    return numero1 + numero2;
}
if (button) {
    button.addEventListener('click', function () {
        if (input && input2) {
            const numero1 = parseInt(input.value);
            const numero2 = parseInt(input2.value);
            const result = addNumber(numero1, numero2);
            console.log(result);
        }
    });
}
