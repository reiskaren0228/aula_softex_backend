class Pato {
    grasnar() {
      return "Pato está grasnando";
    }
  
    voar() {
      return "Pato está voando";
    }
  }
  
  class Galinha {
    cacarejar() {
      return "Galinha está cacarejando";
    }
  
    bicar() {
      return "Galinha está bicando";
    }
  }
  
  class AdaptadorPato {
    constructor(pato) {
      this.pato = pato;
    }
  
    cacarejar() {
      return this.pato.grasnar();
    }
  
    bicar() {
      return this.pato.voar();
    }
  }
  
  class AdaptadorPatoDemo {
    static main() {
      const pato = new Pato();
      const galinha = new Galinha();
      const adaptadorPato = new AdaptadorPato(pato);
  
      console.log("Pato: " + pato.grasnar());
      console.log("Galinha: " + galinha.cacarejar());
      console.log("AdaptadorPato: " + adaptadorPato.cacarejar());
    }
  }
  
  AdaptadorPatoDemo.main();
  