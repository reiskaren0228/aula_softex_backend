class Animal {
    constructor(raca, genero, porte, castrado, filhote) {
        this.raca = raca;
        this.genero = genero;
        this.porte = porte;
        this.castrado = castrado;
        this.filhote = filhote;
    }

    castracao() {
        if (this.castrado) {
            console.log("Animal já castrado!!!");
        } else {
            console.log("*** ANIMAL ainda precisa ser castrado ***");
        }
    }

    idadeAnimal() {
        if (this.filhote) {
            console.log("O seu Animal é filhote e precisa ser vacinado com as doses necessárias!!!");
        } else {
            console.log("*** Parabéns, seu ANIMAL já está Vacinado!!! ***");
        }
    }

    static criarCachorro() {
        return new Animal("dalmata", "femea", "grande", true, false);
    }
}

const meuAnimal = Animal.criarCachorro();
meuAnimal.castracao();
meuAnimal.idadeAnimal();
