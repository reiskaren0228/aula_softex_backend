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

//     if (num2 === 0) {
//         throw "Divisão por zero";
//     }

//     let div = num1 / num2;

//     console.log("O resultado da divisao dos números é", div);
// } catch (erro) {
//     if (erro === "Divisão por zero") {
//         console.error("Erro:", erro);
//         console.log("O número informado para a divisão é 0 e a divisão por zero não é permitida.");
//     } else {
//         console.error("Erro desconhecido:", erro);
//     }
// } finally {
//     console.log("Funcionando");
// }

//Atv 2 ?


// try {
//     num = parseInt(readline.question("Digite um número: "));

//     if (isNaN(num)) {
//         throw "Valor não é um número";
//     }
// } catch (error) {
//     console.log("***Erro:", error, " *** Conversão Inválida ***");
// } finally {
//     console.log("funcionando");
// }


//Atv 3

// try {
//     let num1 = parseInt(readline.question("Digite um numero: "));
//     let num2 = parseInt(readline.question("Digite outro numero: "));
//     let num3 = parseInt(readline.question("Digite mais um numero: "));

//     let num = {};  

//     if (Object.keys(num).length === 0) {
//         throw "Objeto Vazio";
//     }

//     console.log(num.propriedadeInexistente);  //forçar o erro

// } catch (error) {
//     console.log("***Erro:", error, "***");
// } finally {
//     console.log("Código funcionando");
}


