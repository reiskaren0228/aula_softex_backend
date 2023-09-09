class Pessoa {
    constructor(nome = "Karen Reis", idade = 30, cidade = "Recife") {
      this.nome = nome;
      this.idade = idade;
      this.cidade = cidade;
    }
  }
  
  class Funcionario extends Pessoa {
    constructor() {
      super(); 
      this.cargo = "Gerente de Projetos";
      this.salario = 8600.0;
    }
  }
  
 const funcionario = new Funcionario();
  
  console.log(`Nome: ${funcionario.nome}`);
  console.log(`Idade: ${funcionario.idade}`);
  console.log(`Cidade: ${funcionario.cidade}`);
  console.log(`Cargo: ${funcionario.cargo}`);
  console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
  