export interface IAnimal {
    tipo: string;
    nome: string;
    idade: number;
    porte: string;
}

export interface IAnimal {
    tipo: string;
    nome: string;
    idade: number;
    porte: string;
}

export interface IGirafa extends IAnimal {
    pescoçoComprido: boolean;
    interageVisita(): void;
}

export interface IMacaco extends IAnimal {
    gostaDeBananas: boolean;
    interageVisita(): void;
}

export interface IJabuti extends IAnimal {
    cascoResistente: boolean;
    interageVisita(): void;
}

class Girafa implements IGirafa {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public pescoçoComprido: boolean) {
    }

    interageVisita() {
        console.log(`A girafa ${this.nome} é amigável e tem um pescoço longo.`);
    }
}

class Macaco implements IMacaco {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public gostaDeBananas: boolean) {
    }

    interageVisita() {
        console.log(`O macaco ${this.nome} adora bananas e é brincalhão.`);
    }
}

class Jabuti implements IJabuti {
    constructor(public tipo: string, public nome: string, public idade: number, public porte: string, public cascoResistente: boolean) {
    }

    interageVisita() {
        console.log(`O jabuti ${this.nome} possui um casco resistente e se move devagar.`);
    }
}

function visitaAnimais() {
    const girafa: IGirafa = new Girafa('Mamífero', 'Girafa1', 5, 'Grande', true);
    const macaco: IMacaco = new Macaco('Mamífero', 'Macaco1', 3, 'Pequeno', true);
    const jabuti: IJabuti = new Jabuti('Réptil', 'Jabuti1', 10, 'Pequeno', true);

    girafa.interageVisita();
    macaco.interageVisita();
    jabuti.interageVisita();
}

visitaAnimais();


