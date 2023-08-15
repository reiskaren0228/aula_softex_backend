function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1; //Caso base: fatorial de 0 e 1 é 1
    } else {
        return n * fatorial(n - 1);//chamada recursiva
    }
}

//Teste a função
const numero = 5;
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);