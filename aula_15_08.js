const readline = require("readline-sync");

//Exemplo
// function fatorial(n) {

//     if (n === 0 || n === 1) {
//         return 1; //Caso base: fatorial de 0 e 1 é 1
//     } else {
//         return n * fatorial(n - 1);//chamada recursiva
//     }
// }

// //Teste a função
// numero = readline.question("Informe o número que você deseja saber o fatorial: ");
// console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);

//Atv 1

// function somaRecursiva(num) {

//     if (num === 0 || num === 1) {
//         return 1;
//     } else {
//         return num + somaRecursiva(num -1);
//     }
// }

// numero = parseInt(readline.question("Informe um número: "));
// console.log(`A soma do número ${numero} é ${somaRecursiva(numero)}`);

//ou

// function somaRecursiva(num) {

//     if (num === 0 return 1; {
//         return num + somaRecursiva(num -1);
//     }
// }

// numero = parseInt(readline.question("Informe um número: "));
// console.log(`A soma do número ${numero} é ${somaRecursiva(numero)}`);



//Atv 2

function fibonacci(num) {
    if (num <= 1) return num;

    return fibonacci(num-1) + fibonacci(num-2);
}

numero = parseInt(readline.question("Informe até que número que você deseja saber o calculo de calcFibonacci: "));

console.log(`O cálculo Fibonacci do número ${numero} é ${calcFibonacci(numero)}`);