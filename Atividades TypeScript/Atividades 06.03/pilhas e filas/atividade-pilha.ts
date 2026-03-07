/*
Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
*/

import { Stack } from "./Stack";

const pilha = new Stack<string>();
import leia from "readline-sync"
let opcao: number;

do{
    console.log("1 = Adicionar um novo livro.\n2 = Listar todos os livros\n3 = Retirar um livro\n0 = Sair");

    opcao = leia.questionInt("\nDigite uma opcao: ");

    switch(opcao){

        case 1:
            const nomeLivro = leia.question("\nDigite o nome do Livro: ").toLowerCase();
            if(nomeLivro == "dungeons and dragons"){//Easte egg do dev que ama rpg. :)
                console.log("Voce tem um OTIMO GOSTO!");
            }
            pilha.push(nomeLivro);
            console.log("\nO Livro adicionado com sucesso!\n" + nomeLivro);
            break;

        case 2:
            if (pilha.isEmpty()){
            console.log("\nErro 404!");
            }
            else{
            console.log("\nLivros na pilha:");
            pilha.printStack();
            leia.question("Digite algo para sair.")
            }
            break;

        case 3:
            if (pilha.isEmpty()){
            console.log("\nErro 404!");
            }
            else{
            const livroRetirado = pilha.pop();
            console.log(`\nO Livro ${livroRetirado} foi removiso com sucesso!`);
            }
            break;

        case 0:
            console.log("Programa Finalizado!");
            break;

        default:
            console.log("Erro.\nOpcao Invalida!");
            
    }

} while (opcao !== 0);