const readline = require("readline-sync");

// //Atv 1

// // let k = readline.question("Digite o número inicial da contagem: ");
// // let a = readline.question("Digite o número final da contagem: ");


// // while(k <= a) {
// //     console.log(k)
// //     k++
// // }

// //Atv 2

// // let k = parseInt(readline.question("Digite o número inicial da soma: "));
// // let a = parseInt(readline.question("Digite o número final da soma: "));
// // soma=0;

// // while(k <= a) {
// //     k = k + 1;
// //     soma = soma + k;
// //     console.log(soma)
// // }

// //Atv 3

// // let k = parseInt(readline.question("Digite o número inicial dos números: "));
// // let a = parseInt(readline.question("Digite o número final dos números: "));

// // while (k <= a) {
// //     k = k + 1;
// //     if (k % 2 == 0) {
// //         console.log(k)
// //     }

// // }

// //Atv 4

// // let k = parseInt(readline.question("Digite o número que você deseja fazer a multiplicação: "));

// function k(number) {
//     let result = number;

//     while (result <= 1000) {
//         result *= 2;
//     }

//     return result;
// }

// const startingNumber = 5; 
// const finalResult = k(startingNumber);

// console.log(`O resultado final é: ${finalResult}`);


// //Atv 5 ?

let k = parseInt(readline.question("Digite o número: "));
let divisor = 2;
let isPrime = true;

while (divisor < k) {
    if (k % divisor === 0) {
        isPrime = false;
        break;
    }
    divisor++;
}

if (isPrime && k > 1) {
    console.log("O Número digitado é Primo!");
} else {
    console.log("O Número digitado NÃO é primo!");
}


// //Atv 6 

// const readline = require("readline");
// const read = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const senhaCorreta = "123"; 

// function verificarSenha() {
//   read.question("Digite a sua senha: ", function(senha) {
//     if (senha === senhaCorreta) {
//       console.log("Senha válida");
//       read.close();
//     } else {
//       console.log("Senha inválida! Digite novamente.");
//       verificarSenha();
//     }
//   });
// }

// verificarSenha();


// //Atv 7

// const readline = require("readline");
// const read = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let k = 5; 
// let a = 50; 

// console.log(`Múltiplos de ${k} de 1 até ${a}:`);

// for (let i = 1; i <= a; i++) {
//   if (i % k === 0) {
//     console.log(i);
//   }
// }

// read.close();


// //Atv 8

// const numbers = [10, 20, 11]; 

// function calc_Media(lista) {
//   if (lista.length === 0) {
//     return 0;
//   }

//   const soma = lista.reduce((acc, num) => acc + num, 0);
//   const media = soma / lista.length;
//   return media;
// }

// const mediaCalculada = calc_Media(numbers);
// console.log(`A média dos números é: ${mediaCalculada}`);

// //Atv 9

// function calc_Fatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     } else {
//       let fatorial = 1;
//       for (let k = 2; k <= numero; k++) {
//         fatorial *= k;
//       }
//       return fatorial;
//     }
//   }
  
//   const numero = 10; 
//   const fatorialCalculado = calc_Fatorial(numero);
//   console.log(`O fatorial de ${numero} é: ${fatorialCalculado}`);
  
//   //Atv 10

//   for (let k = 10; k >= 1; k--) {
//     console.log(k);
//   }
  