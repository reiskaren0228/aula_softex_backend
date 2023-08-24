var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

//quebrando a entrada de dados de uma linha em variaveis separadas
//quando os valores estiverem na mesma linha
// lines = lines[0].split(" ");

//obtem o primeiro valor do arquivo stdin
// let variavel1 = parseFloat(lines[0]);
//obtem o segundo valor do arquivo stdin
// let variavel2 = parseFloat(lines[1]);

let [codigo, qtde] = lines.shift().split(" "); // para ler linhas com mais de um valor na mesma linha

codigo = parseInt(codigo);
qtde = parseInt(qtde);

if (codigo === 1){
    console.log(`Total: R$ ${(qtde * 4.00).toFixed(2)}`);
} else if (codigo === 2) {
    console.log(`Total: R$ ${(qtde * 4.50).toFixed(2)}`);
} else if (codigo === 3) {
    console.log(`Total: R$ ${(qtde * 5.00).toFixed(2)}`);
} else if (codigo === 4) {
    console.log(`Total: R$ ${(qtde * 2.00).toFixed(2)}`);
} else if (codigo === 5) {
    console.log(`Total: R$ ${(qtde * 1.50).toFixed(2)}`);
}

