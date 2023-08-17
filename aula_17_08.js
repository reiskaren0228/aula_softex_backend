const readline = require("readline-sync");

// throw 'minhaExcecao'; //saída: Uncaught 'minhaExcecao'
// throw true; //saída: Uncaught 'true
// throw 42; //saída: Uncaught 42

// try {
//     // criticalCode();
//     throw "Sempre Será lançado uma exceção";

// } catch(erro) {
//     console.log("[Erro]");
//     console.log("Tive um erro")
// } finally {
//     console.log("Agora isso sempre será executado")
// }

//Atv 1?

// try {
//     let num1 = parseInt(readline.question("Digite um numero: "));
//     let num2 = parseInt(readline.question("Digite outro numero: "));

//     div = Number(num1 / num2);

//     if (num2 === 0 || num1 === 0) {
//         throw "erro"
//     }

//     console.log("O resultado da divisao dos números é ", div);
// } catch (erro) {

//     console.error("[***Erro: Divisão por zero***]");
//     console.log("O número informado é  '0' e ele não é divisível por nenhum Número");

// } finally {
//     console.log("Funcionando")
// }

//Atv 2 ?

// try {

//     num = parseInt(readline.question("Digite um número: "));

//     if (num != Number) {
//         throw "Valor não é um número"
//     };

// } catch (error) {

//         console.log("***Erro: Conversão Inválida***");

// } finally {
//     console.log("funcionando");
// }

//Atv 3

try {
    let num1 = parseInt(readline.question[("Digite um numero: ")]);
    let num2 = parseInt(readline.question[("Digite outro numero: ")]);
    let num3 = parseInt(readline.question[("Digite mais um numero: ")]);
    num = [num1, num2, n];

    if (num1 === null) {
        throw "Objeto Vazio";
    } 

} catch (error) {
    console.log("***Erro: Propriedade não encontrada***");
} finally {
    console.log("Código funcionando");
}