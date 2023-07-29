const readline = require("readline-sync");

function calculadora(num1, num2, operacao) {
  let resultado = 0;

  switch (operacao) {
    case 1:
      resultado = num1 + num2;
      break;
    case 2:
      resultado = num1 - num2;
      break;
    case 3:
      resultado = num1 * num2;
      break;
    case 4:
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        console.log("Erro: Digite um número que possa ser dividido por zero!");
      }
      break;
    default:
      console.log("***Operação inválida***. Insira uma das opção válida de 1 a 4.");
      break;
  }

  return resultado;
}

function obterNumero(mensagem) {
  return parseFloat(readline.question(mensagem));
}

const numero1 = obterNumero("Digite o primeiro número: ");
const numero2 = obterNumero("Digite o segundo número: ");
const operacaoEscolhida = parseInt(readline.question("Escolha a operação (1-para soma, 2-para subtração, 3-para multiplicação, 4-para divisão): "));

const resultadoCalculadora = calculadora(numero1, numero2, operacaoEscolhida);
console.log("Resultado da operação:", resultadoCalculadora);
