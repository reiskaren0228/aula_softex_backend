function cadastrarPessoa(nome, idade, salario, possuiDiploma) {


    if (typeof nome !== 'string' || typeof idade !== 'number' || typeof salario !== 'number' || typeof possuiDiploma !== 'boolean') {
        console.log("*** Tipos de entrada inválidos.***");
        return;
    }

    const pessoa = {
        nome: nome,
        idade: idade,
        salario: salario,
        possuiDiploma: possuiDiploma
    };

    return pessoa;
}

// Exemplos de cadastro de pessoas
const pessoa1 = cadastrarPessoa("Karen", 35, 8500.00, true);
const pessoa2 = cadastrarPessoa("Adriano", 28, 2500.00, false);

// Exibindo os dados cadastrados
console.log(pessoa1);
console.log(pessoa2);