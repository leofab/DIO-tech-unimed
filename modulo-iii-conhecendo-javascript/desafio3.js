"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
function somarAoSaldo(saldo, valor) {
    campoSaldo.innerHTML = String(Number(soma.value) + Number(campoSaldo.innerText));
}
function limparSaldo() {
    campoSaldo.innerHTML = '0';
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(campoSaldo.innerText), Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
