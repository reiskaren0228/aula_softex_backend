import { Banco } from "./banco";

export class Cliente extends Banco {
    private cpf: number;
    private estaVivo: boolean;

    constructor(
        nome: string,
        sobrenome: string,
        contaAtiva: boolean,
        cpf: number,
        estaVivo: boolean,
    ) {

        super(nome, sobrenome, contaAtiva);
        this.cpf = cpf;
        this.estaVivo = estaVivo;
    }
}

let cliente = new Cliente('Karen', 'Reis', true, 19876543200, true);
console.log(cliente);