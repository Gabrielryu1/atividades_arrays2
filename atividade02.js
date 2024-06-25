const ler = require('readline-sync');

let chamadas = [];
let chamadasAltaPrioridade = [];

let numChamadas = ler.questionInt("Quantas chamadas voce deseja registrar? ");
let i = 0;

while (i < numChamadas) {
    let tipoChamada = ler.question(`Digite o tipo da chamada ${i + 1}: `);
    let mensagemChamada = ler.question(`Digite a mensagem da chamada ${i + 1}: `);
    
    chamadas.push({ tipo: tipoChamada, mensagem: mensagemChamada });
    i++;
}

chamadas = chamadas.filter(chamada => {
    if (chamada.tipo.toLowerCase() === 'incendio') {
        chamadasAltaPrioridade.push(chamada);
        return false;
    }
    return true;
});

console.log("Chamadas de alta prioridade:");
console.log(chamadasAltaPrioridade);

console.log("Chamadas regulares:");
console.log(chamadas);
