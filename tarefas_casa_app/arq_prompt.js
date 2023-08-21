npm install prompt-sync //comando instalação

const prompt = require("prompt-sync")();

let nome = prompt("Informe seu nome: ")


console.log(nome);

console.log("Aperte ENTER para fechar!");
prompt()//evita q o prompt feche sozinho qndo fizer o atalho
