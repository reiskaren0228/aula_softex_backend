function cadastrarPessoa(nome, idade, salario, possuiDiploma) {

    // Verificando se os tipos de entrada são válidos
    if (typeof nome !== 'string' || typeof idade !== 'number' || typeof salario !== 'number' || typeof possuiDiploma !== 'boolean') {
        console.log("*** Tipos de entrada inválidos.***");
        return;
    }

    // Criando um objeto para armazenar os dados da pessoa
    const pessoa = {
        nome: nome,
        idade: idade,
        salario: salario,
        possuiDiploma: possuiDiploma
    };

    // Retornando o objeto pessoa
    return pessoa;
}

// Exemplos de cadastro de pessoas
const pessoa1 = cadastrarPessoa("Karen", 35, 8500.00, true);
const pessoa2 = cadastrarPessoa("Adriano", 28, 2500.00, false);

// Exibindo os dados cadastrados
console.log(pessoa1);
console.log(pessoa2);
