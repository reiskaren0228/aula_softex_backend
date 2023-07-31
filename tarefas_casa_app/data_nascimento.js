function obterAnoDeNascimento() {
    while (true) {
        const ano = prompt("Digite o ano de nascimento (entre 1922 e 2021):");
        const ano_Int = parseInt(ano);
        
        if (!isNaN(ano_Int) && ano_Int >= 1922 && ano_Int <= 2021) {
            return ano_Int;
        } else {
            alert("Por Favor o Ano é inválido. Digite um ano válido.");
        }
    }
}

function calcular_Idade(ano_Nasc) {
    const ano_Atual = new Date().getFullYear();
    const idade = ano_Atual - ano_Nasc;
    return idade;
}

function data_Nascimento() {
    const ano_Comp = prompt("Digite o seu nome completo:");
    const ano_Nasc = obterAnoDeNascimento();
    const idade = calcular_Idade(ano_Nasc);

    alert(`Nome: ${ano_Comp}\nIdade em 2022: ${idade} anos`);
}

data_Nascimento();
