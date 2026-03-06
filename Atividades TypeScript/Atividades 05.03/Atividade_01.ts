/*Lista 01 – Collection Array (Resolva 1 Exercício)

Escreva um programa para criar uma Collection Array de Objetos do tipo string. O programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.*/

import readlinesync from "readline-sync";

const lista = Array(5);
let cores;

for(let i = 0; i < lista.length ; i++){
    cores = readlinesync.question(`[${i+1}/5] Digite o nome de 5 cores: `);
    lista[i] = cores
}
let coresOrdenado = lista.sort()
console.log("Listas de cores:")
console.table(lista);
console.log("Lista em ordem alfabetica:");
console.table(coresOrdenado);