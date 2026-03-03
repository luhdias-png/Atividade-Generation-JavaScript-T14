/*Lista 02 - Laço Condicional Switch
Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!:*/

import leia from "readline-sync"

let num1;
let num2;
let operadores;

num1 = leia.questionInt("Digite o primeiro numero: ");
num2 = leia.questionInt("Digite o segundo numero: ");
operadores = leia.questionInt("Digite o operador:\n1 = SOMA.\n2 = SUBTRAI.\n3 = MULTIPLICA.\n4 = DIVIDI.\n");

switch (operadores) {
    case 1:
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2:
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 3:
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
        break;
    case 4:
        if (num2 !==0) {            
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        }else{
            console.log("Error! Numero dividido por 0");
        }
        break;

    default:
        console.log("Operacao inválida!");
        break;
}
console.log("fim do programa.");
