let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

function somarAoSaldo(saldo: number, valor: number) {
    campoSaldo.innerHTML = String(Number(soma.value) + Number(campoSaldo.innerText));
}

function limparSaldo () {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(campoSaldo.innerText), Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
})
