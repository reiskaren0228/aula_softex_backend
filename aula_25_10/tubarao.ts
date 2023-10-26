import { IAnimal } from "./animal";
import { IGalinha } from "./galinha";

export interface ITubarao extends IGalinha {
    aquatico: boolean;
}

function nada() {
    const tubarao: ITubarao = {
        tipo: 'Peixe',
        nome: 'Shark',
        idade: 9,
        porte: 'Grande',
        qtdPatas: 0,
        aquatico: true,
    }
}

class interageVisita implements IGalinha {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public qtdPatas: number, public aquatico: boolean) {
        console.log(` O tubarão ${nome} é dócil quando bem alimentado, caso contrário não é recomendado o contato`);

    }
}

galinha.interageVisita();

class iscaViva implements IAnimal {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public qtdPatas: number, public aquatico: boolean) {
        console.log(` O ${nome} se alimenta de peixes vivos diaramente`);

    }
}

tubarao.iscaViva();
