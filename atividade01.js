const ler = require('readline-sync');

let produtos = [];

let numProdutos = ler.questionInt("Quantos produtos voce deseja inserir? ");

for (let i = 0; i < numProdutos; i++) {
    let nomeProduto = ler.question(`Digite o nome do produto ${i + 1}: `);
    let quantProduto = ler.questionInt(`Digite a quantidade do produto ${i + 1}: `);
    
    produtos.push({ nome: nomeProduto, quantidade: quantProduto });
}

produtos = produtos.filter(produto => produto.quantidade > 0);

produtos.sort((a, b) => a.nome.localeCompare(b.nome));
console.log("Array final de produtos:");
console.log(produtos);
