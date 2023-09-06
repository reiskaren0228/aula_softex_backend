class Pessoa {
    constructor(nome = "Karen Reis", idade = 35, profissao = "Desenvolvedora Back-end", cidade = "Paulista") {
      this.dados = [nome, idade, profissao, cidade];
    }
  }
  
   const pessoa = new Pessoa();
  
 
  for (const pessoaForIn in pessoa) {
    console.log(`${pessoaForIn}: ${pessoa[pessoaForIn]}`);
  }

  for (const pessoaForOf of pessoa.dados) {
    console.log(pessoaForOf);
  }
  