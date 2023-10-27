import { IAnimal } from "./animal";

export interface IGirafa extends IAnimal {
    pescoçoComprido: boolean;
    interageVisita(): void;
}


class Girafa implements IGirafa {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public pescoçoComprido: boolean) {
    }

    interageVisita() {
        console.log(`A girafa ${this.nome} é um animal amigável, tem um pescoço longo e como folhas.`);
    }
}


