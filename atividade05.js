const ler = require('readline-sync');

let funcionarios = [];

while (true) {
  console.log('1. adicionar funcionario');
  console.log('2. exibir todos os funcionarios');
  console.log('3. buscar funcionario por nome');
  console.log('4. sair');
  
  let escolha = ler.question('escolha uma opcao: ');

  if (escolha === '1') {

    let nome = ler.question('digite o nome do funcionario: ');
    let departamento = ler.question('digite o departamento do funcionario: ');
    let cargo = ler.question('digite o cargo do funcionario: ');
    let anosdeservico = ler.question('digite os anos de serviço do funcionario: ');


    funcionarios.push({ nome: nome, departamento: departamento, cargo: cargo, anosdeservico: parseInt(anosdeservico) });
    console.log('funcionario adicionado com sucesso!');

  } else if (escolha === '2') {
   
    console.log('lista de funcionarios:');
    if (funcionarios.length === 0) {
      console.log('nenhum funcionario registrado.');
    } else {
      for (let i = 0; i < funcionarios.length; i++) {
        console.log(`${i + 1}. nome: ${funcionarios[i].nome}, departamento: ${funcionarios[i].departamento}, cargo: ${funcionarios[i].cargo}, anos de servico: ${funcionarios[i].anosdeservico}`);
      }
    }

  } else if (escolha === '3') {
  
    let nomebusca = ler.question('digite o nome do funcionario a ser buscado: ');
    let funcionarioencontrado = funcionarios.find(funcionario => funcionario.nome.toLowerCase() === nomebusca.toLowerCase());

    if (funcionarioencontrado) {
      console.log(`nome: ${funcionarioencontrado.nome}, departamento: ${funcionarioencontrado.departamento}, cargo: ${funcionarioencontrado.cargo}, anos de servico: ${funcionarioencontrado.anosdeservico}`);
    } else {
      console.log('funcionario nao encontrado.');
    }

  } else if (escolha === '4') {
    
    console.log('saindo...');
    break;

  } else {
    console.log('ta errado.');
  }
}
