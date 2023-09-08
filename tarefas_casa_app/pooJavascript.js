class Animal {
    raca;
    genero;
    porte;
    castrado;
    filhote;

    castracao() {
        if (this.castrado) {
            console.log("Animal já está castrado!!!");
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
}

const meuAnimal = new Animal();
meuAnimal.raca = "dalmata";
meuAnimal.genero = "femea";
meuAnimal.porte = "grande";
meuAnimal.castrado = true;
meuAnimal.filhote = false;


meuAnimal.castracao();
meuAnimal.idadeAnimal();
