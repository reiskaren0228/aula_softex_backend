import { IGalinha } from './galinha';
import { IAnimal } from "./animal";

export interface IGalinha extends IAnimal {
    qtdPatas: number;
    interageVisita(): void; 
}

function patas() {
    const galinha: IGalinha = {
        tipo: 'Ave',
        nome: 'Cocoricó',
        idade: 3,
        porte: 'Pequeno',
        qtdPatas: 2,

      
    }
   }

class Galinha implements IGalinha {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public qtdPatas: number) {
    }

    interageVisita() {
        console.log(`A galinha ${this.nome} é muito dócil quando é acariciada`);
    }
}

function patas() {
    const galinha: IGalinha = new Galinha('Ave', 'Cocoricó', 3, 'Pequeno', 2);
    galinha.interageVisita();
}

patas();
