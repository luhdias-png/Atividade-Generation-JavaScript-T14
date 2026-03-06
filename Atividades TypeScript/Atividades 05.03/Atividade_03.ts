/*Escreva um programa para criar uma Collection Set do tipo number. O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
Mostre na tela todos os elementos da Collection Set. */

import readlinesync from "readline-sync";

const numeros: Set<number> = new Set<number>();

let numero: number;

while (numeros.size < 10) {

    numero = readlinesync.questionInt("Digite um numero inteiro (nao repetido): ");

    if (numeros.has(numero)) {
        console.log("Numero repetido! Digite outro.");
    } else {
        numeros.add(numero);
    }

}

console.log("\nElementos dentro do Set:");

for (let valor of numeros) {
    console.log(valor);
}