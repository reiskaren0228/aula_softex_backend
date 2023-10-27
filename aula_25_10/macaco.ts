import { IAnimal } from './animal';

export interface IMacaco extends IAnimal {
    gostaDeBananas: boolean;
    interageVisita(): void;
}


class Macaco implements IMacaco {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public gostaDeBananas: boolean) {
    }

    interageVisita() {
        console.log(`O macaco ${this.nome} adora bananas, é brincalhão e gosta de interagir com os visitantes.`);
    }
}

