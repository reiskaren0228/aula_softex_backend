const readline = require("readline-sync");

// function exibirSaudacao(nomePessoa, idadePessoa, diaSemana, mes, ano) {

//     nomePessoa = readline.question("Digite o seu nome: ");
//     idadePessoa = parseInt(readline.question("Digite a sua idade: "));
//     diaSemana = parseInt(readline.question("Digite do nascimento: "));
//     mes = readline.question("Digite o mês do seu aniversário: ");
//     ano = parseInt(readline.question("Digite o ano de seu nascimento: "))

//     console.log(`Olá ${nomePessoa}, Seja Bem vindo(a)!!! `)
//     console.log(`Sua data de Aniversário é ${diaSemana} de ${mes} de ${ano} e você tem ${idadePessoa} anos!`)

// }
// exibirSaudacao();

//Atv 1
function saudacao(nome){
       nome = readline.question("Qual o seu nome? ")
       console.log(`${nome}, Olá, Mundo!`)
}
saudacao();

//Atv 2
// function numeroDobro(num1,num2) {
//     num1 = parseInt(readline.question("Digite um número: "));
     
//     multiplicao = num1 * 2;

//     console.log(`O dobro desse número é ${multiplicao} `)
// }
// numeroDobro();

//Atv 3
// function mostrarNumeros(inicio, fim) {
//     inicio = parseInt(readline.question("Digite um número do ínicio da contagem: "));
//     fim = parseInt(readline.question("Digite o número do fim da contagem: "));
//     mensagemInicio = "Iniciando a contagem ... ";
//     mensagemFim = "Fim da contagem ... ";

//     console.log(mensagemInicio)

//     for(inicio=0; inicio <= fim; inicio++ )
//     {
//         console.log(`${inicio}`)
//     }

//      console.log(mensagemFim)
// }

// mostrarNumeros();
//Atv 4

// function verificarPar(num) {
//     num = parseInt(readline.question("Digite um número: "));

//     if(num%2===0) {

//         console.log(`O numero ${num} é par`);

//     }else {

//         console.log(`O numero ${num} é impar`);

//     }
// }
// verificarPar();
//Atv 5

// function imprimirLista(array) {

//     array = [];

//     for(let i=0; i < 5; i++){
//         array.push(readline.question("Digite um número:  "));
//     }
//     console.log(array)

// }
  
// imprimirLista();


