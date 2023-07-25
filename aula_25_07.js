const readline = require("readline-sync");

//Permissão para dirigir
function dirigir(drive) {
    var drive = readline.question("Digite sua idade: ");

   if (drive < 16) {
     return "Você não pode dirirgir!!!";
   } else if (drive >= 16 && drive <= 17) {
        return "Falta pouco, vai apredendo a dirigir com seus pais!!!";
   } else if (drive >= 18 && drive <= 70) {
        return "Parabéns Você já pode dirigir!!";
   } else {
        return "Você já está bem idoso, dirija com algum acompanhante.";
   }
   } console.log(dirigir())