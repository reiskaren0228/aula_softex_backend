const readline = require("readline-sync");

// // Atv 1
// let k = parseInt(readline.question("Digite o número inicial da contagem: "));
// let a = parseInt(readline.question("Digite o número final da contagem: "));

// do {
//     console.log(k);
//     k++;
// } while (k <= a);


// // Atv 2
// let k = parseInt(readline.question("Digite o número inicial da soma: "));
// let a = parseInt(readline.question("Digite o número final da soma: "));
// let soma = 0;

// do {
//     k = k + 1;
//     soma = soma + k;
//     console.log(soma);
// } while (k <= a);


// // Atv 3
// let k = parseInt(readline.question("Digite o número inicial dos números: "));
// let a = parseInt(readline.question("Digite o número final dos números: "));

// do {
//     if (k % 2 === 0) {
//         console.log(k);
//     }
//     k++;
// } while (k <= a);


// // Atv 4
// function calcularMultiplicacao(number) {
//     let result = number;

//     do {
//         result *= 2;
//     } while (result <= 1000);

//     return result;
// }

// const startingNumber = 5;
// const finalResult = calcularMultiplicacao(startingNumber);

// console.log(`O resultado final é: ${finalResult}`);


// Atv 5 
let k = parseInt(readline.question("Digite o número: "));
let divisor = 2;
let isPrime = true;

do {
    if (k % divisor === 0) {
        isPrime = false;
        break;
    }
    divisor++;
} while (divisor < k);

if (isPrime && k > 1) {
    console.log("O Número digitado é Primo!");
} else {
    console.log("O Número digitado NÃO é primo!");
}


// // Atv 6
// const senhaCorreta = "123"; 

// do {
//     var senha = readline.question("Digite a sua senha: ");
//     if (senha === senhaCorreta) {
//         console.log("Senha válida");
//         break;
//     } else {
//         console.log("Senha inválida! Digite novamente.");
//     }
// } while (true);


// // Atv 7
// let k = 3;
// let a = 30;

// console.log(`Múltiplos de ${k} de 1 até ${a}:`);

// let i = 1;
// do {
//     if (i % k === 0) {
//         console.log(i);
//     }
//     i++;
// } while (i <= a);


// // Atv 8
// const numbers = [10, 3, 28, 20, 11]; 

// function calcularMedia(lista) {
//     if (lista.length === 0) {
//         return 0;
//     }

//     const soma = lista.reduce((acc, num) => acc + num, 0);
//     const media = soma / lista.length;
//     return media;
// }

// const mediaCalculada = calcularMedia(numbers);
// console.log(`A média dos números é: ${mediaCalculada}`);


// // Atv 9
// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//         return 1;
//     } else {
//         let fatorial = 1;
//         let k = 2;
//         do {
//             fatorial *= k;
//             k++;
//         } while (k <= numero);
//         return fatorial;
//     }
// }

// const numero = 10;
// const fatorialCalculado = calcularFatorial(numero);
// console.log(`O fatorial de ${numero} é: ${fatorialCalculado}`);


// // Atv 10
// let k = 10;

// do {
//     console.log(k);
//     k--;
// } while (k >= 1);
