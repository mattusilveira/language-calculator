const linguaPortuguesa = document.createElement("script");
linguaPortuguesa.src = "idiomas/portugues.js";
document.head.appendChild(linguaPortuguesa);

const linguaEspanhola = document.createElement("script");
linguaEspanhola.src = "idiomas/espanol.js";
document.head.appendChild(linguaEspanhola);

const linguaInglesa = document.createElement("script");
linguaInglesa.src = "idiomas/english.js";
document.head.appendChild(linguaInglesa);

const linguaFrancesa = document.createElement("script");
linguaFrancesa.src = "idiomas/francais.js";
document.head.appendChild(linguaFrancesa);


let selectIdioma = document.querySelector("#idioma");
selectIdioma.addEventListener("change", function () {
    translate(this.value);
});

function translate(idioma) {
    const traducao = (idioma == "br") ? portugues()
        : (idioma == "es") ? espanol()
            : (idioma == "fr") ? francais()
                : (idioma == "en") ? english()
                    : null;
    setLanguage(traducao);
}

function setLanguage(traducao) {
    btSoma = document.getElementById("btSoma");
    btSubtração = document.getElementById("btSubtracao");
    btMultiplicação = document.getElementById("btMultiplicacao");
    btDivisão = document.getElementById("btDivisao");
    titulo = document.getElementById("titulo");
    boasVindas = document.getElementById("boasVindas");

    btSoma.value = traducao.soma;
    btSubtração.value = traducao.subtracao;
    btMultiplicação.value = traducao.multiplicacao;
    btDivisão.value = traducao.divisao;
    titulo.textContent = traducao.titulo;
    boasVindas.textContent = traducao.boasVindas;
}