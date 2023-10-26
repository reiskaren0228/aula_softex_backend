import Cliente from "./cliente";

export default class TipoConta extends Cliente {
    private tipoConta: string;
    private numeroConta: number | string;
    protected dependentes: boolean;

    constructor(
        nome: string,
        sobrenome: string,
        contaAtiva: boolean,
        cpf: number | string,
        estadoCivil: string,
        falecido: boolean,
        tipoConta: string,
        numeroConta: number | string,
        dependentes: boolean
    ) {

        super(nome, sobrenome, contaAtiva, cpf, estadoCivil, falecido);
        this.tipoConta = tipoConta;
        this.numeroConta = numeroConta;
        this.dependentes = dependentes;
    }

    public getTipoConta() {
        return this.tipoConta;
    }

    public setTipoConta(tipoConta: string) {
        return tipoConta = tipoConta;
    }

    public getNumeroConta() {
        return this.numeroConta;
    }

    public setNumeroConta(numeroConta: number | string) {
        return numeroConta = numeroConta;
    }

    public getDependentes() {
        return this.dependentes;
    }

    public setDependentes(dependentes: boolean) {
        return dependentes = dependentes;
    }

    public msgContaTipo(): void {
        if (this.contaAtiva !== false && this.falecido === false) {
            console.log(`** Cliente Ativo no momento ** \n`);
            console.log(`Na conta tipo: ${this.tipoConta}, Número: ${this.numeroConta}`);
            console.log("------------------------------------------------------------ \n");
        } else {
            console.log(`** Conta Inativa por motivo de Falecimento ** \n`);
            console.log("------------------------------------------------------------ \n");
        }

    }
}

let cliente = new TipoConta('Karen', 'Reis', true, "198.765.432-00", 'Casada', false, 'Conta-Corrente', '32.547-8', true);

cliente.msgContaAtiva();

console.log(`\n *** STATUS BANCÁRIO *** \n
-- Cliente: ${cliente.nome} ${cliente.sobrenome} 
-- Conta Ativa: ${cliente.contaAtiva} 
-- CPF: ${cliente.getCpf()} 
-- Estado Civil: ${cliente.estadoCivil} 
-- Falecido: ${cliente.getFalecido()} 
-- Tipo Conta: ${cliente.getTipoConta()}
-- Número da Conta: ${cliente.getNumeroConta()}
-- Dependentes: ${cliente.getDependentes()}
\n`);

cliente.msgContaTipo();


let cliente1 = new TipoConta('João', 'Silva', false, "789.656.321-33", 'Casado', true, 'Conta-Poupança', '02.280-5', false);

cliente1.msgContaAtiva();

console.log(`\n *** STATUS BANCÁRIO *** \n
-- Cliente: ${cliente1.nome} ${cliente1.sobrenome} 
-- Conta Ativa: ${cliente1.contaAtiva} 
-- CPF: ${cliente1.getCpf()} 
-- Estado Civil: ${cliente1.estadoCivil} 
-- Falecido: ${cliente1.getFalecido()} 
-- Tipo Conta: ${cliente1.getTipoConta()}
-- Número da Conta: ${cliente1.getNumeroConta()}
-- Dependentes: ${cliente1.getDependentes()} 
\n`);

cliente1.msgContaFalecimento()


