const prompt = require('prompt-sync')();

// Função para criar array
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

// Função para ver o elemento mais frequente 
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

// Função para retirar os termos repetidos 
function removerRepetidos(array) {
    // Verifica se o array é vazio ou nulo
    if (!array || array.length === 0) {
        console.log("Não há elementos recebidos");
        return;
    }

    // Utiliza um conjunto (Set) para eliminar os duplicados
    const arraySemRepetidos = [...new Set(array)];

    // Verifica se o array sem repetidos tem algum elemento
    if (arraySemRepetidos.length === 0) {
        console.log("Não há elementos recebidos");
    } else {
        console.log(arraySemRepetidos);
    }
    return arraySemRepetidos;
}

const tamanhoArray = parseInt(prompt("Qual o tamanho do array que você quer ? "));
const valorMaximo = parseInt(prompt("Qual o maior valor que você quer que apareça ? "));
const valorMinimo = parseInt(prompt("Qual o menor valor que você quer que apareça ? "));

console.log("O array que foi criando:")
const arrayCriado = gerarArray(tamanhoArray, valorMinimo, valorMaximo);

console.log("Esse é o termo que mais se repete no array:")
elementoMaisFrequente(arrayCriado);

console.log("Esse é o array sem números repetidos:")
removerRepetidos(arrayCriado);