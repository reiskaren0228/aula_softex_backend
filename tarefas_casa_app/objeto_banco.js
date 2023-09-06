class Banco {
    constructor(conta, saldo){
        this.conta = conta;
        this.saldo = saldo;
    }


    verificandoSaldo() {
        return this.saldo;
    }

    deposito(valor) {
        if (valor > 0) {
            this.saldo += valor;
             return `Seu deposito de R$ ${valor} foi realizado com sucesso! \n** Saldo atual na conta ${newConta.conta} =>  R$ ${this.saldo} reais \n`
        } else {
            return `*** Valor inválido para depósito ***`
        }
    }

    saque(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
                return `Saque de R$ ${valor} foi efetuado com Sucesso!! \n** Saldo atual na conta ${newConta.conta} => R$ ${this.saldo} reais`
            } else {
                return `*** Saque inferior ao saldo da conta! Por favor verique seu Saldo antes de um novo Saque ***`
        }
    }
}

const newConta = new Banco("02228-5", 2500.0);

console.log(`\n--> Número da Conta: ${newConta.conta}`);
console.log(`--> Saldo da Conta: ${newConta.verificandoSaldo()} \n`);

const newDeposito = newConta.deposito(1500.0);
console.log(newDeposito);

const newSaldo = newConta.saque(350.00);
console.log(newSaldo);

console.log(`\n *** Saldo atual: R$ ${newConta.verificandoSaldo()} reais`);