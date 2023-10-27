import { IAnimal } from './animal';

export interface IJabuti extends IAnimal {
    cascoResistente: boolean;
    interageVisita(): void;
}


class Jabuti implements IJabuti {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public cascoResistente: boolean) {
    }

    interageVisita() {
        console.log(`O jabuti ${this.nome} possui um casco muito resistente, se move devagar e não nada.`);
    }
}

