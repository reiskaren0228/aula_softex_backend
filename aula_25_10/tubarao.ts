import { IAnimal } from "./animal";
import { IGalinha } from "./galinha";

export interface ITubarao extends IGalinha {
    iscaViva: any;
    aquatico: boolean;
}

class Tubarao implements ITubarao {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public qtdPatas: number, public aquatico: boolean) {
    }

    iscaViva() {
        console.log(`O tubarão ${this.nome} se alimenta de peixes vivos diariamente`);
    }

    interageVisita() {
        console.log(`O tubarão ${this.nome} é dócil quando bem alimentado, caso contrário não é recomendado o contato`);
    }
}

function nada() {
    const tubarao: ITubarao = new Tubarao('Peixe', 'Shark', 9, 'Grande', 0, true);
    tubarao.interageVisita();
    tubarao.iscaViva();
}


nada();



