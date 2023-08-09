//Melhor busca é a Binária, mas rápida e os numbs dentro do array estão em ordem.

function searchBinaria(array, alvo) {
    let esquerda = 0;
    let direita = array.length - 1;

    while (esquerda <= direita) {
        const meio = Math.floor((esquerda + direita) / 2);

        if (array[meio] === alvo) {
            return meio; 
        } else if (array[meio] < alvo) {
            esquerda = meio + 1; 
        } else {
            direita = meio - 1; 
        }
    }

    return -1; 
}

const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
const num_Buscado = 20;

const indiceEncontrado = searchBinaria(array, num_Buscado);

if (indiceEncontrado !== -1) {
    console.log(`O número procurado ${num_Buscado} foi encontrado na posição ${indiceEncontrado}.`);
} else {
    console.log(`O número procurado ${num_Buscado} não foi encontrado no array.`);
}
