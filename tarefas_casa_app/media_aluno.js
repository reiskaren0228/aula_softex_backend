const readline = require('readline-sync');

const nota1 = parseFloat(readline.question("Digite a primeira nota do aluno: "));
const nota2 = parseFloat(readline.question("Digite a segunda nota do aluno: "));
const nota3 = parseFloat(readline.question("Digite a terceira nota do aluno: "));

const media = (nota1 + nota2 + nota3) / 3;

const mensagemAprovacao = media >= 7
  ? "*** Aluno Aprovado***"
  : "*** Aluno Reprovado***";

console.log(mensagemAprovacao);
console.log(`A média do Aluno foi ${media.toFixed(1)}`);

console.log("------------- // ----------------");

function notaMinima(nota_1, nota_2) {
    const mediaParaAprovacao = 7;
    const somaNotas = nota_1 + nota_2;
    const notaMinima = (mediaParaAprovacao * 3 - somaNotas) / 3;
    return notaMinima;
}

const nota_1 = parseFloat(readline.question("Informe a primeira nota: "));
const nota_2 = parseFloat(readline.question("Informe a segunda nota: "));

const notaMinimaParaAprovacao = notaMinima(nota_1, nota_2);

console.log(`Para atingir a média 7, o Aluno precisará tirar pelo menos ${notaMinimaParaAprovacao.toFixed(2)} na terceira avaliação.`);
