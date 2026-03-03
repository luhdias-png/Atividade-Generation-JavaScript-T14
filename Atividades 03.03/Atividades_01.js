// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

import leia from "readline-sync"

let num1, num2, num3, total;

console.log("Vamos analisar se o numero primeiro e o segundo sao maiores ou menores que o terceiro numero.")
num1 = leia.questionInt("Digite o numero A: ");
num2 = leia.questionInt("Digite o numero B: ");
num3 = leia.questionInt("Digite o numero C: ");

total = num1 + num2;

if (total > num3) {
    console.log(`\nO resultado total de ${total} é maior que o numero C ${num3}.`);
}else if (total < num3) {
    console.log(`\nO resultado total de ${total} é menor que o numero C${num3}.`);
}else {
    console.log(`\nO resultado total de ${total} é igual ao numero C${num3}.`);
}
console.log("\nFim do programa.")