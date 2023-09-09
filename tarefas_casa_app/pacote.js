//1 -> A luiza precisa usar o pacote lodash;

//2 -> A instalaçao é feita utilizando o comando "npm install lodash";

//3 -> O comando é const _ = require('lodash');

/*4 -> 1. _.SortedUniq, 2. _.Reduzir, 3. _.Get E ._set, 4. _.Encontrar, 5. _.KeyBy,
6. _.ParaCada, 7. _.Mapa, 8. _.Diferença, 9. _. Obter, 10. _.Encontrar, 11. _.Grupo Por, 
12. _.Conjunto, 13. _. Mesclar, 14. ._rebarbar, 15. _.Debounce;*/

//5 -> [ [ [ 23, 7 ], [ 23, 12 ] ], [ [ 9, 7 ], [ 9, 12 ] ] ] ; [ [ [ 4, 7 ], [ 4, 12 ] ], [ [ 45, 7 ], [ 45, 12 ] ] ]  

const _ = require('lodash');

const primeiroArray = [23, 9, 4, 45];
const segundoArray = [7, 12];


const dividirMeio = Math.ceil(primeiroArray.length / 2);
const primeiroSubarray = _.take(primeiroArray, dividirMeio);
const segundoSubarray = _.drop(primeiroArray, dividirMeio);


const concatenadosArray1 = _.map(primeiroSubarray, (num1) =>
  _.map(segundoArray, (num2) => [num1, num2])
);

const aconcatenadosArray2 = _.map(segundoSubarray, (num1) =>
  _.map(segundoArray, (num2) => [num1, num2])
);

console.log(concatenadosArray1);
console.log(concatenadosArray2);
