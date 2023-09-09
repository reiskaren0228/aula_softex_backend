function verificarParOuImpar() {
    
    let num = prompt("Digite um número:");

     num = parseInt(num);

    if (!isNaN(num)) {
        if (num % 2 === 0) {
            console.log(`O número ${num} é par`);
        } else {
            console.log(`O número ${num} é ímpar`);
        }
    } else {
        console.log("Entrada inválida. Certifique-se de digitar um número.");
    }
}

verificarParOuImpar();
