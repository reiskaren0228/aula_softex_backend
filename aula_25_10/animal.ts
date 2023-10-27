import { visitaAnimais } from "./visitaAnimais";

export interface IAnimal {
    tipo: string;
    nome: string;
    idade: number;
    porte: string;
}

visitaAnimais();


