var inputTamanho = document.querySelector('[name=tamanho]');
var outputTamanho = document.querySelector('[name=valorTamanho]');

function mostraTamanho() {

    outputTamanho.value = inputTamanho.value;
    console.log("troquei valor");
}



    inputTamanho.oninput = mostraTamanho;