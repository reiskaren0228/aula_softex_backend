let animais = [
    ['Cachorro', 'Canídeos', 13],
    ['Tuburão', 'Condrictes', 30],
    ['Jabuti', 'Quelônios', 80],
    ['Papagaio', 'Psittaciformes', 11],
    ['Hamster', 'Cricetidae', 60],
];

let animal_escolhido = 0;
let animal_nome = animais[animal_escolhido][0];
let animal_especie = animais[animal_escolhido][1];
let animal_idade = animais[animal_escolhido][2];

let animal_add = ['Gato', 'Felino', 10];
animais.push(animal_add);

let animal_substituicao = 0;
animais[animal_substituicao][2] = 18;

let animal_excluido = 2;
animais.splice(animal_excluido, 1);

console.log(animais);