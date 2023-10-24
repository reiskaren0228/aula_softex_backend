import { Cliente } from "./cliente";

class TipoConta extends Cliente {
    tipoConta: string;
    dependentes: boolean;

    constructor(
        nome: string,
        sobrenome: string,
        contaAtiva: boolean,
        cpf: number,
        estaVivo: boolean,
        tipoConta: string,
        dependentes: boolean,
    ) {

        super(nome, sobrenome, contaAtiva, cpf, estaVivo);
        this.tipoConta = tipoConta;
        this.dependentes = dependentes;
    }
}

let conta = new TipoConta('Karen', 'Reis', true, 19876543200, true, 'Cc', false);
console.log(conta);


