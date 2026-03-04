/*Lista 03 — Laço de Repetição DO… WHILE (Resolva 1 exercício):

Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. Veja o exemplo abaixo:*/

import leia from "readline-sync"

let num, total = 0;

do {
    num = leia.questionInt("Digite um numero para ser somado (apenas positivos) e 0 para sair: ");
    if (num < 0){
        console.log("Apenas numeros positivos");
        continue
    }
    total += num
} while (num !== 0);

console.log("A soma dos números positivos é: " + total);