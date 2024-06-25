const ler = require('readline-sync');

let participantes = [];

let continuar = true;
while (continuar) {
  let nome = ler.question('Digite o nome do participante (ou digite "sair" para parar): ');
  if (nome.toLowerCase() === 'sair') {
    continuar = false;
  } else {
    participantes.push(nome);
  }
}

while (true) {
  console.log("1. Registrar participante");
  console.log("2. Exibir lista de participantes ainda não registrados");
  console.log("3. Sair");
  
  let escolha = ler.question("Escolha uma opcao: ");

  if (escolha === '1') {
    let nome = ler.question("Digite o nome do participante a ser registrado: ");
    let i = participantes.indexOf(nome);

    if (i !== -1) {
      participantes.splice(i, 1);
      console.log(`${nome} foi registrado com sucesso!`);
    } else {
      console.log(`${nome} não está na lista de participantes.`);
    }
  } else if (escolha === '2') {
    console.log('Participantes ainda não registrados:');
    console.log(participantes);
  } else if (escolha === '3') {
    console.log('Saindo...');
    break;
  } else {
    console.log('Opcao invalida! Tente novamente.');
  }
}
