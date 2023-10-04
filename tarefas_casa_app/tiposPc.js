class Computador {
    constructor(ram, hdd, cpu, type) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
        this.type = type;
    }

    getRAM() {
        return this.ram;
    }

    getHDD() {
        return this.hdd;
    }

    getCPU() {
        return this.cpu;
    }

    getType() {
        return this.type;
    }

    toString() {
        return `Tipo: ${this.getType()}
RAM: ${this.getRAM()} GB
HDD: ${this.getHDD()} GB
CPU: ${this.getCPU()} GHz`;
    }
}

class PC extends Computador {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, "PC");
    }
}

class Server extends Computador {
    constructor(ram, hdd, cpu) {
        super(ram, hdd, cpu, "Server");
    }
}

class FabricaPC {
    criarComputador(tipo, ram, hdd, cpu) {
        if (tipo.toLowerCase() === "pc") {
            return new PC(ram, hdd, cpu);
        } else if (tipo.toLowerCase() === "server") {
            return new Server(ram, hdd, cpu);
        } else {
            throw new Error(`*** Esse tipo de computador é desconhecido: ${tipo} ***`);
        }
    }
}

const fabrica = new FabricaPC();

const pc = fabrica.criarComputador("PC", "8", "256", "3.2");
const server = fabrica.criarComputador("Server", "64", "1000", "1.0");

console.log("\nDetalhes do PC:\n" + pc);
console.log("\nDetalhes do Server:\n" + server);
