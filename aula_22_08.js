const usuarios = [
    {nome: "Karen Reis", idade: 18},
    {nome: "Adriano Silva", idade: 38},
    {nome: "Kelly Reis", idade: 28},
    {nome: "Miguel Oliveira", idade: 35},
    {nome: "Rebeca Menezes", idade: 32},
    {nome: "Izabel Ferreira", idade: 20},
    {nome: "Sara Cardoso", idade: 44},
];

// for (let i = 0; i < usuarios.length; i++){
//     console.log(`Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade} anos.`)
// }

// for (let i in usuarios) {
//     // console.log(usuarios[item].nome);
//     // console.log(usuarios[item].idade);
//     console.log(`Nome: ${usuarios[i].nome}, Idade: ${usuarios[i].idade} anos.`)
// }

// for (let i of usuarios) {
//     // console.log(i.nome);
//     // console.log(i.idade);
//     console.log(`Nome: ${i.nome}, Idade: ${i.idade} anos.`)
// }

// const numeros = [150, 100, 200, 250, 50];
// const palavras = ["cadela", "lapis", "caneta", "caderno", "mesa"];
// const logicos = [true, false, false, true, true];

// for (let i in numeros){
//     console.log(`Os números informados são: `);
//     console.log(`${numeros[i]}`);
// }

// for (let i of numeros) {
//     console.log(`Os numeros informados são: ${i}`);
// };

// for (let i in palavras){
//     console.log(`As palavras informadas são: `);
//     console.log(`${palavras[i]}`);
// }

// for (let i of palavras) {
//     console.log(`As palavras informadas são: ${i}`);
// };

// for (let i in logicos) {
//     console.log(`Os operadores lógicos informadas são: ${logicos[i]}`);
// }

// for (let i of logicos) {
//     console.log(`Os operadores lógicos informadas são: ${i}`);
// }

//Exercicio 

//Atv 1 

// const numeros = [3, 7, 2, 9, 5];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// for (const i of numeros) {
//     console.log(i);
// }

//Atv2

// const soma = [
//     { objeto1 : "a", numero: 10 },
//     { objeto2 : "b", numero: 20 },
//     { objeto3 : "c", numero: 30 },
//     { objeto4 : "d", numero: 40 },
// ]
// var sum = 0;

// for (const i in soma) {
//     sum += soma[i].numero;
//     console.log(`A soma dos elementos é ${sum}`);
// }

//Atv 3

// const numeros = [12, 5, 8, 21, 16, 7];

// let pares = []
// let impares = []

// for (i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     pares.push(numeros[i])
//   } else {
//     impares.push(numeros[i])
//   }
// }

// console.log(pares)

// console.log(impares)


//Atv 4

// const estudantes = [
//     {nome : "Alice", idade: 18},
//     {nome : "Bob", idade: 20},
//     {nome : "Carol", idade: 19},
//     {nome : "David", idade: 21},
// ]

// let idadeMaior = [];

// for (i= 0; i < estudantes.length; i++) {

//     if (estudantes[i].idade >= 19) {
//         idadeMaior.push(estudantes[i])       
//     } else {
//         console.log("Não existe alunos com essa idade");
//     }
// }

// console.log(idadeMaior);

//Atv 5

const pontos = [
    [2, 5, 8],
    [3, 9, 12],
    [4, 6, 10]
];

for (let i = 0; i < pontos.length; i++) {
    var sum = 0;

    for (const i in pontos) {
        sum += pontos[i];
        console.log(sum);
    }
}