const prompt = require('prompt-sync')();

// FUNÇÃO PARA CRIAR O ARRAY
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

// FUNÇÃO DE SOMAR ARRAY 
function somarArrays(array1, array2) {
    // Determina o tamanho máximo entre os dois arrays
    const tamanhoMaximo = Math.max(array1.length, array2.length);
    const arraySoma = [];

    // Soma os elementos dos arrays, considerando 0 se o índice estiver fora de um dos arrays
    for (let i = 0; i < tamanhoMaximo; i++) {
        const valor1 = array1[i] !== undefined ? array1[i] : 0; // Verifica se o elemento existe, senão assume 0
        const valor2 = array2[i] !== undefined ? array2[i] : 0; // Verifica se o elemento existe, senão assume 0
        arraySoma.push(valor1 + valor2);
    }
    console.log(arraySoma)
    return arraySoma;
}

// FUNÇÃO MAIN QUE CHAMA A FUNÇÃO DE CRIAR ARRAY E SOMALOS

/* function main(Tamanho, min, max, array1,array2){
    console.log("Iniciando a função de gerar o array")
    gerarArray(Tamanho, min, max)
    console.log("Iniciando a função de gerar o array")
    gerarArray(Tamanho, min, max)

    console.log("Iniciando a soma dos arrays")
    somarArrays(array1,array2)
}
*/

// PRIMEIRO ARRAY
const tamanhoArray = parseInt(prompt("Qual o tamanho do primeiro array que você quer ? "));
const valorMaximo = parseInt(prompt("Qual o maior valor que você quer que apareça ? "));
const valorMinimo = parseInt(prompt("Qual o menor valor que você quer que apareça ? "));

console.log("O primeiro array que foi criando:")
const array1 = gerarArray(tamanhoArray, valorMinimo, valorMaximo);

// SEGUNDO ARRAY
const tamanhoArray2 = parseInt(prompt("Qual o tamanho do segundo array que você quer ? "));
const valorMaximo2 = parseInt(prompt("Qual o maior valor que você quer que apareça ? "));
const valorMinimo2 = parseInt(prompt("Qual o menor valor que você quer que apareça ? "));

console.log("O segundo array que foi criando:")
const array2 = gerarArray(tamanhoArray2, valorMinimo2, valorMaximo2);

// A SOMA DOS ARRAYS 
console.log("O resultado da soma dos arrays: ")
somarArrays(array1,array2)

// main(tamanhoArray,valorMaximo,valorMinimo,array1,array2)



