//Instalar módulo readline-sync
//npm install-sync

// const readline = require("readline-sync");

// var nome = readline.question("Digite seu nome: ")
// console.log("O nome digitado foi " + nome)

// function numero(){
//     let numero = -17;

//     if(numero>=0){
//         console.log(`O numero ${numero} é positivo`);
//     }else {
//         console.log(`O numero ${numero} é negativo`)
//     }
// } numero()

// function num(){
//     let num=38;

//     if(num%2===0) {
//         console.log(`O numero ${num} é par`);
//     }else {
//         console.log(`O numero ${num} é impar`);
//     }
// }num()

// function nome(){
//     nome="";
//     if(nome===""){
//         console.log(`A string nome ${nome} está vazia`);
//     }else{
//         console.log(`A string nome ${nome} Não está vazia`);;
//     }
// }nome();

// function num(){
//         let num=2;
    
//         if(num>=10) {
//             console.log(`O numero ${num} é maior que o número 10`);
//         }else {
//             console.log(`O numero ${num} é menor que o número 10`);
//         }
//     }num()


function tipo(){
        //tipo =true;
        tipo = "nome";

        if(typeof tipo === 'boolean'){
            console.log(`A function tipo ${tipo} é um boolean`);
        }else{
            console.log(`A function tipo ${tipo} não é boolean`);;
        }
    }tipo();
