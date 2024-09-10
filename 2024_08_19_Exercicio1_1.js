const prompt = require('prompt-sync')();

const tamanhoArray = parseInt(prompt("Qual o tamanho do array que você quer ? "));
const valorMaximo = parseInt(prompt("Qual o maior valor que você quer que apareça ? "));
const valorMinimo = parseInt(prompt("Qual o menor valor que você quer que apareça ? "));

function gerarArray(Tamanho, min, max) {
    if (Tamanho < 0 || min > max) {
        throw new Error("Argumentos inválidos");
    }

    const novoArray = [];

    for (let i = 0; i < Tamanho; i++) {
        const numeroGerado = Math.floor(Math.random() * (max - min + 1) + min);
        novoArray.push(numeroGerado);
    }

    console.log(novoArray);
    return novoArray;
}

function elementoMaisFrequente(array) {
    let maior = null;
    let ocorrenciasMaior = 0;

    for (let i = 0; i < array.length; i++) {
        let ocorrencias = 1;

        for (let t = i + 1; t < array.length; t++) {
            if (array[i] == array[t]) {
                ocorrencias++;
            }
        }

        if (ocorrencias > ocorrenciasMaior) {
            maior = array[i];
            ocorrenciasMaior = ocorrencias;
        }
    }

    if (ocorrenciasMaior > 1) {
        console.log(maior);
    } else {
        console.log("Não há elemento mais frequente");
    }
}

const arrayCriado = gerarArray(tamanhoArray, valorMinimo, valorMaximo);

elementoMaisFrequente(arrayCriado);
