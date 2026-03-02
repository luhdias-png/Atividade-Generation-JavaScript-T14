/* Atividade 02:
Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela a média final do participante. */

const leia = require("readline-sync");

let soma1;
let soma2;
let soma3;
let soma4;

console.log("===================Calculador de Notas===================");
soma1 = leia.questionFloat("Digite a nota do Aluno: ");
soma2 = leia.questionFloat("Digite a nota do Aluno: ");
soma3 = leia.questionFloat("Digite a nota do Aluno: ");
soma4 = leia.questionFloat("Digite a nota do Aluno: ");

const media = (soma1 + soma2 + soma3 + soma4) / 4;

console.log("a media do aluno é: "+ media);