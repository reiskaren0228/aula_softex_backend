function contagem_bomba(segundos) {
    console.log("Iniciando a contagem regressiva...");
    
    const numero_tempo = setInterval(() => {
        if (segundos > 0) {
          console.log(segundos);
          segundos--;
        } else {
          clearInterval(numero_tempo);
          console.log("Correeeeeeeeeeeeeee....BUMMMMMMMMMMM!");
      }
    }, 1000);
  }
  
  const contagem_bomba_explodir = parseInt(prompt("Informe quantos segundos você quer para explodir a bomba: "));
  contagem_bomba(contagem_bomba_explodir );