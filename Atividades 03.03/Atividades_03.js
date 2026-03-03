/*Para doar sangue é necessário ter entre 18 e 69 anos. Pessoas com idade entre 60 e 69 anos, só podem doar sangue se não for a sua primeira doação. Escreva um Algoritmo que leia via teclado o nome do doador (string), a idade (número inteiro) do doador e se já fez outras doações de sangue (boolean). Conforme as Regras para a doação de sangue citadas acima, mostre na tela se o doador está Apto ou Não Apto para doar sangue.*/

import leia from "readline-sync"

let nome, idade, primeiraDoacao;

console.log("Programa de verificacao para doadores de sangue.");

nome = leia.question("Qual o seu nome?");
idade = leia.questionInt("Qual a sua idade?");
primeiraDoacao = leia.keyInYN("Primeira doacao?");

// ============Logica de decisao 60 a 69 anos ja doou sangue ===============
if (idade > 59 && idade < 70 && primeiraDoacao == true) {
    console.log(`\nNome do usuario: ${nome}.\nIdade do usuario ${idade}.\nÉ a primeira vez doando: ${primeiraDoacao}.\nNão esta apto para o programa!`);
// ============Logica de decisao normal==================== ================
} else if (idade > 17 && idade < 70){
    console.log(`\nNome do usuario: ${nome}.\nIdade do usuario ${idade}.\nÉ a primeira vez doando: ${primeiraDoacao}.\nEsta apto para o programa!`);    
}else{
    console.log(`\nNome do usuario: ${nome}.\nIdade do usuario ${idade}.\nÉ a primeira vez doando: ${primeiraDoacao}.\nNão esta apto para o programa!`);
}