const readline = require("readline-sync");

function blackjack() {

    
    let cartaJogador1= parseInt(readline.question("Digite o valor das cartas do Jogador: "));

    let ccartaJogador2= parseInt(readline.question("Digite o valor da cartas do Jogador: "));
    
    let cartaJogador3= parseInt(readline.question("Digite o valor da cartas do Jogador: "));
    
    let cartaJogador4= parseInt(readline.question("Digite o valor da cartas do Jogador: "));
    
    somaJogador = cartaJogador1+ccartaJogador2+cartaJogador3+cartaJogador4;

    let cartaBanco1= parseInt(readline.question("Digite o valor das cartas do Banco: "));

    let cartaBanco2= parseInt(readline.question("Digite o valor da cartas do Banco: "));
    
    let cartaBanco3= parseInt(readline.question("Digite o valor da cartas do Banco: "));
    
    let cartaBanco4= parseInt(readline.question("Digite o valor da cartas do Banco: "));
    
    somaBanco = cartaBanco1+cartaBanco2+cartaBanco3+cartaBanco4;


    if (somaJogador > 21 && somaBanco < 21) {
        console.log(`Você perdeu para o banco!! :( A soma das suas cartas foi ${somaJogador}!!!`);
    } 
    else if (somaJogador < 21 && somaBanco > 21) {
        console.log(`Você ganhou do banco :D!! A soma das cartas do banco foi ${somaBanco}!!!`);
    }
     else {
        console.log("Digite valores de cartas válidas")
     }
}
blackjack();