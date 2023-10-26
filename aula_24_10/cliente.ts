import Banco from "./banco";

export default class Cliente extends Banco {

    private cpf: number | string;
    estadoCivil: string;
    protected falecido: boolean;
J
    constructor(
        nome: string,
        sobrenome: string,
        contaAtiva: boolean,
        cpf: number | string,
        estadoCivil: string,
        falecido: boolean,
    ) {
        super(nome, sobrenome, contaAtiva);
        this.cpf = cpf;
        this.estadoCivil = estadoCivil;
        this.falecido = falecido;
    }

    public getCpf() {
        return this.cpf;
    }

    public setCpf(cpf: number | string) {
        return cpf = cpf;
    }

    public getFalecido() {
        return this.falecido;
    }

    public setFalecido(falecido: boolean) {
        return falecido = falecido;
    }

    public msgContaFalecimento(): void {
        if (this.contaAtiva !== false) {
            console.log(`** Cliente Ativo no momento ** \n`);
            console.log("------------------------------------------------------------");
        } else {
            console.log(`** Conta Inativa por motivo de Falecimento ** \n`);
            console.log("------------------------------------------------------------");
        }

    }
}

let cliente = new Cliente('Karen', 'Reis', true, "198.765.432-00", 'Casada', false);

cliente.msgContaAtiva();

console.log(`\n *** STATUS BANCÁRIO *** \n
-- Cliente: ${cliente.nome} ${cliente.sobrenome} 
-- Conta Ativa: ${cliente.contaAtiva} 
-- CPF: ${cliente.getCpf} 
-- Estado Civil: ${cliente.estadoCivil} 
-- Falecido: ${cliente.getFalecido()} \n`);

cliente.msgContaFalecimento()


let cliente1 = new Cliente('João', 'Silva', false, "789.656.321-33", 'Casado', true);

cliente1.msgContaAtiva();

console.log(`\n *** STATUS BANCÁRIO *** \n
-- Cliente: ${cliente1.nome} ${cliente1.sobrenome} 
-- Conta Ativa: ${cliente1.contaAtiva} 
-- CPF: ${cliente1.getCpf} 
-- Estado Civil: ${cliente1.estadoCivil} 
-- Falecido: ${cliente1.getFalecido()} \n`);

cliente1.msgContaFalecimento()


