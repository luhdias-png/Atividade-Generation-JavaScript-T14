/*Lista 01 — Laço de Repetição FOR (Resolva 1 exercício):
Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5.*/

import leia from "readline-sync"

let num1, num2

num1 = leia.questionInt("Digite o primeiro numero: ");
num2 = leia.questionInt("Digite o segundo numero: ");

if (num2 < num1 || num2 < num1 < 0) {
    console.log("Intervalo invalido");    
} else {
    for (let i = num1; i <= num2 ; i++){
        if(i % 15 === 0)
            console.log(`${i} é multiplo de 3 e 5`);        
    }
}
