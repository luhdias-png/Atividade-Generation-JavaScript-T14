/*Atividade 02:
Escreva um programa para criar uma Collection Array do tipo number, inicializada com 10 valores inteiros. O programa deverá solicitar ao usuário, que ele digite via teclado 1 número inteiro e caso ele seja encontrado no Array, exiba na tela a posição deste número na Collection. Caso o número não seja encontrado, o programa deverá exibir na tela a mensagem: O número NN não foi encontrado!*/

import readlinesync from "readline-sync";

const lista: Array<number> = [2,5,1,3,4,9,7,8,10,6];
let numero, encontrado = false;

numero = readlinesync.questionInt("Digite o numero para saber em indice ela esta: ");
for(let i = 0; i < lista.length; i++){
    if(numero == lista[i]){
        console.log(`O numero ${numero} esta na posicao ${i}`);
        encontrado = true
        break;
    }
}
if (!encontrado){
    console.log("Numero nao foi encontrado! Continue procurando.");
}

console.log("Fim do programa.");

