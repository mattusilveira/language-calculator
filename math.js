let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSoma = document.querySelector("#btSoma");
btSoma.addEventListener("click",
    function () {
        soma(Number(valor1.value), Number(valor2.value));
    });

let btSubtracao = document.querySelector("#btSubtracao");
btSubtracao.addEventListener("click", function () {
    subtracao(Number(valor1.value), Number(valor2.value));
})

let btMultiplicacao = document.querySelector("#btMultiplicacao");
btMultiplicacao.addEventListener("click", function () {
    multiplicacao(Number(valor1.value), Number(valor2.value))
})

let btDivisao = document.querySelector("#btDivisao");
btDivisao.addEventListener("click",
    function () {
        divicao(Number(valor1.value), Number(valor2.value))
    })

function soma(a, b) {
    resultado.textContent = (a + b);
}

function subtracao(a, b) {
    resultado.textContent = (a - b);
}

function multiplicacao(a, b) {
    resultado.textContent = (a * b);
}
    function divicao(a, b) {
        resultado.textContent = (a / b);
  
    }