class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.child = null;
    }
}

class List_Encadeada {
    constructor() {
        this.cabeca = null;

    }

    add_Pessoa(nome, idade) {
        const newPessoa = new Pessoa(nome, idade);
        if (!this.cabeca) {
            this.cabeca = newPessoa;
        } else {
            let childAtual = this.cabeca;
            while (childAtual.child) {
                childAtual = childAtual.child;
            }
            childAtual.child = newPessoa;
        }
    }


    printLista() {
        let childAtual = this.cabeca;

        while (childAtual) {
            console.log(`Nome: ${childAtual.nome}, Idade: ${childAtual.idade}`);

            if (childAtual.child) {
                console.log(`Este é o filho de ${childAtual.nome}: ${childAtual.child.nome}`)
            } else {
                console.log(`O filho ${childAtual.nome} não tem filho.`)
            }
            childAtual = childAtual.child;
        }
    }
}

//Lista e add Pessoa

const lista = new List_Encadeada();

lista.add_Pessoa("Karen", 35);
lista.add_Pessoa("Adriano", 26);
lista.add_Pessoa("Miguel", 11);
lista.add_Pessoa("Rebeca", 5);


lista.printLista();