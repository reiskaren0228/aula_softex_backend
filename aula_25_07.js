const readline = require("readline-sync");

//Permissão para dirigir
// function dirigir(drive) {

//     var drive = readline.question("Digite sua idade: ");

//    if (drive < 16) {
//      return "Você não pode dirirgir!!!";
//    } else if (drive >= 16 && drive <= 17) {
//         return "Você já pode pedir autorização dos seus pais para dirigir!!!";
//    } else if (drive >= 18 && drive <= 70) {
//         return "Parabéns Você já pode dirigir!!";
//    } else {
//         return "Você já está bem idoso, dirija com algum acompanhante.";
//    }
//    } console.log(dirigir())

//Exercicio 1:


// let diaSemana = 8;

// switch(diaSemana) {

//     case 1:
//         console.log("O dia da semana escolhido é o Domingo.");
//         break;
    
//     case 2:
//         console.log("O dia da semana escolhido é a Segunda-feira");
//         break;
    
//     case 3:
//         console.log("O dia da semana escolhido é a Terça-feira");
//         break;  
        
//     case 4:
//         console.log("O dia da semana escolhido é a Quarta-feira");
//         break;  
    
//     case 5:
//         console.log("O dia da semana escolhido é a Quinta-feira");
//         break;  

//     case 6:
//         console.log("O dia da semana escolhido é a Sexta-feira");
//         break;  

//     case 7:
//         console.log("O dia da semana escolhido é a Sábado");
//         break;  

//     default:
//         console.log("Digite de 1 até o número 7") 
//     }
   
// //Exercicio 2:


// let mês = 11;

// switch(mês) {

//     case 1:
//         console.log("O mês escolhido é Janeiro.");
//         break;
    
//     case 2:
//         console.log("O mês escolhido é Fevereiro.");
//         break;
    
//     case 3:
//         console.log("O mês escolhido é Março.");
//         break;  
        
//     case 4:
//         console.log("O mês escolhido é Abril.");
//         break;  
    
//     case 5:
//         console.log("O mês escolhido é Maio.");
//         break;  

//     case 6:
//         console.log("O mês escolhido é Junho.");
//         break;  

//     case 7:
//         console.log("O mês escolhido é Julho.");
//         break;

//     case 8:
//          console.log("O mês escolhido é Agosto.");
//          break; 

//     case 9:
//          console.log("O mês escolhido é Setembro.");
//          break;  

//     case 10:
//           console.log("O mês escolhido é Outubro.");
//           break;  

//     case 11:
//           console.log("O mês escolhido é Novembro.");
//           break;  

//     case 12:
//           console.log("O mês escolhido é Dezembro.");
//           break;  

//     default:
//         console.log("Digite de 1 até o número 12") 
//     }

//Exercicio 3:

// let estadoCivil = 2;

// switch(estadoCivil) {

//     case 1:
//         console.log("Você escolheu a opção Solteiro");
//         break;
    
//     case 2:
//         console.log("Você escolheu a opção Casado");
//         break;
    
//     case 3:
//         console.log("Você escolheu a opção Divorciado");
//         break; 
        
//     case 4:
//         console.log("Você escolheu a opção Outro");
//         break; 
    
//     default:
//         console.log("Digite de 1 até o número 4") 
//     }

//Exercicio 4:

// let animal = readline.question("Escolha a opção: (1)Cachorro/(2)Gato/(3)Pássaro/(4)Outro -> Animal: ");

// switch(animal) {

//     case 'cachorro':
//         console.log("Você escolheu o Cachorro");
//         break;
    
//     case 'gato':
//         console.log("Você escolheu o Gato");
//         break;
    
//     case 'passaro':
//         console.log("Você escolheu o Pássaro");
//         break; 
        
//     case 'outro':
//         console.log("Você escolheu a opção Outro tipo de animal");
//         break; 
    
//     default:
//         console.log("Digite o animal") 
//     }

//Exercicio 5:

// let operacao = readline.question("Escolha a operação que você deseja: soma/subtração/multiplicação/divisão -> Digite a operação: ");

// switch(operacao) {

//     case 'soma':

//         let n1 = c("Digite um número: "));
//         let n2 = parseFloat(readline.question("Digite outro número: "));

//         soma= n1+n2;

//         console.log(soma);

//         break;
    
//     case 'subtração':
//         let n4 = parseFloat(readline.question("Digite um número: "));
//         let n5 = parseFloat(readline.question("Digite outro número: "));

//         subtração=n4-n5;

//         console.log(subtração);

//         break;
    
//     case 'multiplicação':
//         let n6 = parseFloat(readline.question("Digite um número: "));
//         let n7 = parseFloat(readline.question("Digite outro número: "));

//         multiplicação= n6*n7;

//         console.log(multiplicação);

//         break; 
        
//     case 'divisão':
//         let n8 = parseFloat(readline.question("Digite um número: "));
//         let n9 = parseFloat(readline.question("Digite outro número: "));

//         divisão= n8/n9;

//         console.log(divisão);

//         break; 
    
//     default:
//         console.log("Digite a operação que você deseja!") 
//     }