import { IGalinha } from './galinha';
import { IAnimal } from "./animal";

export interface IGalinha extends IAnimal {
    qtdPatas: number;
}

function patas() {
    const galinha: IGalinha = {
        tipo: 'Ave',
        nome: 'Cocoricó',
        idade: 3,
        porte: 'Pequeno',
        qtdPatas: 2,

      
    }
    galinha.interageVisita();
}


class interageVisita implements IAnimal {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string) {
        console.log(` A galinha ${nome} é muito dócil quando é acariciada`);
    
    }
   
}

patas();