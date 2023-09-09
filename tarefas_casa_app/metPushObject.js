//object.keys = retorna um array com as chaves

console.log("\n Object.keys \n"); 

const pessoa = { nome: "Karen Reis", idade: 35, profissao: "Desenvolvedora Back-end" };
const chaves = Object.keys(pessoa);

console.log(chaves); 

console.log("\n---------------------//------------------ \n");

//object.values = retorna os valores do com as chaves

console.log("\n Object.values \n"); 

const people = { nome: "Karen Reis", idade: 35, profissao: "Desenvolvedora Back-end" };
const keys = Object.values(people);

console.log(keys); 

console.log("\n---------------------//------------------ \n");

//pop -> Remove e retorna o último item do array

console.log("\n Pop \n"); 

const myFrutas = ["romã", "pitaya", "jambo", "jaca", "graviola"];
const lastFruta = myFrutas.pop();

console.log(lastFruta); 
console.log(myFrutas); 

console.log("\n---------------------//------------------ \n");

//join -> Converte os elementos do array em uma string, separados por um separador especificado

console.log("\n Join \n"); 

const Frutas = ["romã", "pitaya", "jambo", "jaca", "graviola"];
const joinFruta = Frutas.join(" -> ");

console.log(joinFruta); 

console.log("\n---------------------//------------------ \n");

//Object.freeze -> não permite que faça as alterações solicitadas

console.log("\n Object.freeze \n"); 
const pessoas = { nome: "Adriano", idade: 38 };
Object.freeze(pessoas);

pessoas.nome = "Karen"; 
pessoas.idade = 25;
console.log(pessoas); 

console.log("\n---------------------//------------------ \n");


