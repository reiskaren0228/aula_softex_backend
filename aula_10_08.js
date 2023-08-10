const readline = require("readline-sync");
//
// function exibirSaudacao(nome, saudacao='Boa tarde, Seja Bem Vinda(o)!!') {
//     // nome = "Karen"
//     console.log(`${saudacao}, ${nome}`);
// }
// exibirSaudacao("karen");

// function exibirSaudacao(nome, saudacao='Boa tarde, Seja Bem Vinda(o)!!') {
//     // nome = "Karen"
//     console.log(`${saudacao}, ${nome}`);
// }
// exibirSaudacao();

// //Atv 1

// function saudacao(exibirSaudacao = "Olá", nome = "Karen")
// {
//     console.log(`${exibirSaudacao}, ${nome}`)
// }
// saudacao();

//ATv 2 ?

// function calculadora(num1, num2, operacao) {
//     num1 = parseInt(readline.question("Informe um número: "))
//     num2 = parseInt(readline.question("Informe outro número: "))
//     opcao = parseInt(readline.question("Escolha a opção da operação 1-Soma / 2 - Subtração / 3 - Multiplicação / 4 - Divisão : "));
//     operacao = Number(num1 + num2);

//     switch (opcao) {

//         case 1:
//             console.log(`A soma de ${num1} + ${num2} é igual ${operacao}`);
//             break;

//         case 2:
//             operacaoSubtracao = Number(num1 - num2);
//             console.log(`A subtração de ${num1} - ${num2} é igual ${operacaoSubtracao}`);
//             break;

//         case 3:
//             operacaoMultiplicação = Number(num1 * num2);
//             console.log(`A multiplicação de ${num1} x ${num2} é ${operacaoMultiplicação}`)
//             break;

//         case 4:
//             operacaoDivisao = Number(num1 / num2);
//             console.log(`A divisão de ${num1} / ${num2} é ${operacaoDivisao}`)
//             break;

//     }

// }calculadora();

//Atv 3

// function contagemRegressiva(inicioMsg = "Iniciando a contagem...", inicio, fim, fimMsg = "Fim da contagem !") {

//     inicio = parseInt(readline.question("Digite um número do ínicio da contagem: "));
//     fim = parseInt(readline.question("Digite o número do fim da contagem: "));
//     console.log(`${inicioMsg}`);
//     for (let i = inicio; i <= fim; i++) {
//         console.log(`${i}`);
//     }
//     console.log(`${fimMsg}`);
// }
// contagemRegressiva();

//Atv 4

// function apresentacao(nome = "Karen", idade ="35", profissao="Desenvolvedora Back-End") {
//     console.log(`Olá me chamo ${nome}, tenho ${idade} anos e sou ${profissao}`)
// }
// // apresentacao("kelly", 38, "enfermeira");
// apresentacao();

//Atv 5

// function mensagemPersonalizada(palavra = "Cachorro", estilo) {

//     palavra = readline.question("Digite uma palavra: ");
//     estilo = readline.question("Escolha qual estilo você deseja personalizar sua palavra: 1 - Normal / 2 - Negrito / 3 - Itálico / 4 - Add na tag ou 5 - Risco: ")

//     switch (estilo) {
//         case 1:
//             console.log(`A palavra digitada no estilo Normal => ${palavra}`)
//             break;

//         case 2:
//             console.log(`A palavra digitada no estilo Negrito => ${palavra.bold()}`)
//             break;

//         case 3:
//             console.log(`A palavra digitada no estilo Itálico => ${palavra.italics()}`)
//             break;

//         case 4:
//             console.log(`A palavra digitada dentro de uma tag => ${palavra.blink()}`)
//             break;

//         case 5:
//             console.log(`A palavra digitada dentro de uma tag => ${palavra.strike()}`)
//             break;
//     }
// }
// mensagemPersonalizada();

//Exemplo =>

// function criarMensagemDeSaudacao(nome) {
//     const mensagem = `Olá , ${nome}`;
//     return mensagem;
// } 
// criarMensagemDeSaudacao();

//Atv 1 - com  return

// let somar = function numeros(num1, num2) {
//     num1 = parseInt(readline.question("Informe um número: "))
//     num2 = parseInt(readline.question("Informe outro número: "))
//     return num1 + num2;
// };

// console.log(somar());

//Atv 2 ?

// let infoPar = function ehPar(num1) {
//     num1 = parseInt(readline.question("Informe um número: "))

//     if (num1 % 2 == 0) {
//         console.log(Boolean == true);
//     } else {
//         console.log(Boolean == false);
//     }

// }
// console.log(infoPar())


//Atv 3 

// let numeros = function maiorNumero(num1, num2, num3) {
//     num1 = parseInt(readline.question("Informe um número: "));
//     num2 = parseInt(readline.question("Informe outro número: "));
//     num3 = parseInt(readline.question("Informe mais um número: "));

//     return numeros = Math.max(num1, num2, num3);
// }
// console.log(numeros());

//Atv 4 ?

let imc = function calcularIMC (peso, altura, pessoa) {

    pessoa = readline.question("Informe seu nome: ");
    peso = parseInt(readline.question("Informe seu peso: "));
    altura = parseFloat(readline.question("Informe sua altura: "));
    peso = (peso/(altura *2));
   
    return imc;
}

console.log(imc(`${pessoa} seu IMc é ${peso}`));