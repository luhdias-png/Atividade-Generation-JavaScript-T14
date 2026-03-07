import { Queue } from "./Queue";
import leia from "readline-sync";

const fila = new Queue<string>();

let opcao: number;

do{

console.log("1 = Adicionar Cliente na fila.\n2 = Listar clientes na fila.\n3 = Chamar e retirar cliente da fila\n0 = Sair");

opcao = leia.questionInt("Digite uma opcao: ");

switch(opcao){
    case 1:
    const nomeCliente = leia.question("Digite o nome do cliente: ");
    fila.enqueue(nomeCliente);
    console.log("\nCliente foi adicionado!");
    break;

    case 2:
    if (fila.isEmpty()){
        console.log("\nError! Não há clientes na fila!");
    }
    else{
        console.log("\nFila de Clientes: ");
        fila.printQueue();
    }
    break;

    case 3:
    if (fila.isEmpty()){
        console.log("Error! Clientes na fila!");
    }
    else{
        const clienteChamado = fila.dequeue();
        console.log(`\nO cliente ${clienteChamado} foi chamado e  da fila!`);
    }
    break;

    case 0:
    console.log("Programa Finalizado!");
    break;

    default:
    console.log("Erro! Opcao Invalida!");
}

} while (opcao !== 0);