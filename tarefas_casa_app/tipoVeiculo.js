class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone() {
        return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
    }

    represent() {
        return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
    }
}

class Carro extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, numeroPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.numeroPortas = numeroPortas;
    }

    clone() {
        const clone = super.clone();
        clone.numeroPortas = this.numeroPortas;
        return clone;
    }

    represent() {
        return super.represent() + `, Número de Portas: ${this.numeroPortas}`;
    }
}

class Moto extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindrada) {
        super(modelo, marca, cor, numeroRodas);
        this.cilindrada = cilindrada;
    }

    clone() {
        const clone = super.clone();
        clone.cilindrada = this.cilindrada;
        return clone;
    }

    represent() {
        return super.represent() + `, Cilindrada: ${this.cilindrada}cc`;
    }
}

class Aplicacao {
    criarArrayDeVeiculos() {
        const arrayVeiculos = [];

        const carro1 = new Carro("Sedan", "Renault", "Preto", 4, 4);
        const carro2 = new Carro("Esportivo", "Ferrari", "Vermelho", 4, 2);
        const carro3 = new Carro("SUV", "Jeep", "Verde", 4, 5);

        const moto1 = new Moto("Esportiva", "Yamaha", "Preta/Branca", 2, 1000);
        const moto2 = new Moto("Custom", "Harley-Davidson", "Preto", 2, 3500);
        const moto3 = new Moto("Street", "Honda", "Marrom/Vermelha", 2, 700);

        arrayVeiculos.push(carro1, carro2, carro3, moto1, moto2, moto3);

        return arrayVeiculos;
    }

    criarArrayDeClones(arrayVeiculos) {
        const arrayClones = [];

        for (const veiculo of arrayVeiculos) {
            const clone = veiculo.clone();
            arrayClones.push(clone);
        }

        return arrayClones;
    }
}

const app = new Aplicacao();
const veiculos = app.criarArrayDeVeiculos();
const clones = app.criarArrayDeClones(veiculos);

for (const clone of clones) {
    console.log(clone.represent());
}
