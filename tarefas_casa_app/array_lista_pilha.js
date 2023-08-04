// Considere o array [3, 7, 9, 1, 0]. O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem. Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

// 1 fila 

class array_fila {
    constructor() {
      this.items = [];
    }
  
    enfileirar(element) {
      this.items.push(element);
    }
  
    desenfileirar() {
      if (this.estaVazia()) {
        return null;
      }
      return this.items.shift();
    }
  
    estaVazia() {
      return this.items.length === 0;
    }
  }
  
  let fila = new array_fila();
  fila.enfileirar(3);
  fila.enfileirar(7);
  fila.enfileirar(9);
  fila.enfileirar(1);
  fila.enfileirar(0);
  
  while (!fila.estaVazia()) {
    console.log(fila.desenfileirar());
  }
  

  // 2 pilha 

  class array_pilha {
    constructor() {
      this.items = [];
    }
  
    empilhar(element) {
      this.items.push(element);
    }
  
    desempilhar() {
      if (this.estaVazia()) {
        return null;
      }
      return this.items.pop();
    }
  
    estaVazia() {
      return this.items.length === 0;
    }
  }
  
  let pilha = new array_pilha();
  pilha.empilhar(3);
  pilha.empilhar(7);
  pilha.empilhar(9);
  pilha.empilhar(1);
  pilha.empilhar(0);
  
  while (!pilha.estaVazia()) {
    console.log(pilha.desempilhar());
  }
  

   // 3 lista

   class lista_teste {
    constructor(dado) {
      this.dado = dado;
      this.proximo = null;
    }
  }
  
  class array_lista {
    constructor() {
      this.head = null;
    }
  
    add_lista_teste(dado) {
      let new_lista_teste = new lista_teste(dado);
      if (this.head === null) {
        this.head = new_lista_teste;
      } else {
        let atual = this.head;
        while (atual.proximo !== null) {
          atual = atual.proximo;
        }
        atual.proximo = new_lista_teste;
      }
    }
  
    del_lista_teste() {
      if (this.head === null) {
        return null;
      }
      let valorRemovido = this.head.dado;
      this.head = this.head.proximo;
      return valorRemovido;
    }
  
    vazia() {
      return this.head === null;
    }
  }
  
  let lista = new array_lista();
  lista.add_lista_teste(7);
  lista.add_lista_teste(3);
  lista.add_lista_teste(9);
  lista.add_lista_teste(1);
  lista.add_lista_teste(0);
  
  
  while (!lista.vazia()) {
    console.log(lista.del_lista_teste());
  }
  