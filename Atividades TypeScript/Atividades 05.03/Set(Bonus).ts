import readlinesync from "readline-sync";

const alunos =  new Set<string>();

let continuar: boolean = false, nome, confirmarDelete;

let opcao: number = 0;

do{
    opcao = readlinesync.questionInt("\n1 = Adicionar aluno.\n2 = Listar.\n3 = Remover aluno.\n4 = Deletar lista.\n:");
    
    switch (opcao) {
        case 1:
            nome = readlinesync.question("\nDigite o nome do aluno: \n").toLowerCase();
            if (alunos.has(nome)) {
                console.log(`\nO nome ${nome} ja esta adicionado.`);
                break
            } else {
                console.log(`${nome} Adicionado.`);
                alunos.add(nome)
                break;
            }
        case 2:
            console.table(alunos);
            break
        case 3:
            console.table(alunos);
            nome = readlinesync.question("\nDigite o nome do aluno para ser deletado: \n").toLowerCase();
            if (!alunos.has(nome)){
                console.log("Aluno nao encontrado")
                break
            }else{
                confirmarDelete = readlinesync.keyInYNStrict(`Deseja excluir o aluno: ${nome}?`)
                if(confirmarDelete == false){
                    console.log("Operacao cancelada!");
                    break
                }else{
                    alunos.delete(nome);
                    console.log("Aluno removido com sucesso.");
                }
            }
            break
        case 4:
            console.log("ATENCAO! O ITEM A SEGUIR IRA APAGAR TODA A LISTA:");
            confirmarDelete = readlinesync.keyInYNStrict("Deseja apagar toda a lista.");
            alunos.clear();
            console.log("Lista apagada com sucesso.");
        default:
            console.log("Opcao invalida");
            continue
    }

    continuar = readlinesync.keyInYNStrict("Deseja continuar?");
}while(continuar)

console.log("Programa encerrado.")