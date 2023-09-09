const readline = require("readline-sync");

try {
        let num1 = parseInt(readline.question("Digite um numero: "));
        let num2 = parseInt(readline.question("Digite outro numero: "));
    
        if (num2 === 0) {
            throw "Divisão por zero";
        }
    
        let div = num1 / num2;
    
        console.log("O resultado da divisao dos números é", div);
    } catch (erro) {
        if (erro === "Divisão por zero") {
            console.error("Erro:", erro);
            console.log("O número informado para a divisão é 0 e a divisão por zero não é permitida.");
        } else {
            console.error("Erro desconhecido:", erro);
        }
    } finally {
        console.log("**ERROR**");
    }