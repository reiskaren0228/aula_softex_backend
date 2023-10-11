class Sanduiche {
    getPreco() {
        return 0;
    }
}

class FrangoAssado extends Sanduiche {
    getPreco() {
        return 4.50;
    }
}

class DecoratorSanduiche extends Sanduiche {
    constructor(sanduiche) {
        super();
        this.sanduiche = sanduiche;
    }
}

class Pepperoni extends DecoratorSanduiche {
    constructor(sanduiche) {
        super(sanduiche);
    }

    getPreco() {
        return this.sanduiche.getPreco() + 0.99;
    }
}

class QueijoMucarelaRalado extends DecoratorSanduiche {
    constructor(sanduiche) {
        super(sanduiche);
    }

    getPreco() {
        return this.sanduiche.getPreco() + 2.00;
    }
}

let sanduiche = new FrangoAssado();
sanduiche = new Pepperoni(sanduiche);
sanduiche = new QueijoMucarelaRalado(sanduiche);

console.log(`Sanduíche: Frango Assado com Queijo Mussarela Ralado e Pepperoni`);
console.log(`O preço do sanduíche é: R$ ${sanduiche.getPreco()} reais`);
