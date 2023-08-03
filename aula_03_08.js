const readline = require("readline-sync");

//Atv 1

// let k = readline.question("Digite o número inicial da contagem: ");
// let a = readline.question("Digite o número final da contagem: ");


// while(k <= a) {
//     console.log(k)
//     k++
// }

//Atv 2

// let k = parseInt(readline.question("Digite o número inicial da soma: "));
// let a = parseInt(readline.question("Digite o número final da soma: "));
// soma=0;

// while(k <= a) {
//     k = k + 1;
//     soma = soma + k;
//     console.log(soma)
// }

//Atv 3

// let k = parseInt(readline.question("Digite o número inicial dos números: "));
// let a = parseInt(readline.question("Digite o número final dos números: "));

// while (k <= a) {
//     k = k + 1;
//     if (k % 2 == 0) {
//         console.log(k)
//     }

// }

//Atv 4

// let k = parseInt(readline.question("Digite o número que você deseja fazer a multiplicação: "));

// while(k <= 1000) {
//     k = k * 2;

//     console.log(k)

// }

//Atv 5 ?

// let k = parseInt(readline.question("Digite o número: "));
// let divisor = 2;

// while(k % divisor != 0) {
//     divisor++;

//     if(k == divisor) {
//         console.log("O Número digitado é Primo!");
//     } else {
//         console.log("O Número digitado NÃO primo!");
//     }

// }

//Atv 6 ?

// let k = parseInt(readline.question("Digite a sua senha: "));
// let senha = parseInt(readline.question("Digite novamente a sua senha: "));

// let conf= 0;

// while (k != senha) {
  
//     if (k != senha) {
//         console.log("Senha inválida! Digite novamente")
//         break;
//     } else {
//         console.log("Senha válida")
//         break;
//     }
// }

//Atv 7

let k = parseInt(readline.question("Digite o número que você quer saber os multiplos: "));;
let a = parseInt(readline.question("Digite até que número quer o multiplo: "));

while(k == 0) {
    div = a % k;
    multiplos = div;
    
    console.log(multiplos)
}