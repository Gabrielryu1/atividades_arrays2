
const ler = require('readline-sync');


let livros = [];


for (let i = 0; i < 10; i++) {  
  let titulo = ler.question('Digite o título do livro: ');
  let categoria = ler.question('Digite a categoria do livro: ');
  livros.push({ titulo: titulo, categoria: categoria });
}


let quantidade = ler.question('Quantos livros você quer analisar? ');
quantidade = parseInt(quantidade);
let livrosparaanalisar = livros.slice(0, quantidade);

let contacategorias = {};

for (let livro of livrosparaanalisar) {
  if (contacategorias[livro.categoria]) {
    contacategorias[livro.categoria]++;
  } else {
    contacategorias[livro.categoria] = 1;
  }
}


console.log('Contagem de livros por categoria:');
for (let categoria in contacategorias) {
  console.log(`${categoria}: ${contacategorias[categoria]}`);
}
