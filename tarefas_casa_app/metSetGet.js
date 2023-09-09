class Pessoa {
    constructor(nome = "Karen Reis", idade = 35, profissao = "Desenvolvedora Back-end", cidade = "Paulista") {
      this.informacoes = [nome, idade, profissao, cidade];
    }
  

    setInformacoes(nome, idade, profissao, cidade) {
      this.informacoes = [nome, idade, profissao, cidade];
    }
  
    getInformacoes() {
      return this.informacoes;
    }
  }
  
  const pessoa = new Pessoa();
  

  console.log("Informações atuais:", pessoa.getInformacoes());
  

  pessoa.setInformacoes("Adriano Oliveira", 32, "Desenvolvedor Front-end", "São Paulo");
  

  console.log("Informações atualizadas:", pessoa.getInformacoes());
  