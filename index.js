/****************************
*ESTRUTURA BASE PARA UM MENU*
*****************************/
const reservas = [];

function criarReserva() {
  reservas.push(sala = {
    nomeDoSolicitante: prompt("Qual nome do solicitante? "),
    data: prompt("Qual a data? "),
    horario: prompt ("Qual horário? "),
    salaDesejada: prompt ("Qual a sala desjada? "),
    finalidade: prompt ("Qual a finalidade da reunião? "),
  })


}




function visualizarReservas(res) {
  // Implementar visualização de reservas
  let contador = (res.length - 1)
  
  console.log (contador)
  console.log ("-----------Lista de Reservas--------------------" )
  while (contador !== -1){
    //console.log (reservas [contador].nomeDoSolicitante)
    console.log ("------------------------------------------------")
    console.log (`| Nome do Solicitante: ${reservas[contador].nomeDoSolicitante} \n| Data: ${reservas[contador].data} \n| Horário: ${reservas[contador].horario}\n| Sala Desejada: ${reservas[contador].salaDesejada} \n| Finalidade: ${reservas[contador].finalidade}`)



    contador --
    
  }

  

}

function editarReserva() {
  // Implementar edição de reserva
}

function deletarReserva() {
  // Implementar exclusão de reserva
}

function exibirMenu() {
  console.log("Menu:");
  console.log("1. Criar Reserva");
  console.log("2. Visualizar Reservas");
  console.log("3. Editar Reserva");
  console.log("4. Deletar Reserva");
  console.log("5. Sair");
  let opcao = 0;
  
  while (opcao !== 5) {
    opcao = prompt("Digite o número da opção desejada:");

    switch (opcao) {
      case "1":
        criarReserva ()
        console.log (reservas)
        break;
      case "2":
        // Chamar função de visualizar reservas
        console.log (visualizarReservas (reservas));
        break;
      case "3":
        // Chamar função de editar reserva
        break;
      case "4":
        // Chamar função de deletar reserva
        break;
      case "5":
        console.log("Saindo do programa. Até logo!");
        return;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }

  // Chamar função de exibir menu novamente

}

exibirMenu();
