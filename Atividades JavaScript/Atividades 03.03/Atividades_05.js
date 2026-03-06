/*Lista 02 - Laço Condicional Switch.
Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real). A seguir, mostre na tela o Nome do Colaborador, o Cargo e o novo Salário reajustado:*/

import leia from "readline-sync"

let nome, salario, novoSalario, cargo

nome = leia.question("Digite seu nome: ");
salario = leia.questionFloat("Digite seu salario: ");
cargo = leia.questionInt("Digite o codigo do cargo.\n1 = Gerente.\n2 = Vendedor.\n3 = Supervisor.\n4 = Motorista.\n5 = Estoquista.\n6 = Tecnico de TI.\n: ");

switch (cargo) {
    case 1: // Gerente 10%
        novoSalario = salario * 10/100;
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Salario: ${salario}.`);
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Novo salario: ${novoSalario + salario}.`);
        break;
    case 2: // Vendedor 7% 
        novoSalario = salario * 7/100;
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Salario: ${salario}.`);
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Novo salario: ${novoSalario + salario}.`);
        break;
    case 3: // Supervisor 9%
        novoSalario = salario * 9/100;
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Salario: ${salario}.`);
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Novo salario: ${novoSalario + salario}.`);
        break;
    case 4: // Motorista 6%
        novoSalario = salario * 6/100;
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Salario: ${salario}.`);
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Novo salario: ${novoSalario + salario}.`);
        break;
    case 5: // Estoquista 5%
        novoSalario = salario * 5/100;
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Salario: ${salario}.`);
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Novo salario: ${novoSalario + salario}.`);
        break;
    case 6: //Tecnico de TI 8%
        novoSalario = salario * 8/100;
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Salario: ${salario}.`);
        console.log(`Nome do colaborador: ${nome}.\nCargo: ${cargo}. Novo salario: ${novoSalario + salario}.`);
        break;
    default:
        console.log("Operacao invalida.");
        break;
}
console.log("Fim do programa");