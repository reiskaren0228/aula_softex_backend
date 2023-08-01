//Atv 1
// const meuArray=[10, 20, 30, 40, 50];
// console.log(meuArray[1])

// var segundoElemento= meuArray[1];
// console.log(segundoElemento)

//Atv 2

//const frutas=['maça', 'banana', 'laranja', 'uva', 'manga'];
// console.log(frutas.length)

//Atv 3

// let frutas=['maça', 'banana', 'laranja', 'uva', 'manga'];
// let frutas2 = frutas.push("pera");
// console.log(frutas)

//Atv 4

// let frutas=['maça', 'banana', 'laranja', 'uva', 'manga'];

// // frutas.shift();//Remover o primeiro elemento do array

// // frutas.pop();//Remover o ultimo elemento do array

// frutas.splice(frutas, 2);//Remover um elemento de acordo com sua posição

// console.log(frutas);

//Atv 5

// const numerosero=[10, 20, 30, 40, 50];

// if(numerosero.includes(25)==true){
// console.log(`O número está na lista dos arrays`)
// }else {
//     console.log(`O número Não estar incluso na lista`)
// }

// console.log(numerosero)

//Atv 6

// let numeros1 =[1, 2, 3, 4, 5];
// let numeros2 =[1, 2, 3, 4, 5];

// let concatena = numeros1.concat (numeros2);
// console.log(concatena)

//Atv 7

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numerosPares = numeros.filter(numeros => numeros%2==0);
// console.log(numerosPares)

//Atv 8

// const numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// numeros.sort(); //classifica os elementos do array em ordem crescente

// console.log(numeros)

//Atv 9

// const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

// console.log(frutas.indexOf('laranja'))//encontrar o indice no array
  
//Atv 10

let arrays = [1, 2, 3, 4];
let strings = "casa";

function parametros() {
    if(typeof arrays === Array) {
        console.log(`É um array válido`);
    }else {
        console.log(`Não é um array válido`);
    }

} parametros();