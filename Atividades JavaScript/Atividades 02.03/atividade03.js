/* Atividade 03:
Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido. Veja o exemplo abaixo: */

const leia = require("readline-sync");

let salario;
let addnoturno;
let horasextras;
let descontos;


salario = leia.questionInt("Digite o Salario: R$");
addnoturno = leia.questionInt("Qual o valor do adicional noturno: R$");
horasextras = leia.questionInt("Digite o valor da hora extra: R$");
descontos = leia.questionInt("Digite o valor do desconto se houver(Se nao tiver digite 0):");

const TOTAL = salario + addnoturno + (horasextras * 5) - descontos;

console.log(`Seu salario é de: R$${salario}.\nSeu adicional noturno é de: R$${addnoturno}.\nSua hora extra é de:R$${horasextras}.\nSeu desconto é de: R$${descontos}.\nTotal é de R$${TOTAL}`)