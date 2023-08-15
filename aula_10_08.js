const readline = require('readline-sync');

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

//ATv 2 

// function calculadora(num1, num2, operacao) {
 
//     if (num1 === undefined) {
//         num1 = parseFloat(readline.question("Informe o primeiro número: "));
//     }

//     if (num2 === undefined) {
//         num2 = parseFloat(readline.question("Informe o segundo número: "));
//     }

//     if (operacao === undefined) {
//         console.log("Escolha a operação:");
//         console.log("1 - Soma");
//         console.log("2 - Subtração");
//         console.log("3 - Multiplicação");
//         console.log("4 - Divisão");
//         operacao = parseInt(readline.question("Opção: "));
//     }

//     switch (operacao) {
//         case 1:
//             console.log(`A soma de ${num1} + ${num2} é igual a ${num1 + num2}`);
//             break;
//         case 2:
//             console.log(`A subtração de ${num1} - ${num2} é igual a ${num1 - num2}`);
//             break;
//         case 3:
//             console.log(`A multiplicação de ${num1} x ${num2} é igual a ${num1 * num2}`);
//             break;
//         case 4:
//             if (num2 === 0) {
//                 console.log("Erro: Não é possível dividir por zero.");
//             } else {
//                 console.log(`A divisão de ${num1} / ${num2} é igual a ${num1 / num2}`);
//             }
//             break;
//         default:
//             console.log("Opção inválida.");
//     }
// }

// calculadora();


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

// function mensagemPersonalizada(texto, estilo = "normal") {
//     let mensagemEstilizada = texto;

//     switch (estilo.toLowerCase()) {
//         case "normal":
//             // Nada precisa ser alterado para o estilo normal
//             break;
//         case "negrito":
//             mensagemEstilizada = mensagemEstilizada.bold();
//             break;
//         case "itálico":
//             mensagemEstilizada = mensagemEstilizada.italics();
//             break;
//         case "tag":
//             mensagemEstilizada = `<${mensagemEstilizada}>`;
//             break;
//         case "risco":
//             mensagemEstilizada = mensagemEstilizada.strike();
//             break;
//         default:
//             console.log("Estilo inválido.");
//             return;
//     }

//     console.log(mensagemEstilizada);
// }

// const texto = readline.question("Digite uma palavra: ");
// const estilo = readline.question("Escolha um estilo: normal, negrito, itálico, tag ou risco: ");

// mensagemPersonalizada(texto, estilo);


//Exemplo =>

// function criarMensagemDeSaudacao(nome) {
//     const mensagem = `Olá , ${nome}`;
//     return mensagem;
// } 
// criarMensagemDeSaudacao();

//Atv 1 - com  return

// function somar(num1, num2) {
//     return num1 + num2;
// }

// const numero1 = parseInt(readline.question("Informe o primeiro número: "));
// const numero2 = parseInt(readline.question("Informe o segundo número: "));

// const resultado = somar(numero1, numero2);
// console.log(`A soma de ${numero1} + ${numero2} é igual a ${resultado}`);


//Atv 2 ?

// function ehPar(num1) {
//     return num1 % 2 === 0;
// }

// const numero = parseInt(readline.question("Informe um número: "));
// const resultado = ehPar(numero);

// console.log(resultado);

//Atv 3 

// function maiorNumero(num1, num2, num3) {
//     return Math.max(num1, num2, num3);
// }

// const numero1 = parseInt(readline.question("Informe o primeiro número: "));
// const numero2 = parseInt(readline.question("Informe o segundo número: "));
// const numero3 = parseInt(readline.question("Informe o terceiro número: "));

// const resultado = maiorNumero(numero1, numero2, numero3);

// console.log(`O maior número é: ${resultado}`);

//Atv 4 ?

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

const pessoa = readline.question("Informe seu nome: ");
const peso = parseFloat(readline.question("Informe seu peso em kg: "));
const altura = parseFloat(readline.question("Informe sua altura em metros: "));

const imcCalculado = calcularIMC(peso, altura);

console.log(`${pessoa}, seu IMC é ${imcCalculado.toFixed(2)}`);
