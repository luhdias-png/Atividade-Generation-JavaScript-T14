/*Lista 02 - Laço Condicional Switch.
Desenvolva um algoritmo que simule as operações básicas de uma Conta Bancária. O programa deverá ler o tipo da operação a ser realizada com base na tabela abaixo (número inteiro entre 1 e 3) e o valor a ser depositado ou sacado (somente nas opções 2 e 3). Considere que um saque só pode ser realizado caso haja saldo suficiente. Ao final de cada operação, exiba o novo Saldo na tela. A variável saldo (número real), será inicializada com o valor de R$ 1000.00. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!*/

import leia from "readline-sync"

let saque,saldo,deposito, operação;

saldo = 1000.00

console.log("Banco Santo Andre!");
operação = leia.questionInt("Digite o que deseja realizar:\n1 = Ver saldo.\n2 = Sacar.\n3 = Depositar.\n:");

switch (operação) {
    case 1:
        console.log("Seu saldo é de: R$" + saldo);
        break;
    case 2:
        saque = leia.questionFloat("Quanto deseja sacar: R$ ");
        if (saldo < saque){
            console.log("Error! Voce nao possuir valor na conta.");
        }else{
            console.log(`Voce sacou R$ ${saque}. Seu saldo foi atualizado com R$ ${saldo - saque}`);
        }
        break;
    case 3:
        deposito = leia.questionFloat("Quantos deseja depositar: R$ ");
        console.log(`Seu saldo atualizado é de: R$ ${saldo + deposito}`);
        break;

    default:
        console.log("Operacao invalida.");
        break;
}
console.log("Fim do programa.");
