//Instalar módulo readline-sync
//npm install readline-sync

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


// function tipo(){
//         //tipo = true;
//         tipo = "nome";

//         if(typeof tipo === 'boolean'){
//             console.log(`A function tipo ${tipo} é um boolean`);
//         }else{
//             console.log(`A function tipo ${tipo} não é boolean`);;
//         }
//     }tipo();

// function num(){
//     num=-10;
//     if(num==0){
//         console.log(`O ${num} é igual a zero`);
//     } else if (num > 0) {
//         console.log(`O ${num} é positivo`);
//     }else {
//         console.log(`O ${num} é negativo`);
//     }
// }num()

//Classificar um número em três categorias: negativo, zero ou positivo:

// function classificarNumero(num) {
//     if (num < 0) {
//       return "Negativo";
//     } else if (num === 0) {
//       return "Zero";
//     } else {
//       return "Positivo";
//     }
//   }

//   console.log(classificarNumero(-28)); 
//   console.log(classificarNumero(0));  
//   console.log(classificarNumero(20)); 
  

  //Verificar se um número é divisível por 2, 3 ou 5:

  // function verificarDivisibilidade(num) {
  //   let divisivelPor2 = num % 2 === 0;
  //   let divisivelPor3 = num % 3 === 0;
  //   let divisivelPor5 = num % 5 === 0;
  
  //   return {
  //     divisivelPor2: divisivelPor2,
  //     divisivelPor3: divisivelPor3,
  //     divisivelPor5: divisivelPor5,
  //   };
  // }

  // console.log(verificarDivisibilidade(18)); 
  // console.log(verificarDivisibilidade(12)); 
  // console.log(verificarDivisibilidade(50));  

  
  //Classificar uma variável em 4 categorias: booleana, numérica, string ou indefinida:

  // function classificarVariavel(valor) {
  //   if (typeof valor === "boolean") {
  //     return "Booleana";
  //   } else if (typeof valor === "number") {
  //     return "Numérica";
  //   } else if (typeof valor === "string") {
  //     return "String";
  //   } else {
  //     return "Indefinida";
  //   }
  // }
 
  // console.log(classificarVariavel(true));    
  // console.log(classificarVariavel(2));      
  // console.log(classificarVariavel("karen")); 
  // console.log(classificarVariavel(null));  
  
  //Classificar um número em 5 categorias: negativo, zero, positivo, par ou ímpar:,

  // function classificarNumeroDetalhado(num) {
  //   if (num < 0) {
  //     return "Negativo";
  //   } else if (num === 0) {
  //     return "Zero";
  //   } else {
  //     let categoria = "Positivo";
  //     if (num % 2 === 0) {
  //       categoria += ", Par";
  //     } else {
  //       categoria += ", Ímpar";
  //     }
  //     return categoria;
  //   }
  // }
  
  // console.log(classificarNumeroDetalhado(-35)); 
  // console.log(classificarNumeroDetalhado(0)); 
  // console.log(classificarNumeroDetalhado(12));
  // console.log(classificarNumeroDetalhado(53));  
  

  //Verificar se um número é divisível por 2, 3, 5 ou 7:

  // function verificarDivisibilidade2(num) {
  //   let divisivelPor2 = num % 2 === 0;
  //   let divisivelPor3 = num % 3 === 0;
  //   let divisivelPor5 = num % 5 === 0;
  //   let divisivelPor7 = num % 7 === 0;
  
  //   return {
  //     divisivelPor2: divisivelPor2,
  //     divisivelPor3: divisivelPor3,
  //     divisivelPor5: divisivelPor5,
  //     divisivelPor7: divisivelPor7,
  //   };
  // }
 
  // console.log(verificarDivisibilidade2(12)); 
  // console.log(verificarDivisibilidade2(56)); 
  // console.log(verificarDivisibilidade2(7));  

