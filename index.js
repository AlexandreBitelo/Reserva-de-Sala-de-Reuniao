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




function visualizarReservas() {
  // Implementar visualização de reservas
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
  const opcao = prompt("Digite o número da opção desejada:");

  switch (opcao) {
    case "1":
      criarReserva ()
      console.log (reservas)
      break;
    case "2":
      // Chamar função de visualizar reservas
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

  // Chamar função de exibir menu novamente
}

exibirMenu();
