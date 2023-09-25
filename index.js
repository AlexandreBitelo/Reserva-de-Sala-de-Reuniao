/*
* Trabalho final do curso de desvolvimento com JavaScript do Senac
*
* Alexandre Bitelo
*
*/

const reservas = [];

function criarReserva(novaReserva, num) {

    //Identificador do objeto
    reservaNumero = "reserva " + num


    //Adicionando objeto
    novaReserva.push(reservaNumero = {
        nomeDoSolicitante: prompt("Qual nome do Solicitante? "),
        data: prompt("Qual Data? "),
        horario: prompt("Qual Horário da reunião? "),
        salaDesejada: prompt ("Qual a Sala Desejada? "),
        finalidade: prompt("Qual finalidade da reunião? "),
    })



    //Retorna Vetor com Novo Objeto
    return novaReserva


}


function visualizarReserva (vetorDeReserva) {


    let cont = 0;

    //Estrutura de Repetição para Visualizar Vetor
    while (cont <= (vetorDeReserva.length - 1)) {

        //Declaração de Variáveis para Estilizar Visualização
        let inicio = ("--------------------LISTA DE RESERVA-----------------------")
        let fim = "-----------------------------------------------------------"
        let espaco = ""
        
        /*
        A Seguinte Estrutura Condicional Íra Verificar a Quantidade de elementos no Array para Adicinar Linhas na Tabela. Sua Sintax Funciona Assim:

        | propriedade ${Chamada da Propriedade do vetor} ${Chamada do fechamento da tabela, com tamanho dos caracteres da pergunta}\n${espaço para pular linha no código}

        \n -> Quebrar Linha
        */
        if (cont === 0 && vetorDeReserva.length !== 1) {
            //Com Cabeçalho
            console.log (`${inicio}\n${espaco
            }| Nome do Solicitante: ${vetorDeReserva[cont].nomeDoSolicitante} ${fimDaTabela(reservas[cont].nomeDoSolicitante, 26)}\n${espaco
            }| Data: ${vetorDeReserva[cont].data} ${fimDaTabela(reservas[cont].data, 11)}\n${espaco
            }| Horário: ${vetorDeReserva[cont].horario} ${fimDaTabela(reservas[cont].horario, 14)}\n${espaco
            }| Sala Desejada: ${vetorDeReserva[cont].salaDesejada} ${fimDaTabela(reservas[cont].salaDesejada, 20)}\n${espaco
            }| Finalidade da Reunião: ${vetorDeReserva[cont].finalidade} ${fimDaTabela(reservas[cont].finalidade, 28)}\n`)
            

        }
        //Sem Cabeçalho
        else if (cont !== (vetorDeReserva.length - 1) ){
            console.log (`${espaco
            }| Nome do Solicitante: ${vetorDeReserva[cont].nomeDoSolicitante} ${fimDaTabela(reservas[cont].nomeDoSolicitante, 26)}\n${espaco
            }| Data: ${vetorDeReserva[cont].data} ${fimDaTabela(reservas[cont].data, 11)}\n${espaco
            }| Horário: ${vetorDeReserva[cont].horario} ${fimDaTabela(reservas[cont].horario, 14)}\n${espaco
            }| Sala Desejada: ${vetorDeReserva[cont].salaDesejada} ${fimDaTabela(reservas[cont].salaDesejada, 20)}\n${espaco
            }| Finalidade da Reunião: ${vetorDeReserva[cont].finalidade} ${fimDaTabela(reservas[cont].finalidade, 28)}\n`)
            



        }

        //Se for apenas uma reserva
        if (vetorDeReserva.length === 1) {
            console.log (`${inicio}\n${espaco
            }| Nome do Solicitante: ${vetorDeReserva[cont].nomeDoSolicitante} ${fimDaTabela(reservas[cont].nomeDoSolicitante, 26)}\n${espaco
            }| Data: ${vetorDeReserva[cont].data} ${fimDaTabela(reservas[cont].data, 11)}\n${espaco
            }| Horário: ${vetorDeReserva[cont].horario} ${fimDaTabela(reservas[cont].horario, 14)}\n${espaco
            }| Sala Desejada: ${vetorDeReserva[cont].salaDesejada} ${fimDaTabela(reservas[cont].salaDesejada, 20)}\n${espaco
            }| Finalidade da Reunião: ${vetorDeReserva[cont].finalidade} ${fimDaTabela(reservas[cont].finalidade, 28)}\n${espaco
            }${fim}`)


        
        }else if (cont === (vetorDeReserva.length - 1 )) {
            //Com Fechamento da Tabela
            console.log (`${espaco
            }| Nome do Solicitante: ${vetorDeReserva[cont].nomeDoSolicitante} ${fimDaTabela(reservas[cont].nomeDoSolicitante, 26)}\n${espaco
            }| Data: ${vetorDeReserva[cont].data} ${fimDaTabela(reservas[cont].data, 11)}\n${espaco
            }| Horário: ${vetorDeReserva[cont].horario} ${fimDaTabela(reservas[cont].horario, 14)}\n${espaco
            }| Sala Desejada: ${vetorDeReserva[cont].salaDesejada} ${fimDaTabela(reservas[cont].salaDesejada, 20)}\n${espaco
            }| Finalidade da Reunião: ${vetorDeReserva[cont].finalidade} ${fimDaTabela(reservas[cont].finalidade, 28)}\n${espaco
            }${fim}`)
            





        }

        cont ++;
    } 
    
}



function fimDaTabela (propriedade, tamanhoDaPergunta) {
    tamanhoDaLinha = 60;
    let espacoEmBranco = ""

   
    tamanhoDaLinha = (tamanhoDaLinha - tamanhoDaPergunta) - propriedade.length
    while (tamanhoDaLinha !== 0) {

        espacoEmBranco = espacoEmBranco + " " 
            
            
        tamanhoDaLinha --


    }
    //Retorna o Fechamento da Tabela
    return espacoEmBranco + "|"
}


function editarReserva (vetor) {

    let bloco = Number( prompt ("Qual Reserva Você Quer Editar? [1.. " + vetor.length + "]"));
    bloco = bloco - 1
    

    console.log (`1º Item | Nome do Solicitante: ${vetor[bloco].nomeDoSolicitante}`);
    console.log (`2º Item | Data: ${vetor[bloco].data}`);
    console.log (`3º Item | Horário: ${vetor[bloco].horario}`);
    console.log (`4º Item | Sala Desejada: ${vetor[bloco].salaDesejada}`);
    console.log (`5º Item | Finalidade da Reunião: ${vetor[bloco].finalidade}`);
    console.log ("6º Voltar ao Menu");

    
    let item = Number(prompt ("Qual Item Você quer Editar? "))
    switch (item) {
        case 1:
            vetor[bloco].nomeDoSolicitante = prompt ("Qual novo valor? ")
            break;
        
        case 2: 
            vetor[bloco].data = prompt ("Qual novo valor? ")
            break;    
        
        case 3: 
            vetor[bloco].horario = prompt ("Qual novo valor? ")
            break;

        case 4:
            vetor[bloco].salaDesejada = prompt ("Qual novo valor? ")
            break

        case 5: 
            vetor[bloco].finalidade = prompt ("Qual novo valor? ")
            break;

        case 6:
            console.log ("Voltando...");
            break;
    }

    //Retorna Vetor com Item Editado
    return vetor[bloco]

}



function deletarReserva (vetor) {
    bloco = Number (prompt ("Qual Reserva Você Quer Deletar? [1.. " + vetor.length + "]"))
    bloco = bloco - 1

    //Método para deletar elementos do array
    vetor.splice (bloco, 1)


    //Retorna Vetor com o Item Deletado
    return vetor
}



function menu() {
    alert("Bem Vindo ao Sistema de Reservas de Salas de Reunião")

    //Menu para escolha do usuário
    let opcao;

    //Escolha do usuário com repetição
    while (opcao !== 5) {
        opcao = Number(prompt("Digite a opção desejada: \n 1.  Criar Reserva \n 2.  Visualizar Reserva \n 3.  Editar Reserva \n 4.  Deletar Reserva \n 5.  Sair"))

        
    
        switch (opcao) {
            case 1:
                //Declaração do Identificador do Objeto
                let numeroDaReserva = -1;
                numeroDaReserva ++;

                //Chamada da Função para Criar Reserva
                criarReserva(reservas, numeroDaReserva);
                break;

            case 2:

                //Chamada da Função para Visualizar Objeto
                visualizarReserva (reservas);
                break;

            case 3:
                //Chamada da Função para Editar Reserva
                editarReserva (reservas)
                break;

            case 4:
                //Chamada da Função para Deletar Reserva
                deletarReserva (reservas)
                break

            case 5:
                //Sai do Programa
                console.log ("Saindo...");
                break;
        }





    }






}

//Chamada da função menu 
console.log(menu())
