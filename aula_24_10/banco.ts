import { log } from "console";

export class Banco {
    public nome: string;
    public sobrenome: string;
    protected contaAtiva: boolean;

    constructor(
        nome: string,
        sobrenome: string,
        contaAtiva: boolean
    ) {

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.contaAtiva = contaAtiva;
    }
}

let banco = new Banco('Karen', 'Reis', true);
console.log(banco);




