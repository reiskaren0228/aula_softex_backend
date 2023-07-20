var minhaVAR

minhaVAR=10;

soma= 15+8;

soma = soma++;

soma= soma*3;

console.log(soma)

var fazSol = true;

var comida =['arroz', 'feijão', 'ovo'];

console.log (comida[1])

function comparação(){
    if(minhaVAR===soma) {
        console.log("A variável MinhVar é igual a variavel Soma")
    }else {
        console.log("A variável MinhVar NÃO é igual a variavel Soma")
    }
    
}comparação();


function maiorOuMenor(){
    if(minhaVAR <= soma) {
        console.log("A variável MinhVar é menor que a variavel Soma")
    }else {
        console.log("A variável MinhVar é maior ou igual a variavel Soma")
    }
    
}maiorOuMenor();


function divisao(n1,n2) {
     return n1/n2;
}console.log(divisao(20,2));

var div= divisao(10,2);
console.log(div)