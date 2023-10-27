import { IGalinha } from "./galinha";
import { IGirafa } from "./girafa";
import { IJabuti } from "./jabuti";
import { IMacaco } from "./macaco";
import { ITubarao } from "./tubarao";

export function visitaAnimais() {
    const tubarao: ITubarao = tubarao('Peixe', 'Shark', 9, 'Grande', true);
    const galinha: IGalinha = new galinha('Ave', 'Cocoricó', 3, 'Pequeno', true);
    const girafa: IGirafa = new girafa('Mamífero', 'Pescoçuda', 5, 'Grande', true);
    const macaco: IMacaco = new macaco('Mamífero', 'King Kong', 3, 'Pequeno', true);
    const jabuti: IJabuti = new jabuti('Réptil', 'Tempo', 10, 'Pequeno', true);

    macaco.interageVisita();
    jabuti.interageVisita();
    girafa.interageVisita();
    galinha.interageVisita();
    tubarao.interageVisita();
}
