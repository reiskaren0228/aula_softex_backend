let nomes =['karen', 'adriano', 'felipe', 'kelly', 'gilberto', 'roze', 'ana', 'robson', 'rebeca', 'miguel'];

let idade =[35, 34, 30, 41, 25, 65, 70, 18, 4, 2];

let cores =['roxo', 'azul', 'verde', 'amarelo', 'vermelho', 'preto', 'branco', 'laranja', 'rosa', 'marrom'];

//console.log(nomes, idade, cores)

idade.splice(1, 1, '44');
cores.splice(2, 1, 'purple');

console.log(nomes, idade, cores)