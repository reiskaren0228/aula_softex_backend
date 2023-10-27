import * as galinha from './galinha';
import { IAnimal } from "./animal";

export interface IGalinha extends IAnimal {
    qtdPatas: number;
    interageVisita(): void; 
}

class Galinha implements galinha.IGalinha {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public qtdPatas: number) {
    }

    interageVisita() {
        console.log(`A galinha ${this.nome} é muito dócil quando é acariciada`);
    }
}

function patas(): void {
    const galinha: galinha.IGalinha = new Galinha('Ave', 'Cocoricó', 3, 'Pequeno', 2);
    galinha.interageVisita();
}

patas();
