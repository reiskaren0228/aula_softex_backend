var readline = require('readline-sync');

let Estrategia = function() {
    this.execute = function(n1, n2) {};
};

let Soma = function() {
    this.execute = function(n1, n2) {
        return n1 + n2;
    };
};
Soma.prototype = new Estrategia();

let Subtracao = function() {
    this.execute = function(n1, n2) {
        return n1 - n2;
    };
};
Subtracao.prototype = new Estrategia();

let Multiplicacao = function() {
    this.execute = function(n1, n2) {
        return n1 * n2; 
    };
};
Multiplicacao.prototype = new Estrategia();

function calcular() {
    const numero1 = parseInt(readline.question("\n Informe o primeiro número: "));
    const numero2 = parseInt(readline.question("\n Informe o segundo número: "));
    const operacao = readline.question("\n Escolha a operação (+ Soma, - Subtração, * Multiplicação): ");

    let estrategia;

    if (operacao === "+") {
        estrategia = new Soma();
    } else if (operacao === "-") {
        estrategia = new Subtracao();
    } else if (operacao === "*") {
        estrategia = new Multiplicacao();
    } else {
        console.log("*** Opção Inválida ***\n");
        return;
    }
    
    const resultado = estrategia.execute(numero1, numero2);
    console.log(`\n Resultado da Operação: ${resultado}`);
}

calcular();
