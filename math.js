let valor1 = document.querySelector("#Valor1");
let valor2 = document.querySelector("#Valor2");
let resultado = document.querySelector("#resultado");



function soma(a, b) {
    resultado.textContent(a + b);
}

function subtracao(a, b) {
    resultado.textContent(a - b);
}

function multiplicacao(a, b) {
    resultado.textContent(a * b);

    function divisao(a, b) {
        resultado.textContent(a / b);
    }
}

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click", function () {
    soma(Number(valor1.value), Number(valor2.value));
});

let btSubtracao = document.querySelector("#btSubtracao");
btSubtracao.addEventListener("click", function () {
    soma(Number(valor1.value), Number(valor2.value));
})

let btMultiplicacao = document.querySelector("#btMultiplicacao");
btMultiplicacao.addEventListener("click", function(){
    soma(Number(valor1.value), Number(valor2.value))
})

let btDivisao = document.querySelector("#btDivisao");
btDivisao.addEventListener("click", function(){
    soma(Number(valor1.value), Number(valor2.value))
})