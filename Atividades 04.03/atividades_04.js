/*Lista 04 — Vetores (Resolva 1 exercício):

Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.*/

import leia from "readline-sync"

const lista = [2,5,1,3,4,9,7,8,10,6];

let numero, encontrado = false, repeticao = true;

while (repeticao) {
    numero = leia.questionInt("Digite um numero para ver se esta no vetor: ");
        for (let i = 0; i < lista.length; i++) {
            if (numero === lista[i]) {
                console.log("o numero: "+ numero,"esta na posicao:"+i);
                encontrado = true;
            }
        }
    if(!encontrado)
        console.log("O numero nao foi encontrado no vetor.");
    repeticao = leia.keyInYN("Deseja continuar?")
}
console.log("fim do programa");