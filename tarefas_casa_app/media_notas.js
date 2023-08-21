const readline = require('readline-sync');

const nota1 = parseFloat(readline.question("Digite a primeira nota:"));
const nota2 = parseFloat(readline.question("Digite a segunda nota:"));
const nota3 = parseFloat(readline.question("Digite a terceira nota:"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    console.log("***Número não reconhecido ==> Por favor, digite valores numéricos válidos de 0 a 10.");
} else {
    
    const media = (nota1 + nota2 + nota3) / 3;

    console.log("A média das notas é: " + media.toFixed(2));
}


