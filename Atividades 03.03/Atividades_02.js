/*Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo:*/

import leia from "readline-sync"

let numero;

console.log("Digite um numero para analisarmos se é par ou impar positivo ou negativo.")
numero = leia.questionInt("Digite um numero:");

if (numero === 0){
    console.log("Zero é par");
}else{
    let sinal = numero > 0 ? "Positivo" : "Negativo";
    let parimpar = numero % 2 === 0 ? "Par" : "Impar"
    console.log(`O numero ${numero} é ${sinal} e ${parimpar}`)
}
console.log("\nFim do programa.")