/* Atividade 01:
ABONO DE SALAIO: */
const leia = require("readline-sync");

let salario;
let abono;


salario = leia.questionInt("Digite seu salario atual: R$");
abono = leia.questionInt("Agora digite seu abono: R$");

const SAIDA = salario + abono;
console.log(`Seu salario de: R$${salario} somado com seu abono de: R$${abono}.\nTotal de salario: R$${SAIDA}.`);

