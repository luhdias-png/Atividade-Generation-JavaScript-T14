/*Lista 05 — Matrizes (Resolva 1 exercício):

Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
Todos os elementos da Diagonal Principal
Todos os elementos da Diagonal Secundária
A Soma de todos os elementos da Diagonal Principal
A Soma de todos os elementos da Diagonal Secundária
*/

import leia from "readline-sync"

let matriz = [
    [null, null, null],
    [null, null, null],
    [null, null, null] ];


console.log("Vamos preencher o quadrado 3x3!");

for (let linha = 0; linha < 3; linha++) {
    for (let coluna = 0; coluna < 3; coluna++) {
        let numero = leia.questionInt("Digite o numero da posicao [" + linha + "][" + coluna + "]:");
        matriz[linha][coluna] = numero;
    }
}

console.log("Quadrado que você digitou:");
console.log(matriz[0][0], matriz[0][1], matriz[0][2]);
console.log(matriz[1][0], matriz[1][1], matriz[1][2]);
console.log(matriz[2][0], matriz[2][1], matriz[2][2]);


let diagonalPrincipal = [];
let somaPrincipal = 0;

for (let i = 0; i < 3; i++) {
    let numero = matriz[i][i];
    diagonalPrincipal.push(numero);
    somaPrincipal += numero;
}

let diagonalSecundaria = [];
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
    let numero = matriz[i][2 - i];
    diagonalSecundaria.push(numero);
    somaSecundaria += numero;
}


console.log("\nSoma dos elementos da Diagonal Principal: " + somaPrincipal);

console.log("\nSoma dos elementos da Diagonal Secundária: " + somaSecundaria);
