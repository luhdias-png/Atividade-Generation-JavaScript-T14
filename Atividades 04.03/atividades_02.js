/*Lista 02 — Laço de Repetição WHILE (Resolva 1 exercício):

Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve ser finalizada ao digitar uma idade negativa:*/

import leia from "readline-sync"

let idade, jovem = 0, idoso = 0;

while (true) {
    idade = leia.questionInt("Digite uma idade ou -1 para sair: ");
    if (idade < 0) {
        break        
    }
    if (idade > 0 && idade < 21){
        jovem ++
    }else if(idade > 50) {
        idoso ++        
    }
}

console.log(`Total de pessoas menores de 21 anos: ${jovem}`)
console.log(`Total de pessoas maiores de 50 anos: ${idoso}`)