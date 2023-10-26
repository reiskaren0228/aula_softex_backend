export default class Banco {
   
    nome: string;
    sobrenome: string;
    contaAtiva: boolean;

    constructor(clienteNome: string, sobNome: string, contaAtiva: boolean) {
        this.nome = clienteNome;
        this.sobrenome = sobNome;
        this.contaAtiva = contaAtiva;
    }

    public msgContaAtiva(): void {
        if (this.contaAtiva === true) {
            console.log(`*** ACESSO LIBERADO *** \n--> Conta Ativa no Sistema ** `);
            console.log("------------------------------------------------------------");
            
        } else {
            console.log(`*** ERROR - ACESSO NEGADO *** \n--> Conta Inativa no Sistema <--`);
            console.log("------------------------------------------------------------");
        }

    }
}

let cliente = new Banco('Karen', 'Reis', true);

console.log(`\n *** STATUS BANCÁRIO *** \n
-- Cliente: ${cliente.nome} ${cliente.sobrenome} 
-- Conta Ativa: ${cliente.contaAtiva} \n`)

cliente.msgContaAtiva()

let cliente1 = new Banco('João', 'Silva', false);
console.log(`\n *** STATUS BANCÁRIO *** \n
-- Cliente: ${cliente1.nome} ${cliente1.sobrenome} 
-- Conta Ativa: ${cliente1.contaAtiva} \n`);

cliente1.msgContaAtiva()

